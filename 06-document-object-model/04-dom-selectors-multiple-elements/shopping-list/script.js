// querySelectorAll()
const listh1 = document.querySelectorAll('h1'); // we will get NodeList
console.log(listh1);
listh1.forEach((h) => {
  console.log(h);
});

const listItems = document.querySelectorAll('.item'); // we will get NodeList i.e. listItems is NodeList
console.log(listItems[1].innerText);

listItems[1].style.color = 'red';

listItems.forEach((listItem, index) => {
  if (index === 2) {
    listItem.style.color = 'orange';
  }
  if (index === 3) {
    listItem.innerHTML = `Curd
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;
  }
});

const listItems2 = document.getElementsByClassName('item'); // we will get HTMLCollection i.e. listItems2 is an HTMLCollection

const listItems2Array = Array.from(listItems2);
listItems2Array.forEach((l2) => {
  console.log(l2.innerText);
});

const listItems3 = document.getElementsByTagName('li'); // we will get HTMLCollection i.e. listItems3 is an HTMLCollection
console.log(listItems3[3].innerText);
