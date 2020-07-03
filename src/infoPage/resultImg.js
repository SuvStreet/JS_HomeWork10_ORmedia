import {pageSurfing} from '../functionWebsite/pageSurfing';
import {arrSaveImg} from '../main';
import {animals} from '../functionWebsite/obj';
import {see} from '../infoPage/see';

// вывод результаты опроса
function resultImg(){

    document.getElementById('infoLikeDislike').innerHTML = ''; // очищаем див с лайками и дизлайками
    document.getElementById('positionGridCard').innerHTML = ''; // очищаем миниатюры
    document.getElementById('see').innerHTML = ''; // очищаем большую выбранную картинку

    if(arrSaveImg.length != 0){
        let x = JSON.parse(localStorage.getItem('test'));
        arrSaveImg.length = 0; // очищаем массив, что бы не создовать копии старых картинок
        
        // обнуляем счётчики
        let countLike = 0;
        let countDislike = 0;

        // считаем лайки и дизлайки
        for(let i = 0; i < x.length; i++){
            let animal = new animals(x[i].status, x[i].url);
            arrSaveImg.push(animal);
            
            if(x[i].status === true){
                countLike++;
            }
            else{
                countDislike++;
            }
        }

        // вывод число лайков и дизлайков
        for(let i = 0; i < x.length; i++){
        document.getElementById('infoLikeDislike').innerHTML =
            `<div class='countLike'><span>${countLike}</span><i class="fas fa-thumbs-up"></i></div>
            <div class='countDislike'><span>${countDislike}</span><i class="fas fa-thumbs-down"></i></div>`;
        }

        // выводим в миниатюре картинки на них лайки и дизлайки
        for(let i = 0; i < arrSaveImg.length; i++){
            document.getElementById('positionGridCard').innerHTML +=
            `<div class="imgAnimal" id='imgAnimal${i}'>
                <div  ${arrSaveImg[i].status === true ? `class="imgAssessmentTrue"><i class="fas fa-thumbs-up"></i>` : `class="imgAssessmentFalse"><i class="fas fa-thumbs-down"></i>`}</div>
                <img src=${arrSaveImg[i].url} alt='animal'></img>
            </div>`;
        }

        // выводим подсказывающий текст
        document.getElementById('see').innerHTML =
        `<div class="promptText">
            <p>Нажмите на миниатюру что бы увеличить фотографию</p>
        </div>`;

        // обрабочкик нажатие фото
        for(let i = 0; i < arrSaveImg.length; i++){
            document.getElementById(`imgAnimal${i}`).addEventListener('click', () =>{
                see(i);
            })
        };
    }
    else{
        // выводит анимацию и текст с предупреждением
        document.getElementById('see').innerHTML = 
        `<div class="voidPicture">
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
    }

    // кнопка назад
    document.getElementById(`returnBtn2`).addEventListener('click', () =>{
        pageSurfing('interview');
    });
};

export {resultImg}