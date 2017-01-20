class offside {
	constructor(options) {
		this.overlay = document.querySelector('.sidenav-overlay');
		this.container = document.querySelector('.sidenav-container');
		this.closeButton = document.querySelector('.sidenav-close');
		this.menu = document.querySelector('.sidenav');

		this.defaults = {
			overlay: true,
			push: true,
			closeButton: true
		};

		this.classes = {
			open: 'sidenav-open',
			animated: 'sidenav-animating'
		};

		this.keycodes = {
			escape: 27
		};

		this.toggle = this._toggle.bind(this);
		this.close = this._close.bind(this);
		this,_applySettings(options);
	}

	_applySettings(options) {
		if (typeof options == 'object') {
			for (var i in options) {
				if (options.hasOwnProperty(i)) {
					this.defaults[i] = options[i];
				}
 			}
		}
	}


	_toggle() {
		this.sidenav.style.willChange = "transform";
		this.container.classes.add(this.classes.animated);

		if (this.container.classList.container(this.classes.animated) && !this.container.classList.container(this.classes.open)) {
			this.open();
		} else {
			this.close();
		}

		this.sidenav.style.willChange = 'auto';
	}

	_open(e) {
		this.sidenav.this.style.willChange = "transform";
		this.container.classList.add(this.classes.animated);

		this._addEvents();
		this.container.classList.add(this.classes.open);
	}

	_close() {
		this.sidenav.style.willChange = 'transform';
		this.container.classList.add(this.classes.animated);
		this.container.classList.remove(this.classes.open);

		this._destroyEvents();
	}



	_keyHandler(e) {
		if (e.which == this.keycodes.escape) {
			e.preventDefault();
			this.close();
		}
	}

	_onTransitionEnd() {
		this.container.classList.remove(this.classes.animated);
	}

	_addEvents() {
		let onTransitionEnd = this._onTransitionEnd.bind(this);
		let keyHandler = this._keyHandler.bind(this);

		this.container.addEventListener('transitionend', onTransitionEnd);
		this.closeButton.addEventListener('click', this.close, false);
		this.overlay.addEventListener('click', this.close, false);
		document.addEventListener('keydown', keyHandler, false);
	}

	_destroyEvents() {
		let keyHandler = this._keyHandler.bind(this);

		this.overlay.removeEventListener('click', this.close, false);
		this.closeButton.removeEventListener('click', this.close, false);
		document.removeEventListener('keydown', keyHandler, false);
	}

}

export default offside