// 1. 
function getCelcius(temperature){
    return (temperature - 32) * 5 / 6 ;
}
console.log(`Today\'s temperature is ${getCelcius(98)} \xB0C`); // Today's temperature is 55 °C

// Arrow function
const getTemperatureInCelcius = F => (F - 32) * 5 / 6 ;
console.log(`Today\'s temperature is ${getTemperatureInCelcius(62)} \xB0C`); // Today's temperature is 25 °C

//2. 
const minMax =  arr => {
    let minValue = arr[0];
    let maxValue = arr[0];
    arr.forEach(i => {
        if(minValue > i){
            minValue = i;
        }
        if(maxValue < i ){
            maxValue = i ;
        }
    });
    return {min: minValue, max: maxValue};
}
const numbers = [3,5,9,4,19,6];
console.log("min and max of array: [3,5,9,4,19,6] is " , minMax(numbers)); 
// min and max of array: [3,5,9,4,19,6] is  {min: 3, max: 19}

//using Math object
const findMinMax = (arr) => {
   return {min: Math.min(...arr),
    max: Math.max(...arr)
    }
}
console.log(findMinMax([14,54,43,10])); // {min: 10, max: 54}
//3. IIFE
(
     (l, d) => {
        const area = l * d;
        console.log(`Area of rectangle with a length of ${l} and width of ${d}, is ${area}`);
    }
)(3,4);  // Area of rectangle with a length of 3 and width of 4, is 12



