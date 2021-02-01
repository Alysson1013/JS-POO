class Dado{
    constructor(lados){
        this.lados = lados
    }

    rolar(){
        console.log(Math.round(Math.random() * (this.lados - 1) + 1)) 
    }
}

let d10 = new Dado(10)
d10.rolar()