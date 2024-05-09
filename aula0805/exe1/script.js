

function computador(){
    const jokeipo = ["pedra","papel","tesoura"]
    let numeroaleatorio = Math.floor(Math.random()*jokeipo.length)
    return jokeipo[numeroaleatorio]
}

function processar(escolha){
    let escolhaPC = computador()
    let resultado

    if(escolhaPC === escolha){
        resultado = "Empate!"
    }
    else if (
        (escolha === 'papel' && escolhaPC === 'pedra') ||
        (escolha === 'pedra' && escolhaPC === 'tesoura') ||
        (escolha === 'tesoura' && escolhaPC === 'papel')
    ){
        resultado = "Ganhou!"
    }
    else{
        resultado = "Perdeu!"
    }

    document.getElementById('resultado').innerText = resultado
}

// const pessoas = ["Caio","Maria Clara","Fulano",15,true
//{
//     nome: 'Maria Clara',
//     cpf: 'hcsdkjcsd',
//     endereco: 'kfjoasrdjnfhkivanbl'
// }
//]

