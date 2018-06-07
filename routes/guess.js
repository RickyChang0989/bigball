var express = require('express');
var GuessController = require('../controllers/guess');
var UserController = require('../controllers/user');

var router = express.Router();
var guessController = new GuessController();
var userController = new UserController();

router.get(/([a-f0-9]{24})/, (req, res) => {

	guessController.get(req.params[0], function(docs){
		
		res.json(docs);
	});
});

router.delete('/', (req, res) => {
	
	guessController.deleteAll(function(message){

		res.json(message);

	});

});

router.put('/', (req, res) => {

	var guess = req.body;
	
	guessController.save(guess, function(docs){
	
		res.json(docs);
	});
});

module.exports = router;
