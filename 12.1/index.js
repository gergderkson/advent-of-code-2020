const main = (input) => {

	const map = ['N','E','S','W'];

	return input.reduce((c,v)=>{
		
		let [direction,count] = [v[0], Number(v.slice(1))]

		if(direction === 'F'){
			direction = c[2];
		}
			
		({
			R: () => c[2] = map[(map.indexOf(c[2]) + count/360*4) % 4],
			L: () => c[2] = map[(map.indexOf(c[2]) - (count/360*4) +4) % 4], 
			N: () => c[1] += count,
			S: () => c[1] -= count,
			E: () => c[0] += count,
			W: () => c[0] -= count,
		}[direction]());
		
		return c;

	},[0,0,'E']).splice(0,2).map(Math.abs).reduce((a,b)=>a+b)

};
module.exports = main;