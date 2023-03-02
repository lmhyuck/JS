const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const button = document.querySelector("button");
const background = document.querySelector("body");

function gradation() {
  const one = Math.floor(Math.random() * colors.length);
  let two = Math.floor(Math.random() * colors.length);
  while (one === two) {
    two = Math.floor(Math.random() * colors.length);
  }
  const firstColor = colors[one];
  const secondColor = colors[two];
  background.style.backgroundImage = `linear-gradient(to right,${firstColor},${secondColor})`;
}

button.addEventListener("click", gradation);
