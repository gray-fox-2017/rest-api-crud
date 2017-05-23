var express = require('express')
var bodyParser = require('body-parser')

var sequelize = require('sequelize')
var users = require('./routes/users')
var app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use('/api/users', users)

app.listen(3000, function(){
  console.log('Connected to port 3000')
})
