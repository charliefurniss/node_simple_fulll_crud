var Celeb = require('../models/celeb');


// INDEX
function getAll(req, res) {
  Celeb.find(function(error, celebs) {
    if(error) console.log(error)

    res.render('index', {celebs: celebs});
  });
}

//NEW
function newCeleb(req, res){
  res.render('newCeleb')
}


// CREATE
function createCeleb(req, res) {
  var celeb = new Celeb({
    name: req.body.celeb.name,
    age: req.body.celeb.age,
    gender: req.body.celeb.gender,
    profession: req.body.celeb.profession
  });

  celeb.save(function(error) {
    if(error) console.log(error)
 
    res.redirect('/celebs')
  });
}

// SHOW
function getCeleb(req, res) {
  var id = req.params.id;

  Celeb.findById(id, function(error, celeb) {
    if(error) console.log(error)

    res.render('showCeleb', {celeb: celeb});
  });
}

// EDIT
function editCeleb(req, res) {
  var id = req.params.id;

  Celeb.findById(id, function(error, celeb) {
    if(error) console.log(error)

    res.render('editCeleb', {celeb: celeb});
  });
}


// UPDATE 
function updateCeleb(req, res) {
  var id = req.params.id;

    Celeb.findById(id, function(error, celeb) {
    if(error) console.log(error)

    if(celeb){
      celeb.name = req.body.celeb.name;
      celeb.age = req.body.celeb.age;
      celeb.gender = req.body.celeb.gender;
      celeb.profession = req.body.celeb.profession;
    }

    celeb.save(function(error) {
      if(error) console.log(error)
      res.redirect('/celebs/' + id)
    });

  });
}

// DELETE
function removeCeleb(req, res) {
  var id = req.params.id;

  Celeb.remove({_id: id}, function(error) {
    if(error) console.log(error)
    res.redirect('/celebs');
  });
}

module.exports = {
  getAll: getAll,
  createCeleb: createCeleb,
  getCeleb: getCeleb,
  updateCeleb: updateCeleb,
  removeCeleb: removeCeleb,
  newCeleb: newCeleb,
  editCeleb: editCeleb
}