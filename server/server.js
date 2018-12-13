var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('mongoose');
var {Todo} = require('../models/todo.js');
var {User} = require('../models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    console.log('req body', req.body);
    todo.save().then((doc) => {
        //console.log("Saved a new todo", doc);
        res.send(doc);
    }, (e) => {
        console.log("error on saving todo", e);
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log("Started server on port 3000")
});

module.exports = {app};

