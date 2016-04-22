var Dash = require('../models/dash');

function getAll(req, res) {
  Dash.find(function(error, data) {
    if (error) console.log(error);
    res.render('index', {
      data: {
        visitors: 1000000,
        officeTemp: 21,
        plants: true,
        weather: "cloudy",
        fridgeDrinks: 7,
        teaMaker: "Charlie"
      }
    });
  });
}

module.exports = {
  getAll: getAll
}