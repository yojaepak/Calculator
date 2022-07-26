function add(inputOne, inputTwo){
    return inputOne + inputTwo;
}

function subtract(inputOne, inputTwo){
    return inputOne - inputTwo;
}

function multiply(inputOne, inputTwo){
    return inputOne * inputTwo;
}

function divide(inputOne, inputTwo){
    return inputOne / inputTwo;
}

function operate(inputOne, inputTwo, operator){
    if (operator === "+"){
        add(inputOne,inputTwo);
    }
    else if (operator === "-"){
        subtract(inputOne, inputTwo);
    }
    else if (operator === "*"){
        multiply(inputOne, inputTwo);
    }
    else if (operator === "/"){
        divide(inputOne, inputTwo);
    }
}