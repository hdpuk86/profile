var express = require('express');
var router = new express.Router();

var projectsRouter = new express.Router();

projectsRouter.get('/', function(req, res){
  db.collection('projects').find().toArray(function(err, results){
    if(err){
      return console.log(err);
    }
    res.json(results);
  });
});

module.exports = projectsRouter;
