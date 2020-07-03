let saveURL; // сохроняем а потом передаём в кнопку нравится или нет

import {loading} from '../functionWebsite/loading';

async function imageCatDog(url){
    loading();
    let image = await fetch(url)
    return image;
};

//добавление котов
function addPictureCat(url){
    imageCatDog(url).then(response =>{
        response.json().then(data => {
            let strucktCat = document.getElementById('imgPosition');
            let img = document.createElement('img');
            img.src = data[0].url;
            img.alt = 'cat';

            saveURL = data[0].url;

            img.onload = () => {
                strucktCat.innerHTML = '';
                strucktCat.appendChild(img);
            };
        });
    });
}

//добавление собак
function addPictureDog(url){
    imageCatDog(url).then(response =>{
        response.json().then(data => {
            let strucktDog = document.getElementById('imgPosition');
            let img = document.createElement('img');
            img.src = data[0].url;
            img.alt = 'dog';

            saveURL = data[0].url;

            img.onload = () => {
                strucktDog.innerHTML = '';
                strucktDog.appendChild(img);
            };
        });
    });
}

export {addPictureCat, addPictureDog, saveURL}