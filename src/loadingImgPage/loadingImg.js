let saveURL; // сохроняем а потом передаём в кнопку нравится или нет

import {loading} from '../functionWebsite/loading';

//добавление котов
async function addPictureCat(url){
    loading();
    await fetch(url).then(response =>{
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
            // console.log(data);
        });
    });
};

//добавление собак
async function addPictureDog(url){
    loading();
    await fetch(url).then(response =>{
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
            // console.log(data);
        });
    });
};

export {addPictureCat, addPictureDog, saveURL}