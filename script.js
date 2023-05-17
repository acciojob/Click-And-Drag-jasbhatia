// Your code here.
const cubeContainer = document.querySelector(".items");
const cubeWidth = cubeContainer.querySelector(".item").offsetWidth;

// Initialize drag variables
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let previousTranslate = 0;

// Add event listeners for mouse and touch events
cubeContainer.addEventListener("mousedown", dragStart);
cubeContainer.addEventListener("touchstart", dragStart);
cubeContainer.addEventListener("mouseup", dragEnd);
cubeContainer.addEventListener("touchend", dragEnd);
cubeContainer.addEventListener("mousemove", drag);
cubeContainer.addEventListener("touchmove", drag);

// Handle drag start event
function dragStart(event) {
  if (event.type === "touchstart") {
    startPosition = event.touches[0].clientX;
  } else {
    startPosition = event.clientX;
  }
  isDragging = true;
}

// Handle drag end event
function dragEnd(event) {
  isDragging = false;
  previousTranslate = currentTranslate;
}

// Handle drag event
function drag(event) {
  if (isDragging) {
    let currentPosition = 0;
    if (event.type === "touchmove") {
      currentPosition = event.touches[0].clientX;
    } else {
      currentPosition = event.clientX;
    }
    currentTranslate = previousTranslate + currentPosition - startPosition;
    if (currentTranslate > 0) {
      currentTranslate = 0;
    }
    if (currentTranslate < -cubeWidth * (cubeContainer.children.length - 1)) {
      currentTranslate = -cubeWidth * (cubeContainer.children.length - 1);
    }
    cubeContainer.style.transform = `translateX(${currentTranslate}px)`;
  }
}