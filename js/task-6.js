function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Знаходимо необхідні елементи
const input = document.querySelector("#controls input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

// Функція для створення колекції div-елементів
function createBoxes(amount) {
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
    size += 10; // Збільшуємо розміри для наступного елемента
  }

  boxesContainer.innerHTML = ""; // Очищуємо попередню колекцію
  boxesContainer.append(...elements); // Додаємо нові елементи в DOM
}

// Функція для очищення колекції div-елементів
function destroyBoxes() {
  boxesContainer.innerHTML = ""; // Очищуємо контейнер
}

// Обробник події для кнопки "Create"
btnCreate.addEventListener("click", () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount); // Створюємо колекцію
    input.value = ""; // Очищаємо значення input
  } else {
    alert("Будь ласка, введіть число від 1 до 100!");
  }
});

// Обробник події для кнопки "Destroy"
btnDestroy.addEventListener("click", destroyBoxes);
