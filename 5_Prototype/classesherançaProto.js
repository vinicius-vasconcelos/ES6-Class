
/****************** Formas de criação de classe 
----------------------------------------------------------------*/

// Objeto Avião
// Objeto Animal

/****************** OBJETO LITERAL (sem insância)
----------------------------------------------------------------*/
let A1 = {
	cor: 'branco',
	modelo: 'airbus a380',

	levantarVoo() = { console.log('Levantar Voo');}
}




/****************** FUNÇÃO CONSTRUTORA (insânciar)
----------------------------------------------------------------*/
let AviaoF = function() {
	this.cor: 'azul',
	this.modelo: 'boing 787',

	this.levantarVoo() = { console.log('Levantar Voo');}
}

let a2 = new AviaoF(); //instânciando



/****************** OBJETO CLASSE (insânciar)
----------------------------------------------------------------*/
class AviaoC {
	constructor(cor, modelo) {
		this._cor = cor;
		this._modelo = modelo;
	}

	//métodos GET e SET
	get cor(){
		return _cor;
	}

	set cor(cor) {
		this._cor = cor;
	}

	get modelo(){
		return _modelo;
	}

	set modelo(modelo) {
		this._modelo = modelo;
	}

	//métodos extra

	levantarVoo() {
		console.log('Levantar Voo');
	}
}

let a3 = new AviaoC("vermelho", "Embraer E-jest"); //instânciando



/****************** OBJETO PROTOTYPE em OBJETO LITERAL (com herança de __proto__)
----------------------------------------------------------------*/
Object.prototype.testeVini = 'vini'; // criando um atributo dentro de prototype,
									 //todos pode acessar na aplicação (Ñ Recomendo !)

let Animal = {
	atributoAnimal: 'Animal'	
}

let Vertebrado = {
	//fazendo herança
	__proto__: Animal,
	atributoVertebrado: 'Vertebrado'
}

let Ave = {
	//fazendo herança
	__proto__: Vertebrado,
	atributoAve: 'Ave'
}

console.log(Ave.atributoAnimal);