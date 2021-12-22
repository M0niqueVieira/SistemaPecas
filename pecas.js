/*Resolução do exercício do encontro remoto
Verificando os seguintes requisitos:
1. Se a peça possui mais de 100g (Pode cadastrar)
2. Se o número de peças em uma caixa é menor que 10 (Pode cadastrar)
3. Se o nome da peça possui mais de três caracteres (Pode cadastrar)
*/
let pesoPeca = 50

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
