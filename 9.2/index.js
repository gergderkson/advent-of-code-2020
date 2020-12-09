const main = (input, preambleSize = 25) => {

	const number = [...input].splice(preambleSize).reduce((c, v, i) => {
		return input
			.slice(i, i + preambleSize)
			.map((v, i, arr) => arr.slice(i + 1).map((w) => [v, w]))
			.flat()
			.map((x) => x[0] * 1 + x[1] * 1 === v * 1)
			.filter((v) => v === true).length === 0
			? [...c, Number(v)]
			: c;
	}, [])[0];

	for (let i = 0; i < input.length; i++) {
		let total = 0;
		let pointer = 1;
		const vals = [input[i]*1];
		while(total < number){
			total = vals.reduce((c,v) => c+v) + input[i+pointer]*1;
			vals.push(input[i+pointer]*1);
			pointer++;
		}

		if(total === number){
			return Math.min(...vals) + Math.max(...vals);
		}
	}
	
};
module.exports = main;