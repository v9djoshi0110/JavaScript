console.log(addEmailSymbol('Vick')); // @Vick

//1.) Function declaration
function addEmailSymbol(userName){
    return '@' + userName;
}

//2.)  Function Expression

const addPlusSymbol = function (number) {
    return '+' + number;
}
console.log(addPlusSymbol(100)); // +100

// Hositing: Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of 
// the current script or the current function)
// that is the reason 1st function can be invoked before it is declared, but actually it will go on top before code execution.

