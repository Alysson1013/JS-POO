//Classes em Javascript
class Filme{
    //Construtor em JS
    constructor(){
        this.titulo = '';
        this.ano = 0;
        this.genero = '';
        this.diretor = '';
        this.atores = [];
        this.duracao = 0;
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
}

module.exports = Filme