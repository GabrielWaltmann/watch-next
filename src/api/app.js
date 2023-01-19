require('dotenv').config()
const express = require('express')
const bcrypt = require('bcrypt')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const { default: mongoose } = require('mongoose')

// * variables
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const app = express()

// * Eneable json read
app.use(express.json())
app.use(cors())

// * models
const User = require('./models/User')

// ? Open Router - Public Route
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'enviando dados!' })
})

// * Private Route
app.get('/user/:id', checkToken, async (req, res) => {
    const id = req.params.id

    //cheeck if user exist
    const user = await User.findById(id, '-password')
    if (!user) {
        return res.status(404).json({ msg: 'Usuário não encontrado' })
    }

    res.status(200).json({ user })

})
function checkToken(req, res, next) {
    const authHeader = req.headers['authorization']

    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({ msg: 'Acesso negado!' })
    }

    try {
        const SECRET = process.env.SECRET
        jwt.verify(token, SECRET)

        next()
    }
    catch {
        return res.status(401).json({ msg: 'Acesso negado!' })
    }
}

// ? Register User
app.post('/auth/register', async (req, res) => {
    const { username, email, password, confirmPassword } = req.body

    // validations
    if (!username) return res.status(422).json({ msg: 'O nome de usuário é obrigatório!' })
    if (!email) return res.status(422).json({ msg: 'O email de usuário é obrigatório!' })
    if (!password || !confirmPassword) return res.status(422).json({ msg: 'A senha é obrigatório!' })
    if (password !== confirmPassword) return res.status(422).json({ msg: 'As senhas devem ser iguais!' })

    // check if user exist 
    const userExists = await User.findOne({ email: email })
    if (userExists) return res.status(422).json({ msg: 'Já existe um usuário com este email!' })

    // create password
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    // create user
    const user = new User({
        name: username,
        email,
        password: passwordHash,
        titles: []
    })

    try {
        await user.save()

        res.status(201).json({ msg: 'Usuario criado com sucesso' })
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
})

// ? Login User
app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body

    // validations 
    if (!email) return res.status(422).json({ msg: 'O email de usuário é obrigatório!' })
    if (!password) return res.status(422).json({ msg: 'A senha é obrigatório!' })

    //check if user exist
    const user = await User.findOne({ email: email })
    if (!user) return res.status(422).json({ msg: 'Usuário não encontrado!' })

    //check if password match
    const ckeckPassword = await bcrypt.compare(password, user.password)
    if (!ckeckPassword) return res.status(422).json({ msg: 'Senha Inválida!' })

    try {
        const secret = process.env.SECRET

        const token = jwt.sign({
            id: user.id
        }, secret)

        res.status(200).json({ msg: "Autenticação realizada com sucesso", token, email })

    } catch (err) {
        res.status(500).json({ msg: err })
    }
})

// ? get id by email
app.post('/auth/id', async (req, res) => {
    const { email } = req.body

    // validations 
    if (!email) return res.status(422).json({ msg: 'O email de usuário é obrigatório!' })

    //check if user exist
    const user = await User.findOne({ email: email })
    if (!user) return res.status(422).json({ msg: 'Usuário não encontrado!' })

    try {
        const id = user.id

        res.status(200).json({ msg: "id encontrado", id })

    } catch (err) {
        res.status(500).json({ msg: err })
    }
})

// ? add title to list
app.patch('/user/list/add', async (req, res) => {
    const { id, title } = req.body

    // validations 
    if (!id) return res.status(422).json({ msg: 'O id de usuário é obrigatório!' })
    if (!title) return res.status(422).json({ msg: 'Os dados do titulo são obrigatório!' })

    //check if user exist
    const user = await User.findOne({ id: id })
    if (!user) return res.status(422).json({ msg: 'Usuário não encontrado!' })

    try {
        await User.findOneAndUpdate(
            { id: id },
            {$push: {titles: title}}
        );
        res.status(200).json({ user })

    } catch (err) {
        res.status(500).json({ msg: err })
    }
})

// ? get list
app.get('/user/list/:id', checkToken, async (req, res) => {
    const id = req.params.id

    //check if user exist
    const user = await User.findById(id, '-password')
    if (!user) {
        return res.status(404).json({ msg: 'Usuário não encontrado' })
    }
    const list = user.titles
    res.status(200).json({ list })

})

// ? set title as watched or watch
app.patch('/user/list/title/:id', checkToken, async (req, res) => {
    const { id, name, watched } = req.body

    // validations 
    if (!id || !name) return res.status(422).json({ msg: 'O id de usuário é obrigatório!' })
    if (!name) return res.status(422).json({ msg: 'O nome do titulo é obrigatório!' })
    if (watched === null) return res.status(422).json({ msg: 'watched é obrigatório' })

    //check if user exist
    const user = await User.findOne({ id: id })
    if (!user) return res.status(422).json({ msg: 'Usuário não encontrado!' })

    try {
        const list = user.titles

    	list.map(item =>{
            if(name === item.name){
                
                item.watched = watched
            }
        })
        await User.findOneAndUpdate(
            { id: id },
            {titles: list}
        );
        res.status(200).json({ user })


    } catch (err) {
        res.status(500).json({ msg: err })
    }
})

// ? delete title from list
app.patch('/user/list/remove/:id', checkToken, async (req, res) => {
    const { id, name } = req.body

    // validations 
    if (!id) return res.status(422).json({ msg: 'O id de usuário é obrigatório!' })
    if (!name) return res.status(422).json({ msg: 'Os dados do titulo são obrigatório!' })

    //check if user exist
    const user = await User.findOne({ id: id })
    if (!user) return res.status(422).json({ msg: 'Usuário não encontrado!' })

    try {
        const list = user.titles

    	list.map(item =>{
            const index = item.name.indexOf(name);

            if(index !== -1 ){
                list.splice(index+1, 1)
            }
        })
        await User.findOneAndUpdate(
            { id: id },
            {titles: list}
        )
        res.status(200).json({ list })
        


    } catch (err) {
        res.status(500).json({ msg: err })
    }
})


// ? connect MongoDB
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@watch-next-api.klszmgz.mongodb.net/users?retryWrites=true&w=majority`).then(() => {
    console.log('Conectado ao MongoDB!')
    app.listen(4000)
}).catch((err) => console.log(err))
