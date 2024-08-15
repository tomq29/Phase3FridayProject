const router = require('express').Router();
const {Topic} = require('../../../db/models')
const {Question} = require('../../../db/models')



router.route('/')
.get( async(req, res) => {
    const gellAllTopics = await Topic.findAll({
        include: {
            model: Question
        }
    })
    res.status(200).json(gellAllTopics)
})

router.route('/:id')
.get( async(req, res) => {
    const gellOneTopics = await Topic.findByPk(req.params.id, {
        include: {
            model: Question
        }
    })
    res.status(200).json(gellOneTopics)
})



module.exports = router