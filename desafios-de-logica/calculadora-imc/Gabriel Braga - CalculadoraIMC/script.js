const nome = document.querySelector('.nome');
const altura = document.querySelector('.altura');
const peso = document.querySelector('.peso');
const botao = document.querySelector('button');
const resultado = document.querySelector('.feedback p');

botao.addEventListener('click', function () {
    const nomeValor = nome.value;
    const alturaValor = parseFloat(altura.value);
    const pesoValor = parseFloat(peso.value);

    if (!nomeValor || !alturaValor || !pesoValor) {
        resultado.innerHTML = 'Por favor, preencha todos os campos corretamente.';
        return;
    }

    const imc = pesoValor / (alturaValor * alturaValor);
    let classificacao = '';

    if (imc < 18.5){
        classificacao = 'abaixo do peso';
    }else if (imc < 24.9) {
        classificacao = 'saudavel'
    }else if (imc < 29.9) {
        classificacao = 'com sobrepeso';
    }else if (imc < 34.9) {
        classificacao = 'com obesidade grau 1';
    }else if (imc <39.9) {
        classificacao = 'com obesidade grau 2';
    }else {
        classificacao = 'com obesidade grau 3';
    }

    resultado.innerHTML = `${nomeValor}, seu IMC é ${imc.toFixed(2)} e você está ${classificacao}.`;
    document.querySelector('.feedback').style.display = 'block';

}
);