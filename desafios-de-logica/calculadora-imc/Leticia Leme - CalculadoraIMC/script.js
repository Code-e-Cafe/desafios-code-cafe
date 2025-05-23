const btnCalcular = document.querySelector("button");

btnCalcular.addEventListener("click", calcularImc);

function calcularImc() {
  let nome = document.getElementById("nome").value;
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;
  let resultado = document.getElementById("resultado");

  document.getElementById("nome").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("peso").value = "";

  let imc = peso / (altura * altura);
  if (imc < 18.5) {
    resultado.innerHTML = `<p>${nome} seu IMC é de ${Math.floor(
      imc
    )} e você está abaixo do peso</p>`;
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultado.innerHTML = `<p>${nome} seu IMC é de ${Math.floor(
      imc
    )} e você está no peso ideal.</p>`;
  } else {
    resultado.innerHTML = `<p>${nome} seu IMC é de ${Math.floor(
      imc
    )} e você está acima do peso.</p>`;
  }
}
