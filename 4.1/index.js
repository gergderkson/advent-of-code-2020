const main = (input) => {

	return input
		.split("\n\n")
		.map(v => v.replace(/\n/g, " "))
		.map(v => v
			.split(" ")
			.map(v => v.split(":")[0])
			.filter(v => v !== "cid").length
		)
		.filter(v => v >= 7).length;

};
module.exports = main;
