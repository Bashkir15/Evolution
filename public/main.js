
function init() {
	var activeSearch = false;
	var topSearchBar = false;
	var searchIcon = document.querySelector('.search-icon');
	var searchContainer = document.querySelector('.nav-search-container');
	var searchStick = document.querySelector('.search-stick');
	var searchBox = document.querySelector('.search-box');
	var closeSearch1 = document.querySelector('.close-search-1');
	var closeSearch2 = document.querySelector('.close-search-2');


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
			showX();
		}
	}

	function showX() {
		closeSearch1.classList.remove('slide-out');
		closeSearch2.classList.remove('.slide-out');
		closeSearch1.classList.add('slide-in');
		closeSearch2.classList.add('slide-in');
	}

	function addInputBox() {
		window.setTimeout(() => {
			searchBox.classList.add('search-open');
		}, 200);
	}
}

init();