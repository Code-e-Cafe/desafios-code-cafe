// 📘 INSTRUÇÕES GERAIS
// Resolva os exercícios abaixo utilizando variáveis em JavaScript.
// Você deve exibir o resultado de cada exercício tanto:
// ✅ No terminal, rodando o arquivo com Node.js (ex: node script.js)
// ✅ No navegador, criando um arquivo .html que carregue este script via <script src="script.js"></script>
// Use console.log() para exibir os resultados.

// ----------------------------
// 🧠 Exercício 1
// Crie uma variável chamada `nome` e atribua a ela o seu primeiro nome.
// Em seguida, exiba o valor dessa variável no console.
// ----------------------------

const nome = 'Lucino'
console.log(nome);

// ----------------------------
// 🧠 Exercício 2
// Crie três variáveis:
// - `idade` (número inteiro)
// - `altura` (número com ponto decimal)
// - `estudando` (booleano: true ou false)
// Exiba todas elas no console, uma por linha.
// ----------------------------

const idade = 25;
const altura = 1.70;
const estudando = true;

console.log(idade);
console.log(altura);
console.log(estudando);


// ----------------------------
// 🧠 Exercício 3
// Crie uma variável chamada `mensagem` e atribua a ela o valor "Bem-vindo ao curso de JavaScript!".
// Depois, modifique o valor da variável para "Curso iniciado com sucesso!".
// Exiba os dois valores no console: o valor antes e depois da alteração.
// ----------------------------

const mensagem = 'Bem-vindo ao curso de JavaScript!';
console.log(mensagem);

mensagem = 'Curso iniciado com sucesso!';
console.log(mensagem);

// ----------------------------
// 🧠 Exercício 4
// Crie duas variáveis chamadas `primeiroNome` e `sobrenome`.
// Depois, crie uma terceira variável chamada `nomeCompleto` que junte os dois nomes com um espaço entre eles.
// Exiba `nomeCompleto` no console com a seguinte frase:
// "Nome completo: [nomeCompleto]"
// ----------------------------

const primeiroNome = 'Lucino'
const sobrenome = 'De Campos'

const nomeCompleto = primeiroNome + ' ' + sobrenome;

console.log(`Nome completo: ${nomeCompleto}`);


// ----------------------------
// 🧠 Exercício 5
// Crie uma constante chamada `pi` com o valor 3.14
// Depois crie uma variável `raio` com valor 4
// Calcule a área do círculo (área = pi * raio * raio) e exiba no console:
// "Área do círculo: [resultado]"
// ----------------------------

const pi = 3.14;
const raio = 4;

const area = pi * raio * raio;

console.log(`Área do círculo: ${area}`);