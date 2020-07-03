import {loginPassword} from '../functionWebsite/obj';
import {arrAuthorization} from '../loadingPage/loadingPage';
import {formEntrance} from '../autohorizationPage/formEntrance';
import {pageSurfing} from '../functionWebsite/pageSurfing';
import {authorizationCheck} from '../functionWebsite/authorizationCheck';

// процесс регистрации нового пользователя
function register(inputLogin, inputPassword){
    let noRepeat = true;
    if(inputLogin.trim() !== "" && inputPassword.trim() !== ""){
        for (let i = 0; i < arrAuthorization.length; i++){
            if (arrAuthorization[i].login === inputLogin){
                alert('Пользователь с таким именем уже зарегистрирован!');
                noRepeat = false;
                break;
            }
        }
    }
    else{
        alert('Заполните все поля!');
        noRepeat = false;
    }

    console.log(noRepeat);

    if(noRepeat === true){
        let allAuthorization = new loginPassword(inputLogin, inputPassword);
        arrAuthorization.push(allAuthorization);

        localStorage.setItem('saveAuthorization', JSON.stringify(arrAuthorization));

        alert("Поздравляем с регистрацией!");

        formEntrance();
        pageSurfing('content');
        authorizationCheck(inputLogin, inputPassword);
    }
}

export {register}