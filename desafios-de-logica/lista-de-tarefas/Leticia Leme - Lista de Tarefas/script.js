const botaoAdicionar = document.getElementById('adicionar');
const lista = document.getElementById('lista');
const conteudo = document.getElementById('conteudo')
lista.addEventListener('click', removerLista);
botaoAdicionar.addEventListener('click', acaoAdicionar);


function acaoAdicionar() {
    if (conteudo.value !== '') {
    lista.innerHTML += `<li><p class="lista">${conteudo.value}</p><button>X</button></li>`
    conteudo.value = ''; 
    }
}

function removerLista(e) {
    if (e.target.innerText === 'X') {
        e.target.parentElement.remove();
    }
}