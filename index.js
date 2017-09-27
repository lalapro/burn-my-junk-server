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
    let exists = false;
    foodList.forEach(food => {
      if (food.food === req.food && !exists) {
        exists = true;
      }
    });
    if (exists) {
      db.save(req.body);
    }
  });
});

// app.use need routes

app.set('port', process.env.PORT);





app.listen(app.get('port'))
