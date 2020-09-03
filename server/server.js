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
  const {userName, passWord, firstName, lastName, emailAddress, phoneNo, createDate, ifAdmin} = req.body
  var fields = ['userName', 'passWord', 'firstName', 'lastName', 'emailAddress', 'phoneNo', 'createDate', 'ifAdmin']
  var values = [userName, passWord, firstName, lastName, emailAddress, phoneNo, createDate, ifAdmin]
  var sql = 'INSERT INTO ??(??) VALUES (?)'
  connection.query(sql, ['users_list', fields, values], function (error, results, f) {
    if (error) throw error
    console.log(results)
    return res.json({code: 0, msg: 'You have log up succeed!'})
  })
})

app.post('/login', function (req, res) {
  const {emailAddress, passWord, ifAdmin} = req.body
  const fields = ['emailAddress', 'passWord', 'ifAdmin']
  var sql = 'SELECT ?? FROM ?? WHERE emailAddress = ?'
  connection.query(sql, [fields, 'users_list', emailAddress], function (error, results, f) {
    if (error) throw error
    console.log('results', results[0], typeof (results[0]))
    if (results[0].passWord === passWord) {
      return res.json({code: 0, data: results})
    }
    return res.json({code: 1, msg: 'Wrong EmailAddress or Wrong PassWord'})
  })
})

app.post('/update-personal-message', function (req, res) {
  const {userName, phoneNo, emailAddress} = req.body
  var sql = `UPDATE users_list SET userName=${userName},phoneNo=${phoneNo} WHERE emailAddress=${emailAddress};`
  connection.query(sql, function (error, results, f) {
    if (error) throw error
    console.log(results)
    return res.json({code: 0, msg: 'You have update your message succeed!'})
  })
})

server.listen(9093, function () {
  console.log('Node app start at port 9093')
})
