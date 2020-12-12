const main = (input) => {


	input = input.map( v => v.split('')).reduce((c,v,y) => {
		return {...c, ...v.reduce((ca,v,x) => {
				return  {...ca, [`${x},${y}`]:v}
			}, {})
		}
	},{})

	const getAdjacentCoords = (coords, input)=> {
		const [x,y] = coords.split(',').map(Number);
		return [
			[`${x},${y - 1}`,input[`${x},${y - 1}`]], 
			[`${x+1},${y - 1}`,input[`${x+1},${y - 1}`]], 
			[`${x+1},${y}`,input[`${x+1},${y}`]], 
			[`${x+1},${y+1}`,input[`${x+1},${y+1}`]], 
			[`${x},${y+1}`,input[`${x},${y+1}`]], 
			[`${x-1},${y+1}`,input[`${x-1},${y+1}`]], 
			[`${x-1},${y}`,input[`${x-1},${y}`]], 
			[`${x - 1},${y - 1}`,input[`${x - 1},${y - 1}`]], 
		]
	}

	while(true){
		let changes = false;
		let newState = Object.entries(input).map(v=> {

			let adjacentOccupied = getAdjacentCoords(v[0], input).filter(v => v[1]==='#');

			if(v[1] === 'L' && adjacentOccupied.length === 0){
				changes = true;
				return [v[0], '#']
			}
			
			if(v[1] === '#' && adjacentOccupied.length >= 4 ){
				changes = true;
				return [v[0], 'L']
			}
	
			return v;
		});
		
		if(!changes){
			return Object.entries(input).filter(v  => v[1] === '#').length
		}
		input = Object.fromEntries(newState);
	}	

};
module.exports = main;