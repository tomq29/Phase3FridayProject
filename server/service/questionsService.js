const {Question} = require('../db/models')


class QuestionService { 
    async getAllQuestions() {
        try {
            const allQuestions = await Question.findAll( )
            return allQuestions
        } catch (error) {
            console.error(error)
            throw new Error('Failed to get all questions')
        }
    }
}


module.exports = new QuestionService()