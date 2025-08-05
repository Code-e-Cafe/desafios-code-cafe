// 📘 INSTRUÇÕES GERAIS
// Resolva os exercícios abaixo praticando a criação e uso de funções em JavaScript.
// Use console.log() para exibir os resultados.
// Teste no navegador com HTML ou pelo terminal usando Node.js.

// ----------------------------
// 🧠 Exercício 1
// Crie uma função chamada `exibirMensagem` que exiba "Olá, mundo!" no console.
// Chame a função.
// ----------------------------

const exibirMensagem = () => {
  console.log("Olá, mundo!");
};

exibirMensagem();

// ----------------------------
// 🧠 Exercício 2
// Crie uma função chamada `mostrarNome` que receba um nome como parâmetro e exiba:
// "Olá, [nome]!" no console.
// Chame a função passando seu nome como argumento.
// ----------------------------

const mostrarNome = (nome) => {
  console.log(`Olá, ${nome}!`);
};

mostrarNome("Lucino");


// ----------------------------
// 🧠 Exercício 3
// Crie uma função chamada `dobrarNumero` que receba um número e retorne o dobro desse número.
// Exiba o resultado no console.
// ----------------------------

const dobrarNumero = (numero) => {
  return numero * 2;
};

console.log(dobrarNumero(1500));


// ----------------------------
// 🧠 Exercício 4
// Crie uma função chamada `somar` que receba dois números como parâmetros e retorne a soma deles.
// Exiba o resultado no console.
// ----------------------------

const somar = (numero1, numero2) => {
  return numero1 + numero2;
};

console.log(somar(1887,559846));

// ----------------------------
// 🧠 Exercício 5
// Crie uma função chamada `calcularMedia` que receba 3 números e retorne a média entre eles.
// Exiba o resultado no console.
// ----------------------------

const calcularMedia = (numero1, numero2, numero3) => {
  return (numero1 + numero2 + numero3) / 3;
}

console.log(calcularMedia(25,35,75));

// ----------------------------
// 🧠 Exercício 6
// Crie uma função chamada `verificarMaiorDeIdade` que receba uma idade e retorne:
// "Maior de idade" se for maior ou igual a 18, ou "Menor de idade" se for menor.
// ----------------------------

const verificarMaiorDeIdade = (idade) => {
    const resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";
    return resultado;
}


// ----------------------------
// 🧠 Exercício 7
// Crie uma função chamada `mostrarTipo` que receba um valor como parâmetro
// e exiba no console o tipo desse valor (use typeof).
// ----------------------------

const mostrarTipo = (valor) => {
  console.log(typeof valor);
}


// ----------------------------
// 🧠 Exercício 8
// Crie uma arrow function chamada `quadrado` que receba um número e retorne seu quadrado.
// Exiba o resultado no console.
// ----------------------------

const quadrado = (numero) => {
  return numero * numero;
}

console.log(quadrado(5));


// ----------------------------
// 🧠 Exercício 9
// Crie uma função chamada `calcularIMC` que receba peso (kg) e altura (m) como parâmetros.
// Ela deve retornar o valor do IMC usando a fórmula: peso / (altura * altura)
// Exiba o resultado com duas casas decimais.
// ----------------------------

const calcularIMC = (peso, altura) => {
  return (peso / (altura * altura)).toFixed(2);
}

console.log(calcularIMC(120,1.70));

// ----------------------------
// 🧠 Exercício 10
// Crie uma função chamada `saudacaoPersonalizada` que receba dois parâmetros:
// nome e horário (manhã, tarde ou noite).
// A função deve retornar uma mensagem como:
// "Bom dia, João!" ou "Boa noite, Maria!"
// ----------------------------


const saudacaoPersonalizada = (nome, horario) => {
  let saudacao;
  switch (horario.toLowerCase()) {
    case 'manhã':
      saudacao = 'Bom dia';
      break;
    case 'tarde':
      saudacao = 'Boa tarde';
      break;
    case 'noite':
      saudacao = 'Boa noite';
      break;
  }
  return `${saudacao}, ${nome}!`;
};


console.log(saudacaoPersonalizada('Lucino', 'tarde'));