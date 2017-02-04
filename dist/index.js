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
	
	var _contact = __webpack_require__(5);
	
	var _offside = __webpack_require__(4);
	
	var _offside2 = _interopRequireDefault(_offside);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
		var sidenav = new _offside2.default();
	
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
	
				window.setTimeout(function () {
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
	
				window.setTimeout(function () {
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
			window.setTimeout(function () {
				searchBox.classList.add('search-open');
			}, 200);
		}
	
		if (window.location.pathname == '/contact') {
			(0, _contact.contact)();
		} else if (window.location.pathname == '/') {
			(0, _landing.landing)();
		}
	
		menuTrigger.addEventListener('click', sidenav.open, false);
		closeClickArea.addEventListener('click', closeSearch, false);
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.contact = contact;
	
	var _notifications = __webpack_require__(3);
	
	var _notifications2 = _interopRequireDefault(_notifications);
	
	var _validator = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function contact() {
		var formWrapper = document.querySelectorAll('.form-wrapper');
		var formInputs = document.querySelectorAll('.form-input');
		var submitButton = document.querySelector('.form-submit-button');
	
		(0, _validator.onBlur)(formInputs);
	}

/***/ },
/* 6 */
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

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map