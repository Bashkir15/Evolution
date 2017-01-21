import { landing } from './static/scripts/pages/landing'
import offside from './static/scripts/components/offside'

function init() {
	var menuTrigger = document.querySelector('.menu-icon');
	var activeSearch = false;
	var topSearchBar = false;
	var searchIcon = document.querySelector('.search-icon');
	var searchContainer = document.querySelector('.nav-search-container');
	var searchStick = document.querySelector('.search-stick');
	var searchBox = document.querySelector('.search-box');
	var closeSearch1 = document.querySelector('.close-search-1');
	var closeSearch2 = document.querySelector('.close-search-2');
	var closeClickArea = document.querySelector('.close-click-area');
	var searchResults = document.querySelector('.search-results-list');

	var searchOptions = [
		{
			title: 'This is a test title',
			description: 'This is a test description of the product'
		},

		{
			title: 'This is a test title',
			description: "This is a test description"
		}
	];

	var sidenav = new offside();

	searchIcon.addEventListener('click', openSearch, false);
	searchStick.addEventListener('click', openSearch, false);

	function openSearch(e) {
		e.stopPropagation();

		if (!activeSearch) {
			activeSearch = true;
			searchStick.classList.add('slide-in');
			searchContainer.classList.add('open');
			searchStick.classList.remove('close');
			searchIcon.classList.remove('close');
			searchIcon.classList.add('open');

			window.setTimeout(() => {
				searchIcon.classList.add('expand-height');
			}, 200);

			addInputBox();
			showX();
		}
	}

	function closeSearch(e) {
		if (searchContainer.classList.contains('open')) {

			e.stopPropagation();
			activeSearch = false;
			hideX();
			clearSearch();
			searchIcon.classList.remove('open');
			searchIcon.classList.remove('expand-height');
			searchIcon.classList.add('close');
			searchContainer.classList.remove('open');
	
			
			window.setTimeout(() => {
				searchStick.classList.remove('slide-in');
				searchIcon.classList.remove('open');
				closeClickArea.classList.remove('clickable');
				searchBox.classList.remove('search-open');
			}, 800);
		}
	}

	function clearSearch() {
		searchResults.innerHTML = '';
		searchBox.value = '';
	}

	function showX() {
		closeSearch1.classList.remove('slide-out');
		closeSearch2.classList.remove('slide-out');
		closeSearch1.classList.add('slide-in');
		closeSearch2.classList.add('slide-in');
		closeClickArea.classList.add('clickable');
	}

	function hideX() {
		closeSearch1.classList.remove('slide-in');
		closeSearch2.classList.remove('slide-in');
		closeSearch1.classList.add('slide-out');
		closeSearch2.classList.add('slide-out');;
	}

	function addInputBox() {
		window.setTimeout(() => {
			searchBox.classList.add('search-open');
		}, 200);
	}

	menuTrigger.addEventListener('click', sidenav.open, false);
	closeClickArea.addEventListener('click', closeSearch, false);


}

init();
landing();