var mongoose         = require('mongoose');

var celebSchema      = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  profession: String
});

var Celeb = mongoose.model('Celeb', celebSchema);

module.exports = Celeb;