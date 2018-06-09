var express = require('express');
var GuessController = require('../controllers/guess');

var router = express.Router();
var guessController = new GuessController();


router.get('/', (req, res) => {

	var filter = {};

	guessController.get(filter, function(docs){
		
		res.json(docs);
	});
});

router.get(/([a-f0-9]{24})/, (req, res) => {

	var filter = {_id: req.params[0]};

	guessController.get(filter, function(docs){
		
		res.json(docs[0]);
	});
});

router.delete('/', (req, res) => {
	
	guessController.delete({}, function(message){

		res.json(message);

	});

});

router.put('/', (req, res) => {

	var guess = req.body;
	
	if (!guess._id) {res.json('ID nao encontrado');}
	else {
		
		guessController.save(guess, function(docs){
	
			res.json(docs);
		});
	}
});

router.post('/', (req, res) => {

	var guess = req.body;
		
	guessController.save(guess, function(docs){
	
		res.json(docs);
	});
});

module.exports = router;
