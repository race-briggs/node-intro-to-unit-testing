const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe(fizzBuzzer, function() {
	it('should replace numbers divisible by 3, 5, or 15', function() {
		const properInputs = [1, 2, 3, 4, 5, 7, 8, 10, 15];
		properInputs.forEach(function(input){
			const answer = fizzBuzzer(input);
			expect(answer).to.be.oneOf([num, 'fizz', 'buzz', 'fizzbuzz']);
		});
	});


	it('should trow an error when presented with something other than a number', function() {
		const wrongInputs = [1, 2, 3, 5, 'apple', 10, 15];
		wrongInputs.forEach(function(input){
			const answer = fizzBuzzer(input);
			expect(answer).to.throw(Error);
		});
	});
})