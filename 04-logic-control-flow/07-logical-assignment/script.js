// ||= assign the right side value only if the left is a falsy value

let a = null;
/*
  if(!a){
      a = 20;
    }
  console.log(a); // 20
*/

/*
   a = a || 30;
   console.log(a); // 30
*/
a ||= 40;   // here left is falsy, hence right side value will be assigned to a
console.log(a); //40

// &&= assign the right side value only if the left is a truthy value

let b = 10; // it is truthy value
/*
  if(b){
     b = 30;
   }
  console.log(b);//30
*/
b = b && 40; 
console.log(b);// 40

b &&= 60;
console.log(b);//60

// ??= assign the right side value only if the left is null or undefined

let c = undefined;
/*
  if(c === undefined || c === null){
     c = 30;
  }
  console.log(c);// 30
*/

c ??= 40;
console.log(c);// 40
