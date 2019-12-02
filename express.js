// importing node and express modules :
/*
const express = require('express')
const path = require('path')

const app = express()
const port = 4030

app.get('/index.html', function(req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));
 });

 app.get('/convert.js',function(req,res){
   res.sendFile(path.join(__dirname + '/convert.js'));
 });
app.get('/', function(req,res){
  res.redirect('index.html');
});
app.listen(4030)


*/
//MySQL Exercise

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 4030;
const fs= require('fs')
var mysql = require('mysql');
const http= require("http")
//const cookieParser= require('cookie-parser')

//app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/index.html', function(req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));
 });

 app.get('/convert.js',function(req,res){
   res.sendFile(path.join(__dirname + '/convert.js'));
 });
app.get('/', function(req,res){
  res.redirect('index.html');
});

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'middleware'
})

connection.connect(function(err){
  if(err) {
    console.log('error connecting: ' + err);
    return;
  }

  console.log('Connected..');
})

app.post('/save', function(req, res){
  //var amt = res.body.amt;
  res.send("Your data is logged in.");
  let convertSave = req.body;
  console.log(convertSave);
  //var sql = "`INSERT INTO converter`(`euro_amount`, `customer`, `currency`,`converted_amount)VALUES ('"+amt+"','"+name+"','"+cur+"','"+converted+"')";
  var sql = "INSERT INTO converter SET ?"
  connection.query(sql,convertSave, function(err){
    if(err) {
      throw (err)
    }
    res.send("save succesful"+req.body.sql);
  });
});

//connection.end();

app.listen(port);