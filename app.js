const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./routes/api');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/',(req,res)=>{
  res.send('asd')
})
app.use('/api',api)

app.listen(3000,()=>{
  console.log('udah jalan cuy');
})