const router = require('express').Router();
const verifyAccesToken = require('../middleware/verifyAccessToken');
const { getAllQuestions } = require('../controller/questionController');

router
.get('/', getAllQuestions)



module.exports = router