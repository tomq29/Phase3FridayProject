const router = require('express').Router();
const testRouter = require('./testing.routes')

router.use('/test', testRouter)


module.exports = router