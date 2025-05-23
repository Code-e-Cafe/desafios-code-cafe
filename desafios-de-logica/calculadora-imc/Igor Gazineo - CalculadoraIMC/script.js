const calcularBtn = document.querySelector("button");
const divResultado = document.querySelector("div");

calcularBtn.addEventListener("click", () => {
  const nome = document.querySelector("#nome").value;
  const altura = Number(
    document.querySelector("#altura").value.replace(",", ".")
  );
  const peso = Number(document.querySelector("#peso").value.replace(",", "."));

  document.querySelector("#nome").value = "";
  document.querySelector("#altura").value = "";
  document.querySelector("#peso").value = "";

  const imc = Math.round(peso / altura ** 2);
  let resultado = "";
  if (imc < 18.5) {
    resultado = `${nome} seu IMC é de ${imc} e você está abaixo do peso.`;
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultado = `${nome} seu IMC é de ${imc} e você está no peso ideal.`;
  } else {
    resultado = `${nome} seu IMC é de ${imc} e você está acima do peso.`;
  }

  divResultado.innerText = resultado;
});
