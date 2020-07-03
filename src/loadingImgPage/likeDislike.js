import {flag, CAT_IMG, DOG_IMG, arrSaveImg} from '../main';
import {animals} from '../functionWebsite/obj';
import {addPictureDog, addPictureCat} from '../loadingImgPage/loadingImg';

// нажатие лайка у котов или собак
function pressLike(url){
    if(flag === true){
        let cat = new animals(true, url);
        arrSaveImg.push(cat);
        addPictureCat(CAT_IMG);
    }
    else{
        let dog = new animals(true, url);
        arrSaveImg.push(dog);
        addPictureDog(DOG_IMG);
    }
}

// нажатие дизлайка у котов или собак
function pressDislike(url){
    if(flag === true){
        let cat = new animals(false, url);
        arrSaveImg.push(cat);
        addPictureCat(CAT_IMG);
    }
    else{
        let dog = new animals(false, url);
        arrSaveImg.push(dog);
        addPictureDog(DOG_IMG);
    }
}

export {pressLike, pressDislike}