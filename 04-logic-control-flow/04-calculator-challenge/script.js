const calculator = (num1, num2, operator) => {
    let result;
    switch(operator){
        case '+': result = num1 + num2; 
        break;
        case '-': result = num1 - num2; 
        break;
        case '*': result = num1 * num2; 
        break;
        case '/': result = num1 / num2; 
        break;
        default:
            result = 'Invalid Operator..'
    }
    return result;
}

console.log(calculator(7,5,'+')); // 12
console.log(calculator(7,5,'-')); // 2
console.log(calculator(7,5,'*')); // 35
console.log(calculator(7,5,'/')); // 1.4
console.log(calculator(7,5,'a')); // Invalid Operator..