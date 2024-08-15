const {Topic} = require('../db/models')
const {Question} = require('../db/models')


class TopicService { 
    async getAllTopics() {
        try {
            const allTopics = await Topic.findAll({
                include: {
                    model: Question
                }
            }
            )
            return allTopics
        } catch (error) {
            console.error(error)
            throw new Error('Failed to get all topics')
        }
    }

    async getOneTopic(id) {
        try {
            const oneTopic = await Topic.findByPk(id,{
                include: {
                    model: Question
                }
            })
            return oneTopic
        } catch (error) {
            console.error(error)
            throw new Error('Failed to get one topic')
        }
    }

    async createTopic(topic) {
        try {
            const newTopic = await Topic.create(topic)
            return newTopic
        } catch (error) {
            console.error(error)
            throw new Error('Failed to create topic')
        }
    }

    async deleteTopic(id) {
        try {
            const deletedTopic = await Topic.destroy({where: {id}})
            return deletedTopic
        } catch (error) {
            console.error(error)
            throw new Error('Failed to delete topic')
        }
    }
}




module.exports = new TopicService()