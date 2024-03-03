const newDiv = document.createElement('div');
newDiv.title = 'New Element';
newDiv.className = 'new-element';
newDiv.setAttribute('id', 'new-element');

// newDiv.innerText = 'Hey there!';

const text = document.createTextNode('Hey there!');
newDiv.appendChild(text);

console.log(newDiv); // <div title="New Element" class="new-element" id="new-element">Hey there!</div>;

//document.body.appendChild(div); // above <div> element is added in the body(at the end).

document.querySelector('ul').appendChild(newDiv);
