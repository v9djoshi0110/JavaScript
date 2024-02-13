const todo = {
    id:1,
    title: 'Open Bank Account',
    isDone:false
}
const todoStr = JSON.stringify(todo);

console.log(todoStr);
// {"id":1,"title":"Open Bank Account","isDone":false}

const todos = [
    { id:1,
      title: 'Open Bank Account',
      isDone:false
},
{   id:2,
    title: 'Go to gym',
    isDone:true
}
]

const todosStr = JSON.stringify(todos);

console.log(todosStr);
/*[{"id":1,"title":"Open Bank Account","isDone":false},
{"id":2,"title":"Go to gym","isDone":true}]
*/

const todosObj = JSON.parse(todosStr);

console.log(todosObj[0]); // {id: 1, title: 'Open Bank Account', isDone: false}
console.log(todosObj[0].title); // Open Bank Account




