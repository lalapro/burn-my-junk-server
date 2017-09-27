const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());



app.get('/food', (req, res) => {
  // axios.get
  db.dig(food => res.send(food));
})

app.post('/food', (req, res) => {
  db.dig(foodList => {
    let exists = foodList.some(item => {
      return item.food === req.food
    });
    if (!exists) {
      db.save(req.body);
    }
  });
});

// app.use need routes

app.set('port', process.env.PORT);





app.listen(app.get('port'))
