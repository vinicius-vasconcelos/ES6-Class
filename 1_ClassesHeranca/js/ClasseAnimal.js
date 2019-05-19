class Animal {
	constructor(nome, cor, tamanho) {
		this._nome = nome;
		this._cor = cor;
		this._tamanho = tamanho;
	}

	get nome() {
		return this._nome;
	}

	set nome(nome) {
		this._nome = nome;  
	}

	get cor() {
		return this._cor
	}

	set cor(cor) {
		this._cor = cor;
	}

	get tamanho() {
		return this._tamanho
	}

	set tamanho(tamanho) {
		this._tamanho = tamanho;
	}

	// Métodos
	dormir() {
		console.log('Dormiu');
	}
}