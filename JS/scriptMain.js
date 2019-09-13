//Accion del boton menu
const btnMenu = document.getElementById("menu-button");
const menu = document.querySelector(".menu");

const ipad = window.matchMedia('screen and (max-width: 767px)');

ipad.addListener(validarPermisoTamano);

validarPermisoTamano();

function validarPermisoTamano() {
	if (ipad.matches) {
		btnMenu.addEventListener('click', hideShow);
	} else {
		btnMenu.removeEventListener('click', hideShow);
	}
}

function hideShow() {
	if (menu.classList.contains('active-menu')) {
		menu.classList.remove('active-menu');
	} else {
		menu.classList.add('active-menu');
	}
}
// Slide "Main section"
const btnRightSlide = document.querySelector("div.arrow-right");
const btnLeftSlide = document.querySelector("div.arrow-left");

// console.log(btnLeftSlide);
// console.log(btnRightSlide);

btnRightSlide.addEventListener('click', moverElementosSlide);
btnLeftSlide.addEventListener('click', moverElementosSlide);

function moverElementosSlide(posicion = 0){
	console.log(posicion);
}