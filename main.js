// timer.start();

// we want to:
// by setting a time on minutes we want the timer to have x minutes ready to start counting down
// upon clicking the button START we want the timer to start counting down
// upon clicked on pause, we want the timer, to pause, but maintain the timer visible
// upon clicked the clear button, we want to clear everything

// DOM
// Document Object Model
console.log(document);
console.log(document.body);
console.log(document.querySelector("h1"));
const h1 = document.querySelector("h1");
h1.innerText = "Heyllo";

const newElement = document.createElement("h3");
newElement.innerText =
  "Hello, its me. I was wondering if after all these years you'd like to meet";

document.body.appendChild(newElement);
document.body.removeChild(newElement);

const thatDiv = document.querySelector(".input-container");

// const newInput = document.createElement("input");
// newInput.type = "date";
// thatDiv.appendChild(newInput);

// window.addEventListener("click", () => {
//   console.log("CLICKED");
// });

// window.onclick = () => {
//   console.log("CLICKED");
// };

// window.onmousemove = () => {
//   console.log("MOUSE IS MOVING");
// };

const timeContainer = document.querySelector(".time");
const startBtn = document.querySelector(".start-btn");
const pauseBtn = document.querySelector(".pause-btn");
const stopBtn = document.querySelector(".stop-btn");
const startPause = document.querySelector(".start-pause");

const timer = new Timer(10, 0, timeContainer);

startPause.onclick = () => {
  startPause.classList.toggle("btn");
  if (timer.on) {
    timer.pause();
    startPause.innerText = "START DYNAMIC";
    // startPause.classList.add("on");
    // startPause.classList.remove("off");
  } else {
    // startPause.classList.add("off");
    // startPause.classList.remove("on");
    timer.start();
    startPause.innerText = "PAUSE DYNAMIC";
  }
};

startBtn.onclick = () => {
  timer.start();
};

pauseBtn.onclick = () => {
  timer.pause();
};

stopBtn.onclick = () => {
  timer.stop();
};

const listOfPeople = [
  "Anna",
  "Noemi",
  "Juan",
  "Cheryl",
  "Marie",
  "Daniel",
  "Chris",
  "Filipe",
  "Pablo2",
  "Andre",
];

const ul = document.createElement("ul");
document.body.appendChild(ul);

listOfPeople.forEach((person) => {
  const newListItem = document.createElement("li");
  newListItem.innerText = person;
  ul.appendChild(newListItem);
});
