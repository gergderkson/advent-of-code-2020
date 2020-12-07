const main = (input) => {

	const countBagsDeep = (bags, content) => {
		return bags[content].reduce((c,v) => c + v[0] * countBagsDeep(bags, v[1]), 1)
	}

	const bagContents = input
		.map(v => v.split(" "))
		.reduce((c, v) => ({
			...c,
			[[v[0], v[1]].join(" ")]: [...v]
				.splice(4)
				.join(" ")
				.split(",")
				.map((v) =>	v.split(" ").filter((v) => !v.includes("bag")).join(" "))
				.filter((v) => v !== "no other")
				.map((v) => (v.trim().split(/(?<=^\S+)\s/))),
		}),{});

		return countBagsDeep(bagContents, 'shiny gold') - 1

};
module.exports = main;