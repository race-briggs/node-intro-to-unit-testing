const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
	it('should replace numbers divisible by 3, 5, or 15', function() {
		expect(fizzBuzzer(1)).to.deep.equal(1)
		expect(fizzBuzzer(3)).to.deep.equal('fizz');
		expect(fizzBuzzer(5)).to.deep.equal('buzz');
		expect(fizzBuzzer(15)).to.deep.equal('fizz-buzz');
		expect(fizzBuzzer(18)).to.deep.equal('fizz');
	});


	it('should trow an error when presented with something other than a number', function() {
		const wrongInputs = ['apple'];
		wrongInputs.forEach(function(input){
			expect(() => fizzBuzzer(input)).to.throw(Error);
		});
	});
});