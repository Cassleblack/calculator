const operation = {
    add: function(num1, num2) { return num1 + num2; },
    subtract: function(num1, num2) { return num1 - num2; },
    multiply: function(num1, num2) { return num1 * num2; },
    divide: function(num1, num2) { if (num2 === 0) { return "Error: Division by zero is undefined."; }
    return num1 / num2; },
} // operation.add(num1, num2);