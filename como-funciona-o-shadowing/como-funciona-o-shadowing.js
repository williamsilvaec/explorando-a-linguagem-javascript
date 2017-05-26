var volks = {
	fabricante: 'VW'
}

var fox = {
	nome: 'Fox',
	placa: 'AAA-1111',
	fabricante: 'GM'
}

console.log('fox.fabricante:', fox.fabricante);
Object.setPrototypeOf(fox, volks);

console.log('fox.fabricante: ', fox.fabricante); // ? GM

delete fox.fabricante;
console.log('fox.fabricante: ', fox.fabricante);

for (propriedade in fox) {
	console.log(propriedade, fox.hasOwnProperty(propriedade));
}