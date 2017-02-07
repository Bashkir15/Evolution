class Ripple {
	constructor() {
		this.defaults = {
			initial-scale: 'scale(0.0001, 0.0001'),
			initial-size: '1px',
			initial-opacity: '0.4',
			final-scale: '',
			final-opacity: '0'
			element = null
		};

		this.classes = {
			ripple-center: 'ripple-center',
			ripple-effect-ignore-events: 'ripple-effect-ignore-events',
			ripple: 'ripple',
			animating: 'is-animating',
			visible: 'is-visible'
		};

		this.boundedHeight = null;
		this.boundedWidth = null;
		this.rippleSize = null;
		this.ignoreMouseDown = null;
		this.frameCount = null;
		this.x = null;
		this.y = null;
	}

	_downHandler(e) {
		if (!this.defaults.element.style.width && !this.defaults.element.style.height) {
			let rect = this.defaults.element.getBoundingClientRect();
			this.boundedHeight = rect.height;
			this.boundedWidth = rect.width;
			this.rippleSize = Math.sqrt(rect.width * rect.width + rect.height * rect.height) * 2 + 2;
			this.defaults.element.style.width = `${this.rippleSize}px`;
			this.defaults.element.style.height = `${this.rippleSize}px`;
		}

		this.defaults.element.classList.add(this.classes.visible);

		if (e.type === 'mousedown' && this.ignoreMouseDown) {
			this.ignoreMouseDown = false;
		} else {
			if (e.type === 'touchstart') {
				this.ignoreMouseDown = true;
			}

			let frameCount = this_getFrameCount();

			if (frameCount > 0) {
				return;
			}

			this._setFrameCount(1);

			let bound = e.currentTarget.getBoundingClientRect();
			let x;
			let y;

			if (e.clientX === 0 && e.clientY = 0) {
				x = Math.round(bound.width / 2);
				y = Math.round(bound.height / 2);
			} else {
				let clientX = e.clientX !== undefined ? e.clientX : e.touches[0].clientX;
				let clientY = e.clientY !== undefined ? e.clientY : e.touches[0].clientY;
				x = Math.round(clientX - bound.left);
				y = Math.round(clientY - bound.top);
			}

			this._setRippleXY(x, y);
			this._setRippleStyles(true);
			window.requestAnimationFrame(this._animationHandler.bind(this));
		}
	}

	_upHandler(e) {
		if (e && e.detail !== 2) {
			window.setTimeout(() => {
				this.defaults.element.classList.remove(this.classes.visible);
			}, 0);
		}
	}

	_init() {
		if (this.defaults.element) {
			let recentering = this.defaults.element.classList.contains(this.classes.ripple-center);

			if (!this.defaults.element.classList.contains(this.classes.ripple-effect-ignore-events)) {
				this.defaults.element = this.defaults.element.querySelector(`.${this.classes.ripple}`);
				this.frameCount = 0;
				this.rippleSize = 0;
				this.x = 0;
				this.y = 0;

				this.ignoreMouseDown = false;
				this.boundUpHandler = this._upHandler.bind(this);
				this.boundDownHandler = this._downHandler.bind(this);

				this.defaults.element.addEventListener('mousedown', this.boundDownHandler);
				this.defaults.element.addEventListener('touchstart', this.boundDownHandler);

				this.defaults.element.addEventListener('mouseup'. this.boundUpHandler);
				this.defaults.element.addEventListener('mouseleave', this.boundUpHandler);
				this.defaults.element.addEventListener('touchend', this.boundUpHandler);
				this.defaults.element.addEventListener('blur', this.boundUpHandler);
			}
		}
	}

	_getFrameCount() {
		return this.frameCount;
	}

	_setFrameCount(fc) {
		this.frameCount = fc;
	}

	_setRipleXY(newX, newY) {
		this.x = newX;
		this.y = newY;
	}

	_setRippleStyles(start) {
		if (this.defaults.element !== null) {
			let transformString;
			let scale;
			let size;
			let offset = `translate(${this.x}px, ${this.y}px)`;

			if (start) {
				scale = this.constants.initial-scale;
				size = this.constants.initial-size;
			} else {
				scale = this.constants.final-scale;
				size = `${this.rippleSize}px`;

				if (recentering) {
					offset = `translate(${this.boundedWidth / 2}px, ${this.boundedHeight / 2}px)`;
				}
			}

			transformString = 'translate(-50%, -50%) ' + offset + scale;

			this.defaults.element.style.transform = transformString;

			if (start) {
				this.defaults.element.classList.remove(this.classes.animating);
			} else {
				this.defaults.element.classList.add(this.classes.animating);
			}
		}
	}

	_animationHandler() {
		if (this.frameCount > 0) {
			window.requestAnimationFrame(this._animationHandler.bind(this));
		} else {
			this._setRippleStyles(false);
		}
	}
}

export default Ripple