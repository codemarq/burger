// ==========================================================================
// package dependencies
// ==========================================================================

// express
var express = require('express');

// method-override
var override = require('method-override');

// body-parser
var body = require('body-parser');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;






// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});