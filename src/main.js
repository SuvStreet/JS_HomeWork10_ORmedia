import {loadingDefaultPage} from './loadingPage/loadingPage';
import {pageSurfing} from './functionWebsite/pageSurfing';
import {addPictureCat, addPictureDog} from './loadingImgPage/loadingImg'

let flag = true; // выбраны коты или собаки true = коты
let arrSaveImg = new Array; // массив который хранит все наши картинки

const CAT_IMG = 'https://api.thecatapi.com/v1/images/search?size=full';
const DOG_IMG = 'https://api.thedogapi.com/v1/images/search';



/* localStorage.clear(); */

loadingDefaultPage();

// событие нажатие на кнопку коты 
document.getElementById('cat').addEventListener('click', () => {
    pageSurfing('interview');
    addPictureCat(CAT_IMG);
    flag = true;
    arrSaveImg = [];
    localStorage.setItem('test', JSON.stringify(arrSaveImg));
});

// событие нажатие на кнопку собаки 
document.getElementById('dog').addEventListener('click', () => {
    pageSurfing('interview');
    addPictureDog(DOG_IMG);
    flag = false;
    arrSaveImg = [];
    localStorage.setItem('test', JSON.stringify(arrSaveImg));
});

export {arrSaveImg, flag, CAT_IMG, DOG_IMG}

import {saveURL} from './loadingImgPage/loadingImg';
import {pressLike, pressDislike} from './loadingImgPage/likeDislike';
import {resultImg} from './infoPage/resultImg';

// обработчик на нажатие "Нравится"
document.getElementById('likeBtn').addEventListener('click', () =>{
    pressLike(saveURL);
});

// обработчик на нажатие "Не нравится"
document.getElementById('dislikeBtn').addEventListener('click', () =>{
    pressDislike(saveURL);
});

// обработчик на нажатие "Результаты"
document.getElementById('resultBtn').addEventListener('click', () =>{
    pageSurfing('resultInfo');
    localStorage.setItem('test', JSON.stringify(arrSaveImg));
    resultImg();
});

// обработчик на нажатие "Назад"
document.getElementById('returnBtn1').addEventListener('click', () =>{
    pageSurfing('content');
});

import {entranceExit} from './autohorizationPage/entranceExit';

export let inputLogin = document.getElementById('form_inputLogin');
export let inputPassword = document.getElementById('form_inputPassword');

// нажатие кнопки войти и перейти на форму авторизации & выйти
document.getElementById(`entranceBtn`).addEventListener('click', () =>{
    entranceExit();
});

import {formEntrance} from './autohorizationPage/formEntrance';

// кнопка назад в форме регестрации и входа
document.getElementById(`returnBtn3`).addEventListener('click', () =>{
    pageSurfing('content');
    formEntrance();
    document.getElementById('avatar_btn_authorization').style.display = 'flex';
});

import {authorizationCheck} from './functionWebsite/authorizationCheck';

// нажатие кнопки войти и проверка авторизации
document.getElementById(`form_button`).addEventListener('click', () =>{
    authorizationCheck(inputLogin.value, inputPassword.value);
});

import {formRegister} from './autohorizationPage/formRegister';

// ссылка регистрация
document.getElementById('register').addEventListener('click', () =>{
    formRegister();
});

import {register} from './functionWebsite/register';

// кнопка регистрация
document.getElementById('register_button').addEventListener('click', () =>{
    register(inputLogin.value, inputPassword.value);
});

// обработчик следующей картинки если пользователь не зарегистрирован
document.getElementById('nextImg').addEventListener('click', () =>{
    if (flag === true){
        addPictureCat(CAT_IMG);
    }
    else{
        addPictureCat(DOG_IMG);
    }
});