import test from 'ava';
const method = require('./');

test('example 1', t => {
	const input = `abc

a
b
c

ab
ac

a
a
a
a

b`;
	const result = method(input);
	t.is(result, 6);
});