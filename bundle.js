/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/autohorizationPage/entranceBtn.js":
/*!***********************************************!*\
  !*** ./src/autohorizationPage/entranceBtn.js ***!
  \***********************************************/
/*! exports provided: entranceBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entranceBtn", function() { return entranceBtn; });
/* harmony import */ var _loadingPage_loadingPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loadingPage/loadingPage */ "./src/loadingPage/loadingPage.js");
/* harmony import */ var _functionWebsite_visibilityBtnLikeDislike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functionWebsite/visibilityBtnLikeDislike */ "./src/functionWebsite/visibilityBtnLikeDislike.js");

 // проверка, пользователь зарегистрирован или нет

function entranceBtn(flagAuthorizationUser, i) {
  if (flagAuthorizationUser === 'true') {
    document.getElementById('avatarLogin').innerHTML = `${_loadingPage_loadingPage__WEBPACK_IMPORTED_MODULE_0__["arrAuthorization"][i].login}`;
    document.getElementById(`entranceBtn`).innerHTML = `<i class="fas fa-sign-out-alt"></i> <span>Выйти</span>`;
    document.getElementById('avatar').style.opacity = 1;
  } else {
    document.getElementById(`entranceBtn`).innerHTML = `<i class="fas fa-sign-in-alt"></i> <span>Войти</span>`;
    document.getElementById('avatar').style.opacity = 0;
  }

  Object(_functionWebsite_visibilityBtnLikeDislike__WEBPACK_IMPORTED_MODULE_1__["visibilityBtnLikeDislike"])(flagAuthorizationUser);
}

;


/***/ }),

/***/ "./src/autohorizationPage/entranceExit.js":
/*!************************************************!*\
  !*** ./src/autohorizationPage/entranceExit.js ***!
  \************************************************/
/*! exports provided: entranceExit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entranceExit", function() { return entranceExit; });
/* harmony import */ var _functionWebsite_ofline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functionWebsite/ofline */ "./src/functionWebsite/ofline.js");
/* harmony import */ var _functionWebsite_pageSurfing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functionWebsite/pageSurfing */ "./src/functionWebsite/pageSurfing.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main */ "./src/main.js");


 // проверка выхода или входа на форму авторизации

function entranceExit() {
  if (JSON.parse(localStorage.getItem('statusAuthorization')).flag === 'true') {
    let temp = confirm("Вы точно хотите выйти?");

    if (temp === true) {
      Object(_functionWebsite_ofline__WEBPACK_IMPORTED_MODULE_0__["ofline"])();
      document.getElementById('avatarLogin').innerHTML = '';
      Object(_functionWebsite_pageSurfing__WEBPACK_IMPORTED_MODULE_1__["pageSurfing"])('content');
      _main__WEBPACK_IMPORTED_MODULE_2__["inputLogin"].value = '';
      _main__WEBPACK_IMPORTED_MODULE_2__["inputPassword"].value = '';
    }
  } else {
    Object(_functionWebsite_pageSurfing__WEBPACK_IMPORTED_MODULE_1__["pageSurfing"])('wrapperForm');
    document.getElementById('avatar_btn_authorization').style.display = 'none';
  }
}

;


/***/ }),

/***/ "./src/autohorizationPage/formEntrance.js":
/*!************************************************!*\
  !*** ./src/autohorizationPage/formEntrance.js ***!
  \************************************************/
/*! exports provided: formEntrance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formEntrance", function() { return formEntrance; });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ "./src/main.js");
 // возвращаем окно входа по умолчанию

function formEntrance() {
  document.getElementById('form_title').innerHTML = `<span>Вход</span>`;
  document.getElementById('register_button').style.display = 'none';
  document.getElementById('form_button').style.display = 'block';
  document.getElementById('register').style.display = 'block';
  _main__WEBPACK_IMPORTED_MODULE_0__["inputLogin"].value = '';
  _main__WEBPACK_IMPORTED_MODULE_0__["inputPassword"].value = '';
}

;


/***/ }),

/***/ "./src/autohorizationPage/formRegister.js":
/*!************************************************!*\
  !*** ./src/autohorizationPage/formRegister.js ***!
  \************************************************/
