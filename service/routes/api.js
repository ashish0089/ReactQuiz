var express = require('express');
var router = express.Router();


router.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

var questions =  [{
  "id": 1,
  "type": "MCQ",
  "question": "Which game did 'Sonic  The Hedgehog' make his first appearance in?",
  "options": {
      "op1": "Sonic the hedgehog",
      "op2": "Super Mario 64",
      "op3": "Mega Man"
  },
  "answer": "op1"

},
{
  "id": 2,
  "type": "Boolean",
  "question": "Igneous rocks are formed by excessive heat and pressure",
  "options": {
      "op1": "True",
      "op2": "False"
  },
  "answer": "op1"
},
{
  "id": 3,
  "type": "Text",
  "question": "How many points is the Z tiles worth in scrabble?"
},
{
  "id": 4,
  "type": "MCQ",
  "question": "India national game?",
  "options": {
      "op1": "Hockey",
      "op2": "Criket",
      "op3": "Football"
  },
  "answer": "op1"

},
{
  "id": 5,
  "type": "Boolean",
  "question": "India is democratic country",
  "options": {
      "op1": "True",
      "op2": "False"
  },
  "answer": "op1"
},
{
  "id": 6,
  "type": "Text",
  "question": "The no of state in India is?"
}

]

router.get('/questions', function (req, res) {
  res.end(JSON.stringify(questions));
})

module.exports = router;
