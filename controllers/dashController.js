var Dash = require('../models/dash');

// INDEX
function getAll(req, res) {
  Dash.find(function(error, celebs) {
    if (error) console.log(error);
    res.render('index', {celebs: celebs});
  });
}

module.exports = {
  getAll: getAll
}