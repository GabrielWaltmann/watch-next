const express = require("express");
const router = express.Router();

// * models
const User = require('../../models/User')

router.patch('/list/remove/', async (req, res) => {
    const { id, name } = req.body

    // validations 
    if (!id) return res.status(422).json({ msg: 'O id de usuário é obrigatório!' })
    if (!name) return res.status(422).json({ msg: 'O nome do titulo são obrigatório!' })

    //check if user exist
    const user = await User.findById( id )
    if (!user) return res.status(422).json({ msg: 'Usuário não encontrado!' })

    try {
        const titles = user.titles

    	titles.map((item, index) =>{
            if(name === item.name){
                titles.splice(index, 1)
            }
        })
        
        await user.save()
        res.status(200).json({ titles })
    

    } catch (error) {
        res.status(500).json({ msg: error })
    }
})

module.exports = router;