/*! exports provided: formRegister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formRegister", function() { return formRegister; });
// форма регистрации нового пользователя
function formRegister() {
  document.getElementById('form_title').innerHTML = `<span>Регистрация</span>`;
  document.getElementById('register_button').style.display = 'block';
  document.getElementById('form_button').style.display = 'none';
  document.getElementById('register').style.display = 'none';
}

;


/***/ }),

/***/ "./src/functionWebsite/authorizationCheck.js":
/*!***************************************************!*\
  !*** ./src/functionWebsite/authorizationCheck.js ***!
  \***************************************************/
/*! exports provided: authorizationCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authorizationCheck", function() { return authorizationCheck; });
/* harmony import */ var _loadingPage_loadingPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loadingPage/loadingPage */ "./src/loadingPage/loadingPage.js");
/* harmony import */ var _functionWebsite_obj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functionWebsite/obj */ "./src/functionWebsite/obj.js");
/* harmony import */ var _autohorizationPage_entranceBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../autohorizationPage/entranceBtn */ "./src/autohorizationPage/entranceBtn.js");
/* harmony import */ var _functionWebsite_pageSurfing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functionWebsite/pageSurfing */ "./src/functionWebsite/pageSurfing.js");



 // проверка авторизации

function authorizationCheck(inputLogin, inputPassword) {
  let index = -1;

  if (inputLogin.trim() !== "" || inputPassword.trim() !== "") {
    for (let i = 0; i < _loadingPage_loadingPage__WEBPACK_IMPORTED_MODULE_0__["arrAuthorization"].length; i++) {
      if (_loadingPage_loadingPage__WEBPACK_IMPORTED_MODULE_0__["arrAuthorization"][i].login === inputLogin) {
        index = i;
      }
    }

    if (index === -1) {
      alert('Неправильно введён Логин!');
    } else {
      if (_loadingPage_loadingPage__WEBPACK_IMPORTED_MODULE_0__["arrAuthorization"][index].password === inputPassword) {
        let flagAuthorizationUser = new _functionWebsite_obj__WEBPACK_IMPORTED_MODULE_1__["flagAuthorization"]('true', index);
        localStorage.setItem('statusAuthorization', JSON.stringify(flagAuthorizationUser));
        Object(_autohorizationPage_entranceBtn__WEBPACK_IMPORTED_MODULE_2__["entranceBtn"])(flagAuthorizationUser.flag, flagAuthorizationUser.index);
        Object(_functionWebsite_pageSurfing__WEBPACK_IMPORTED_MODULE_3__["pageSurfing"])('content');
        document.getElementById('avatar_btn_authorization').style.display = 'flex';
      } else {
        alert('Не правильно введён пороль!');
      }
    }
  } else {
    alert('Заполните все поля!');
  }
}

;


/***/ }),

/***/ "./src/functionWebsite/loading.js":
/*!****************************************!*\
  !*** ./src/functionWebsite/loading.js ***!
  \****************************************/
/*! exports provided: loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loading", function() { return loading; });
// анимационная загрузка
function loading() {
  document.getElementById('imgPosition').innerHTML = `<div class="cssload-loader"></div>`;
}

;


/***/ }),

/***/ "./src/functionWebsite/obj.js":
/*!************************************!*\
  !*** ./src/functionWebsite/obj.js ***!
  \************************************/
/*! exports provided: flagAuthorization, loginPassword, animals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flagAuthorization", function() { return flagAuthorization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginPassword", function() { return loginPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animals", function() { return animals; });
// хранит статус онлайна пользователя или статус офлайна
function flagAuthorization(flag, index) {
  this.flag = flag, this.index = index;
}

; // будет хранить логины и пороли пользователей

function loginPassword(login, password) {
  this.login = login, this.password = password;
}

; // будет хранить лайки и адрес картинки

function animals(status, url) {
  this.status = status, this.url = url;
}

;


/***/ }),

/***/ "./src/functionWebsite/ofline.js":
/*!***************************************!*\
  !*** ./src/functionWebsite/ofline.js ***!
  \***************************************/
