import test from 'ava';
const method = require('./');

test('example 1', t => {
	const input = [".##.......",
					"#...#...#..",
					".#....#..#.",
					"..#.#...#.#",
					".#...##..#.",
					"..#.##.....",
					".#.#.#....#",
					".#........#",
					"#.##...#...",
					"#...##....#",
					".#..#...#.#"];
	const result = method(input);
	t.is(result, 7);
});

//214