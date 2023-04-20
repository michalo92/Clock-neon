const hours = document.querySelector(".hour");
const minutes = document.querySelector(".minute");
const seconds = document.querySelector(".second");

setInterval(getTime, 1000);

function getTime() {
  const currentTime = new Date();
  currentTime.getSeconds().toLocaleString() < 10
    ? (seconds.textContent = "0" + currentTime.getSeconds().toLocaleString())
    : (seconds.textContent = currentTime.getSeconds().toLocaleString());
  currentTime.getHours().toLocaleString() < 10
    ? (hours.textContent = "0" + currentTime.getHours().toLocaleString())
    : (hours.textContent = currentTime.getHours().toLocaleString());
  currentTime.getMinutes().toLocaleString() < 10
    ? (minutes.textContent = "0" + currentTime.getMinutes().toLocaleString())
    : (minutes.textContent = currentTime.getMinutes().toLocaleString());
}
