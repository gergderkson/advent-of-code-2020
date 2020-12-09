const main = (input, preambleSize = 25) => {

	return [...input].splice(preambleSize).reduce((c, v, i) => {
		return input
			.slice(i, i + preambleSize)
			.map((v, i, arr) => arr.slice(i + 1).map((w) => [v, w]))
			.flat()
			.map((x) => x[0] * 1 + x[1] * 1 === v * 1)
			.filter((v) => v === true).length === 0
			? [...c, Number(v)]
			: c;
	}, [])[0];
	
};
module.exports = main;