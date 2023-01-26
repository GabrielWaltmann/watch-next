const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// * models
const User = require('../../models/User')

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

router.get('/list/:id', checkToken, async (req, res) => {
    const id = req.params.id
    
    //check if user exist
    const user = await User.findById( id )
    if (!user) {
        return res.status(404).json({ msg: 'Usuário não encontrado' })
    }
    const list = user.titles
    res.status(200).json({ list })

})

module.exports = router;
