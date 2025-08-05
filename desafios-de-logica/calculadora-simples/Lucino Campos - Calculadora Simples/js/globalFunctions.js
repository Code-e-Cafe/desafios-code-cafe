function storePressedButton(button, buttonClass){
    let stored;

    if(buttonClass === 'action' || buttonClass === 'operator'){
        stored = button.id;
    }
    
    if(buttonClass === 'number'){
        stored = button.innerText;
    }

    return stored;
}

function storeOperand(display){
    let operand;

    const textValue = display.innerText.replace(',', '.');
    try {
        if (textValue === '') {
            operand = null; 
        } else {
            operand = parseFloat(textValue);
        }

        if (isNaN(operand)) {
           console.error(`Falha no parsing da entrada: "${textValue}"`);
           return NaN;
        }
    } catch (error) {
        console.log(`Erro no parsing do operando: ${error}`);
        return NaN; 
    }
    
    console.log(`o operando armazenado (string: "${display.innerText}", parsed: ${operand})`);
    return operand;
}

function updateDisplay(value, whichDisplay) {
    const upperThreshold = 1e9;
    const lowerThreshold = 1e-9;
    const precision = 6;
    const absValue = Math.abs(value);
    let displayValue = null;

    if (typeof value === 'number' && isFinite(value)) {
        
        if(absValue >= upperThreshold || (absValue <= lowerThreshold && value !== 0)){
            displayValue = value.toExponential(precision);
            console.log(`Formatando ${value} para notação científica: ${displayValue}`);
        }else if (Number.isInteger(value)) {
            displayValue = value.toString();
        } else {
            displayValue = value.toLocaleString('pt-BR', {
                minimumFractionDigits: 1,
                maximumFractionDigits: 4,
            });
        }    
        
    } else {
        if (value === Infinity) {
            displayValue = 'Infinito';
        } else if (value === -Infinity) {
            displayValue = '-Infinito';
        } else {
            displayValue = String(value);
        }
    }

    whichDisplay.innerText = displayValue;
}

function appendPressedButtonToTyped(buttonContent){
    const maxInputDigits = 16;
    const typed = document.getElementById('typed');

    if(typed.innerText.length >= maxInputDigits){
        console.warn(`Limite de dígitos atingido: ${maxInputDigits}`)
        return;
    }

    typed.innerText += buttonContent;
}

function calculate(firstOperand, secondOperand, operator){
    let result = null;

    /* verifications before the calculation */
    if (operator === 'divide' && secondOperand === 0) {
        console.error("Tentativa de divisão por zero.");
        return NaN; 
    }
    if (operator === 'sqrt' && firstOperand < 0) {
        console.error("Tentativa de raiz quadrada de número negativo.");
        return NaN;
    }

    /* operations itself */
    if(operator === 'plus'){
        result = firstOperand + secondOperand;
    } else if(operator === 'minus'){ 
        result = firstOperand - secondOperand;
    } else if(operator === 'times'){
        result = firstOperand * secondOperand;
    } else if(operator === 'divide'){
        result = firstOperand / secondOperand;
    } else if(operator === 'power'){
        result = Math.pow(firstOperand, secondOperand);
    } else if(operator === 'sqrt'){
        result = Math.sqrt(firstOperand);
    } else if(operator === 'percent'){
        result = (firstOperand / 100) * secondOperand;
    }

    return result; 
}

function numberSignalInverter(number){
    if(number > 0){
        return -number;
    } else {
        return Math.abs(number);
    }
}

function insertFloatingPoint (typed) {
    try {
        if(!typed.innerText.includes(',')){

            if(typed.innerText === '') {
                typed.innerText = '0,';
            } else {
                typed.innerText += ',';
            }
        }

        updateDisplay(typed.innerText, typed);
    } catch (error) {
        console.log(error);
    }
}

function createUnityForHistory(first, op, second, resultValue){
    const unity = document.createElement('p');
    const opSymbol = {
        plus: '+', minus: '-', times: '*', divide: '/',
        power: '^', sqrt: '√', percent: '%'
    }
    unity.innerText = `${first} ${opSymbol[op]} ${second} = ${resultValue}`;
    unity.classList.add('history-element');
    appendUnityToHistory(unity);   
}

function appendUnityToHistory(unity){
    const history = document.getElementById('history-list');
    const newLi = document.createElement('li');

    history.appendChild(newLi);
    newLi.appendChild(unity);
}

function clearElement(element){
    element.innerText = '';
}


function backspace(typed){
    typed.innerText = typed.innerText.slice(0, -1);
    updateDisplay(typed.innerText, typed);
}

function showErrorMessage (displayElement, errorMessage = 'Erro desconecido'){
    const originalColor = displayElement.style.color; 
    displayElement.innerText = `Erro: ${errorMessage}`;
    displayElement.style.color = 'red';

    setTimeout(() => {
        displayElement.style.color = originalColor;
        displayElement.innerText = '';
    }, 2500);
}

function makeAction(typed, result, action, currentState) {
    let state = { ...currentState }; /* Cria uma cópia para evitar mutação direta do objeto original */ 
    
    try {
        if(action === 'clear'){
            clearElement(typed);
            clearElement(result);
            const history = document.getElementById('history-list');
            clearElement(history);
  
            state.firstOperand = null;
            state.operator = null;
            state.secondOperand = null; 
            console.log(`Estado resetado pelo Clear: ${state}`);
        }
    
        if(action === 'reset'){ 
            clearElement(typed);
        }
    
        if(action === 'backspace'){
            backspace(typed); 
        }
    
        if(action === 'enter'){
            /* verifies if there is an operation to be calculated */
            if (state.firstOperand !== null && state.operator !== null && typed.innerText !== '') {
                const secondOperandText = typed.innerText; /* stores the second operand in string type to the history */
                state.secondOperand = storeOperand(typed); 
    
                if (isNaN(state.secondOperand)) {
                    showErrorMessage(result,'entrada inválida.');
                    return currentState; 
                }
    
                console.log(`Calculando: ${state.firstOperand} ${state.operator} ${state.secondOperand}`);
                const calculationResult = calculate(state.firstOperand, state.secondOperand, state.operator);
    
                if (!isFinite(calculationResult) /*|| isNaN(calculationResult) - já tratado em calculate */) {
                    let errorMsg = 'Resultado inválido';

                    if (state.operator === 'divide' && state.secondOperand === 0) {
                        errorMsg = 'Divisão por zero';
                    }

                    showErrorMessage(result, errorMsg); 

                    state = { firstOperand: null, operator: null, secondOperand: null };
                    clearElement(typed);
                } else {
                    /* sucess */
                    updateDisplay(calculationResult, result);
                    createUnityForHistory(state.firstOperand, state.operator, secondOperandText, calculationResult);
                    
                    /* prepares for the next operation */
                    state.firstOperand = calculationResult;
                    clearElement(typed); 
                    state.operator = null; 
                    state.secondOperand = null; 
                    console.log("Estado após Enter:", state);
                }
            } else {
                console.log("Enter pressionado sem operação completa pronta.");
            }
        }

    } catch (error) {
        console.log("Erro em makeAction:", error);
        showErrorMessage(result);
        state = { firstOperand: null, operator: null, secondOperand: null };
        clearElement(typed);
    }
    return state; 
}

function applyTheme(theme){
    document.documentElement.setAttribute('data-theme', theme);
}

function saveTheme(theme){
    localStorage.setItem('theme', theme);
}

function getSavedTheme(){
    return localStorage.getItem('theme') || 'cyberpunk'; /* cyberpunk defined as the default theme */
}