const btnCriar = document.querySelector('#btnCriar')
const inputUsuario = document.querySelector('#inputUsuario')
const listaFilmes = document.querySelector('#listaFilmes')

btnCriar.addEventListener('click',function (infosDoEvento){
    infosDoEvento.preventDefault();

    const novofilme = document.createElement('li');

    if(inputUsuario.value === ""){
        alert(`Insira um valor`)
    }
    else{
        novofilme.innerText = inputUsuario.value;

        const btnEditar = document.createElement('button');
        btnEditar.innerText = "Editar";
        btnEditar.addEventListener('click', function (){
            novofilme.style.color = "red";
            novofilme.classList.add('fundo-preto')
        })

        novofilme.append(btnEditar);

        listaFilmes.append(novofilme);
        inputUsuario.value = ""
    }
})