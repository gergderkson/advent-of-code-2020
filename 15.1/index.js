const main = (input) => {

	input = input[0].split(',').map(Number);
	let lastTurns = new Map();
	let lastSpoken = 0;

	for (let i = 0; i < 2020; i++) {

		if (input[i] || input[i] === 0) {
			lastSpoken = input[i];
			lastTurns.set(lastSpoken, i + 1);
			continue
		}

		if (lastTurns.has(lastSpoken)) {
			let currentLast = lastTurns.get(lastSpoken);
			lastTurns.set(lastSpoken, i);
			lastSpoken = i - currentLast;
		} 
		else {
			lastTurns.set(lastSpoken, i);
			lastSpoken = 0;
		}
	}

	return lastSpoken;

};
module.exports = main;
