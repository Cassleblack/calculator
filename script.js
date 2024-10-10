const operation = {
    add: function(num1, num2) { return num1 + num2; },
    subtract: function(num1, num2) { return num1 - num2; },
    multiply: function(num1, num2) { return num1 * num2; },
    divide: function(num1, num2) { if (num2 === 0) { return "Error: Division by zero is undefined."; }
    return num1 / num2; },
    operates: function(num1, operator, num2) {
        switch (operator) {
            case '+':
                return this.add(num1, num2);
            case '-':
                return this.subtract(num1, num2);
            case '*':
                return this.multiply(num1, num2);
            case '/':
                return this.divide(num1, num2);
            default:
                return "Invalid operator!";
        }
    }
} // operation.add(num1, num2);

const operators = ['+', '-', '*', '/', '='];
let userNum1;
let userNum2; 
let userOperator;



