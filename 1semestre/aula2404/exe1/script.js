function calcular(){
    var numero = parseInt(document.getElementById("numero").value)
    var resultado = 0;

    for(i=1;i<=10;i++){
        resultado = i * numero
        console.log(`${i} * ${numero} = ${resultado}`)
    }
}

// const resultado1 = document.getElementById('resultado')

// function calcular1(){
//     var numero1 = parseInt(document.getElementById("numero").value)
//     const numeros = []
//     for(i=0;i<=10;i++){
//         resultado1 = i * numero1
//         console.log(`${i} * ${numero1} = ${resultado1}`)

//         numeros.push(resultado1)
//         console.log(numeros)
//     }

//     resultado1.innerText = numeros
// }