// This our elements
const display = document.getElementById("display");
const buttons = document.querySelector('.calc__buttons');

// This state variables 
let newNumber = false;

// Current entered value
let currNumber = 0;

// This variable is responsible for waiting \ saving
// the current operation
let expectationOper = '';

// Adding an event when clicking on an element and processing operations
buttons.addEventListener('click', event => {

	// Digit processing
    if (event.target.classList.contains('number')) {

        if (newNumber) {
            display.value = event.target.textContent;
            newNumber = false;
        } else if (display.value === '0') {
            display.value = event.target.textContent;
        } else {
            display.value += event.target.textContent;
        }
    }

    // Processing 'ce' and 'с'
    if (event.target.classList.contains('clear-btn')) {
        display.value = '0';
        newNumber = true;
        if (event.target.textContent === 'c') {
            currNumber = 0;
            expectationOper = '';
        }
    }

    // Processing '.'
    if (event.target.classList.contains('decimal')) {
        let decMemory = display.value;

        if (newNumber) {
            decMemory = '0.';
            newNumber = false;
        } else {
            if (decMemory.indexOf('.') === -1) {
                decMemory += '.'
            }
        }
        display.value = decMemory;
    }

    // Processing operators
    if (event.target.classList.contains('operator')) {
        let memory = display.value;

        if (!newNumber || expectationOper == '=') {
            newNumber = true;

            switch (expectationOper) {
                case '+':
                    currNumber += +memory;
                    break;
                case '-':
                    currNumber -= +memory;
                    break;
                case '*':
                    currNumber *= +memory;
                    break;
                case '/':
                    currNumber /= +memory;
                    break;

                default:
                    currNumber = +memory;
                    break;
            }
            expectationOper = event.target.textContent;
        }
        display.value = currNumber;
    }
})

