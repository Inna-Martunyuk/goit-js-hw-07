const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  // Очищаємо значення від пробілів і перевіряємо, чи воно порожнє
  const trimedValue = nameInput.value.trim();

  nameOutput.textContent = trimedValue || "Anonymous";
});
