const main = (input) => {
	
	return input
		.split("\n\n")
		.map(v => v.replace(/\n/g, ""))
		.map(v => new Set(v.split("")).size)
		.reduce((c, v) => c + v);
};
module.exports = main;