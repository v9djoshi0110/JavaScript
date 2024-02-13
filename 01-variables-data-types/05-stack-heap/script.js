// Primitive types and values are stored in the 'stack' area
let fname = 'Vinod';
let age = 31;

let newName = fname;

fname = 'Vicky';

console.log(fname, newName);

// Reference values are stored in the 'Heap' area

const employee = {
    name: 'John',
    age: 30
}

console.log(employee);

const newEmployee =  employee;
newEmployee.name = 'Johney';

console.log(employee, newEmployee);