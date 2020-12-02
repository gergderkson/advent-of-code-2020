const main = input => {

	let result = null;
	
	for(let i = 0; i < input.length; i++){
		const firstEntry = Number(input[i]);

		for(let i = 0; i < input.length; i++){
			const secondEntry = Number(input[i]);
			
			for(let i = 0; i < input.length; i++){
				const thirdEntry = Number(input[i]);
				if(firstEntry + secondEntry + thirdEntry === 2020){
					result = firstEntry * secondEntry * thirdEntry;
					break
				}
			}
		}
		
		if(result !== null){
			break;
		}
	}

	return result
}
module.exports = main;