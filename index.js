const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());



app.get('/food', (req, res) => {
  // axios.get
})

app.post('/food', (req, res) => {
  console.log('in here server')
  res.send('hi');
})

// app.use need routes

app.set('port', process.env.PORT);





app.listen(app.get('port'))
