/* quebrar o problema em problemas menores */

/* funcionalidades:
    apertar botões
    mostrar o conteudo no visor
    fazer operações
    mostrar o resultado no visor
    salvar o resultado no historico
    dar reset na calculadora(inclui limpar o historico)
    dar clear na calculadora(zerar os valores sem limpar o historico)
    dar backspace no numero digitado
    dar enter na calculadora
    inserir o ponto flutuante
*/

/* operações:
    soma
    subtração
    multiplicação
    divisão
    potência
    Radiciação
    porcentagem
*/

/* funções js:
    *captura do proposito do botão
    *atualizar visor digitado
    *adiciona um digito ao que foi digitado no visor
    *armazena o operador para quando for fazer a operacao
    *inverte o sinal do número
    *inserir ponto flutuante
    *calcular
    *atualizar visor resultado
    *armazenar resultado no historico
    *identificar e exibir erro
    *limpar o histórico
    *zerar valores do visor digitado
    *backspace no valor digitado

    *aplicar tema
    *salvar na memoria
    *recuperar tema salvo na memoria
*/


/* ~~~~~~   	theme actions       ~~~~~~ */
applyTheme(getSavedTheme());
const btnBoxThemes = document.getElementById('btn-box-themes');
const boxThemes = document.getElementById('box-themes');
const btnThemes = document.querySelectorAll('.btn-theme');

btnBoxThemes.addEventListener('click', () => {
    boxThemes.classList.toggle('active');
});

btnThemes.forEach(button => {
    button.addEventListener('click', () => {
        btnThemes.forEach(btn => btn.classList.remove('active'));
        
        button.classList.add('active');

        const selectedTheme = button.id;
        applyTheme(selectedTheme);
        saveTheme(selectedTheme);

        boxThemes.classList.remove('active');
    });
})


 

/* ~~~~~~       calculator actions      ~~~~~~ */

const btnActions = document.querySelectorAll('.btn-action');
const btnOperators = document.querySelectorAll('.btn-operator');
const btnNumbers = document.querySelectorAll('.btn-number');
const btnFloat = document.getElementById('float');
const btnInvert = document.getElementById('invert');
const btnRoot = document.getElementById('sqrt');


let calculatorState = {
    firstOperand: null,
    secondOperand: null,
    operator: null,
};

const typed = document.getElementById('typed');
const result = document.getElementById('result');

btnActions.forEach(button => {
    button.addEventListener('click', () => {
        const pressedAction = storePressedButton(button, 'action');
        console.log(`A ação tomada é ${pressedAction}`);

        calculatorState = makeAction(typed, result, pressedAction, calculatorState);
        console.log("Estado após ação:", calculatorState);
    });
});


