const draggableList = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
  'Jeff Bezos',
  'Elon Musk',
  'Bernard Arnault',
  'Bill Gates',
  'Mark Zuckerberg',
  'Warren Buffett',
  'Larry Ellison',
  'Larry Page',
  'Sergey Brin',
  'Mukesh Ambani',
];

// Store listitems
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
  [...richestPeople]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {
      console.log(person);

      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `;

      listItems.push(listItem);

      draggableList.appendChild(listItem);
    });

    addEventListeners();
}

function dragStart() {
  // console.log('Event: ', 'dragStart');
  dragStartIndex = +this.closest('li').getAttribute('data-index');
  console.log('START-INDEX: ' + dragStartIndex);
}

function dragEnter() {
  // console.log('Event: ', 'dragEnter');
  this.classList.add('over');
}

function dragLeave() {
  // console.log('Event: ', 'dragLeave');
  this.classList.remove('over');
}

function dragOver(e) {
  // console.log('Event: ', 'dragOver');
  e.preventDefault();
}

function dragDrop() {
  // console.log('Event: ', 'dragDrop');
  const dragEndIndex = +this.getAttribute('data-index');
  console.log('END-INDEX: ' + dragEndIndex);
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove('over');
}

function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
}