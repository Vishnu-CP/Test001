define(['module', 'exports', 'ko', 'jquery', 'oj'],
function ( module, exports, ko, $, oj ) {
	console.log(`module`, module);
	// exports === module.exports;

	function add (a, b) {
    return a + b;
	}

	function sub (a, b) {
    return a - b;
	}

	// define exports properties
	exports.PI  = 3.14;
	exports.add = add;
	exports.sub = sub;

	// default implicit auto return exports
	// return exports;
});