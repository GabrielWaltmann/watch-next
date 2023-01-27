const express = require("express");
const router = express.Router();

// * models
const User = require('../../models/User')

router.patch('/list/watched/', async (req, res) => {
    const { id, name } = req.body

    // validations 
    if (!id) return res.status(422).json({ msg: 'id não está definido!' })
    else if (!name) return res.status(422).json({ msg: 'name não está definido!' })

    //check if user exist
    const user = await User.findById(id)
    if (!user) return res.status(422).json({ msg: 'Usuário não encontrado!' })

    try {
        const Alltitles = user.titles

        const newTitles = Alltitles.map((title) => {
            if (title.name === name) {
                title.watched === true 
                ? title.watched === false 
                : title.watched === true
                return (title)
            }else {return (title)}
        })

        await user.update({ titles: newTitles })
        .then(()=>{
            user.save()
            res.status(200).json({ user })
        }).catch ((err)=> {
            res.status(500).json({ msg: err })
        })


    } catch (err) {
        res.status(500).json({ msg: err })
    }
})

module.exports = router;