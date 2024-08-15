const router = require('express').Router();
const authRouter = require('./auth.routes')
const topicsRouter = require('./topics.routes')
const questionsRouter = require('./question.routes')
const scoreRouter = require('./score.routes');
const tokenRouter = require('./token.routes');

router.use('/auth', authRouter)
router.use('/topics', topicsRouter)
router.use('/questions', questionsRouter)
router.use('/score', scoreRouter)
router.use('/tokens', tokenRouter)




module.exports = router