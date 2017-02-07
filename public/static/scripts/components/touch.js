class Touch {
	constructor(options) {
		options = options || {};

		this.startOffsetX = 0;
		this.currentOffsetX = 0;
		this.opening = false;
		this.moved = false;
		this.opened = false;
		this.preventOpen = false;
		this.panel = document.querySelector('.offside-container');
		this.menu = document.querySelector('.nav');
	}
}