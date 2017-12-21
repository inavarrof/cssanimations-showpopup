var boton = document.querySelector('.clickbutton');
boton.addEventListener('click',showPupUp);

var popupElement=document.querySelector('.popup')
function showPupUp (){
popupElement.classList.add('animationpop');
}
