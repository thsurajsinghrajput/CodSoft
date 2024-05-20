let display = document.getElementById('dis');
let equation = document.getElementById('eq');
let currentInput = '';
let fullEquation = '';

function MyCal(value) {
    switch (value) {
        case 'clr':
            clearAll();
            break;
        case 'bc':
            backspace();
            break;
        case 'cal':
            calculateResult();
            break;
        case '%':
        case '/':
        case '*':
        case '-':
        case '+':
            addOperator(value);
            break;
        default:
            addNumber(value);
    }
}

function clearAll() {
    currentInput = '';
    fullEquation = '';
    updateDisplay('0', '');
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || '0', fullEquation);
}

function calculateResult() {
    try {
        if (currentInput !== '') {
            fullEquation += currentInput;
            const result = eval(fullEquation);
            updateDisplay(result, fullEquation);
            fullEquation = result.toString();
            currentInput = '';
        }
    } catch (e) {
        updateDisplay('Error', '');
        currentInput = '';
        fullEquation = '';
    }
}

function addOperator(operator) {
    if (currentInput !== '') {
        fullEquation += currentInput + operator;
        updateDisplay('0', fullEquation);
        currentInput = '';
    }
}

function addNumber(number) {
    currentInput += number;
    updateDisplay(currentInput, fullEquation);
}

function updateDisplay(current, equation) {
    display.innerText = current;
    eq.innerText = equation;
}
