var transquire = require('transquire');
var traceur = require('traceur');

transquire(function(content, filename) {
	var result = traceur.compile(content, {blockBinding: true, filename: filename});
	if (result.errors.length) {
		throw new Error(result.errors);
	}
	return result.js;
});