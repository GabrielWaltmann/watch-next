const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// * models
const User = require('../../models/User')

router.post('/user/login', async (req, res) => {
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

        res.status(200).json({ msg: "Autenticação realizada com sucesso", token, id: user.id })

    } catch (err) {
        res.status(500).json({ msg: err })
    }
})

module.exports = router;
