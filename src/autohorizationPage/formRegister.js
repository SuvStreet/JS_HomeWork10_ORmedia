// форма регистрации нового пользователя
function formRegister(){
    document.getElementById('form_title').innerHTML = 
    `<span>Регистрация</span>`;

    document.getElementById('register_button').style.display = 'block';
    document.getElementById('form_button').style.display = 'none';

    document.getElementById('register').style.display = 'none';
};

export {formRegister}