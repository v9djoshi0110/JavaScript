const d = new Date(2023, 3, 12, 15, 0,0);
const hour = d.getHours();
const month =  d.getMonth();

switch(month){
    case 1 :
        console.log('It is January');
        break;
    case 2 :
        console.log('It is February');
        break;
    case 3 :
        console.log('It is March');
        break;
    case 4 :
        console.log('It is April');
        break;
    default:
    console.log('It is not Jan, Feb, March, or April..')    
}
//
switch(true){
    case hour < 12 : 
      console.log('Good Morning..!')
      break;
    case hour < 17 : 
      console.log('Good Evening..!')
      break;
    default:
        console.log('zzzzzz')
}
