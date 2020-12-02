const main = (input) => {
	const result = input
		.map((v) => v.split(":").map((v) => v.trim()))
		.map((v) => {
			return {
				min: Number(v[0].split(" ")[0].split("-")[0]),
				max: Number(v[0].split(" ")[0].split("-")[1]),
				letter: v[0].split(" ")[1],
				filteredPassword: v[1].split("").filter((p) => v[0].split(" ")[1] === p),
			};
		})
		.filter((v) =>v.filteredPassword.length >= v.min && v.filteredPassword.length <= v.max);

	return result.length;
};
module.exports = main;
