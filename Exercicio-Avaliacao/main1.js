let lista1 = [3,6,8,2,4]

let lista2 = []

for (let i = 0; i < lista1.length; i++) {
    if (lista1[i] % 3 == 0) {
        console.log(lista1[i])
    }
}

for (let i = 0; i < lista2.length; i++) {
    lista2[i] = lista1[i]
    console.log(lista2)
    
}

console.log(lista2)