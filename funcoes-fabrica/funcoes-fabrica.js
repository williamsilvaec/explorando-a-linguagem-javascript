var criarCarro = function(nome, placa, fabricante) {
	return {
		nome: nome,
		placa: placa,
		fabricante: fabricante
	};
}

var gol = criarCarro('GOL', 'AAA-111', 'VOLKS');

console.log('gol: ', gol);