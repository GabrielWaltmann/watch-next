const express = require("express");
const router = express.Router();

// * models
const User = require('../../models/User')

router.patch('/list/watched/', async (req, res) => {
    const { id, name, watched } = req.body

    // validations 
    if (!id) return res.status(422).json({ msg: 'id não está definido!' })
    else if (!name) return res.status(422).json({ msg: 'name não está definido!' })
    else if (!watched) return res.status(422).json({ msg: 'watched não está definido!' })

    //check if user exist
    const user = await User.findById( id )
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

module.exports = router;