const express = require("express");
const router = express.Router();
const app = express();
const jwt = require('jsonwebtoken')

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

router.get("/user/:id", checkToken, async (req, res, next) => {
  const id = req.params.id

    //cheeck if user exist
    const user = await User.findById(id, '-password')
    if (!user) {
        return res.status(404).json({ msg: 'Usuário não encontrado' })
    }

    res.status(200).json({ user })
});

module.exports = router;