/*! exports provided: ofline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofline", function() { return ofline; });
/* harmony import */ var _functionWebsite_obj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functionWebsite/obj */ "./src/functionWebsite/obj.js");
/* harmony import */ var _autohorizationPage_entranceBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../autohorizationPage/entranceBtn */ "./src/autohorizationPage/entranceBtn.js");

 // сохроняем статус офлайн

function ofline() {
  let flagAuthorizationUser = new _functionWebsite_obj__WEBPACK_IMPORTED_MODULE_0__["flagAuthorization"]('false', '0');
  localStorage.setItem('statusAuthorization', JSON.stringify(flagAuthorizationUser));
  Object(_autohorizationPage_entranceBtn__WEBPACK_IMPORTED_MODULE_1__["entranceBtn"])(flagAuthorizationUser.flag, flagAuthorizationUser.index);
}



/***/ }),

/***/ "./src/functionWebsite/pageSurfing.js":
/*!********************************************!*\
  !*** ./src/functionWebsite/pageSurfing.js ***!
  \********************************************/
/*! exports provided: pageSurfing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageSurfing", function() { return pageSurfing; });
let divOpacitiContent = document.getElementById('content');
let divOpacitiInterview = document.getElementById('interview');
let divOpacitiResultInfo = document.getElementById('resultInfo');
let divOpacitiWrapperForm = document.getElementById('wrapperForm'); // выбор отображение страницы

function pageSurfing(link) {
  switch (link) {
    case 'content':
      divOpacitiContent.style.display = 'flex';
      divOpacitiInterview.style.display = 'none';
      divOpacitiResultInfo.style.display = 'none';
      divOpacitiWrapperForm.style.display = 'none';
      break;

    case 'interview':
      divOpacitiContent.style.display = 'none';
      divOpacitiInterview.style.display = 'flex';
      divOpacitiResultInfo.style.display = 'none';
      divOpacitiWrapperForm.style.display = 'none';
      break;

    case 'resultInfo':
      divOpacitiContent.style.display = 'none';
      divOpacitiInterview.style.display = 'none';
      divOpacitiResultInfo.style.display = 'flex';
      divOpacitiWrapperForm.style.display = 'none';
      break;

    case 'wrapperForm':
      divOpacitiContent.style.display = 'none';
      divOpacitiInterview.style.display = 'none';
      divOpacitiResultInfo.style.display = 'none';
      divOpacitiWrapperForm.style.display = 'flex';
      break;
  }
}

;


/***/ }),

/***/ "./src/functionWebsite/register.js":
/*!*****************************************!*\
  !*** ./src/functionWebsite/register.js ***!
  \*****************************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var _functionWebsite_obj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functionWebsite/obj */ "./src/functionWebsite/obj.js");
/* harmony import */ var _loadingPage_loadingPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loadingPage/loadingPage */ "./src/loadingPage/loadingPage.js");
/* harmony import */ var _autohorizationPage_formEntrance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../autohorizationPage/formEntrance */ "./src/autohorizationPage/formEntrance.js");
/* harmony import */ var _functionWebsite_pageSurfing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functionWebsite/pageSurfing */ "./src/functionWebsite/pageSurfing.js");
/* harmony import */ var _functionWebsite_authorizationCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functionWebsite/authorizationCheck */ "./src/functionWebsite/authorizationCheck.js");




 // процесс регистрации нового пользователя

function register(inputLogin, inputPassword) {
  let noRepeat = true;

  if (inputLogin.trim() !== "" && inputPassword.trim() !== "") {
    for (let i = 0; i < _loadingPage_loadingPage__WEBPACK_IMPORTED_MODULE_1__["arrAuthorization"].length; i++) {
      if (_loadingPage_loadingPage__WEBPACK_IMPORTED_MODULE_1__["arrAuthorization"][i].login === inputLogin) {
        alert('Пользователь с таким именем уже зарегистрирован!');
        noRepeat = false;
        break;
      }
    }
  } else {
    alert('Заполните все поля!');
    noRepeat = false;
  }

  console.log(noRepeat);

  if (noRepeat === true) {
    let allAuthorization = new _functionWebsite_obj__WEBPACK_IMPORTED_MODULE_0__["loginPassword"](inputLogin, inputPassword);
    _loadingPage_loadingPage__WEBPACK_IMPORTED_MODULE_1__["arrAuthorization"].push(allAuthorization);
    localStorage.setItem('saveAuthorization', JSON.stringify(_loadingPage_loadingPage__WEBPACK_IMPORTED_MODULE_1__["arrAuthorization"]));
    alert("Поздравляем с регистрацией!");
    Object(_autohorizationPage_formEntrance__WEBPACK_IMPORTED_MODULE_2__["formEntrance"])();
    Object(_functionWebsite_pageSurfing__WEBPACK_IMPORTED_MODULE_3__["pageSurfing"])('content');
    Object(_functionWebsite_authorizationCheck__WEBPACK_IMPORTED_MODULE_4__["authorizationCheck"])(inputLogin, inputPassword);
  }
}



