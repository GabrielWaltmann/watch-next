const express = require("express");
const router = express.Router();

// * models
const User = require('../../models/User')

router.patch('/list/add', async (req, res) => {
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

module.exports = router;
