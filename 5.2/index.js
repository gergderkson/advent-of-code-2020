const main = (input) => {
	
	const calcUpper = v => [Math.ceil(v[1] - Math.ceil(v[1]-v[0])/2), v[1]];
	const calcLower = v => [v[0], Math.floor(v[1] - Math.floor(v[1]-v[0])/2)]
	const reduceSeats = (v, range) => v.split("").reduce((v, c) => c === "F" || c === "L" ? calcLower(v) : calcUpper(v), [0, range])[0];

	const seatIds = input
		.map((v) => [v.slice(0, 7), v.slice(7)])
		.map((v) => [reduceSeats(v[0],127),reduceSeats(v[1],7)])
		.map((v) => v[0] * 8 + v[1])
		.sort((a, b) => a - b)

		const [min,max] = [seatIds[0], seatIds[seatIds.length-1]];

		return Array.from(Array(max - min), (v, i) => i + min).filter(
			(i) => !seatIds.includes(i)
		)[0];

};
module.exports = main;
