function removeFilter() {
  const filterElement = document.querySelector('.filter');
  filterElement.remove();
}
removeFilter();

function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');
  ul.removeChild(li);
}
removeFirstItem();

function removeItem(itemNumber) {
  document.querySelector(`li:nth-child(${itemNumber})`).remove();
}
// single line : Arrow function
const removeItem2 = (itemNumber) =>
  document.querySelectorAll('li')[itemNumber - 1].remove();

function removeItem3(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber - 1];
  ul.removeChild(li);
}

//removeItem(2);
//removeItem2(3);
removeItem3(2);
