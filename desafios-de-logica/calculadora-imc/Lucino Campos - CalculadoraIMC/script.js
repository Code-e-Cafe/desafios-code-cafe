const pegarValoresDosInput = (inputElement) => {
    return inputElement.value;
}

const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");


const calcularIMC = () => {
    const valorPeso = pegarValoresDosInput(peso);
    const valorAltura = pegarValoresDosInput(altura);

    const imc = valorPeso / (valorAltura * valorAltura);

    const resultado = document.querySelector("#valor-imc");

    if (imc < 18.5) {
        resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`;
    } else if (imc >= 18.5 && imc < 25) {
        resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (Peso normal)`;
    } else if (imc >= 25 && imc < 30) {
        resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`;
    } else if (imc >= 30 && imc < 35) {
        resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`;
    } else if (imc >= 35 && imc < 40) {
        resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`;
    } else {
        resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`;
    }
    
}