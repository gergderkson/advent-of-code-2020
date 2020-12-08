const main = (input) => {

	const instructions = input.map((v,i) => [i, ...v.split(' ')])

	const history = new Set();
	let acc = 0;
	let currentInstuction = 0;
	
	while(true){
		let [id, instruction, code] = instructions[currentInstuction];
		if(history.has(id)){
			break;
		}
		if(instruction === 'nop'){
			currentInstuction++;
		}
		else if (instruction === 'jmp'){
			currentInstuction = currentInstuction + Number(code)
		}
		else{
			acc = acc + Number(code)
			currentInstuction++;
		}	
		history.add(id)
	}

	return acc

};
module.exports = main;