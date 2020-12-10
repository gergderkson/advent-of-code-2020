const main = (input) => {

	return Object.values(input
		.sort((a, b) => a - b)
		.map(Number)
		.reduce(
			(c, v) => {
				c[1][Math.abs(v - c[0])]++;
				return [v, c[1]];
			},
			[0, { 1: 0, 3: 1 }]
		)[1]).reduce((a,b)=>a*b)
	
};
module.exports = main;