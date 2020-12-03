const main = (input) => {

	return input
		.slice(1)
		.reduce(
			(result, row) => ({
				position: result.position + 3,
				locations: [
					...result.locations,
					row[result.position % row.length],
				],
			}),
			{ position: 3, locations: [] }
		)
		.locations.filter((v) => v === "#").length;

};
module.exports = main;
