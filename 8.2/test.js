import test from 'ava';
const method = require('./');

test('example 1', t => {
	const input = ["nop +0",
	"acc +1",
	"jmp +4",
	"acc +3",
	"jmp -3",
	"acc -99",
	"acc +1",
	"jmp -4",
	"acc +6",];
	const result = method(input);
	t.is(result, 8);
});