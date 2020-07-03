import {ofline} from '../functionWebsite/ofline';
import {pageSurfing} from '../functionWebsite/pageSurfing';
import {inputLogin, inputPassword} from '../main';

// проверка выхода или входа на форму авторизации
function entranceExit(){
    if(JSON.parse(localStorage.getItem('statusAuthorization')).flag === 'true'){
        let temp = confirm("Вы точно хотите выйти?");
        if (temp === true){
            ofline();
            document.getElementById('avatarLogin').innerHTML = '';
            pageSurfing('content');

            inputLogin.value = '';
            inputPassword.value = '';
        }
    }
    else{
        pageSurfing('wrapperForm');
        document.getElementById('avatar_btn_authorization').style.display = 'none';
    }
};

export {entranceExit}