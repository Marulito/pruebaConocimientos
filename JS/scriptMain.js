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