const draggableList = document.getElementById('draggable-list');
const check = document.getElementById('check');


// Get local JSON data
  const adventureGameNames = [];
  const adventurePublishingYears = [];
  const adventurePlatforms = [];

  fetch('adventures.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      data.forEach(function(adventure){
        adventureGameNames.push(adventure.name);
        adventurePublishingYears.push(adventure.year);
        adventurePlatforms.push(adventure.platform);
      });
      console.log('adventureGameNames: ' + adventureGameNames);
      console.log('adventurePublishingYears: ' + adventurePublishingYears);
      console.log('adventurePlatforms: ' + adventurePlatforms);
      createList();
    })
    .catch(err => console.log(err));


// Store listitems
const listItems = [];

let dragStartIndex;

// Insert list items into DOM
function createList() {
  [...adventureGameNames]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((adventure, index) => {

      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="adventure-name">${adventure}</p>
          <p id="grip" class="grip">Ξ</p>
        </div>
      `;

      listItems.push(listItem);

      draggableList.appendChild(listItem);
    });

    addEventListeners();
}

function dragStart() {
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragEnter() {
  this.classList.add('over');
}

function dragLeave() {
  setTimeout(() => { this.classList.remove('over'); }, 1 * 150);
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  const dragEndIndex = +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');
  
  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

function displayPublishingYear() {
  listItems.forEach((listItem, index) => {
    listItem.querySelector('.number').innerHTML = adventurePublishingYears[index];
  });
  document.getElementById('check').remove();
  document.getElementById('victory').classList.remove('hidden');
  removeEventListeners();
}

function checkOrder() {
  let rightCount = 0;
  listItems.forEach((listItem, index) => {
    const adventureName = listItem.querySelector('.adventure-name').innerText.trim();

    if(adventureName !== adventureGameNames[index]) {
      listItem.classList.add('wrong');
      console.log('adventureName: ' + adventureName);
      setTimeout(() => { listItem.classList.remove('wrong'); }, 3 * 500);
    } else {
      listItem.classList.remove('wrong');
      listItem.classList.add('right');
      rightCount++;
      setTimeout(() => { listItem.classList.remove('right'); }, 3 * 500);
    }
    if(rightCount === adventureGameNames.length) {
      displayPublishingYear();
    }
  });
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

function removeEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(draggable => {
    draggable.removeEventListener('dragstart', dragStart);
  });

  dragListItems.forEach(item => {
    item.removeEventListener('dragover', dragOver);
    item.removeEventListener('drop', dragDrop);
    item.removeEventListener('dragenter', dragEnter);
    item.removeEventListener('dragleave', dragLeave);
  });
}

check.addEventListener('click', checkOrder);