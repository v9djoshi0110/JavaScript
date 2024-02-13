function first() {
    const a = 10;
    function second(){
        const b = 20;
        console.log(a + b);
    }
    second();
   // console.log(b); // Uncaught ReferenceError: b is not defined
}

first(); // 30

if(true){
    const a = 40;

    if(a === 40){
        const b = 50;
        console.log(a + b);
    }
   //  console.log(b); // Uncaught ReferenceError: b is not defined
}