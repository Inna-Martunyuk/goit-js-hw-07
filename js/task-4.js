// Шукаємо елемент
const formEl = document.querySelector(".login-form");

// Додаємо обробник події
formEl.addEventListener("submit", (event) => {
  event.preventDefault(); // Зупиняємо перезавантаження сторінки

  const emailEl = formEl.elements.email;
  const passwordEl = formEl.elements.password;

  // Перевіряємо на заповненість полів
  if (!emailEl.value.trim() || !passwordEl.value.trim()) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    [emailEl.name]: emailEl.value,
    [passwordEl.name]: passwordEl.value,
  };

  console.log(formData);

  // Скидаємо форму
  formEl.reset();
});
