let x;

console.log(Math);

x = Math.sqrt(64); // 8

x = Math.pow(2,3); // 8

x = Math.abs(-34.65); //34.65

x = Math.round(5.7); //6

x = Math.ceil(5.3);// 6

x = Math.floor(5.9);// 5

x = Math.min(3,7,88); // 3

x = Math.max(3,7,88); //88

x = Math.random(); // random value b/w 0 and 1 (excluding 0 and 1) , e.g. --> 0.5974392288872403

// random value b/w 1 and 10 (including both)
x = Math.floor(Math.random() * 10 + 1);


console.log(x);