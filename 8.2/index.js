const main = (input) => {

	const ogInstructions = input.map((v,i) => [i, ...v.split(' ')])
	const jmpIndexes = ogInstructions.filter(v=> v[1] === 'jmp').map(v=> v[0]);
	const nopIndexes = ogInstructions.filter(v=> v[1] === 'nop').map(v=> v[0]);

	const testForInfiniteLoop = instructions => {
		const history = new Set();
		let acc = 0;
		let currentInstuction = 0;

		while(true){

			if(!instructions[currentInstuction]) break;
			
			let [id, instruction, code] = instructions[currentInstuction];
			
			if(history.has(id)){
				acc = false
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
	}	


	for (const i of jmpIndexes) {
		let testInstructions = input.map((v,i) => [i, ...v.split(' ')])
		testInstructions[i][1] = 'nop';

		let results = testForInfiniteLoop(testInstructions);
		if(results !== false){
			return results;
		}
	}

	for (const i of nopIndexes) {
		let testInstructions = input.map((v,i) => [i, ...v.split(' ')])
		testInstructions[i][1] = 'jmp';

		let results = testForInfiniteLoop(testInstructions);
		if(results !== false){
			return results;
		}
	}

};
module.exports = main;