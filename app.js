const express = require('express')

const app = express()
// const route = express.Router()
const bodyParser = require('body-parser')
const user = require('./routes/user')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use('/', function(req, res, next){
//   res.send("hai")
// })


app.use('/', user)


app.listen(3000)

module.exports = app
