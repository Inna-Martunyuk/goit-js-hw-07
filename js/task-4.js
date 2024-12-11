// Шукаємо елемент
const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  // Сторінка не перезавантажується
  event.preventDefault();

  const { email, password } = form.elements;

  // Перевіряю  на заповненість полів
  if (!email.value.trim() || !password.value.trim()) {
    alert("All form fields must be filled in");
    return; // Зупиняє виконання, коли є незаповненні поля
  }
  // Збираємо дані у об'єкт
  const formData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  // Виводимо у консоль
  console.log(formData);
  // Очищення значення полів
  form.reset();
});
