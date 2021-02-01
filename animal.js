class Animal{
    constructor(nome, idade, preco){
        this.nome = nome
        this.idade = idade
        this.preco = preco
    }

    ChecarEstoque(){
        return 10;
    }

    MetodoMae(){
        console.log("FUnção mae")
    }
}

class Cachorro extends Animal{
    constructor(nome, idade, preco, raca, peso){
        super(nome, idade, preco)
        this.raca = raca
        this.peso = peso
    }

    Latir(){
        console.log("ROLF, ROLF")
    }

    ChecarEstoque(){
        return 67
    }
}

class Pato extends Animal{

}

var dog = new Cachorro("Nilton", 15, 5000)

console.log(dog.MetodoMae())