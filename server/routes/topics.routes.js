const router = require('express').Router();
const verifyAccesToken = require('../middleware/verifyAccessToken');
const { getAllTopics, getOneTopic } = require('../controller/topicsConrtroller');


router
.get('/',getAllTopics)
.get('/:id', getOneTopic)

module.exports = router