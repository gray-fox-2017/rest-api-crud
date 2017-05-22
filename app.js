const express = require('express')
const app = express()

var bodyParser = require('body-parser')
var users = require('./routes/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/users', users);


app.listen(3000)
module.exports = app;