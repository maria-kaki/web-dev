const pessoas = ["Fulano", "Ciclano", "Beltrano"]

// pessoas.push("Maria") // adiciona o último

// pessoas.pop() // remove o último

// pessoas.unshift("Roberto") // adiciona no começo

// pessoas.shift() // remove no começo

// pessoas[1] = "Cleiton"

// console.log(pessoas)

// for (i=0;i<=10;i++){
//     console.log(pessoas[i])
// }

// for que passa por todo o Array
// pessoas.forEach(
//     function rodarArray(usuario){
//         console.log(usuario.toLowerCase())
//     }
// )

// arrow function, jeito mais curto de escrever uma função
pessoas.forEach(usuario => console.log(usuario.toLowerCase()))

// o foreach n te devolve nada (sem retorno), já o map mapeia => copia, mexe e retorna a cópia para você
const novopessoas = pessoas.map(usuario => usuario.toLowerCase())
console.log(novopessoas)
// outro jeito de escrever função
const rodarArray = usuario => {
    
}
rodarArray()


function modificarpessoas(){
    return pessoas.map(usuario => usuario.toLowerCase())
}
console.log(modificarpessoas())