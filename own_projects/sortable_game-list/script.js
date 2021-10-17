const draggableList = document.getElementById('draggable-list');
const check         = document.getElementById('check');
const listItems     = [];
let dragStartIndex;


// GET ADVANTURES DATA FROM JSON FILE ################################
const adventureGameNames       = [];
const adventurePublishingYears = [];
const adventurePlatforms       = [];

fetch('adventures.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    data.forEach(function(adventure){
      adventureGameNames.push(adventure.name);
      adventurePublishingYears.push(adventure.year);
      adventurePlatforms.push(adventure.platform);
    });
    createList();
  })
  .catch(err => console.log(err));
// ###################################################################


// INSERT LIST ITEMS INTO DOM ########################################
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
// ###################################################################


// DRAG 'n' DROP FUNCTIONS ###########################################
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
// ###################################################################


// ADD PUBLISHING YEAR – IF order is correct #########################
// Ends the game, makes the check btn disappear, disables drag & drop
function displayPublishingYear() {
  listItems.forEach((listItem, index) => {
    listItem.querySelector('.number').innerHTML = adventurePublishingYears[index];
  });
  document.getElementById('check').remove();
  document.getElementById('victory').classList.remove('hidden');
  removeEventListeners();
  buildAndInsertTicker();
}
// ###################################################################


// BUILD AND INSERT TICKER, REMOVE PARAGRAPH##########################
function buildAndInsertTicker() {
  let allGames = "";
  listItems.forEach((listItem, index) => {
    allGames += "<span class=\"year\">" + adventurePublishingYears[index] + "</span> ";
    allGames += "<span class=\"name\">" + adventureGameNames[index] + "</span> ";
    allGames += "<span class=\"platform\">" + adventurePlatforms[index] + "</span> ";
    allGames += "· ";
    
  });
  const allGamesTicker = `<marquee class="ticker">${allGames}</marquee>`;
  document.getElementById('intro').remove();
  document.getElementById('top').innerHTML = allGamesTicker;
}
// ###################################################################


// CHECK IF ORDER IS CORRECT #########################################
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
// ###################################################################


// ADD & REMOVE EVENT LISTENERS ######################################
function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach(item => {
    item.addEventListener('dragover',  dragOver);
    item.addEventListener('drop',      dragDrop);
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
    item.removeEventListener('dragover',  dragOver);
    item.removeEventListener('drop',      dragDrop);
    item.removeEventListener('dragenter', dragEnter);
    item.removeEventListener('dragleave', dragLeave);
  });
}

check.addEventListener('click', checkOrder);
// ###################################################################