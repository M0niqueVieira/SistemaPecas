/*Resolução do exercício do encontro remoto
 Variaveis - Espaço na memória para guardar algum valor
pesoPeca - Camel Case
peso_peca - Sanke Case
PesoPeca - Pascal Case
*/
let pesoPeca = 50
//let numerodPeca = 8
//let nomePeca = "Disco de Freio"

if(pesoPeca > 100){
    console.log("Peso da peça maior que 100g. Pode cadastrar!")
} else {
    console.log("Peso da peça menor que 100g. A peça não pode ser cadastrada!")
}

let numeroPeca = 10

if(numeroPeca < 10){
    console.log("Ainda há espaço na caixa, peça pode ser cadastrada!")
} else {
    console.log ("Caixa atingiu a capacidade máxima. Cadastro não pode ser realizado!")
}

let nomePeca = 'Disco de Freio'
// ASCII Table

console.log("O comprimento do nome da peça é:" , nomePeca.length)

if(nomePeca.length < 3){
    console.log("O número de caracteres é menor que três. O cadastro não pode ser realizado!")
} else {
    console.log("O número de caracteres é maior que três. Pode cadastrar!")
    
}