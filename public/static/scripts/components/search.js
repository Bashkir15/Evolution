class Search {
	constructor() {
		this.searchIcon = document.querySelector('.search-icon');
		this.searchContainer = document.querySelector('.nav-search-container');
		this.searchStick = document.querySelector('.search-stick');
		this.searchBox = document.querySelector('.search-box');
		this.closeSearch1 = document.querySelector('.close-search-1');
		this.closeSearch2 = document.querySelector('.close-search-2');
		this.closeClickArea = document.querySelector('.close-click-area');
		this.activeSearch = false;
		this.topSearchBar = false;

		this.init = this._init.bind(this);

		this.init();
	}

	_init() {
		let openSearch = this._openSearch.bind(this);

		this.searchIcon.addEventListener('click', openSearch, false);
		this.searchStick.addEventListener('click', openSearch, false);
	}

	_openSearch(e) {
		e.stopPropagation();

		if (!this.activeSearch) {
			this.activeSearch = true;
			this.searchStick.classList.add('slide-in');
			this.searchContainer.classList.add('open');
			this.searchStick.classList.remove('close');
			this.searchIcon.classList.remove('close');
			this.searchIcon.classList.add('open');
		}

		window.requestAnimationFrame(() => {
			this.searchIcon.classList.add('expand-height');
		});

		this._addInputBox();
		this._addEvents();
	}

	_closeSearch(e) {
		if (this.searchContainer.classList.contains('open')) {
			e.stopPropagation();
			this.activeSearch = false;

			this._hideX();
			this._clearSearch();

			//this.searchIcon.classList.remove('expand-height');
			this.searchIcon.classList.add('close');

			window.setTimeout(() => {
				this.searchIcon.classList.remove('open');								
				this.closeClickArea.classList.remove('clickable')
				this.searchContainer.classList.remove('open');			
				this.searchBox.classList.remove('search-open');
				this.searchStick.classList.remove('slide-in');
			}, 400);
		}

		this._removeEvents();
	}

	_addInputBox() {
		window.requestAnimationFrame(() => {
			this.searchBox.classList.add('search-open');
		});

		this._showX();
	}

	_showX() {
		this.closeSearch1.classList.remove('slide-out');
		this.closeSearch2.classList.remove('slide-out');
		this.closeSearch1.classList.add('slide-in');
		this.closeSearch2.classList.add('slide-in');
		this.closeClickArea.classList.add('clickable')
	}

	_hideX() {
		this.closeSearch1.classList.add('slide-out');
		this.closeSearch2.classList.add('slide-out');
		this.closeSearch1.classList.remove('slide-in');
		this.closeSearch2.classList.remove('slide-in');		
	}

	_clearSearch() {
		if (this.searchBox.value !== '') {
			this.searchBox.value = '';
		}
	}

	_addEvents() {
		let closeSearch = this._closeSearch.bind(this);

		this.closeClickArea.addEventListener('click', closeSearch, false);
	}

	_removeEvents() {
		let closeSearch = this._closeSearch.bind(this);

		this.closeClickArea.removeEventListener('click', closeSearch, false);
	}
}

export default Search