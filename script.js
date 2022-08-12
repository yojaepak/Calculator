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
        return add(inputOne,inputTwo);
    }
    else if (operator === "-"){
        return subtract(inputOne, inputTwo);
    }
    else if (operator === "*"){
        return multiply(inputOne, inputTwo);
    }
    else if (operator === "/"){
        return divide(inputOne, inputTwo);
    }
}


console.log(operate(10,3,"-"));