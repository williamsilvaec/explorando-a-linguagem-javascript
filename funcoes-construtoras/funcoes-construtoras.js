var Carro = function(nome, placa) {
	this.nome = nome;
	this.placa = placa;
	this.fabricante = 'VOLKS'
}

var gol = new Carro('Gol', 'AAA-111');

console.log(gol);