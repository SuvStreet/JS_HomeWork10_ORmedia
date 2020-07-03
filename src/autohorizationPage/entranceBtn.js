import {arrAuthorization} from '../loadingPage/loadingPage';
import {visibilityBtnLikeDislike} from '../functionWebsite/visibilityBtnLikeDislike';

// проверка, пользователь зарегистрирован или нет
function entranceBtn(flagAuthorizationUser, i){
    if(flagAuthorizationUser === 'true'){
        document.getElementById('avatarLogin').innerHTML =
        `${arrAuthorization[i].login}`;
        document.getElementById(`entranceBtn`).innerHTML = 
        `<i class="fas fa-sign-out-alt"></i> <span>Выйти</span>`;
        document.getElementById('avatar').style.opacity = 1;
    }
    else{
        document.getElementById(`entranceBtn`).innerHTML = 
        `<i class="fas fa-sign-in-alt"></i> <span>Войти</span>`;
        document.getElementById('avatar').style.opacity = 0;
    }

    visibilityBtnLikeDislike(flagAuthorizationUser);
};

export {entranceBtn}