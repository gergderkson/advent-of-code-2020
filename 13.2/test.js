import test from 'ava';
const method = require('./');

test('example 1', t => {
	const input = ["939",
	"7,13,x,x,59,x,31,19"];
	const result = method(input, 5);
	t.is(result, 1068781);
});