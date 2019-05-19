class Cachorro extends Animal  {
	constructor(nome, cor, tamanho, orelha) {
		super(nome, cor, tamanho); 
		this._orelha = orelha;
	}

	get orelha() {
		return this._orelha;
	}

	set orelha(ore) {
		this._orelha = ore;
	}

	//Métodos
	correr() {
		console.log('Correu');
	}

	rosnar() {
		console.log('Rosnou');
	}
}