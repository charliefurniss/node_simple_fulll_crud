var express = require('express');
var router = express.Router()


var celebsController = require('../controllers/celebsController');

//ROOT ROUTE
router.route('/')
  .get(function(req,res){ res.redirect('/celebs') })

// RESTFUL CELEB ROUTES
router.route('/celebs')
  .get(celebsController.getAll)
  .post(celebsController.createCeleb);

router.route('/celebs/new')
  .get(celebsController.newCeleb);

router.route('/celebs/:id/edit')
  .get(celebsController.editCeleb)

router.route('/celebs/:id')
  .get(celebsController.getCeleb)
  .put(celebsController.updateCeleb)
  .delete(celebsController.removeCeleb);





  


module.exports = router;