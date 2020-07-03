import {flagAuthorization} from '../functionWebsite/obj';
import {entranceBtn} from '../autohorizationPage/entranceBtn'

// сохроняем статус офлайн
function ofline(){
    let flagAuthorizationUser = new flagAuthorization('false', '0');
    localStorage.setItem('statusAuthorization', JSON.stringify(flagAuthorizationUser));
    entranceBtn(flagAuthorizationUser.flag, flagAuthorizationUser.index);
}

export {ofline}