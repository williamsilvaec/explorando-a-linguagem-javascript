var volks = {
	fabricante: 'VW'
}

var gol = {
	nome: 'GOL',
	placa: 'BBB-222'
}

// cria um objeto fox a partir do objeto volks
var fox = Object.create(volks);
fox.nome = 'Fox';
fox.placa = 'AAA-111';

// fazendo com que o prototype do gol aponte para o objeto volks
Object.setPrototypeOf(gol, volks); 

console.log('fox.fabricante: ', fox.fabricante);
console.log('gol.fabricante: ', gol.fabricante);

console.log(Object.getPrototypeOf(gol) === Object.getPrototypeOf(fox));