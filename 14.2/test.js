import test from 'ava';
const method = require('./');

test('example 1', t => {
	const input = ["mask = 000000000000000000000000000000X1001X",
	"mem[42] = 100",
	"mask = 00000000000000000000000000000000X0XX",
	"mem[26] = 1"];
	const result = method(input);
	t.is(result, 208);
});