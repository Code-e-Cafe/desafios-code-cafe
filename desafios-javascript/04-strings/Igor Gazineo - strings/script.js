// 📘 INSTRUÇÕES GERAIS
// Resolva os exercícios abaixo praticando a manipulação de strings usando métodos e propriedades.
// Use console.log() para exibir os resultados.
// Teste no navegador com HTML ou pelo terminal usando Node.js.

// ----------------------------
// 🧠 Exercício 1
// Crie uma variável chamada `frase` com o valor "JavaScript é incrível".
// Exiba o tamanho da string usando .length
// ----------------------------
const frase = "JavaScript é incrível";
console.log(frase);
// ----------------------------
// 🧠 Exercício 2
// Exiba os caracteres das posições 0, 5 e 10 da variável `frase` usando charAt()
// ----------------------------
const positions = [0, 5, 10];
for (let i = 0; i < 3; i++) {
  console.log(frase.charAt(positions[i]));
}
// ----------------------------
// 🧠 Exercício 3
// Use o método toUpperCase() para exibir a frase toda em letras maiúsculas.
// ----------------------------
console.log(frase.toUpperCase());
// ----------------------------
// 🧠 Exercício 4
// Use o método toLowerCase() para exibir a frase toda em letras minúsculas.
// ----------------------------
console.log(frase.toLowerCase());
// ----------------------------
// 🧠 Exercício 5
// Verifique se a palavra "incrível" está dentro da frase usando includes()
// ----------------------------
console.log(frase.includes("incrível"));
// ----------------------------
// 🧠 Exercício 6
// Verifique se a frase começa com "Java" usando startsWith()
// ----------------------------
console.log(frase.startsWith("Java"));
// ----------------------------
// 🧠 Exercício 7
// Verifique se a frase termina com "l" usando endsWith()
// ----------------------------
console.log(frase.endsWith("l"));
// ----------------------------
// 🧠 Exercício 8
// Substitua a palavra "incrível" por "fantástico" usando replace()
// ----------------------------
console.log(frase.replace("incrível", "fantástico"));
// ----------------------------
// 🧠 Exercício 9
// Corte a string para exibir apenas a palavra "JavaScript" usando slice()
// ----------------------------
console.log(frase.slice(0, frase.indexOf(" ")));
// ----------------------------
// 🧠 Exercício 10
// Divida a frase em palavras usando split(" ") e exiba o array resultante.
// ----------------------------
console.log(frase.split(" "));
// ----------------------------
// 🧠 Exercício 11
// Una as palavras do array anterior usando join("-") para formar uma nova string.
// ----------------------------
console.log(frase.split(" ").join("-"));
// ----------------------------
// 🧠 Exercício 12
// Remova os espaços extras da string "   Olá, mundo!   " usando trim()
// ----------------------------
console.log("   Olá, mundo!   ");
console.log("   Olá, mundo!   ".trim());
// ----------------------------
// 🧠 Exercício 13
// Crie uma string com o valor "banana".
// Use padStart() para deixá-la com 10 caracteres, preenchendo com "*"
// ----------------------------
console.log("banana".padStart(10, "*"));
// ----------------------------
// 🧠 Exercício 14
// Agora use padEnd() para fazer o mesmo, preenchendo com "-"
// ----------------------------
console.log("banana".padStart(10, "-"));
// ----------------------------
// 🧠 Exercício 15
// Crie uma string "Aprender JavaScript é divertido!".
// Substitua "divertido" por "essencial" e exiba a nova frase.
// ----------------------------
console.log(
  "Aprender JavaScript é divertido!".replace("divertido", "essencial")
);
// 📘 DESAFIOS BÔNUS – NÍVEL EXTRA
// Desafios a seguir exigem mais lógica e/ou o uso combinado de métodos de strings.

// ----------------------------
// 💡 Desafio Bônus 16
// Crie uma função que receba uma string e retorne essa string invertida.
// Ex: "javascript" → "tpircsavaj"
// ----------------------------
const inversorDeString = function (string) {
  let stringInvertida = "";
  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
  }
  return stringInvertida;
};
console.log(inversorDeString("javascript"));
// ----------------------------
// 💡 Desafio Bônus 17
// Crie uma função que conte quantas vogais (a, e, i, o, u) existem em uma string.
// Ex: "JavaScript é incrível" → 7 vogais
// ----------------------------

// ----------------------------
// 💡 Desafio Bônus 18
// Crie uma função que receba um nome completo e retorne as iniciais.
// Ex: "Igor Gazineo" → "IG"
// ----------------------------

// ----------------------------
// 💡 Desafio Bônus 19
// Crie uma função que formate um número de telefone no formato (XX) XXXX-XXXX.
// A função deve receber uma string com apenas os números, ex: "1198765432"
// ----------------------------

// ----------------------------
// 💡 Desafio Bônus 20
// Crie uma função que transforme a primeira letra de cada palavra de uma frase em maiúscula.
// Ex: "javascript é incrível" → "Javascript É Incrível"
// ----------------------------

// ----------------------------
// 💡 Desafio Bônus 21
// Crie uma função que receba uma string e retorne quantas palavras ela contém.
// Considere que as palavras estão separadas por espaço.
// ----------------------------

// ----------------------------
// 💡 Desafio Bônus 22
// Crie uma função que substitua todos os espaços de uma string por underline "_"
// Ex: "isso é um teste" → "isso_é_um_teste"
// ----------------------------

// ----------------------------
// 💡 Desafio Bônus 23
// Crie uma função que receba uma string e retorne se ela é um palíndromo.
// Ex: "ana", "arara", "radar" → true
// ----------------------------

// ----------------------------
// 💡 Desafio Bônus 24
// Crie uma função que simule o método repeat() sem usá-lo.
// Receba uma string e um número, e retorne a string repetida esse número de vezes.
// ----------------------------

// ----------------------------
// 💡 Desafio Bônus 25
// Crie uma função que receba uma string e remova todos os números dela.
// Ex: "abc123def456" → "abcdef"
// ----------------------------
