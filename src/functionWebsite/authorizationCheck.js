import {arrAuthorization} from "../loadingPage/loadingPage";
import {flagAuthorization} from "../functionWebsite/obj";
import {entranceBtn} from '../autohorizationPage/entranceBtn';
import {pageSurfing} from '../functionWebsite/pageSurfing';

// проверка авторизации
function authorizationCheck(inputLogin, inputPassword){
    let index = -1;
    if(inputLogin.trim() !== "" || inputPassword.trim() !== ""){
        for (let i = 0; i < arrAuthorization.length; i++){
            if (arrAuthorization[i].login === inputLogin){
                index = i;
            }
        }
        if (index === -1){
            alert('Неправильно введён Логин!');
        }
        else{
            if(arrAuthorization[index].password === inputPassword){
                let flagAuthorizationUser = new flagAuthorization('true', index);
                localStorage.setItem('statusAuthorization', JSON.stringify(flagAuthorizationUser));
                entranceBtn(flagAuthorizationUser.flag, flagAuthorizationUser.index);
                pageSurfing('content');

                document.getElementById('avatar_btn_authorization').style.display = 'flex';
            }
            else{
                 alert('Не правильно введён пороль!');
            }
        } 
    }
    else{
        alert('Заполните все поля!');
    }
};

export {authorizationCheck}