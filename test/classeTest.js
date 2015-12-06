var assert = require('chai').assert;
var expect = require('chai').expect;
var Class = require('../backlib/Classe');

require('chai').should();

describe('Test: ', function(){

	'use strict';
	
	describe('#maFonction', function(){
		
		before(function(){});
		
		beforeEach(function(){});
		afterEach(function(){});
		
		//it.only
		it('Tester maFonction', function(){
			assert.equal(Class.maFonction(10,10),1);
		});
		
		it('Tester Division par 0', function(){
			assert.equal(Class.maFonction(10,0),Infinity);
		});
		
		it.skip('Tester should', function(){
			Class.maFonction(10,0).should.be.equal(Infinity);
		});
		
		it('future test');
		
		
		after(function(){});
	});
	
	
	describe('#wait', function(){
		
		it('should exist', function(){
			 assert.notEqual(Class.wait,undefined); // nodjs assertion
			 assert.isFunction(Class.wait);           // chai  assertion
			 expect(Class.wait).not.equal(undefined);  // chai expect
			 expect(Class.wait).to.be.a('function');  // chai expect
		});
				
		it('Test asynchrone', function(done){
			
			Class.wait(50,function(time){
				assert.equal(time,18, "Erreur asynchrone");
				expect(time).to.equal(18);
				done();
			});
			
		});
		
	});
});