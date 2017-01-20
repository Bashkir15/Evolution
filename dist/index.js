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
	
	var _offside = __webpack_require__(3);
	
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
	
		var sidenav = new _offside2.default();
	
		searchIcon.addEventListener('click', openSearch, false);
		searchStick.addEventListener('click', openSearch, false);
	
		function openSearch(e) {
			e.stopPropagation();
	
			if (!activeSearch) {
				activeSearch = true;
				searchStick.classList.add('slide-in');
				searchContainer.classList.add('open');
				searchIcon.classList.add('open');
	
				window.setTimeout(function () {
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
			window.setTimeout(function () {
				searchBox.classList.add('search-open');
			}, 200);
		}
	
		menuTrigger.addEventListener('click', sidenav.open, false);
	}
	
	init();
	(0, _landing.landing)();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.landing = landing;
	
	var _tabs = __webpack_require__(2);
	
	function landing() {
		(0, _tabs.tabs)();
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