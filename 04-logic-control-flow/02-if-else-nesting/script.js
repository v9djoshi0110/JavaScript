const d = new Date(2023, 3, 12, 21, 0,0);
const hour = d.getHours();

if(hour < 12 ){
    console.log('Good Morning..!')
}
else if(hour < 17 ){
    console.log('Good Evening..!')
}
else{
    console.log('Good Night..!')
}
// Nested if
if(hour < 12 ){
    console.log('Good Morning..!')
    if(hour===5){
        console.log('Wake up !');
    }
}
else if(hour < 17 ){
    console.log('Good Evening..!')
}
else{
    console.log('Good Night..!')
    if(hour >= 21){
        console.log('Sleep...');
    }
}
if(hour >= 10 && hour <= 19 ){
    console.log('Work time..')
}
if(hour === 6 || hour === 20 ){
    console.log('Brush your teeth..')
}