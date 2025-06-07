// 📘 INSTRUÇÕES GERAIS
// Resolva os exercícios abaixo praticando a criação e uso de funções em JavaScript.
// Use console.log() para exibir os resultados.
// Teste no navegador com HTML ou pelo terminal usando Node.js.

// ----------------------------
// 🧠 Exercício 1
// Crie uma função chamada `exibirMensagem` que exiba "Olá, mundo!" no console.
// Chame a função.
// ----------------------------
const exibirMensagem = function () {
  console.log("Olá, mundo!");
};
exibirMensagem();
// ----------------------------
// 🧠 Exercício 2
// Crie uma função chamada `mostrarNome` que receba um nome como parâmetro e exiba:
// "Olá, [nome]!" no console.
// Chame a função passando seu nome como argumento.
// ----------------------------
const mostrarNome = function (nome) {
  console.log(`Olá, [${nome}]!`);
};

mostrarNome("Igor");
// ----------------------------
// 🧠 Exercício 3
// Crie uma função chamada `dobrarNumero` que receba um número e retorne o dobro desse número.
// Exiba o resultado no console.
// ----------------------------
const dobrarNumero = (numero) => numero * 2;
console.log(dobrarNumero(2));
// ----------------------------
// 🧠 Exercício 4
// Crie uma função chamada `somar` que receba dois números como parâmetros e retorne a soma deles.
// Exiba o resultado no console.
// ----------------------------
const somar = (numero1, numero2) => numero1 + numero2;
console.log(somar(30, 49));
// ----------------------------
// 🧠 Exercício 5
// Crie uma função chamada `calcularMedia` que receba 3 números e retorne a média entre eles.
// Exiba o resultado no console.
// ----------------------------
const calcularMedia = (...numeros) => {
  let soma = 0;
  for (numero of numeros) {
    soma += numero;
  }
  return soma / numeros.length;
};

console.log(calcularMedia(8, 9, 10, 6, 2));
// ----------------------------
// 🧠 Exercício 6
// Crie uma função chamada `verificarMaiorDeIdade` que receba uma idade e retorne:
// "Maior de idade" se for maior ou igual a 18, ou "Menor de idade" se for menor.
// ----------------------------
const verificarMaiorDeIdade = (idade) =>
  idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(verificarMaiorDeIdade(18));
// ----------------------------
// 🧠 Exercício 7
// Crie uma função chamada `mostrarTipo` que receba um valor como parâmetro
// e exiba no console o tipo desse valor (use typeof).
// ----------------------------
const mostrarTipo = (valor) => {
  console.log(typeof valor);
};

mostrarTipo(() => {});
// ----------------------------
// 🧠 Exercício 8
// Crie uma arrow function chamada `quadrado` que receba um número e retorne seu quadrado.
// Exiba o resultado no console.
// ----------------------------
const quadrado = (numero) => numero ** 2;

console.log(quadrado(5));
// ----------------------------
// 🧠 Exercício 9
// Crie uma função chamada `calcularIMC` que receba peso (kg) e altura (m) como parâmetros.
// Ela deve retornar o valor do IMC usando a fórmula: peso / (altura * altura)
// Exiba o resultado com duas casas decimais.
// ----------------------------
const calcularIMC = function (peso, altura) {
  return peso / altura ** 2;
};

console.log(Math.round(calcularIMC(74, 1.74)));

// ----------------------------
// 🧠 Exercício 10
// Crie uma função chamada `saudacaoPersonalizada` que receba dois parâmetros:
// nome e horário (manhã, tarde ou noite).
// A função deve retornar uma mensagem como:
// "Bom dia, João!" ou "Boa noite, Maria!"
// ----------------------------

const saudacaoPersonalizada = (nome, turno) => {
  let saudacao = "";
  switch (turno) {
    case "tarde":
      saudacao = `Boa tarde`;
      break;
    case "noite":
      saudacao = `Boa noite`;
      break;
    default:
      saudacao = `Bom dia`;
  }
  return `${saudacao}, ${nome}!`;
};

console.log(saudacaoPersonalizada("Igor", "manha"));