btnOperators.forEach(button => {
    button.addEventListener('click', () => {
        const currentOperator = storePressedButton(button, 'operator');
        let currentOperand = null; 

        
        if (typed.innerText !== '') {
            currentOperand = storeOperand(typed);
            /* if the input is not valid, show error and stop the action of this click */
            if (isNaN(currentOperand)) {
                showErrorMessage(result, 'entrada inválida.');
                clearElement(typed); 
                return; 
            }
        }

        /* case 1: chained operations (5+3-1)  */
        /* requires a firstOperand stored, a pending operator, and a new number typed (currentOperand)*/

        if (calculatorState.operator && calculatorState.firstOperand !== null && currentOperand !== null) {
            console.log(`Encadeando: Calculando ${calculatorState.firstOperand} ${calculatorState.operator} ${currentOperand}`);
            const intermediateResult = calculate(calculatorState.firstOperand, currentOperand, calculatorState.operator);

            /* calling the create unity for history  here to contemplate the case when the operations are chained */
            createUnityForHistory(calculatorState.firstOperand, calculatorState.operator, currentOperand, intermediateResult);

            if (!isFinite(intermediateResult)) {
                showErrorMessage(result, 'Resultado Inválido.');
                calculatorState = { firstOperand: null, secondOperand: null, operator: null };
                clearElement(typed);
                clearElement(result);
                return; 
            } else {
                /* script when the operation is valid, prepares to make the new operation */
                updateDisplay(intermediateResult, result); 
                calculatorState.firstOperand = intermediateResult; 
                calculatorState.operator = currentOperator; 
                clearElement(typed);
                console.log(`Resultado intermediário: ${calculatorState.firstOperand}, Próximo operador: ${calculatorState.operator}`);
            }
        }

        /* Case 2: first operator pressed after a number */ 
        /* requires a valid number*/

        else if (currentOperand !== null) {
            calculatorState.firstOperand = currentOperand;
            calculatorState.operator = currentOperator;
            clearElement(typed); 
            console.log(`Primeiro operando armazenado: ${calculatorState.firstOperand}, Operador definido: ${calculatorState.operator}`);
        }

        /* Case 3: operator pressed after another operator  */
        /* requires a valid firstOperand */

        else if (calculatorState.firstOperand !== null) {
            calculatorState.operator = currentOperator; 
            console.log(`Operador alterado para: ${calculatorState.operator}`);     
        }
        
        /* last case:  operator pressed with no firstOperand */

        else {
            console.log("Operador pressionado sem um número precedente válido.");
            showErrorMessage(typed, 'digite um número primeiro');
        }

        console.log("Estado após operador:", calculatorState);
    });
});


btnNumbers.forEach(button => {
    button.addEventListener('click', () => {
        const pressedNumber = storePressedButton(button, 'number');
        appendPressedButtonToTyped(pressedNumber);
        console.log(`o nuúmero selecionado é ${pressedNumber}`);
    });
});

btnFloat.addEventListener('click', () => {
    insertFloatingPoint(typed);
});

btnInvert.addEventListener('click', () => {
    if(typed.innerText !== ''){
        const currentNumber = storeOperand(typed);
        const invertedNumber = numberSignalInverter(currentNumber);
        updateDisplay(invertedNumber, typed);
    }
});   


btnRoot.addEventListener('click', () => {
    let numberToRoot = null;
    let sourceDisplay = null; 

    
    if (typed.innerText !== '') {
        numberToRoot = storeOperand(typed);
        sourceDisplay = typed;
    }

    /* uses the number in result only if there is no number in typed */
    else if (result.innerText !== '' && calculatorState.operator === null) {
        numberToRoot = storeOperand(result); 
        sourceDisplay = result; /* just to know that the value came from result */
    }

    if (numberToRoot !== null && !isNaN(numberToRoot)) {
        const rootResult = calculate(numberToRoot, null, 'sqrt'); 

        if (isNaN(rootResult)) {
            showErrorMessage(sourceDisplay || result, 'Raiz de nº negativo'); 
            clearElement(typed); 
            
            calculatorState = { firstOperand: null, operator: null, secondOperand: null }; 
            console.log("Estado resetado após erro de Raiz Quadrada.");
        } else { 
            updateDisplay(rootResult, result); 
            clearElement(typed);
        
            createUnityForHistory(numberToRoot, 'sqrt', '', rootResult);
            
        
            calculatorState.firstOperand = rootResult;
            calculatorState.operator = null;
            calculatorState.secondOperand = null;
            console.log("Estado após Raiz Quadrada bem-sucedida:", calculatorState);
        }

    } else if (sourceDisplay && isNaN(numberToRoot)) {
         showErrorMessage(sourceDisplay, 'Entrada inválida');
    }
     else {
        console.log("Botão Raiz pressionado sem número válido em 'typed' ou 'result'.");
        showErrorMessage(typed, "Digite um número");
    }
});


/* ~~~~~~   	history actions       ~~~~~~ */

const btnHistory = document.getElementById('btn-box-history');
const boxHistory = document.getElementById('box-history');

btnHistory.addEventListener('click', () => {
    boxHistory.classList.toggle('active');
});

