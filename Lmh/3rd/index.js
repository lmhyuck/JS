const maxNum = document.getElementById("maxNum");
const maxInput = maxNum.querySelector("input");
const guessNum = document.getElementById("guessNum");
const guessInput = guessNum.querySelector("input");
const playGame = guessNum.querySelector("button");
const chosenResult = document.getElementById("chosenResult");
const finalResult = document.getElementById("finalResult");

function compareNum() {
  const maxNumber = Number(maxInput.value);
  const guessNumber = guessInput.value;
  const machineNumber = Math.floor(Math.random() * (maxNumber + 1));
  chosenResult.innerText = `You chose: ${guessNumber}, the machine chose: ${machineNumber}.`;
  if (Number(guessNumber) === machineNumber) {
    finalResult.innerText = "You won!";
  } else {
    finalResult.innerText = "You lost!";
  }
}

playGame.addEventListener("click", compareNum);
