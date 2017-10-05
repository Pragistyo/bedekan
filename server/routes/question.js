const express  = require('express');
const router   = express.Router()
const question = require('../controllers/question')

console.log('========= masuk router');

router.get('/', question.getData)



module.exports = router
