// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>
const message = document.querySelector("h2");
const superEventHandler = {
  handleMouseRightClick: function () {
    message.innerText = "That was a right click!";
    message.style.color = colors[4];
  },
  handleMouseOn: function () {
    message.innerText = "The mouse is here!";
    message.style.color = colors[0];
  },
  handleMouseOff: function () {
    message.innerText = "The mouse is gone!";
    message.style.color = colors[1];
  },
  handleWindowResize: function () {
    message.innerText = "You just resized!";
    message.style.color = colors[2];
  }
};

message.addEventListener("mouseleave", superEventHandler.handleMouseOff);
message.addEventListener("mouseenter", superEventHandler.handleMouseOn);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleMouseRightClick);
/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
