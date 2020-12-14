import test from 'ava';
const method = require('./');

test('example 1', t => {
	const input = ["mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X",
	"mem[8] = 11",
	"mem[7] = 101",
	"mem[8] = 0"];
	const result = method(input);
	t.is(result, 165);
});