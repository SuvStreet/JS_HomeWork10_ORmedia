import {inputLogin, inputPassword} from '../main';

// возвращаем окно входа по умолчанию
function formEntrance(){
    document.getElementById('form_title').innerHTML = 
    `<span>Вход</span>`;

    document.getElementById('register_button').style.display = 'none';
    document.getElementById('form_button').style.display = 'block';

    document.getElementById('register').style.display = 'block';

    inputLogin.value = '';
    inputPassword.value = '';
};

export {formEntrance}