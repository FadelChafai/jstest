var expect = chai.expect;

it('multiply', function(){
	
	expect(1*2).to.be.equal(2);
});

it('test dom', function(){
	
	var $div = $('<div></div>');
	
	$div.append('Salut');
	
	expect($div.text()).to.be.equal('Salut');
})