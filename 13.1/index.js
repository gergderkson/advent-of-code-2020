const main = (input) => {

	const [id, times] = input;

	const earliest = times.split(',')
	.reduce((c,v) => [...c, [v*1, v * Math.ceil(id/v)]],[])
	.filter(Boolean)
	.reduce((c, v) => (Math.abs(v[1] - id) < Math.abs(c[1] - id) ? v : c));
	
	return (earliest[1]-id)*earliest[0];

};
module.exports = main;