/***/ }),

/***/ "./src/functionWebsite/visibilityBtnLikeDislike.js":
/*!*********************************************************!*\
  !*** ./src/functionWebsite/visibilityBtnLikeDislike.js ***!
  \*********************************************************/
/*! exports provided: visibilityBtnLikeDislike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visibilityBtnLikeDislike", function() { return visibilityBtnLikeDislike; });
// показывать кнопки лайков или нет
function visibilityBtnLikeDislike(flagAuthorizationUser) {
  if (flagAuthorizationUser !== 'true') {
    document.getElementById('likeBtn').style.display = 'none';
    document.getElementById('dislikeBtn').style.display = 'none';
    document.getElementById('resultBtn').style.display = 'none';
    document.getElementById('nextImg').style.display = 'block';
  } else {
    document.getElementById('likeBtn').style.display = 'block';
    document.getElementById('dislikeBtn').style.display = 'block';
    document.getElementById('resultBtn').style.display = 'block';
    document.getElementById('nextImg').style.display = 'none';
  }
}

;


/***/ }),

/***/ "./src/infoPage/resultImg.js":
/*!***********************************!*\
  !*** ./src/infoPage/resultImg.js ***!
  \***********************************/
/*! exports provided: resultImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultImg", function() { return resultImg; });
/* harmony import */ var _functionWebsite_pageSurfing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functionWebsite/pageSurfing */ "./src/functionWebsite/pageSurfing.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main */ "./src/main.js");
/* harmony import */ var _functionWebsite_obj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functionWebsite/obj */ "./src/functionWebsite/obj.js");
/* harmony import */ var _infoPage_see__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../infoPage/see */ "./src/infoPage/see.js");



 // вывод результаты опроса

