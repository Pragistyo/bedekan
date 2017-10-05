const question = require('../models/Question');

console.log('======== masuk controllers');
function getData(req,res){
    question.find({})
    .then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send('ERROR -->'+err)
    })
}


module.exports = {
  getData
}
