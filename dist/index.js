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
/***/ function(module, exports) {

	'use strict';
	
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
	}
	
	init();

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map