function resultImg() {
  document.getElementById('infoLikeDislike').innerHTML = ''; // очищаем див с лайками и дизлайками

  document.getElementById('positionGridCard').innerHTML = ''; // очищаем миниатюры

  document.getElementById('see').innerHTML = ''; // очищаем большую выбранную картинку

  console.log(_main__WEBPACK_IMPORTED_MODULE_1__["arrSaveImg"]);

  if (_main__WEBPACK_IMPORTED_MODULE_1__["arrSaveImg"].length != 0) {
    let x = JSON.parse(localStorage.getItem('test'));
    _main__WEBPACK_IMPORTED_MODULE_1__["arrSaveImg"].length = 0; // очищаем массив, что бы не создовать копии старых картинок
    // обнуляем счётчики

    let countLike = 0;
    let countDislike = 0; // считаем лайки и дизлайки

    for (let i = 0; i < x.length; i++) {
      let animal = new _functionWebsite_obj__WEBPACK_IMPORTED_MODULE_2__["animals"](x[i].status, x[i].url);
      _main__WEBPACK_IMPORTED_MODULE_1__["arrSaveImg"].push(animal);

      if (x[i].status === true) {
        countLike++;
      } else {
        countDislike++;
      }
    } // вывод число лайков и дизлайков


    for (let i = 0; i < x.length; i++) {
      document.getElementById('infoLikeDislike').innerHTML = `<div class='countLike'><span>${countLike}</span><i class="fas fa-thumbs-up"></i></div>
            <div class='countDislike'><span>${countDislike}</span><i class="fas fa-thumbs-down"></i></div>`;
    } // выводим в миниатюре картинки на них лайки и дизлайки


    for (let i = 0; i < _main__WEBPACK_IMPORTED_MODULE_1__["arrSaveImg"].length; i++) {
      document.getElementById('positionGridCard').innerHTML += `<div class="imgAnimal" id='imgAnimal${i}'>
                <div  ${_main__WEBPACK_IMPORTED_MODULE_1__["arrSaveImg"][i].status === true ? `class="imgAssessmentTrue"><i class="fas fa-thumbs-up"></i>` : `class="imgAssessmentFalse"><i class="fas fa-thumbs-down"></i>`}</div>
                <img src=${_main__WEBPACK_IMPORTED_MODULE_1__["arrSaveImg"][i].url} alt='animal'></img>
            </div>`;
    } // выводим подсказывающий текст


    document.getElementById('see').innerHTML = `<div class="promptText">
            <p>Нажмите на миниатюру что бы увеличить фотографию</p>
        </div>`; // обрабочкик нажатие фото

    for (let i = 0; i < _main__WEBPACK_IMPORTED_MODULE_1__["arrSaveImg"].length; i++) {
      document.getElementById(`imgAnimal${i}`).addEventListener('click', () => {
        Object(_infoPage_see__WEBPACK_IMPORTED_MODULE_3__["see"])(i);
      });
    }

    ;
  } else {
    // выводит анимацию и текст с предупреждением
    document.getElementById('see').innerHTML = `<div class="voidPicture">
            <div class="cssload-board">
                <div class="cssload-left"></div>
                <div class="cssload-right"></div>
                <div class="cssload-ball"></div>
                <div class="cssload-ballhit"></div>
            </div>
        </div>
        <div class="messageEmptyArray">
            <p>Тут пока пусто, может попробуете для начала оценить картинку?!</p>
        </div>`;
  } // кнопка назад


  document.getElementById(`returnBtn2`).addEventListener('click', () => {
    Object(_functionWebsite_pageSurfing__WEBPACK_IMPORTED_MODULE_0__["pageSurfing"])('interview');
  });
}

;


/***/ }),

/***/ "./src/infoPage/see.js":
/*!*****************************!*\
  !*** ./src/infoPage/see.js ***!
  \*****************************/
/*! exports provided: see */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "see", function() { return see; });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ "./src/main.js");
 // выводит выбранную фотографию на большой экран

function see(i) {
  document.getElementById('see').innerHTML = `<div class="seeImg">
        <img src=${_main__WEBPACK_IMPORTED_MODULE_0__["arrSaveImg"][i].url} alt='animal'></img>
    </div>`;
}

;


/***/ }),

/***/ "./src/loadingImgPage/likeDislike.js":
/*!*******************************************!*\
  !*** ./src/loadingImgPage/likeDislike.js ***!
  \*******************************************/
/*! exports provided: pressLike, pressDislike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pressLike", function() { return pressLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pressDislike", function() { return pressDislike; });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ "./src/main.js");
/* harmony import */ var _functionWebsite_obj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functionWebsite/obj */ "./src/functionWebsite/obj.js");
/* harmony import */ var _loadingImgPage_loadingImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loadingImgPage/loadingImg */ "./src/loadingImgPage/loadingImg.js");


 // нажатие лайка у котов или собак

function pressLike(url) {
  if (_main__WEBPACK_IMPORTED_MODULE_0__["flag"] === true) {
    let cat = new _functionWebsite_obj__WEBPACK_IMPORTED_MODULE_1__["animals"](true, url);
    _main__WEBPACK_IMPORTED_MODULE_0__["arrSaveImg"].push(cat);
    Object(_loadingImgPage_loadingImg__WEBPACK_IMPORTED_MODULE_2__["addPictureCat"])(_main__WEBPACK_IMPORTED_MODULE_0__["CAT_IMG"]);
  } else {
    let dog = new _functionWebsite_obj__WEBPACK_IMPORTED_MODULE_1__["animals"](true, url);
    _main__WEBPACK_IMPORTED_MODULE_0__["arrSaveImg"].push(dog);
    Object(_loadingImgPage_loadingImg__WEBPACK_IMPORTED_MODULE_2__["addPictureDog"])(_main__WEBPACK_IMPORTED_MODULE_0__["DOG_IMG"]);
  }
} // нажатие дизлайка у котов или собак


