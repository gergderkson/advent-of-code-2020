import test from 'ava';
const method = require('./');

test('example 1', t => {
	const input = ["1-3 a: abcde","1-3 b: cdefg","2-9 c: ccccccccc"];
	const result = method(input);
	t.is(result, 1);
});

