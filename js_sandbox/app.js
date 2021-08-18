// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// // Doubleclick – click twice
// clearBtn.addEventListener('dblclick', runEvent);
// // Mousedown – click and hold
// clearBtn.addEventListener('mousedown', runEvent);
// // Mouseup – click and release
// clearBtn.addEventListener('mouseup', runEvent);


// // Mouseenter & Mouseover – when you hover over the element
// card.addEventListener('mouseenter', runEvent);
// card.addEventListener('mouseover', runEvent);
// // Mouseleave & Mouseout – when you hover away from the element
// card.addEventListener('mouseleave', runEvent);
// card.addEventListener('mouseout', runEvent);

// // Mousemove
// card.addEventListener('mousemove', runEvent);

// // Event Handler
// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   heading.innerHTML = `MouseX: ${e.offsetX} MouseY ${e.offsetY}`
// }


const heading = document.querySelector('h5');
const card = document.querySelector('.card');

// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  heading.innerHTML = `MouseX: ${e.offsetX} MouseY ${e.offsetY}`;
}