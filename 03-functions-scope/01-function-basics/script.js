function sayHello(){
    console.log('Hey there!')
}
sayHello(); // Hey there!

function add(num1, num2){
    console.log(num1+num2);
}

add(4,5); // 9

function subtract(num1, num2){
    return num1-num2;
     console.log('after return'); // won't execute after return statement
}

const result = subtract(20,6); 
console.log(result,subtract(8,5)); //14 3 