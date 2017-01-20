class offside {
	constructor(options) {
		this.container = document.querySelector('.sidenav-container');
		this.closeButton = document.querySelector('.sidenav-close');
		this.sidenav = document.querySelector('.sidenav');

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
		this.open = this._open.bind(this);
		this._applySettings(options);
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

		if (this.container.classList.contains(this.classes.animated) && !this.container.classList.contains(this.classes.open)) {
			this.open();
		} else {
			this.close();
		}

		this.sidenav.style.willChange = 'auto';
	}

	_open(e) {
		this.sidenav.style.willChange = "transform";
		this.container.classList.add(this.classes.animated);
		this.container.classList.add(this.classes.open);
		document.body.classList.add(this.classes.open);

		this._addEvents();

	}

	_close(e) {
		this.sidenav.style.willChange = 'transform';
		this.container.classList.add(this.classes.animated);
		this.container.classList.remove(this.classes.open);
		document.body.classList.remove(this.classes.open);

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
		document.addEventListener('keydown', keyHandler, false);
	}

	_destroyEvents() {
		let keyHandler = this._keyHandler.bind(this);

		this.closeButton.removeEventListener('click', this.close, false);
		document.removeEventListener('keydown', keyHandler, false);
	}

}

export default offside