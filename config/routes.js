var express = require('express');
var router = express.Router()

var dashController = require('../controllers/dashController');

router.route('/')
  .get(function(req,res){ res.redirect('/dash') })

router.route('/dash')
  .get(dashController.getAll)

module.exports = router;