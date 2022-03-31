const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');

// Hook all variables and make operate on the calculator object //

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

            // Create and define the operations of the calculator //

function clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
}

delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
}

percentage(numbers, percent) {
    return (numbers/100) * percent;
}

// Making sure displayed values are constantly updated every time we click a button on the calculator //

appendNumber(number){
    if(number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
}

 // Making the operation buttons (+ - * etc) work on the calculator //

 chooseOperation(operation) {
    if (this.currentOperand === '') return 
    if (this.previousOperand !== '') {
        this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
};

             // Programming the '=' button //

compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
        case '+' :
            computation = prev + current
            break
        case '-' :
            computation = prev - current 
            break
        case '*' :
            computation = prev * current
            break
        case '÷' :
            computation = prev / current
            break
        default:
            return               
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
}

updatedDisplay() {

}

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
}

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updatedDisplay()
    })
})

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updatedDisplay()
})   

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })

  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })  



