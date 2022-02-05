let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const button = document.querySelectorAll(".btn");

button.forEach((button) => {
  button.addEventListener("click", (e) => {
    const stylesList = e.currentTarget.classList;
    if (stylesList.contains("decrease")) {
      count--;
    } else if (stylesList.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
