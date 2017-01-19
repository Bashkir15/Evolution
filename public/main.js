
function init() {
	var activeSearch = false;
	var topSearchBar = false;
	var searchIcon = document.querySelector('.search-icon');
	var searchContainer = document.querySelector('.nav-search-container');
	var searchStick = document.querySelector('.search-stick');
	var searchBox = document.querySelector('.search-box');


	searchIcon.addEventListener('click', openSearch, false);
	searchStick.addEventListener('click', openSearch, false);

	function openSearch(e) {
		e.stopPropagation();

		if (!activeSearch) {
			activeSearch = true;
			searchStick.classList.add('slide-in');
			searchContainer.classList.add('open');
			searchIcon.classList.add('open');

			window.setTimeout(() => {
				searchIcon.classList.add('expand-height');
			}, 200);

			addInputBox();
		}
	}

	function addInputBox() {
		window.setTimeout(() => {
			searchBox.classList.add('search-open');
		}, 200);
	}
}

init();