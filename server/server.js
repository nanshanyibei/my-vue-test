const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// work with express
const server = require('http').Server(app)
const connection = require('./db')

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})

app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.send('<h1>Hello World</h1>')
})

app.post('/sign-up', function (req, res) {
  const {emailAddress, fullName, passWord, userType} = req.body
  let tableName
  if (userType === 'employee') {
    tableName = 'employee'
  } else {
    tableName = 'manager'
  }
  console.log('emailAddress, fullName, passWord', emailAddress, fullName, passWord, userType)
  var fields = ['emailAddress', 'fullName', 'passWord']
  var values = [emailAddress, fullName, passWord]
  var sql = 'INSERT INTO ??(??) VALUES (?)'
  connection.query(sql, [tableName, fields, values], function (error, results, f) {
    if (error) throw error
    console.log(results)
    return res.json('ok')
  })
})

app.post('/login', function (req, res) {
  const {emailAddress, passWord, userType} = req.body
  let tableName
  if (userType === 'employee') {
    tableName = 'employee'
  } else {
    tableName = 'manager'
  }
  console.log('test', emailAddress, passWord)
  var fields = ['emailAddress', 'passWord']
  var sql = 'SELECT ?? FROM ?? WHERE emailAddress = ? && passWord = ?'
  connection.query(sql, [fields, tableName, emailAddress, passWord], function (error, results, f) {
    if (error) throw error
    console.log(results)
    return res.json('ok')
  })
})

server.listen(9093, function () {
  console.log('Node app start at port 9093')
})
