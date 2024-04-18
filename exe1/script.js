function calcular(){
    var numerodelivros = parseInt(document.getElementById("numerodelivros").value)
    var resultado = 0;
    if (numerodelivros <= 7){
        resultado = numerodelivros * 22;
        document.getElementById("result").innerText = `O preço total é R$ ${String(resultado)},00`
    }
    else{
        resultado = numerodelivros * 15;
        document.getElementById("result").innerText = `O preço total é R$ ${String(resultado)},00`
    }  
}