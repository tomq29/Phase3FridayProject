const router = require('express').Router();
const apiV1 = require('./api/v1/index.routes')



router.use('/v1', apiV1)




module.exports = router