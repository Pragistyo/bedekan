const express    = require('express');
const cors       = require('cors');
const logger     = require('morgan');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
mongoose.connect('mongodb://localhost/bedekan',(err)=>{
  if(!err){
    console.log('MONGOOSE CONNECTED');
  }else{
    console.log('NOT CONNECT MONGOOSE');
  }
})

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


const question = require('./routes/question');

app.use('/question',question);



app.listen(3000,()=>{
  console.log('Port 3000, server !');
})

module.exports = app;
