var colors = [
  "#FAEBD7",
  "#00FFFF",
  "#A52A2A",
  "#7FFF00",
  "#B8860B",
  "#A9A9A9",
  "#FF1493",
];
var body = document.body;

const btn = document.getElementById("button");
const change = document.querySelector(".change");
btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  body.style.backgroundColor = colors[randomNumber];
  change.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
