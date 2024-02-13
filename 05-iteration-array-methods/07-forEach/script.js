// The forEach() method calls a function and iterates over the elements of an array.
//The forEach() method can also be used on Maps and Sets.
const items = ['keys', 'mouse', 'pen', 'ssd'];

//console.log(items.__proto__);
/*
  items.forEach(function (item) {
    console.log(item);
  });
*/
// simplified way
items.forEach((item) => console.log(item));

//using other parameters of callbackFn in forEach
const socials = ['LinkedIn', 'Facebook', 'Twitter', 'Insta'];
socials.forEach((social, index, arr) =>
  console.log(`${index} - ${social}`, arr)
);
// calling a named function as callbackfn in forEach
items.forEach(getItem); // getItem is named function here.

function getItem(item) {
  console.log(item);
}

// array of objects
const socialObjs = [
  { name: 'LinkedIn', url: 'https://www.linkedIn.com' },
  { name: 'Facebook', url: 'https://www.facebook.com' },
  { name: 'Twitter', url: 'https://www.twitter.com' },
  { name: 'Instagram', url: 'https://www.instagram.com' },
];

socialObjs.forEach((socialObj) => {
  console.log(socialObj.name, socialObj.url);
});
