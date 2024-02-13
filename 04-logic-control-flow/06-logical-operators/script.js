console.log(30 > 20 && 10 > 15  && 45 > 20 ); //false
console.log(30 > 20 || 10 > 15  || 45 > 20 ); //true

// && --> will return first falsy value or the last value

let a;

a = 10 && 20; // 20
a = 10 && 40 && 30; // 30
a = 10 && 0 && 45; // 0
a = 10 && 40 && undefined && 50; // undefined

console.log(a);

// practical usage
//const posts = [];
 const posts = ['Post one', 'Post two'];

posts.length > 0 && console.log(posts[0]); // Post one


// || --> will return first truthy value or the last value

let b;

b = 10 || 20; // 10
b = 0 || 'test' || null ; // test
b = null || '' || undefined; // undefined

console.log(b);

// ?? --> nullish coalescing operator  => returns the Right side operand when the left is null or undefined.

let c;
c = 10 ?? 20; //10
c = null ?? 50; // 50
c = undefined ?? 60; // 60
c = 0 ?? 'not empty'; // 0

console.log(c);