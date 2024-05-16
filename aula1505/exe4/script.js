// array de objetos
const filmes = [{
    nome: "Céu de Outubro",
    diretor: "Nolan",
    ano: 1993,
    atores: []
},{
    nome: "Procurando o Nemo",
    diretor: "Mr. Beast",
    ano: 2007,
    atores: []
},{
    nome: "Top Gun",
    diretor: "Tarantino",
    ano: 1988,
    atores: []
}]

// console.log(filmes[0].nome)

const filmesmodificado = filmes.map(filme => filme.nome)
console.log(filmesmodificado)

const filtro = filmes.filter(filme => filme.ano > 2000)
console.log(filtro)