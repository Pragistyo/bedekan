const question = require('../models/Question');

console.log('======== masuk controllers');

function getData(req,res){
  console.log('==== masuk method getData');
    question.find({})
    .then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send('ERROR -->'+err)
    })
}

function postData(req,res){
  console.log('==== masuk method postData');
  question.create({
    question : req.body.question,
    choice   : req.body.choice  ,
    answer   : req.body.answer
  })
  .then(result=>{
    res.send(result)
  })
  .catch(err=>{
    res.send('ERROR ====> '+ err)
  })
}

function singleQuestion(req,res){
  console.log('==== masuk method singleQuestion');
  question.findOne({_id: req.params.id})
  .then(result=>{
    res.send(result)
  })
  .catch(err=>{
    res.send('ERROR ----> '+ err)
  })
}

function editQuestion(req,res){
  console.log('==== masuk method editQuestion');
  question.findOneAndUpdate(
    {_id:req.params.id},
    {
      question: req.body.question,
      answer: req.body.answer,
      choice: req.body.choice
    })
    .then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send('ERROR ---> '+err)
    })
}

function deleteQuestion(req,res){
  console.log('==== masuk method deleteQuestion');
  question.remove({_id:req.params.id})
  .then(result=>{
    res.send({
      msg:'REMOVED',
      data: result
    })
  })
  .catch(err=>{
   res.send('ERROR ===> '+ err)
  })
}



module.exports = {
  getData,
  postData,
  singleQuestion,
  editQuestion,
  deleteQuestion
}
