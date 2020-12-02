const main = (input) => {
	const result = input
		.map((v) => v.split(":").map((v) => v.trim()))
		.map((v) => {
			return {
				pos1: Number(v[0].split(" ")[0].split("-")[0]),
				pos2: Number(v[0].split(" ")[0].split("-")[1]),
				letter: v[0].split(" ")[1],
				password: v[1],
			};
		})
		.map((v) => ({ ...v, pos1Valid: v.password[v.pos1 - 1] === v.letter }))
		.map((v) => ({ ...v, pos2Valid: v.password[v.pos2 - 1] === v.letter }))
		.map((v) => [v.pos1Valid, v.pos2Valid].filter((v) => !!v))
		.filter((v) => v.length === 1);

	return result.length;
};
module.exports = main;
