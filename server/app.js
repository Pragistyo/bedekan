const express    = require('express');
const cors       = require('cors');
const logger     = require('morgan');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
// mongoose.connect('mongodb://localhost/bedekan',(err)=>{
mongoose.connect('mongodb://admin:123@cluster0-shard-00-00-jgxqq.mongodb.net:27017,cluster0-shard-00-01-jgxqq.mongodb.net:27017,cluster0-shard-00-02-jgxqq.mongodb.net:27017/bedekan?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',(err)=>{

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
