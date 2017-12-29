var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('client/build'));
app.use(require('./client/controllers/index'));

MongoClient.connect('mongodb://localhost:27017/portfolio', function(err, client){
  if(err){
    return console.log(err);
  }
  db = client.db('portfolio');
  console.log('Connected to DB');

  app.listen(3000, function() {
    console.log('App running on port ' + this.address().port);
  });
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/index.html');
});
