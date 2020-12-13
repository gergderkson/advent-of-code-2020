const main = (input) => {
	
	let buses = input[1]
		.split(",")
		.map((v, i) => [v*1, i])
		.filter((v) => !isNaN(v[0]));
	
	return buses.slice(1).reduce((c,v) => {
		while (true) {
			if ((c[0] + v[1]) % v[0] === 0) {
				return [c[0], c[1] * v[0]]
			}
			c[0] = c[0] + c[1];
		}
	},[0,buses[0][0]])[0]

};;
module.exports = main;