import test from 'ava';
const method = require('./');

test('example 1', t => {
	const input = ["0,3,6"];
	const result = method(input);
	t.is(result, 436);
});