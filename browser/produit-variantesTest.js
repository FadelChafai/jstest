'use strict';

var expect = chai.expect;

describe('ProduitVariantes', function(){
	
	beforeEach(function(){
		this.produitVariantes = new ProduitVariantes();
	});
	
	
	it('Show Result', function(){
		
		// Fixture 
		$("body").append('<div id="produit-variantes"></div>');
		
		var $element = $('#produit-variantes');
		var $idProduit  = '08191';
		
		// Stub
		var stub = sinon.stub(this.produitVariantes, 'getProduitVariantes', function($idProduit,$element,callback){
			return callback({
				"entry" : {
					"href" : "http://localhost/sidigital-ws/v1/variantes-commerciales/urn:uuid:e5699310-23c8-11e4-8c21-0800110c9a67",
					"id" : "urn:uuid:e5699310-23c8-11e4-8c21-0800110c9a67"
				}
			});
		});
		
		// Test
		this.produitVariantes.showProduitVariantes($element, $idProduit);
		
		expect($element.html()).to.be.equal('<a href="http://localhost/sidigital/admin/variantes-commerciales/urn:uuid:e5699310-23c8-11e4-8c21-0800110c9a67">http://localhost/sidigital-ws/v1/variantes-commerciales/urn:uuid:e5699310-23c8-11e4-8c21-0800110c9a67</a>');
	});
});