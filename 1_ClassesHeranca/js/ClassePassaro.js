class Passaro extends Animal {
	constructor(nome, cor, tamanho, bico) {
		super(nome, cor, tamanho);
		this._bico = bico
	}

	get bico() {
		return this._bico;
	}

	set orelha(tipo) {
		this._bico = tipo;
	}

	//Métodos
	voar() { 
		console.log('Vôou');
	}
}


// Outra classe
class Papagaio extends Passaro {
	constructor(nome, cor, tamanho, bico, sabeFalar) {
		super(nome, cor, tamanho, bico);
		this._sabeFalar = sabeFalar
	}

	get sabeFalar() {
		return this._sabeFalar;
	}

	set sabeFalar(aux) {
		this._sabeFalar = aux;
	}

	//Métodos
	falando() {
		console.log('Falou');
	}
}

// Outra classe
class Avestruz extends Passaro {
	constructor(nome, cor, tamanho, bico, sabeFalar) {
		super(nome, cor, tamanho, bico);
		this._sabeFalar = sabeFalar
	}

	get sabeFalar() {
		return this._sabeFalar;
	}

	set sabeFalar(aux) {
		this._sabeFalar = aux;
	}

	//métodos
	enterrarcabeca() {
		console.log('Enterrou');
	}

	//Sobrescrita de métodos
	voar() {
		console.log('Não voa caralho !');
	}

	falar() {
		console.log('Não fala caralho !');
	}
}