function pressDislike(url) {
  if (_main__WEBPACK_IMPORTED_MODULE_0__["flag"] === true) {
    let cat = new _functionWebsite_obj__WEBPACK_IMPORTED_MODULE_1__["animals"](false, url);
    _main__WEBPACK_IMPORTED_MODULE_0__["arrSaveImg"].push(cat);
    Object(_loadingImgPage_loadingImg__WEBPACK_IMPORTED_MODULE_2__["addPictureCat"])(_main__WEBPACK_IMPORTED_MODULE_0__["CAT_IMG"]);
  } else {
    let dog = new _functionWebsite_obj__WEBPACK_IMPORTED_MODULE_1__["animals"](false, url);
    _main__WEBPACK_IMPORTED_MODULE_0__["arrSaveImg"].push(dog);
    Object(_loadingImgPage_loadingImg__WEBPACK_IMPORTED_MODULE_2__["addPictureDog"])(_main__WEBPACK_IMPORTED_MODULE_0__["DOG_IMG"]);
  }
}



/***/ }),

/***/ "./src/loadingImgPage/loadingImg.js":
/*!******************************************!*\
  !*** ./src/loadingImgPage/loadingImg.js ***!
  \******************************************/
/*! exports provided: addPictureCat, addPictureDog, saveURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPictureCat", function() { return addPictureCat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPictureDog", function() { return addPictureDog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveURL", function() { return saveURL; });
/* harmony import */ var _functionWebsite_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functionWebsite/loading */ "./src/functionWebsite/loading.js");
let saveURL; // сохроняем а потом передаём в кнопку нравится или нет

 //добавление котов

async function addPictureCat(url) {
  Object(_functionWebsite_loading__WEBPACK_IMPORTED_MODULE_0__["loading"])();
  await fetch(url).then(response => {
    response.json().then(data => {
      let strucktCat = document.getElementById('imgPosition');
      let img = document.createElement('img');
      img.src = data[0].url;
      img.alt = 'cat';
      saveURL = data[0].url;

      img.onload = () => {
        strucktCat.innerHTML = '';
        strucktCat.appendChild(img);
      }; // console.log(data);

    });
  });
}

; //добавление собак

async function addPictureDog(url) {
  Object(_functionWebsite_loading__WEBPACK_IMPORTED_MODULE_0__["loading"])();
  await fetch(url).then(response => {
    response.json().then(data => {
      let strucktDog = document.getElementById('imgPosition');
      let img = document.createElement('img');
      img.src = data[0].url;
      img.alt = 'dog';
      saveURL = data[0].url;

      img.onload = () => {
        strucktDog.innerHTML = '';
        strucktDog.appendChild(img);
      }; // console.log(data);

    });
  });
}

;


/***/ }),

/***/ "./src/loadingPage/loadingPage.js":
/*!****************************************!*\
  !*** ./src/loadingPage/loadingPage.js ***!
  \****************************************/
/*! exports provided: loadingDefaultPage, arrAuthorization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingDefaultPage", function() { return loadingDefaultPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrAuthorization", function() { return arrAuthorization; });
/* harmony import */ var _functionWebsite_obj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functionWebsite/obj */ "./src/functionWebsite/obj.js");
/* harmony import */ var _functionWebsite_pageSurfing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functionWebsite/pageSurfing */ "./src/functionWebsite/pageSurfing.js");
/* harmony import */ var _autohorizationPage_entranceBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../autohorizationPage/entranceBtn */ "./src/autohorizationPage/entranceBtn.js");
/* harmony import */ var _functionWebsite_ofline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functionWebsite/ofline */ "./src/functionWebsite/ofline.js");
let arrAuthorization = new Array(); // сохроняем пороли и логины пользователей, что бы хранить не одного пользователя

let allAuthorization; // переменная записывается в масив arrAuthorization




 // загрузка страницы по умолчанию

