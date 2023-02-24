const text = document.querySelector("#text");
text.style.color = "white";

function handleWindowColor() {
  if (window.innerWidth < 650) {
    document.body.style.backgroundColor = "#00BFFF";
  } else if (window.innerWidth > 650 && window.innerWidth < 1400) {
    document.body.style.backgroundColor = "#BA55D3";
  } else {
    document.body.style.backgroundColor = "#FFD700";
  }
}

window.addEventListener("resize", handleWindowColor);
