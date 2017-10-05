const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

console.log('==== masuk model');
var questionSchema = new Schema({

  question:String,
  choice  :[],
  answer  :String

})

var question = mongoose.model('question',questionSchema)

module.exports = question
