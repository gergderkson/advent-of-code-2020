import test from 'ava';
const method = require('./');

test('example 1', t => {
	const input = ["35",
	"20",
	"15",
	"25",
	"47",
	"40",
	"62",
	"55",
	"65",
	"95",
	"102",
	"117",
	"150",
	"182",
	"127",
	"219",
	"299",
	"277",
	"309",
	"576",];
	const result = method(input, 5);
	t.is(result, 127);
});