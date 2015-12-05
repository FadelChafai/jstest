module.exports = {
	
		maFonction : function ($a, $b){
			
			if($b==0) {
				return Infinity;
			}
			
			return $a / $b ;
		},

		wait : function ($time, callback) {
			
			setTimeout(function(){
				callback(18)
			}, $time)
			
		} 
		
};