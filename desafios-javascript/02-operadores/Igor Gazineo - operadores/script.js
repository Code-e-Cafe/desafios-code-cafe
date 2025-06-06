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
console.log(a + b);
// ----------------------------
// 🧠 Exercício 2
// Usando as mesmas variáveis `a` e `b`, exiba a subtração de `a - b`
// ----------------------------
console.log(a - b);
// ----------------------------
// 🧠 Exercício 3
// Exiba a multiplicação de `a * b`
// ----------------------------
console.log(a * b);
// ----------------------------
// 🧠 Exercício 4
// Exiba a divisão de `a / b`
// ----------------------------
console.log(a / b);
// ----------------------------
// 🧠 Exercício 5
// Crie uma variável `numero = 7`
// Exiba o resto da divisão de `numero` por 2 (usando o operador %)
// ----------------------------
const numero = 7;
console.log(numero % 2);
// ----------------------------
// 🧠 Exercício 6
// Crie uma variável `idade = 18`
// Verifique se a idade é maior ou igual a 18 (>=) e exiba o resultado (true/false)
// ----------------------------
const idade = 18;
console.log(idade >= 18);
// ----------------------------
// 🧠 Exercício 7
// Crie duas variáveis: `x = 10` e `y = '10'`
// Verifique se `x == y` e depois se `x === y`. Explique a diferença nos comentários.
// ----------------------------
const x = 10;
const y = "10";
console.log(x == y); //Existe coerção de tipo
console.log(x === y); //Não existe coerção de tipo

// ----------------------------
// 🧠 Exercício 8
// Crie duas variáveis booleanas: `temCarteira = true`, `temIdadeMinima = true`
// Crie uma variável `podeDirigir` que seja true apenas se as duas forem true (use &&)
// Exiba o resultado da variável `podeDirigir` no console.
// ----------------------------
let temCarteira = true;
let temIdadeMinima = true;
const podeDirigir = temCarteira && temIdadeMinima;
console.log(podeDirigir);
// ----------------------------
// 🧠 Exercício 9
// Usando as mesmas variáveis do exercício anterior, altere `temIdadeMinima` para false
// Depois crie uma variável `bloqueado`.
// Ela deve ser `true` se **uma das duas variáveis for falsa**(use ||)
// Exiba no console o valor de `bloqueado`.
// ----------------------------
temIdadeMinima = false;
const bloqueado = temCarteira || temIdadeMinima;
console.log(bloqueado);
// ----------------------------
// 🧠 Exercício 10
// Crie uma variável `pontuacao = 70`
// Use um operador ternário para exibir "Aprovado" se pontuacao >= 60, caso contrário exibir "Reprovado"
// ----------------------------
const pontuacao = 70;
console.log(pontuacao >= 60 ? "Aprovado" : "Reprovado");
