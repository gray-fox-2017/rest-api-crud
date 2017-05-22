const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./routes/api');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/api',api)
app.use('/',(req,res)=>{
  res.redirect('https://github.com/aldyadk/rest-api-crud')
})

app.listen(process.env.PORT||3000,()=>{
  console.log('udah jalan cuy');
})