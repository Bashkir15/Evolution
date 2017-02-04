import { landing } from './static/scripts/pages/landing'
import { contact } from './static/scripts/pages/contact'
import { about } from './static/scripts/pages/about'
import Search from './static/scripts/components/search'
import offside from './static/scripts/components/offside'

function init() {
	const menuTrigger = document.querySelector('.menu-icon');
	const sidenav = new offside();
	const search = new Search();

	if (window.location.pathname == '/contact') {
		contact();
	} else if (window.location.pathname == '/about') {
		about();
	} else if (window.location.pathname == '/') {
		landing();
	}

	menuTrigger.addEventListener('click', sidenav.open, false);
}

init();