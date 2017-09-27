const mongoose = require('mongoose');

mongoose.connect('mongodb://lalapo:123@ds149874.mlab.com:49874/junkfood', {useMongoClient:true});


let repoSchema = mongoose.Schema({
  food: String,
  calories: Number,
  img: String
});

let Food = mongoose.model('Food', repoSchema);

let save = (data) => {
  console.log('database', data)
  Food.create({
    food: data.food,
    calories: data.calories,
    img: data.img
  })
}

let dig = (callback) => {
  Food.find((err, food) => {
    callback(food);
  })
}

module.exports.save = save;
module.exports.dig = dig;
