const main = (input) => {

	const skii = (right, down) => {
		return input
			.filter((v, i) => i % down === 0)
			.slice(1)
			.reduce(
				(result, row) => ({
					position: result.position + right,
					locations: [
						...result.locations,
						row[result.position % row.length],
					],
				}),
				{ position: right, locations: [] }
			)
			.locations.filter((v) => v === "#").length;
	};

	return [[1, 1],[3, 1],[5, 1],[7, 1],[1, 2]]
		.map((v) => skii(...v))
		.reduce((a, b) => a * b);

};
module.exports = main;
