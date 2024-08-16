const topicService = require('../service/topicsService')



const getAllTopics = async (req, res) => {
    try {   
        const allTopics = await topicService.getAllTopics()
        res.json(allTopics)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Failed to get all topics'})
    }
}

const getOneTopic = async (req,res)=> {
    try {
        const oneTopic = await topicService.getOneTopic(req.params.id)
        res.json(oneTopic)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Failed to get one topics'})
    }
}



module.exports = {
    getAllTopics,
    getOneTopic,
}