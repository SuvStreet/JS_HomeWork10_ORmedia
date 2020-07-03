// хранит статус онлайна пользователя или статус офлайна
function flagAuthorization(flag, index){
    this.flag = flag,
    this.index = index
};

// будет хранить логины и пороли пользователей
function loginPassword(login, password){
    this.login = login,
    this.password = password
};

// будет хранить лайки и адрес картинки
function animals(status, url){
    this.status = status,
    this.url = url
};

export {flagAuthorization, loginPassword, animals}