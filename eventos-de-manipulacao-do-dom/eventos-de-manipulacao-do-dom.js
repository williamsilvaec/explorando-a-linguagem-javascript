var eventos = (function() {

	var btn = $('#botao1');
	var link1 = $('#link1');

	var botao1 = function() {
		
		btn.on('click', function(e){
			console.log('clicou no botao 1')
		});
	}

	var link = function() {
		link1.on('click', function(e){
			e.preventDefault();
			console.log('clicou no link');	
		});
	}

	return {
		botao : botao1,
		link: link
	}
	
})()


//eventos.botao();
//eventos.link();

/*
var incrementar = (function() {

	var valor = 0;

	return function() {

		return ++valor;
	}
})();

console.log(incrementar());
console.log(incrementar());
console.log(incrementar());*/

for (let i = 0; i <= 4; i++) {

	console.log(i);
}

console.log(i);






























