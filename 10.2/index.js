const main = (input) => {

	return Math.max(...input
		.sort((a, b) => a - b)
		.map(Number)
		.reduce((c, v) => {
			c[v] = (c[v - 1] || 0) + (c[v - 2] || 0) + (c[v - 3] || 0);
			return c;
		},
		[Math.min(...input)])
		.flat()
	);
};
module.exports = main;