'use strict';

var ProduitVariantes = (function(){
	
	function ProduitVariantes(){}
	
	ProduitVariantes.prototype.showProduitVariantes = function($element, $idProduit){
	
		this.getProduitVariantes($idProduit, $element,  function($results){
			
			var $resultsHtml = 'Aucune resultat';
		 
			 if(!jQuery.isEmptyObject($results)) {
			
				$resultsHtml ='';
				 
				$.each($results, function(index, value) {
				
					var $href = value.href;
					
					$href = $href.replace("sidigital-ws/v1","sidigital/admin");
					
					$resultsHtml += '<a href="' + $href + '">' + value.href + '</a>';   
				});
			 } 
			
			 $element.html($resultsHtml); 
		})
		
	};
	
	ProduitVariantes.prototype.getProduitVariantes = function  ($idProduit, $element, callback){
		
		$.getJSON('/sidigital/admin/produits-commerciaux/variantes?idProduit=' + $idProduit, function(data) {
			callback(data.results);
		})
		.fail(function() {
			$element.html("Erreur lors de recuperation des variantes commerciales.");
		});
	};
	
	return ProduitVariantes;
	
})();
