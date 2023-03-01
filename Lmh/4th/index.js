const clockTitle = document.querySelector(".js-clock");

function untilChristmas() {
  const masDate = new Date("2023-12-25");
  const date = new Date();

  const until = masDate - date;

  const untilDays = String(Math.floor(until / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const untilHours = String(
    Math.floor((until / (1000 * 60 * 60)) % 24)
  ).padStart(2, "0");
  const untilMinutes = String(Math.floor((until / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const untilSeconds = String(Math.floor((until / 1000) % 60)).padStart(2, "0");
  clockTitle.innerText = `${untilDays}d ${untilHours}h ${untilMinutes}m ${untilSeconds}s`;
}

untilChristmas();
setInterval(untilChristmas, 1000);
