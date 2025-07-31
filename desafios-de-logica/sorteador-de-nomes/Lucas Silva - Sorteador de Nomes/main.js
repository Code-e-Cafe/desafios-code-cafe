// Seleção de elementos do HTML usando querySelector (busca elementos por ID ou classe)
const inputName = document.querySelector('#input-name'); // Campo de entrada de texto
const inputResult = document.querySelector('.result-value'); // Área onde mostra o resultado do sorteio
const candidatesList = document.querySelector('#candidates-list'); // Lista que exibe todos os candidatos

// Arrays (listas) para armazenar os dados
let allCandidates = []; // Lista com todos os nomes inseridos
let chosenCandidates = []; // Lista com os nomes já sorteados

let openDraw = false; // O sorteio começará indisponível

// Event Listener: escuta o clique no botão de adicionar nome
document.querySelector('#send-button').addEventListener('click', () => {
    // Pega o valor digitado no campo de entrada
    const candidateName = inputName.value;
    // Limpa o campo após pegar o valor
    inputName.value = '';

    // Verifica se o nome já foi adicionado antes (evita duplicatas)
    if (allCandidates.includes(candidateName)) {
        // Muda o texto do placeholder temporariamente para avisar o usuário
        inputName.placeholder = 'Nome já incluso';

        // setTimeout: executa uma função após um tempo determinado (em milissegundos)
        setTimeout(function(){
            inputName.placeholder = 'Coloque o nome aqui';
        }, 2000); // 2000ms = 2 segundos
    } else {
        // Adiciona o nome à lista de candidatos usando push()
        allCandidates.push(candidateName);
    }

    // Após a adição de 2 ou mais candidatos, o sorteio será aberto
    if (allCandidates.length >= 2 && openDraw === false) {
        openDraw = true;
        inputResult.textContent = 'Pode começar a sortear!';
    }

    // Atualiza a exibição da lista de candidatos na tela
    UpdateCandidatesList();
});

// Event Listener: escuta o clique no botão de sortear
document.querySelector('#draw-button').addEventListener('click', () => {
    // Verifica se ainda há candidatos que não foram sorteados
    // Verifica se o sorteio está em aberto
    if (allCandidates.length > chosenCandidates.length && openDraw === true) {
        // Math.random(): gera número aleatório entre 0 e 1
        // Math.floor(): arredonda para baixo (remove casas decimais)
        // .at(): método moderno para acessar elemento em posição específica do array
        let chosenOne = allCandidates.at(Math.floor(Math.random() * allCandidates.length));

        // Loop while: repete enquanto a condição for verdadeira
        // Garante que não sorteia o mesmo nome duas vezes
        while (chosenCandidates.includes(chosenOne)) {
            chosenOne = allCandidates.at(Math.floor(Math.random() * allCandidates.length));
        }

        // Adiciona o nome sorteado à lista de já escolhidos
        chosenCandidates.push(chosenOne);
        // Exibe o resultado na tela
        inputResult.textContent = chosenOne;

        // Verifica se todos já foram sorteados
        if (chosenCandidates.length === allCandidates.length) {
            // Aguarda 3 segundos e mostra mensagem de fim
            setTimeout(function(){
                inputResult.textContent = "Todos já foram sorteados!";
            }, 3000); // 3000ms = 3 segundos
        }

        // Atualiza a lista visual para marcar quem já foi sorteado
        UpdateCandidatesList();
    }
});

// Função para atualizar a exibição da lista de candidatos
function UpdateCandidatesList() {
    // Limpa todo o conteúdo HTML da lista antes de recriar
    candidatesList.innerHTML = '';

    // forEach: executa uma função para cada item do array
    allCandidates.forEach((candidate) => {
        // createElement: cria um novo elemento HTML (neste caso, <li>)
        let element = document.createElement('li');

        // classList.add: adiciona uma classe CSS ao elemento
        element.classList.add('candidate');

        // Verifica se este candidato já foi sorteado
        if (chosenCandidates.includes(candidate)) {
            // Adiciona classe especial para candidatos já sorteados (ex: riscado, cor diferente)
            element.classList.add('chosen');
        }

        // textContent: define o texto que aparece dentro do elemento
        element.textContent = candidate;
        // appendChild: adiciona o elemento como filho da lista
        candidatesList.appendChild(element);
    })
}