// Получаем элементы модального окна и кнопки
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.getElementById('closeBtn');

// Открыть модальное окно
loginBtn.onclick = function () {
  loginModal.style.display = 'block';
};

// Закрыть модальное окно
closeBtn.onclick = function () {
  loginModal.style.display = 'none';
};

// Закрыть модальное окно, если пользователь кликнул вне окна
window.onclick = function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = 'none';
  }
};
