// example: 1
function first(){
    console.log('first....');
}

function second(){
    console.log('second....');
}

function third(){
    console.log('third....');
}
first();
second();
third();

// example: 2
function firstFunction(){
    console.log('firstFunction....');
}

function secondFunction(){
    firstFunction();
    console.log('secondFunction....');
}

function thirdFunction(){
    secondFunction();
    console.log('thirdFunction....');
}
thirdFunction();