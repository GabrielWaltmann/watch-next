const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt')

// * models
const User = require('../../models/User')

router.post('/user/register', async (req, res) => {
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

module.exports = router;
