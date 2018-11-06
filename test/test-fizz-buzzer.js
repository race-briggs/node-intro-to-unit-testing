const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
	it('should replace numbers divisible by 3, 5, or 15', function() {
		const properInputs = [3, 5, 15];
		properInputs.forEach(function(input){
			const answer = fizzBuzzer(input);
			expect(answer).to.be.oneOf(['fizz', 'buzz', 'fizzbuzz']);
		});
	});


	it('should trow an error when presented with something other than a number', function() {
		const wrongInputs = ['apple'];
		wrongInputs.forEach(function(input){
			const answer = fizzBuzzer(input);
			expect(answer).to.throw(Error);
		});
	});
});