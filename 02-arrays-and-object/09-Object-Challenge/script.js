const library = [{
    title:'The 7 Habits of Highly Effective People',
    Author:'Stephen R. Covey',
    status:{
        own:true,
        reading:false,
        read:false
    }
},
{
    title:'The Alchemist',
    Author:'Paulo Coelho',
    status:{
        own:true,
        reading:false,
        read:false
    }
}
]

library[0].status.read =  true;
library[1].status.read =  true;


const {title:firstBook} = library[0];

console.log(firstBook); // The 7 Habits of Highly Effective People


const libJson = JSON.stringify(library);
console.log(libJson);




