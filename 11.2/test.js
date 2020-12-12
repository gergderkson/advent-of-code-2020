import test from 'ava';
const method = require('./');

test('example 1', t => {
	const input = ["F10",
	"N3",
	"F7",
	"R90",
	"F11"];
	const result = method(input, 5);
	t.is(result, 25);
});