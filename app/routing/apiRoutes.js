var path = require("path");
var friends = require("../data/friends");


// Routes
// =============================================================
module.exports = function(app) {

	var friends = [];
	
	//Directs the response to friends.js in the data folder
	app.get("/api/friends", function(req, res){
		res.json(friends);
	});


	// Create New Entries - takes in JSON input
	app.post( "/api/friends", function ( req, res ) {
		// var newBody = req.body;
		// console.log(newBody);

		var newEntry = {
			requestName: req.body.customerRequestName,
			name: req.body.name,
			scores: req.body.scores//this needs to be an array
		};		

		friends.push(newEntry);
		res.setHeader( 'Content-Type', 'application/json' );
		res.send( JSON.stringify( friends ) );
	});

};