let d;

d = new Date(); //Sun May 21 2023 18:26:54 GMT+0530 (India Standard Time)

d = new Date('05-21-2023'); // Sun May 21 2023 00:00:00 GMT+0530 (India Standard Time)

d = new Date('2023-05-21'); // Sun May 21 2023 05:30:00 GMT+0530 (India Standard Time)

d = new Date('2023-05-21T05:15:00'); // Sun May 21 2023 05:15:00 GMT+0530 (India Standard Time)

d = new Date('2023-05-21 05:15:00');// Sun May 21 2023 05:15:00 GMT+0530 (India Standard Time)

d = new Date(2023, 0, 21); // Sat Jan 21 2023 00:00:00 GMT+0530 (India Standard Time)

d = new Date(2023, 0, 21, 05, 15, 00);// Sat Jan 21 2023 05:15:00 GMT+0530 (India Standard Time)

d = new Date('05/21/2024 05:15:00');// Tue May 21 2024 05:15:00 GMT+0530 (India Standard Time)

d = Date.now(); // time in milliseconds:=>  1684674476495

d = new Date('05-21-2024 5:15');

d = d.getTime(); // 1716248700000-->time in ms

d = d.valueOf(); // 1716248700000

d =  new Date(1716248700000); // Tue May 21 2024 05:15:00 GMT+0530 (India Standard Time)


console.log(d); 