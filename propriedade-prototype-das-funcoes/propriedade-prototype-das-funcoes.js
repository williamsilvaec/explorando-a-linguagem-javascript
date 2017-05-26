function Carro(nome, placa) {
	this.nome = nome,
	this.placa = placa
}

Carro.prototype.fabricante = 'volks';
Carro.prototype.ligar = function() {
	console.log('Ligando o carro...');
}

var gol = new Carro('GOL', 'WRW-6123');
console.log('gol', gol);

var fox = new Carro('FOX', 'RGI-1517');
console.log('fox', fox);

console.log('fox.fabricante', fox.fabricante);
console.log('gol.fabricante', gol.fabricante);

fox.ligar();