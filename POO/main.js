//Ex 01
/*function Pessoa (nome,idade,profissao) {
    //atributos
    this.nome = nome
    this.idade = idade
    this.profissao = profissao
    //metodo
    this.apresentar = function () {
        console.log("Sou " + nome + ", tenho " + idade + " anos e sou " + profissao + ".")
    }
}

const pessoa = new Pessoa("Lucas", 21, "Estudante")
pessoa.apresentar() */

//Ex 02
/*function Carro (marca,modelo,ano) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
}

let carro = new Carro ("Toyota", "Corolla", 1999)

carro.cor = "Preto"

carro.ano = 2001

console.log(carro) */

//Ex 03
/* function Calculadora (a,b,c) {
    this.a = a
    this.b = b
    this.c = c
    this.soma = function () {
        soma = a + b + c
        return soma
    }
}

let calculadora = new Calculadora(4,8,12)
console.log(calculadora.soma()) */

//Ex 04
/* function Retangulo (larg,alt) {
    this.larg = larg
    this.alt = alt
    this.calcularArea = function () {
        area = larg * alt
        return area
    }
}

const retangulo = new Retangulo(12,10)
console.log(retangulo.calcularArea()) */

//Ex 05
/* function ContaBancaria(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
    this.depositar = function(quant) {
        saldo = saldo + quant;
        this.saldo = saldo;
    }
    this.sacar = function(menos) {
        if(saldo >= menos) {
            saldo = saldo - menos;
            this.saldo = saldo;
        } else {
            console.log("Saldo insuficiente!");
        }
    }
}

let conta = new ContaBancaria("Lucas", 8000);
conta.sacar(6100);
conta.sacar(100);
conta.depositar(1500);
console.log(conta.saldo); */