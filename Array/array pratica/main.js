//soma dos valores

/* let soma = [20,53,12]
soma = soma.reduce((acumula, valor) => acumula + valor)
console.log(soma)*/ 

//remover elemento

/* let lista = [1,2,3,4,5]
lista.splice(3,1)
console.log(lista) */

//produto de valores decimais

/* let numeros = [1.5,2.9,3.6,4.9,4.1]
produto = numeros.reduce((acumula, valor) => acumula * valor)
console.log(produto) */

//usuario preenche array e dps soma

/*let tamanhoArray = parseInt(prompt("Digite o tamanho do array: "))

let array = []

for (let i = 0; i < tamanhoArray; i++) {
     let valor = parseFloat(prompt(`Digite o valor ${i+1}: `))
     array.push(valor)
}

console.log(array)

let somaArray = array.reduce((acumula, valor) => acumula + valor)
console.log("Soma: " + somaArray) */

//verificar elemento

/* let lista = [1,2,3,4,5,6,7,8,9,10]

let verificar = parseInt(prompt("Verifique se está no Array: "))

let existe = lista.includes(verificar)
console.log(existe)
console.log(lista) */

//adicionar se nao possuir

/* let lista = [1,2,3,4,5]

let userInput = parseInt(prompt("Adicione um número: "))

let existe = lista.includes(userInput)

if (existe === true) {
     console.log("Esse número já existe")
} else {
     if (userInput < lista[0]) {
          lista.unshift(userInput)
          console.log(lista)
     } else {
          lista.push(userInput)
          console.log(lista)
     }
     
} */

//maior e menor

/* let lista = [1,2,3,4,5,6,7,8,9,10]

let maior = lista.reduce((a,b) => a > b ? a : b)
let menor = lista.reduce((a,b) => a < b ? a : b)

console.log(menor,maior) */