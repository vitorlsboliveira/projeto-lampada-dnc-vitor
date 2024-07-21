var lampada = document.getElementById('lampada')

// Liga a lâmpada
function Ligar() {
	if (!estaQuebrada()) {
		lampada.src = 'img/ligada.svg'
	} else {
		alert('A lâmpada está quebrada!')
	}
}

// Desliga a lâmpada
function Desligar() {
	if (!estaQuebrada()) {
		lampada.src = 'img/desligada.svg'
	} else {
		alert('A lâmpada está quebrada!')
	}
}

// Quebra a lâmpada
function Quebrar() {
	lampada.src = 'img/quebrada.svg'
}

function estaQuebrada() {
	return lampada.src.indexOf('quebrada') > -1
}

// Torna disponível o botão "Consertar" quando a lâmpada quebra
function mostraBotaoConsertar() {
	var botao_consertar = document.getElementById('botao_consertar')
	if (!estaQuebrada) {
		botao_consertar.style.display = 'none'
	} else {
		botao_consertar.style.display = 'inline-block'
	}
}
lampada.addEventListener('click', mostraBotaoConsertar)

// Conserta a lâmpada e torna indisponível o botão "Consertar"
function Consertar() {
	lampada.src = 'img/desligada.svg'
	botao_consertar.style.display = 'none'
}