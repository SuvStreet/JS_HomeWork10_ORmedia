import {arrSaveImg} from '../main';

// выводит выбранную фотографию на большой экран
function see(i){
    document.getElementById('see').innerHTML = 
    `<div class="seeImg">
        <img src=${arrSaveImg[i].url} alt='animal'></img>
    </div>`;
};

export {see}