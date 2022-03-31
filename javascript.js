const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

            // Create a way to store the output //
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
}
            // Create and define the operations of the calculator //

clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}

delete() {

}

percentage(numbers, percent) {
    return (numbers/100) * percent;
}

appendNumber(number) {
    if(number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
}

chooseOperation(operation) {

};

compute() {

};

updatedDisplay() {

}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// Making sure displayed values are constantly updated every time we click a button on the calculator //

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
    })
})



