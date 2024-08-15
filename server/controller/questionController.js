const questionService = require('../service/questionsService')



const getAllQuestions = async (req, res) => {
    try {
        const allQuestions = await questionService.getAllQuestions()
        res.json(allQuestions)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Failed to get all questions'})
    }
}



module.exports = {
    getAllQuestions,
}