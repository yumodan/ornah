var express = require('express');
var cookieparser = require('cookie-parser');
var bodyParser = require('body-parser');
var Firebase = require('firebase');
//var question = require('/models/questions.js')
var yourfate = '';


var app = express();

var port = process.env.PORT || 3000;


var db = new Firebase('https://or-nah.firebaseio.com/question');








app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/views"));

app.get('/', function (req, res) {
  res.redirect('/layout.html');   //create login page in ejs format
})

app.get('/getAllQuestions', function (req, res){
  res.send('hello')
})

app.get('/client/questions.js', function(req, res){
  res.sendFile('client/questions.js');
})


app.post('/ornah', function(req, res){
  db.push(req.body);

  //rest does not work but its okay
  yourfate = Math.floor((Math.random() * 10) + 1);
  if(yourfate > 5){
    res.render('no');
  }
  if(yourfate <= 5){
    res.render('yeah');
  }
})

app.get('/ornah', function(req, res){
  //console.log(req.body);
  yourfate = Math.floor((Math.random() * 10) + 1);
  if(yourfate > 5){
    res.render('no');
  }
  if(yourfate <= 5){
    res.render('yeah');
  }
})



app.listen(port);
// mongoose.connect('mongodb://localhost/myApp')

module.exports.app= app;
module.exports.yourfate = yourfate;