import test from 'ava';
const method = require('./');

test('example 1', t => {
	const input = ["1721","979","366","299","675","1456"];
	const result = method(input);
	t.is(result, 514579);
});