const router = require('express').Router();
const {User}= require('../db/models');


router
.put('/:id', async (req, res) => {
    try {
        const {maxScore} = req.body
        const {id} = req.params
        const [updateScore] = await User.update({maxScore}, {where: {id}})
        updateScore? res.status(200).json(updateScore): res.status(500).json({error: 'Failed to update score'})
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})



module.exports = router