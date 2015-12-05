'use strict';

var assert = require('chai').assert;

describe('Demo test: ', function(){
	
	it('Fair un 1er test', function(){
		
		var $a = 2;
		
		assert.equal($a * 2, 4 );
	});
	
	it('Fair un 2eme test', function(){
		
		var $a = 2;
		
		assert.equal($a * 2, 4 , 'Probleme de multiplication' );
	});
	
});