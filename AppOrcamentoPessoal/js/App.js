
/*************** Classes
---------------------------------------------------------------------*/
class Despesa {
	constructor(ano, mes, dia, tipo, descricao, valor){
		this.ano = ano;
		this.mes = mes;
		this.dia = dia;
		this.tipo = tipo;
		this.descricao = descricao;
		this.valor = valor;
	}

	validarDados() {
		for(let i in this)
			if(this[i] == undefined || this[i] == null || this[i] == '')
				return false;
		return true;
	}
}

class Bd {
	constructor(){
		if(localStorage.getItem('id') === null)
			localStorage.setItem('id', 0);
	}

	getProxId() {
		return parseInt(localStorage.getItem("id")) + 1; //recuperando último ID
	}

	gravar(d) {
		//setItem('descrição', obj)
		localStorage.setItem(this.getProxId(), JSON.stringify(d)); //transformar obj em JSON == JSON.stringify(d)
		localStorage.setItem('id', this.getProxId()); //atualizando o úlitmo id
	}

	recuperarTodosregistros() {
		let despesas = new Array();
		let aux;

		//recuperando todas as despesas do localStorage
		for (let i = 1; i <= localStorage.getItem('id'); i++){
			aux = JSON.parse(localStorage.getItem(i))
			if(aux !== null) {
				aux.id = i;
				despesas.push(aux);
			}
		}

		return despesas;
	}

	pesquisar(d) {
		//recuperando todas as despesas
		let despesasFiltradas = this.recuperarTodosregistros();

		//aplicando filtro
		if(d.ano != '')
			despesasFiltradas = despesasFiltradas.filter(des => {return des.ano == d.ano});
		if(d.mes != '')
			despesasFiltradas = despesasFiltradas.filter(des => {return des.mes == d.mes});
		if(d.dia != '')
			despesasFiltradas = despesasFiltradas.filter(des => {return des.dia == d.dia});
		if(d.tipo != '')
			despesasFiltradas = despesasFiltradas.filter(des => {return des.tipo == d.tipo});
		if(d.descricao != '')
			despesasFiltradas = despesasFiltradas.filter(des => {return des.descricao == d.descricao});
		if(d.valor != '')
			despesasFiltradas = despesasFiltradas.filter(des => {return des.valor == d.valor}); 

		return despesasFiltradas;
	}

	remover(id) {
		localStorage.removeItem(id);
	}
}


let bd = new Bd();



/*************** Funções
---------------------------------------------------------------------*/

function cadastrarDespesa() {

	//Capturando elementos da tela
	let ano = document.getElementById('ano');
	let mes = document.getElementById('mes');
	let dia = document.getElementById('dia');
	let tipo = document.getElementById('tipo');
	let descricao = document.getElementById('descricao');
	let valor = document.getElementById('valor');

	//instanciando novo obj com os valores
	let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value);

	//validando campos obrigatórios
	if(despesa.validarDados()){

		//gravando no local storage
		bd.gravar(despesa); 

		//criando mensagens personalizadas pro modal
		document.getElementById('tituloModal').innerHTML = 'Registro inserido com sucesso !!!';
		document.getElementById('cor').className = 'modal-header text-success';

		document.getElementById('corpoModal').innerHTML = 'Despesa foi cadastrada com sucesso !';

		document.getElementById('btnModal').innerHTML = 'Voltar';
		document.getElementById('btnModal').className = 'btn btn-success';


		//chamando o modal
		$('#registraDespesas').modal('show');

		//limpando campos
		ano.value =  '';
		mes.value = '';
		dia.value = '';
		tipo.value = '';
		descricao.value = '';
		valor.value = '';

	}
	else{
		//criando mensagens personalizadas pro modal
		document.getElementById('tituloModal').innerHTML = 'Erro na Gravação';
		document.getElementById('cor').className = 'modal-header text-danger';

		document.getElementById('corpoModal').innerHTML = 'Existem campos obrigatórios que não foram preenchidos !!!';

		document.getElementById('btnModal').innerHTML = 'Voltar e corrigir';
		document.getElementById('btnModal').className = 'btn btn-danger';


		//chamando o modal
		$('#registraDespesas').modal('show');
	}
}


function carregaListaDespesas(arrDespesas = new Array(), filtro = false) {

	if(arrDespesas.length == 0 && filtro == false)
		arrDespesas = bd.recuperarTodosregistros();

	let list = document.getElementById('corpoTabela');
	list.innerHTML = ''; //limpando a tabela

	//percorrer arrDespesas e listando na tabela
	arrDespesas.forEach(function(d){

		let linha = list.insertRow();//criando linha dinâmica

		//criando linha dinâmica
		linha.insertCell().innerHTML = `${d.dia}/${d.mes}/${d.ano}`;

		switch (parseInt(d.tipo)) {
			case 1:
				d.tipo = 'Alimentação';
				break;

			case 2:
				d.tipo = 'Educação';
				break;

			case 3:
				d.tipo = 'Lazer';
				break;

			case 4:
				d.tipo = 'Saúde';
				break;

			case 5:
				d.tipo = 'Transporte';
				break;
		}

		linha.insertCell(1).innerHTML = d.tipo;
		linha.insertCell(2).innerHTML = d.descricao;
		linha.insertCell(3).innerHTML = d.valor;

		//criar um botão de excluir
		let btn = document.createElement("button");
		btn.className = 'btn btn-danger';
		btn.innerHTML = '<span class="fas fa-times"></span>';
		btn.id = `id_despesa_${d.id}`;
		btn.onclick = function() {bd.remover(this.id.replace('id_despesa_', '')); window.location.reload();}
		linha.insertCell(4).append(btn);
	});
}

function pesquisarDespesa() {
	//Capturando elementos da tela
	let ano = document.getElementById('ano').value;
	let mes = document.getElementById('mes').value;
	let dia = document.getElementById('dia').value;
	let tipo = document.getElementById('tipo').value;
	let descricao = document.getElementById('descricao').value;
	let valor = document.getElementById('valor').value;

	let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor);
	let list = document.getElementById('corpoTabela'); //pegando a tabela
	list.innerHTML = ''; //limpando a tabela

	carregaListaDespesas(bd.pesquisar(despesa));
}
