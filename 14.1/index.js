const main = (input) => {
	const memory = [];

	input.join(",")
		.split("mask = ")
		.map(v => v.split(","))
		.map(v => [v[0], v.slice(1)
			.filter((v) => v.trim() !== "")
			.map((v) =>  v.split("mem[")[1].split("] = ")),
		])
		.filter(v => v[0].trim() !== "")
		.forEach(v => {
			
			const mask = v[0].split('').reduce((c,v,i) => { 
				c[i] = v;
				return c
			},[])
			
			v[1].forEach(v =>{
				memory[v[0]] = Number(v[1])
					.toString(2)
					.padStart(36, "0")
					.split("")
					.reduce((c, v, i) => {
						if (mask[i] === "X") {
							c[i] = v;
						} else {
							c[i] = mask[i];
						}
						return c;
					}, [])
					.join("");
			})
		})

		return memory.reduce((c,v) => c + parseInt(v, 2), 0)
	
};
module.exports = main;
