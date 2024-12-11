function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Знаходимо елементи
const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

// Додаємо обробник події
changeColorButton.addEventListener("click", () => {
  const colorRandom = getRandomHexColor();
  body.style.backgroundColor = colorRandom;
  colorSpan.textContent = colorRandom;
});