function loadingDefaultPage() {
  document.addEventListener("DOMContentLoaded", () => {
    Object(_functionWebsite_pageSurfing__WEBPACK_IMPORTED_MODULE_1__["pageSurfing"])('content');

    if (localStorage.getItem('saveAuthorization') !== null) {
      let temp = JSON.parse(localStorage.getItem('saveAuthorization'));

      for (let i = 0; i < temp.length; i++) {
        allAuthorization = new _functionWebsite_obj__WEBPACK_IMPORTED_MODULE_0__["loginPassword"](temp[i].login, temp[i].password);
        arrAuthorization.push(allAuthorization);
      }
    } else {
      allAuthorization = new _functionWebsite_obj__WEBPACK_IMPORTED_MODULE_0__["loginPassword"]('admin', 'admin'); // создаём по умолчанию суперпользователя и добовляем в масив

      arrAuthorization.push(allAuthorization);
      localStorage.setItem('saveAuthorization', JSON.stringify(arrAuthorization));
    }

    if (localStorage.getItem('statusAuthorization') !== null) {
      let temp1 = JSON.parse(localStorage.getItem('statusAuthorization'));

      if (temp1.flag !== 'false') {
        Object(_autohorizationPage_entranceBtn__WEBPACK_IMPORTED_MODULE_2__["entranceBtn"])(temp1.flag, temp1.index);
      } else {
        Object(_autohorizationPage_entranceBtn__WEBPACK_IMPORTED_MODULE_2__["entranceBtn"])(temp1.flag, temp1.index);
      }
    } else {
      Object(_functionWebsite_ofline__WEBPACK_IMPORTED_MODULE_3__["ofline"])();
    }

    document.getElementById('register_button').style.display = 'none';
    document.getElementById('form_button').style.display = 'block';
  });
}

;


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: arrSaveImg, flag, CAT_IMG, DOG_IMG, inputLogin, inputPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrSaveImg", function() { return arrSaveImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flag", function() { return flag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAT_IMG", function() { return CAT_IMG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOG_IMG", function() { return DOG_IMG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputLogin", function() { return inputLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputPassword", function() { return inputPassword; });
/* harmony import */ var _loadingPage_loadingPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadingPage/loadingPage */ "./src/loadingPage/loadingPage.js");
/* harmony import */ var _functionWebsite_pageSurfing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionWebsite/pageSurfing */ "./src/functionWebsite/pageSurfing.js");
/* harmony import */ var _loadingImgPage_loadingImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadingImgPage/loadingImg */ "./src/loadingImgPage/loadingImg.js");
/* harmony import */ var _loadingImgPage_likeDislike__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadingImgPage/likeDislike */ "./src/loadingImgPage/likeDislike.js");
/* harmony import */ var _infoPage_resultImg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./infoPage/resultImg */ "./src/infoPage/resultImg.js");
/* harmony import */ var _autohorizationPage_entranceExit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./autohorizationPage/entranceExit */ "./src/autohorizationPage/entranceExit.js");
/* harmony import */ var _autohorizationPage_formEntrance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autohorizationPage/formEntrance */ "./src/autohorizationPage/formEntrance.js");
/* harmony import */ var _functionWebsite_authorizationCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functionWebsite/authorizationCheck */ "./src/functionWebsite/authorizationCheck.js");
/* harmony import */ var _autohorizationPage_formRegister__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./autohorizationPage/formRegister */ "./src/autohorizationPage/formRegister.js");
/* harmony import */ var _functionWebsite_register__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functionWebsite/register */ "./src/functionWebsite/register.js");



let flag = true; // выбраны коты или собаки true = коты

let arrSaveImg = new Array(); // массив который хранит все наши картинки

const CAT_IMG = 'https://api.thecatapi.com/v1/images/search?size=full';
const DOG_IMG = 'https://api.thedogapi.com/v1/images/search';
/* localStorage.clear(); */

Object(_loadingPage_loadingPage__WEBPACK_IMPORTED_MODULE_0__["loadingDefaultPage"])(); // событие нажатие на кнопку коты 

