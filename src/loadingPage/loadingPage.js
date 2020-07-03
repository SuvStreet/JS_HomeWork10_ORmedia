let arrAuthorization = new Array; // сохроняем пороли и логины пользователей, что бы хранить не одного пользователя
let allAuthorization; // переменная записывается в масив arrAuthorization

import {loginPassword} from '../functionWebsite/obj';
import {pageSurfing} from '../functionWebsite/pageSurfing';
import {entranceBtn} from '../autohorizationPage/entranceBtn';
import {ofline} from '../functionWebsite/ofline';

// загрузка страницы по умолчанию
function loadingDefaultPage(){
    document.addEventListener("DOMContentLoaded", ()=>{
        pageSurfing('content');
    
        if (localStorage.getItem('saveAuthorization') !== null){
            let temp = JSON.parse(localStorage.getItem('saveAuthorization'));
            for (let i = 0; i < temp.length; i++){
                allAuthorization = new loginPassword(temp[i].login, temp[i].password);
                arrAuthorization.push(allAuthorization);
            }
        }
        else{
            allAuthorization = new loginPassword('admin', 'admin'); // создаём по умолчанию суперпользователя и добовляем в масив
            arrAuthorization.push(allAuthorization);
            localStorage.setItem('saveAuthorization', JSON.stringify(arrAuthorization));
        }
        
        if (localStorage.getItem('statusAuthorization') !== null ){
            let temp1 = JSON.parse(localStorage.getItem('statusAuthorization'));
            if (temp1.flag !== 'false'){
                entranceBtn(temp1.flag, temp1.index);
            }
            else{
                entranceBtn(temp1.flag, temp1.index);
            }
        }
        else{
            ofline();
        }
    
        document.getElementById('register_button').style.display = 'none';
        document.getElementById('form_button').style.display = 'block';
    });
};

export {loadingDefaultPage, arrAuthorization}
