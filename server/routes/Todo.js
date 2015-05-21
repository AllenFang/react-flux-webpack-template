var express = require("express");
var router = express.Router();

var todos = [
  {id: 1, name: "todo1"},
  {id: 2, name: "todo2"},
  {id: 3, name: "todo3"},
  {id: 4, name: "todo4"}
];

var LAST_ID = todos.length;

router.get("/", function(req, res){
  res.set('Content-Type', 'application/json');
  res.json(todos);
});

router.post("/", function(req, res){
  res.set('Content-Type', 'application/json');
  todos.push({
    id: ++LAST_ID,
    name: req.body.name
  });
  res.json(todos);
});

module.exports = router;
