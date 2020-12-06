const main = (input) => {
	return input
		.split("\n\n")
		.map(v => v.split("\n"))
		.map(v => v.reduce((c, v, i, arr) => ({string: [...c.string, v].join(""),length: arr.length}),{ string: [], length: null }))
		.map(w => w.string
			.split("")
			.filter((v, i, a) => a.indexOf(v) === i)
			.reduce((c, v) => w.string.split("").filter((a) => a === v).length === w.length ? c + 1 : c, 0)
		)
		.reduce((c, v) => c + v);
};
module.exports = main;

