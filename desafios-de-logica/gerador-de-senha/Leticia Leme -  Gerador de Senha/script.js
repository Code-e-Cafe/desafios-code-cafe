const numeros = '1234567890';
// const senhaNumerica = Math.trunc(Math.random() * 100000000);
const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
const especiais = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~'

let senhaAlfabetica = '';

function gerarNumeroAleatorio(numero) {
    return Math.floor(Math.random() * numero);
}

function gerarSenha() {
    const checkNumero = document.getElementById('numero');
    if (checkNumero.checked) {
        for (let i = 0; i < 5; i++) {
            senhaAlfabetica += numeros[gerarNumeroAleatorio(numeros.length)]
        }
    }

    senhaAlfabetica = '';
    for (let i = 0; i < 5; i++) {
        senhaAlfabetica += alfabeto[gerarNumeroAleatorio(alfabeto.length)]
        senhaAlfabetica += numeros[gerarNumeroAleatorio(numeros.length)]
    }

    document.getElementById('senha').innerText = ` ${senhaAlfabetica}`;
}

document.getElementById('botao').addEventListener('click', gerarSenha);
