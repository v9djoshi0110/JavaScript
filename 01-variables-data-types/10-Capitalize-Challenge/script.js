const s = 'developer';

let x = s;

// Sol:1
x = s.charAt(0).toUpperCase().concat(s.substring(1));

// Sol:2
x = s[0].toUpperCase().concat(s.slice(-8));


//Sol:3 , using template literal

x = `${s.charAt(0).toUpperCase()}${s.substring(1)}`;

console.log(x); // Developer



