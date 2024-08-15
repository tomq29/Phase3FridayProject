const router = require('express').Router();
const authRouter = require('./auth.routes')
const topicsRouter = require('./topics.routes')
const questionsRouter = require('./question.routes')
const scoreRouter = require('./score.routes')

router.use('/auth', authRouter)
router.use('/topics', topicsRouter)
router.use('/questions', questionsRouter)
router.use('/score', scoreRouter)




module.exports = router