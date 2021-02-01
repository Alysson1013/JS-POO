const Filme = require("./Filme")

var vingadores = new Filme();
var hulk = new Filme();
var starWars = new Filme()

vingadores.ano = 2009
vingadores.diretor = 'scorcese'
vingadores.genero = "ação"
vingadores.duracao = 1.9

hulk.ano = 2005
hulk.duracao = 2.0
hulk.diretor = 'George Martin'
hulk.genero = 'Ação e Drama'

console.log(vingadores, hulk)