const main = (input) => {
	const memory = [];
	const floatingCombinations = [];
	const result = new Map();

	input
		.join(",")
		.split("mask = ")
		.map((v) => v.split(","))
		.map((v) => [
			v[0],
			v.slice(1)
			.filter((v) => v.trim() !== "")
			.map((v) => v.split("mem[")[1].split("] = ")),
		])
		.filter((v) => v[0].trim() !== "")
		.forEach((v) => {
			const mask = v[0].split("").reduce((c, v, i) => {
				c[i] = v;
				return c;
			}, []);

			v[1].forEach((v, i) => {
				memory.push([
					Number(v[1])
						.toString(2)
						.padStart(36, "0")
						.split("")
						.reduce((c, v, i) => {
							c[i] = v;
							return c;
						}, [])
						.join(""),
					Number(v[0])
						.toString(2)
						.padStart(36, "0")
						.split("")
						.reduce((c, v, i, arr) => {
							if (mask[i] === "X") {
								c[i] = "X";
							} else if (mask[i] === "1") {
								c[i] = "1";
							} else {
								c[i] = v;
							}
							return c;
						}, [])
						.join(""),
				]);
			});
		});

	memory.filter(Boolean).forEach((v, i) => {
		const value = v[0];
		const mask = v[1];
		const combLen = mask.split("").filter((v) => v === "X").length;

		var combinations = [];

		var maxDecimal = parseInt("1".repeat(combLen), 2);

		for (var i = 0; i <= maxDecimal; i++) {
			combinations.push(i.toString(2).padStart(combLen, "0").split(""));
		}

		let floatingIndexes = mask.split("").reduce((c, v, i) => {
			if (v === "X") {
				return [...c, [i, v]];
			}
			return c;
		}, []);

		for (let i = 0; i < combinations.length; i++) {
			let newA = mask.split("");
			const comb = combinations[i];
			for (let j = 0; j < comb.length; j++) {
				const bit = comb[j];

				newA[floatingIndexes[j][0]] = bit;
			}
			result.set(parseInt(newA.join(""), 2), parseInt(value, 2));
			floatingCombinations.push(newA.join(""));
		}
	});

	let sum = 0;
	result.forEach((v) => (sum += v));
	return sum;
};
module.exports = main;
