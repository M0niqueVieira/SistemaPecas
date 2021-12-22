/*// EXEMPLO 1
// variável, seu valor pode ser alterado no decorrer do programa
let nomeEstudante = "Helena";
console.log(nomeEstudante);

// constante, seu valor não pode ser alterado
const nomeDoEstudante = "Helena";
console.log(nomeDoEstudante);

//Em outras linguagens, portanto, você encontrará algo semelhante a:
String: nomeEstudante = "Helena";

//EXEMPLO 2
let listaDeEstudantes = ["Helena", "Chico", "Mário"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
console.log(quantidadeDeEstudantes);

EXEMPLO 3
let listaDeEstudantes = ["Helena", "Chico", "Mário"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
for (let indice = 0; indice < quantidadeDeEstudantes; indice++) {
	const alunoCorrente = listaDeEstudantes[indice];
	console.log(alunoCorrente);
}

EXEMPLO 4
//Com o do:
let listaDeEstudantes = ["Helena", "Chico", "Mário"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
let inicio = 0;

do {
	console.log(listaDeEstudantes[inicio]);
	inicio++;
} while (inicio < quantidadeDeEstudantes);

//------------------------------------------------//
//Com o while:
while (inicio < quantidadeDeEstudantes) {
	console.log(listaDeEstudantes[inicio]);
	inicio++;
}

EXEMPLO 5
for (let numero = 1; numero <= 10; numero++) {
	console.log(numero);
}
EXEMPLO 6
let listaDeEstudantes = ["Helena", "Chico", "Mário"];
let quantidadeDeEstudantes = listaDeEstudantes.length;

listaDeEstudantes.push("José");
console.log(listaDeEstudantes);

//EXEMPLO 7
let listaDeEstudantes = ["Helena", "Chico", "Mário"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
if (quantidadeDeEstudantes < 5) {
	listaDeEstudantes.push("José");
}
console.log(listaDeEstudantes);
*/
let listaDeEstudantes = ["Helena", "Chico", "Mário", "José", "Maria"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
if (quantidadeDeEstudantes < 5) {
	listaDeEstudantes.push("João");
	console.log(listaDeEstudantes);
} else {
	console.log("Não é possível inserir mais alunos nessa turma");
}