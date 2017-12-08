// PROJECT ONE

let multiplesArray = [];
let total = 0;

for (let i = 0; i < 1000; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		multiplesArray.push(i);
	}
}

console.log(multiplesArray.length);

for (let i = 0; i <= multiplesArray.length - 1; i++) {
	total += multiplesArray[i];
}

console.log(total);