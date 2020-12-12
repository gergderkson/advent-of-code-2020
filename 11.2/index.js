const main = (input) => {

	input = input.map( v => v.split('')).reduce((c,v,y) => {
		return {...c, ...v.reduce((ca,v,x) => {
				return  {...ca, [`${x},${y}`]:v}
			}, {})
		}
	},{})

	const getNeighbour = (x,y,xm,ym,input) =>{
		const results = [];
		while (true){
			if(typeof input[`${x},${y}`] === 'undefined'){
				break
			} 
			x = x +xm;
			y = y+ym;
			results.push([`${x},${y}`,input[`${x},${y}`]])
		}
		return results;
	}

	const getAdjacentCoords = (coords, input)=> {
		const [x,y] = coords.split(',').map(Number);
		return [
			getNeighbour(x,y,0,-1,input),
			getNeighbour(x,y,1,-1,input),
			getNeighbour(x,y,1,0,input),
			getNeighbour(x,y,1,1,input),
			getNeighbour(x,y,0,1,input),
			getNeighbour(x,y,-1,1,input),
			getNeighbour(x,y,-1,0,input),
			getNeighbour(x,y,-1,-1,input),
		]
	}

	while(true){
		let changes = false;
		let newState = Object.entries(input).map((v) => {
			
			let adjacentOccupied = getAdjacentCoords(v[0], input)
				.map((v) => v.map((v) => v[1]).filter((v) => v !== ".")[0])
				.filter(Boolean)
				.filter((v) => v === "#");
			
			if (v[1] === "L" && adjacentOccupied.length === 0) {
				changes = true;
				return [v[0], "#"];
			}

			if (v[1] === "#" && adjacentOccupied.length >= 5) {
				changes = true;
				return [v[0], "L"];
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