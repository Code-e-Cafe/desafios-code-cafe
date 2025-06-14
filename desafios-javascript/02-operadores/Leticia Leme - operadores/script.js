// 📘 INSTRUÇÕES GERAIS
// Resolva os exercícios abaixo praticando operadores aritméticos, lógicos, de comparação e atribuição.
// Exiba o resultado de cada exercício com console.log()
// Teste o arquivo no navegador (via index.html) e no terminal (node operadores.js)

// ----------------------------
// 🧠 Exercício 1
// Crie duas variáveis: `a = 10` e `b = 5`
// Exiba a soma de `a` e `b` no console.
// ----------------------------

const a = 10;
const b = 5;
const soma = a + b;
const resultadoSoma = soma;
console.log(resultadoSoma);

// ----------------------------
// 🧠 Exercício 2
// Usando as mesmas variáveis `a` e `b`, exiba a subtração de `a - b`

const subtracao = a - b;
const resultadoSub = subtracao;
console.log(resultadoSub);


// ----------------------------

// ----------------------------
// 🧠 Exercício 3
// Exiba a multiplicação de `a * b`
// ----------------------------

const multiplicacao = a * b;
const resultadoMulti = subtracao;
console.log(resultadoMulti);

// ----------------------------
// 🧠 Exercício 4
// Exiba a divisão de `a / b`
// ----------------------------

const divisao = a / b;
const resultadoDiv = divisao;
console.log(resultadoDiv);

// ----------------------------
// 🧠 Exercício 5
// Crie uma variável `numero = 7`
// Exiba o resto da divisão de `numero` por 2 (usando o operador %)
// ----------------------------
const numero = 7;
porcentagem = numero % 2;
resultadoPorc = porcentagem;
console.log(resultadoPorc)
// ----------------------------
// 🧠 Exercício 6
// Crie uma variável `idade = 18`
// Verifique se a idade é maior ou igual a 18 (>=) e exiba o resultado (true/false)
// ----------------------------
const idade = 18;
const maiorDeIdade = idade >= 18;
console.log(maiorDeIdade);

// ----------------------------
// 🧠 Exercício 7
// Crie duas variáveis: `x = 10` e `y = '10'`
// Verifique se `x == y` e depois se `x === y`. Explique a diferença nos comentários.
// ----------------------------

const x =10;
const y = '10';
const verif1 = x == y; // == verifica apenas o valor, então o valor será TRUE
const verif2 = x === y; // === verifica o valor e o tipo, então o valor será FALSE
console.log(verif1);
console.log(verif2);


// ----------------------------
// 🧠 Exercício 8
// Crie duas variáveis booleanas: `temCarteira = true`, `temIdadeMinima = true`
// Crie uma variável `podeDirigir` que seja true apenas se as duas forem true (use &&)
// Exiba o resultado da variável `podeDirigir` no console.
// ----------------------------

const temCarteira = true;
const temIdadeMinima = true;
const podeDirigir = temCarteira && temIdadeMinima;
console.log(podeDirigir);

// ----------------------------
// 🧠 Exercício 9
// Usando as mesmas variáveis do exercício anterior, altere `temIdadeMinima` para false
// Depois crie uma variável `bloqueado`.
// Ela deve ser `true` se **uma das duas variáveis for verdadeira**(use ||)
// Exiba no console o valor de `bloqueado`.
// ----------------------------

const temCarteiraa = true;
const temIdadeMinimaa = false;
const bloqueado = temCarteiraa || temIdadeMinimaa;
console.log(bloqueado);


// ----------------------------
// 🧠 Exercício 10
// Crie uma variável `pontuacao = 70`
// Use um operador ternário para exibir "Aprovado" se pontuacao >= 60, caso contrário exibir "Reprovado"
// ----------------------------

const pontuacao = 70;
const resultado = pontuacao >= 60 ? 'Aprovado' : 'Reprovado';
console.log(resultado);

