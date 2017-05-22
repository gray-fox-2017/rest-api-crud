const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const api = require('./routes/api');

app.use(bodyParser.urlEncoded({extended:false}))

app.use('/api',api)

app.listen(3000,()=>{
  console.log('udah jalan cuy');
})