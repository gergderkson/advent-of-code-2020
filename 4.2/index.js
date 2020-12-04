const main = (input) => {

	const rules = {
		byr : v => v.length === 4 && (v*1 >= 1920 && v*1 <= 2002),
		iyr : v => v.length === 4 && (v*1 >= 2010 && v*1 <= 2020),
		eyr : v => v.length === 4 && (v*1 >= 2020 && v*1 <= 2030),
		hgt : v => ( (v.includes('cm') && rules.cm(v)) || ( v.includes('in') && rules.in(v)) ),
		cm : v => v.split('cm')[0]*1 >= 150 && v.split('cm')[0]*1 <=193,
		in : v => v.split('in')[0]*1 >= 59 && v.split('in')[0]*1 <=76,
		hcl : v =>  /^#[0-9A-F]{6}$/i.test(v),
		ecl : v => ['amb','blu','brn','gry','grn','hzl','oth'].includes(v),
		pid : v => v.length === 9 && !isNaN(v*1)
	};

	return input
		.split("\n\n")
		.map(v => v.replace(/\n/g, " "))
		.map(v => v
			.split(" ")
			.reduce((a,c) => ([...a, [c.split(":")[0], c.split(":")[1]]  ]),[])
			.filter(v => v[0] !== "cid")
			.filter(v =>  rules[v[0]](v[1]))
		)
		.filter(v => v.length === 7 ).length

};
module.exports = main;
