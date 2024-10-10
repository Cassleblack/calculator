const operation = {
    add: function(num1, num2) { return num1 + num2; },
    subtract: function(num1, num2) { return num1 - num2; },
    multiply: function(num1, num2) { return num1 * num2; },
    divide: function(num1, num2) { if (num2 === 0) { return "Synthax Error"; }
    return num1 / num2; },
    percent: function(num1) { return num1 / 100},
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
            case '%':
                return this.percent(num1);    
            default:
                return "Invalid operator!";
        }
    }
} // operation.add(num1, num2);

const operators = ['+', '-', '*', '/', '='];
let userNum1 = "";
let userNum2 = ""; 
let userOperator = "";
let operationResult = "";
let digitArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
let operatorArr = ["+", "-", "*", "/"];

const container = document.querySelector(".container");
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let clickedBtn = e.target.innerText;
        if (digitArr.includes(clickedBtn)) {
            if (userOperator === "") {
                userNum1 += clickedBtn;
                display.innerText = userNum1;
            } else {
                userNum2 += clickedBtn;
                display.innerText = userNum2;
            }
        }

        else if (clickedBtn === "-" && userNum1 === "" && userOperator === "") {
            userNum1 = "-";
            display.innerText = userNum1;
        }

        else if (clickedBtn === "-" && userNum1 !== "" && userOperator !== "" && userNum2 === "") {
            userNum2 = "-";
            display.innerText = userNum2;
        }

        else if (operatorArr.includes(clickedBtn)) {
            userOperator = clickedBtn;
        }

        else if (clickedBtn === "=") {
            if (userNum1 !== "" && userNum2 !== "" && userOperator !== "") {
                operationResult = operation.operates(
                    parseFloat(userNum1), userOperator, parseFloat(userNum2)
                );
                display.innerText = operationResult;
                userNum1 = operationResult.toString();
                userNum2 = "";
                userOperator = "";
            }
        }

        else if (clickedBtn === "+/-") {
            if (userOperator === "" && userNum1 !== "") {
                userNum1 = (parseFloat(userNum1) * -1).toString();
                display.innerText = userNum1;
            } else if (userOperator !== "" && userNum2 !== "") {
                userNum2 = (parseFloat(userNum2) * -1).toString();
                display.innerText = userNum2;
            }
        }

        else if (clickedBtn === "%") {
            if (userNum1 !== "" && userOperator === "" && userNum2 === "") {
                operationResult = operation.percent(
                    parseFloat(userNum1)
                );
                display.innerText = operationResult;
                userNum1 = operationResult.toString();
                userNum2 = "";
                userOperator = "";
            }
        }

        /*else if (!operatorArr.includes(clickedBtn) && digitArr.includes(clickedBtn)) {
            if (userNum1 !== "" && userOperator === "" && userNum2 === "") {
                userNum1 = "";
                display.innerText = userNum1;
            } 
        }*/
       
        else if (clickedBtn === "DEL") {
            if (userOperator === "") {
                userNum1 = userNum1.slice(0, -1);  
                display.innerText = userNum1 || "0"; 
            } else if (userNum2 !== "") {
                userNum2 = userNum2.slice(0, -1);  
                display.innerText = userNum2 || "0"; 
            }
        }
            

        else if (clickedBtn === "AC") {
            userNum1 = "";
            userNum2 = "";
            userOperator = "";
            operationResult = "";
            display.innerText = "0";
        }
    });
});