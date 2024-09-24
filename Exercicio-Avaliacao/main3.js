let lista = [1,2,3,4,3,21,4,5,3,2]
let descoberta = 3

function descobrir(num) {
    let contador = 0
    for(let i = 0; i < lista.length; i++) {
        if(num == lista[i]) {
            contador++;
        }
    }
    return contador
}

console.log(descobrir(descoberta))