function calcular(){
    var nivel = parseInt(document.getElementById("nivel").value)
    switch(nivel){
        case 1:
            document.getElementById("result").innerText = `O salário é de R$ 3.000,00`
            break;
        case 2:
            document.getElementById("result").innerText = `O salário é de R$ 6.000,00`
            break;
        case 3:
            document.getElementById("result").innerText = `O salário é de R$ 12.000,00`
            break;
        case 4:     
            document.getElementById("result").innerText = `O salário é de R$ 24.000,00`
            break;
        case 5:
            document.getElementById("result").innerText = `O salário é de R$ 48.000,00`
            break;
    }
}