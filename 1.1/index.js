
const main = input => {

	for(let i = 0; i < input.length; i++){
		const firstEntry = input[i];
		const secondEntry = 2020 - firstEntry;

		if(input.includes(secondEntry.toString())){
			return firstEntry * secondEntry;
		}
	}
}
module.exports = main;