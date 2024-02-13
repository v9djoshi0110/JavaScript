let x;

const d = new Date();

x = d.toString(); // Sun May 21 2023 19:05:10 GMT+0530 (India Standard Time)

x = d.valueOf(); // 1684676163936 -- time in ms

x = d.getFullYear(); // 2023
x = d.getMonth() + 1; //5
x = d.getDay(); // 0
x = d.getDate(); // 21
x = d.getMinutes(); // 25
x = d.getHours(); //19
x = d.getSeconds();

x = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`; // 2023-5-21

x = Intl.DateTimeFormat('en-IN').format(d);// 21/5/2023
x = Intl.DateTimeFormat('en-US').format(d);// '5/21/2023'
x = Intl.DateTimeFormat('default').format(d); // 21/05/2023

x = Intl.DateTimeFormat('default', {month: 'long'}).format(d); // long month name:=> October
x = Intl.DateTimeFormat('default', {month: 'short'}).format(d); // Oct

x = d.toLocaleString('default', {month: 'short'}); // Oct

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Asia/Kolkata',
});  // Sunday, 21 May 2023 at 20:00:45


console.log(x);