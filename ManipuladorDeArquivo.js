class Leitor{
    Ler(caminho){
        return "Conteúdo do arquivo!"
    }
}

class Escritor{
    Escrever(arquivo, conteudo){
        console.log("Conteúdo escrito!")
    }
}

class Criador{
    Criar(nome){
        console.log("Arquivo Criado!")
    }
}

class Destruidor{
    Deletar(nome){
        console.log("Deletando arquivos!")
    }
}

class ManipuladorDeArquivo{
    constructor(nome){
        this.arquivo = nome
        this.leitor = new Leitor()
        this.criador = new Criador()
        this.escritor = new Escritor()
        this.destruidor = new Destruidor()
    }
}

class GerenciadorDeUsuarios{
    constructor(){
        this.criador = new Criador()
        this.escritor = new Escritor()
    }
    
    SalvarLista(lista){
        this.criador.Criar("usuario.txt")
        this.escritor.Escrever("usuarios.txt", lista)
    }
}