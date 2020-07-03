let divOpacitiContent = document.getElementById('content');
let divOpacitiInterview = document.getElementById('interview');
let divOpacitiResultInfo = document.getElementById('resultInfo');
let divOpacitiWrapperForm = document.getElementById('wrapperForm');

// выбор отображение страницы
function pageSurfing(link){
    switch(link){
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
};

export {pageSurfing}