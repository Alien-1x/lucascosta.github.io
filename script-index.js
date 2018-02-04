var $menu = document.querySelector('.navigation');
var $button = document.querySelector('#menu');
$button.addEventListener('click',responsiveMenu);
function responsiveMenu(){
	$menu.classList.add('menujs');
}
var $button2 = document.querySelector('#voltar');
$button2.addEventListener('click',lastMenu);
function lastMenu(){
	$menu.classList.remove('menujs');
}