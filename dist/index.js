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
	
	var _landing = __webpack_require__(1);
	
	var _contact = __webpack_require__(4);
	
	var _about = __webpack_require__(6);
	
	var _search = __webpack_require__(8);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _offside = __webpack_require__(9);
	
	var _offside2 = _interopRequireDefault(_offside);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function init() {
		var menuTrigger = document.querySelector('.menu-icon');
		var sidenav = new _offside2.default();
		var search = new _search2.default();
	
		if (window.location.pathname == '/contact') {
			(0, _contact.contact)();
		} else if (window.location.pathname == '/about') {
			(0, _about.about)();
		} else {
			(0, _landing.landing)();
		}
	
		menuTrigger.addEventListener('click', sidenav.open, false);
	}
	
	init();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.landing = landing;
	
	var _tabs = __webpack_require__(2);
	
	var _notifications = __webpack_require__(3);
	
	var _notifications2 = _interopRequireDefault(_notifications);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function landing() {
	
		var newsletterTrigger = document.getElementById('newsletter-submit');
		var testNotificationContent = document.getElementById('test-notification');
		var nav = document.querySelector('.nav');
		var testNotification = new _notifications2.default({
			content: testNotificationContent,
			timeout: 2500,
			type: 'success'
		});
	
		changeNavigation();
		(0, _tabs.tabs)();
	
		function changeNavigation() {
			nav.classList.add('landing-nav');
		}
	
		function newsLetter() {
			var test = new Event('test-message');
			window.dispatchEvent(test);
		}
	
		function handleKey(e) {
			if (e.which === 13) {
				newsLetter();
			}
		}
	
		newsletterTrigger.addEventListener('click', newsLetter, false);
		window.addEventListener('test-message', testNotification.open, false);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.tabs = tabs;
	function tabs() {
		var tabWidget = Array.prototype.slice.call(document.querySelectorAll('.js-tab')) || [];
	
		var tabClickEvent = function tabClickEvent(tabLink, tabLinks, tabPanels, linkIndex, e) {
			tabLinks.forEach(function (link) {
				link.setAttribute('tabindex', '-1');
				link.setAttribute('aria-selected', 'false');
				link.parentNode.removeAttribute('data-tab-active');
				link.removeAttribute('data-tab-active');
			});
	
			tabLink.setAttribute('tabindex', '0');
			tabLink.setAttribute('aria-selected', 'true');
			tabLink.parentNode.setAttribute('data-tab-active', '');
			tabLink.setAttribute('data-tab-active', '');
	
			tabPanels.forEach(function (panel, index) {
				if (index != linkIndex) {
					panel.setAttribute('aria-hidden', 'true');
					panel.removeAttribute('data-tab-active');
				} else {
					panel.setAttribute('aria-hidden', 'false');
					panel.setAttribute('data-tab-active', '');
				}
			});
		};
	
		var keyBoardEvent = function keyBoardEvent(tabLink, tabLinks, tabPanels, tabItems, index, e) {
			var keyCode = e.key || e.which,
			    currentTab = tabLinks[index],
			    previousTab = tabLinks[index - 1],
			    nextTab = tabLinks[index + 1],
			    firstTab = tabLinks[0],
			    lastTab = tabLinks[tabLinks.length - 1];
	
			switch (keyCode) {
				case 'ArrowLeft':
				case 37:
					e.preventDefault();
	
					if (!previousTab) {
						lastTab.focus();
					} else {
						previousTab.focus();
					}
					break;
	
				case 'ArrowRight':
				case 39:
					e.preventDefault();
	
					if (!nextTab) {
						firstTab.focus();
					} else {
						nextTab.focus();
					}
					break;
			}
		};
	
		tabWidget.forEach(function (tabWidgetInstance, i) {
			var tabList = tabWidgetInstance.getElementsByTagName('ul')[0],
			    tabItems = Array.prototype.slice.call(tabList.getElementsByTagName('li')),
			    tabLinks = [],
			    tabPanels = Array.prototype.slice.call(tabWidgetInstance.getElementsByTagName('section'));
	
			tabList.setAttribute('role', 'tablist');
	
			tabItems.forEach(function (item, index) {
				var link = item.getElementsByTagName('a')[0];
	
				tabLinks.push(link);
	
				item.setAttribute('role', 'presentation');
	
				if (index == 0) {
					item.setAttribute('data-tab-active', '');
				}
			});
	
			tabLinks.forEach(function (link, i) {
				var anchor = link.getAttribute('href').split("#")[1];
				var attributes = {
					'id': 'tab-link' + i,
					'role': 'tab',
					'tabIndex': '-1',
					'aria-selected': 'false',
					'aria-controls': anchor
				};
	
				if (i == 0) {
					attributes['aria-selected'] = 'true';
					attributes.tabIndex = '0';
	
					link.setAttribute('data-tab-active', '');
				}
	
				for (var key in attributes) {
					link.setAttribute(key, attributes[key]);
				}
	
				link.addEventListener('click', function (e) {
					e.preventDefault();
				});
	
				link.addEventListener('focus', function (e) {
					tabClickEvent(this, tabLinks, tabPanels, i, e);
				});
	
				link.addEventListener('keydown', function (e) {
					keyBoardEvent(link, tabLinks, tabPanels, tabItems, i, e);
				});
			});
	
			tabPanels.forEach(function (panel, i) {
				var nextTabLink = document.createElement('a'),
				    nextTabLinkIndex = i < tabPanels.length - 1 ? i + 1 : 0;
	
				var attributes = {
					'role': 'tabpanel',
					'aria-hidden': 'true',
					'aria-labelledyby': 'tab-link-' + i
				};
	
				nextTabLink.setAttribute('href', '#tab-link-' + nextTabLinkIndex);
				nextTabLink.textContext = 'Next Tab';
				panel.appendChild(nextTabLink);
	
				if (i == 0) {
					attributes['aria-hidden'] = 'false';
					panel.setAttribute('data-tab-active', '');
				}
	
				for (var key in attributes) {
					panel.setAttribute(key, attributes[key]);
				}
			});
		});
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var notifications = function () {
		function notifications(options) {
			_classCallCheck(this, notifications);
	
			this.container = null;
			this.count = 0;
			this.notifyId = null;
	
			this.defaults = {
				content: '',
				timeout: 2500,
				type: 'alert',
				onBeforeOpen: null,
				onOpen: null,
				onBeforeClose: null,
				onClose: null,
				actionTriggers: [],
				requiredAction: null,
				clickOutsideToClose: true,
				keyActions: true,
				timeoutClose: true,
				posX: 'right',
				posY: 'bottom',
				aligned: true
			};
	
			this.classes = {
				container: 'notification-container',
				notification: 'notification',
				topLeft: 'notification-top-left',
				topRight: 'notification-top-right',
				bottomLeft: 'notification-bottom-left',
				title: 'notification-title',
				text: 'notification-text',
				confirmAction: 'notification-action-confirm',
				confirmCancel: 'notification-action-cancel',
				active: 'notification-shown',
				success: 'notification-success',
				alert: 'notification-alert',
				warning: 'notification-warning',
				danger: 'notification-danger',
				none: 'notification-bland'
			};
	
			this.keycodes = {
				escape: 27
			};
	
			this._applySettings(options);
	
			this.open = this._open.bind(this);
			this.close = this._close.bind(this);
		}
	
		/**
	  *
	   	Public Methods
	  *
	  **/
	
		_createClass(notifications, [{
			key: '_open',
			value: function _open(e) {
				var _this = this;
	
				this.notifyId = "notification-" + this.count;
	
				if (typeof this.defaults.onBeforeOpen === 'function') {
					this.defaults.onBeforeOpen.call(this);
				}
	
				this._buildOut.call(this);
	
				setTimeout(function () {
					_this.container.classList.add(_this.classes.active);
					_this.container.setAttribute('id', _this.notifyId);
	
					if (typeof _this.defaults.onOpen === 'function') {
						_this.defaults.onOpen.call(_this);
					}
				}, 100);
	
				if (this.defaults.clickOutsideToClose === true && this.defaults.requiredAction !== true) {
					(function () {
						var documentClickHandler = function documentClickHandler(evt) {
							if (e !== evt && evt.target.parentNode !== _this.container && _this.container.classList.contains(_this.classes.active)) {
								_this.close(_this.notifyId);
	
								setTimeout(function () {
									document.removeEventListener('click', documentClickHandler);
								}, 50);
							}
						};
	
						document.addEventListener('click', documentClickHandler);
					})();
				}
	
				if (this.defaults.timeoutClose === true && this.defaults.timeout > 0) {
					setTimeout(function () {
						_this.close(_this.notifyId);
					}, this.defaults.timeout);
				}
	
				this._attachEvents();
			}
		}, {
			key: '_close',
			value: function _close(notifyId) {
				var notification = document.getElementById(notifyId);
	
				if (notification) {
					if (typeof this.defaults.onBeforeClose === 'function') {
						this.defaults.onBeforeClose.call(this);
					}
	
					notification.classList.remove(this.classes.active);
	
					if (typeof this.defaults.onClose === 'function') {
						this.defaults.onClose.call(this);
					}
	
					setTimeout(function () {
						notification.parentNode.removeChild(notification);
					}, 600);
	
					return true;
				} else {
					return false;
				}
			}
	
			/**
	   *
	   	Build Methods
	   *
	  **/
	
		}, {
			key: '_buildOut',
			value: function _buildOut() {
				var container = document.createElement('div');
				var contentHolder = document.createElement('div');
				var content;
	
				container.classList.add(this.classes.container);
				contentHolder.classList.add(this.classes.notification);
	
				this.container = container;
				this.container.style.position = "fixed";
	
				if (typeof this.defaults.content === 'string') {
					content = this.defaults.content;
				} else {
					content = this.defaults.content.innerHTML;
				}
	
				this._checkType(contentHolder);
				this._checkPosition();
	
				contentHolder.innerHTML = content;
				this.container.appendChild(contentHolder);
				document.body.appendChild(this.container);
			}
		}, {
			key: '_checkType',
			value: function _checkType(item) {
				switch (this.defaults.type) {
					case "success":
						item.classList.add(this.classes.success);
						break;
	
					case "danger":
						item.classList.add(this.classes.danger);
						break;
	
					case "warning":
						item.classList.add(this.classes.warning);
						break;
	
					case "alert":
						item.classList.add(this.classes.alert);
						break;
	
					case "none":
						item.classList.add(this.classes.bland);
						break;
	
					default:
						item.classList.add(this.classes.alert);
				}
			}
		}, {
			key: '_checkPosition',
			value: function _checkPosition() {
				if (this.defaults.aligned === true) {
					switch (this.defaults.posX) {
						case "right":
							this.container.style.right = 20 + "px";
							break;
	
						case "left":
							this.container.style.left = 20 + "px";
							break;
	
						default:
							this.container.style.right = 20 + "px";
					}
	
					switch (this.defaults.posY) {
						case "top":
							this.container.style.top = 20 + "px";
							break;
	
						case "bottom":
							this.container.style.bottom = 20 + "px";
							break;
	
						default:
							this.container.style.right = 20 + "px";
					}
	
					if (this.defaults.posX === 'right' && this.defaults.posY === 'top') {
						this.container.classList.add(this.classes.topRight);
					} else if (this.defaults.posX === 'left' && this.defaults.posY === 'top') {
						this.container.classList.add(this.classes.topLeft);
					} else if (this.defaults.posX === 'left' && this.defaults.posY === 'bottom') {
						this.container.classList.add(this.classes.bottomLeft);
					}
				}
			}
	
			/**
	   *
	   	Handle Events
	   *
	  **/
	
		}, {
			key: '_attachEvents',
			value: function _attachEvents() {
				var keyHandler = this._keyHandler.bind(this);
	
				if (this.defaults.keyActions === true) {
					document.addEventListener('keydown', keyHandler);
				}
			}
		}, {
			key: '_keyHandler',
			value: function _keyHandler(e) {
				if (this.defaults.requiredAction !== true) {
					if (e.keyCode === this.keycodes.escape) {
						this.close(this.notifyId);
					}
				}
			}
	
			/* _handleActionTriggers() {
	  	if (this.defaults.actionTriggers.length) {
	  		for (let i = 0; i < this.defaults.actionTriggers.length; i++) {
	  			for var (k in this.defaults.actionTriggers[i]) {
	  				if (this.defaults.actionTriggers[i].hasOwnProperty(k)) {
	  					let actionTrigger = this.defaults.actionTriggers[i];
	  					let eventTrigger;
	  					let eventAction;
	  					let eventTarget;
	  						if (typeof actionTrigger.eventTrigger === 'string') {
	  						eventTrigger = actionTrigger.eventTrigger;
	  					}
	  						if (typeof actionTrigger.eventAction === 'function') {
	  						eventAction = actionTrigger.eventAction;
	  					}
	  						if (typeof actionTrigger.eventTarget === 'string') {
	  						eventTarget === document.querySelector(actionTrigger.eventTarget);
	  					}
	  						eventTarget.addEventListener(eventTrigger, eventAction);
	  				}
	  			}
	  		}
	  	}
	  } */
	
			/**
	   *
	   	Utils
	   *
	  **/
	
		}, {
			key: '_applySettings',
			value: function _applySettings(options) {
				if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
					for (var i in options) {
						if (options.hasOwnProperty(i)) {
							this.defaults[i] = options[i];
						}
					}
				}
			}
		}]);
	
		return notifications;
	}();
	
	exports.default = notifications;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.contact = contact;
	
	var _notifications = __webpack_require__(3);
	
	var _notifications2 = _interopRequireDefault(_notifications);
	
	var _validator = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function contact() {
		var formWrapper = document.querySelectorAll('.form-wrapper');
		var formInputs = document.querySelectorAll('.form-input');
		var submitButton = document.querySelector('.form-submit-button');
	
		(0, _validator.onBlur)(formInputs);
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.onBlur = onBlur;
	exports.removeBlur = removeBlur;
	function onBlur(nodes) {
		var i = void 0;
		var len = nodes.length;
	
		for (i = 0; i < len; i++) {
			var node = nodes[i];
	
			node.addEventListener('blur', inputBlur);
		}
	}
	
	function removeBlur(nodes) {
		var i = void 0;
		var len = nodes.length;
	
		for (i = 0; i < len; i++) {
			var node = nodes[i];
	
			node.removeEventListener('blur', inputBlur);
		}
	}
	
	function inputBlur() {
		var formContent = this.value;
		console.log(formContent);
	
		if (formContent == '') {
			this.parentNode.classList.add('input-blank');
	
			if (this.parentNode.classList.contains('required-input')) {
				this.parentNode.classList.remove('input-blank');
				this.parentNode.classList.add('input-invalid');
			}
		}
	
		if (formContent !== '' && !this.parentNode.classList.contains('form-email-wrapper') && !this.parentNode.classList.contains('form-phone-wrapper')) {
			if (this.parentNode.classList.contains('input-blank')) {
				this.parentNode.classList.remove('input-blank');
			}
	
			this.parentNode.classList.add('input-valid');
		}
	
		checkValidForm();
	}
	
	function checkValidForm() {
		var formWrappers = document.querySelectorAll('.form-wrapper');
		var submitButton = document.querySelector('.form-submit-button');
		var valid = 0;
		var i = void 0;
		var len = formWrappers.length;
	
		for (i = 0; i < len; i++) {
			var wrapper = formWrappers[i];
	
			if (wrapper.classList.contains('form-valid')) {
				valid++;
			}
		}
	
		if (valid == len) {
			submitButton.classList.add('form-valid');
		}
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.about = about;
	
	var _aboutAnimation = __webpack_require__(7);
	
	var _search = __webpack_require__(8);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _offside = __webpack_require__(9);
	
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
/* 7 */
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

/***/ },
/* 8 */
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
/* 9 */
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

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map