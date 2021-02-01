//Classes em Javascript
class Filme{
    //Construtor em JS
    constructor(titulo, ano, genero, diretor, atores, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.atores = atores;
        this.duracao = duracao;
    }

    //Métodos
    Reproduzir(){
        console.log("assistindo")
    }
    Pausar(){
        console.log("Pausado ||")
    }
    Avancar(){
        console.log("Avançar >>")
    }
    Fechar(){
        console.log("Fechar X")
    }
    Ficha(){
        console.log("Título: " + this.titulo)
        console.log("Ano: " + this.ano)
        console.log("Género" + this.genero)
        console.log("Diretor: " + this.diretor)
        console.log("Atores: " + this.atores)
        console.log("Duração: "+ this.duracao)
    }
}

module.exports = Filme