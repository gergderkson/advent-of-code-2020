const main = (input) => {

	const getBagContents = (bag, bags) => {
		const inside = bags[bag];
		const result = [...inside]
		
		for (const inBag of inside) {
			result.push(...getBagContents(inBag, bags));
		}
		return result;
	}

	const bagContents = input
		.map(v => v.split(" "))
		.reduce((c, v) => ({
			...c,
			[[v[0], v[1]].join(" ")]: [...v]
				.filter((v) => !Number(v))
				.splice(4)
				.join(" ")
				.split(",")
				.map((v) =>	v.split(" ").filter((v) => !v.includes("bag")).join(" "))
				.filter((v) => v !== "no other")
				.map((v) => v.trim()),
		}),{});

		return Object.entries(bagContents)
			.map(v => new Set(getBagContents(v[0], bagContents)))
			.filter(v => v.has('shiny gold')).length

};
module.exports = main;

