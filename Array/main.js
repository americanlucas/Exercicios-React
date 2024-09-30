/* let soma = [1,2,10,4,5]
soma = soma.reduce((a,b) => a + b)
console.log(soma) */

/* let array = [10,25,53,64,34,67]
let maior = array.reduce((a,b) => a > b ? a : b)
console.log(maior) */

/* let letras = ['x','y','z','x','x','z','w','x','y','x','z','z','w']

let contagemLetras = letras.reduce((acumulador,letra) => {
     acumulador[letra] = (acumulador[letra] || 0) + 1;
     return acumulador;
})
console.log(contagemLetras) */

/*let produto = [20,30,40,50,60]
produto = produto.reduce((acumula,valor) => acumula * valor)
console.log(produto) */

let pares = [15,64,24,67,98,45,70,73,90]
pares = pares.reduce((acumula,valor) => {
     if (valor%2 == 0) {
          console.log(valor)
     }
})