document.getElementById('cat').addEventListener('click', () => {
  Object(_functionWebsite_pageSurfing__WEBPACK_IMPORTED_MODULE_1__["pageSurfing"])('interview');
  Object(_loadingImgPage_loadingImg__WEBPACK_IMPORTED_MODULE_2__["addPictureCat"])(CAT_IMG);
  flag = true;
  arrSaveImg = [];
  localStorage.setItem('test', JSON.stringify(arrSaveImg));
}); // событие нажатие на кнопку собаки 

document.getElementById('dog').addEventListener('click', () => {
  Object(_functionWebsite_pageSurfing__WEBPACK_IMPORTED_MODULE_1__["pageSurfing"])('interview');
  Object(_loadingImgPage_loadingImg__WEBPACK_IMPORTED_MODULE_2__["addPictureDog"])(DOG_IMG);
  flag = false;
  arrSaveImg = [];
  localStorage.setItem('test', JSON.stringify(arrSaveImg));
});



 // обработчик на нажатие "Нравится"

document.getElementById('likeBtn').addEventListener('click', () => {
  Object(_loadingImgPage_likeDislike__WEBPACK_IMPORTED_MODULE_3__["pressLike"])(_loadingImgPage_loadingImg__WEBPACK_IMPORTED_MODULE_2__["saveURL"]);
}); // обработчик на нажатие "Не нравится"

document.getElementById('dislikeBtn').addEventListener('click', () => {
  Object(_loadingImgPage_likeDislike__WEBPACK_IMPORTED_MODULE_3__["pressDislike"])(_loadingImgPage_loadingImg__WEBPACK_IMPORTED_MODULE_2__["saveURL"]);
}); // обработчик на нажатие "Результаты"

document.getElementById('resultBtn').addEventListener('click', () => {
  Object(_functionWebsite_pageSurfing__WEBPACK_IMPORTED_MODULE_1__["pageSurfing"])('resultInfo');
  localStorage.setItem('test', JSON.stringify(arrSaveImg));
  Object(_infoPage_resultImg__WEBPACK_IMPORTED_MODULE_4__["resultImg"])();
}); // обработчик на нажатие "Назад"

document.getElementById('returnBtn1').addEventListener('click', () => {
  Object(_functionWebsite_pageSurfing__WEBPACK_IMPORTED_MODULE_1__["pageSurfing"])('content');
});

let inputLogin = document.getElementById('form_inputLogin');
let inputPassword = document.getElementById('form_inputPassword'); // нажатие кнопки войти и перейти на форму авторизации & выйти

document.getElementById(`entranceBtn`).addEventListener('click', () => {
  Object(_autohorizationPage_entranceExit__WEBPACK_IMPORTED_MODULE_5__["entranceExit"])();
});
 // кнопка назад в форме регестрации и входа

document.getElementById(`returnBtn3`).addEventListener('click', () => {
  Object(_functionWebsite_pageSurfing__WEBPACK_IMPORTED_MODULE_1__["pageSurfing"])('content');
  Object(_autohorizationPage_formEntrance__WEBPACK_IMPORTED_MODULE_6__["formEntrance"])();
  document.getElementById('avatar_btn_authorization').style.display = 'flex';
});
 // нажатие кнопки войти и проверка авторизации

document.getElementById(`form_button`).addEventListener('click', () => {
  Object(_functionWebsite_authorizationCheck__WEBPACK_IMPORTED_MODULE_7__["authorizationCheck"])(inputLogin.value, inputPassword.value);
});
 // ссылка регистрация

document.getElementById('register').addEventListener('click', () => {
  Object(_autohorizationPage_formRegister__WEBPACK_IMPORTED_MODULE_8__["formRegister"])();
});
 // кнопка регистрация

document.getElementById('register_button').addEventListener('click', () => {
  Object(_functionWebsite_register__WEBPACK_IMPORTED_MODULE_9__["register"])(inputLogin.value, inputPassword.value);
}); // обработчик следующей картинки если пользователь не зарегистрирован

document.getElementById('nextImg').addEventListener('click', () => {
  if (flag === true) {
    Object(_loadingImgPage_loadingImg__WEBPACK_IMPORTED_MODULE_2__["addPictureCat"])(CAT_IMG);
  } else {
    Object(_loadingImgPage_loadingImg__WEBPACK_IMPORTED_MODULE_2__["addPictureCat"])(DOG_IMG);
  }
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map