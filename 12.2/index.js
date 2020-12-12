const main = (input) => {

	const map = ['N','E','S','W'];

	return input.reduce((c,v)=>{
		
		let [direction,count] = [v[0], Number(v.slice(1))]
		if(direction === 'F'){
			c[0][0] = c[0][0] + ( count * c[1][0]);
			c[0][1] = c[0][1] + ( count * c[1][1]);
		}
		else{
			({	
				R: () => {
					for(let i = 0; i < count / 90; i++) {
						[c[1][0], c[1][1]] = [c[1][1], -c[1][0]]
					}
				},
				L: () => {
					for(let i = 0; i < count / 90; i++) {
						[c[1][0], c[1][1]]  = [-c[1][1], c[1][0]];
					}
				},
				N: () => c[1][1] += count,
				S: () => c[1][1] -= count,
				E: () => c[1][0] += count,
				W: () => c[1][0] -= count,
			}[direction]());
		}
		return c;

	},[[0,0,'E'], [10,1,'E']])[0].splice(0,2).map(Math.abs).reduce((a,b)=>a+b)
};
module.exports = main;



