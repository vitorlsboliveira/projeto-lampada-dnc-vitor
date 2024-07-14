var lampada = document.getElementById('lampada')

function Ligar() {
	if (!estaQuebrada()) {
		lampada.src = 'img/ligada.svg'
	} else {
		alert('A lâmpada está quebrada!')
	}
}

function Desligar() {
	if (!estaQuebrada()) {
		lampada.src = 'img/desligada.svg'
	} else {
		alert('A lâmpada está quebrada!')
	}
}

function Quebrar() {
	lampada.src = 'img/quebrada.svg'
}

function estaQuebrada() {
	return lampada.src.indexOf('quebrada') > -1
}