// показывать кнопки лайков или нет
function visibilityBtnLikeDislike(flagAuthorizationUser){
    if (flagAuthorizationUser !== 'true'){
        document.getElementById('likeBtn').style.display = 'none';
        document.getElementById('dislikeBtn').style.display = 'none';
        document.getElementById('resultBtn').style.display = 'none';
        document.getElementById('nextImg').style.display = 'block';
    }
    else{
        document.getElementById('likeBtn').style.display = 'block';
        document.getElementById('dislikeBtn').style.display = 'block';
        document.getElementById('resultBtn').style.display = 'block';
        document.getElementById('nextImg').style.display = 'none';
    }
};

export {visibilityBtnLikeDislike}