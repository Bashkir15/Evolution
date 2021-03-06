/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.about = about;
	
	var _aboutAnimation = __webpack_require__(8);
	
	var _search = __webpack_require__(6);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _offside = __webpack_require__(7);
	
	var _offside2 = _interopRequireDefault(_offside);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function about() {
		var menuTrigger = document.querySelector('.menu-icon');
		var video = document.querySelector('.about-video');
		var playButton = document.querySelector('.play-button');
		var muteButton = document.querySelector('.mute');
		var fullScreenButton = document.querySelector('.full-screen');
		var seekBar = document.querySelector('.seek-bar');
		var volumeBar = document.querySelector('.volume-button');
		var muteIcon = muteButton.querySelector('span');
		var items = document.querySelectorAll('.timeline-list li');
	
		var sideNav = new _offside2.default();
		var search = new _search2.default();
	
		var scrolling = false;
	
		(0, _aboutAnimation.init)();
		(0, _aboutAnimation.animate)();
		addEvents();
	
		function isInViewport(el) {
			var rect = el.getBoundingClientRect();
	
			return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
		}
	
		function timelineEffect() {
			var i = void 0;
			var len = items.length;
	
			for (i = 0; i < len; i++) {
				if (isInViewport(items[i])) {
					items[i].classList.add('in-view');
				}
			}
		}
	
		function scrollThrottle() {
			if (!scrolling) {
				window.requestAnimationFrame(function () {
					timelineEffect();
					scrolling = true;
				});
			}
	
			scrolling = false;
		}
	
		function togglePlay() {
			var playIcon = playButton.querySelector('span');
	
			if (video.paused == true) {
				video.play();
				playIcon.classList.remove('icon-play_arrow');
				playIcon.classList.add('icon-pause');
			} else {
				video.pause();
				playIcon.classList.remove('icon-pause');
				playIcon.classList.add('icon-play_arrow');
			}
		}
	
		function toggleMute() {
			if (video.muted == false) {
				video.muted = true;
				muteIcon.classList.remove('icon-volume_up');
				muteIcon.classList.add('icon-volume_off');
			} else {
				video.muted = false;
				video.volume = lastVolume;
				muteIcon.classList.remove('icon-volume_off');
				muteIcon.classList.add('icon-volume_up');
			}
		}
	
		function toggleFullscreen() {
			if (video.requestFullscreen) {
				video.requestFullscreen();
			} else if (video.mozRequestFullScreen) {
				video.mozRequestFullScreen();
			} else if (video.webkitRequestFullScreen) {
				video.webkitRequestFullScreen();
			}
		}
	
		function seek() {
			var time = video.duration * (seekBar.value / 100);
			video.currentTime = time;
		}
	
		function updateTime() {
			var value = 100 / video.duration * video.currentTime;
			seekBar.value = value;
		}
	
		function play() {
			video.play();
		}
	
		function pause() {
			video.pause();
		}
	
		function updateVolume() {
			video.volume = volumeBar.value;
	
			if (video.volume == 0) {
				muteIcon.classList.remove('icon-volume_up');
				muteIcon.classList.add('icon-volume_off');
			} else {
				if (muteIcon.classList.contains('icon-volume_off')) {
					muteIcon.classList.remove('icon-volume_off');
					muteIcon.classList.add('icon-volume_up');
				}
			}
		}
	
		function addEvents() {
			playButton.addEventListener('click', togglePlay, false);
			muteButton.addEventListener('click', toggleMute, false);
			fullScreenButton.addEventListener('click', toggleFullscreen, false);
			//progressHolder.addEventListener('mouseup', play, false);
			seekBar.addEventListener('change', seek, false);
			video.addEventListener('timeupdate', updateTime, false);
			seekBar.addEventListener('mousedown', pause, false);
			seekBar.addEventListener('mouseup', play, false);
			volumeBar.addEventListener('change', updateVolume, false);
	
			menuTrigger.addEventListener('click', sideNav.close, false);
	
			window.addEventListener('load', timelineEffect);
			window.addEventListener('scroll', scrollThrottle);
		}
	}

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Search = function () {
		function Search() {
			_classCallCheck(this, Search);
	
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
	
		_createClass(Search, [{
			key: '_init',
			value: function _init() {
				var openSearch = this._openSearch.bind(this);
	
				this.searchIcon.addEventListener('click', openSearch, false);
				this.searchStick.addEventListener('click', openSearch, false);
			}
		}, {
			key: '_openSearch',
			value: function _openSearch(e) {
				var _this = this;
	
				e.stopPropagation();
	
				if (!this.activeSearch) {
					this.activeSearch = true;
					this.searchStick.classList.add('slide-in');
					this.searchContainer.classList.add('open');
					this.searchStick.classList.remove('close');
					this.searchIcon.classList.remove('close');
					this.searchIcon.classList.add('open');
				}
	
				window.requestAnimationFrame(function () {
					_this.searchIcon.classList.add('expand-height');
				});
	
				this._addInputBox();
				this._addEvents();
			}
		}, {
			key: '_closeSearch',
			value: function _closeSearch(e) {
				var _this2 = this;
	
				if (this.searchContainer.classList.contains('open')) {
					e.stopPropagation();
					this.activeSearch = false;
	
					this._hideX();
					this._clearSearch();
	
					//this.searchIcon.classList.remove('expand-height');
					this.searchIcon.classList.add('close');
	
					window.setTimeout(function () {
						_this2.searchIcon.classList.remove('open');
						_this2.closeClickArea.classList.remove('clickable');
						_this2.searchContainer.classList.remove('open');
						_this2.searchBox.classList.remove('search-open');
						_this2.searchStick.classList.remove('slide-in');
					}, 400);
				}
	
				this._removeEvents();
			}
		}, {
			key: '_addInputBox',
			value: function _addInputBox() {
				var _this3 = this;
	
				window.requestAnimationFrame(function () {
					_this3.searchBox.classList.add('search-open');
				});
	
				this._showX();
			}
		}, {
			key: '_showX',
			value: function _showX() {
				this.closeSearch1.classList.remove('slide-out');
				this.closeSearch2.classList.remove('slide-out');
				this.closeSearch1.classList.add('slide-in');
				this.closeSearch2.classList.add('slide-in');
				this.closeClickArea.classList.add('clickable');
			}
		}, {
			key: '_hideX',
			value: function _hideX() {
				this.closeSearch1.classList.add('slide-out');
				this.closeSearch2.classList.add('slide-out');
				this.closeSearch1.classList.remove('slide-in');
				this.closeSearch2.classList.remove('slide-in');
			}
		}, {
			key: '_clearSearch',
			value: function _clearSearch() {
				if (this.searchBox.value !== '') {
					this.searchBox.value = '';
				}
			}
		}, {
			key: '_addEvents',
			value: function _addEvents() {
				var closeSearch = this._closeSearch.bind(this);
	
				this.closeClickArea.addEventListener('click', closeSearch, false);
			}
		}, {
			key: '_removeEvents',
			value: function _removeEvents() {
				var closeSearch = this._closeSearch.bind(this);
	
				this.closeClickArea.removeEventListener('click', closeSearch, false);
			}
		}]);
	
		return Search;
	}();
	
	exports.default = Search;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var offside = function () {
		function offside(options) {
			_classCallCheck(this, offside);
	
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
	
		_createClass(offside, [{
			key: '_applySettings',
			value: function _applySettings(options) {
				if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) == 'object') {
					for (var i in options) {
						if (options.hasOwnProperty(i)) {
							this.defaults[i] = options[i];
						}
					}
				}
			}
		}, {
			key: '_toggle',
			value: function _toggle() {
	
				if (this.container.classList.contains(this.classes.animated) && !this.container.classList.contains(this.classes.open)) {
					this.open();
				} else {
					this.close();
				}
	
				this.sidenav.style.willChange = 'auto';
			}
		}, {
			key: '_open',
			value: function _open(e) {
				this.sidenav.style.willChange = "transform";
				this.container.classList.add(this.classes.animated);
				this.container.classList.add(this.classes.open);
				document.body.classList.add(this.classes.open);
	
				this._addEvents();
			}
		}, {
			key: '_close',
			value: function _close(e) {
				this.sidenav.style.willChange = 'transform';
				this.container.classList.add(this.classes.animated);
				this.container.classList.remove(this.classes.open);
				document.body.classList.remove(this.classes.open);
	
				this._destroyEvents();
			}
		}, {
			key: '_keyHandler',
			value: function _keyHandler(e) {
				if (e.which == this.keycodes.escape) {
					e.preventDefault();
					this.close();
				}
			}
		}, {
			key: '_onTransitionEnd',
			value: function _onTransitionEnd() {
				this.container.classList.remove(this.classes.animated);
			}
		}, {
			key: '_addEvents',
			value: function _addEvents() {
				var onTransitionEnd = this._onTransitionEnd.bind(this);
				var keyHandler = this._keyHandler.bind(this);
	
				this.container.addEventListener('transitionend', onTransitionEnd);
				this.closeButton.addEventListener('click', this.close, false);
				document.addEventListener('keydown', keyHandler, false);
			}
		}, {
			key: '_destroyEvents',
			value: function _destroyEvents() {
				var keyHandler = this._keyHandler.bind(this);
	
				this.closeButton.removeEventListener('click', this.close, false);
				document.removeEventListener('keydown', keyHandler, false);
			}
		}]);
	
		return offside;
	}();
	
	exports.default = offside;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.init = init;
	exports.animate = animate;
	
	var camera = void 0,
	    scene = void 0,
	    renderer = void 0,
	    geometry = void 0,
	    material = void 0,
	    mesh = void 0;
	
	var insertElement = document.querySelector('.about-header');
	var clock = new THREE.Clock();
	var smokeParticles = [];
	var cubeSineDriver = 0;
	var delta;
	
	function init() {
		renderer = new THREE.WebGLRenderer();
		scene = new THREE.Scene();
	
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
		camera.position.z = 1000;
		scene.add(camera);
	
		geometry = new THREE.CubeGeometry(200, 200, 200);
		material = new THREE.MeshLambertMaterial({ color: 0xaa6666, wireframe: false });
		mesh = new THREE.Mesh(geometry, material);
	
		var light = new THREE.DirectionalLight(0xffffff, 0.5);
		light.position.set(-1, 0, 1);
		scene.add(light);
	
		var loader = new THREE.TextureLoader();
		loader.crossOrigin = '';
		var smokeTexture;
		var smokeMaterial;
		var smokeGeo;
	
		loader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png', function (resource) {
			smokeTexture = resource;
			smokeMaterial = new THREE.MeshLambertMaterial({ color: 0x00dddd, map: smokeTexture, transparent: true });
			smokeGeo = new THREE.PlaneGeometry(300, 300);
	
			for (var p = 0; p < 150; p++) {
				var particle = new THREE.Mesh(smokeGeo, smokeMaterial);
				particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
				particle.rotation.z = Math.random() * 360;
				scene.add(particle);
				smokeParticles.push(particle);
			}
		});
	
		insertElement.appendChild(renderer.domElement);
	}
	
	function animate() {
		delta = clock.getDelta();
		requestAnimationFrame(animate);
		evolveSmoke();
		render();
	}
	
	function evolveSmoke() {
		var sp = smokeParticles.length;
	
		while (sp--) {
			smokeParticles[sp].rotation.z += delta * 0.2;
		}
	}
	
	function render() {
		mesh.rotation.x += 0.005;
		mesh.rotation.y += 0.01;
		cubeSineDriver += .01;
		mesh.position.z = 100 + Math.sin(cubeSineDriver) * 500;
		renderer.render(scene, camera);
	}

/***/ }
/******/ ]);
//# sourceMappingURL=about.js.map