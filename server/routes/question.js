const express  = require('express');
const router   = express.Router()
const question = require('../controllers/question')

console.log('========= masuk router');

router.get('/', question.getData);
router.post('/', question.postData);
router.get('/:id', question.singleQuestion);
router.put('/:id', question.editQuestion);
router.delete('/:id', question.deleteQuestion)



module.exports = router
