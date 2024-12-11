// Пример данных для проверки логина и пароля
const validUsername = 'lu'; // Задайте ваш логин
const validPassword = '123'; // Задайте ваш пароль

// Обработчик отправки формы
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  if (username === validUsername && password === validPassword) {
    alert('Авторизация прошла успешно!');
    // Закрыть модальное окно после успешной авторизации
    const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    modal.hide();
  } else {
    alert('Неверный логин или пароль!');
  }
});
