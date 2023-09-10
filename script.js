let form = window.document.getElementById('form-box');
let loginButton = window.document.getElementById('log-in')
let fecharLogin = window.document.getElementsByTagName('span')[0];


fecharLogin.addEventListener('click', fechar);

loginButton.addEventListener('click', toggleForm);


function toggleForm() {
  form.style.display = 'block';
}

function fechar() {
  form.style.display = 'none'
}