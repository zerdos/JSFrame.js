/*! jsframe v1.6.3 Copyright (c) 2007-2020 Tom Misawa */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@riversun/event-emitter/lib/event-emitter.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@riversun/event-emitter/lib/event-emitter.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! event-emitter(https://github.com/riversun/event-emitter) v1.5.0 Copyright (c) 2020 riversun.org@gmail.com */
!function(e,t){ true?module.exports=t():undefined}(this,(function(){return(()=>{"use strict";var e={561:(e,t,n)=>{function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(r=(s=u.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=o(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,u=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,s=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw s}}}}function o(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}n.d(t,{default:()=>l});var l=function(){function e(t){if(u(this,e),this.onListeners=new Map,this.onlyListeners=new Map,t){var n,r=i(t);try{for(r.s();!(n=r.n()).done;){var o=n.value,s=new f;this.onListeners.set(o,s)}}catch(e){r.e(e)}finally{r.f()}}this.childEventEmitters=[],this.onIntercepterFuncs={}}return a(e,[{key:"on",value:function(e,t){var n=this.onListeners.get(e);if(n||(n=new f,this.onListeners.set(e,n)),n.addListenerFunc(t),this.onIntercepterFuncs)for(var i=0,o=Object.entries(this.onIntercepterFuncs);i<o.length;i++){var s=r(o[i],2),u=s[0];(0,s[1])({eventType:e,func:t,onIntercepterFuncname:u})}}},{key:"removeListener",value:function(e,t){var n=this.onListeners.get(e);n&&n.removeListener(t)}},{key:"only",value:function(e,t,n){var r=this.onlyListeners.get(e);r||(r=new h,this.onlyListeners.set(e,r)),r.putListenerFunc(t,n)}},{key:"pipe",value:function(e){this.childEventEmitters.push(e)}},{key:"emit",value:function(e,t){var n=this.onListeners.get(e);n&&(t.eventType=e,n.callListenerFunc(t));var r=this.onlyListeners.get(e);r&&(t.eventType=e,r.callListenerFunc(t));var o,s=i(this.childEventEmitters);try{for(s.s();!(o=s.n()).done;){o.value.emit(e,t)}}catch(e){s.e(e)}finally{s.f()}}},{key:"getAllListeners",value:function(){var e={};this.onListeners.forEach((function(t,n){var r=n,i=t.getAllListeners();e[r]||(e[r]={}),e[r].listeners=i}));var t,n=0,r=i(this.childEventEmitters);try{for(r.s();!(t=r.n()).done;){t.value.onListeners.forEach((function(t,r){var i=r,o=t.getAllListeners();e[i]||(e[i]={}),e[i].childEventEmitters||(e[i].childEventEmitters=[]),e[i].childEventEmitters.push({childEmitterIdx:n,listeners:o})})),n++}}catch(e){r.e(e)}finally{r.f()}return e}},{key:"hasListenerFuncs",value:function(e){if(this.onListeners.has(e)){var t=this.onListeners.get(e);if(t&&t.hasListenerFunc())return!0}var n,r=i(this.childEventEmitters);try{for(r.s();!(n=r.n()).done;){if(n.value.hasListenerFuncs(e))return!0}}catch(e){r.e(e)}finally{r.f()}return!1}},{key:"clearAll",value:function(){var e,t=i(this.onListeners.values());try{for(t.s();!(e=t.n()).done;){e.value.clearAll()}}catch(e){t.e(e)}finally{t.f()}this.onListeners.clear();var n,r=i(this.onlyListeners.values());try{for(r.s();!(n=r.n()).done;){n.value.clearAll()}}catch(e){r.e(e)}finally{r.f()}this.onlyListeners.clear(),this.childEventEmitters=[]}},{key:"addOnIntercepterFunc",value:function(e,t){if(this.onIntercepterFuncs[e])throw Error('Always registered intercepter func "'.concat(e,'".'));this.onIntercepterFuncs[e]=t}},{key:"removeOnIntercepterFunc",value:function(e){delete this.onIntercepterFuncs[e]}},{key:"getAllOnIntercepterFuncs",value:function(){for(var e=[],t=0,n=Object.entries(this.onIntercepterFuncs);t<n.length;t++){var i=r(n[t],2),o=i[0],s=i[1];e.push({funcName:o,func:s})}return e}}]),e}(),f=function(){function e(){u(this,e),this.listenerFuncs=[]}return a(e,[{key:"clearAll",value:function(){this.listenerFuncs=[]}},{key:"getAllListeners",value:function(){return this.listenerFuncs}},{key:"hasListenerFunc",value:function(){return this.listenerFuncs.length>0}},{key:"addListenerFunc",value:function(e){this.listenerFuncs.push(e)}},{key:"callListenerFunc",value:function(e){var t,n=i(this.listenerFuncs);try{for(n.s();!(t=n.n()).done;){var r=t.value;if("Function"!==this.typeOf(r))throw Error('[@riversun/event-emitter] listenerFunction you set is not a function. listenerFunction:"'.concat(r,'".Check args of #only method or #on method.'));r(e)}}catch(e){n.e(e)}finally{n.f()}}},{key:"removeListener",value:function(e){this.removeArrayItemOnce(this.listenerFuncs,e)}},{key:"removeArrayItemOnce",value:function(e,t){var n=e.indexOf(t);return n>-1&&e.splice(n,1),e}},{key:"typeOf",value:function(e){return Object.prototype.toString.call(e).slice(8,-1)}}]),e}(),h=function(){function e(){u(this,e),this.listenerFuncMap=new Map}return a(e,[{key:"clearAll",value:function(){this.listenerFuncMap.clear()}},{key:"hasListenerFunc",value:function(e){return this.listenerFuncMap.has(e)}},{key:"putListenerFunc",value:function(e,t){this.listenerFuncMap.set(e,t)}},{key:"callListenerFunc",value:function(e){var t,n=i(this.listenerFuncMap.values());try{for(n.s();!(t=n.n()).done;){var r=t.value;if("Function"!==this.typeOf(r))throw Error('[@riversun/event-emitter] listenerFunction you set is not a function. listenerFunction:"'.concat(r,'".Check args of #only method or #on method.'));r(e)}}catch(e){n.e(e)}finally{n.f()}}},{key:"typeOf",value:function(e){return Object.prototype.toString.call(e).slice(8,-1)}}]),e}()}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(561)})().default}));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/JSFrame.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/JSFrame.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".jsframe-titlebar-default {\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #f5f5f5, color-stop(1.0, #f8f7f2)));\n    background: -webkit-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: -moz-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: linear-gradient(top, #f5f5f5, #f8f7f2);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-titlebar-focused {\n    /* (c)2015 Johannes Jakob\n       Made with <3 in Germany */\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #ebebeb, color-stop(1.0, #d5d5d5)));\n    background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: linear-gradient(top, #ebebeb, #d5d5d5);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-modal-window-background {\n    background: rgba(0, 0, 0, 0.6);\n    height: 100%;\n    widdth: 100%\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStyleMaterial.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStyleMaterial.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".jsframe-preset-style-material-default {\n    background: black;\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-preset-style-material-focused {\n    background: black;\n    border-top-left-radius: 36px;\n    border-top-right-radius: 36px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStylePopup.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStylePopup.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".jsframe-preset-style-popup-default {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n\n.jsframe-preset-style-popup-focused {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStyleRedstone.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStyleRedstone.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".jsframe-preset-style-redstone-default {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n\n.jsframe-preset-style-redstone-focused {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStyleYosemite.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStyleYosemite.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".jsframe-preset-style-yosemite-default {\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #f5f5f5, color-stop(1.0, #f8f7f2)));\n    background: -webkit-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: -moz-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: linear-gradient(top, #f5f5f5, #f8f7f2);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-preset-style-yosemite-focused {\n    /* (c)2015 Johannes Jakob\n       Made with <3 in Germany */\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #ebebeb, color-stop(1.0, #d5d5d5)));\n    background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: linear-gradient(top, #ebebeb, #d5d5d5);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/event-listener-helper/lib/event-listener-helper.js":
/*!*************************************************************************!*\
  !*** ./node_modules/event-listener-helper/lib/event-listener-helper.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! event-listener-helper(https://github.com/riversun/event-listener-helper) v1.1.2 Copyright (c) 2020 riversun.org@gmail.com */
!function(e,t){ true?module.exports=t():undefined}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=a(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw o}}}}function a(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n.d(t,"default",(function(){return u}));var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.evTargetListenersMap=new Map,this.listenerNum=0}var t,n,a;return t=e,(n=[{key:"addEventListener",value:function(e,t,n,r){var i=this,o=null;if(r&&(o=this._cloneJson(r)),arguments.length>4)throw Error("Too many arguments. Number of arguments can be specified 4.");this._checkTypeOfOptions(o);var a=null;o&&o.listenerName&&(a=o.listenerName);var s=null;o&&o.once&&(delete o.once,o.callbackOnce=!0,s=function(r){n(r),i.removeEventListener(e,t,null,o)});var l={listenerName:null,success:!0};s?e.addEventListener(t,s,o):e.addEventListener(t,n,o);var u=this.evTargetListenersMap.get(e);u||(u=new Map,this.evTargetListenersMap.set(e,u));var c=u.get(t);if(c||(c=new Map,u.set(t,c)),null!==a){if(c.has(a))throw Error('The listenerName "'.concat(a,'" is already used for the specified event type ').concat(t));c.set(a,{listener:n,onceListener:s,options:o}),l.listenerName=a}else{var f="listener-".concat(this.listenerNum);o||(o={}),o.listenerName=f,c.set(f,{listener:n,onceListener:s,options:o}),l.listenerName=f,this.listenerNum+=1}return l}},{key:"removeEventListener",value:function(e,t,n,r){if(arguments.length<3)throw Error("Three or four arguments are required.");if("Function"!==this.typeOf(n)&&"Null"!==this.typeOf(n))throw Error('Type of 3rd arg should be a "Function" or "Null".');this._checkTypeOfOptions(r);var i=null;r&&r.listenerName&&(i=r.listenerName);var o={success:!1,message:"unknown error"},a=this.evTargetListenersMap.get(e);if(!a)return o.message="DOM element ".concat(e,"(id=").concat(e.id,") doesn't have any listeners."),o;var s=a.get(t);if(!s)return o.message="DOM element ".concat(e,"(id=").concat(e.id,") doesn't have \"").concat(t,'" listeners.'),o;if(i){var l=s.get(i);if(!l)return o.message="DOM element ".concat(e,"(id=").concat(e.id,") doesn't have \"").concat(t,'" listener "').concat(i,'"'),o;s.delete(i),l.options&&l.options.callbackOnce?e.removeEventListener(t,l.onceListener,l.options):e.removeEventListener(t,l.listener,l.options),o.success=!0}else if(!i){if(!n)return o.message="options.listenerName is not found",o;var u="listener",c=n,f=this._searchKeyInValueContent(s,u,c);if(f){var v=s.get(f),y=v.onceListener,p=v.options;s.delete(f),y?e.removeEventListener(t,y,p):e.removeEventListener(t,n,p),o.success=!0}else o.success=!1,o.message="Specified listener could not be deleted from DOM element ".concat(e,"(id=").concat(e.id,").\n        Since the specified listener is not registered as an event listener,\n        it may have been registered outside of event-listener-helper.")}return o}},{key:"getEventListeners",value:function(e,t){return e?t?this._getEventListenersWith2Args(e,t):this._getEventListenersWith1Arg(e):[]}},{key:"getAllEventListeners",value:function(){var e=this,t=new Map;return this.evTargetListenersMap.forEach((function(n,r){var i=r,a=e._getEventListenersWith1Arg(i),s=new Map;t.set(i,s);var l,u=o(a);try{for(u.s();!(l=u.n()).done;){var c=l.value;s.set(c.eventType,c.listeners)}}catch(e){u.e(e)}finally{u.f()}})),t}},{key:"_getEventListenersWith1Arg",value:function(e){var t=[],n=this.evTargetListenersMap.get(e);if(!n)return t;var r,a=o(n);try{for(a.s();!(r=a.n()).done;){var s,l=i(r.value,2),u=l[0],c=l[1],f=[],v=o(c.values());try{for(v.s();!(s=v.n()).done;){var y=s.value;f.push(this._getFrozenListenerDef(y))}}catch(e){v.e(e)}finally{v.f()}f.length>0&&t.push({eventType:u,listeners:f})}}catch(e){a.e(e)}finally{a.f()}return t}},{key:"_getEventListenersWith2Args",value:function(e,t){if(2!==arguments.length)throw Error("Only two arguments can be specified");var n=[],r=this.evTargetListenersMap.get(e);if(!r)return n;var i=r.get(t);if(!i)return n;var a,s=o(i.values());try{for(s.s();!(a=s.n()).done;){var l=a.value,u=this._getFrozenListenerDef(l);n.push(u)}}catch(e){s.e(e)}finally{s.f()}return n}},{key:"getEventListener",value:function(e,t,n){if(3!==arguments.length)throw Error("Only 3 arguments can be specified");var r=this.evTargetListenersMap.get(e);if(!r)return null;var i=r.get(t);if(!i)return null;var o=i.get(n),a=this._getFrozenListenerDef(o);return a}},{key:"hasEventListeners",value:function(e,t){if(2!==arguments.length)throw Error("Only two arguments can be specified");var n=this.evTargetListenersMap.get(e);if(!n)return!1;var r=n.get(t);return!(!r||0===r.size)}},{key:"hasEventListener",value:function(e,t,n){if(3!==arguments.length)throw Error("Only 3 arguments can be specified");var r=this.evTargetListenersMap.get(e);if(!r)return!1;var i=r.get(t);if(!i)return!1;var o=i.get(n);return!!o}},{key:"_getFrozenListenerDef",value:function(e){if(!e)return null;var t={},n=null,r=e.options;return r&&(n={},t.options=n,r.capture&&(n.capture=r.capture),r.callbackOnce&&(n.once=r.callbackOnce),r.listenerName&&(n.listenerName=r.listenerName)),t.listener=e.listener,Object.freeze(n),Object.freeze(t),t}},{key:"clearAllEventListeners",value:function(){var e,t=o(this.getAllEventTargets());try{for(t.s();!(e=t.n()).done;){var n=e.value;this.clearEventListeners(n)}}catch(e){t.e(e)}finally{t.f()}}},{key:"clearEventListeners",value:function(e,t){if(!e)throw Error("At least the EventTarget must be specified as an argument");var n=this.getEventListeners(e,t);if(t){if(t){var r,i=o(n);try{for(i.s();!(r=i.n()).done;){var a=r.value;this.removeEventListener(e,t,null,a.options)}}catch(e){i.e(e)}finally{i.f()}}}else{var s,l=o(n);try{for(l.s();!(s=l.n()).done;){var u,c=s.value,f=c.eventType,v=o(c.listeners);try{for(v.s();!(u=v.n()).done;){var y=u.value.options;this.removeEventListener(e,f,null,y)}}catch(e){v.e(e)}finally{v.f()}}}catch(e){l.e(e)}finally{l.f()}}}},{key:"clearEventListener",value:function(e,t,n){var r=this.getEventListener(e,t,n);r&&r.options&&this.removeEventListener(e,t,null,r.options)}},{key:"getAllEventTargets",value:function(){return Array.from(this.evTargetListenersMap.keys())}},{key:"searchEventListenersByName",value:function(e){var t,n=[],r=o(this.getAllEventTargets());try{for(r.s();!(t=r.n()).done;){var i,a=t.value,s=this.evTargetListenersMap.get(a),l=o(s.keys());try{for(l.s();!(i=l.n()).done;){var u=i.value,c=s.get(u),f=this._getFrozenListenerDef(c.get(e));f&&n.push(f)}}catch(e){l.e(e)}finally{l.f()}}}catch(e){r.e(e)}finally{r.f()}return n}},{key:"_searchKeyInValueContent",value:function(e,t,n){var r,a=o(e);try{for(a.s();!(r=a.n()).done;){var s=i(r.value,2),l=s[0];if(s[1][t]===n)return l}}catch(e){a.e(e)}finally{a.f()}return null}},{key:"_checkTypeOfOptions",value:function(e){if("object"!==r(e)&&void 0!==e)throw"boolean"==typeof e?new Error("Type of boolean is not accepted as the fourth argument you specify.\n      If you want to enable useCapture, specify {capture: true} as the fourth parameter instead."):new Error("Type of ".concat(r(e)," is not accepted as the fourth argument you specify.\n      If you want to specify options, specify an object like {capture: true, listenerName:'my-listener-01'}."))}},{key:"_cloneJson",value:function(e){return JSON.parse(JSON.stringify(e))}},{key:"typeOf",value:function(e){return Object.prototype.toString.call(e).slice(8,-1)}}])&&l(t.prototype,n),a&&l(t,a),e}()}]).default}));

/***/ }),

/***/ "./node_modules/merge-deeply/lib/merge-deeply.js":
/*!*******************************************************!*\
  !*** ./node_modules/merge-deeply/lib/merge-deeply.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! merge-deeply v2.1.1 Copyright (c) 2019-2020 riversun.org@gmail.com */
!function(e,t){ true?module.exports=t():undefined}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(n=(c=a.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,r){var i=function(e){return e&&"object"===a(e)&&!Array.isArray(e)},c=r&&r.concatArray,f={};r&&r.assignToObject&&(f=r.assignToObject,r.assignToObject=null);var l,y,b,p=null;if(p=f===e?e:Object.assign(f,e),i(e)&&i(t))for(var s=0,d=Object.entries(t);s<d.length;s++){var m=o(d[s],2),j=m[0],g=m[1],v=e[j];c&&Array.isArray(g)&&Array.isArray(v)&&t!==e?p[j]=v.concat.apply(v,n(g)):i(g)&&Object.prototype.hasOwnProperty.call(e,j)?p[j]=u(v,g,r):Object.assign(p,(b=g,(y=j)in(l={})?Object.defineProperty(l,y,{value:b,enumerable:!0,configurable:!0,writable:!0}):l[y]=b,l))}return p}function f(e){var t=null,r=null,n=e.op;if(!n)throw Error('The initialization property "op" cannot be omitted. "merge","overwrite-merge","clone" can be specified.');var o="merge"===n,i="clone"===n,c="overwrite-merge"===n;if(o){if(t=e.object1,r=e.object2,!t||!r)throw Error("object1 or object2 is not specified.")}else if(c){if(t=e.object1,r=e.object2,!t||!r)throw Error("object1 or object2 is not specified.");if(0===Object.keys(r).length)return null}else{if(!i)throw Error('An invalid "op" property value "'.concat(n,'" has been specified.'));t=e.object1,r={}}var a,f=Object.create(Object.getPrototypeOf(t)),l=null,y=(a=t,Object.getPrototypeOf(a)!==Object.prototype);return o&&y||i?(u(t,t,{assignToObject:f,concatArray:e&&e.concatArray}),l=f):l={},u(i?l:t,r,{assignToObject:c?t:l,concatArray:e&&e.concatArray}),l}r.r(t),r.d(t,"default",(function(){return f}))}]).default}));

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/CCommon.js":
/*!************************!*\
  !*** ./src/CCommon.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

CALIGN = {};

CALIGN.LEFT_TOP = 'LEFT_TOP';
CALIGN.HCENTER_TOP = 'CENTER_TOP';
CALIGN.RIGHT_TOP = 'RIGHT_TOP';
CALIGN.LEFT_VCENTER = 'LEFT_CENTER';
CALIGN.HCENTER_VCENTER = 'CENTER_CENTER';
CALIGN.CENTER = CALIGN.HCENTER_VCENTER;
CALIGN.RIGHT_VCENTER = 'RIGHT_CENTER';
CALIGN.LEFT_BOTTOM = 'LEFT_BOTTOM';
CALIGN.HCENTER_BOTTOM = 'CENTER_BOTTOM';
CALIGN.RIGHT_BOTTOM = 'RIGHT_BOTTOM';

module.exports = CALIGN;


/***/ }),

/***/ "./src/JSFrame.css":
/*!*************************!*\
  !*** ./src/JSFrame.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./JSFrame.css */ "./node_modules/css-loader/dist/cjs.js!./src/JSFrame.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/JSFrame.js":
/*!************************!*\
  !*** ./src/JSFrame.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./JSFrame.css */ "./src/JSFrame.css");
var EventEmitter = __webpack_require__(/*! @riversun/event-emitter */ "./node_modules/@riversun/event-emitter/lib/event-emitter.js");
var CALIGN = __webpack_require__(/*! ./CCommon.js */ "./src/CCommon.js");
var WindowEventHelper = __webpack_require__(/*! ./utils/WindowEventHelper.js */ "./src/utils/WindowEventHelper.js");
var inherit = __webpack_require__(/*! ./utils/Inherit.js */ "./src/utils/Inherit.js");
var CFrameAppearance = __webpack_require__(/*! ./appearance/CFrameAppearance.js */ "./src/appearance/CFrameAppearance.js");
var CDomPartsBuilder = __webpack_require__(/*! ./appearance/CDomPartsBuilder.js */ "./src/appearance/CDomPartsBuilder.js");
var CSimpleLayoutAnimator = __webpack_require__(/*! ./utils/CSimpleLayoutAnimator.js */ "./src/utils/CSimpleLayoutAnimator.js");
var EventListenerHelper = __webpack_require__(/*! event-listener-helper */ "./node_modules/event-listener-helper/lib/event-listener-helper.js");

//If you don't want to bundle preset styles in JsFrame.js ,comment out below.
var presetStyles = {
  'yosemite': __webpack_require__(/*! ./presets/appearance/PresetStyleYosemite.js */ "./src/presets/appearance/PresetStyleYosemite.js"),
  'redstone': __webpack_require__(/*! ./presets/appearance/PresetStyleRedstone.js */ "./src/presets/appearance/PresetStyleRedstone.js"),
  'popup': __webpack_require__(/*! ./presets/appearance/PresetStylePopup.js */ "./src/presets/appearance/PresetStylePopup.js"),
  'toast': __webpack_require__(/*! ./presets/appearance/PresetStyleToast.js */ "./src/presets/appearance/PresetStyleToast.js"),
  'material': __webpack_require__(/*! ./presets/appearance/PresetStyleMaterial.js */ "./src/presets/appearance/PresetStyleMaterial.js"),
};

var presetWindows = {
  'yosemite': __webpack_require__(/*! ./presets/window/PresetWindowYosemite.js */ "./src/presets/window/PresetWindowYosemite.js"),
};

var DEF = {};

// true:Support mouse on mouse-enabled devices
var MOUSE_ENABLED = true;

// true:Support touch on touch-enabled devices
var TOUCH_ENABLED = true;

//true:Allow the window to be moved only in the case of one finger
// (the window cannot be moved in the case of two or more fingers)
var TOUCH_MOVE_ONLY_WITH_ONE_FINGER = true;


/**
 * DEFINITIONS
 */
DEF.CBEAN = {};
DEF.CBEAN.HTML_ELEMENT = 'span';
DEF.CBEAN.HTML_ELEMENT_ID_PREFIX = 'htmlElement_';
DEF.CBEAN.TYPE_NAME = 'bean';


//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


/**
 * CBeanFrame Class<p>
 * The smallest window. It is responsible for basic processing only.
 *
 * @param beanId id of this small window
 * @param left
 * @param top
 * @param width
 * @param height
 * @param zindex
 * @constructor
 */
function CBeanFrame(beanId, left, top, width, height, zindex, w_border_width, appearance) {

  var me = this;

  me.movable = true;


  //fields
  me.id = beanId;
  me.property = {};

  me.extra = {};

  me.parentCanvas = null;
  me.htmlElement = null;

  me.pullUpDisabled = false;
  if (appearance) {
    me.pullUpDisabled = appearance.pullUpDisabled;
  }


  //initialize
  me.htmlElement = document.createElement(DEF.CBEAN.HTML_ELEMENT);
  me.htmlElement.id = DEF.CBEAN.HTML_ELEMENT_ID_PREFIX + beanId;
  me.htmlElement.style.position = 'absolute';
  me.htmlElement.style.left = parseInt(left, 10) + 'px';
  me.htmlElement.style.top = parseInt(top, 10) + 'px';
  me.htmlElement.style.width = parseInt(width, 10) + 'px';
  me.htmlElement.style.height = parseInt(height, 10) + 'px';


  //Zindex may become 'undefined' in some cases.
  if (zindex !== null) {
    me.htmlElement.style.zIndex = zindex;
  }
  me.htmlElement.style.borderColor = '#000000';

  //If I set a larger font size, width and height of window will be affected....
  me.htmlElement.style.fontSize = '1px';

  //Refer parents to each other.(sougo-sansho)
  me.htmlElement.parent = me;

  if (MOUSE_ENABLED) {
    //Note that 'mouseDown' is mapped to 'onmousedown' of htmlElement,
    //so when 'onmouseDown' fires ,the 'this' will indicate 'htmlElement'
    me.htmlElement.onmousedown = me.onmouseDown;
  }

  if (TOUCH_ENABLED) {
    if ('ontouchstart' in window) {
      var funcOnTouchStart = function(evt) {
        // The "mousedown" event happens right after "touchstart" event,
        // but I don't call #preventdefault because #preventdefault prevents "onclick".
        // So, perform #preventdefault only for "touchmove"
        // evt.preventDefault();
        me.onmouseDown.bind(this)(evt);
      };
      me.htmlElement.ontouchstart = funcOnTouchStart;
    }
  }

  //Type name of this class
  me.htmlElement.typeName = DEF.CBEAN.TYPE_NAME;

  //Special field indicating usage of this class
  me.htmlElement.usage = 'nothing';

  //Whether it can move outside the frame(waku).
  me.htmlElement.isRangeLimited = false;

  //Movement magnification in the X direction
  //(If it is 0, it can not move in the X direction.)
  me.htmlElement.argX = 1;

  //Movement magnification in Y direction
  // (If it is 0, it can not move in Y direction)
  me.htmlElement.argY = 1;
  me.externalAreaClickedListener = null;

  me.onMoveListener = null;
}

CBeanFrame.prototype.getWindowType = function() {
  return 'CBeanFrame';
};

CBeanFrame.prototype.setOnMoveListener = function(listener) {
  var me = this;
  me.onMoveListener = listener;
};
CBeanFrame.prototype._onMove = function(e) {
  var me = this;
  if (me.onMoveListener) {
    me.onMoveListener(e);
  }
};

/**
 * Set whether the frame can be moved while dragging with the mouse
 * @param enabled
 */
CBeanFrame.prototype.setMovable = function(enabled) {
  var me = this;

  if (enabled) {
    me.htmlElement.argX = 1;
    me.htmlElement.argY = 1;
  } else {
    me.htmlElement.argX = 0;
    me.htmlElement.argY = 0;
  }

  me.movable = enabled;

  return me;
};


CBeanFrame.prototype.setParentCanvas = function(parentCanvas) {
  var me = this;
  me.parentCanvas = parentCanvas;
  me.htmlElement.parentCanvas = me.parentCanvas;
  return me;
};
CBeanFrame.prototype.setOnExternalAreaClickedListener = function(listener) {
  var me = this;
  me.externalAreaClickedListener = listener;
  return me;
};
CBeanFrame.prototype.onBodyClicked = function(e) {

  var me = this;

  var clickX = e.pageX;
  var clickY = e.pageY;

  var left = parseInt(me.htmlElement.style.left);
  var top = parseInt(me.htmlElement.style.top);
  var width = parseInt(me.htmlElement.style.width);
  var height = parseInt(me.htmlElement.style.height);

  if (left < clickX && clickX < (left + width) && top < clickY && (clickY < top + height)) {
    //- clicked internal area of this frame
  } else {

    //- clicked external area of this frame
    if (me.externalAreaClickedListener) {
      me.externalAreaClickedListener();
    }

  }


};
CBeanFrame.prototype.onmouseDown = function(evt) {

  // Typically, if you mouse down on the title portion, the onmousedown fires to move the window.
  // Mousing down the bottom of the window, the left side of the window,
  // or the bottom of the window will fire the onmouseDown of the window itself (CBeanFrame)
  // as well as the onmouseDown of the CMarkerWindow for resizing.
  // Each mousedown element is set to a currentObject as being selected,
  // whether it's a window or a marker.

  // this means htmlElement of CBeanFrame object
  var refHtmlElement = this;

  var e = evt;

  if (TOUCH_ENABLED) {
    if (evt.type === 'touchstart') {
      var changedTouches = evt.changedTouches;
      if (TOUCH_MOVE_ONLY_WITH_ONE_FINGER) {
        var touches = evt.touches;
        if (touches.length === 1) {
          e = changedTouches[0];
        } else {
          return true;
        }
      } else {
        e = changedTouches[0];
      }
    }
  }

  //Retrieve CBeanFrame object itself
  var refCBeanFrame = refHtmlElement.parent;

  if (e.button == 0 || evt.type === 'touchstart') {
    // for modal background window
    if (refCBeanFrame.pullUpDisabled) {
      return false;
    } else {

      // Set the current CBeanFrame to be selected(=currentObject) among other CBeanFrames in the parent canvas.
      refHtmlElement.parentCanvas.currentObject = refHtmlElement;

      // Bring the current bean to the top
      refHtmlElement.parentCanvas.pullUp(refCBeanFrame.id);
    }

  } else if (e.button == 2) {
    return false;
  }

  if (refHtmlElement.parentCanvas.currentObject) {

    refHtmlElement.parentCanvas.offsetX = e.pageX - parseInt(refHtmlElement.parentCanvas.currentObject.style.left, 10);
    refHtmlElement.parentCanvas.offsetY = e.pageY - parseInt(refHtmlElement.parentCanvas.currentObject.style.top, 10);
  }


  return false;
};
/**
 * End of CBeanFrame Class <p>
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


DEF.CANVAS = {};
DEF.CANVAS.HTML_ELEMENT = 'div';
DEF.CANVAS.WIDTH_ADJUST_20180722 = 2;
DEF.CANVAS.HEIGHT_ADJUST_20180722 = 3;

/**
 * CCanvas class
 * A canvas is a place where windows are arranged, where you can drag and move freely.
 *
 * @param parentElement
 * @param canvasId
 * @param left
 * @param top
 * @param width
 * @param height
 * @constructor
 */
function CCanvas(parentElement, canvasId, left, top, width, height) {

  //Event data to be transmitted
  function EventData() {
    this.x = 0;
    this.y = 0;
    this.screenX = 0;
    this.screenY = 0;
    this.deltaX = 0;
    this.deltaY = 0;
    this.isMoved = false;
    this.targetTypeName = null;
    this.targetUsage = null;
    this.targetObject = null;
  }

  var me = this;


  me.enablePullUp = true;// true:Pull-up sorting to bring the window to the forefront by clicking to get focus.
  me.currentObject = null;
  me.onTopObject = null;
  me.offsetX = 0;
  me.offsetY = 0;


  //Object which generated 'mouseDown' event at the very beginning(ichiban-saisho)
  me.mouseDownSource = null;

  me.id = canvasId;
  me.canvasElement = null;
  me.parentElement = parentElement;
  me.beanList = new Array();

  me.beanIdName = {};//key:beanId value:beanName
  me.beanNameId = {};//key:beanName value:beanId

  me.eventData = new EventData();


  me.baseZIndex = 0;
  me.setBaseZIndex = function(baseZIndex) {
    me.baseZIndex = baseZIndex;
  };
  me.getBaseZIndex = function() {
    return me.baseZIndex;
  };


  me.canvasElement = document.createElement(DEF.CANVAS.HTML_ELEMENT);

  me.canvasElement.style.zIndex = 2000;
  me.canvasElement.id = me.id;
  me.canvasElement.style.boxSizing = 'border-box';
  me.canvasElement.style.position = 'absolute';
  me.canvasElement.style.left = parseInt(left) + 'px';
  me.canvasElement.style.top = parseInt(top) + 'px';
  //Added an adjustment value.Because transparent part appears at the bottom of the screen,
  me.canvasElement.style.width = (parseInt(width) + DEF.CANVAS.WIDTH_ADJUST_20180722) + 'px';
  me.canvasElement.style.height = (parseInt(height) + DEF.CANVAS.HEIGHT_ADJUST_20180722) + 'px';
  me.canvasElement.style.backgroundColor = 'transparent';
  me.canvasElement.style.borderStyle = 'none';
  me.canvasElement.style.margin = '0px';
  me.canvasElement.style.borderWidth = '0px';
  me.canvasElement.style.borderColor = 'transparent';

  //Add the Canvas's html element into the canvas's parent html element
  me.parentElement.appendChild(me.canvasElement);

}


CCanvas.prototype.mouseMove = function(evt) {

  var me = this;
  var e = evt;
  if (TOUCH_ENABLED) {
    if (evt.type === 'touchmove') {
      var changedTouches = evt.changedTouches;
      if (TOUCH_MOVE_ONLY_WITH_ONE_FINGER) {
        var touches = evt.touches;
        if (touches.length === 1) {
          e = changedTouches[0];
        } else {
          return true;
        }
      } else {
        e = changedTouches[0];
      }
    }
  }
  if (me.currentObject) {

    //eventData.isMoved=true;The presence of event data means that it has moved.
    me.eventData.targetTypeName = me.currentObject.typeName;
    me.eventData.targetUsage = me.currentObject.usage;
    me.eventData.targetObject = me.currentObject;

    //Even when obj is not being dragged, mouse coordinates are used here because they are needed.
    var newObjLeftPx = e.pageX - me.offsetX;
    var newObjTopPx = e.pageY - me.offsetY;

    var absoluteMouseX = e.pageX;
    var absoluteMouseY = e.pageY;

    //Take the snapshot before updating the location.
    var oldObjLeftPx = me.currentObject.style.left;
    var oldObjTopPx = me.currentObject.style.top;

    //When the mouse cursor goes out of range,
    //the addition in the X direction and Y direction (delta X, delta Y) is set to zero.
    //this.left=Cavas's left side edge, this.top=Canvas's top side edge.
    var tmpLeft = parseInt(newObjLeftPx, 10);
    var tmpTop = parseInt(newObjTopPx, 10);

    var tmpRight = tmpLeft + parseInt(me.currentObject.style.width, 10);
    var tmpBottom = tmpTop + parseInt(me.currentObject.style.height, 10);

    var styleWidth = parseInt(me.canvasElement.style.width, 10);
    var styleHeight = parseInt(me.canvasElement.style.height, 10);

    var deltaX = 0;
    var deltaY = 0;

    if (me.currentObject.isRangeLimited == true &&
      (tmpLeft <= 0 || tmpRight > styleWidth || tmpTop <= 0 || tmpBottom > styleHeight)
    ) {
      deltaX = 0;
      deltaY = 0;
    } else {
      deltaX = (parseInt(newObjLeftPx, 10) - parseInt(oldObjLeftPx, 10));
      deltaY = (parseInt(newObjTopPx, 10) - parseInt(oldObjTopPx, 10));
      me.currentObject.style.left = (parseInt(me.currentObject.style.left) + deltaX * me.currentObject.argX) + 'px';
      me.currentObject.style.top = (parseInt(me.currentObject.style.top) + deltaY * me.currentObject.argY) + 'px';

      var parentObject = me.currentObject.parent;
      if (parentObject && parentObject._onMove) {
        parentObject._onMove();
      }

    }
    me.eventData.deltaX = deltaX;
    me.eventData.deltaY = deltaY;

    return me.eventData;

  }
  //Returns null if none of the objects are clicked and the only mouse just moves.
  return null;
};


CCanvas.prototype.mouseUp = function(e) {
  var me = this;
  me.currentObject = null;
  me.mouseDownSource = null;
};


//Bring the object in front
CCanvas.prototype.pullUp = function(targetBeanId) {

  var me = this;

  var tmpBeanArray = [];

  var beanList = me.beanList;

  for (var i in beanList) {
    tmpBeanArray.push(beanList[i]);
  }

  //Bring the target object in front and set zindex to 1.
  var targetBean = beanList[targetBeanId];

  if (me.enablePullUp) {
    me.pullUpSort(targetBean, tmpBeanArray, me.baseZIndex);
  }


  //Remember the top object
  me.onTopObject = targetBean;


};

//Calculate the front / back information of the window accurately.
CCanvas.prototype.pullUpSort = function(pullupObject, objectArray, baseIndex) {
  var me = this;

  //Increase the index number of the target object
  pullupObject.htmlElement.style.zIndex = objectArray.length + baseIndex;

  //sort by index
  objectArray.sort(function(b, a) {
    return -parseInt(b.htmlElement.style.zIndex, 10) + parseInt(a.htmlElement.style.zIndex, 10);
  });

  //Redefine number of the index
  for (var i in objectArray) {
    objectArray[i].htmlElement.style.zIndex = (objectArray.length - 1) - i + baseIndex;
  }

};


/**
 * remove the bean object
 * @param beanId
 */
CCanvas.prototype.removeBean = function(beanId) {

  var me = this;

  //Retrieve the target beanFrame
  var beanList = me.beanList;
  var targetBean = beanList[beanId];

  //Remove bean's htmlElement from canvasElement
  me.canvasElement.removeChild(targetBean.htmlElement);

  //Delete the bean object in the associative array.
  delete beanList[beanId];


};


/**
 * Add bean into this canvas
 * @param bean
 */
CCanvas.prototype.addBean = function(bean) {

  var me = this;

  var beanList = me.beanList;

  var beanIdName = me.beanIdName;//key:beanId value:beanName
  var beanNameId = me.beanNameId; //key:beanName value:beanId


  beanList[bean.id] = bean;

  if (bean.property.name) {
    beanNameId[bean.property.name] = bean.id;
    beanIdName[bean.id] = bean.property.name;
  }

  //In this usage case the 'length' property is invalid ..
  var num = 0;

  for (var j in beanList) {
    num++;
  }

  //Set zIndex so that what you add later will come up.
  bean.htmlElement.style.zIndex = num + me.baseZIndex;

  //On the bean side, specify the parent of the bean to me.
  bean.setParentCanvas(me);


  this.canvasElement.appendChild(bean.htmlElement);
};

CCanvas.prototype.getParentElement = function() {
  var me = this;
  return me.parentElement;
};

/**
 * End of canvas class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


DEF.CFRAME = {};
DEF.CFRAME.CANVAS_ELEMENT_BGCOLOR = 'transparent';
DEF.CFRAME.MODAL_BACKGROUND_FRAME_ID_PREFIX = 'window__modal_window_background_';


inherit(CFrame, CBeanFrame);


/**
 * CFrame class
 * <p>
 * This class represents a window whose size can be changed ,
 * can move freely on the screen,
 * can have a title bar,
 *
 * @param windowId
 * @param w_left
 * @param w_top
 * @param w_width
 * @param w_height
 * @param zindex
 * @param w_border_width
 * @param appearance
 * @constructor
 */
function CFrame(windowId, w_left, w_top, w_width, w_height, zindex, w_border_width, appearance) {

  var me = this;

  //call constructor of superclass
  CFrame.superConstructor.call(this, windowId, w_left, w_top, w_width, w_height, zindex, w_border_width, appearance);

  me.anchor = CALIGN.LEFT_TOP;

  me.showTitleBar = appearance.showTitleBar;

  me.canvasNetHeight = null;
  me.canvasNetWidth = null;
  me.frameHeightAdjust = appearance.frameHeightAdjust;

  me.frameComponentMap = {};


  //initialize the field
  me.canvas = null;

  //canvas id
  me.myCanvasId = null;

  //Buttons to be placed on the screen (positioning same as the close button)
  me.floatingButton = null;

  me.titleBarClassNameDefault = 'jsframe-titlebar-default';// DEF.CFRAME.TITLE_BAR_CLASS_DEFAULT;
  me.titleBarClassNameFocused = 'jsframe-titlebar-focused';//DEF.CFRAME.TITLE_BAR_CLASS_FOCUSED;


  //height of titlebar
  me.titleBarHeight = appearance.titleBarHeight;

  me.titleBarCaption = appearance.titleBarCaption;
  me.titleBarCaptionLeftMargin = appearance.titleBarCaptionLeftMargin;
  me.titleBarCaptionFontSize = appearance.titleBarCaptionFontSize;
  me.titleBarCaptionFontWeight = appearance.titleBarCaptionFontWeight;
  me.titleBarBorderBottomDefault = appearance.titleBarBorderBottomDefault;
  me.titleBarBorderBottomFocused = appearance.titleBarBorderBottomFocused;
  me.titleBarCaptionTextShadow = appearance.titleBarCaptionTextShadow;
  me.titleBarCaptionTextAlign = appearance.titleBarCaptionTextAlign;

  //Title bar width adjustment value
  me.titleAdjustWidth = 2;

  me.windowId = windowId;

  me.exBorderWidth = 0;


  me.myCanvasId = windowId + '_canvas';


  //img element for icon placed on the left-top
  var appIcon = document.createElement('img');
  //		appIcon.src='img/ico_app_file16.gif';

  //url of icon image
  appIcon.src = '';
  appIcon.style.position = 'absolute';
  appIcon.style.left = '2px';
  appIcon.style.top = '2px';
  appIcon.style.width = '16px';
  appIcon.style.height = '16px';
  appIcon.style.visibility = 'hidden';


  //The title bar must be on the front of the canvas.
  me.titleBar = document.createElement('div');

  me.titleBar.className = 'jsframetitlebar';

  if (me.showTitleBar) {

    me.titleBar.id = windowId + '_title';
    me.titleBar.style.position = 'absolute';
    me.titleBar.style.boxSizing = 'border-box';
    me.titleBar.style.top = '0px';
    me.titleBar.style.left = '0px';
    me.titleBar.style.width = (w_width - me.titleAdjustWidth + DEF.CANVAS.WIDTH_ADJUST_20180722) + 'px';
    me.titleBar.style.userSelect = 'none';


    if (me.titleBarHeight) {

      var titleBarAdjust = 0;

      if (me.titleBarBorderBottomDefault) {
        titleBarAdjust = 0;
      }


      me.titleBar.style.height = (parseInt(me.titleBarHeight, 10) + 0) + 'px';
    }

    if (me.titleBarColorDefault) {
      me.titleBar.style.background = me.titleBarColorDefault;
    }
    me.titleBar.style.zIndex = 0;

    me.titleBar.style.color = me.titleBarCaptionColorDefault;
    me.titleBar.style.fontSize = me.titleBarCaptionFontSize;
    me.titleBar.style.fontWeight = me.titleBarCaptionFontWeight;
    me.titleBar.style.textShadow = me.titleBarCaptionTextShadow;
    me.titleBar.style.textAlign = me.titleBarCaptionTextAlign;
    // me.titleBar.style.textShadow = "0 1px 0 rgba(255,255,255,.7)";
    // me.titleBar.style.textAlign = 'center';

    me.titleBar.style.lineHeight = me.titleBar.style.height;


    me.titleBar.style.borderBottom = me.titleBarBorderBottomDefault;
    //me.titleBar.style.boxShadow = '0 1px 0 rgba(255,255,255,0.5)';


    //Set not to display overflow character string
    me.titleBar.style.overflow = 'hidden';


    var titleBarText = document.createTextNode('');

    //'span' to store text
    var titleBarTextSpan = document.createElement('span');

    titleBarTextSpan.id = me.id + '_titleBarText';
    if (me.titleBarCaptionLeftMargin != null) {
      titleBarTextSpan.style.position = 'absolute';
      titleBarTextSpan.style.left = parseInt(me.titleBarCaptionLeftMargin, 10) + 'px';
    } else {
      titleBarTextSpan.style.position = 'absolute';
      titleBarTextSpan.style.left = '0px';
      titleBarTextSpan.style.right = '0px';
    }
    titleBarTextSpan.style.top = '0px';
    titleBarTextSpan.appendChild(titleBarText);
    me.titleBar.appendChild(titleBarTextSpan);

    //Discontinue appicon(20061011)
    //me.titleBar.appendChild(appIcon);
  }

  me.htmlElement.appendChild(me.titleBar);


  //Set Canvas throughout the window

  //parseInt(me.titleBar.style.height);//me.titleBarHeight);
  var canvasMoreHeight = parseInt(me.titleBarHeight, 10) - titleBarAdjust;
  var canvasMoreSpacing = parseInt(me.titleAdjustWidth, 10);

  if (me.showTitleBar) {


  } else {
    canvasMoreHeight = 0;
    canvasMoreSpacing = 0;
    titleBarAdjust = 0;
  }


  me.canvasNetWidth = w_width - canvasMoreSpacing;
  me.canvasNetHeight = w_height - canvasMoreHeight - canvasMoreSpacing - 1 - titleBarAdjust + me.frameHeightAdjust;


  //Change the style of htmlElement of CFrame (CBean).
  me.htmlElement.style.cursor = 'move';


  //Create a canvas
  me.canvas = new CCanvas(me.htmlElement, me.myCanvasId, 0, canvasMoreHeight, w_width - canvasMoreSpacing, w_height - canvasMoreHeight - canvasMoreSpacing);

  me.canvas.enablePullUp = false;
  me.canvas.canvasElement.style.backgroundColor = DEF.CFRAME.CANVAS_ELEMENT_BGCOLOR;
  me.canvas.canvasElement.style.cursor = 'default';

  if (MOUSE_ENABLED) {
    //Handling the omousedown event that occurred in Canvas which is a child element of CFrame
    me.canvas.canvasElement.onmousedown = me.canvasMouseDown;
  }

  if (TOUCH_ENABLED) {
    if ('ontouchstart' in window) {
      var funcOnTouchStart = function(evt) {
        // The "mousedown" event happens right after "touchstart" event,
        // but I don't call #preventdefault because #preventdefault prevents "onclick" (like button on titlebar).
        // So, perform #preventdefault only for "touchmove"
        // evt.preventDefault();
        var touchStartEvent = evt.changedTouches[0];
        me.canvasMouseDown.bind(this)(touchStartEvent);
      };
      me.canvas.canvasElement.ontouchstart = funcOnTouchStart;
    }
  }

  //Set the canvas as a reference to the parent of the canvas html element canvasElement.
  me.canvas.canvasElement.parentCFrame = me;


  var tmpCanvasWidth = parseInt(me.canvas.canvasElement.style.width, 10);
  var tmpCanvasHeight = parseInt(me.canvas.canvasElement.style.height, 10);

  var markerWidth = appearance.resizeAreaWidth;
  var markerHeight = appearance.resizeAreaHeight;

  //Offset from marker edge
  var edgeMargin = appearance.resizeAreaOffset;
  var markerZIndex = 0;

  var colorRD, colorDD, colorRR;

  if (appearance.resizeAreaVisible) {
    colorRD = 'rgba(255, 0, 0, 0.5)';
    colorDD = 'rgba(0, 0, 255, 0.5)';
    colorRR = 'rgba(0, 255, 0, 0.5)';
  }

  //Lower right(R-D)
  var markerRD = new CMarkerWindow(
    me.myCanvasId + '_RD',
    tmpCanvasWidth + edgeMargin,
    tmpCanvasHeight + edgeMargin,
    markerWidth,
    markerHeight,
    markerZIndex,
    'RD', colorRD);

  markerRD.htmlElement.style.cursor = 'se-resize';//nw-resize';

  //Since only the deltaX and deltaY are acquired and the movement of the marker itself is
  // performed by CFrame_resize, the movement coefficient of the marker itself is set to 0.
  markerRD.htmlElement.argX = 0;
  markerRD.htmlElement.argY = 0;


  //Bottom(D-D)
  var markerDD = new CMarkerWindow(
    me.myCanvasId + '_DD',
    0,
    tmpCanvasHeight + edgeMargin,
    tmpCanvasWidth + edgeMargin,
    markerHeight,
    markerZIndex,
    'DD', colorDD);

  markerDD.htmlElement.style.cursor = 'n-resize';

  //Since only the deltaX and deltaY are acquired and the movement of the marker itself is
  // performed by CFrame_resize, the movement coefficient of the marker itself is set to 0.
  markerDD.htmlElement.argX = 0;
  markerDD.htmlElement.argY = 0;

  //Right(R-R)
  var markerRR = new CMarkerWindow(
    me.myCanvasId + '_RR',
    tmpCanvasWidth + edgeMargin,
    0,
    markerWidth,
    tmpCanvasHeight + edgeMargin,
    markerZIndex,
    'RR', colorRR);

  markerRR.htmlElement.style.cursor = 'w-resize';

  //Since only the deltaX and deltaY are acquired and the movement of the marker itself is
  // performed by CFrame_resize, the movement coefficient of the marker itself is set to 0.
  markerRR.htmlElement.argY = 0;
  markerRR.htmlElement.argX = 0;

  //Add size change marker to canvas.
  me.canvas.addBean(markerRD);
  me.canvas.addBean(markerDD);
  me.canvas.addBean(markerRR);

  //Method to remove size change marker (can not resize)
  me.removeMarkers = function() {
    me.canvas.removeBean(markerRD.id);
    me.canvas.removeBean(markerDD.id);
    me.canvas.removeBean(markerRR.id);
    me.htmlElement.style.cursor = 'default';
  };


  me.removeMarkers2 = function() {
    me.canvas.removeBean(markerRD.id);
    me.canvas.removeBean(markerDD.id);
    me.canvas.removeBean(markerRR.id);
  };
  me.enableMarkers = function(enabled) {
    if (enabled) {

      markerRD.htmlElement.style.display = 'flex';
      markerDD.htmlElement.style.display = 'flex';
      markerRR.htmlElement.style.display = 'flex';
      markerRD.htmlElement.style.cursor = 'se-resize';
      markerDD.htmlElement.style.cursor = 'n-resize';
      markerRR.htmlElement.style.cursor = 'w-resize';
    } else {
      markerRD.htmlElement.style.display = 'none';
      markerDD.htmlElement.style.display = 'none';
      markerRR.htmlElement.style.display = 'none';
    }
    // me.canvas.removeBean(markerRD.id);
    // me.canvas.removeBean(markerDD.id);
    // me.canvas.removeBean(markerRR.id);
  };

  for (var idx in appearance.frameComponents) {

    var frameComponent = appearance.frameComponents[idx];
    frameComponent.setFrame(me);

    //if frameComponent has special name 'closeButton', it will act as a close button.
    if ('closeButton' == frameComponent.id) {
      frameComponent.htmlElement.onclick = me.close;
    }

    // Handle child menu open/close
    var frameComponentHasChildMenu = frameComponent.htmlElement.querySelector('.jsframe-child-menu');
    if (frameComponentHasChildMenu) {
      me.eventListenerHelper.addEventListener(frameComponent.htmlElement, 'click', function(e) {

          var frameComponentId = e.target.getAttribute('component-id');

          // Close all frame component's childmenu once because other frame component's childmenu may be open.
          // If {exceptFrameComponentId:[frameComponentId]} is specified for the argument,
          // the child menu will not be closed.
          me.hideFrameComponentChildMenus({ exceptFrameComponentId: frameComponentId });

          if (frameComponentId) {
            var frameComponentHtmlElement = me.getFrameComponentElement(frameComponentId);
            var frameComponentChildMenu = frameComponentHtmlElement.querySelector('.jsframe-child-menu');
            if (frameComponentChildMenu) {
              // By making the display a table,
              // the width of the childMenu can be accurately reflected.
              // (flex does not set the width correctly.)
              if (frameComponentChildMenu.style.display == 'table') {
                frameComponentChildMenu.style.display = 'none';
              } else {
                frameComponentChildMenu.style.display = 'table';
              }
            } else {
              console.error('frameComponent child menu isnt found. frameComponentId=' + frameComponentId);
            }
          }
        },
        { listenerName: 'frame-component_child-menu-listener' });
    }

    me.addFrameComponent(frameComponent);
  }  // /add frameComponents[end]

  //override the field
  me.htmlElement.style.backgroundColor = 'transparent';

  me.htmlElement.oncontextmenu = this.contextMenu;


  //The policy of Border drawing seems to be different between IE and FF.
  var caribVal = 0;


  me.caribValue = caribVal;

  if (me.exBorderWidth) {
    me.htmlElement.style.borderWidth = me.exBorderWidth + 'px';
  }
  me.htmlElement.style.width = (parseInt(me.htmlElement.style.width, 10) - caribVal) + 'px';
  me.htmlElement.style.height = (parseInt(me.htmlElement.style.height, 10) - caribVal + 1) + 'px';
  me.htmlElement.typeName = 'cwindow';
  me.htmlElement.overflow = 'auto';
  me.htmlElement.style.boxSizing = 'content-box';


  if (appearance.frameBorderStyle) {
    me.htmlElement.style.borderStyle = appearance.frameBorderStyle;
  }

  if (appearance.frameBoxShadow) {
    me.htmlElement.style.boxShadow = appearance.frameBoxShadow;
  }

  //TODO deprecation(because CIfFrame is extended this operation)
  if (parseInt(appearance.frameBorderWidthDefault, 10) >= 0) {
    me.htmlElement.style.borderWidth = appearance.frameBorderWidthDefault;
    me.htmlElement.style.borderColor = appearance.frameBorderColorDefault;

  }
  if (parseInt(appearance.frameBorderRadius, 10) >= 0) {
    me.htmlElement.style.borderRadius = appearance.frameBorderRadius;
  }

  me.onCloseFrameListener = null;

}


CFrame.prototype.setTitleBarClassName = function(classNameForDefault, classNameForFocused) {
  var me = this;
  if (classNameForDefault) {
    me.titleBarClassNameDefault = classNameForDefault;
    me.titleBarClassNameFocused = classNameForDefault;
  }
  if (classNameForFocused) {
    me.titleBarClassNameFocused = classNameForFocused;
  }
  return me;
};
/**
 * Add frameComponent(Wrapped DOM element like 'div' to display above the frame) to frame
 * @param frameComponent
 */
CFrame.prototype.addFrameComponent = function(frameComponent) {
  var me = this;

  me.frameComponentMap[frameComponent.id] = frameComponent;
  me.canvas.canvasElement.appendChild(frameComponent.htmlElement);
  return me;
};

/**
 * Get stored frame component by id
 * @param frameComponent
 */
CFrame.prototype.getFrameComponentElement = function(id) {
  var me = this;
  if (me.frameComponentMap[id]) {
    return me.frameComponentMap[id].htmlElement;
  } else {
    return null;
  }
};


CFrame.prototype.removeFrameComponentById = function(frameComponentId) {
  var me = this;

  var frameComponent = me.frameComponentMap[frameComponentId];

  me.canvas.canvasElement.removeChild(frameComponent.htmlElement);
  delete me.frameComponentMap[frameComponentId];
};

CFrame.prototype.showFrameComponent = function(frameComponentId, display) {
  var me = this;
  var comp = me.getFrameComponentElement(frameComponentId);
  if (comp) {
    if (display) {
      comp.style.display = display;
    } else {
      comp.style.display = 'flex';
    }
  }
  return me;
};

CFrame.prototype.hideFrameComponent = function(frameComponentId) {
  var me = this;
  var comp = me.getFrameComponentElement(frameComponentId);
  if (comp) {
    comp.style.display = 'none';
  }
  return me;
};

CFrame.prototype.hideAllVisibleFrameComponents = function() {
  var me = this;

  var compMap = me.frameComponentMap;
  for (var key in compMap) {
    if (compMap.hasOwnProperty(key)) {
      var comp = compMap[key].htmlElement;
      if (comp.style.display === 'none') {
        comp._alreadyNone = true;
      }
      comp.style.display = 'none';
    }
  }
};
CFrame.prototype.showAllVisibleFrameComponents = function() {
  var me = this;
  var compMap = me.frameComponentMap;
  for (var key in compMap) {
    if (compMap.hasOwnProperty(key)) {
      var comp = compMap[key].htmlElement;
      if (comp._alreadyNone) {
        comp._alreadyNone = null;
      } else {
        comp.style.display = 'flex';
      }
    }
  }
};

/**
 * Close all childMenu
 If {exceptFrameComponentId:[frameComponentId]} is specified for the argument,
 the child menu will not be closed.

 * @param opt
 */
CFrame.prototype.hideFrameComponentChildMenus = function(opt) {
  var me = this;

  var compMap = me.frameComponentMap;
  for (var frameComponentId in compMap) {
    if (compMap.hasOwnProperty(frameComponentId)) {
      if (opt && opt.exceptFrameComponentId) {
        if (frameComponentId === opt.exceptFrameComponentId) {
          continue;
        }
      }
      var comp = compMap[frameComponentId];
      if (comp.childMenu) {
        comp.childMenu.style.display = 'none';
      }
    }
  }
};


CFrame.prototype.setTitle = function(str) {
  var me = this;
  me.title = str;
  if (me.showTitleBar) {

    var textNode = document.createTextNode(str);
    //firstChildのfirstChildがspan
    me.titleBar.firstChild.replaceChild(textNode, me.titleBar.firstChild.firstChild);
  }
  return me;
};

CFrame.prototype.resize = function(deltaLeft, deltaTop, deltaWidth, deltaHeight) {

  var me = this;

  var tmpLeft = parseInt(me.htmlElement.style.left, 10);
  var tmpTop = parseInt(me.htmlElement.style.top, 10);
  var tmpWidth = parseInt(me.htmlElement.style.width, 10);
  var tmpHeight = parseInt(me.htmlElement.style.height, 10);

  me.htmlElement.style.left = parseInt(tmpLeft + deltaLeft, 10) + 'px';
  me.htmlElement.style.top = parseInt(tmpTop + deltaTop, 10) + 'px';

  me.htmlElement.style.width = parseInt(tmpWidth + deltaWidth, 10) + 'px';
  me.htmlElement.style.height = parseInt(tmpHeight + deltaHeight, 10) + 'px';


  var tmpCanvasWidth = parseInt(me.canvas.canvasElement.style.width, 10);
  var tmpCanvasHeight = parseInt(me.canvas.canvasElement.style.height, 10);

  //Since canvasElement is a (0, 0) relative coordinate with respect to the parent element,
  // so it is not necessary to change left and top.
  me.canvas.canvasElement.style.width = (tmpCanvasWidth + deltaWidth) + 'px';
  me.canvas.canvasElement.style.height = (tmpCanvasHeight + deltaHeight) + 'px';


  if (me.showTitleBar) {

    //Change the size of the title bar. TitleAdjustWidth etc.
    //The reason why you do not have to use titleAdjustWidth is because
    // these scaling are done with differences (deltaX, deltaY).
    //Therefore, if you adjust with the titleAdjustWidth as
    // the initial value, the other will stretch relative.
    //You do not think you can use ifDelta
    me.titleBar.style.width = (tmpCanvasWidth + deltaWidth) + 'px';

  } else {


  }


  for (var beanName in me.canvas.beanList) {
    var tmpBean = me.canvas.beanList[beanName];

    if (tmpBean.htmlElement.typeName == 'cmarkerwindow') {
      if (tmpBean.htmlElement.usage == 'RD') {
        //Move the size change lower right(RD) marker according to the amount of movement.
        tmpBean.htmlElement.style.left = (parseInt(tmpBean.htmlElement.style.left, 10) + deltaWidth) + 'px';
        tmpBean.htmlElement.style.top = (parseInt(tmpBean.htmlElement.style.top, 10) + deltaHeight) + 'px';
      } else if (tmpBean.htmlElement.usage == 'DD') {
        //Move the size change lower marker according to the movement amount.
        // Do not move left.Only the width wil increase or decrease.
        tmpBean.htmlElement.style.width = (parseInt(tmpBean.htmlElement.style.width, 10) + deltaWidth) + 'px';
        tmpBean.htmlElement.style.top = (parseInt(tmpBean.htmlElement.style.top, 10) + deltaHeight) + 'px';
      } else if (tmpBean.htmlElement.usage == 'RR') {
        //Move the size change right marker according to the movement amount
        //Do not move top,Only the height will increase or decrease.
        tmpBean.htmlElement.style.left = (parseInt(tmpBean.htmlElement.style.left, 10) + deltaWidth) + 'px';
        tmpBean.htmlElement.style.height = (parseInt(tmpBean.htmlElement.style.height, 10) + deltaHeight) + 'px';
      }

    }
  }
};


CFrame.prototype.canvasMouseDown = function(e) {
  var me = this;

  //Mousedown processing of CFrame.canvas

  //'This' in this method indicates 'Cwindow.canvas.canvasElement'.
  if (this.parentCFrame.parentCanvas.mouseDownSource == null) {
    this.parentCFrame.parentCanvas.mouseDownSource = 'childcanvas';
  }


};
CFrame.prototype.mouseUp = function(e) {
  this.canvas.mouseUp(e);
};

CFrame.prototype.close = function(e) {

  var me = this;
  //Close processing of CFrame from CloseButton


  var parentCanvas = this.parentObject.parentCanvas;
  var cframeObj = this.parentObject;

  console.log('CFrame#close "' + cframeObj.title + '(@' + cframeObj.getName() + ')' + '" @' + cframeObj.windowId);

  var windowId = cframeObj.id;
  cframeObj.closeInternally(e, parentCanvas, windowId);


};

CFrame.prototype.closeFrame = function(e) {


  //Close processing of CFrame
  var me = this;

  console.log('CFrame#closeFrame "' + me.title + '(' + me.getName() + ')' + '" @' + me.windowId);

  var parentCanvas = this.parentCanvas;
  me.closeInternally(e, parentCanvas, me.windowId);


};

CFrame.prototype.closeInternally = function(e, parentCanvas, windowId) {
  var me = this;

  if (!parentCanvas) {
    console.error('Window(' + windowId + ') may have been closed');
    return;
  }
  parentCanvas.removeBean(windowId);


  //added for modal window
  if (me.modalBackgroundWindowId) {
    parentCanvas.removeBean(me.modalBackgroundWindowId);
    me.modalBackgroundWindowId = null;
  }

  if (me.onCloseFrameListener) {
    me.onCloseFrameListener(me);
  }
};

CFrame.prototype.setOnCloseFrameListener = function(listener) {
  var me = this;
  me.onCloseFrameListener = listener;

};

CFrame.prototype.contextMenu = function() {
  //If you issue the right-click menu in the window, set the source to CFrame.
  var contextMenuSource = 'CFrame';
  return false;
};


CFrame.prototype.setTitleBarTextColor = function(str) {
  var me = this;
  me.titleBar.style.color = str;
};

/**
 * Set window position with anchor
 * @param {number} x
 * @param {number} y
 * @param {string} anchor anchor means the position of the window with respect to which the position is specified.<br>
 *   The following values can be specified for the anchor
 LEFT_TOP
 CENTER_TOP
 RIGHT_TOP
 LEFT_CENTER
 CENTER_CENTER
 RIGHT_CENTER
 LEFT_BOTTOM
 CENTER_BOTTOM
 RIGHT_BOTTOM
 * @returns {CFrame}
 */
CFrame.prototype.setPosition = function(x, y, anchor) {
  var me = this;

  var frameWidth = me.getWidth();
  var frameHeight = me.getHeight();

  me._setPositionInternally(x, y, anchor, frameWidth, frameHeight);

  return me;
};
CFrame.prototype._setPositionInternally = function(x, y, anchor, frameWidth, frameHeight) {
  var me = this;

  if (anchor) {
    me.anchor = anchor;
  }

  if (!anchor || CALIGN.LEFT_TOP == anchor) {
    me.htmlElement.style.left = x + 'px';
    me.htmlElement.style.top = y + 'px';
  } else if (CALIGN.HCENTER_TOP == anchor) {
    me.htmlElement.style.left = (-frameWidth / 2 + x) + 'px';
    me.htmlElement.style.top = y + 'px';
  } else if (CALIGN.RIGHT_TOP == anchor) {
    me.htmlElement.style.left = (-frameWidth + x) + 'px';
    me.htmlElement.style.top = y + 'px';
  } else if (CALIGN.LEFT_VCENTER == anchor) {
    me.htmlElement.style.left = x + 'px';
    me.htmlElement.style.top = (-frameHeight / 2 + y) + 'px';
  } else if (CALIGN.HCENTER_VCENTER == anchor) {
    me.htmlElement.style.left = (-frameWidth / 2 + x) + 'px';
    me.htmlElement.style.top = (-frameHeight / 2 + y) + 'px';
  } else if (CALIGN.RIGHT_VCENTER == anchor) {
    me.htmlElement.style.left = (-frameWidth + x) + 'px';
    me.htmlElement.style.top = (-frameHeight / 2 + y) + 'px';
  } else if (CALIGN.LEFT_BOTTOM == anchor) {
    me.htmlElement.style.left = x + 'px';
    me.htmlElement.style.top = (-frameHeight + y) + 'px';
  } else if (CALIGN.HCENTER_BOTTOM == anchor) {
    me.htmlElement.style.left = (-frameWidth / 2 + x) + 'px';
    me.htmlElement.style.top = (-frameHeight + y) + 'px';
  } else if (CALIGN.RIGHT_BOTTOM == anchor) {
    me.htmlElement.style.left = (-frameWidth + x) + 'px';
    me.htmlElement.style.top = (-frameHeight + y) + 'px';
  }
};

/**
 * Returns relative position with anchor
 * @returns {{x: *, y: *, anchor: *}}
 */
CFrame.prototype.getPosition = function() {
  var me = this;
  var frameWidth = me.getWidth();
  var frameHeight = me.getHeight();
  var x;
  var y;
  var anchor = me.anchor;
  if (!anchor || CALIGN.LEFT_TOP == anchor) {
    x = parseInt(me.htmlElement.style.left, 10);
    y = parseInt(me.htmlElement.style.top, 10);
  } else if (CALIGN.HCENTER_TOP == anchor) {
    x = parseInt(me.htmlElement.style.left, 10) + frameWidth / 2;
    y = parseInt(me.htmlElement.style.top, 10);
  } else if (CALIGN.RIGHT_TOP == anchor) {
    x = parseInt(me.htmlElement.style.left, 10) + frameWidth;
    y = parseInt(me.htmlElement.style.top, 10);
  } else if (CALIGN.LEFT_VCENTER == anchor) {
    x = parseInt(me.htmlElement.style.left, 10);
    y = parseInt(me.htmlElement.style.top, 10) + frameHeight / 2;
  } else if (CALIGN.HCENTER_VCENTER == anchor) {
    x = parseInt(me.htmlElement.style.left, 10) + frameWidth / 2;
    y = parseInt(me.htmlElement.style.top, 10) + frameHeight / 2;
  } else if (CALIGN.RIGHT_VCENTER == anchor) {
    x = parseInt(me.htmlElement.style.left, 10) + frameWidth;
    y = parseInt(me.htmlElement.style.top, 10) + frameHeight / 2;
  } else if (CALIGN.LEFT_BOTTOM == anchor) {
    x = parseInt(me.htmlElement.style.left, 10);
    y = parseInt(me.htmlElement.style.top, 10) + frameHeight;
  } else if (CALIGN.HCENTER_BOTTOM == anchor) {
    x = parseInt(me.htmlElement.style.left, 10) + frameWidth / 2;
    y = parseInt(me.htmlElement.style.top, 10) + frameHeight;
  } else if (CALIGN.RIGHT_BOTTOM == anchor) {
    x = parseInt(me.htmlElement.style.left, 10) + frameWidth;
    y = parseInt(me.htmlElement.style.top, 10) + frameHeight;
  }
  return { x: x, y: y, anchor: anchor };
};

CFrame.prototype.getLeft = function() {
  var me = this;
  return parseInt(me.htmlElement.style.left, 10);
};


CFrame.prototype.getTop = function() {
  var me = this;
  return parseInt(me.htmlElement.style.top, 10);
};
CFrame.prototype.getWidth = function() {
  var me = this;
  return parseInt(me.htmlElement.style.width, 10);
};
CFrame.prototype.getHeight = function() {
  var me = this;
  return parseInt(me.htmlElement.style.height, 10);
};

CFrame.prototype.getSize = function() {
  var me = this;
  return { width: me.getWidth(), height: me.getHeight() };
};

CFrame.prototype.setSize = function(width, height, force) {
  var me = this;

  var byUser = true;

  if (force) {
    byUser = false;
  }


  //call CIFrame#resize instead of CFrame#resize
  me.resize(0, 0, width - me.getWidth(), height - me.getHeight(), byUser);
  return me;
};

CFrame.prototype.getWindowId = function() {
  var me = this;
  return me.windowId;
};

CFrame.prototype.getName = function() {
  var me = this;
  return me.property.name;
};

CFrame.prototype.setName = function(name) {
  var me = this;
  me.property.name = name;
};
/**
 * end of CFrame class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


inherit(CIfFrame, CFrame);

/**
 * CIfFrame class
 * Extension class with contents frame of CFrame as iframe
 * @param windowId
 * @param appearance
 * @constructor
 */
function CIfFrame(windowId, left, top, width, height, appearance) {


  var wleft = left;
  var wtop = top;
  var wwidth = width;
  var wheight = height;
  var zindex = appearance.zindex;
  var wborderwidth = null;


  var me = this;

  this.jsFrame = null;
  this.control = null;

  this.minFrameWidth = 128;
  this.minWindowHeight = 32;

  this.eventListenerHelper = new EventListenerHelper();

  /**
   * If this value is true, the focus will move when tapping the iframe area,
   * but if the window do not have the focus, you can not click on the element in the iframe.
   */
  this.overrayTransparentScreenEnabled = false;

  /**
   *  Only in the case of resizing a transparent screen can be displayed on the iframe
   *  and the size can be adjusted smoothly.
   *  true is recommended.
   */
  //Change history
  //20181226
  //Changed to false.
  // So it becomes necessary to click twice to react when you call the #setSize,I changed the value to false.
  //20181231
  //I found the way that iframe will be changed the size smoothly.so the final answer is true.
  this.overrayTransparentScreenOnResize = true;

  this.titleBarColorFocused = appearance.titleBarColorFocused;

  this.titleBarColorDefault = appearance.titleBarColorDefault;

  this.titleBarCaptionColorDefault = appearance.titleBarCaptionColorDefault;
  this.titleBarCaptionColorFocused = appearance.titleBarCaptionColorFocused;

  //call super constructor
  CIfFrame.superConstructor.call(me, windowId, wleft, wtop, wwidth, wheight, zindex, wborderwidth, appearance);

  //border color
  me.frameBorderColorDefault = appearance.frameBorderColorDefault;
  me.frameBorderColorFocused = appearance.frameBorderColorFocused;

  //border width
  me.frameBorderWidthDefault = appearance.frameBorderWidthDefault;
  me.frameBorderWidthFocused = appearance.frameBorderWidthFocused;

  me.iframe = null;


  //Offset value for width adjustment of iframe
  me.ifDelta = 0;

  me.resizable = true;


  me.onMouseMoveOnIframe = null;
  me.onMouseUpOnIframe = null;

  me._hasFocus = false;

  me._hasFocusTime = 0;


  me.htmlElement.typeName = 'cifwindow';

  //name of iframe
  var exIframeName = 'riversun_' + windowId;


  me.dframe = document.createElement('div');


  me.iframe = document.createElement('iframe');


  me.iframe.name = exIframeName;

  me.iframe.id = exIframeName;

  me.iframe.frameBorder = '0';
  //me.iframe.scrolling = 'no';

  me.iframe.zIndex = -1;

  //Allow transparent of iframe background.
  me.iframe.allowTransparency = 'true';
  me.iframe.width = me.canvasNetWidth - me.ifDelta + 0;
  me.iframe.height = me.canvasNetHeight - me.ifDelta + 0;

  me.showTitleBar = appearance.showTitleBar;

  me.getFrameInnerBorderRadius = appearance.getFrameInnerBorderRadius;

  me.frameBorderRadius = appearance.frameBorderRadius;


  me.adjustFrameBorderRadius();

  me.useIframe = false;


  me.canvas.canvasElement.appendChild(me.iframe);

  me.canvas.canvasElement.appendChild(me.dframe);


  this.setUseIframe = function(useIframe) {
    me.useIframe = useIframe;
    me.iframe.style.visibility = 'hidden';
    me.iframe.style.position = 'absolute';
    me.iframe.style.left = '0px';
    me.iframe.style.top = '0px';
    me.iframe.style.width = '100%';
    me.iframe.style.height = '100%';

    me.dframe.style.visibility = 'hidden';
    me.dframe.style.position = 'absolute';
    me.dframe.style.left = '0px';
    me.dframe.style.boxSizing = 'content-box';

    me.dframe.style.top = '0px';
    me.dframe.style.width = '100%';
    me.dframe.style.height = '100%';
    //me.dframe.style.borderStyle="solid";
    me.dframe.style.backgroundColor = 'white';

    if (useIframe) {
      me.iframe.style.visibility = 'visible';
      me.dframe.style.visibility = 'hidden';
    } else {
      me.iframe.style.visibility = 'hidden';
      me.dframe.style.visibility = 'visible';
    }
  };

  me.setUseIframe(appearance.useIframe);

  // If it is IE, set the canvasElement of the canvas which is the parent of the iframe to transparent.

  if (me.overrayTransparentScreenEnabled || me.overrayTransparentScreenOnResize) {
    //Create a transparent screen.
    me.transparence = document.createElement('span');
    // me.transparence.style.backgroundImage = 'url(img/img_baron_tp.gif)';

    me.transparence.style.position = 'absolute';
    me.transparence.style.left = '0px';
    me.transparence.style.top = '0px';

    //Transparent screen is 0px when creating window
    me.transparence.style.width = '0px';
    me.transparence.style.height = '0px';

    me.transparence.style.zIndex = 4;
    me.transparence.style.borderWidth = '0px';
    me.transparence.style.borderColor = '#ff00ee';
    me.transparence.style.borderStyle = 'none';
    me.transparence.style.cursor = 'default';

    me.transparence.style.pointerEvents = 'none';
    me.canvas.canvasElement.style.backgroundColor = appearance.frameBackgroundColor;


    me.canvas.canvasElement.appendChild(me.transparence);
  }

  me.eventEmitter = new EventEmitter();

  me.appearance = appearance;

}


CIfFrame.prototype.getFrameView = function() {
  var me = this;
  return me.dframe;
};

CIfFrame.prototype.getFrameAppearance = function() {
  var me = this;
  return me.appearance;
};

CIfFrame.prototype.setHTML = function(html) {
  var me = this;
  me.dframe.innerHTML = html;
};
CIfFrame.prototype.setFrameInFrame = function(enabled) {

  // Why i had to (bother to:) ) make a setFrameInFrame
  // The element specified at the top of the content of the parent window (for example, div element)
  // may NOT be able to get the resize event using addEventListener.
  // Therefore, when the resize event issued by jsFrame in the parent window occurs,
  // its custom attribute (WindowEventHelper.MATCH_PARENT_CHANGE_MARKER_ATTR) is attached
  // to the element at the top of the parent window content
  // and it is captured by the mutationObserver on the child window side.

  var me = this;

  var contentsEle = me.dframe ? me.dframe.firstChild : null;

  if (contentsEle) {
    // polyfill for #now
    if (!Date.now) {
      Date.now = function now() {
        return new Date().getTime();
      };
    }
    if (enabled) {
      me.eventEmitter.only('resize', 'fif-listener', function() {
        contentsEle.setAttribute(WindowEventHelper.MATCH_PARENT_CHANGE_MARKER_ATTR, Date.now());
      });
    } else {
      contentsEle.removeAttribute(WindowEventHelper.MATCH_PARENT_CHANGE_MARKER_ATTR);
      me.eventEmitter.only('resize', 'fif-listener', function() {
        // do nothing
      });
    }
  }
};
/**
 * Find DOM Element in the frame by querySelector<br>
 *  Examples<br>
 *      frame.$("#my_id_name");
 *      frame.$(".my_class_name");
 *      frame.$("div>img");
 *      frame.$("input[type='submit]");
 * @param {string} q selector query
 * @returns {Node}
 */
CIfFrame.prototype.$ = function(q) {
  var me = this;

  if (me.useIframe) {

    var docInIframe = me.iframe.contentWindow.document;
    return docInIframe.querySelector(q);

  } else {
    return me.dframe.querySelector(q);
  }
};

/**
 * Sets an event listener for the window itself or elements in the contents of the window.
 It is possible to register multiple listeners to the same event type.

 * @param {string} id
 If the "id" is prefixed with "#",
 an event listener can be set to a DOM element (eventTarget) identified by the id in the content.<br>
 This is the same behavior as the usual eventTarget#addEventListener.<br>
 <br>
 In addition to the DOM element in the content, the following special names are reserved for the "id"<br>
 "closeButton" ... close button.<br>
 "minimizeButton" ... Minimize Button<br>
 "zoomButton"...zoom button.<br>
 "restoreButton" ... the button that restores the window size.<br>
 "deminimizeButton" ... the button to return from the minimized state.<br>
 <br>
 You can also receive events such as window resizing, moving, and focusing.
 In this case, specify the following as "id"<br>
 "frame" or "window".<br>
 <br>
 You can specify a frameComponent name that is uniquely defined by addFrameComponent.
 (Generic buttons such as closeButton are one of the frame components.
 * @param {string} eventType The element in the content (HTML) of a window whose "id" starts with "#"
 * can be the same as the eventType(https://developer.mozilla.org/en-US/docs/Web/API/Event/type) used by the normal addEventListener.<br>
 <br>
 If the "id" is a frame or a window, the following can be used<br>
 "move"... When a window is moved, it fires.<br>
 "resize"... Fires when the window is resized.<br>
 "focus"... "focus" means got focus. It fires when the window is in focus.<br>
 "blur"... "blur" means lost focus.It fires when the window loses focus.<br>
 <br>
 * @param {function} callbackFunc
 */
CIfFrame.prototype.on = function(id, eventType, callbackFunc) {
  var me = this;
  var component = me.getFrameComponentElement(id);

  // if id indicates frame component like CTextButton,CImageButton
  if (component) {

    //Since we want to specify only one handler for frame components at the same time,
    // use eventListenerHelper instead of an event listener
    me.eventListenerHelper.addEventListener(component, eventType, function(e) {
      callbackFunc(me, e,
        {
          type: 'frameComponent',
          id: id,
          eventType: eventType,
          //child: childMenuEle
        });
    }, { listenerName: 'frame-component-listener' });
  }

  if (id === 'frame' || id === 'window') {

    if (eventType === 'move' && !me.eventEmitter.hasListenerFuncs('move')) {
      me.setOnMoveListener(function(e) {
        //refCIfFrame.eventEmitter.emit('resize',);
        me.eventEmitter.emit('move', me._getCurrentSizePos());
      });
    }


    me.eventEmitter.on(eventType, callbackFunc);
  }

  // DOM element in iframe or DOM element on dframe
  var domElement = me.$(id);

  if (domElement) {
    if (me.eventListenerHelper.hasEventListener(domElement, eventType, 'frame-dom-listener')) {
      me.eventListenerHelper.removeEventListener(domElement, eventType, null, { listenerName: 'frame-dom-listener' });
    }
    me.eventListenerHelper.addEventListener(domElement, eventType, function(e) {
      callbackFunc(me, e, {
        type: 'dom',
        id: id,
        eventType: eventType
      });
    }, { listenerName: 'frame-dom-listener' });
  }

  // Search DOM element on frameComponent
  if (!domElement) {

    var domElementOnCanvasElement = me.canvas.canvasElement.querySelector(id);
    if (domElementOnCanvasElement) {
      domElementOnCanvasElement.addEventListener(eventType, function(e) {
        callbackFunc(me, e, {
          type: 'dom',
          id: id,
          eventType: eventType
        });
      });
    }
  }
};


CIfFrame.prototype.adjustFrameBorderRadius = function() {
  var me = this;

  if (parseInt(me.frameBorderRadius, 10) > 0) {

    var borderData = me.getFrameInnerBorderRadius(me, me._hasFocus);
    var frameAppearance = borderData.frameAppearance;
    var innerBorderRadius = borderData.innerBorderRadius;
    var titleBarHeight = parseInt(frameAppearance.titleBarHeight, 10);

    if (me.showTitleBar) {

      //title bar exists
      me.canvas.canvasElement.style.borderBottomRightRadius = innerBorderRadius;
      me.canvas.canvasElement.style.borderBottomLeftRadius = innerBorderRadius;
      me.iframe.style.borderBottomRightRadius = innerBorderRadius;
      me.iframe.style.borderBottomLeftRadius = innerBorderRadius;

      me.titleBar.style.borderTopLeftRadius = innerBorderRadius;
      me.titleBar.style.borderTopRightRadius = innerBorderRadius;


    } else {

      //title bar not exits
      me.canvas.canvasElement.style.borderRadius = innerBorderRadius;
      me.iframe.style.borderRadius = innerBorderRadius;

    }

    if (me.dframe) {
      if (titleBarHeight === 0) {
        if (!me.dframe.style.borderTopRightRadius) {
          me.dframe.style.borderTopRightRadius = innerBorderRadius;
        }
        if (!me.dframe.style.borderTopLeftRadius) {
          me.dframe.style.borderTopLeftRadius = innerBorderRadius;
        }
      }
      me.dframe.style.borderBottomRightRadius = innerBorderRadius;
      me.dframe.style.borderBottomLeftRadius = innerBorderRadius;
    }


  }
};

CIfFrame.prototype.handleReleasingFocus = function(e) {
  var me = this;

  var focused = me._hasFocus;

  me._hasFocus = false;

  //update style class
  me.titleBar.className = me.titleBarClassNameDefault;

  if (me.titleBarColorDefault) {
    me.titleBar.style.background = me.titleBarColorDefault;
  }
  me.titleBar.style.color = me.titleBarCaptionColorDefault;

  //border color
  if (me.frameBorderColorDefault) {
    me.htmlElement.style.borderColor = me.frameBorderColorDefault;
  }

  //border width
  if (me.frameBorderWidthDefault) {
    me.htmlElement.style.borderWidth = me.frameBorderWidthDefault;
    me.adjustFrameBorderRadius();
  }

  if (me.htmlElement.typeName == 'cifwindow') {
    if (me.overrayTransparentScreenEnabled) {
      me.transparence.style.width = parseInt(me.iframe.width, 10) + 'px';
      me.transparence.style.height = parseInt(me.iframe.height, 10) + 'px';
    }
  }

  //handling for child frameComponents
  for (var frameComponentId in me.frameComponentMap) {
    var frameComponent = me.frameComponentMap[frameComponentId];
    frameComponent.handleReleasingFocus();
  }

  //border bottom
  if (me.titleBarBorderBottomDefault) {
    me.titleBar.style.borderBottom = me.titleBarBorderBottomDefault;
  }

  if (focused) {
    me.eventEmitter.emit('blur', { target: me });
  }


  return me;
};

CIfFrame.prototype.handleTakingFocus = function(e) {
  var me = this;
  var focused = me._hasFocus;
  me._hasFocus = true;
  me._hasFocus = Date.now();

  if (me.overrayTransparentScreenEnabled) {

    //close transparence screen
    me.transparence.style.width = '0px';
    me.transparence.style.height = '0px';

  }

  //update style class
  me.titleBar.className = me.titleBarClassNameFocused;

  if (me.titleBarColorFocused) {
    me.titleBar.style.background = me.titleBarColorFocused;
  }
  me.titleBar.style.color = me.titleBarCaptionColorFocused;


  //border color
  if (me.frameBorderColorFocused) {
    me.htmlElement.style.borderColor = me.frameBorderColorFocused;
  }

  //border width
  if (me.frameBorderWidthFocused) {
    me.htmlElement.style.borderWidth = me.frameBorderWidthFocused;
    me.adjustFrameBorderRadius();
  }

  //border bottom
  if (me.titleBarBorderBottomFocused) {
    me.titleBar.style.borderBottom = me.titleBarBorderBottomFocused;
  }

  //handling for child frameComponents
  for (var frameComponentId in me.frameComponentMap) {
    var frameComponent = me.frameComponentMap[frameComponentId];
    frameComponent.handleTakingFocus();
  }


  if (!focused) {
    me.eventEmitter.emit('focus', { target: me });
  }

  return me;
};


CFrame.prototype.show = function(model) {
  var me = this;
  //me.htmlElement.style.visibility = 'visible';
  me.htmlElement.style.display = 'flex';//hidden';

  if (model && model.requestFocus == false) {

  } else {
    me.requestFocus();
  }
  return me;
};


CFrame.prototype.showModal = function(onCloseListener) {
  var me = this;

  var appearance = new CFrameAppearance();
  appearance.showTitleBar = true;
  appearance.showCloseButton = false;
  appearance.frameBorderRadius = '0px';
  appearance.frameBorderStyle = 'none';
  appearance.frameBorderWidthDefault = '0px';
  appearance.frameBorderWidthFocused = '0px';
  appearance.frameBoxShadow = null;
  appearance.frameBackgroundColor = 'transparent';
  appearance.frameComponents = [];
  appearance.frameHeightAdjust = 0;
  appearance.titleBarHeight = '0px';
  appearance.titleBarBorderBottomFocused = null;
  appearance.titleBarCaptionLeftMargin = '0px';


  appearance.onInitialize = function() {
  };

  //added for modal window
  appearance.pullUpDisabled = true;

  var windowManager = me.parentCanvas;

  var modalBackgroundWindowId = DEF.CFRAME.MODAL_BACKGROUND_FRAME_ID_PREFIX + me.id;

  //create background window for preventing click background
  var modalBackgroundFrame = new CIfFrame(modalBackgroundWindowId, 0, 0, 1, 1, appearance);
  modalBackgroundFrame.setSize(window.innerWidth, window.innerHeight, true);
  modalBackgroundFrame.setResizable(false);

  window.addEventListener('resize', function() {
    modalBackgroundFrame.setSize(window.innerWidth, window.innerHeight, true);
  });


  //remember id of modal background frame
  me.modalBackgroundWindowId = modalBackgroundWindowId;

  // if (properties && properties.windowName) {
  //     frame.setName(properties.windowName);
  // }

  modalBackgroundFrame.hide();
  windowManager.addWindow(modalBackgroundFrame);


  modalBackgroundFrame.setTitle('').getFrameView().innerHTML = '<div class="jsframe-modal-window-background"></div>';
  modalBackgroundFrame.getFrameView().style.backgroundColor = 'rgba(0,0,0,0.0)';
  modalBackgroundFrame.show();

  me.show();

  if (onCloseListener) {
    me.setOnCloseFrameListener(onCloseListener);
  }
};
CFrame.prototype.getWindowManager = function() {
  var me = this;
  return me.parentCanvas;
}


CIfFrame.prototype.hide = function() {
  var me = this;
  //  me.htmlElement.style.visibility = 'hidden';
  me.htmlElement.style.display = 'none';//hidden';
  return me;
};

//Overriding CBeanFrame.prototype.onmouseDown
CIfFrame.prototype.onmouseDown = function(e) {

  var refHtmlElement = this;

  //Do not select it when dragging by the mouse.
  document.body.ondrag = function() {
    return false;
  };
  // document.body.onselectstart = function () {
  //     return false;
  // };


  //Override decorator with onmouseDown of parent class
  refHtmlElement.decorator = CFrame.prototype.onmouseDown;
  refHtmlElement.decorator(e);

  //Deploy a transparent screen.
  // Since mouseDown is pointed to this.htmlElement.onmousedown in the CBean class,
  // this 'this' will indicate this.htmlElement.
  //In other words,
  //if you want to refer 'CIfFrame',you need to specify 'this.parent.'
  //See CBeanFrame class, you can find 'this.htmlElement.parent = this'
  var refCIfFrame = refHtmlElement.parent;


  var refCWindowManager = refHtmlElement.parentCanvas;

  //When somewhere window(CFrame,CIfFrame) fires 'mouseDown',
  // Close all transparency screens so that the mouse cursor can pass over any iFrame
  for (var windowId in refCWindowManager.beanList) {
    var objCIfFrame = refCWindowManager.beanList[windowId];
    if (windowId == refCIfFrame.getWindowId()) {
      //skip
    } else {
      objCIfFrame.handleReleasingFocus();
    }
  }

  refCIfFrame.handleTakingFocus();

};

CIfFrame.prototype.mouseUp = function(e) {
  var refCIfFrame = this;


  if (refCIfFrame.overrayTransparentScreenEnabled || refCIfFrame.overrayTransparentScreenOnResize) {
    if (refCIfFrame.parentCanvas.onTopObject == refCIfFrame) {
      //Minimize the window at the front.
      refCIfFrame.transparence.style.width = '0px';
      refCIfFrame.transparence.style.height = '0px';
    } else {
      //The window which is not the at the front expands the screen so that it can respond to clicks.

      if (refCIfFrame.overrayTransparentScreenEnabled) {
        refCIfFrame.transparence.style.width = parseInt(refCIfFrame.iframe.width) + 'px';
        refCIfFrame.transparence.style.height = parseInt(refCIfFrame.iframe.height) + 'px';
      }
    }
  }

  refCIfFrame.decorator = CFrame.prototype.mouseUp;
  refCIfFrame.decorator(e);


  //Cancel selecting "Do not select when dragging mouse while releasing button" is canceled
  document.body.ondrag = null;
  document.body.onselectstart = null;

  //Disable when stopping moving.(Enable transparent window only when moving.)
  //This will work smoothly even with iframe content
  refCIfFrame.transparence.style.pointerEvents = 'none';
};

CIfFrame.prototype.setMinFrameSize = function(width, height) {
  var me = this;
  me.minFrameWidth = width;
  me.minWindowHeight = height;
};

CIfFrame.prototype.resize = function(deltaLeft, deltaTop, deltaWidth, deltaHeight, byUser) {


  var refCIfFrame = this;

  if (!refCIfFrame.resizable && byUser) {
    return null;
  }

  var prevSize = refCIfFrame.getSize();


  //Resize processing should be overridden directly rather than adopting a decorator pattern because it has better performance.
  var tmpLeft = parseInt(refCIfFrame.htmlElement.style.left, 10);
  var tmpTop = parseInt(refCIfFrame.htmlElement.style.top, 10);
  var tmpWidth = parseInt(refCIfFrame.htmlElement.style.width, 10);
  var tmpHeight = parseInt(refCIfFrame.htmlElement.style.height, 10);

  //Important logic to handle the minimum of Window well
  if (byUser && (tmpWidth + deltaWidth < refCIfFrame.minFrameWidth & deltaWidth < 0)) {
    //Minimum adjustment of width
    refCIfFrame.htmlElement.style.width = tmpWidth + 'px';
    deltaWidth = 0;
  }

  if (byUser && (tmpHeight + deltaHeight < refCIfFrame.minWindowHeight & deltaHeight < 0)) {
    //Minimum adjustment of height
    refCIfFrame.htmlElement.style.height = tmpHeight + 'px';
    deltaHeight = 0;
  }
  refCIfFrame.htmlElement.style.left = (tmpLeft + deltaLeft) + 'px';
  refCIfFrame.htmlElement.style.top = (tmpTop + deltaTop) + 'px';
  refCIfFrame.htmlElement.style.width = (tmpWidth + deltaWidth) + 'px';
  refCIfFrame.htmlElement.style.height = (tmpHeight + deltaHeight) + 'px';


  var tmpCanvasWidth = parseInt(refCIfFrame.canvas.canvasElement.style.width, 10);
  var tmpCanvasHeight = parseInt(refCIfFrame.canvas.canvasElement.style.height, 10);

  //Since canvasElement is a (0, 0) relative coordinate with respect
  // to the parent element, it is not necessary to change left and top.
  refCIfFrame.canvas.canvasElement.style.width = (tmpCanvasWidth + deltaWidth) + 'px';
  refCIfFrame.canvas.canvasElement.style.height = (tmpCanvasHeight + deltaHeight) + 'px';

  //Change the size of the title bar. TitleAdjustWidth etc.
  // The reason why you do not have to use titleAdjustWidth is
  // because these scaling are done with differences (deltaX, deltaY).
  //Therefore, if you adjust with the titleAdjustWidth
  // as the initial value, the other will stretch relative.
  refCIfFrame.titleBar.style.width = (tmpCanvasWidth - refCIfFrame.ifDelta + deltaWidth + 0) + 'px';

  //Image resizing for iframe that is the child element of canvas
  refCIfFrame.iframe.width = (tmpCanvasWidth - refCIfFrame.ifDelta + deltaWidth + 0) + 'px';
  refCIfFrame.iframe.height = (tmpCanvasHeight - refCIfFrame.ifDelta + deltaHeight + refCIfFrame.frameHeightAdjust) + 'px';

  if (refCIfFrame.overrayTransparentScreenEnabled || refCIfFrame.overrayTransparentScreenOnResize) {
    //Deploy a transparent screen.
    refCIfFrame.transparence.style.width = parseInt(refCIfFrame.iframe.width) + 'px';
    refCIfFrame.transparence.style.height = parseInt(refCIfFrame.iframe.height) + 'px';
  }

  //move frameComponent(like closeButton) corresponding to moving window edge for resize
  for (var frameComponentId in refCIfFrame.frameComponentMap) {
    var frameComponent = refCIfFrame.frameComponentMap[frameComponentId];
    //update alignment of frameComponent corresponding to moving window edge for resize
    frameComponent.updateAlign();
  }


  for (var beanName in refCIfFrame.canvas.beanList) {
    var tmpBean = refCIfFrame.canvas.beanList[beanName];

    if (tmpBean.htmlElement.typeName == 'cmarkerwindow') {

      if (tmpBean.htmlElement.usage == 'RD') {
        tmpBean.htmlElement.style.left = (parseInt(tmpBean.htmlElement.style.left) + deltaWidth) + 'px';
        tmpBean.htmlElement.style.top = (parseInt(tmpBean.htmlElement.style.top) + deltaHeight) + 'px';
      } else if (tmpBean.htmlElement.usage == 'DD') {
        tmpBean.htmlElement.style.width = (parseInt(tmpBean.htmlElement.style.width) + deltaWidth) + 'px';
        tmpBean.htmlElement.style.top = (parseInt(tmpBean.htmlElement.style.top) + deltaHeight) + 'px';
      } else if (tmpBean.htmlElement.usage == 'RR') {
        tmpBean.htmlElement.style.left = (parseInt(tmpBean.htmlElement.style.left) + deltaWidth) + 'px';
        tmpBean.htmlElement.style.height = (parseInt(tmpBean.htmlElement.style.height) + deltaHeight) + 'px';
      }
    }
  }

  var crrSize = refCIfFrame.getSize();
  if (prevSize.width !== crrSize.width || prevSize.height !== crrSize.height) {
    refCIfFrame.eventEmitter.emit('resize', refCIfFrame._getCurrentSizePos());
  }


};//resize

CIfFrame.prototype._getCurrentSizePos = function() {
  var me = this;
  var crrSize = me.getSize();
  var crrPos = me.getPosition();
  return { target: me, pos: crrPos, size: crrSize };
};

CIfFrame.prototype.resizeDirect = function(width, height, byUser) {

  var refCIfFrame = this;


  if (!refCIfFrame.resizable && byUser) {
    return null;
  }

  refCIfFrame.htmlElement.style.width = width + 'px';
  refCIfFrame.htmlElement.style.height = height + 'px';


  var tmpCanvasWidth = parseInt(refCIfFrame.canvas.canvasElement.style.width);
  var tmpCanvasHeight = parseInt(refCIfFrame.canvas.canvasElement.style.height);

  //Since canvasElement is a (0, 0) relative coordinate with respect
  // to the parent element, it is not necessary to change left and top.
  refCIfFrame.canvas.canvasElement.style.width = width + 'px';
  refCIfFrame.canvas.canvasElement.style.height = (height - refCIfFrame.titleBar.style.height) + 'px';

  //Change the size of the title bar. TitleAdjustWidth etc.
  // The reason why you do not have to use titleAdjustWidth is
  // because these scaling are done with differences (deltaX, deltaY).
  //Therefore, if you adjust with the titleAdjustWidth
  // as the initial value, the other will stretch relative.
  refCIfFrame.titleBar.style.width = (width - refCIfFrame.ifDelta) + 'px';

  //Image resizing for iframe that is the child element of canvas
  refCIfFrame.iframe.width = width - refCIfFrame.ifDelta + 'px';
  refCIfFrame.iframe.height = height - refCIfFrame.ifDelta + refCIfFrame.frameHeightAdjust + 'px';


  if (refCIfFrame.overrayTransparentScreenEnabled || refCIfFrame.overrayTransparentScreenOnResize) {
    //Deploy a transparent screen.
    refCIfFrame.transparence.style.width = parseInt(refCIfFrame.iframe.width) + 'px';
    refCIfFrame.transparence.style.height = parseInt(refCIfFrame.iframe.height) + 'px';
  }

  //move frameComponent(like closeButton) corresponding to moving window edge for resize
  for (var frameComponentId in refCIfFrame.frameComponentMap) {
    var frameComponent = refCIfFrame.frameComponentMap[frameComponentId];
    //update alignment of frameComponent corresponding to moving window edge for resize
    frameComponent.updateAlign();
  }


  for (var beanName in refCIfFrame.canvas.beanList) {
    var tmpBean = refCIfFrame.canvas.beanList[beanName];

    if (tmpBean.htmlElement.typeName == 'cmarkerwindow') {

      if (tmpBean.htmlElement.usage == 'RD') {
        tmpBean.htmlElement.style.left = width + 'px';// parseInt(tmpBean.htmlElement.style.left) + deltaWidth + 'px';
        tmpBean.htmlElement.style.top = height + 'px';//parseInt(tmpBean.htmlElement.style.top) + deltaHeight + 'px';
      } else if (tmpBean.htmlElement.usage == 'DD') {
        tmpBean.htmlElement.style.width = width + 'px';
        tmpBean.htmlElement.style.top = height + 'px';//heightparseInt(tmpBean.htmlElement.style.top) + deltaHeight + 'px';
      } else if (tmpBean.htmlElement.usage == 'RR') {
        tmpBean.htmlElement.style.left = width + 'px';//+parseInt(tmpBean.htmlElement.style.left) + deltaWidth + 'px';
        tmpBean.htmlElement.style.height = height + 'px';
      }
    }
  }
};//resize

/**
 * Focus on this frame
 */
CIfFrame.prototype.requestFocus = function() {


  var me = this;

  var beanList = me.parentCanvas.beanList;

  for (var windowId in beanList) {

    var tmpIfWindow = beanList[windowId];

    //If it's my own window, minimize the transparent screen and change the color of the title bar.
    if (windowId == me.getWindowId()) {

      //if this frame is a target frame
      tmpIfWindow.handleTakingFocus();
    } else {

      //if this frame is NOT a target frame
      tmpIfWindow.handleReleasingFocus();
    }
  }

  me.parentCanvas.pullUp(me.id);

};

/**
 * URL for iframe
 * @param url
 */
CIfFrame.prototype.setUrl = function(url) {

  var me = this;

  return new Promise(function(resolve, reject) {


    if (url) {
      me.setUseIframe(true);
    } else {
      me.setUseIframe(false);
      resolve();
    }


    me.iframe.src = url;

    me.iframe.onload = function() {
      var funcOnMouseMove = function(e) {

        var clientX = e.pageX;
        var clientY = e.pageY;

        if (TOUCH_ENABLED) {
          if (e.type === 'touchmove') {
            var changedTouches = e.changedTouches;
            if (TOUCH_MOVE_ONLY_WITH_ONE_FINGER) {
              var touches = e.touches;
              if (touches.length === 1) {
                clientX = changedTouches[0].pageX;
                clientY = changedTouches[0].pageY;
              } else {
                return true;
              }
            } else {
              clientX = changedTouches[0].pageX;
              clientY = changedTouches[0].pageY;
            }
          }
        }
        var frameLeft = me.getLeft();
        var frameTop = me.getTop();
        var eventFromIframe = document.createEvent('MouseEvents');
        // Processing to make it look like mouse move even if you are moving by touch
        eventFromIframe.initMouseEvent('mousemove', true, false, window, e.detail, e.screenX, e.screenY, (clientX + frameLeft), (clientY + frameTop),
          e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, null);

        //smooth dragging during iframe mode
        me.parentCanvas.windowMouseMove(eventFromIframe);

        if (me.onMouseMoveOnIframe) {
          me.onMouseMoveOnIframe(eventFromIframe);
        }
      };
      me.iframe.contentWindow.document.onmousemove = funcOnMouseMove;
      me.iframe.contentWindow.document.ontouchmove = funcOnMouseMove;


      //mouse up
      var funcOnMouseUp = function(e) {

        var clientX = e.pageX;
        var clientY = e.pageY;

        if (TOUCH_ENABLED) {
          if (e.type === 'touchend') {
            var changedTouches = e.changedTouches;
            clientX = changedTouches[0].pageX;
            clientY = changedTouches[0].pageY;
          }
        }
        var frameLeft = me.getLeft();
        var frameTop = me.getTop();
        var eventFromIframe = document.createEvent('MouseEvents');
        // Processing to make it look like mouse up even if you mouseup by touch
        eventFromIframe.initMouseEvent('mouseup', true, false, window, e.detail, e.screenX, e.screenY, (clientX + frameLeft), (clientY + frameTop),
          e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, null);

        //smooth dragging during iframe mode
        me.parentCanvas.windowMouseUp(eventFromIframe);

        if (me.onMouseUpOnIframe) {
          me.onMouseUpOnIframe(eventFromIframe);
        }
      };
      me.iframe.contentWindow.document.onmouseup = funcOnMouseUp;
      me.iframe.contentWindow.document.ontouchend = funcOnMouseUp;

      resolve(me, me.iframe.contentWindow.document);
    };
  });
};


/**
 * Returns DOM-document of iframe
 * @returns {*|HTMLDocument}
 */
CIfFrame.prototype.getIfDocument = function() {
  var me = this;
  return me.iframe.contentWindow.document;
};


CIfFrame.prototype.setScrolling = function(str) {
  var me = this;
  me.iframe.scrolling = str;
};

CIfFrame.prototype.getScrolling = function(str) {
  var me = this;
  return me.iframe.scrolling;
};


CIfFrame.prototype.setResizable = function(enabled) {
  var me = this;
  me.resizable = enabled;
  me.enableMarkers(enabled);
  return me;
};


CIfFrame.prototype.setControl = function(model) {
  var me = this;

  if (model) {
    model.frame = me;
    me.control = me.jsFrame.createWindowEventHelper(model);
    me.control.setupDefaultEvents();
  }

};

/**
 * end of CIFrame class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


inherit(CWindowManager, CCanvas);

/**
 * CWindowManager class
 * <p>
 * A canvas class that displays multiple frames. Handle events on the window to coordinate multiple windows<br>
 *
 * @param parentElement
 * @param canvasId
 * @param left
 * @param top
 * @param width
 * @param height
 * @constructor
 */
function CWindowManager(parentElement, canvasId, left, top, width, height) {
  CWindowManager.superConstructor.call(this, parentElement, canvasId, left, top, width, height);
  var me = this;
  // document.body.addEventListener('click', function(evt) {
  document.addEventListener('click', function(evt) {
    for (var windowId in me.beanList) {
      var beanFrame = me.beanList[windowId];
      beanFrame.onBodyClicked(evt);
    }
  });

}

CWindowManager.prototype.getWindow = function(windowId) {
  var me = this;
  return me.beanList[windowId];
};

//Wrapping the 'addBean' of the parent class
CWindowManager.prototype.addWindow = function(window) {
  var me = this;

  var windowId = window.getWindowId();
  var name = window.getName();
  me.beanIdName[windowId] = name;
  me.beanNameId[name] = windowId;

  me.addBean(window);
};

//if contains window named specified name
CWindowManager.prototype.containsWindowName = function(name) {
  var me = this;


  var windowId = me.beanNameId[name];

  if (windowId) {
    return true;
  }
  return false;
};

CWindowManager.prototype.getWindowByName = function(name) {
  var me = this;
  var windowId = me.beanNameId[name];

  if (windowId) {
    return me.getWindow(windowId);
  } else {
    return null;
  }
};

//Wrapping the 'mouseMove' method of the parent class
CWindowManager.prototype.windowMouseMove = function(e) {

  var me = this;
  if (me.currentObject == null) {
    return null;
  }

  var childWindowMoved = false;

  //Loop processing of each CWindow held by CWindowManager
  var beanList = me.beanList;

  for (var windowId in beanList) {

    var targetWindow = beanList[windowId];


    //Since this 'mouseMove' is canvas of CWindow's 'mouseMove',so do move CBeanFrames in the canvas.
    var eventData = targetWindow.canvas.mouseMove(e);

    //Whether any one of the beans in the Canvas has moved or not.
    //Yes.(When it moves), eventData is set.
    //NO. If it does not move it is set to null.
    childWindowMoved = childWindowMoved | (eventData != null);
    if (eventData != null) {

      //If it is the marker for resizing
      if (eventData.targetTypeName == 'cmarkerwindow') {

        var targetObject = eventData.targetObject;

        //Enable transparent window only when moving.
        //This will work smoothly even with iframe content
        targetWindow.transparence.style.pointerEvents = 'auto';

        if (targetObject.usage == 'RD') {
          targetWindow.resize(0, 0, eventData.deltaX, eventData.deltaY, true);
        } else if (targetObject.usage == 'DD') {
          targetWindow.resize(0, 0, 0, eventData.deltaY, true);
        } else if (targetObject.usage == 'RR') {
          targetWindow.resize(0, 0, eventData.deltaX, 0, true);
        }

      }
    }
  }

  //If any one of the beans in the Canvas has moved.Do not do 'Cwindow's mouseMove'
  if (!childWindowMoved && this.mouseDownSource != 'childcanvas') {

    //Moving logic for CWindow which is holded by CWindowManager as a child window.
    me.mouseMove(e);
  }

};

//Wrapping the method 'mouseUp' of the parent class
CWindowManager.prototype.windowMouseUp = function(e) {
  var me = this;

  //run 'mouseUp' of parent class
  me.mouseUp(e);

  var beanList = me.beanList;

  for (var windowId in beanList) {

    var objWindow = beanList[windowId];

    //run CWindow's 'mouseUp'(it's child window).
    objWindow.mouseUp(e);
  }

};

/**
 * (override CCanvas.removeBean)
 * @param windowId
 */
CWindowManager.prototype.removeBean = function(windowId) {


  var me = this;

  //Retrieve the target beanFrame
  var beanList = me.beanList;
  var targetBean = beanList[windowId];

  if (targetBean == null) {
    return;
  }

  var removeTargetBeanHasFocus = targetBean._hasFocus;


  //Remove bean's htmlElement from canvasElement
  me.canvasElement.removeChild(targetBean.htmlElement);

  //Delete the bean object in the associative array.
  delete beanList[windowId];


  var beanName = me.beanIdName[windowId];
  if (beanName) {
    //-if bean name exist
    delete me.beanIdName[windowId];
    delete me.beanNameId[beanName];
  }


  //focus on last focused window after removing
  var maxFocusTime = 0;
  var lastFocusedFrame = null;

  if (removeTargetBeanHasFocus) {
    for (var windowId in beanList) {
      var frame = beanList[windowId];

      //pullUpDisabled=true means that the frame is modal background window
      if (maxFocusTime <= frame._hasFocusTime && !frame.pullUpDisabled) {

        maxFocusTime = frame._hasFocusTime;

        lastFocusedFrame = frame;

      }
    }
    if (lastFocusedFrame) {
      lastFocusedFrame.requestFocus();
    }
  }

  targetBean.parentCanvas = null;

};
/**
 * end of CWindowManager class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

inherit(CMarkerWindow, CBeanFrame);

/**
 * CMarkerWindow class
 * @param windowId
 * @param left
 * @param top
 * @param width
 * @param height
 * @param zindex
 * @param usage
 * @constructor
 */
function CMarkerWindow(windowId, left, top, width, height, zindex, usage, color) {

  var me = this;

  CMarkerWindow.superConstructor.call(this, windowId, left, top, width, height, zindex, usage);

  me.htmlElement.typeName = 'cmarkerwindow';
  me.htmlElement.usage = usage;
  me.htmlElement.isRangeLimited = false;
  me.htmlElement.style.borderStyle = 'none';
  me.htmlElement.style.zIndex = 1;
  if (color) {
    me.htmlElement.style.background = color;
  }
  //me.pullUpDisabled = true;

  me.getWindowType = function() {
    return 'CMarkerWindow';
  };
}

/**
 * End of CMarkerWindow class
 * @constructor
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/**
 * FrameManager class
 * @constructor
 */
function JSFrame(model) {

  var me = this;

  var parentElement = null;

  // Frames will be fixed(Frames keep staying in the same place) even if the user scrolls the browser.
  me.isWindowManagerFixed = true;//default is true.

  //Initialization parameter check

  if (model && model.fixed == false) {
    me.isWindowManagerFixed = false;
  }

  if (model && model.parentElement) {
    parentElement = model.parentElement;
  }

  me.hAlign = 'left';
  me.vAlign = 'top';

  if (model && model.horizontalAlign) {
    me.hAlign = model.horizontalAlign;
  }

  if (model && model.verticalAlign) {
    me.vAlign = model.verticalAlign;
  }

  me.pullToRefresh = false;
  if (model && typeof model.pullToRefresh === 'boolean') {
    me.pullToRefresh = model.pullToRefresh;
  }

  me.touchActionManipulation = true;
  if (model && typeof model.touchActionManipulation === 'boolean') {
    me.touchActionManipulation = model.touchActionManipulation;
  }

  if (!parentElement) {
    if (me.isWindowManagerFixed) {
      var topParentDiv = document.createElement('div');
      topParentDiv.id = 'jsFrame_fixed_' + me.generateUUID();
      topParentDiv.setAttribute('style',
        'position:fixed;' + me.hAlign + ':0px;' + me.vAlign + ':0px;margin:0px;padding:0px;'
      );
      document.body.appendChild(topParentDiv);
      parentElement = topParentDiv;
    } else {
      var topParentDiv = document.createElement('div');
      topParentDiv.id = 'jsFrame_absolute_' + me.generateUUID();
      topParentDiv.setAttribute('style',
        'position:absolute;' + me.hAlign + ':0px;' + me.vAlign + ':0px;margin:0px;padding:0px;'
      );
      document.body.appendChild(topParentDiv);
      parentElement = topParentDiv;
    }
  } else {
    if (me.isWindowManagerFixed) {
      //parentElement set
      var topParentDiv = document.createElement('div');
      topParentDiv.id = 'jsFrame_fixed_' + me.generateUUID();
      topParentDiv.setAttribute('style',
        'position:fixed;' + me.hAlign + ':0px;' + me.vAlign + ':0px;margin:0px;padding:0px;'
      );
      parentElement.appendChild(topParentDiv);
    } else {

      var topParentDiv = document.createElement('div');
      topParentDiv.id = 'jsFrame_absolute_' + me.generateUUID();
      topParentDiv.setAttribute('style',
        'position:absolute;' + me.hAlign + ':0px;' + me.vAlign + ':0px;margin:0px;padding:0px;'
      );
      parentElement.appendChild(topParentDiv);

    }
  }

  if (MOUSE_ENABLED) {
    document.addEventListener('mouseup', mouseUp);
    document.addEventListener('mousemove', mouseMove);
  }

  if (TOUCH_ENABLED) {
    if ('ontouchend' in window) {
      var funcOnTouchEnd = function(evt) {
        // The "mouseup" event happens right after "touchend" event,
        // but I don't call #preventdefault because #preventdefault prevents "onclick".
        // So, perform #preventdefault only for "touchmove"
        // evt.preventDefault();
        mouseUp.bind(this)(evt);
      };
      document.addEventListener('touchend', funcOnTouchEnd);
    }

    if ('ontouchmove' in window) {

      // To remove the 300ms tap delay between touchend and click,
      // To disable double-tap to zoom
      if (me.touchActionManipulation) {
        me.doEnableTouchActionManipulation();
      }

      if (!me.pullToRefresh) {
        // The Android version of Chrome has a feature that refreshes the page by sliding downward
        // while touching on the screen, but when this feature is enabled, the downward movement of the window is inhibited,
        // so this feature can be explicitly turned off.
        me.doDisablePullToRefresh();
      }

      var funcOnTouchMove = function(evt) {
        // Call #preventDefault to prevent simultaneous ignition of mousemove
        evt.preventDefault();
        mouseMove.bind(this)(evt);
      };
      document.addEventListener('touchmove', funcOnTouchMove);
    }
  }


  me.windowManager = new CWindowManager(parentElement, 'windowManager_' + me.generateUUID(), 0, 0, 0, 0);
  //me.windowManager = new CWindowManager(document.body, 'windowManager_' + me.generateUUID(), 0, 0, 0, 0);
  me.domPartsBuilder = null;

  function mouseUp(e) {
    me.windowManager.windowMouseUp(e);
  }

  function mouseMove(e) {
    me.windowManager.windowMouseMove(e);
  }
}

JSFrame.prototype.doEnableTouchActionManipulation = function() {
  var bodyStyle = document.documentElement.getAttribute('style');
  if (!bodyStyle) {
    bodyStyle = '';
  } else {
    if (!bodyStyle.endsWith(';')) {
      bodyStyle += ';';
    }
  }
  if (bodyStyle.indexOf('touch-action') === -1) {
    bodyStyle += '-ms-touch-action: manipulation;touch-action: manipulation;';
    document.documentElement.setAttribute('style', bodyStyle);
  }
};

JSFrame.prototype.doDisablePullToRefresh = function() {
  var bodyStyle = document.body.getAttribute('style');
  if (!bodyStyle) {
    bodyStyle = '';
  } else {
    if (!bodyStyle.endsWith(';')) {
      bodyStyle += ';';
    }
  }
  if (bodyStyle.indexOf('overscroll-behavior-y') === -1) {
    bodyStyle += 'overscroll-behavior-y: contain;';
    document.body.setAttribute('style', bodyStyle);
  }
};
JSFrame.prototype.getDomPartsBuilder = function() {
  var me = this;

  if (!me.domPartsBuilder) {
    me.domPartsBuilder = new CDomPartsBuilder();
  }
  return me.domPartsBuilder;
};

JSFrame.prototype.create = function(model) {
  var me = this;

  var properties = {};
  properties.name = model.name;
  var title = model.title;
  var left = model.left;
  var top = model.top;
  var width = model.width;
  var height = model.height;
  var appearance = model.appearance;
  var presetWindowName = model.preset;
  var presetWindowParam = model.presetParam;
  var appearanceName = model.appearanceName;
  var appearanceParam = model.appearanceParam;
  var style = model.style;

  var minWidth = model.minWidth;
  var minHeight = model.minHeight;


  var html = model.html;
  var resizable = model.resizable;
  var movable = model.movable;
  var url = model.url;
  var urlLoaded = model.urlLoaded;

  var presetParam = model.presetParam;
  var presetWindow;

  if (presetWindowName) {

    var presetWindowObj = this.getPresetWindow(presetWindowName);
    presetWindow = presetWindowObj.getPresetWindow(presetParam);
    appearance = this.createPresetStyle(presetWindow.appearanceName,
      { appearanceParam: presetWindow.appearanceParam });

  } else if (appearanceName) {
    appearance = this.createPresetStyle(appearanceName,
      { appearanceParam: appearanceParam });
  }

  if (model.clientHeight) {
    var windowTitleBarHeight = parseInt(appearance.titleBarHeight || 0) - appearance.frameHeightAdjust;
    height = model.clientHeight + windowTitleBarHeight;
  }


  var frame = this.createFrame(left, top, width, height, appearance, properties);

  if (title) {
    frame.setTitle(title);
  }

  if (html) {
    frame.setHTML(html);
  }
  if (url) {
    var urlPromise = frame.setUrl(url);
    if (urlLoaded) {
      urlPromise.then(urlLoaded);
    }
  }
  if (resizable == false) {
    frame.setResizable(false);
  }
  if (movable == false) {
    frame.setMovable(false);
  }

  if (minWidth && minHeight) {
    frame.minFrameWidth = minWidth;
  }
  if (minHeight) {
    frame.minWindowHeight = minHeight;

    if (model.clientHeight) {
      frame.minWindowHeight = minHeight + windowTitleBarHeight;
    }
  }

  if (style) {
    var frameView = frame.getFrameView();

    for (var name in style) {
      if (style.hasOwnProperty(name)) {
        frameView.style[name] = style[name];
      }
    }
  }

  if (presetWindow) {
    presetWindow.setupPresetWindow(frame);
  }

  return frame;
};

/**
 * Create a new window
 *
 * @returns {CIfFrame}
 */
JSFrame.prototype.createFrame = function(left, top, width, height, appearance, properties) {
  var me = this;

  if (!appearance) {
    appearance = me.createFrameAppearance();
  }


  appearance.initialize();

  var windowId = 'window_' + me.generateUUID();

  if (!left) {
    left = 0;
  }
  if (!top) {
    top = 0;
  }
  if (!width) {
    width = 128;
  }
  if (!height) {
    height = 128;
  }


  var frame = new CIfFrame(windowId, left, top, width, height, appearance);

  //experimental
  frame.jsFrame = me;

  if (properties && properties.name) {
    frame.setName(properties.name);
  }
  frame.hide();

  me.windowManager.addWindow(frame);


  // getTitleBarStyle is deprecated
  if (appearance.getTitleBarStyle) {

    var titleBarStyle = appearance.getTitleBarStyle();
    if (titleBarStyle) {
      frame.setTitleBarClassName(titleBarStyle.titleBarClassNameDefault, titleBarStyle.titleBarClassNameFocused);
    }
  } else if (appearance.titleBarClassNameDefault && appearance.titleBarClassNameFocused) {
    frame.setTitleBarClassName(appearance.titleBarClassNameDefault, appearance.titleBarClassNameFocused);
  } else if (appearance.titleBarClassNameDefault) {
    frame.setTitleBarClassName(appearance.titleBarClassNameDefault, appearance.titleBarClassNameDefault);
  }

  return frame;

};


JSFrame.prototype.containsWindowName = function(windowName) {
  var me = this;
  return me.windowManager.containsWindowName(windowName);
};

JSFrame.prototype.getWindowByName = function(windowName) {
  var me = this;
  return me.windowManager.getWindowByName(windowName);
};

JSFrame.prototype.generateUUID = function() {

  var unixTime = Date.now();

  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (unixTime + Math.random() * 16) % 16 | 0;
    unixTime = Math.floor(unixTime / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;

};

JSFrame.prototype.createFrameAppearance = function() {
  return new CFrameAppearance();
};

JSFrame.prototype.createAnimator = function() {

  return new CSimpleLayoutAnimator();
};

/**
 * Helper class for maximizing and minimizing windows(frames) and handling animations accordingly
 */
JSFrame.prototype.createWindowEventHelper = function(model) {

  var me = this;

  if (!model) {
    model = {};
  }

  model.verticalAlign = me.vAlign;
  model.horizontalAlign = me.hAlign;

  var wndEventHelper = new WindowEventHelper(model);
  return wndEventHelper;
};

JSFrame.prototype.getPresetWindow = function(presetName, param) {

  if (presetWindows[presetName]) {
    var presetObj = presetWindows[presetName];
    return presetObj;
  } else {
    return null;
  }
}
JSFrame.prototype.createPresetStyle = function(presetName, param) {

  var me = this;
  var apr = me.createFrameAppearance();
  if (param && param.focusedFrameOnly) {
    apr.focusedFrameOnly = param.focusedFrameOnly;
  }

  if (presetStyles[presetName]) {
    var styleObj = presetStyles[presetName];
    var appearanceParam = null;

    if (param && param.appearanceParam) {
      appearanceParam = param.appearanceParam;
    }

    return styleObj.getStyle(apr, appearanceParam);
  }

  console.error('[JSFrame] Preset appearance "' + presetName + '" not found.');
  return apr;
};

JSFrame.prototype.showToast = function(model) {
  if (!model) {
    return;
  }

  var me = this;
  var toastHeight = 60;
  var toastWidth = 260;
  var openCloseDurationMs = 300;
  var stayDurationMs = 1000;
  var startY = window.innerHeight - 10 - toastHeight / 2;
  var endY = window.innerHeight - 20 - toastHeight / 2;
  var myHtml = '';
  var showButton = false;
  var style = {
    borderRadius: '10px',
    background: 'rgba(0,0,0,0.8)',
  };

  if (model.style) {
    style = model.style;
  }
  if (model.height) {
    toastHeight = model.height;
  }
  if (model.width) {
    toastWidth = model.width;
  }
  if (model.duration) {
    stayDurationMs = model.duration;
  }
  if (model.align) {

    if (model.align == 'top') {
      startY = 10 + toastHeight / 2;
      endY = 20 + toastHeight / 2;
    } else if (model.align == 'center') {
      startY = window.innerHeight / 2;
      endY = window.innerHeight / 2;
    } else {
      //bottom
    }
  }
  if (model.html) {
    myHtml = model.html;
  }
  if (model.text) {
    myHtml = model.text;
  }
  if (model.closeButton == true) {
    showButton = true;
  } else {
    showButton = false;
  }


  var apr = me.createPresetStyle('toast');

  if (style.borderRadius) {
    apr.frameBorderRadius = style.borderRadius;
  }

  if (model.closeButtonColor) {
    apr.captionClor = model.closeButtonColor;

  }


  var frame = me.create({
    name: 'toast_' + me.generateUUID(),
    width: toastWidth, height: toastHeight,
    movable: false,
    resizable: false,
    appearance: apr,
    style: style,
    html: '<div id="my_element" style="box-sizing:border-box;display: flex;justify-content: center;align-items: center;padding:10px;font-size:16px;color:darkgray;height:' + (toastHeight) + 'px">' +
      myHtml +
      '</div>'
  });


  if (showButton) {
  } else {
    frame.hideFrameComponent('closeButton');
  }

  var requestFocusAfterAnimation = false;

  var startX = window.innerWidth / 2;

  if (me.hAlign == 'right') {
    startX = -startX;// -500;
  }

  if (me.vAlign == 'bottom') {
    startY = startY - window.innerHeight;
    endY = endY - window.innerHeight;
  }


  var animator = me.createAnimator();
  animator.set(frame)
    .setDuration(openCloseDurationMs)
    .fromPosition(startX, startY, 'CENTER_CENTER')
    .toPosition(startX, endY, 'CENTER_CENTER')
    .toAlpha(1.0)
    .fromAlpha(0.0)
    .start(0, requestFocusAfterAnimation)
    .then(function(animatorObj) {
      return animatorObj
        .setDuration(openCloseDurationMs)
        .fromPosition(startX, endY, 'CENTER_CENTER')
        .toPosition(startX, startY, 'CENTER_CENTER')
        .fromAlpha(1.0)
        .toAlpha(0.5)
        .start(stayDurationMs, requestFocusAfterAnimation);
    })
    .then(function(animatorObj) {
      var _frame = animatorObj.get();
      _frame.closeFrame();
    });

};

/**
 * end of FrameManager class
 */


Object.freeze(DEF);

module.exports = JSFrame;


/***/ }),

/***/ "./src/appearance/CButtonAppearance.js":
/*!*********************************************!*\
  !*** ./src/appearance/CButtonAppearance.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function CTextButtonAppearance() {

  var crossMark0 = '\u274c';

  this.size = 14;
  this.width = null;
  this.height = null;

  //border
  this.borderRadius = 2;
  this.borderWidth = 0;
  this.borderColorDefault = '#aaaaaa';
  this.borderColorFocused = this.borderColorDefault;
  this.borderColorHovered = null;
  this.borderColorPressed = this.borderColorDefault;

  this.borderStyleDefault = 'solid';
  this.borderStyleFocused = this.borderStyleDefault;
  this.borderStyleHovered = null;
  this.borderStylePressed = this.borderStyleDefault;

  this.backgroundBoxShadow = null;


  //background
  this.backgroundColorDefault = 'transparent';
  this.backgroundColorFocused = this.backgroundColorDefault;
  this.backgroundColorHovered = null;
  this.backgroundColorPressed = this.backgroundColorDefault;

  //caption
  this.caption = null;
  this.captionColorDefault = 'white';
  this.captionColorFocused = this.captionColorDefault;
  this.captionColorHovered = null;
  this.captionColorPressed = this.captionColorDefault;
  this.captionShiftYpx = 0;
  this.captionFontRatio = 1.0;


}
module.exports = CTextButtonAppearance;

/***/ }),

/***/ "./src/appearance/CChildMenuAppearance.js":
/*!************************************************!*\
  !*** ./src/appearance/CChildMenuAppearance.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function CChildMenuAppearance(model) {
  this.childMenuHTML = '';
  this.childMenuWidth = 0;
  this.childMenuAlign = 'LEFT';// off set position from parent frameComponent "LEFT" "RIGHT" "CENTER"
  this.yOffset = 0;
  this.xOffset = 0;
}

module.exports = CChildMenuAppearance;

/***/ }),

/***/ "./src/appearance/CDomPartsBuilder.js":
/*!********************************************!*\
  !*** ./src/appearance/CDomPartsBuilder.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mergeDeeply = __webpack_require__(/*! merge-deeply */ "./node_modules/merge-deeply/lib/merge-deeply.js");
var CTextButtonAppearance = __webpack_require__(/*! ./CButtonAppearance.js */ "./src/appearance/CButtonAppearance.js");
var CImageButtonAppearance = __webpack_require__(/*! ./CImageButtonAppearance.js */ "./src/appearance/CImageButtonAppearance.js");
var CChildMenuAppearance = __webpack_require__(/*! ./CChildMenuAppearance.js */ "./src/appearance/CChildMenuAppearance.js");

/**
 * CDomPartsBuilder class
 * Easy to build a beautiful or typical dom parts(htmlElement)
 * @constructor
 */
function CDomPartsBuilder() {
}

CDomPartsBuilder.prototype.buildChildMenuAppearance = function(frameAppearance) {
  return new CChildMenuAppearance(frameAppearance);
};
CDomPartsBuilder.prototype.buildTextButtonAppearance = function(src) {
  if (src) {
    var result = mergeDeeply({ op: 'clone', object1: src, concatArray: true });
    return result;
  } else {
    return new CTextButtonAppearance();
  }
};
CDomPartsBuilder.prototype.buildImageButtonAppearance = function(src) {
  if (src) {
    var clonedImageButtonAppearance = mergeDeeply({ op: 'clone', object1: src });
    return clonedImageButtonAppearance;
  } else {
    return new CImageButtonAppearance();
  }
};

CDomPartsBuilder.prototype.buildButton = function(btnAppearance) {
  var me = this;
  return me.buildTextButton(btnAppearance);
};

CDomPartsBuilder.prototype.appendChildMenuTo = function(childMenuAppearance, parentEle) {
  var me = this;
  var ndiv = document.createElement('div');
  ndiv.classList.add('jsframe-child-menu');
  ndiv.innerHTML = childMenuAppearance.childMenuHTML;
  ndiv.style.position = 'absolute';
  ndiv.style.pointerEvents = 'none';
  ndiv.style.width = childMenuAppearance.childMenuWidth + 'px';
  // ndiv.style.top = childMenuAppearance.childMenuTop + 'px';
  // ndiv.style.left = childMenuAppearance.childMenuLeft + 'px';
  ndiv.style.display = 'none';

  var posX = childMenuAppearance.xOffset;
  var posY = parseInt(parentEle.style.height, 10) + childMenuAppearance.yOffset + 2;

  if (childMenuAppearance.childMenuAlign === 'LEFT') {
    ndiv.style.left = posX + 'px';
  } else if (childMenuAppearance.childMenuAlign === 'RIGHT') {
    ndiv.style.right = posX + 'px';
  } else if (childMenuAppearance.childMenuAlign === 'CENTER') {
    posX = -childMenuAppearance.childMenuWidth / 2 + parseInt(parentEle.style.height, 10) / 2;
    ndiv.style.left = posX + 'px';
  }
  ndiv.style.top = posY + 'px';

  // ndiv.style.pointerEvents is none to avoid referring clicks to extra areas.
  // But we want its children to be responsive, so we set pointerEvents to auto
  ndiv.firstChild.style.pointerEvents = 'auto';

  parentEle.appendChild(ndiv);
  //return ndiv;
};


/**
 * Creates an actual DOM element from the specified appearance
 * @param btnAppearance
 * @returns {HTMLDivElement}
 */
CDomPartsBuilder.prototype.buildTextButton = function(btnAppearance) {

  var size = btnAppearance.size;
  var width = size;
  var height = size;

  if (btnAppearance.width != null) {
    width = btnAppearance.width;
  }

  if (btnAppearance.height != null) {
    height = btnAppearance.height;
  }


  var divElement = document.createElement('div');

  //border
  var borderWidth = btnAppearance.borderWidth;
  var borderRadius = btnAppearance.borderRadius;

  var borderColorDefault = btnAppearance.borderColorDefault;
  var borderColorFocused = btnAppearance.borderColorFocused;
  var borderColorHovered = btnAppearance.borderColorHovered;
  var borderColorPressed = btnAppearance.borderColorPressed;

  var borderStyleDefault = btnAppearance.borderStyleDefault;
  var borderStyleFocused = btnAppearance.borderStyleFocused;
  var borderStyleHovered = btnAppearance.borderStyleHovered;
  var borderStylePressed = btnAppearance.borderStylePressed;

  //background
  var backgroundColorDefault = btnAppearance.backgroundColorDefault;
  var backgroundColorFocused = btnAppearance.backgroundColorFocused;
  var backgroundColorHovered = btnAppearance.backgroundColorHovered;
  var backgroundColorPressed = btnAppearance.backgroundColorPressed;

  var backgroundBoxShadow = btnAppearance.backgroundBoxShadow;

  var fa = btnAppearance.fa;

  //caption
  var caption = btnAppearance.caption;
  var btnImageDefault = btnAppearance.imageDefault;
  var btnImageFocused = btnAppearance.imageFocused;
  var btnImageHovered = btnAppearance.imageHovered;
  var btnImagePressed = btnAppearance.imagePressed;

  //prevent to catch mouse events
  if (btnImageDefault) {
    btnImageDefault.style.pointerEvents = 'none';
  }
  if (btnImageFocused) {
    btnImageFocused.style.pointerEvents = 'none';
  }
  if (btnImageHovered) {
    btnImageHovered.style.pointerEvents = 'none';
  }
  if (btnImagePressed) {
    btnImagePressed.style.pointerEvents = 'none';
  }

  var _captionColorDefault = btnAppearance.captionColorDefault;
  var captionColorFocused = btnAppearance.captionColorFocused;
  var captionColorHovered = btnAppearance.captionColorHovered;
  var captionColorPressed = btnAppearance.captionColorPressed;

  var captionShiftYpx = btnAppearance.captionShiftYpx;
  var captionFontRatio = btnAppearance.captionFontRatio;

  //Set whether parent frame has focus or not internally
  divElement._hasFrameFocus = false;

  //Set whether mouse is pressing or not internally.
  divElement._isMouseDown = false;

  divElement.style.position = 'absolute';

  divElement.style.top = '0px';
  divElement.style.left = '0px';
  divElement.style.width = (width) + 'px';
  divElement.style.height = (height) + 'px';

  if (btnAppearance.cursor) {
    divElement.style.cursor = btnAppearance.cursor;
  } else {
    divElement.style.cursor = 'pointer';
  }
  divElement.style.margin = '0px';
  divElement.style.padding = '0px';
  //added for preventing bootstrap.css pollution
  divElement.style.boxSizing = 'content-box';
  divElement.style.fontFamily = 'sans-serif';

  divElement.onmousedown = function(e) {
    divElement._isMouseDown = true;
    divElement._handleFocusDrawing('onmousedown');
  };

  divElement.onmouseout = function(e) {
    divElement._isMouseDown = false;
    divElement._handleFocusDrawing('onmouseout');
  };

  divElement.onmouseover = function(e) {
    divElement._handleHoverDrawing();
  };

  divElement.onmouseup = function(e) {
    divElement._isMouseDown = false;
    divElement._handleFocusDrawing('onmouseup');
  };


  /**
   * The parent notifies that the parent's frame got focus
   */
  divElement._onTakeFocus = function() {
    divElement._hasFrameFocus = true;
    divElement._handleFocusDrawing('_onTakeFocus');
  };

  /**
   * The parent notifies that the parent's frame has lost focus
   */
  divElement._onReleaseFocus = function() {

    divElement._hasFrameFocus = false;
    divElement._handleFocusDrawing('_onReleaseFocus');
  };

  /**
   *  To handle 2x2 matrix.
   *  (_hasFrameFocus true/false x _isMouseDown true/false)
   */
  divElement._handleFocusDrawing = function(evtName) {
    if (divElement._hasFrameFocus) {
      //When this element has focus

      if (divElement._isMouseDown) {
        //border
        divElement.style.borderColor = borderColorPressed;
        divElement.style.borderStyle = borderStylePressed;

        //background
        divElement.style.backgroundColor = backgroundColorPressed;

        //caption
        divElement.style.color = captionColorPressed;

        if (btnImagePressed) {
          // divElement.innerHTML = '';
          // divElement.appendChild(btnImagePressed);
          updateImage(btnImagePressed, divElement);
        }
      } else {
        //border
        divElement.style.borderColor = borderColorFocused;
        divElement.style.borderStyle = borderStyleFocused;

        //background
        divElement.style.backgroundColor = backgroundColorFocused;

        //caption
        divElement.style.color = captionColorFocused;

        if (btnImageFocused) {
          // divElement.innerHTML = '';
          // divElement.appendChild(btnImageFocused);
          updateImage(btnImageFocused, divElement);
        }
      }

    } else {
      //When this element doesn't have focus
      if (divElement._isMouseDown) {
        //border
        divElement.style.borderColor = borderColorPressed;
        divElement.style.borderStyle = borderStylePressed;

        //background
        divElement.style.backgroundColor = backgroundColorPressed;

        //caption
        divElement.style.color = captionColorPressed;

        if (btnImagePressed) {
          // divElement.innerHTML = '';
          // divElement.appendChild(btnImagePressed);
          updateImage(btnImagePressed, divElement);
        }

      } else {

        //border
        divElement.style.borderColor = borderColorDefault;
        divElement.style.borderStyle = borderStyleDefault;

        //background
        divElement.style.backgroundColor = backgroundColorDefault;

        //caption
        divElement.style.color = _captionColorDefault;

        if (btnImageDefault) {
          // divElement.innerHTML = '';
          // divElement.appendChild(btnImageDefault);
          updateImage(btnImageDefault, divElement);
        }
      }
    }
  };

  divElement._handleHoverDrawing = function() {

    if (divElement._hasFrameFocus) {
      //When this element has focus
    } else {
      //When this element doesn't have focus
    }
    //border
    if (borderColorHovered) {
      divElement.style.borderColor = borderColorHovered;
    }
    if (borderStyleHovered) {
      divElement.style.borderStyle = borderStyleHovered;
    }

    //background
    if (backgroundColorHovered) {
      divElement.style.backgroundColor = backgroundColorHovered;
    }

    if (captionColorHovered) {
      //caption
      divElement.style.color = captionColorHovered;
    }
    if (btnImageHovered) {
      // divElement.innerHTML = '';
      // divElement.appendChild(btnImageHovered);
      updateImage(btnImageHovered, divElement);
    }
  };
  divElement.style.padding = '0px';

  divElement.style.textAlign = 'center';
  divElement.style.fontSize = (height * captionFontRatio) + 'px';

  divElement.style.lineHeight = (height) + 'px';

  divElement.style.borderWidth = '1px';

  if (borderWidth != null) {
    divElement.style.borderWidth = borderWidth + 'px';
  }

  if (backgroundBoxShadow != null) {
    divElement.style.boxShadow = backgroundBoxShadow;
  }

  divElement.style.borderRadius = (borderRadius + parseInt(divElement.style.borderWidth)) + 'px';

  var childMode = true;

  if (childMode && btnImageDefault) {
    // divElement.innerHTML = '';
    // divElement.appendChild(btnImageDefault);
    updateImage(btnImageDefault, divElement);
  } else if (childMode && caption) {

    var span = document.createElement('span');
    //span.style.position='absolute';
    span.style.width = '100%';
    span.style.marginTop = captionShiftYpx + 'px';
    span.style.display = 'inline-block';
    span.style.textAlign = 'center';
    span.style.fontFamily = 'sans-serif';
    span.appendChild(document.createTextNode(caption));
    divElement.appendChild(span);

  } else if (childMode && fa) {

    var span = document.createElement('span');
    span.style.pointerEvents = 'none';
    span.style.width = '100%';
    span.style.marginTop = captionShiftYpx + 'px';
    span.style.display = 'inline-block';
    span.style.textAlign = 'center';
    span.style.fontFamily = 'sans-serif';
    span.innerHTML = '<i class="' + fa + '"></i>';
    divElement.appendChild(span);
  } else if (!childMode && caption) {
    divElement.style.paddingTop = captionShiftYpx + 'px';
    divElement.appendChild(document.createTextNode(caption));
  }

  divElement._handleFocusDrawing();
  return divElement;

};

// Don't use innerHTML='' because there may be a child below this 'img' element.
// A child that may be a child is a childMenu.
function updateImage(image, parentElement) {
  var imgs = parentElement.querySelectorAll('img');
  if (parentElement.firstChild) {
    parentElement.insertBefore(image, parentElement.firstChild);
  } else {
    parentElement.appendChild(image);
  }
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    if (image !== img) {
      parentElement.removeChild(img);
    }
  }
}

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


/**
 * end of CDomPartsBuilder class
 */
module.exports = CDomPartsBuilder;


/***/ }),

/***/ "./src/appearance/CFrameAppearance.js":
/*!********************************************!*\
  !*** ./src/appearance/CFrameAppearance.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var CDomPartsBuilder = __webpack_require__(/*! ./CDomPartsBuilder.js */ "./src/appearance/CDomPartsBuilder.js");
var CFrameComponent = __webpack_require__(/*! ./CFrameComponent.js */ "./src/appearance/CFrameComponent.js");

/**
 * CFrameAppearance class<br>
 * Appearance Model Class for Frame
 *
 */
function CFrameAppearance() {

  var me = this;

  this.showTitleBar = true;
  this.showCloseButton = true;
  this.titleBarCaption = '';
  this.titleBarCaptionFontSize = '12px';
  this.titleBarCaptionFontWeight = 'bold';
  this.titleBarHeight = '24px';
  this.useIframe = false;
  this.useFrame = true;

  this.titleBarClassNameDefault=null;
  this.titleBarClassNameFocused=null;

  this.setUseIFrame = function(value) {
    me.useIframe = value;
    me.useFrame = !value;
    return me;
  };


  /**
   * The position from the left side of the caption. If this value is null, caption will be centered.
   */
  this.titleBarCaptionLeftMargin = '5px';

  this.titleBarColorDefault = null;
  this.titleBarColorFocused = null;
  this.titleBarCaptionColorDefault = '';
  this.titleBarCaptionColorFocused = '';
  this.titleBarCaptionTextShadow = '0 1px 0 rgba(255,255,255,.7)';
  this.titleBarCaptionTextAlign = 'center';

  this.titleBarBorderBottomDefault = '1px solid rgba(0,0,0,0.2)';
  this.titleBarBorderBottomFocused = null;

  this.frameBorderRadius = '6px';

  this.frameBorderWidthDefault = '1px';
  this.frameBorderWidthFocused = this.frameBorderWidthDefault;

  this.frameBorderColorDefault = 'rgba(1, 1, 1, 0.2)';
  this.frameBorderColorFocused = this.frameBorderColorDefault;

  this.frameBorderStyle = 'solid';
  this.frameBoxShadow = '2px 3px 16px rgba(0,0,0,.6)';
  this.frameBackgroundColor = 'transparent';

  this._partsBuilder = null;

  this.frameComponents = [];

  this.frameHeightAdjust = 1;

  this.resizeAreaWidth = 20;
  this.resizeAreaHeight = 20;
  this.resizeAreaOffset = 0;
  this.resizeAreaVisible = false;

  this.getFrameInnerBorderRadius = function(ref, hasFocus) {

    if (!ref) {
      return null;
    }
    if (hasFocus) {
      return {
        frameAppearance: me,
        innerBorderRadius: (parseInt(ref.frameBorderRadius, 10) - parseInt(ref.frameBorderWidthFocused, 10)) + 'px'
      };
    }
    return {
      frameAppearance: me,
      innerBorderRadius: (parseInt(ref.frameBorderRadius, 10) - parseInt(ref.frameBorderWidthDefault, 10)) + 'px'
    };
  };


  this.onInitialize = function() {

    //Add close button if needed
    if (me.showCloseButton) {
      var partsBuilder = me.getPartsBuilder(),
        crossMark0 = '\u274c',
        crossMark1 = '\u2716',
        crossMark2 = '\u274e';


      var btnAppearance = partsBuilder.buildTextButtonAppearance();

      btnAppearance.size = 14;
      btnAppearance.captionShiftYpx = 0;
      btnAppearance.captionFontRatio = 1.0;
      btnAppearance.borderRadius = 2;
      btnAppearance.backgroundColorPressed = 'transparent';
      btnAppearance.backgroundColorDefault = 'transparent';
      btnAppearance.caption = crossMark1;

      btnAppearance.captionColorDefault = 'gray';
      btnAppearance.captionColorFocused = 'gray';
      btnAppearance.captionColorHovered = 'silver';
      btnAppearance.captionColorPressed = 'black';

      btnAppearance.borderWidth = 0;
      btnAppearance.borderColorDefault = '#aaaaaa';
      btnAppearance.borderStyle = 'solid';

      var closeBtnEle = partsBuilder.buildTextButton(btnAppearance);
      var eleLeft = -10;
      var eleTop = -18;
      var eleAlign = 'RIGHT_TOP';

      //closeButton is a special name
      var frameComponent = me.addFrameComponent('closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);
    }
  };

  this.onTitleBarStyleInitialize = function() {

  };

}


CFrameAppearance.prototype.getPartsBuilder = function() {
  var me = this;
  if (me._partsBuilder === null) {
    me._partsBuilder = new CDomPartsBuilder();
  }
  return me._partsBuilder;
};
CFrameAppearance.prototype.initialize = function() {
  var me = this;
  me.onInitialize();
};

/**
 *  Add FrameComponent into frame
 *  FrameComponent is attached to Frame and it moves with Frame.
 *
 * @param id
 * @param myDomElement DOM element.
 * @param x  Relative x coodinate from the snap position specified by alignment
 * @param y  Relative y coodinate from the snap position specified by alignment
 * @param align 'LEFT_TOP' 'CENTER_TOP' 'RIGHT_TOP' 'LEFT_CENTER' 'CENTER_CENTER' 'RIGHT_CENTER' 'LEFT_BOTTOM' 'CENTER_BOTTOM' 'RIGHT_BOTTOM'
 * @returns {CFrameComponent}
 *
 */
CFrameAppearance.prototype.addFrameComponent = function(id, myDomElement, x, y, align, extra) {

  //(id, frame, htmlElement, x, y, align)
  var frameComponent = new CFrameComponent(id, myDomElement, x, y, align, extra);

  if (myDomElement._onTakeFocus && myDomElement._onReleaseFocus) {
    //if this DOM element has special method for focus
    //set focus callback
    frameComponent.setFocusCallback(myDomElement._onTakeFocus, myDomElement._onReleaseFocus);
  }

  this.frameComponents.push(frameComponent);

  return frameComponent;
};


//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/**
 *  End of CFrameAppearance class
 */
module.exports = CFrameAppearance;


/***/ }),

/***/ "./src/appearance/CFrameComponent.js":
/*!*******************************************!*\
  !*** ./src/appearance/CFrameComponent.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * CFrameComponent class
 * <p>
 * Wrapped DOM element like 'div' to display above the frame<br>
 *
 * ex.An object such as closeButton
 *
 * @param id
 * @param frame
 * @param htmlElement DOM-element
 * @param x relative x-position in the frame respect to align
 * @param y relative y-position in the frame respect to align
 * @param align relative alignment in the frame
 * @constructor
 */
function CFrameComponent(id, htmlElement, x, y, align, extra) {
  var me = this;

  me.id = id;
  me.x = x;
  me.y = y;
  me.frame = null;

  me._focusTakingCallabck = null;
  me._focusReleasingCallabck = null;

  if (align) {
    me.frameComponentAlign = align;
  } else {
    me.frameComponentAlign = CALIGN.LEFT_TOP;
  }
  me.htmlElement = htmlElement;
  me.htmlElement.style.zIndex = 50;
  me.htmlElement.setAttribute('component-id', id);

  if (extra && extra.childMenu) {
    me.childMenu = extra.childMenu;
  } else if (htmlElement.querySelector('.jsframe-child-menu')) {
    me.childMenu = htmlElement.querySelector('.jsframe-child-menu');
  }

}

CFrameComponent.prototype.setFocusCallback = function(focusTakingCallback, focusReleasingCallback) {
  var me = this;
  me._focusTakingCallabck = focusTakingCallback;
  me._focusReleasingCallabck = focusReleasingCallback;
};

/**
 * Set parent frame of this frameComponent
 * @param frame
 */
CFrameComponent.prototype.setFrame = function(frame) {
  var me = this;

  me.frame = frame;
  me.htmlElement.parentObject = frame;
  me.updateAlign();
};

/**
 * Place the FrameComponent relative to the parent's frame.
 * Relocate relative to parent frame when window resize event occurs
 */
CFrameComponent.prototype.updateAlign = function() {

  var me = this;

  var frameComponentAlign = me.frameComponentAlign;

  var frame = me.frame;
  var eleStyle = me.htmlElement.style;
  eleStyle.userSelect = 'none';

  var x = me.x;
  var y = me.y;

  var frameWidth = frame.getWidth();
  var frameHeight = frame.getHeight();
  var eleStyleWidth = eleStyle.width;
  var eleStyleHeight = eleStyle.height;

  if (CALIGN.LEFT_TOP == frameComponentAlign) {
    eleStyle.left = x + 'px';
    eleStyle.top = y + 'px';
  } else if (CALIGN.HCENTER_TOP == frameComponentAlign) {
    eleStyle.left = (parseInt(frameWidth) / 2 - parseInt(eleStyleWidth) / 2 + x) + 'px';
    eleStyle.top = y + 'px';
  } else if (CALIGN.RIGHT_TOP == frameComponentAlign) {
    eleStyle.left = (parseInt(frameWidth) - parseInt(eleStyleWidth) + x) + 'px';
    eleStyle.top = y + 'px';
  } else if (CALIGN.LEFT_VCENTER == frameComponentAlign) {
    eleStyle.left = x + 'px';
    eleStyle.top = (parseInt(frameHeight) / 2 - parseInt(eleStyleHeight) / 2 + y) + 'px';
  } else if (CALIGN.HCENTER_VCENTER == frameComponentAlign) {
    eleStyle.left = (parseInt(frameWidth) / 2 - parseInt(eleStyleWidth) / 2 + x) + 'px';
    eleStyle.top = (parseInt(frameHeight) / 2 - parseInt(eleStyleHeight) / 2 + y) + 'px';
  } else if (CALIGN.RIGHT_VCENTER == frameComponentAlign) {
    eleStyle.left = (parseInt(frameWidth) - parseInt(eleStyleWidth) + x) + 'px';
    eleStyle.top = (parseInt(frameHeight) / 2 - parseInt(eleStyleHeight) / 2 + y) + 'px';
  } else if (CALIGN.LEFT_BOTTOM == frameComponentAlign) {
    eleStyle.left = x + 'px';
    eleStyle.top = (parseInt(frameHeight) - parseInt(eleStyleHeight) + y) + 'px';
  } else if (CALIGN.HCENTER_BOTTOM == frameComponentAlign) {
    eleStyle.left = (parseInt(frameWidth) / 2 - parseInt(eleStyleWidth) / 2 + x) + 'px';
    eleStyle.top = (parseInt(frameHeight) - parseInt(eleStyleHeight) + y) + 'px';
  } else if (CALIGN.RIGHT_BOTTOM == frameComponentAlign) {
    eleStyle.left = (parseInt(frameWidth) - parseInt(eleStyleWidth) + x) + 'px';
    eleStyle.top = (parseInt(frameHeight) - parseInt(eleStyleHeight) + y) + 'px';
  }
};

CFrameComponent.prototype.handleTakingFocus = function() {
  var me = this;
  if (me._focusTakingCallabck) {
    me._focusTakingCallabck();
  }
};

CFrameComponent.prototype.handleReleasingFocus = function() {
  var me = this;
  if (me._focusReleasingCallabck) {
    me._focusReleasingCallabck();
  }
};

/**
 * end of CFrameComponent class
 */

module.exports = CFrameComponent;


/***/ }),

/***/ "./src/appearance/CImageButtonAppearance.js":
/*!**************************************************!*\
  !*** ./src/appearance/CImageButtonAppearance.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var inherit = __webpack_require__(/*! ../utils/Inherit.js */ "./src/utils/Inherit.js")
var CTextButtonAppearance = __webpack_require__(/*! ./CButtonAppearance.js */ "./src/appearance/CButtonAppearance.js");

inherit(CImageButtonAppearance, CTextButtonAppearance);

function CImageButtonAppearance() {


  this.imageDefault = null;
  this.imageHovered = null;
  this.imagePressed = null;
  this.imageFocused = null;

  this.imageStore = {};
}

CImageButtonAppearance.prototype._setImage = function(src, width, height) {
  var me = this;

  var storedImgEle = me.imageStore[src];

  if (storedImgEle) {
    return storedImgEle;
  } else {
    var imgEle = document.createElement('img');
    imgEle.src = src;
    if (width && height) {
      var imgWidth = width;
      var imgHeight = height;
      var imgStyle = 'margin:0px;padding:0px;width:' + imgWidth + 'px;height:' + imgHeight + 'px';
      imgEle.setAttribute('style', imgStyle);
    }
    me.imageStore[src] = imgEle;

    return imgEle;
  }
}
CImageButtonAppearance.prototype.setSrc = function(model) {
  var me = this;
  if (model.default) {
    me.imageDefault = me._setImage(model.default, model.width, model.height);
  }
  if (model.hovered) {
    me.imageHovered = me._setImage(model.hovered, model.width, model.height);
  }
  if (model.pressed) {
    me.imagePressed = me._setImage(model.pressed, model.width, model.height);
  }
  if (model.focused) {
    me.imageFocused = me._setImage(model.focused, model.width, model.height);
  }
}

module.exports = CImageButtonAppearance;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//export { default as JSFrame } from './JSFrame.js';
module.exports = {
  JSFrame: __webpack_require__(/*! ./JSFrame */ "./src/JSFrame.js")
}



/***/ }),

/***/ "./src/presets/appearance/PresetStyleMaterial.css":
/*!********************************************************!*\
  !*** ./src/presets/appearance/PresetStyleMaterial.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./PresetStyleMaterial.css */ "./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStyleMaterial.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/presets/appearance/PresetStyleMaterial.js":
/*!*******************************************************!*\
  !*** ./src/presets/appearance/PresetStyleMaterial.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./PresetStyleMaterial.css */ "./src/presets/appearance/PresetStyleMaterial.css");
var ObjectAssigner = __webpack_require__(/*! ../../utils/ObjectAssigner.js */ "./src/utils/ObjectAssigner.js");


function getStyle(fApr, userParam) {

  var srcParam = {
    border: {
      color: 'transparent',
      width: 0,
      radius: 6,

    },
    control: {
      maximizeWithoutTitleBar: false,
      restoreKey: 'Escape',
    },
    titleBar: {
      color: 'white',
      background: 'black',
      leftMargin: 20,
      height: 30,
      fontSize: 12,
      buttonWidth: 36,
      buttonHeight: 16,
      buttonColor: 'white',
      buttons: [
        {
          fa: 'fas fa-times',
          name: 'closeButton',
          visible: true
        },
        {
          fa: 'far fa-window-maximize',
          name: 'maximizeButton',
          visible: true
        },
        {
          fa: 'far fa-window-restore',
          name: 'restoreButton',
          visible: false
        },
        {
          fa: 'far fa-window-minimize',
          name: 'minimizeButton',
          visible: true
        },
        {
          fa: 'fas fa-caret-up',
          name: 'deminimizeButton',
          visible: false
        }

      ],
      buttonsOnLeft: [],
    },


  };

  var param = srcParam;

  if (userParam) {
    //param=Object.assign({},srcParam, userParam);
    ObjectAssigner.objectAssign(srcParam, userParam);

  }


  fApr.showTitleBar = true;
  fApr.showCloseButton = true;

  fApr.titleBarCaptionFontSize = param.titleBar.fontSize + 'px';//'12px';
  fApr.titleBarCaptionFontWeight = 'normal';
  fApr.titleBarCaptionLeftMargin = param.titleBar.leftMargin + 'px';
  fApr.titleBarCaptionColorDefault = param.titleBar.color;
  fApr.titleBarCaptionColorFocused = param.titleBar.color;
  fApr.titleBarCaptionTextShadow = null;
  fApr.titleBarCaptionTextAlign = 'left';

  fApr.titleBarHeight = param.titleBar.height + 'px';// '50px';

  fApr.titleBarColorDefault = param.titleBar.background;
  fApr.titleBarColorFocused = param.titleBar.background;

  fApr.titleBarBorderBottomDefault = 'solid 0px #aaaaaa';
  fApr.titleBarBorderBottomFocused = 'solid 0px #1883d7';

  fApr.frameBorderRadius = param.border.radius + 'px';// '6px';

  //border width
  fApr.frameBorderWidthDefault = param.border.width + 'px';
  fApr.frameBorderWidthFocused = param.border.width + 'px';


  //border color
  fApr.frameBorderColorDefault = param.border.color;
  fApr.frameBorderColorFocused = param.border.color;

  fApr.frameBorderStyle = 'solid';

  //window shadow
  fApr.frameBoxShadow = param.border.shadow;//'2px 2px 10px  rgba(0, 0, 0, 0.5)';

  fApr.frameBackgroundColor = 'transparent';

  fApr.frameComponents = new Array();

  fApr.frameHeightAdjust = 0;//default is 1

  fApr.getTitleBarStyle = function() {

    if (fApr.focusedFrameOnly) {
      return {
        titleBarClassNameDefault: ' ',
        titleBarClassNameFocused: ' '
      };
    } else {
      return {
        titleBarClassNameDefault: ' ',
        titleBarClassNameFocused: ' '
      };
    }
  };

  fApr.onInitialize = function() {

    alignButtons(fApr, param, false);
    alignButtons(fApr, param, true);

  };

  //

  return fApr;
}

function alignButtons(fApr, param, fromLeft) {
  var partsBuilder = fApr.getPartsBuilder();
  var rbtX = 0;
  var buttons;

  if (fromLeft) {
    buttons = param.titleBar.buttonsOnLeft;

  } else {
    buttons = param.titleBar.buttons;
  }

  for (var rbtIdx in buttons) {

    var rbtSrc = buttons[rbtIdx];

    var rbt = partsBuilder.buildTextButtonAppearance();

    //caption
    rbt.fa = rbtSrc.fa;

    rbt.width = param.titleBar.buttonWidth;
    rbt.height = param.titleBar.buttonHeight;

    rbt.borderRadius = 0;
    rbt.borderWidth = 0;

    rbt.borderColorDefault = '#c6c6c6';
    rbt.borderColorFocused = '#fc615c';
    rbt.borderColorHovered = rbt.borderColorFocused;
    rbt.borderColorPressed = '#e64842';

    rbt.borderStyleDefault = 'solid';
    rbt.borderStyleFocused = rbt.borderStyleDefault;
    rbt.borderStyleHovered = rbt.borderStyleDefault;
    rbt.borderStylePressed = rbt.borderStyleDefault;

    //background
    rbt.backgroundColorDefault = 'transparent';
    rbt.backgroundColorFocused = 'transparent';
    rbt.backgroundColorHovered = 'transparent';
    rbt.backgroundColorPressed = 'transparent';

    var colors = getSubColor(param.titleBar.buttonColor);
    rbt.captionColorDefault = param.titleBar.buttonColor;
    rbt.captionColorFocused = param.titleBar.buttonColor;
    rbt.captionColorHovered = colors.hovered;
    rbt.captionColorPressed = colors.pressed;

    rbt.captionShiftYpx = 0;
    rbt.captionFontRatio = 1;

    var rbtEle = partsBuilder.buildTextButton(rbt);

    if (rbtSrc.visible) {
      rbtEle.style.display = 'flex';
    } else {
      if (fromLeft) {
        rbtX -= param.titleBar.buttonWidth;
      } else {
        rbtX += param.titleBar.buttonWidth;
      }
      rbtEle.style.display = 'none';
    }

    var titleBarHeight = parseInt(fApr.titleBarHeight);

    var rbtEleLeft = rbtX;

    //compute vertical center

    var rbtEleTop = -titleBarHeight + (titleBarHeight - rbt.height) / 2;

    var rbtEleAlign;
    if (fromLeft) {
      rbtEleAlign = 'LEFT_TOP';
    } else {
      rbtEleAlign = 'RIGHT_TOP';
    }

    var ndiv;
    if (rbtSrc.childMenuHTML) {

      ndiv = document.createElement('div');
      ndiv.id = rbtSrc.name + '_child_menu';

      ndiv.innerHTML = rbtSrc.childMenuHTML;
      ndiv.style.position = 'absolute';
      ndiv.style.width = (rbtSrc.childMenuWidth ? rbtSrc.childMenuWidth : 200) + 'px';
      ndiv.style.top = (parseInt(rbtEle.style.top, 10) + parseInt(rbtEle.style.height, 10) / 2 + titleBarHeight / 2) + 'px';
      ndiv.style.left = rbtEle.style.left;
      ndiv.style.display = 'none';

      rbtEle.appendChild(ndiv);
    }


    fApr.addFrameComponent(rbtSrc.name, rbtEle, rbtEleLeft, rbtEleTop, rbtEleAlign, { childMenu: ndiv });

    if (fromLeft) {
      rbtX += param.titleBar.buttonWidth;
    } else {
      rbtX += -param.titleBar.buttonWidth;
    }

  }
}


function getSubColor(color) {

  var canvas = document.createElement('canvas');
  canvas.height = 1;
  canvas.width = 1;
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1, 1);
  var colorData = ctx.getImageData(0, 0, 1, 1).data;

  var r = colorData[0];
  var g = colorData[1];
  var b = colorData[2];
  var alpha = colorData[3] / 255;
  var alpha2 = alpha * 0.85;
  var alpha3 = alpha * 0.75;

  var ret = 'rgb(' + r + ',' + g + ',' + b + ',' + alpha2 + ')';
  var ret2 = 'rgb(' + r + ',' + g + ',' + b + ',' + alpha2 + ')';
  var ret3 = 'rgb(' + r + ',' + g + ',' + b + ',' + alpha3 + ')';
  return { src: ret, hovered: ret2, pressed: ret3 };
}


module.exports.getStyle = getStyle;


/***/ }),

/***/ "./src/presets/appearance/PresetStylePopup.css":
/*!*****************************************************!*\
  !*** ./src/presets/appearance/PresetStylePopup.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./PresetStylePopup.css */ "./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStylePopup.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/presets/appearance/PresetStylePopup.js":
/*!****************************************************!*\
  !*** ./src/presets/appearance/PresetStylePopup.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./PresetStylePopup.css */ "./src/presets/appearance/PresetStylePopup.css");

function getStyle(fApr) {


  fApr.showTitleBar = false;
  fApr.showCloseButton = true;


  fApr.titleBarCaptionFontSize = '12px';
  fApr.titleBarCaptionFontWeight = 'normal';
  fApr.titleBarCaptionLeftMargin = '10px';
  fApr.titleBarCaptionColorDefault = '#4d494d';
  fApr.titleBarCaptionColorFocused = '#4d494d';

  fApr.titleBarHeight = '5px';

  fApr.titleBarColorDefault = 'white';
  fApr.titleBarColorFocused = 'white';

  fApr.titleBarBorderBottomDefault = null;
  fApr.titleBarBorderBottomFocused = null;

  fApr.frameBorderRadius = '6px';

  //border width
  fApr.frameBorderWidthDefault = '1px';
  fApr.frameBorderWidthFocused = '1px';


  //border color
  fApr.frameBorderColorDefault = '#aaaaaa';
  fApr.frameBorderColorFocused = '#aaaaaa';

  fApr.frameBorderStyle = 'solid';

  //window shadow
  fApr.frameBoxShadow = '2px 2px 5px  rgba(0, 0, 0, 0.5)';

  fApr.frameBackgroundColor = 'white';


  fApr.frameComponents = new Array();

  //adjustment value
  fApr.frameHeightAdjust = 2;//default is 1
  fApr.getTitleBarStyle = function() {

    if (fApr.focusedFrameOnly) {
      return {
        titleBarClassNameDefault: 'jsframe-preset-style-popup-focused',
        titleBarClassNameFocused: 'jsframe-preset-style-popup-focused'
      };
    } else {
      return {
        titleBarClassNameDefault: 'jsframe-preset-style-popup-default',
        titleBarClassNameFocused: 'jsframe-preset-style-popup-focused'
      };
    }
  };
  fApr.onInitialize = function() {


    var partsBuilder = fApr.getPartsBuilder();


    //configure close button appearance[begin]//////////////

    var crossMark0 = '\u274c';
    var crossMark1 = '\u2716';
    var crossMark2 = '\u274e';
    var CROSS_MARK = crossMark1;


    var cbApr = partsBuilder.buildTextButtonAppearance();

    cbApr.width = 20;
    cbApr.height = 20;


    cbApr.borderRadius = 10;
    cbApr.borderWidth = 1;

    cbApr.borderColorDefault = '#cccccc';
    cbApr.borderColorFocused = '#cccccc';
    cbApr.borderColorHovered = '#dddddd';
    cbApr.borderColorPressed = '#eeeeee';

    cbApr.borderStyleDefault = 'solid';
    cbApr.borderStyleFocused = cbApr.borderStyleDefault;
    cbApr.borderStyleHovered = cbApr.borderStyleDefault;
    cbApr.borderStylePressed = cbApr.borderStyleDefault;

    //background
    cbApr.backgroundColorDefault = 'white';
    cbApr.backgroundColorFocused = 'white';
    cbApr.backgroundColorHovered = '#eeeeee';
    cbApr.backgroundColorPressed = '#dddddd';

    cbApr.backgroundBoxShadow = '2px 2px 5px  rgba(0, 0, 0, 0.5)';

    //caption
    cbApr.caption = CROSS_MARK;

    cbApr.captionColorDefault = 'black';
    cbApr.captionColorFocused = 'black';
    cbApr.captionColorHovered = 'white';
    cbApr.captionColorPressed = 'white';

    cbApr.captionShiftYpx = 1;
    cbApr.captionFontRatio = 0.6;

    var closeBtnEle = partsBuilder.buildTextButton(cbApr);
    var eleLeft = 10;
    var eleTop = -6 - parseInt(fApr.titleBarHeight);
    var eleAlign = 'RIGHT_TOP';

    // 'closeButton' is a special name
    fApr.addFrameComponent('closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);

    //configure close button appearance[end]//////////////


  };
  //

  return fApr;


}


module.exports.getStyle = getStyle;


/***/ }),

/***/ "./src/presets/appearance/PresetStyleRedstone.css":
/*!********************************************************!*\
  !*** ./src/presets/appearance/PresetStyleRedstone.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./PresetStyleRedstone.css */ "./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStyleRedstone.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/presets/appearance/PresetStyleRedstone.js":
/*!*******************************************************!*\
  !*** ./src/presets/appearance/PresetStyleRedstone.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./PresetStyleRedstone.css */ "./src/presets/appearance/PresetStyleRedstone.css");

function getStyle(fApr) {

  fApr.showTitleBar = true;
  fApr.showCloseButton = true;

  fApr.titleBarCaptionFontSize = '12px';
  fApr.titleBarCaptionFontWeight = 'normal';
  fApr.titleBarCaptionLeftMargin = '10px';
  fApr.titleBarCaptionColorDefault = '#9b9a9b';
  fApr.titleBarCaptionColorFocused = '#4d494d';

  fApr.titleBarHeight = '30px';

  fApr.titleBarColorDefault = null;
  fApr.titleBarColorFocused = null;

  fApr.titleBarBorderBottomDefault = 'solid 1px #aaaaaa';
  fApr.titleBarBorderBottomFocused = 'solid 1px #1883d7';

  fApr.frameBorderRadius = '0px';

  //border width
  fApr.frameBorderWidthDefault = '1px';
  fApr.frameBorderWidthFocused = '1px';


  //border color
  fApr.frameBorderColorDefault = '#aaaaaa';
  fApr.frameBorderColorFocused = '#1883d7';

  fApr.frameBorderStyle = 'solid';

  //window shadow
  fApr.frameBoxShadow = null;

  fApr.frameBackgroundColor = 'transparent';


  fApr.frameComponents = new Array();

  //adjustment value
  fApr.frameHeightAdjust = 0;//default is 1

  fApr.getTitleBarStyle = function() {

    if (fApr.focusedFrameOnly) {
      return {
        titleBarClassNameDefault: 'jsframe-preset-style-redstone-focused',
        titleBarClassNameFocused: 'jsframe-preset-style-redstone-focused'
      };
    } else {
      return {
        titleBarClassNameDefault: 'jsframe-preset-style-redstone-default',
        titleBarClassNameFocused: 'jsframe-preset-style-redstone-focused'
      };
    }
  };

  fApr.onInitialize = function() {


    var partsBuilder = fApr.getPartsBuilder();


    {
      //configure close button appearance[begin]//////////////

      var CROSS_MARK = '\u2573';

      var cbApr = partsBuilder.buildTextButtonAppearance();

      cbApr.width = 45;
      cbApr.height = 28;


      cbApr.borderRadius = 0;
      cbApr.borderWidth = 0;

      cbApr.borderColorDefault = '#c6c6c6';
      cbApr.borderColorFocused = '#fc615c';
      cbApr.borderColorHovered = cbApr.borderColorFocused;
      cbApr.borderColorPressed = '#e64842';

      cbApr.borderStyleDefault = 'solid';
      cbApr.borderStyleFocused = cbApr.borderStyleDefault;
      cbApr.borderStyleHovered = cbApr.borderStyleDefault;
      cbApr.borderStylePressed = cbApr.borderStyleDefault;

      //background
      cbApr.backgroundColorDefault = 'white';
      cbApr.backgroundColorFocused = 'white';
      cbApr.backgroundColorHovered = '#e81123';
      cbApr.backgroundColorPressed = '#f1707a';

      //caption
      cbApr.caption = CROSS_MARK;

      cbApr.captionColorDefault = '#9b9a9b';
      cbApr.captionColorFocused = 'black';
      cbApr.captionColorHovered = 'white';
      cbApr.captionColorPressed = 'white';

      cbApr.captionShiftYpx = 1;
      cbApr.captionFontRatio = 0.6;

      var closeBtnEle = partsBuilder.buildTextButton(cbApr);
      var eleLeft = 0;
      var eleTop = -parseInt(fApr.titleBarHeight);
      var eleAlign = 'RIGHT_TOP';

      // 'closeButton' is a special name
      fApr.addFrameComponent('closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);

      //configure close button appearance[end]//////////////
    }

    {
      //configure close button appearance[begin]//////////////

      var MAXIMIZE_MARK = '\u2610';

      var maxApr = partsBuilder.buildTextButtonAppearance();

      maxApr.width = 45;
      maxApr.height = 28;


      maxApr.borderRadius = 0;
      maxApr.borderWidth = 0;

      maxApr.borderColorDefault = '#c6c6c6';
      maxApr.borderColorFocused = '#fc615c';
      maxApr.borderColorHovered = maxApr.borderColorFocused;
      maxApr.borderColorPressed = '#e64842';

      maxApr.borderStyleDefault = 'solid';
      maxApr.borderStyleFocused = maxApr.borderStyleDefault;
      maxApr.borderStyleHovered = maxApr.borderStyleDefault;
      maxApr.borderStylePressed = maxApr.borderStyleDefault;

      //background
      maxApr.backgroundColorDefault = 'white';
      maxApr.backgroundColorFocused = 'white';
      maxApr.backgroundColorHovered = '#e5e5e5';
      maxApr.backgroundColorPressed = '#cccccc';

      //caption
      maxApr.caption = MAXIMIZE_MARK;

      maxApr.captionColorDefault = '#9b9a9b';
      maxApr.captionColorFocused = 'black';
      maxApr.captionColorHovered = 'black';
      maxApr.captionColorPressed = 'black';

      maxApr.captionShiftYpx = 1;
      maxApr.captionFontRatio = 0.55;

      var maxBtnEle = partsBuilder.buildTextButton(maxApr);
      var eleLeft = -46;
      var eleTop = -parseInt(fApr.titleBarHeight);
      var eleAlign = 'RIGHT_TOP';

      // 'closeButton' is a special name
      fApr.addFrameComponent('maximizeButton', maxBtnEle, eleLeft, eleTop, eleAlign);

      //configure close button appearance[end]//////////////
    }

    {
      //configure close button appearance[begin]//////////////

      var MINIMIZE_MARK = '\uff3f';

      var minApr = partsBuilder.buildTextButtonAppearance();

      minApr.width = 45;
      minApr.height = 28;


      minApr.borderRadius = 0;
      minApr.borderWidth = 0;

      minApr.borderColorDefault = '#c6c6c6';
      minApr.borderColorFocused = '#fc615c';
      minApr.borderColorHovered = minApr.borderColorFocused;
      minApr.borderColorPressed = '#e64842';

      minApr.borderStyleDefault = 'solid';
      minApr.borderStyleFocused = minApr.borderStyleDefault;
      minApr.borderStyleHovered = minApr.borderStyleDefault;
      minApr.borderStylePressed = minApr.borderStyleDefault;

      //background
      minApr.backgroundColorDefault = 'white';
      minApr.backgroundColorFocused = 'white';
      minApr.backgroundColorHovered = '#e5e5e5';
      minApr.backgroundColorPressed = '#cccccc';

      //caption
      minApr.caption = MINIMIZE_MARK;

      minApr.captionColorDefault = '#9b9a9b';
      minApr.captionColorFocused = 'black';
      minApr.captionColorHovered = 'black';
      minApr.captionColorPressed = 'black';

      minApr.captionShiftYpx = -2;
      minApr.captionFontRatio = 0.3;

      var minBtnEle = partsBuilder.buildTextButton(minApr);
      var eleLeft = -92;
      var eleTop = -parseInt(fApr.titleBarHeight);
      var eleAlign = 'RIGHT_TOP';

      // 'closeButton' is a special name
      fApr.addFrameComponent('minimizeButton', minBtnEle, eleLeft, eleTop, eleAlign);

      //configure close button appearance[end]//////////////
    }
    {
      //configure close button appearance[begin]//////////////


      var deminApr = partsBuilder.buildTextButtonAppearance();

      deminApr.width = 45;
      deminApr.height = 28;


      deminApr.borderRadius = 0;
      deminApr.borderWidth = 0;

      deminApr.borderColorDefault = '#c6c6c6';
      deminApr.borderColorFocused = '#fc615c';
      deminApr.borderColorHovered = deminApr.borderColorFocused;
      deminApr.borderColorPressed = '#e64842';

      deminApr.borderStyleDefault = 'solid';
      deminApr.borderStyleFocused = deminApr.borderStyleDefault;
      deminApr.borderStyleHovered = deminApr.borderStyleDefault;
      deminApr.borderStylePressed = deminApr.borderStyleDefault;

      //background
      deminApr.backgroundColorDefault = 'white';
      deminApr.backgroundColorFocused = 'white';
      deminApr.backgroundColorHovered = '#e5e5e5';
      deminApr.backgroundColorPressed = '#cccccc';

      //caption
      deminApr.caption = '\u25A3';

      deminApr.captionColorDefault = '#9b9a9b';
      deminApr.captionColorFocused = 'black';
      deminApr.captionColorHovered = 'black';
      deminApr.captionColorPressed = 'black';

      deminApr.captionShiftYpx = 1;
      deminApr.captionFontRatio = 0.6;

      var deminBtnEle = partsBuilder.buildTextButton(deminApr);
      var eleLeft = -92;
      var eleTop = -parseInt(fApr.titleBarHeight);
      var eleAlign = 'RIGHT_TOP';

      deminBtnEle.style.display = 'none';

      // 'closeButton' is a special name
      fApr.addFrameComponent('deminimizeButton', deminBtnEle, eleLeft, eleTop, eleAlign);

      //configure close button appearance[end]//////////////
    }
    {
      //configure close button appearance[begin]//////////////

      var RESTORE_MARK = '\u274F';

      var rbApr = partsBuilder.buildTextButtonAppearance();

      rbApr.width = 45;
      rbApr.height = 28;


      rbApr.borderRadius = 0;
      rbApr.borderWidth = 0;

      rbApr.borderColorDefault = '#c6c6c6';
      rbApr.borderColorFocused = '#fc615c';
      rbApr.borderColorHovered = rbApr.borderColorFocused;
      rbApr.borderColorPressed = '#e64842';

      rbApr.borderStyleDefault = 'solid';
      rbApr.borderStyleFocused = rbApr.borderStyleDefault;
      rbApr.borderStyleHovered = rbApr.borderStyleDefault;
      rbApr.borderStylePressed = rbApr.borderStyleDefault;

      //background
      rbApr.backgroundColorDefault = 'white';
      rbApr.backgroundColorFocused = 'white';
      rbApr.backgroundColorHovered = '#e5e5e5';
      rbApr.backgroundColorPressed = '#cccccc';

      //caption
      rbApr.caption = RESTORE_MARK;

      rbApr.captionColorDefault = '#9b9a9b';
      rbApr.captionColorFocused = 'black';
      rbApr.captionColorHovered = 'black';
      rbApr.captionColorPressed = 'black';

      rbApr.captionShiftYpx = 1;
      rbApr.captionFontRatio = 0.55;

      var restoreBtnEle = partsBuilder.buildTextButton(rbApr);
      var eleLeft = -46;
      var eleTop = -parseInt(fApr.titleBarHeight);
      var eleAlign = 'RIGHT_TOP';

      restoreBtnEle.style.display = 'none';

      // 'closeButton' is a special name
      fApr.addFrameComponent('restoreButton', restoreBtnEle, eleLeft, eleTop, eleAlign);

      //configure close button appearance[end]//////////////
    }


  };
  //

  return fApr;
}


module.exports.getStyle = getStyle;


/***/ }),

/***/ "./src/presets/appearance/PresetStyleToast.js":
/*!****************************************************!*\
  !*** ./src/presets/appearance/PresetStyleToast.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function getStyle(fApr) {


  fApr.showTitleBar = false;
  fApr.showCloseButton = true;


  fApr.titleBarCaptionFontSize = '0px';
  fApr.titleBarCaptionFontWeight = 'normal';
  fApr.titleBarCaptionLeftMargin = '0px';
  fApr.titleBarCaptionColorDefault = 'transparent';
  fApr.titleBarCaptionColorFocused = 'transparent';

  fApr.titleBarHeight = '0px';

  fApr.titleBarColorDefault = 'transparent';
  fApr.titleBarColorFocused = 'transparent';

  fApr.titleBarBorderBottomDefault = null;
  fApr.titleBarBorderBottomFocused = null;

  fApr.frameBorderRadius = '10px';

  //border width
  fApr.frameBorderWidthDefault = '0px';
  fApr.frameBorderWidthFocused = '0px';

  //border color
  fApr.frameBorderColorDefault = 'transparent';
  fApr.frameBorderColorFocused = 'transparent';
  fApr.frameBorderStyle = 'solid';
  fApr.frameBoxShadow = '2px 2px 15px  rgba(0, 0, 0, 0.5)';
  fApr.frameBackgroundColor = 'transparent';


  fApr.frameComponents = [];
  fApr.frameHeightAdjust = 1;//default is 1

  fApr.captionClor = 'darkgray';

  fApr.pullUpDisabled = false;

  fApr.getTitleBarStyle = function() {

    if (fApr.focusedFrameOnly) {
      return {
        titleBarClassNameDefault: ' ',
        titleBarClassNameFocused: ' '
      };
    } else {
      return {
        titleBarClassNameDefault: ' ',
        titleBarClassNameFocused: ' '
      };
    }
  };


  fApr.onInitialize = function() {


    var partsBuilder = fApr.getPartsBuilder();


    //configure close button appearance[begin]//////////////

    var crossMark0 = '\u274c';
    var crossMark1 = '\u2716';
    var crossMark2 = '\u274e';
    var CROSS_MARK = crossMark1;


    var cbApr = partsBuilder.buildTextButtonAppearance();

    cbApr.width = 20;
    cbApr.height = 20;


    cbApr.borderRadius = 10;
    cbApr.borderWidth = 0;

    cbApr.borderColorDefault = '#cccccc';
    cbApr.borderColorFocused = '#cccccc';
    cbApr.borderColorHovered = '#dddddd';
    cbApr.borderColorPressed = '#eeeeee';

    cbApr.borderStyleDefault = 'solid';
    cbApr.borderStyleFocused = cbApr.borderStyleDefault;
    cbApr.borderStyleHovered = cbApr.borderStyleDefault;
    cbApr.borderStylePressed = cbApr.borderStyleDefault;

    //background
    cbApr.backgroundColorDefault = 'transparent';
    cbApr.backgroundColorFocused = 'transparent';
    cbApr.backgroundColorHovered = 'transparent';
    cbApr.backgroundColorPressed = 'transparent';

    cbApr.backgroundBoxShadow = null;// '2px 2px 5px  rgba(0, 0, 0, 0.5)';

    //caption
    cbApr.caption = CROSS_MARK;

    cbApr.captionColorDefault = fApr.captionClor;
    cbApr.captionColorFocused = fApr.captionClor;
    cbApr.captionColorHovered = fApr.captionClor;
    cbApr.captionColorPressed = fApr.captionClor;

    cbApr.captionShiftYpx = 1;
    cbApr.captionFontRatio = 0.6;

    var closeBtnEle = partsBuilder.buildTextButton(cbApr);
    var eleLeft = -6;
    var eleTop = 3;
    var eleAlign = 'RIGHT_TOP';

    // 'closeButton' is a special name
    fApr.addFrameComponent('closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);

    //configure close button appearance[end]//////////////


  };
  //


  return fApr;
}


module.exports.getStyle = getStyle;


/***/ }),

/***/ "./src/presets/appearance/PresetStyleYosemite.css":
/*!********************************************************!*\
  !*** ./src/presets/appearance/PresetStyleYosemite.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./PresetStyleYosemite.css */ "./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStyleYosemite.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/presets/appearance/PresetStyleYosemite.js":
/*!*******************************************************!*\
  !*** ./src/presets/appearance/PresetStyleYosemite.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./PresetStyleYosemite.css */ "./src/presets/appearance/PresetStyleYosemite.css");
var ObjectAssigner = __webpack_require__(/*! ../../utils/ObjectAssigner.js */ "./src/utils/ObjectAssigner.js");

function getStyle(fApr, userParam) {

  var srcParam = {
    titleBar: {
      greenButton: 'maximize',//'maximize' or 'fullscreen'
    }
  };

  var param = srcParam;

  if (userParam) {
    //param=Object.assign({},srcParam, userParam);
    ObjectAssigner.objectAssign(srcParam, userParam);

  }

  fApr.showTitleBar = true;
  fApr.showCloseButton = true;

  fApr.titleBarCaptionFontSize = '11px';
  fApr.titleBarCaptionFontWeight = 'normal';
  fApr.titleBarCaptionLeftMargin = null;
  fApr.titleBarCaptionColorDefault = '#4d494d';
  fApr.titleBarCaptionColorFocused = '#4d494d';

  fApr.titleBarHeight = '26px';

  fApr.titleBarColorDefault = null;
  fApr.titleBarColorFocused = null;

  fApr.titleBarBorderBottomDefault = '1px solid #b1aeb1';
  fApr.titleBarBorderBottomFocused = fApr.titleBarBorderBottomDefault;

  fApr.frameBorderRadius = '6px';

  //border width
  fApr.frameBorderWidthDefault = '1px';
  fApr.frameBorderWidthFocused = '1px';


  //border color
  fApr.frameBorderColorDefault = '#acacac';
  fApr.frameBorderColorFocused = '#acacac';

  fApr.frameBorderStyle = 'solid';

  //window shadow
  fApr.frameBoxShadow = '0px 0px 20px rgba(0, 0, 0, 0.3)';

  fApr.frameBackgroundColor = 'transparent';


  fApr.frameComponents = new Array();

  fApr.getTitleBarStyle = function() {

    if (fApr.focusedFrameOnly) {
      return {
        titleBarClassNameDefault: 'jsframe-preset-style-yosemite-focused',
        titleBarClassNameFocused: 'jsframe-preset-style-yosemite-focused'
      };
    } else {
      return {
        titleBarClassNameDefault: 'jsframe-preset-style-yosemite-default',
        titleBarClassNameFocused: 'jsframe-preset-style-yosemite-focused'
      };
    }
  };

  fApr.onInitialize = function() {

    var partsBuilder = fApr.getPartsBuilder();

    var img_data_close_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAWElEQVQoU2NkIBIwEqmOAa6wgZWlH6Sp4fefQjCNxkdRyMjAUPCf4f8CkEJGBsaE/wwME2AaUaxuYGWeD1IAUgjS0PD7byLMaaQrBLmJKKuJ9gyhYCI6HAGlFDALf9s7eQAAAABJRU5ErkJggg==';
    var img_data_maximize_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAVElEQVQoU2NkIBIwoqvjixFoAIl9WvIBTMMAhkLeGP79IMnPSz46kq8QZN1/hv/2IBMYGRgMQPR/BoYLED7jQZAzwFYTrRDZLdRxI7KJRAcPrvAHAATYKgvLH0fAAAAAAElFTkSuQmCC';
    if (param.titleBar.greenButton === 'fullscreen') {
      img_data_maximize_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAZElEQVQoU2NkIBIwEqmOAUWhQIKAwL8///czMDAYwAz4tOQjWA1cIUjRhwUfPqArxlDIF8N/nomF0RFdMTaF/xkYGC6gK/605KMhitV8MfwghSCAohhkAy6FKIphniIvePCFKQDzGzsLS+7n2AAAAABJRU5ErkJggg==';
    }
    var img_data_demaximize_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAiUlEQVQoU2NkwAIEogQMPiz7cAFZihGbQt4Y/v0MjIwLPy/+sAAmj1MhIwODw39GxkSYYrwKQabBFGNVyBfL1///P6MBzFrmf4yFjCCH/2X63w93C+P/C58WfypEdzvYRN5YgQTG///ng61iYDjweclHR6wKkRUTVAhTzPD/fzxeE2FWYQtskBwAKwQ7tVjAL4MAAAAASUVORK5CYII=';
    var img_data_minimize_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAMUlEQVQoU2NkIBIwEqmOgUYKa7w4Ghj+M9hjdQYjw8GWbT8awFYTrZAYD9HIM8RYDQBsEAwLkq4IAgAAAABJRU5ErkJggg==';
    var img_data_1dot_transparent = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII=';
    var img_width = 10;
    var img_height = 10;
    var img_style = 'margin:0px;padding:0px;width:' + img_width + 'px;height:' + img_height + 'px';

    var imageMaximize = document.createElement('img');
    imageMaximize.src = img_data_maximize_hovered;
    imageMaximize.setAttribute('style', img_style);

    var imageDemaximize = document.createElement('img');
    imageDemaximize.src = img_data_demaximize_hovered;
    imageDemaximize.setAttribute('style', img_style);

    // var imageFullScreen = document.createElement('img');
    // imageFullScreen.src = img_data_maximize_hovered;
    // imageFullScreen.setAttribute('style', img_style);

    var imageMinimize = document.createElement('img');
    imageMinimize.src = img_data_minimize_hovered;
    imageMinimize.setAttribute('style', img_style);

    var imageClose = document.createElement('img');
    imageClose.src = img_data_close_hovered;
    imageClose.setAttribute('style', img_style);


    var imgTransparent = document.createElement('img');
    imgTransparent.src = img_data_1dot_transparent;
    imgTransparent.setAttribute('style', 'margin:0px;padding:0px;width:6px;height:6px');

    {
      //configure close button appearance[begin]//////////////


      var cbApr = partsBuilder.buildImageButtonAppearance();
      cbApr.imageDefault = imgTransparent;
      cbApr.imageHovered = imageClose;
      cbApr.imagePressed = imageClose;
      cbApr.imageFocused = imgTransparent;
      cbApr.size = 10;

      cbApr.borderRadius = 5;
      cbApr.borderWidth = 1;

      cbApr.borderColorDefault = '#c6c6c6';
      cbApr.borderColorFocused = '#d3524e';
      cbApr.borderColorHovered = cbApr.borderColorFocused;
      cbApr.borderColorPressed = '#e64842';

      cbApr.borderStyleDefault = 'solid';
      cbApr.borderStyleFocused = cbApr.borderStyleDefault;
      cbApr.borderStyleHovered = cbApr.borderStyleDefault;
      cbApr.borderStylePressed = cbApr.borderStyleDefault;

      //background
      cbApr.backgroundColorDefault = '#d0d0d0';
      cbApr.backgroundColorFocused = '#fc615c';
      cbApr.backgroundColorHovered = cbApr.backgroundColorFocused;
      cbApr.backgroundColorPressed = cbApr.backgroundColorDefault;
      cbApr.setSrc({
        default: img_data_1dot_transparent,
        focused: img_data_1dot_transparent,
        hovered: img_data_close_hovered,
        pressed: img_data_close_hovered,
      });

      var closeBtnEle = partsBuilder.buildButton(cbApr);
      var eleLeft = 8;
      var eleTop = -19;
      var eleAlign = 'LEFT_TOP';

      // 'closeButton' is a special name
      fApr.addFrameComponent(param.closeButtonName || 'closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);

      //prepare [minimize button]
      var minBtnApr = partsBuilder.buildImageButtonAppearance(cbApr);
      minBtnApr.borderColorDefault = '#c6c6c6';
      minBtnApr.borderColorFocused = '#e6b347';
      minBtnApr.borderColorHovered = minBtnApr.borderColorFocused;
      minBtnApr.borderColorPressed = '#e1a12d';
      minBtnApr.backgroundColorDefault = '#d0d0d0';
      minBtnApr.backgroundColorFocused = '#fdbe40';
      minBtnApr.backgroundColorHovered = minBtnApr.backgroundColorFocused;
      minBtnApr.backgroundColorPressed = minBtnApr.backgroundColorDefault;
      minBtnApr.imageDefault = imgTransparent;
      minBtnApr.imageHovered = imageMinimize;
      minBtnApr.imagePressed = imageMinimize;
      minBtnApr.imageFocused = imgTransparent;

      var minBtnEle = partsBuilder.buildButton(minBtnApr);
      var deminimizeBtnEle = partsBuilder.buildButton(minBtnApr);
      deminimizeBtnEle.style.display = 'none';
      var eleLeft = 28;
      var eleTop = -19;
      var eleAlign = 'LEFT_TOP';
      fApr.addFrameComponent('minimizeButton', minBtnEle, eleLeft, eleTop, eleAlign);
      fApr.addFrameComponent('deminimizeButton', deminimizeBtnEle, eleLeft, eleTop, eleAlign);


      // prepare [maximize button]
      //configure zoom button appearance[begin]//////////////
      var maxBtnApr = partsBuilder.buildImageButtonAppearance(cbApr);
      maxBtnApr.borderColorDefault = '#c6c6c6';
      maxBtnApr.borderColorFocused = '#67b657';
      maxBtnApr.borderColorHovered = maxBtnApr.borderColorFocused;
      maxBtnApr.borderColorPressed = '#00af38';
      maxBtnApr.backgroundColorDefault = '#d0d0d0';
      maxBtnApr.backgroundColorFocused = '#34ca49';
      maxBtnApr.backgroundColorHovered = maxBtnApr.backgroundColorFocused;
      maxBtnApr.backgroundColorPressed = maxBtnApr.backgroundColorDefault;
      maxBtnApr.imageDefault = imgTransparent;
      maxBtnApr.imageHovered = imageMaximize;
      maxBtnApr.imagePressed = imageMaximize;
      maxBtnApr.imageFocused = imgTransparent;

      var zoomBtnEle = partsBuilder.buildButton(maxBtnApr);


      var demaxBtnApr = partsBuilder.buildImageButtonAppearance(cbApr);
      demaxBtnApr.borderColorDefault = '#c6c6c6';
      demaxBtnApr.borderColorFocused = '#67b657';
      demaxBtnApr.borderColorHovered = demaxBtnApr.borderColorFocused;
      demaxBtnApr.borderColorPressed = '#00af38';
      demaxBtnApr.backgroundColorDefault = '#d0d0d0';
      demaxBtnApr.backgroundColorFocused = '#34ca49';
      demaxBtnApr.backgroundColorHovered = demaxBtnApr.backgroundColorFocused;
      demaxBtnApr.backgroundColorPressed = demaxBtnApr.backgroundColorDefault;
      demaxBtnApr.imageDefault = imgTransparent;
      demaxBtnApr.imageHovered = imageDemaximize;
      demaxBtnApr.imagePressed = imageDemaximize;
      demaxBtnApr.imageFocused = imgTransparent;
      var demaxBtnEle = partsBuilder.buildButton(demaxBtnApr);
      demaxBtnEle.style.display = 'none';

      var eleLeft = 48;
      var eleTop = -19;
      var eleAlign = 'LEFT_TOP';


      fApr.addFrameComponent('dezoomButton', demaxBtnEle, eleLeft, eleTop, eleAlign);
      fApr.addFrameComponent('zoomButton', zoomBtnEle, eleLeft, eleTop, eleAlign);

      //configure zoom button appearance[end]//////////////
    }
    //

  };
  //

  return fApr;
}

module.exports.getStyle = getStyle;


/***/ }),

/***/ "./src/presets/window/PresetWindowYosemite.js":
/*!****************************************************!*\
  !*** ./src/presets/window/PresetWindowYosemite.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mergeDeeply = __webpack_require__(/*! merge-deeply */ "./node_modules/merge-deeply/lib/merge-deeply.js");

function getPreset(param) {

  var result = {};
  result.appearanceName = 'yosemite';
  result.appearanceParam = {};

  var presetParam = {};

  if (param) {
    presetParam = param;
  }

  var isFullScreen = presetParam.maximizeButtonBehavior === 'fullscreen';
  var minimizeButton = presetParam.minimizeButtonBehavior === 'minimize' ? 'minimizeButton' : null;
  var hideButton1 = presetParam.minimizeButtonBehavior === 'hide' ? 'minimizeButton' : null;
  var hideButton2 = presetParam.closeButtonBehavior === 'hide' ? 'custom-close-button' : null;
  var windowControlParam = presetParam.control;

  var closeButtonNameByCloseButtonBehavior = hideButton2;
  var closeButtonName = presetParam.closeButtonName;

  if (isFullScreen) {
    result.appearanceParam.titleBar = {
      greenButton: 'fullscreen',//'maximize' icon or 'fullscreen' icon
    };
  }
  // Set this to 'closeButton' to automatically close when clicking
  result.appearanceParam.closeButtonName = closeButtonNameByCloseButtonBehavior || closeButtonName || 'closeButton';

  result.setupPresetWindow = function(frame) {
    var defaultWindowControlParam = {
      maximizeButton: 'zoomButton',
      maximizeParam: {
        fullScreen: isFullScreen,// true:maximized without title bar,false:maximized with title bar
        restoreKey: 'Escape',//Set key code from https://www.w3.org/TR/uievents-code/#keyboard-key-codes
      },

      demaximizeButton: 'dezoomButton',
      deminimizeButton: 'deminimizeButton',
      minimizeButton: minimizeButton,
      hideButtons: [hideButton1, hideButton2],
      hideParam: {
        align: 'CENTER_CENTER',//ABSOLUTE:If you want the window to disappear after transitioning to the position you specified

        duration: 300
      },
      dehideParam: {
        duration: 300
      },
      styleDisplay: 'inline',
      animation: true,
      animationDuration: 100,//The whole animation duration(millisec)
    };

    if (windowControlParam) {
      mergeDeeply({ op: 'overwrite-merge', object1: defaultWindowControlParam, object2: windowControlParam });
    }

    frame.setControl(defaultWindowControlParam);
  };
  return result;
}


module.exports.getPresetWindow = getPreset;


/***/ }),

/***/ "./src/utils/CSimpleLayoutAnimator.js":
/*!********************************************!*\
  !*** ./src/utils/CSimpleLayoutAnimator.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var CTimer = __webpack_require__(/*! ./CTimer.js */ "./src/utils/CTimer.js");

/**
 * CSimpleLayoutAnimator class
 * Class for moving animation · scaling animation of frame.
 * <p>
 * @constructor
 */
function CSimpleLayoutAnimator() {

  this.fps = 30;
  this.durationMillis = 200;
  this.targetFrame = null;

  this._crrAlpha = 1.0;
  this._toAlpha = 1.0;

  //current width/height
  this._crrWidth = 0;
  this._crrHeight = 0;
  this._toWidth = 0;
  this._toHeight = 0;

  //current position(x,y)
  //this._crrX = 0;
  //this._crrY = 0;
  this._toX = 0;
  this._toY = 0;


  this.pinnedAnimationEnabled = false;
  this._pinX = 0;
  this._pinY = 0;
  this._pinAnchor = null;

}

/**
 * Set CIFrame object to be resized
 * @param ciframe
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.set = function(ciframe) {
  var me = this;
  me.targetFrame = ciframe;


  me.fromWidth(ciframe.getWidth());
  me.fromHeight(ciframe.getHeight());

  me.toWidth(ciframe.getWidth());
  me.toHeight(ciframe.getHeight());

  var crrPos = ciframe.getPosition();

  me.fromPosition(crrPos.x, crrPos.y, crrPos.anchor);


  return me;

};

/**
 * Get CIFrame object
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.get = function() {
  var me = this;
  return me.targetFrame;
};

/**
 * Set animation duration time millis
 * @param durationMillis
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.setDuration = function(durationMillis) {
  var me = this;

  me.durationMillis = durationMillis;
  return me;
};

/**
 * Set expected FPS
 * @param fps
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.setFPS = function(fps) {
  var me = this;
  me.fps = fps;
  return me;
};

/**
 * Set PIN position
 * @param x
 * @param y
 * @param anchor Position where animation starts from.Expected parameters as follows.
 'LEFT_TOP':Default.Specify the position starting from the upper left.
 'CENTER_TOP'
 'RIGHT_TOP'
 'LEFT_CENTER'
 'CENTER_CENTER'
 'RIGHT_CENTER'
 'LEFT_BOTTOM'
 'CENTER_BOTTOM'
 'RIGHT_BOTTOM'
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromPosition = function(x, y, anchor) {
  var me = this;
  me.pinnedAnimationEnabled = true;

  me._pinX = x;
  me._pinY = y;

  me.toPosition(x, y);

  if (anchor) {
    me._pinAnchor = anchor;
  }
  return me;
};
/**
 * Set resizeFrom width
 * @param fromWidth
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromWidth = function(fromWidth) {
  var me = this;
  me._crrWidth = fromWidth;

  return me;
};

/**
 * Set resizeFrom height
 * @param fromHeight
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromHeight = function(fromHeight) {
  var me = this;
  me._crrHeight = fromHeight;

  return me;
};

/**
 * Set resizeTo width
 * @param toWidth
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toWidth = function(toWidth) {
  var me = this;
  me._toWidth = toWidth;

  return me;
};

/**
 * Set resizeTo height
 * @param toHeight
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toHeight = function(toHeight) {
  var me = this;
  me._toHeight = toHeight;
  return me;
};

/**
 * Set from alpha
 * @param fromAlpha
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromAlpha = function(fromAlpha) {
  var me = this;
  me._crrAlpha = fromAlpha;

  return me;
};

/**
 * Set to alpha
 * @param toAlpha
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toAlpha = function(toAlpha) {
  var me = this;
  me._toAlpha = toAlpha;

  return me;
};

/**
 * Get CIFrame object
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.ease = function(ease) {
  var me = this;
  me._ease=ease;
  return me;
};

/**
 * Set move to position
 * @param x
 * @param y
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toPosition = function(x, y) {
  var me = this;
  me._toX = x;
  me._toY = y;
  return me;
};

/**
 * Set move to x
 * @param x
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toX = function(x) {
  var me = this;
  me._toX = x;
  return me;
};

/**
 * Set move to y
 * @param t
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toY = function(t) {
  var me = this;
  me._toY = t;
  return me;
};


CSimpleLayoutAnimator.prototype.start = function(waitMillis, requestFocusEnabled) {


  var me = this;

  var fromWidth = me._crrWidth;
  var fromHeight = me._crrHeight;

  var fromX = me._pinX;
  var fromY = me._pinY;

  var fromAlpha = me._crrAlpha;


  return new Promise(function(resolve, reject) {


    var numOfSteps = parseInt(me.fps * (me.durationMillis / 1000));
    if (numOfSteps == 0) {
      numOfSteps = 1;
    }

    var deltaWidth = (me._toWidth - fromWidth) / numOfSteps;
    var deltaHeight = (me._toHeight - fromHeight) / numOfSteps;

    var deltaX = (me._toX - fromX) / numOfSteps;
    var deltaY = (me._toY - fromY) / numOfSteps;

    var deltaAlpha = (me._toAlpha - fromAlpha) / numOfSteps;
    if(me._ease){
      deltaAlpha=deltaAlpha/1.24;
    }

    var unitMillis = me.durationMillis / numOfSteps;

    var idx = 0;


    function loop() {
      var timer = new CTimer();

      timer.setIntervalMillis(unitMillis);

      timer.setCallback(function(timer) {

        if (idx == numOfSteps) {

          var _width = me._toWidth;
          var _height = me._toHeight;

          var _x = fromX + deltaX * idx;
          var _y = fromY + deltaY * idx;

          var _alpha = me._toAlpha;

          if (me.pinnedAnimationEnabled) {
            //me.targetFrame._setPositionInternally(me._pinX, me._pinY, me._pinAnchor, _width, _height);

            me.targetFrame._setPositionInternally(_x, _y, me._pinAnchor, _width, _height);
          }


          if (me.targetFrame.htmlElement.style) {
            me.targetFrame.htmlElement.style.opacity = _alpha;
          }

          //me.targetFrame.resizeDirect(_width, _height,false);
          me.targetFrame.setSize(_width, _height, true);

          me._crrWidth = _width;
          me._crrHeight = _height;

          me._pinX = _x;
          me._pinY = _y;
        }

        if (idx == (numOfSteps + 1)) {
          //Stop timer after last draw update.
          timer.stopTimer();

          if (me.targetFrame.htmlElement.style) {
            me.targetFrame.htmlElement.style.opacity = me._toAlpha;
          }
          resolve(me);
          return;
        }


        var _width = fromWidth + deltaWidth * idx;
        var _height = fromHeight + deltaHeight * idx;

        var _x = fromX + deltaX * idx;
        var _y = fromY + deltaY * idx;

        var _alpha = fromAlpha + deltaAlpha * idx;

        if (me.pinnedAnimationEnabled) {
          //me.targetFrame._setPositionInternally(me._pinX, me._pinY, me._pinAnchor, _width, _height);
          me.targetFrame._setPositionInternally(_x, _y, me._pinAnchor, _width, _height);
        }

        if (me.targetFrame.htmlElement.style) {
          me.targetFrame.htmlElement.style.opacity = _alpha;
        }

        //me.targetFrame.resizeDirect(_width, _height,false);
        me.targetFrame.setSize(_width, _height, true);

        if (idx == 0) {

          //check window existence
          var wmgr = me.targetFrame.parentCanvas;
          if (wmgr) {
            var _targetFrame = wmgr.getWindow(me.targetFrame.id);
            if (_targetFrame) {
              me.targetFrame.show({ requestFocus: requestFocusEnabled });
            } else {
              //the target window must be deleted.
            }
          }
        }

        idx++;
      });


      timer.startTimer();
    }

    if (waitMillis) {

      var waiter = new CTimer();
      waiter.setIntervalMillis(waitMillis);
      waiter.setCallback(function(_timer) {
        _timer.stopTimer();

        loop();
      });
      waiter.startTimer();
    } else {
      loop();
    }


  });

};//start

/**
 * end of CSimpleLayoutAnimator class
 */
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


module.exports = CSimpleLayoutAnimator;


/***/ }),

/***/ "./src/utils/CTimer.js":
/*!*****************************!*\
  !*** ./src/utils/CTimer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * CTimer class<br>
 *
 * How to use:
 *  var timer = new CTimer();
 *    var value = 0;
 *
 *    timer.setCallback(function (timerObj) {
 *        value++;
 *        console.log(value);
 *        if (value == 100) {
 *            timerObj.stopTimer();
 *        }
 *    });
 *    timer.setIntervalMillis(100);
 *    timer.startTimer();
 *
 * @author Tom Misawa (riversun.org@gmail.com)
 */
var CTimer =
  (function() {
    function CTimer() {
      var me = this;

      me._timerId = null;
      me._isRunning = false;
      me._timerInterval = 0;

      me._internalCallback = _internalCallback;
      me._timerMethod = null;


      function _internalCallback() {
        if (me._timerMethod) {
          me._timerMethod(me);
        }
        if (me._isRunning) {
          clearTimeout(me._timerId);
          me._timerId = setTimeout(me._internalCallback, me._timerInterval);
        }
      }
    }

    CTimer.prototype.setCallback = function(callback_func) {
      var me = this;
      me._timerMethod = callback_func;
      return me;
    };

    CTimer.prototype.setIntervalMillis = function(interval) {
      var me = this;
      me._timerInterval = interval;
      return me;
    };

    CTimer.prototype.stopTimer = function() {
      var me = this;
      me._isRunning = false;
      return me;
    };

    CTimer.prototype.startTimer = function() {
      var me = this;
      if (me._timerInterval > 0) {
        me._timerId = setTimeout(me._internalCallback, me._timerInterval);
        me._isRunning = true;

      }
      return me;
    };


    return CTimer;
  })();
/**
 * end of CTimer class
 */
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
module.exports = CTimer;


/***/ }),

/***/ "./src/utils/Inherit.js":
/*!******************************!*\
  !*** ./src/utils/Inherit.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Inheritance function
 *
 * @param subClass
 * @param baseClass
 */
function inherit(subClass, baseClass) {

  function clazz() {
  }

  clazz.prototype = baseClass.prototype;
  subClass.prototype = new clazz();

  subClass.prototype.constructor = subClass;
  subClass.superConstructor = baseClass;
  subClass.superClass = baseClass.prototype;

}

/**
 * End of inheritance function
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

module.exports = inherit;

/***/ }),

/***/ "./src/utils/ObjectAssigner.js":
/*!*************************************!*\
  !*** ./src/utils/ObjectAssigner.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _typeof =
    typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
        ? function (obj) {
            return typeof obj;
        }
        : function (obj) {
            return obj &&
            typeof Symbol === "function" &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
        };

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

function isObject(item) {
    return (
        item &&
        (typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" &&
        !Array.isArray(item)
    );
}

function objectAssign(target) {
    for (
        var _len = arguments.length,
            sources = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
        _key < _len;
        _key++
    ) {
        sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (var key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
                objectAssign(target[key], source[key]);
            } else {
                Object.assign(target, _defineProperty({}, key, source[key]));
            }
        }
    }
    return objectAssign.apply(undefined, [target].concat(sources));
}



module.exports.objectAssign = objectAssign;


/***/ }),

/***/ "./src/utils/WindowEventHelper.js":
/*!****************************************!*\
  !*** ./src/utils/WindowEventHelper.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CSimpleLayoutAnimator = __webpack_require__(/*! ./CSimpleLayoutAnimator.js */ "./src/utils/CSimpleLayoutAnimator.js");
var CALIGN = __webpack_require__(/*! ../CCommon.js */ "./src/CCommon.js");
var mergeDeeply = __webpack_require__(/*! merge-deeply */ "./node_modules/merge-deeply/lib/merge-deeply.js");
var EventListenerHelper = __webpack_require__(/*! event-listener-helper */ "./node_modules/event-listener-helper/lib/event-listener-helper.js");

function WindowEventHelper(model) {

  this.eventListenerHelper = new EventListenerHelper();
  this.windowMode = 'default';
  this.styleDisplay = 'flex';
  this.horizontalAlign = 'left';
  this.verticalAlign = 'top';

  this.keyListener = null;

  this.minimizeButton = null;
  this.maximizeButton = null;
  this.demaximizeButton = null;
  this.deminimizeButton = null;

  this.opts = model;

  this.isWindowManagerFixed = model.frame.jsFrame.isWindowManagerFixed;

  if (model.styleDisplay) {
    this.styleDisplay = model.styleDisplay;
  }
  if (model.minimizeButton) {
    this.minimizeButton = model.minimizeButton;
  }
  if (model.deminimizeButton) {
    this.deminimizeButton = model.deminimizeButton;
  }
  if (model.maximizeButton) {
    this.maximizeButton = model.maximizeButton;
  }
  if (model.demaximizeButton) {
    this.demaximizeButton = model.demaximizeButton;
  }

  if (model.hideButton) {
    this.hideButton = model.hideButton;
  }
  if (model.hideButtons) {
    this.hideButtons = model.hideButtons;
  }

  this.maximizeParam = model.maximizeParam;
  this.demaximizeParam = model.demaximizeParam;
  this.minimizeParam = model.minimizeParam;
  this.deminimizeParam = model.deminimizeParam;
  this.hideParam = model.hideParam;
  this.dehideParam = model.dehideParam;


  if (model.horizontalAlign) {
    this.horizontalAlign = model.horizontalAlign;
  }
  if (model.verticalAlign) {
    this.verticalAlign = model.verticalAlign;
  }


  this.animationEnabled = false;
  this.animationDuration = 100;
  this.frame = model.frame;
  this.hideFrameBorder = true;
  this.hideTitleBar = true;

  this.restoreKey = null;
  this.restoreDuration = null;
  this.restoreCallback = null;

  this.statsStore = {};

  if (model.animation) {
    this.animationEnabled = model.animation;
  }
  if (model.animationDuration) {
    this.animationDuration = model.animationDuration;
  }
  this.eventListeners = {};


  //If the user changes the window size when the window is maximized state,
  // adjust the size so that window looks maximized.
  this.resizeListener = this.handleOnResize.bind(this);

  if (this.maximizeParam && this.maximizeParam.matchParent) {
    this.resizeListener = this.handleOnVirtualResize.bind(this);
  }


}

WindowEventHelper.MATCH_PARENT_CHANGE_MARKER_ATTR = '__jsframe-mp-marker';

WindowEventHelper.prototype.on = function(eventType, callback) {
  var me = this;
  me.eventListeners[eventType] = callback;
};

//---------------------------------------------------------------------------------------------------------------------
WindowEventHelper.prototype.doMaximize = function(model) {
  var me = this;

  if (me.windowMode === 'hid') {
    throw Error('[JSrame] It is not possible to change directly from the hid state to the maximized state');
    return;
  }


  if (me.windowMode === 'maximized' || me.windowMode === 'maximizing') {
    // If it's already 'maximized' status, it doesn't do anything.
    return;
  }

  me.windowMode = 'maximizing';


  var frame = me.frame;

  if (model && model.matchParent) {
    // The div element does not issue the resize event. Furthermore,
    // div is specified as 100%, so style.width is always 100%.
    // So I want to get the clientWidth but I can't get it with mutationObserver.
    // Therefore, we adopt a mechanism to catch the parent window
    // resize event and change the attribute of the parent window content
    // by differentiation to catch it.
    var windowManager = frame.getWindowManager();
    var parentElement = windowManager.getParentElement();

    if (!me.matchParentResizeObserver) {
      var matchParentResizeObserver = new MutationObserver(function() {
        // console.log("on virtual resize");
        me.resizeListener();
      });
      matchParentResizeObserver.observe(parentElement, {
        attributeFilter: [WindowEventHelper.MATCH_PARENT_CHANGE_MARKER_ATTR],
        attributes: true
      });
      me.matchParentResizeObserver = matchParentResizeObserver;
    }
  }
    //set onresize listener
  //window.addEventListener('resize', me.resizeListener);
  else if (!me.eventListenerHelper.hasEventListener(window, 'resize', 'window-resize-listener')) {
    me.eventListenerHelper.addEventListener(window, 'resize', me.resizeListener,
      { listenerName: 'window-resize-listener' });
  }

  //Remember the status of the window before maximizing the window size
  me.saveCurrentWindowStats('maximize_mode');

  me.hideTitleBar = model ? model.fullScreen : false;

  if (me.hideTitleBar) {

    //Hide only the currently visible FrameComponent
    //ウィンドウのモードを変更する前の今の状態で可視状態にあるフレームコンポーネント（閉じるボタン類）を不可視にする
    //(タイトルバー非表示の場合には最大化するときのアニメーションでフレームコンポーネントを見せないようにする)
    frame.hideAllVisibleFrameComponents();

    //またhideAllVisibleFrameComponentを実施するときに、個別のhideFrameComponentやshowFrameComponentを実行すると
    //管理ステートが破綻するため、タイトルバー非表示の場合はどうせ操作できないということもあり
    //hideFrameComponent や showFrameComponentは実行しない

  } else {

    //Process required for maximization
    if (me.maximizeButton) {
      frame.hideFrameComponent(me.maximizeButton);
    }
    if (me.demaximizeButton) {
      frame.showFrameComponent(me.demaximizeButton, me.styleDisplay);
    }
  }


  frame.setMovable(false);
  frame.setResizable(false);


  if (model && model.restoreKey) {
    me.restoreKey = model.restoreKey;
  }
  if (model && model.restoreDuration) {
    me.restoreDuration = model.restoreDuration;
  }
  if (model && model.restoreCallback) {
    me.restoreCallback = model.restoreCallback;
  }
  //Render maximization itself
  me.renderMaximizedMode({
    animation: me.animationEnabled,
    callback: (model && model.callback) ? model.callback : null, //set maximized finished callback
    duration: (model && model.duration) ? model.duration : null,
    matchParent: (model && model.matchParent) ? model.matchParent : false,
  });
};


/**
 * Render window as a maximized mode( full screen )
 */
WindowEventHelper.prototype.renderMaximizedMode = function(model) {
  var me = this;
  var frame = me.frame;
  var from = me.loadWindowStats('maximize_mode');

  var _toX = 0;
  var _toY = 0;
  var _toWidth = 0;
  var _toHeight = 0;

  //compute position and size[begin]
  if (me.hideTitleBar) {
    _toX = 0;
    _toY = -from.titleBarHeight;
  }

  var parentWidth = window.innerWidth;
  var parentHeight = window.innerHeight;

  if (model.matchParent) {
    // If matchParent is specified
    // When maximizing, use the size of parentElement specified at initialization
    // ParentlElement is often used only for adjusting the display order.
    // Therefore, only if matchParent is specified, match the size of parentElement
    var windowManager = frame.getWindowManager();
    var parentElement = windowManager.getParentElement();
    parentWidth = parentElement.clientWidth;
    parentHeight = parentElement.clientHeight;
  }

  if (me.hideFrameBorder) {
    _toWidth = parentWidth;
    _toHeight = parentHeight + (me.hideTitleBar ? from.titleBarHeight : 0);
  } else {
    _toWidth = parentWidth - from.frameBorderWidthDefault * 2;
    _toHeight = parentHeight - from.frameBorderWidthDefault * 2 + (me.hideTitleBar ? from.titleBarHeight : 0);
  }
  //compute position and size[end]

  if (me.horizontalAlign == 'right') {
    _toX = -_toWidth;
  }
  if (me.verticalAlign == 'bottom') {
    _toY = -_toHeight;
  }


  //render position and size[begin]
  var funcDoRender = function(opt) {

    var disableCallback = opt && opt.disableCallback;

    frame.setPosition(_toX, _toY);

    if (me.hideFrameBorder) {
      frame.frameBorderWidthDefault = 0;
      frame.frameBorderWidthFocused = 0;
      frame.htmlElement.style.borderWidth = '0px';
    }
    frame.setSize(_toWidth, _toHeight, true);

    if (disableCallback) {
      return;
    }

    if (me.hideTitleBar) {
      // when full screen mode(means hidden title bar)

      if (me.restoreKey) {
        me.keyListener = function(event) {
          if (event.code === me.restoreKey) {
            me.doCommand('restore');
          }
        };
      }
      window.addEventListener('keydown', me.keyListener);

      //add keylistener for inside the iframe
      if (frame.iframe) {
        frame.iframe.contentWindow.addEventListener('keydown', me.keyListener);
      }
    }

    me.windowMode = 'maximized';


    if (model && model.callback) {
      model.callback(me.frame, { eventType: 'maximized' });
    }
    if (me.eventListeners['maximized']) {
      me.eventListeners['maximized'](me.frame, { eventType: 'maximized' });
    }

  };// end of funcDoRender


  if (model && model.animation) {


    me.animateFrame({
      frame: frame,
      from: from,
      to: {
        left: _toX,
        top: _toY,
        width: _toWidth,
        height: _toHeight
      },
      duration: model.duration ? model.duration : me.animationDuration,
      callback: funcDoRender
    });
  } else {
    if (model && model.caller === 'handleOnResize') {
      funcDoRender({ disableCallback: true });
    } else {
      funcDoRender();
    }
  }
  //render position and size[end]
};

WindowEventHelper.prototype.getWindowMode = function() {
  return this.windowMode;
};
/**
 * Restore window from maximized mode
 */
WindowEventHelper.prototype.doDemaximize = function(model) {
  var me = this;
  var frame = me.frame;

  if (me.windowMode === 'hid') {
    //console.error('demaximize(=recovery from maximized) cannot be performed in hid state.');
    throw Error('[JSFrame] demaximize(=recovery from maximized) cannot be performed in hid state.');
    return;
  }

  if (!me.hasWindowStats('maximize_mode')) {
    return;
  }

  if (me.hideTitleBar) {

  } else {
    if (me.maximizeButton) {
      frame.showFrameComponent(me.maximizeButton, me.styleDisplay);
    }
    if (me.demaximizeButton) {
      frame.hideFrameComponent(me.demaximizeButton);
    }
  }

  me.restoreWindow({
    restorePosition: true,
    restoreMode: 'maximize_mode',
    animation: me.animationEnabled,
    callback: (model && model.callback) ? model.callback : null,
    forceShowFrameComponents: (me.animationEnabled && me.hideTitleBar),
    duration: (model && model.duration) ? model.duration : null,
    eventType: 'demaximized'
  });
};


/**
 * Called when changing the window size by user operation in maximized mode
 */
WindowEventHelper.prototype.handleOnResize = function() {
  var me = this;
  me.renderMaximizedMode({
    caller: 'handleOnResize',
    //matchParent: true
  });
};
WindowEventHelper.prototype.handleOnVirtualResize = function() {
  var me = this;
  me.renderMaximizedMode({
    caller: 'handleOnResize',
    matchParent: true
  });
};

//---------------------------------------------------------------------------------------------------------------------

/**
 * Make window minimized mode
 */
WindowEventHelper.prototype.doMinimize = function(model) {
  var me = this;

  if (me.windowMode === 'minimized' || me.windowMode === 'minimizing') {
    // If it's already 'minimized' status, it doesn't do anything.
    return;
  }

  me.windowMode = 'minimizing';


  var frame = me.frame;

  //Remember the stats of the window before maximizing the window
  me.saveCurrentWindowStats('minimize_mode');


  frame.setResizable(false);

  me.renderMinimizedMode({
    animation: me.animationEnabled,
    callback: (model && model.callback) ? model.callback : null,
    duration: (model && model.duration) ? model.duration : null,
    toWidth: (model && model.toWidth) ? model.toWidth : null,
  });
};


/**
 * Render window as minimized mode
 */
WindowEventHelper.prototype.renderMinimizedMode = function(model) {
  var me = this;
  var frame = me.frame;
  var ri = me.loadWindowStats('minimize_mode');

  var from = me.getCurrentWindowStats();
  var to = me.getCurrentWindowStats();

  to.height = ri.titleBarHeight;
  if (model && model.toWidth) {
    to.width = model.toWidth
  }

  var funcDoRender = function() {
    var forceSetSize = true;
    frame.setSize(to.width, to.height, forceSetSize);

    me.windowMode = 'minimized';

    if (me.minimizeButton) {
      frame.hideFrameComponent(me.minimizeButton);
    }

    if (me.deminimizeButton) {
      frame.showFrameComponent(me.deminimizeButton, me.styleDisplay);
    }

    if (model.callback) {
      model.callback(me.frame, { eventType: 'minimized' });
    }
    if (me.eventListeners['minimized']) {
      me.eventListeners['minimized'](me.frame, { eventType: 'minimized' });
    }
  };

  if (model && model.animation) {
    me.animateFrame({
      toAlpha: 1.0,
      duration: model.duration ? model.duration : me.animationDuration,
      frame: frame,
      from: from,
      to: to,
      callback: funcDoRender
    });
  } else {
    funcDoRender();
  }


};


/**
 * Restore window from minimized mode
 */
WindowEventHelper.prototype.doDeminimize = function(model) {
  var me = this;

  var frame = me.frame;

  if (!me.hasWindowStats('minimize_mode')) {
    return;
  }

  if (me.minimizeButton) {
    frame.showFrameComponent(me.minimizeButton, me.styleDisplay);
  }
  if (me.deminimizeButton) {
    frame.hideFrameComponent(me.deminimizeButton);
  }

  me.restoreWindow(
    {
      restorePosition: false,
      restoreMode: 'minimize_mode',
      animation: me.animationEnabled,
      duration: (model && model.duration) ? model.duration : null,
      callback: (model && model.callback) ? model.callback : null,
      eventType: 'deminimized'
    });
};

//---------------------------------------------------------------------------------------------------------------------
/**
 * Make window hidden mode
 */
WindowEventHelper.prototype.doHide = function(model) {

  var me = this;

  if (me.windowMode === 'hid' || me.windowMode === 'hiding') {
    // If it's already 'hid' status, it doesn't do anything.
    return;
  }

  me.windowMode = 'hiding';

  var frame = me.frame;

  //Remember the stats of the window before maximizing the window
  me.saveCurrentWindowStats('hide_mode');


  frame.setResizable(false);


  var arg = {
//    silent: model.silent,
    animation: me.animationEnabled,
    // duration: (model && model.duration) ? model.duration : null,
    // callback: (model && model.callback) ? model.callback : null,
    // align: (model && model.align) ? model.align : null,
    // offset: (model && model.align) ? model.offset : null,
  };
  if (model) {
    mergeDeeply({ op: 'overwrite-merge', object1: arg, object2: model });
  }
  me.renderHideMode(arg);
};


/**
 * Render window as hidden mode
 */
WindowEventHelper.prototype.renderHideMode = function(model) {
  var me = this;
  var frame = me.frame;
  var ri = me.loadWindowStats('hide_mode');

  var from = me.getCurrentWindowStats();

  var offset = { x: 0, y: 0 };
  var toElement = model.toElement;

  if (model.offset) {
    offset = model.offset;
  }

  var left = 0;
  var top = 0;
  {
    var align = (model && model.align) ? model.align : 'LEFT_TOP';


    if (!align || CALIGN.LEFT_TOP == align) {
      left = from.left;
      top = from.top;
    } else if (CALIGN.HCENTER_TOP == align) {
      left = from.left + from.width / 2;
      top = from.top;
    } else if (CALIGN.RIGHT_TOP == align) {
      left = from.left + from.width;
      top = from.top;
    } else if (CALIGN.LEFT_VCENTER == align) {
      left = from.left;
      top = from.top + from.height / 2;
    } else if (CALIGN.HCENTER_VCENTER == align) {
      left = from.left + from.width / 2;
      top = from.top + from.height / 2;
    } else if (CALIGN.RIGHT_VCENTER == align) {
      left = from.left + from.width;
      top = from.top + from.height / 2;
    } else if (CALIGN.LEFT_BOTTOM == align) {
      left = from.left;
      top = from.top + from.height;
    } else if (CALIGN.HCENTER_BOTTOM == align) {
      left = from.left + from.width / 2;
      top = from.top + from.height;
    } else if (CALIGN.RIGHT_BOTTOM == align) {
      left = from.left + from.width;
      top = from.top + from.height;

    } else if ('ABSOLUTE' == align) {
      if (toElement) {
        var elementRect = toElement.getBoundingClientRect();
        if (me.isWindowManagerFixed) {
          left = elementRect.left;
          top = elementRect.top;
        } else {
          left = elementRect.left + window.pageXOffset;
          top = elementRect.top + window.pageYOffset;
        }
      } else {
        left = offset.x;
        top = offset.y;
      }
    }

  }

  var to = {
    left: left,
    top: top,
    width: 0,
    //minimum height must be titleBarHeight
    height: ri.titleBarHeight
  };

  var funcDoRender = function() {
    var forceSetSize = true;
    frame.setSize(to.width, to.height, forceSetSize);
    //frame.hide();

    me.windowMode = 'hid';

    if (model && model.callback) {
      model.callback(me.frame, { eventType: 'hid' });
    }
    if (me.eventListeners['hid']) {
      me.eventListeners['hid'](me.frame, { eventType: 'hid' });
    }
  };

  //Hide only the currently visible FrameComponent
  frame.hideAllVisibleFrameComponents();

  if (model && model.animation) {
    me.animateFrame({
      fromAlpha: model.silent ? 0 : 1.0,
      toAlpha: 0,
      ease: true,
      duration: model.duration ? model.duration : me.animationDuration,
      frame: frame,
      from: from,
      to: to,
      callback: funcDoRender
    });
  } else {
    funcDoRender();
  }


};


/**
 * Restore window from hided mode
 */
WindowEventHelper.prototype.doDehide = function(model) {
  var me = this;
  var frame = me.frame;

  if (!me.hasWindowStats('hide_mode')) {
    return;
  }

  me.restoreWindow(
    {
      duration: (model && model.duration) ? model.duration : null,
      restorePosition: true,
      restoreMode: 'hide_mode',
      animation: me.animationEnabled,
      forceShowFrameComponents: true,
      callback: (model && model.callback) ? model.callback : null,
      eventType: 'dehided'
    });
};
//---------------------------------------------------------------------------------------------------------------------
WindowEventHelper.prototype.loadWindowStats = function(storeKeyName) {
  var me = this;
  return me.statsStore[storeKeyName];
};


/**
 * Remember the status of the window before maximizing or minimizing the window size
 * @param storeKeyName
 * @returns {boolean} Returns true if the status of the window has been updated or is a new status.
 * Returns false if the status has not been updated.
 */
WindowEventHelper.prototype.saveCurrentWindowStats = function(storeKeyName) {
  var me = this;

  var crrWindowStats = me.getCurrentWindowStats();

  if (me.hasWindowStats(storeKeyName)) {

    var storedStats = me.loadWindowStats(storeKeyName);
    var isWindowStatsUpdated = !me.windowStatsEquals(crrWindowStats, storedStats);

    if (isWindowStatsUpdated) {
      me.statsStore[storeKeyName] = crrWindowStats;
    }

    return isWindowStatsUpdated;

  } else {
    me.statsStore[storeKeyName] = crrWindowStats;
    return true;
  }


};

WindowEventHelper.prototype.windowStatsEquals = function(windowStats1, windowStats2) {

  if (windowStats1 && windowStats2) {
    var result = JSON.stringify(windowStats1) === JSON.stringify(windowStats2);
    return result;
  } else {
    return false;
  }

};

WindowEventHelper.prototype.clearWindowStats = function(storeKeyName) {
  var me = this;
  me.statsStore[storeKeyName] = null;
};

WindowEventHelper.prototype.hasWindowStats = function(storeKeyName) {
  var me = this;
  return me.statsStore[storeKeyName];
};

WindowEventHelper.prototype.getCurrentWindowStats = function() {
  var me = this;
  var frame = me.frame;

  //Acquire window's stats
  var __titleBarHeight = parseInt(frame.titleBar.style.height, 10);
  var __frameBorderWidthDefault = frame.frameBorderWidthDefault;// parseInt(frame.htmlElement.style.borderWidth, 10);
  var __frameBorderWidthFocused = frame.frameBorderWidthFocused;
  var __left = frame.getLeft();
  var __top = frame.getTop();
  var __width = frame.getWidth();
  var __height = frame.getHeight();
  var __resizable = frame.resizable;
  var __movable = frame.movable;


  return {
    left: __left,
    top: __top,
    width: __width,
    height: __height,
    titleBarHeight: __titleBarHeight,
    frameBorderWidthDefault: __frameBorderWidthDefault,
    frameBorderWidthFocused: __frameBorderWidthFocused,
    resizable: __resizable,
    movable: __movable,
  };
};


/**
 * Restore the state of the window
 * @param model
 */
WindowEventHelper.prototype.restoreWindow = function(model) {
  var me = this;
  var frame = me.frame;
  var to = me.loadWindowStats(model.restoreMode);
  //現在の状態を一時保存する
  //me.saveCurrentWindowStats('temp');
  var crr = me.getCurrentWindowStats();//loadWindowStats('temp');


  //以下の3つは、ボーダーを太さを変更するためのものだが
  // funcDoRender内で処理してしまうとアニメーション中にはボーダーが描かれなくなる
  //アニメーション中にはボーダーは復活していたほうが自然なのでfuncDoRender外で実行する
  frame.frameBorderWidthDefault = to.frameBorderWidthDefault;
  frame.frameBorderWidthFocused = to.frameBorderWidthFocused;
  frame.htmlElement.style.borderWidth = frame.frameBorderWidthFocused;

  var funcDoRender = function() {


    if (model && model.restorePosition == false) {
      //位置の移動を伴わない場合（最小化から戻すときなど)
      to.left = crr.left;
      to.top = crr.top;
    }

    frame.setPosition(to.left, to.top);

    var force = true;
    frame.setSize(to.width, to.height, force);

    frame.setResizable(to.resizable);
    frame.setMovable(to.movable);

    me.clearWindowStats(model.restoreMode);

    if (me.keyListener) {
      //タイトルバー無し最大化状態から戻すためのキーリスナーは削除する

      window.removeEventListener('keydown', me.keyListener);
      if (frame.iframe) {
        frame.iframe.contentWindow.removeEventListener('keydown', me.keyListener);
      }
      me.keyListener = null;
    }

    me.windowMode = 'default';

    if (model && model.forceShowFrameComponents) {
      //ウィンドウのモード変更前に可視状態にあったフレームコンポーネント（閉じるボタン類）を可視状態にする
      frame.showAllVisibleFrameComponents();
    }

    frame.show();

    var eventType = 'restored';
    if (model && model.eventType) {
      eventType = model.eventType;
    }

    if (model && model.callback) {
      model.callback(
        me.frame, { eventType: eventType });
    }
    if (me.eventListeners[eventType]) {
      me.eventListeners[eventType](me.frame, { eventType: eventType });
    }
  };


  if (model && model.animation) {
    me.animateFrame({
      duration: model.duration ? model.duration : me.animationDuration,
      frame: frame,
      fromAlpha: 0,
      toAlpha: 1,
      from: crr,
      to: to,
      callback: funcDoRender
    });
  } else {

    funcDoRender();
  }

  //window.removeEventListener('resize', me.resizeListener);
  me.eventListenerHelper.removeEventListener(window, 'resize', me.resizeListener);
  if (me.matchParentResizeObserver) {
    me.matchParentResizeObserver.disconnect();
    me.matchParentResizeObserver = null;
  }

};


WindowEventHelper.prototype.animateFrame = function(model) {
  var me = this;
  var needRequestFocusAfterAnimation = false;


  var fromAlpha = !isNaN(model.fromAlpha) ? model.fromAlpha : 1.0;

  var from = model.from;
  var to = model.to;

  var animator = new CSimpleLayoutAnimator();

  animator.set(model.frame)
    .setDuration(model.duration ? model.duration : me.animationDuration)
    .fromPosition(from.left, from.top, 'LEFT_TOP')
    .toPosition(to.left, to.top, 'LEFT_TOP')
    .fromWidth(from.width)
    .fromHeight(from.height)
    .toWidth(to.width)
    .toHeight(to.height)
    .fromAlpha(fromAlpha)
    .toAlpha((model.toAlpha == 0) ? 0 : 1.0)
    .ease(model.ease)
    .start(0, needRequestFocusAfterAnimation)
    .then(function(animatorObj) {
      model['callback']();
    });
};

/**
 * Perform complex windowing with simple commands
 * @param cmd
 * @param opt
 */
WindowEventHelper.prototype.doCommand = function(cmd, opt) {
  var me = this;


  if (cmd === 'maximize') {
    me._defaultFunctionMaximize(me.frame);
  }
  if (cmd === 'demaximize') {
    me._defaultFunctionDemaximize(me.frame);
  }
  if (cmd === 'restore') {
    me._defaultFunctionRestoreFromFullscreen(me.frame)
  }
  if (cmd === 'minimize') {
    me._defaultFunctionMinimize(me.frame);
  }
  if (cmd === 'deminimize') {
    me._defaultFunctionDeminimize(me.frame);
  }
  if (cmd === 'hide') {
    me._defaultFunctionHide(me.frame);
  }
  if (cmd === 'dehide') {
    me._defaultFunctionDehide(me.frame);
  }
}

WindowEventHelper.prototype._defaultFunctionMaximize = function(_frame, evt) {
  var me = this;
  var model = me.opts;

  var param = {
    // DEPRECATED: maximizeWithoutTitleBar is deprecated
    // USE maximizeParam.fullScreen
    fullScreen: (model.maximizeWithoutTitleBar === true) ? true : false,

    // DEPRECATED: model.restoreKey is deprecated
    // USE maximizeParam.restoreKey

    // If you want to use the key input instead of the title bar,
    // you can specify the key because it is not possible
    // to recover with the button when hiding the title bar.
    restoreKey: model.restoreKey ? model.restoreKey : 'Escape',

    // DEPRECATED: model.restoreDuration is deprecated
    // USE maximizeParam.restoreDuration
    restoreDuration: model.restoreDuration,
  };

  if (this.maximizeParam) {
    // write maximizeParam into param
    mergeDeeply({ op: 'overwrite-merge', object1: param, object2: this.maximizeParam });
  }

  //ウィンドウを最大化する
  _frame.control.doMaximize(param);
};

WindowEventHelper.prototype._defaultFunctionDemaximize = function(_frame, evt) {
  _frame.control.doDemaximize(
    {});
};

WindowEventHelper.prototype._defaultFunctionRestoreFromFullscreen = function(_frame, evt) {
  var me = this;
  _frame.control.doDemaximize({
    duration: me.restoreDuration ? me.restoreDuration : null,
    callback: me.restoreCallback ? me.restoreCallback : null
  });
};

WindowEventHelper.prototype._defaultFunctionMinimize = function(_frame, evt) {

  //'minimizeButton'が押されたときに、最小化したい場合
  _frame.control.doMinimize(this.minimizeParam);

};

WindowEventHelper.prototype._defaultFunctionDeminimize = function(_frame, evt) {
  _frame.control.doDeminimize(this.deminimizeParam);
};

WindowEventHelper.prototype._defaultFunctionHide = function(_frame, evt) {

  var param = {
    align: 'CENTER_BOTTOM'
  };
  if (this.hideParam) {
    param = this.hideParam;
  }
  _frame.control.doHide(param);

};

WindowEventHelper.prototype._defaultFunctionDehide = function(_frame, evt) {
  var me = this;
  _frame.control.doDehide(me.dehideParam);
};

WindowEventHelper.prototype.setupDefaultEvents = function() {
  var me = this;

  if (me.maximizeButton) {
    //イベントはオーバーライドされる
    me.frame.on(me.maximizeButton, 'click', me._defaultFunctionMaximize.bind(me));
  }

  if (me.demaximizeButton) {
    me.frame.on(me.demaximizeButton, 'click', me._defaultFunctionDemaximize.bind(me));
  }

  if (me.minimizeButton) {
    me.frame.on(me.minimizeButton, 'click', me._defaultFunctionMinimize.bind(me));
  }

  if (me.deminimizeButton) {
    me.frame.on(me.deminimizeButton, 'click', me._defaultFunctionDeminimize.bind(me));
  }

  if (me.hideButton) {
    me.frame.on(me.hideButton, 'click', me._defaultFunctionHide.bind(me));
  }

  if (me.hideButtons) {
    for (var key in me.hideButtons) {
      var hideButton = me.hideButtons[key];
      if (hideButton) {
        me.frame.on(hideButton, 'click', me._defaultFunctionHide.bind(me));
      }
    }
  }

};

module.exports = WindowEventHelper;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJpdmVyc3VuL2V2ZW50LWVtaXR0ZXIvbGliL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTRnJhbWUuY3NzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZXRzL2FwcGVhcmFuY2UvUHJlc2V0U3R5bGVNYXRlcmlhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByZXNldHMvYXBwZWFyYW5jZS9QcmVzZXRTdHlsZVBvcHVwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJlc2V0cy9hcHBlYXJhbmNlL1ByZXNldFN0eWxlUmVkc3RvbmUuY3NzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZXRzL2FwcGVhcmFuY2UvUHJlc2V0U3R5bGVZb3NlbWl0ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXZlbnQtbGlzdGVuZXItaGVscGVyL2xpYi9ldmVudC1saXN0ZW5lci1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21lcmdlLWRlZXBseS9saWIvbWVyZ2UtZGVlcGx5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ0NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlNGcmFtZS5jc3M/NmJlZCIsIndlYnBhY2s6Ly8vLi9zcmMvSlNGcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwZWFyYW5jZS9DQnV0dG9uQXBwZWFyYW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwZWFyYW5jZS9DQ2hpbGRNZW51QXBwZWFyYW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwZWFyYW5jZS9DRG9tUGFydHNCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHBlYXJhbmNlL0NGcmFtZUFwcGVhcmFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGVhcmFuY2UvQ0ZyYW1lQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHBlYXJhbmNlL0NJbWFnZUJ1dHRvbkFwcGVhcmFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZXRzL2FwcGVhcmFuY2UvUHJlc2V0U3R5bGVNYXRlcmlhbC5jc3M/YjNlOSIsIndlYnBhY2s6Ly8vLi9zcmMvcHJlc2V0cy9hcHBlYXJhbmNlL1ByZXNldFN0eWxlTWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByZXNldHMvYXBwZWFyYW5jZS9QcmVzZXRTdHlsZVBvcHVwLmNzcz84YTc4Iiwid2VicGFjazovLy8uL3NyYy9wcmVzZXRzL2FwcGVhcmFuY2UvUHJlc2V0U3R5bGVQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJlc2V0cy9hcHBlYXJhbmNlL1ByZXNldFN0eWxlUmVkc3RvbmUuY3NzPzZkYmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByZXNldHMvYXBwZWFyYW5jZS9QcmVzZXRTdHlsZVJlZHN0b25lLmpzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZXRzL2FwcGVhcmFuY2UvUHJlc2V0U3R5bGVUb2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJlc2V0cy9hcHBlYXJhbmNlL1ByZXNldFN0eWxlWW9zZW1pdGUuY3NzP2NlYzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByZXNldHMvYXBwZWFyYW5jZS9QcmVzZXRTdHlsZVlvc2VtaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZXRzL3dpbmRvdy9QcmVzZXRXaW5kb3dZb3NlbWl0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvQ1NpbXBsZUxheW91dEFuaW1hdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9DVGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0luaGVyaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL09iamVjdEFzc2lnbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9XaW5kb3dFdmVudEhlbHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGVBQWUsS0FBaUQsb0JBQW9CLFNBQXNJLENBQUMsa0JBQWtCLFlBQVksYUFBYSxPQUFPLGNBQWMsZ0JBQWdCLG1CQUFtQiw2QkFBNkIsbUJBQW1CLHNFQUFzRSw0QkFBNEIsSUFBSSxpQ0FBaUMsMkRBQTJELE9BQU8sU0FBUyxTQUFTLFFBQVEsSUFBSSw4QkFBOEIsUUFBUSxjQUFjLFNBQVMsMEJBQTBCLGlLQUFpSyxHQUFHLGdCQUFnQixNQUFNLHlEQUF5RCxnRUFBZ0UsU0FBUyx1QkFBdUIsT0FBTyxpQkFBaUIsb0JBQW9CLFFBQVEsRUFBRSxzQkFBc0IsZUFBZSxRQUFRLE1BQU0sNkpBQTZKLGdCQUFnQixPQUFPLGFBQWEsdUJBQXVCLGNBQWMsZUFBZSxrQkFBa0IsZUFBZSxTQUFTLGNBQWMsSUFBSSw4QkFBOEIsUUFBUSxnQkFBZ0IsZ0JBQWdCLE1BQU0sb0NBQW9DLG9EQUFvRCxnTEFBZ0wsZ0JBQWdCLG9DQUFvQywyQkFBMkIsSUFBSSxjQUFjLFNBQVMsZ0JBQWdCLDhFQUE4RSxnQkFBZ0IsWUFBWSxXQUFXLEtBQUssV0FBVywrR0FBK0csa0JBQWtCLHVDQUF1QyxPQUFPLGNBQWMsRUFBRSxpQkFBaUIsY0FBYyxvRUFBb0UsYUFBYSxJQUFJLFVBQVUsZ0JBQWdCLEVBQUUsc0JBQXNCLDJCQUEyQixTQUFTLE9BQU8sUUFBUSxPQUFPLHNEQUFzRCxhQUFhLDZCQUE2Qiw4QkFBOEIsNklBQTZJLFdBQVcsS0FBSyx1QkFBdUIsVUFBVSwyQ0FBMkMsSUFBSSxFQUFFLHlDQUF5Qyw4QkFBOEIsd0JBQXdCLEVBQUUsaUNBQWlDLGdDQUFnQyxpRUFBaUUsRUFBRSw2QkFBNkIsaUNBQWlDLEVBQUUsK0JBQStCLDhCQUE4Qix5Q0FBeUMsZ0NBQWdDLHlDQUF5QyxtQ0FBbUMsSUFBSSxVQUFVLGdCQUFnQixFQUFFLG1CQUFtQixTQUFTLE9BQU8sUUFBUSxRQUFRLEVBQUUsdUNBQXVDLFNBQVMsd0NBQXdDLDhCQUE4QixjQUFjLG1CQUFtQixHQUFHLHVDQUF1QyxJQUFJLFVBQVUsZ0JBQWdCLEVBQUUsMkNBQTJDLDhCQUE4QixjQUFjLHNGQUFzRiw4QkFBOEIsRUFBRSxRQUFRLFNBQVMsT0FBTyxRQUFRLE1BQU0sVUFBVSxFQUFFLHlDQUF5Qyw0QkFBNEIsOEJBQThCLG1DQUFtQyxtQ0FBbUMsSUFBSSxVQUFVLGdCQUFnQixFQUFFLHlDQUF5QyxTQUFTLE9BQU8sUUFBUSxNQUFNLFVBQVUsRUFBRSxnQ0FBZ0MscUNBQXFDLElBQUksVUFBVSxnQkFBZ0IsRUFBRSxvQkFBb0IsU0FBUyxPQUFPLFFBQVEsTUFBTSx5QkFBeUIsdUNBQXVDLElBQUksVUFBVSxnQkFBZ0IsRUFBRSxvQkFBb0IsU0FBUyxPQUFPLFFBQVEsTUFBTSx1REFBdUQsRUFBRSwrQ0FBK0MsaUdBQWlHLDhCQUE4QixFQUFFLGdEQUFnRCxtQ0FBbUMsRUFBRSxnREFBZ0QsMkRBQTJELFdBQVcsS0FBSyw4QkFBOEIsUUFBUSxrQkFBa0IsRUFBRSxVQUFVLEtBQUssZ0JBQWdCLGFBQWEsZ0NBQWdDLGFBQWEsZ0NBQWdDLHVCQUF1QixFQUFFLHVDQUF1QywyQkFBMkIsRUFBRSx1Q0FBdUMsb0NBQW9DLEVBQUUsd0NBQXdDLDRCQUE0QixFQUFFLHlDQUF5Qyw4QkFBOEIsSUFBSSxVQUFVLGdCQUFnQixFQUFFLGNBQWMsK0xBQStMLE1BQU0sU0FBUyxPQUFPLFFBQVEsUUFBUSxFQUFFLHVDQUF1QyxnREFBZ0QsRUFBRSw4Q0FBOEMsbUJBQW1CLDhCQUE4QixFQUFFLCtCQUErQixzREFBc0QsS0FBSyxnQkFBZ0IsYUFBYSx1Q0FBdUMsYUFBYSxnQ0FBZ0MsOEJBQThCLEVBQUUsd0NBQXdDLG9DQUFvQyxFQUFFLDBDQUEwQywrQkFBK0IsRUFBRSx5Q0FBeUMseUNBQXlDLElBQUksVUFBVSxnQkFBZ0IsRUFBRSxjQUFjLCtMQUErTCxNQUFNLFNBQVMsT0FBTyxRQUFRLFFBQVEsRUFBRSwrQkFBK0Isc0RBQXNELEtBQUssSUFBSSxNQUFNLGNBQWMsNEJBQTRCLFlBQVksWUFBWSxxQ0FBcUMsbUJBQW1CLCtEQUErRCx1QkFBdUIsRUFBRSw2REFBNkQsWUFBWSxHOzs7Ozs7Ozs7OztBQ0RyME47QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyw4QkFBOEIsc0hBQXNILGlFQUFpRSw4REFBOEQseURBQXlELGtDQUFrQyxtQ0FBbUMsR0FBRywrQkFBK0Isd0xBQXdMLGlFQUFpRSw4REFBOEQseURBQXlELGtDQUFrQyxtQ0FBbUMsR0FBRyxzQ0FBc0MscUNBQXFDLG1CQUFtQixxQkFBcUI7QUFDci9CO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsMkNBQTJDLHdCQUF3QixrQ0FBa0MsbUNBQW1DLEdBQUcsNENBQTRDLHdCQUF3QixtQ0FBbUMsb0NBQW9DLEdBQUc7QUFDaFQ7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyx3Q0FBd0Msd0JBQXdCLGtDQUFrQyxtQ0FBbUMsR0FBRyx5Q0FBeUMsd0JBQXdCLGtDQUFrQyxtQ0FBbUMsR0FBRztBQUN4UztBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLDJDQUEyQyx3QkFBd0Isa0NBQWtDLG1DQUFtQyxHQUFHLDRDQUE0Qyx3QkFBd0Isa0NBQWtDLG1DQUFtQyxHQUFHO0FBQzlTO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsMkNBQTJDLHNIQUFzSCxpRUFBaUUsOERBQThELHlEQUF5RCxrQ0FBa0MsbUNBQW1DLEdBQUcsNENBQTRDLHdMQUF3TCxpRUFBaUUsOERBQThELHlEQUF5RCxrQ0FBa0MsbUNBQW1DLEdBQUc7QUFDNTVCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7OztBQzdGQTtBQUNBLGVBQWUsS0FBaUQsb0JBQW9CLFNBQTJKLENBQUMsa0JBQWtCLG1CQUFtQixTQUFTLGNBQWMsNEJBQTRCLFlBQVkscUJBQXFCLDJEQUEyRCx1Q0FBdUMscUNBQXFDLG9CQUFvQixFQUFFLGlCQUFpQiw0RkFBNEYsZUFBZSx3Q0FBd0MsU0FBUyxFQUFFLG1CQUFtQiw4QkFBOEIscURBQXFELDBCQUEwQiw2Q0FBNkMsc0JBQXNCLDZEQUE2RCxZQUFZLGVBQWUsU0FBUyxpQkFBaUIsaUNBQWlDLGlCQUFpQixZQUFZLFVBQVUsc0JBQXNCLG1CQUFtQixpREFBaUQsa0JBQWtCLGtCQUFrQixlQUFlLGlCQUFpQixhQUFhLGNBQWMsaUZBQWlGLGdCQUFnQixhQUFhLG9HQUFvRyxLQUFLLGdCQUFnQixtQkFBbUIsNkJBQTZCLG1CQUFtQixzRUFBc0UsNEJBQTRCLElBQUksaUNBQWlDLDJEQUEyRCxPQUFPLFNBQVMsU0FBUyxRQUFRLElBQUksOEJBQThCLFFBQVEsY0FBYyxTQUFTLDBCQUEwQixpS0FBaUssR0FBRyxnQkFBZ0IsTUFBTSx5REFBeUQsZ0VBQWdFLFNBQVMsdUJBQXVCLE9BQU8saUJBQWlCLG9CQUFvQixRQUFRLEVBQUUsc0JBQXNCLGVBQWUsUUFBUSxNQUFNLDZKQUE2SixnQkFBZ0IsT0FBTyxhQUFhLHVCQUF1QixjQUFjLGVBQWUsa0JBQWtCLGVBQWUsU0FBUyxjQUFjLElBQUksOEJBQThCLFFBQVEsZ0JBQWdCLGdCQUFnQixNQUFNLG9DQUFvQyxvREFBb0QsZ0xBQWdMLGdCQUFnQixvQ0FBb0MsMkJBQTJCLElBQUksY0FBYyxTQUFTLGdCQUFnQixZQUFZLFdBQVcsS0FBSyxXQUFXLCtHQUErRyxtQ0FBbUMsU0FBUyxHQUFHLGlCQUFpQixhQUFhLGVBQWUsOEVBQThFLDhEQUE4RCxVQUFVLGdCQUFnQiwrQ0FBK0Msa0JBQWtCLDJIQUEySCw0QkFBNEIsV0FBVyxzQ0FBc0MsV0FBVywwREFBMEQsdUNBQXVDLEVBQUUsT0FBTyw4QkFBOEIsc0RBQXNELHVDQUF1QyxrREFBa0QsZUFBZSx1Q0FBdUMsb0hBQW9ILFNBQVMsb0NBQW9DLG1CQUFtQixLQUFLLDJDQUEyQyxRQUFRLDRCQUE0QixvQ0FBb0MsdUNBQXVDLFVBQVUsRUFBRSxrREFBa0QsMkVBQTJFLHlIQUF5SCw0QkFBNEIsV0FBVyxzQ0FBc0MsT0FBTyxtQ0FBbUMsb0NBQW9DLHNHQUFzRyxlQUFlLG1IQUFtSCxNQUFNLGVBQWUsaUlBQWlJLDJKQUEySixZQUFZLDZEQUE2RCw0REFBNEQsTUFBTSw0Q0FBNEMscUZBQXFGLGdSQUFnUixVQUFVLEVBQUUsNENBQTRDLHdGQUF3RixFQUFFLDRDQUE0QyxxQkFBcUIsd0RBQXdELG9EQUFvRCxXQUFXLGFBQWEsSUFBSSxVQUFVLGdCQUFnQixFQUFFLGNBQWMsZ0NBQWdDLFNBQVMsT0FBTyxRQUFRLE9BQU8sTUFBTSxFQUFFLG1EQUFtRCw0Q0FBNEMsZUFBZSxhQUFhLElBQUksVUFBVSxnQkFBZ0IsRUFBRSx3REFBd0QsSUFBSSxVQUFVLGdCQUFnQixFQUFFLGNBQWMsdUNBQXVDLFNBQVMsT0FBTyxRQUFRLE1BQU0sb0JBQW9CLHdCQUF3QixHQUFHLFNBQVMsT0FBTyxRQUFRLE1BQU0sVUFBVSxFQUFFLHNEQUFzRCwyRUFBMkUsNENBQTRDLGVBQWUsZUFBZSxlQUFlLHNCQUFzQixJQUFJLFVBQVUsZ0JBQWdCLEVBQUUsOENBQThDLFdBQVcsU0FBUyxPQUFPLFFBQVEsTUFBTSxVQUFVLEVBQUUsNkNBQTZDLHlFQUF5RSx1Q0FBdUMsa0JBQWtCLGVBQWUsa0JBQWtCLCtDQUErQyxVQUFVLEVBQUUsNENBQTRDLDJFQUEyRSx1Q0FBdUMsZUFBZSxlQUFlLHlCQUF5QixFQUFFLDZDQUE2Qyx5RUFBeUUsdUNBQXVDLGVBQWUsZUFBZSxlQUFlLGVBQWUsV0FBVyxFQUFFLDhDQUE4QyxrQkFBa0IsUUFBUSxvQkFBb0IsZUFBZSxrTUFBa00sRUFBRSw4Q0FBOEMscUNBQXFDLElBQUksVUFBVSxnQkFBZ0IsRUFBRSxjQUFjLDZCQUE2QixTQUFTLE9BQU8sUUFBUSxRQUFRLEVBQUUsOENBQThDLCtFQUErRSxrQ0FBa0MsTUFBTSxNQUFNLGFBQWEsSUFBSSxVQUFVLGdCQUFnQixFQUFFLGNBQWMsOENBQThDLFNBQVMsT0FBTyxRQUFRLFFBQVEsS0FBSyxhQUFhLElBQUksVUFBVSxnQkFBZ0IsRUFBRSwrQ0FBK0MsSUFBSSxVQUFVLGdCQUFnQixFQUFFLHNCQUFzQixzQ0FBc0MsU0FBUyxPQUFPLFFBQVEsUUFBUSxTQUFTLE9BQU8sUUFBUSxTQUFTLEVBQUUsK0NBQStDLG1DQUFtQyw0REFBNEQsRUFBRSwwQ0FBMEMscURBQXFELEVBQUUsbURBQW1ELDBDQUEwQyxJQUFJLFVBQVUsZ0JBQWdCLEVBQUUsaUVBQWlFLElBQUksVUFBVSxnQkFBZ0IsRUFBRSxnRUFBZ0UsY0FBYyxTQUFTLE9BQU8sUUFBUSxRQUFRLFNBQVMsT0FBTyxRQUFRLE1BQU0sVUFBVSxFQUFFLHFEQUFxRCxhQUFhLElBQUksVUFBVSxnQkFBZ0IsRUFBRSwwQkFBMEIseUJBQXlCLFNBQVMsT0FBTyxRQUFRLE1BQU0sYUFBYSxFQUFFLDRDQUE0Qyx5TEFBeUwsY0FBYywwTEFBMEwsNkNBQTZDLE1BQU0sRUFBRSxtQ0FBbUMsc0NBQXNDLEVBQUUsK0JBQStCLHNEQUFzRCxpQ0FBaUMsR0FBRyxXQUFXLEc7Ozs7Ozs7Ozs7O0FDRC9zVTtBQUNBLGVBQWUsS0FBaUQsb0JBQW9CLFNBQW1JLENBQUMsa0JBQWtCLG1CQUFtQixTQUFTLGNBQWMsNEJBQTRCLFlBQVkscUJBQXFCLDJEQUEyRCx1Q0FBdUMscUNBQXFDLG9CQUFvQixFQUFFLGlCQUFpQiw0RkFBNEYsZUFBZSx3Q0FBd0MsU0FBUyxFQUFFLG1CQUFtQiw4QkFBOEIscURBQXFELDBCQUEwQiw2Q0FBNkMsc0JBQXNCLDZEQUE2RCxZQUFZLGVBQWUsU0FBUyxpQkFBaUIsaUNBQWlDLGlCQUFpQixZQUFZLFVBQVUsc0JBQXNCLG1CQUFtQixpREFBaUQsa0JBQWtCLGtCQUFrQixlQUFlLGlCQUFpQixhQUFhLGNBQWMsbUJBQW1CLGdDQUFnQyxpQkFBaUIsaUZBQWlGLHNCQUFzQiw0SkFBNEosR0FBRyxnQkFBZ0IsbUJBQW1CLDZCQUE2QixtQkFBbUIsc0VBQXNFLDRCQUE0QixJQUFJLGlDQUFpQywyREFBMkQsT0FBTyxTQUFTLFNBQVMsUUFBUSxJQUFJLDhCQUE4QixRQUFRLGNBQWMsU0FBUywwQkFBMEIsaUtBQWlLLEdBQUcsZ0JBQWdCLE1BQU0sb0NBQW9DLG9EQUFvRCxnTEFBZ0wsZ0JBQWdCLG9DQUFvQywyQkFBMkIsSUFBSSxjQUFjLFNBQVMsY0FBYyxpRkFBaUYsZ0JBQWdCLGFBQWEsb0dBQW9HLEtBQUssa0JBQWtCLGtCQUFrQiw2Q0FBNkMseUJBQXlCLGdFQUFnRSxpQkFBaUIsMkVBQTJFLFdBQVcsS0FBSyxxQ0FBcUMsd0tBQXdLLDZCQUE2QixrREFBa0QsYUFBYSxTQUFTLGNBQWMseUJBQXlCLDZIQUE2SCx3REFBd0QsTUFBTSxzRkFBc0YsV0FBVyxzRkFBc0YseUNBQXlDLEtBQUssd0ZBQXdGLGlCQUFpQiwyR0FBMkcsdUJBQXVCLDhDQUE4QyxXQUFXLFlBQVksa0RBQWtELElBQUksbUNBQW1DLFNBQVMsR0FBRyxXQUFXLEc7Ozs7Ozs7Ozs7OztBQ0RqbUk7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLFNBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQzVRQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDYkEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxzSEFBd0Q7O0FBRTFGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7Ozs7QUNsQmE7O0FBRWIsbUJBQU8sQ0FBQyx3Q0FBZTtBQUN2QixtQkFBbUIsbUJBQU8sQ0FBQyw0RkFBeUI7QUFDcEQsYUFBYSxtQkFBTyxDQUFDLHNDQUFjO0FBQ25DLHdCQUF3QixtQkFBTyxDQUFDLHNFQUE4QjtBQUM5RCxjQUFjLG1CQUFPLENBQUMsa0RBQW9CO0FBQzFDLHVCQUF1QixtQkFBTyxDQUFDLDhFQUFrQztBQUNqRSx1QkFBdUIsbUJBQU8sQ0FBQyw4RUFBa0M7QUFDakUsNEJBQTRCLG1CQUFPLENBQUMsOEVBQWtDO0FBQ3RFLDBCQUEwQixtQkFBTyxDQUFDLGdHQUF1Qjs7QUFFekQ7QUFDQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxvR0FBNkM7QUFDbkUsY0FBYyxtQkFBTyxDQUFDLG9HQUE2QztBQUNuRSxXQUFXLG1CQUFPLENBQUMsOEZBQTBDO0FBQzdELFdBQVcsbUJBQU8sQ0FBQyw4RkFBMEM7QUFDN0QsY0FBYyxtQkFBTyxDQUFDLG9HQUE2QztBQUNuRTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyw4RkFBMEM7QUFDaEU7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUI7QUFDckIscUJBQXFCOztBQUVyQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxpQ0FBaUM7QUFDakMsaUNBQWlDOzs7QUFHakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyREFBMkQ7QUFDM0QsMkRBQTJEOzs7QUFHM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUEsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7OztBQUdBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUJBQWlCLDBDQUEwQztBQUMzRDtBQUNBLDJDQUEyQywyQ0FBMkM7O0FBRXRGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTQUFTLHNEQUFzRDtBQUMvRDs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssMENBQTBDO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7O0FBR0g7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBOzs7QUFHQTs7O0FBR0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOzs7QUFHQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUssR0FBRywyQ0FBMkM7QUFDbkQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0VBQStFLHFDQUFxQztBQUNwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSyxHQUFHLHFDQUFxQztBQUM3Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsYUFBYTtBQUMvQzs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsbUNBQW1DLGFBQWE7QUFDaEQ7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDOztBQUV4Qzs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0RBQXNEO0FBQ3RELHNEQUFzRDtBQUN0RCxPQUFPO0FBQ1A7QUFDQSxzREFBc0Q7QUFDdEQsT0FBTztBQUNQLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsaUNBQWlDOztBQUVqQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQixzQkFBc0IsV0FBVyxZQUFZO0FBQzNGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0JBQXNCLHNCQUFzQixXQUFXLFlBQVk7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0Isc0JBQXNCLFdBQVcsWUFBWTtBQUMzRjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0JBQXNCLHNCQUFzQixXQUFXLFlBQVk7QUFDOUY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw4QkFBOEI7QUFDOUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCwyQkFBMkI7QUFDNUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdEQUFnRDs7QUFFdkQsR0FBRztBQUNIO0FBQ0EsT0FBTyxtQ0FBbUM7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGNBQWMsd0JBQXdCLG9CQUFvQixhQUFhLGVBQWUsZUFBZTtBQUNsSztBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNudEdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHVDOzs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBOztBQUVBLHNDOzs7Ozs7Ozs7OztBQ1JBLGtCQUFrQixtQkFBTyxDQUFDLHFFQUFjO0FBQ3hDLDRCQUE0QixtQkFBTyxDQUFDLHFFQUF3QjtBQUM1RCw2QkFBNkIsbUJBQU8sQ0FBQywrRUFBNkI7QUFDbEUsMkJBQTJCLG1CQUFPLENBQUMsMkVBQTJCOztBQUU5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLCtDQUErQztBQUM3RTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELDRCQUE0QjtBQUMvRTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2paQSx1QkFBdUIsbUJBQU8sQ0FBQyxtRUFBdUI7QUFDdEQsc0JBQXNCLG1CQUFPLENBQUMsaUVBQXNCOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNuSUEsY0FBYyxtQkFBTyxDQUFDLG1EQUFxQjtBQUMzQyw0QkFBNEIsbUJBQU8sQ0FBQyxxRUFBd0I7O0FBRTVEOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFlBQVkseUJBQXlCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDckRBLFVBQVUscUJBQXFCO0FBQy9CO0FBQ0EsV0FBVyxtQkFBTyxDQUFDLG1DQUFXO0FBQzlCOzs7Ozs7Ozs7Ozs7O0FDSEEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyx1S0FBMEU7O0FBRTVHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSxtQkFBTyxDQUFDLG1GQUEyQjtBQUNuQyxxQkFBcUIsbUJBQU8sQ0FBQyxvRUFBK0I7OztBQUc1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDs7QUFFckQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0Q0FBNEM7O0FBRTVDOztBQUVBOztBQUVBLDZCQUE2Qjs7QUFFN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EscUZBQXFGLGtCQUFrQjs7QUFFdkc7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7OztBQUdBOzs7Ozs7Ozs7Ozs7QUM5UUEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyxpS0FBdUU7O0FBRXpHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSxtQkFBTyxDQUFDLDZFQUF3Qjs7QUFFaEM7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOzs7QUFHQTs7O0FBR0E7Ozs7Ozs7Ozs7OztBQ3BJQSxVQUFVLG1CQUFPLENBQUMseUpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLHVLQUEwRTs7QUFFNUc7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBLG1CQUFPLENBQUMsbUZBQTJCOztBQUVuQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0EsNkJBQTZCOztBQUU3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7QUMvVUE7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsNkJBQTZCOztBQUU3Qjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7QUNqSUEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyx1S0FBMEU7O0FBRTVHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSxtQkFBTyxDQUFDLG1GQUEyQjtBQUNuQyxxQkFBcUIsbUJBQU8sQ0FBQyxvRUFBK0I7O0FBRTVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxpREFBaUQ7QUFDakQsb0RBQW9EO0FBQ3BEO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0Esc0RBQXNEO0FBQ3RELG9EQUFvRDtBQUNwRCxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBLGdDQUFnQyxZQUFZLDBCQUEwQjs7QUFFdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHFEQUFxRCxZQUFZLFVBQVU7O0FBRTNFO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzNPQSxrQkFBa0IsbUJBQU8sQ0FBQyxxRUFBYzs7QUFFeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix5RkFBeUY7QUFDNUc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7QUNsRUEsYUFBYSxtQkFBTyxDQUFDLDBDQUFhOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG9DQUFvQztBQUN2RSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPOzs7QUFHUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBLEdBQUc7O0FBRUgsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7OztBQzNZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEseUI7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxTQUFTO0FBQ25GO0FBQ0EsYUFBYTtBQUNiLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsNEJBQTRCLG1CQUFPLENBQUMsd0VBQTRCO0FBQ2hFLGFBQWEsbUJBQU8sQ0FBQyx1Q0FBZTtBQUNwQyxrQkFBa0IsbUJBQU8sQ0FBQyxxRUFBYztBQUN4QywwQkFBMEIsbUJBQU8sQ0FBQyxnR0FBdUI7O0FBRXpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlDQUF5QztBQUNoRDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQSxnQ0FBZ0MseUJBQXlCO0FBQ3pEO0FBQ0E7QUFDQSxnREFBZ0QseUJBQXlCO0FBQ3pFOztBQUVBLElBQUk7OztBQUdKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MseUJBQXlCO0FBQ3pEO0FBQ0E7QUFDQSxnREFBZ0QseUJBQXlCO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzREFBc0Q7QUFDdkU7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdDQUFnQyxtQkFBbUI7QUFDbkQ7QUFDQTtBQUNBLDBDQUEwQyxtQkFBbUI7QUFDN0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7OztBQUd2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7QUFDQSw4Q0FBOEMsdUJBQXVCO0FBQ3JFO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixxRUFBcUU7QUFDdEY7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwiZmlsZSI6ImpzZnJhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qISBldmVudC1lbWl0dGVyKGh0dHBzOi8vZ2l0aHViLmNvbS9yaXZlcnN1bi9ldmVudC1lbWl0dGVyKSB2MS41LjAgQ29weXJpZ2h0IChjKSAyMDIwIHJpdmVyc3VuLm9yZ0BnbWFpbC5jb20gKi9cbiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiRXZlbnRFbWl0dGVyXCIsW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5FdmVudEVtaXR0ZXI9dCgpOmUuRXZlbnRFbWl0dGVyPXQoKX0odGhpcywoZnVuY3Rpb24oKXtyZXR1cm4oKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgZT17NTYxOihlLHQsbik9PntmdW5jdGlvbiByKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGV9KGUpfHxmdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBTeW1ib2x8fCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChlKSkpcmV0dXJuO3ZhciBuPVtdLHI9ITAsaT0hMSxvPXZvaWQgMDt0cnl7Zm9yKHZhciBzLHU9ZVtTeW1ib2wuaXRlcmF0b3JdKCk7IShyPShzPXUubmV4dCgpKS5kb25lKSYmKG4ucHVzaChzLnZhbHVlKSwhdHx8bi5sZW5ndGghPT10KTtyPSEwKTt9Y2F0Y2goZSl7aT0hMCxvPWV9ZmluYWxseXt0cnl7cnx8bnVsbD09dS5yZXR1cm58fHUucmV0dXJuKCl9ZmluYWxseXtpZihpKXRocm93IG99fXJldHVybiBufShlLHQpfHxvKGUsdCl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBpKGUsdCl7dmFyIG47aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFN5bWJvbHx8bnVsbD09ZVtTeW1ib2wuaXRlcmF0b3JdKXtpZihBcnJheS5pc0FycmF5KGUpfHwobj1vKGUpKXx8dCYmZSYmXCJudW1iZXJcIj09dHlwZW9mIGUubGVuZ3RoKXtuJiYoZT1uKTt2YXIgcj0wLGk9ZnVuY3Rpb24oKXt9O3JldHVybntzOmksbjpmdW5jdGlvbigpe3JldHVybiByPj1lLmxlbmd0aD97ZG9uZTohMH06e2RvbmU6ITEsdmFsdWU6ZVtyKytdfX0sZTpmdW5jdGlvbihlKXt0aHJvdyBlfSxmOml9fXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX12YXIgcyx1PSEwLGM9ITE7cmV0dXJue3M6ZnVuY3Rpb24oKXtuPWVbU3ltYm9sLml0ZXJhdG9yXSgpfSxuOmZ1bmN0aW9uKCl7dmFyIGU9bi5uZXh0KCk7cmV0dXJuIHU9ZS5kb25lLGV9LGU6ZnVuY3Rpb24oZSl7Yz0hMCxzPWV9LGY6ZnVuY3Rpb24oKXt0cnl7dXx8bnVsbD09bi5yZXR1cm58fG4ucmV0dXJuKCl9ZmluYWxseXtpZihjKXRocm93IHN9fX19ZnVuY3Rpb24gbyhlLHQpe2lmKGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBzKGUsdCk7dmFyIG49T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpO3JldHVyblwiT2JqZWN0XCI9PT1uJiZlLmNvbnN0cnVjdG9yJiYobj1lLmNvbnN0cnVjdG9yLm5hbWUpLFwiTWFwXCI9PT1ufHxcIlNldFwiPT09bj9BcnJheS5mcm9tKGUpOlwiQXJndW1lbnRzXCI9PT1ufHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKT9zKGUsdCk6dm9pZCAwfX1mdW5jdGlvbiBzKGUsdCl7KG51bGw9PXR8fHQ+ZS5sZW5ndGgpJiYodD1lLmxlbmd0aCk7Zm9yKHZhciBuPTAscj1uZXcgQXJyYXkodCk7bjx0O24rKylyW25dPWVbbl07cmV0dXJuIHJ9ZnVuY3Rpb24gdShlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gYyhlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19ZnVuY3Rpb24gYShlLHQsbil7cmV0dXJuIHQmJmMoZS5wcm90b3R5cGUsdCksbiYmYyhlLG4pLGV9bi5kKHQse2RlZmF1bHQ6KCk9Pmx9KTt2YXIgbD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7aWYodSh0aGlzLGUpLHRoaXMub25MaXN0ZW5lcnM9bmV3IE1hcCx0aGlzLm9ubHlMaXN0ZW5lcnM9bmV3IE1hcCx0KXt2YXIgbixyPWkodCk7dHJ5e2ZvcihyLnMoKTshKG49ci5uKCkpLmRvbmU7KXt2YXIgbz1uLnZhbHVlLHM9bmV3IGY7dGhpcy5vbkxpc3RlbmVycy5zZXQobyxzKX19Y2F0Y2goZSl7ci5lKGUpfWZpbmFsbHl7ci5mKCl9fXRoaXMuY2hpbGRFdmVudEVtaXR0ZXJzPVtdLHRoaXMub25JbnRlcmNlcHRlckZ1bmNzPXt9fXJldHVybiBhKGUsW3trZXk6XCJvblwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5vbkxpc3RlbmVycy5nZXQoZSk7aWYobnx8KG49bmV3IGYsdGhpcy5vbkxpc3RlbmVycy5zZXQoZSxuKSksbi5hZGRMaXN0ZW5lckZ1bmModCksdGhpcy5vbkludGVyY2VwdGVyRnVuY3MpZm9yKHZhciBpPTAsbz1PYmplY3QuZW50cmllcyh0aGlzLm9uSW50ZXJjZXB0ZXJGdW5jcyk7aTxvLmxlbmd0aDtpKyspe3ZhciBzPXIob1tpXSwyKSx1PXNbMF07KDAsc1sxXSkoe2V2ZW50VHlwZTplLGZ1bmM6dCxvbkludGVyY2VwdGVyRnVuY25hbWU6dX0pfX19LHtrZXk6XCJyZW1vdmVMaXN0ZW5lclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5vbkxpc3RlbmVycy5nZXQoZSk7biYmbi5yZW1vdmVMaXN0ZW5lcih0KX19LHtrZXk6XCJvbmx5XCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXRoaXMub25seUxpc3RlbmVycy5nZXQoZSk7cnx8KHI9bmV3IGgsdGhpcy5vbmx5TGlzdGVuZXJzLnNldChlLHIpKSxyLnB1dExpc3RlbmVyRnVuYyh0LG4pfX0se2tleTpcInBpcGVcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNoaWxkRXZlbnRFbWl0dGVycy5wdXNoKGUpfX0se2tleTpcImVtaXRcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMub25MaXN0ZW5lcnMuZ2V0KGUpO24mJih0LmV2ZW50VHlwZT1lLG4uY2FsbExpc3RlbmVyRnVuYyh0KSk7dmFyIHI9dGhpcy5vbmx5TGlzdGVuZXJzLmdldChlKTtyJiYodC5ldmVudFR5cGU9ZSxyLmNhbGxMaXN0ZW5lckZ1bmModCkpO3ZhciBvLHM9aSh0aGlzLmNoaWxkRXZlbnRFbWl0dGVycyk7dHJ5e2ZvcihzLnMoKTshKG89cy5uKCkpLmRvbmU7KXtvLnZhbHVlLmVtaXQoZSx0KX19Y2F0Y2goZSl7cy5lKGUpfWZpbmFsbHl7cy5mKCl9fX0se2tleTpcImdldEFsbExpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9e307dGhpcy5vbkxpc3RlbmVycy5mb3JFYWNoKChmdW5jdGlvbih0LG4pe3ZhciByPW4saT10LmdldEFsbExpc3RlbmVycygpO2Vbcl18fChlW3JdPXt9KSxlW3JdLmxpc3RlbmVycz1pfSkpO3ZhciB0LG49MCxyPWkodGhpcy5jaGlsZEV2ZW50RW1pdHRlcnMpO3RyeXtmb3Ioci5zKCk7ISh0PXIubigpKS5kb25lOyl7dC52YWx1ZS5vbkxpc3RlbmVycy5mb3JFYWNoKChmdW5jdGlvbih0LHIpe3ZhciBpPXIsbz10LmdldEFsbExpc3RlbmVycygpO2VbaV18fChlW2ldPXt9KSxlW2ldLmNoaWxkRXZlbnRFbWl0dGVyc3x8KGVbaV0uY2hpbGRFdmVudEVtaXR0ZXJzPVtdKSxlW2ldLmNoaWxkRXZlbnRFbWl0dGVycy5wdXNoKHtjaGlsZEVtaXR0ZXJJZHg6bixsaXN0ZW5lcnM6b30pfSkpLG4rK319Y2F0Y2goZSl7ci5lKGUpfWZpbmFsbHl7ci5mKCl9cmV0dXJuIGV9fSx7a2V5OlwiaGFzTGlzdGVuZXJGdW5jc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKHRoaXMub25MaXN0ZW5lcnMuaGFzKGUpKXt2YXIgdD10aGlzLm9uTGlzdGVuZXJzLmdldChlKTtpZih0JiZ0Lmhhc0xpc3RlbmVyRnVuYygpKXJldHVybiEwfXZhciBuLHI9aSh0aGlzLmNoaWxkRXZlbnRFbWl0dGVycyk7dHJ5e2ZvcihyLnMoKTshKG49ci5uKCkpLmRvbmU7KXtpZihuLnZhbHVlLmhhc0xpc3RlbmVyRnVuY3MoZSkpcmV0dXJuITB9fWNhdGNoKGUpe3IuZShlKX1maW5hbGx5e3IuZigpfXJldHVybiExfX0se2tleTpcImNsZWFyQWxsXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZSx0PWkodGhpcy5vbkxpc3RlbmVycy52YWx1ZXMoKSk7dHJ5e2Zvcih0LnMoKTshKGU9dC5uKCkpLmRvbmU7KXtlLnZhbHVlLmNsZWFyQWxsKCl9fWNhdGNoKGUpe3QuZShlKX1maW5hbGx5e3QuZigpfXRoaXMub25MaXN0ZW5lcnMuY2xlYXIoKTt2YXIgbixyPWkodGhpcy5vbmx5TGlzdGVuZXJzLnZhbHVlcygpKTt0cnl7Zm9yKHIucygpOyEobj1yLm4oKSkuZG9uZTspe24udmFsdWUuY2xlYXJBbGwoKX19Y2F0Y2goZSl7ci5lKGUpfWZpbmFsbHl7ci5mKCl9dGhpcy5vbmx5TGlzdGVuZXJzLmNsZWFyKCksdGhpcy5jaGlsZEV2ZW50RW1pdHRlcnM9W119fSx7a2V5OlwiYWRkT25JbnRlcmNlcHRlckZ1bmNcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKHRoaXMub25JbnRlcmNlcHRlckZ1bmNzW2VdKXRocm93IEVycm9yKCdBbHdheXMgcmVnaXN0ZXJlZCBpbnRlcmNlcHRlciBmdW5jIFwiJy5jb25jYXQoZSwnXCIuJykpO3RoaXMub25JbnRlcmNlcHRlckZ1bmNzW2VdPXR9fSx7a2V5OlwicmVtb3ZlT25JbnRlcmNlcHRlckZ1bmNcIix2YWx1ZTpmdW5jdGlvbihlKXtkZWxldGUgdGhpcy5vbkludGVyY2VwdGVyRnVuY3NbZV19fSx7a2V5OlwiZ2V0QWxsT25JbnRlcmNlcHRlckZ1bmNzXCIsdmFsdWU6ZnVuY3Rpb24oKXtmb3IodmFyIGU9W10sdD0wLG49T2JqZWN0LmVudHJpZXModGhpcy5vbkludGVyY2VwdGVyRnVuY3MpO3Q8bi5sZW5ndGg7dCsrKXt2YXIgaT1yKG5bdF0sMiksbz1pWzBdLHM9aVsxXTtlLnB1c2goe2Z1bmNOYW1lOm8sZnVuYzpzfSl9cmV0dXJuIGV9fV0pLGV9KCksZj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt1KHRoaXMsZSksdGhpcy5saXN0ZW5lckZ1bmNzPVtdfXJldHVybiBhKGUsW3trZXk6XCJjbGVhckFsbFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5saXN0ZW5lckZ1bmNzPVtdfX0se2tleTpcImdldEFsbExpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubGlzdGVuZXJGdW5jc319LHtrZXk6XCJoYXNMaXN0ZW5lckZ1bmNcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmxpc3RlbmVyRnVuY3MubGVuZ3RoPjB9fSx7a2V5OlwiYWRkTGlzdGVuZXJGdW5jXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5saXN0ZW5lckZ1bmNzLnB1c2goZSl9fSx7a2V5OlwiY2FsbExpc3RlbmVyRnVuY1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0LG49aSh0aGlzLmxpc3RlbmVyRnVuY3MpO3RyeXtmb3Iobi5zKCk7ISh0PW4ubigpKS5kb25lOyl7dmFyIHI9dC52YWx1ZTtpZihcIkZ1bmN0aW9uXCIhPT10aGlzLnR5cGVPZihyKSl0aHJvdyBFcnJvcignW0ByaXZlcnN1bi9ldmVudC1lbWl0dGVyXSBsaXN0ZW5lckZ1bmN0aW9uIHlvdSBzZXQgaXMgbm90IGEgZnVuY3Rpb24uIGxpc3RlbmVyRnVuY3Rpb246XCInLmNvbmNhdChyLCdcIi5DaGVjayBhcmdzIG9mICNvbmx5IG1ldGhvZCBvciAjb24gbWV0aG9kLicpKTtyKGUpfX1jYXRjaChlKXtuLmUoZSl9ZmluYWxseXtuLmYoKX19fSx7a2V5OlwicmVtb3ZlTGlzdGVuZXJcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnJlbW92ZUFycmF5SXRlbU9uY2UodGhpcy5saXN0ZW5lckZ1bmNzLGUpfX0se2tleTpcInJlbW92ZUFycmF5SXRlbU9uY2VcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPWUuaW5kZXhPZih0KTtyZXR1cm4gbj4tMSYmZS5zcGxpY2UobiwxKSxlfX0se2tleTpcInR5cGVPZlwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwtMSl9fV0pLGV9KCksaD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt1KHRoaXMsZSksdGhpcy5saXN0ZW5lckZ1bmNNYXA9bmV3IE1hcH1yZXR1cm4gYShlLFt7a2V5OlwiY2xlYXJBbGxcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMubGlzdGVuZXJGdW5jTWFwLmNsZWFyKCl9fSx7a2V5OlwiaGFzTGlzdGVuZXJGdW5jXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMubGlzdGVuZXJGdW5jTWFwLmhhcyhlKX19LHtrZXk6XCJwdXRMaXN0ZW5lckZ1bmNcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXMubGlzdGVuZXJGdW5jTWFwLnNldChlLHQpfX0se2tleTpcImNhbGxMaXN0ZW5lckZ1bmNcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdCxuPWkodGhpcy5saXN0ZW5lckZ1bmNNYXAudmFsdWVzKCkpO3RyeXtmb3Iobi5zKCk7ISh0PW4ubigpKS5kb25lOyl7dmFyIHI9dC52YWx1ZTtpZihcIkZ1bmN0aW9uXCIhPT10aGlzLnR5cGVPZihyKSl0aHJvdyBFcnJvcignW0ByaXZlcnN1bi9ldmVudC1lbWl0dGVyXSBsaXN0ZW5lckZ1bmN0aW9uIHlvdSBzZXQgaXMgbm90IGEgZnVuY3Rpb24uIGxpc3RlbmVyRnVuY3Rpb246XCInLmNvbmNhdChyLCdcIi5DaGVjayBhcmdzIG9mICNvbmx5IG1ldGhvZCBvciAjb24gbWV0aG9kLicpKTtyKGUpfX1jYXRjaChlKXtuLmUoZSl9ZmluYWxseXtuLmYoKX19fSx7a2V5OlwidHlwZU9mXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKX19XSksZX0oKX19LHQ9e307ZnVuY3Rpb24gbihyKXtpZih0W3JdKXJldHVybiB0W3JdLmV4cG9ydHM7dmFyIGk9dFtyXT17ZXhwb3J0czp7fX07cmV0dXJuIGVbcl0oaSxpLmV4cG9ydHMsbiksaS5leHBvcnRzfXJldHVybiBuLmQ9KGUsdCk9Pntmb3IodmFyIHIgaW4gdCluLm8odCxyKSYmIW4ubyhlLHIpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLHtlbnVtZXJhYmxlOiEwLGdldDp0W3JdfSl9LG4ubz0oZSx0KT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCksbig1NjEpfSkoKS5kZWZhdWx0fSkpOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuanNmcmFtZS10aXRsZWJhci1kZWZhdWx0IHtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLjAsICNmNWY1ZjUsIGNvbG9yLXN0b3AoMS4wLCAjZjhmN2YyKSkpO1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmNWY1ZjUsICNmOGY3ZjIpO1xcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmNWY1ZjUsICNmOGY3ZjIpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjZjVmNWY1LCAjZjhmN2YyKTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xcbn1cXG5cXG4uanNmcmFtZS10aXRsZWJhci1mb2N1c2VkIHtcXG4gICAgLyogKGMpMjAxNSBKb2hhbm5lcyBKYWtvYlxcbiAgICAgICBNYWRlIHdpdGggPDMgaW4gR2VybWFueSAqL1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuMCwgI2ViZWJlYiwgY29sb3Itc3RvcCgxLjAsICNkNWQ1ZDUpKSk7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ViZWJlYiwgI2Q1ZDVkNSk7XFxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ViZWJlYiwgI2Q1ZDVkNSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsICNlYmViZWIsICNkNWQ1ZDUpO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxufVxcblxcbi5qc2ZyYW1lLW1vZGFsLXdpbmRvdy1iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZGR0aDogMTAwJVxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5qc2ZyYW1lLXByZXNldC1zdHlsZS1tYXRlcmlhbC1kZWZhdWx0IHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmpzZnJhbWUtcHJlc2V0LXN0eWxlLW1hdGVyaWFsLWZvY3VzZWQge1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzZweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDM2cHg7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmpzZnJhbWUtcHJlc2V0LXN0eWxlLXBvcHVwLWRlZmF1bHQge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xcbn1cXG5cXG4uanNmcmFtZS1wcmVzZXQtc3R5bGUtcG9wdXAtZm9jdXNlZCB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmpzZnJhbWUtcHJlc2V0LXN0eWxlLXJlZHN0b25lLWRlZmF1bHQge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xcbn1cXG5cXG4uanNmcmFtZS1wcmVzZXQtc3R5bGUtcmVkc3RvbmUtZm9jdXNlZCB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmpzZnJhbWUtcHJlc2V0LXN0eWxlLXlvc2VtaXRlLWRlZmF1bHQge1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuMCwgI2Y1ZjVmNSwgY29sb3Itc3RvcCgxLjAsICNmOGY3ZjIpKSk7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y1ZjVmNSwgI2Y4ZjdmMik7XFxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y1ZjVmNSwgI2Y4ZjdmMik7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsICNmNWY1ZjUsICNmOGY3ZjIpO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxufVxcblxcbi5qc2ZyYW1lLXByZXNldC1zdHlsZS15b3NlbWl0ZS1mb2N1c2VkIHtcXG4gICAgLyogKGMpMjAxNSBKb2hhbm5lcyBKYWtvYlxcbiAgICAgICBNYWRlIHdpdGggPDMgaW4gR2VybWFueSAqL1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuMCwgI2ViZWJlYiwgY29sb3Itc3RvcCgxLjAsICNkNWQ1ZDUpKSk7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ViZWJlYiwgI2Q1ZDVkNSk7XFxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ViZWJlYiwgI2Q1ZDVkNSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsICNlYmViZWIsICNkNWQ1ZDUpO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvKiEgZXZlbnQtbGlzdGVuZXItaGVscGVyKGh0dHBzOi8vZ2l0aHViLmNvbS9yaXZlcnN1bi9ldmVudC1saXN0ZW5lci1oZWxwZXIpIHYxLjEuMiBDb3B5cmlnaHQgKGMpIDIwMjAgcml2ZXJzdW4ub3JnQGdtYWlsLmNvbSAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJFdmVudExpc3RlbmVySGVscGVyXCIsW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5FdmVudExpc3RlbmVySGVscGVyPXQoKTplLkV2ZW50TGlzdGVuZXJIZWxwZXI9dCgpfSh0aGlzLChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiBuKHIpe2lmKHRbcl0pcmV0dXJuIHRbcl0uZXhwb3J0czt2YXIgaT10W3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtyXS5jYWxsKGkuZXhwb3J0cyxpLGkuZXhwb3J0cyxuKSxpLmw9ITAsaS5leHBvcnRzfXJldHVybiBuLm09ZSxuLmM9dCxuLmQ9ZnVuY3Rpb24oZSx0LHIpe24ubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPW4oZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBpIGluIGUpbi5kKHIsaSxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLGkpKTtyZXR1cm4gcn0sbi5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBuLmQodCxcImFcIix0KSx0fSxuLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LG4ucD1cIi9cIixuKG4ucz0wKX0oW2Z1bmN0aW9uKGUsdCxuKXtlLmV4cG9ydHM9bigxKX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuKHI9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0pKGUpfWZ1bmN0aW9uIGkoZSx0KXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZX0oZSl8fGZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFN5bWJvbHx8IShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGUpKSlyZXR1cm47dmFyIG49W10scj0hMCxpPSExLG89dm9pZCAwO3RyeXtmb3IodmFyIGEscz1lW1N5bWJvbC5pdGVyYXRvcl0oKTshKHI9KGE9cy5uZXh0KCkpLmRvbmUpJiYobi5wdXNoKGEudmFsdWUpLCF0fHxuLmxlbmd0aCE9PXQpO3I9ITApO31jYXRjaChlKXtpPSEwLG89ZX1maW5hbGx5e3RyeXtyfHxudWxsPT1zLnJldHVybnx8cy5yZXR1cm4oKX1maW5hbGx5e2lmKGkpdGhyb3cgb319cmV0dXJuIG59KGUsdCl8fGEoZSx0KXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIG8oZSx0KXt2YXIgbjtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgU3ltYm9sfHxudWxsPT1lW1N5bWJvbC5pdGVyYXRvcl0pe2lmKEFycmF5LmlzQXJyYXkoZSl8fChuPWEoZSkpfHx0JiZlJiZcIm51bWJlclwiPT10eXBlb2YgZS5sZW5ndGgpe24mJihlPW4pO3ZhciByPTAsaT1mdW5jdGlvbigpe307cmV0dXJue3M6aSxuOmZ1bmN0aW9uKCl7cmV0dXJuIHI+PWUubGVuZ3RoP3tkb25lOiEwfTp7ZG9uZTohMSx2YWx1ZTplW3IrK119fSxlOmZ1bmN0aW9uKGUpe3Rocm93IGV9LGY6aX19dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfXZhciBvLHM9ITAsbD0hMTtyZXR1cm57czpmdW5jdGlvbigpe249ZVtTeW1ib2wuaXRlcmF0b3JdKCl9LG46ZnVuY3Rpb24oKXt2YXIgZT1uLm5leHQoKTtyZXR1cm4gcz1lLmRvbmUsZX0sZTpmdW5jdGlvbihlKXtsPSEwLG89ZX0sZjpmdW5jdGlvbigpe3RyeXtzfHxudWxsPT1uLnJldHVybnx8bi5yZXR1cm4oKX1maW5hbGx5e2lmKGwpdGhyb3cgb319fX1mdW5jdGlvbiBhKGUsdCl7aWYoZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIHMoZSx0KTt2YXIgbj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwtMSk7cmV0dXJuXCJPYmplY3RcIj09PW4mJmUuY29uc3RydWN0b3ImJihuPWUuY29uc3RydWN0b3IubmFtZSksXCJNYXBcIj09PW58fFwiU2V0XCI9PT1uP0FycmF5LmZyb20oZSk6XCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pP3MoZSx0KTp2b2lkIDB9fWZ1bmN0aW9uIHMoZSx0KXsobnVsbD09dHx8dD5lLmxlbmd0aCkmJih0PWUubGVuZ3RoKTtmb3IodmFyIG49MCxyPW5ldyBBcnJheSh0KTtuPHQ7bisrKXJbbl09ZVtuXTtyZXR1cm4gcn1mdW5jdGlvbiBsKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciByPXRbbl07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1uLnIodCksbi5kKHQsXCJkZWZhdWx0XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHV9KSk7dmFyIHU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7IWZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxlKSx0aGlzLmV2VGFyZ2V0TGlzdGVuZXJzTWFwPW5ldyBNYXAsdGhpcy5saXN0ZW5lck51bT0wfXZhciB0LG4sYTtyZXR1cm4gdD1lLChuPVt7a2V5OlwiYWRkRXZlbnRMaXN0ZW5lclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpPXRoaXMsbz1udWxsO2lmKHImJihvPXRoaXMuX2Nsb25lSnNvbihyKSksYXJndW1lbnRzLmxlbmd0aD40KXRocm93IEVycm9yKFwiVG9vIG1hbnkgYXJndW1lbnRzLiBOdW1iZXIgb2YgYXJndW1lbnRzIGNhbiBiZSBzcGVjaWZpZWQgNC5cIik7dGhpcy5fY2hlY2tUeXBlT2ZPcHRpb25zKG8pO3ZhciBhPW51bGw7byYmby5saXN0ZW5lck5hbWUmJihhPW8ubGlzdGVuZXJOYW1lKTt2YXIgcz1udWxsO28mJm8ub25jZSYmKGRlbGV0ZSBvLm9uY2Usby5jYWxsYmFja09uY2U9ITAscz1mdW5jdGlvbihyKXtuKHIpLGkucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLHQsbnVsbCxvKX0pO3ZhciBsPXtsaXN0ZW5lck5hbWU6bnVsbCxzdWNjZXNzOiEwfTtzP2UuYWRkRXZlbnRMaXN0ZW5lcih0LHMsbyk6ZS5hZGRFdmVudExpc3RlbmVyKHQsbixvKTt2YXIgdT10aGlzLmV2VGFyZ2V0TGlzdGVuZXJzTWFwLmdldChlKTt1fHwodT1uZXcgTWFwLHRoaXMuZXZUYXJnZXRMaXN0ZW5lcnNNYXAuc2V0KGUsdSkpO3ZhciBjPXUuZ2V0KHQpO2lmKGN8fChjPW5ldyBNYXAsdS5zZXQodCxjKSksbnVsbCE9PWEpe2lmKGMuaGFzKGEpKXRocm93IEVycm9yKCdUaGUgbGlzdGVuZXJOYW1lIFwiJy5jb25jYXQoYSwnXCIgaXMgYWxyZWFkeSB1c2VkIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50IHR5cGUgJykuY29uY2F0KHQpKTtjLnNldChhLHtsaXN0ZW5lcjpuLG9uY2VMaXN0ZW5lcjpzLG9wdGlvbnM6b30pLGwubGlzdGVuZXJOYW1lPWF9ZWxzZXt2YXIgZj1cImxpc3RlbmVyLVwiLmNvbmNhdCh0aGlzLmxpc3RlbmVyTnVtKTtvfHwobz17fSksby5saXN0ZW5lck5hbWU9ZixjLnNldChmLHtsaXN0ZW5lcjpuLG9uY2VMaXN0ZW5lcjpzLG9wdGlvbnM6b30pLGwubGlzdGVuZXJOYW1lPWYsdGhpcy5saXN0ZW5lck51bSs9MX1yZXR1cm4gbH19LHtrZXk6XCJyZW1vdmVFdmVudExpc3RlbmVyXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4scil7aWYoYXJndW1lbnRzLmxlbmd0aDwzKXRocm93IEVycm9yKFwiVGhyZWUgb3IgZm91ciBhcmd1bWVudHMgYXJlIHJlcXVpcmVkLlwiKTtpZihcIkZ1bmN0aW9uXCIhPT10aGlzLnR5cGVPZihuKSYmXCJOdWxsXCIhPT10aGlzLnR5cGVPZihuKSl0aHJvdyBFcnJvcignVHlwZSBvZiAzcmQgYXJnIHNob3VsZCBiZSBhIFwiRnVuY3Rpb25cIiBvciBcIk51bGxcIi4nKTt0aGlzLl9jaGVja1R5cGVPZk9wdGlvbnMocik7dmFyIGk9bnVsbDtyJiZyLmxpc3RlbmVyTmFtZSYmKGk9ci5saXN0ZW5lck5hbWUpO3ZhciBvPXtzdWNjZXNzOiExLG1lc3NhZ2U6XCJ1bmtub3duIGVycm9yXCJ9LGE9dGhpcy5ldlRhcmdldExpc3RlbmVyc01hcC5nZXQoZSk7aWYoIWEpcmV0dXJuIG8ubWVzc2FnZT1cIkRPTSBlbGVtZW50IFwiLmNvbmNhdChlLFwiKGlkPVwiKS5jb25jYXQoZS5pZCxcIikgZG9lc24ndCBoYXZlIGFueSBsaXN0ZW5lcnMuXCIpLG87dmFyIHM9YS5nZXQodCk7aWYoIXMpcmV0dXJuIG8ubWVzc2FnZT1cIkRPTSBlbGVtZW50IFwiLmNvbmNhdChlLFwiKGlkPVwiKS5jb25jYXQoZS5pZCxcIikgZG9lc24ndCBoYXZlIFxcXCJcIikuY29uY2F0KHQsJ1wiIGxpc3RlbmVycy4nKSxvO2lmKGkpe3ZhciBsPXMuZ2V0KGkpO2lmKCFsKXJldHVybiBvLm1lc3NhZ2U9XCJET00gZWxlbWVudCBcIi5jb25jYXQoZSxcIihpZD1cIikuY29uY2F0KGUuaWQsXCIpIGRvZXNuJ3QgaGF2ZSBcXFwiXCIpLmNvbmNhdCh0LCdcIiBsaXN0ZW5lciBcIicpLmNvbmNhdChpLCdcIicpLG87cy5kZWxldGUoaSksbC5vcHRpb25zJiZsLm9wdGlvbnMuY2FsbGJhY2tPbmNlP2UucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LGwub25jZUxpc3RlbmVyLGwub3B0aW9ucyk6ZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbC5saXN0ZW5lcixsLm9wdGlvbnMpLG8uc3VjY2Vzcz0hMH1lbHNlIGlmKCFpKXtpZighbilyZXR1cm4gby5tZXNzYWdlPVwib3B0aW9ucy5saXN0ZW5lck5hbWUgaXMgbm90IGZvdW5kXCIsbzt2YXIgdT1cImxpc3RlbmVyXCIsYz1uLGY9dGhpcy5fc2VhcmNoS2V5SW5WYWx1ZUNvbnRlbnQocyx1LGMpO2lmKGYpe3ZhciB2PXMuZ2V0KGYpLHk9di5vbmNlTGlzdGVuZXIscD12Lm9wdGlvbnM7cy5kZWxldGUoZikseT9lLnJlbW92ZUV2ZW50TGlzdGVuZXIodCx5LHApOmUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LG4scCksby5zdWNjZXNzPSEwfWVsc2Ugby5zdWNjZXNzPSExLG8ubWVzc2FnZT1cIlNwZWNpZmllZCBsaXN0ZW5lciBjb3VsZCBub3QgYmUgZGVsZXRlZCBmcm9tIERPTSBlbGVtZW50IFwiLmNvbmNhdChlLFwiKGlkPVwiKS5jb25jYXQoZS5pZCxcIikuXFxuICAgICAgICBTaW5jZSB0aGUgc3BlY2lmaWVkIGxpc3RlbmVyIGlzIG5vdCByZWdpc3RlcmVkIGFzIGFuIGV2ZW50IGxpc3RlbmVyLFxcbiAgICAgICAgaXQgbWF5IGhhdmUgYmVlbiByZWdpc3RlcmVkIG91dHNpZGUgb2YgZXZlbnQtbGlzdGVuZXItaGVscGVyLlwiKX1yZXR1cm4gb319LHtrZXk6XCJnZXRFdmVudExpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU/dD90aGlzLl9nZXRFdmVudExpc3RlbmVyc1dpdGgyQXJncyhlLHQpOnRoaXMuX2dldEV2ZW50TGlzdGVuZXJzV2l0aDFBcmcoZSk6W119fSx7a2V5OlwiZ2V0QWxsRXZlbnRMaXN0ZW5lcnNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1uZXcgTWFwO3JldHVybiB0aGlzLmV2VGFyZ2V0TGlzdGVuZXJzTWFwLmZvckVhY2goKGZ1bmN0aW9uKG4scil7dmFyIGk9cixhPWUuX2dldEV2ZW50TGlzdGVuZXJzV2l0aDFBcmcoaSkscz1uZXcgTWFwO3Quc2V0KGkscyk7dmFyIGwsdT1vKGEpO3RyeXtmb3IodS5zKCk7IShsPXUubigpKS5kb25lOyl7dmFyIGM9bC52YWx1ZTtzLnNldChjLmV2ZW50VHlwZSxjLmxpc3RlbmVycyl9fWNhdGNoKGUpe3UuZShlKX1maW5hbGx5e3UuZigpfX0pKSx0fX0se2tleTpcIl9nZXRFdmVudExpc3RlbmVyc1dpdGgxQXJnXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9W10sbj10aGlzLmV2VGFyZ2V0TGlzdGVuZXJzTWFwLmdldChlKTtpZighbilyZXR1cm4gdDt2YXIgcixhPW8obik7dHJ5e2ZvcihhLnMoKTshKHI9YS5uKCkpLmRvbmU7KXt2YXIgcyxsPWkoci52YWx1ZSwyKSx1PWxbMF0sYz1sWzFdLGY9W10sdj1vKGMudmFsdWVzKCkpO3RyeXtmb3Iodi5zKCk7IShzPXYubigpKS5kb25lOyl7dmFyIHk9cy52YWx1ZTtmLnB1c2godGhpcy5fZ2V0RnJvemVuTGlzdGVuZXJEZWYoeSkpfX1jYXRjaChlKXt2LmUoZSl9ZmluYWxseXt2LmYoKX1mLmxlbmd0aD4wJiZ0LnB1c2goe2V2ZW50VHlwZTp1LGxpc3RlbmVyczpmfSl9fWNhdGNoKGUpe2EuZShlKX1maW5hbGx5e2EuZigpfXJldHVybiB0fX0se2tleTpcIl9nZXRFdmVudExpc3RlbmVyc1dpdGgyQXJnc1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoMiE9PWFyZ3VtZW50cy5sZW5ndGgpdGhyb3cgRXJyb3IoXCJPbmx5IHR3byBhcmd1bWVudHMgY2FuIGJlIHNwZWNpZmllZFwiKTt2YXIgbj1bXSxyPXRoaXMuZXZUYXJnZXRMaXN0ZW5lcnNNYXAuZ2V0KGUpO2lmKCFyKXJldHVybiBuO3ZhciBpPXIuZ2V0KHQpO2lmKCFpKXJldHVybiBuO3ZhciBhLHM9byhpLnZhbHVlcygpKTt0cnl7Zm9yKHMucygpOyEoYT1zLm4oKSkuZG9uZTspe3ZhciBsPWEudmFsdWUsdT10aGlzLl9nZXRGcm96ZW5MaXN0ZW5lckRlZihsKTtuLnB1c2godSl9fWNhdGNoKGUpe3MuZShlKX1maW5hbGx5e3MuZigpfXJldHVybiBufX0se2tleTpcImdldEV2ZW50TGlzdGVuZXJcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7aWYoMyE9PWFyZ3VtZW50cy5sZW5ndGgpdGhyb3cgRXJyb3IoXCJPbmx5IDMgYXJndW1lbnRzIGNhbiBiZSBzcGVjaWZpZWRcIik7dmFyIHI9dGhpcy5ldlRhcmdldExpc3RlbmVyc01hcC5nZXQoZSk7aWYoIXIpcmV0dXJuIG51bGw7dmFyIGk9ci5nZXQodCk7aWYoIWkpcmV0dXJuIG51bGw7dmFyIG89aS5nZXQobiksYT10aGlzLl9nZXRGcm96ZW5MaXN0ZW5lckRlZihvKTtyZXR1cm4gYX19LHtrZXk6XCJoYXNFdmVudExpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoMiE9PWFyZ3VtZW50cy5sZW5ndGgpdGhyb3cgRXJyb3IoXCJPbmx5IHR3byBhcmd1bWVudHMgY2FuIGJlIHNwZWNpZmllZFwiKTt2YXIgbj10aGlzLmV2VGFyZ2V0TGlzdGVuZXJzTWFwLmdldChlKTtpZighbilyZXR1cm4hMTt2YXIgcj1uLmdldCh0KTtyZXR1cm4hKCFyfHwwPT09ci5zaXplKX19LHtrZXk6XCJoYXNFdmVudExpc3RlbmVyXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4pe2lmKDMhPT1hcmd1bWVudHMubGVuZ3RoKXRocm93IEVycm9yKFwiT25seSAzIGFyZ3VtZW50cyBjYW4gYmUgc3BlY2lmaWVkXCIpO3ZhciByPXRoaXMuZXZUYXJnZXRMaXN0ZW5lcnNNYXAuZ2V0KGUpO2lmKCFyKXJldHVybiExO3ZhciBpPXIuZ2V0KHQpO2lmKCFpKXJldHVybiExO3ZhciBvPWkuZ2V0KG4pO3JldHVybiEhb319LHtrZXk6XCJfZ2V0RnJvemVuTGlzdGVuZXJEZWZcIix2YWx1ZTpmdW5jdGlvbihlKXtpZighZSlyZXR1cm4gbnVsbDt2YXIgdD17fSxuPW51bGwscj1lLm9wdGlvbnM7cmV0dXJuIHImJihuPXt9LHQub3B0aW9ucz1uLHIuY2FwdHVyZSYmKG4uY2FwdHVyZT1yLmNhcHR1cmUpLHIuY2FsbGJhY2tPbmNlJiYobi5vbmNlPXIuY2FsbGJhY2tPbmNlKSxyLmxpc3RlbmVyTmFtZSYmKG4ubGlzdGVuZXJOYW1lPXIubGlzdGVuZXJOYW1lKSksdC5saXN0ZW5lcj1lLmxpc3RlbmVyLE9iamVjdC5mcmVlemUobiksT2JqZWN0LmZyZWV6ZSh0KSx0fX0se2tleTpcImNsZWFyQWxsRXZlbnRMaXN0ZW5lcnNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlLHQ9byh0aGlzLmdldEFsbEV2ZW50VGFyZ2V0cygpKTt0cnl7Zm9yKHQucygpOyEoZT10Lm4oKSkuZG9uZTspe3ZhciBuPWUudmFsdWU7dGhpcy5jbGVhckV2ZW50TGlzdGVuZXJzKG4pfX1jYXRjaChlKXt0LmUoZSl9ZmluYWxseXt0LmYoKX19fSx7a2V5OlwiY2xlYXJFdmVudExpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoIWUpdGhyb3cgRXJyb3IoXCJBdCBsZWFzdCB0aGUgRXZlbnRUYXJnZXQgbXVzdCBiZSBzcGVjaWZpZWQgYXMgYW4gYXJndW1lbnRcIik7dmFyIG49dGhpcy5nZXRFdmVudExpc3RlbmVycyhlLHQpO2lmKHQpe2lmKHQpe3ZhciByLGk9byhuKTt0cnl7Zm9yKGkucygpOyEocj1pLm4oKSkuZG9uZTspe3ZhciBhPXIudmFsdWU7dGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGUsdCxudWxsLGEub3B0aW9ucyl9fWNhdGNoKGUpe2kuZShlKX1maW5hbGx5e2kuZigpfX19ZWxzZXt2YXIgcyxsPW8obik7dHJ5e2ZvcihsLnMoKTshKHM9bC5uKCkpLmRvbmU7KXt2YXIgdSxjPXMudmFsdWUsZj1jLmV2ZW50VHlwZSx2PW8oYy5saXN0ZW5lcnMpO3RyeXtmb3Iodi5zKCk7ISh1PXYubigpKS5kb25lOyl7dmFyIHk9dS52YWx1ZS5vcHRpb25zO3RoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLGYsbnVsbCx5KX19Y2F0Y2goZSl7di5lKGUpfWZpbmFsbHl7di5mKCl9fX1jYXRjaChlKXtsLmUoZSl9ZmluYWxseXtsLmYoKX19fX0se2tleTpcImNsZWFyRXZlbnRMaXN0ZW5lclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10aGlzLmdldEV2ZW50TGlzdGVuZXIoZSx0LG4pO3ImJnIub3B0aW9ucyYmdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGUsdCxudWxsLHIub3B0aW9ucyl9fSx7a2V5OlwiZ2V0QWxsRXZlbnRUYXJnZXRzXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmV2VGFyZ2V0TGlzdGVuZXJzTWFwLmtleXMoKSl9fSx7a2V5Olwic2VhcmNoRXZlbnRMaXN0ZW5lcnNCeU5hbWVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdCxuPVtdLHI9byh0aGlzLmdldEFsbEV2ZW50VGFyZ2V0cygpKTt0cnl7Zm9yKHIucygpOyEodD1yLm4oKSkuZG9uZTspe3ZhciBpLGE9dC52YWx1ZSxzPXRoaXMuZXZUYXJnZXRMaXN0ZW5lcnNNYXAuZ2V0KGEpLGw9byhzLmtleXMoKSk7dHJ5e2ZvcihsLnMoKTshKGk9bC5uKCkpLmRvbmU7KXt2YXIgdT1pLnZhbHVlLGM9cy5nZXQodSksZj10aGlzLl9nZXRGcm96ZW5MaXN0ZW5lckRlZihjLmdldChlKSk7ZiYmbi5wdXNoKGYpfX1jYXRjaChlKXtsLmUoZSl9ZmluYWxseXtsLmYoKX19fWNhdGNoKGUpe3IuZShlKX1maW5hbGx5e3IuZigpfXJldHVybiBufX0se2tleTpcIl9zZWFyY2hLZXlJblZhbHVlQ29udGVudFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixhPW8oZSk7dHJ5e2ZvcihhLnMoKTshKHI9YS5uKCkpLmRvbmU7KXt2YXIgcz1pKHIudmFsdWUsMiksbD1zWzBdO2lmKHNbMV1bdF09PT1uKXJldHVybiBsfX1jYXRjaChlKXthLmUoZSl9ZmluYWxseXthLmYoKX1yZXR1cm4gbnVsbH19LHtrZXk6XCJfY2hlY2tUeXBlT2ZPcHRpb25zXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoXCJvYmplY3RcIiE9PXIoZSkmJnZvaWQgMCE9PWUpdGhyb3dcImJvb2xlYW5cIj09dHlwZW9mIGU/bmV3IEVycm9yKFwiVHlwZSBvZiBib29sZWFuIGlzIG5vdCBhY2NlcHRlZCBhcyB0aGUgZm91cnRoIGFyZ3VtZW50IHlvdSBzcGVjaWZ5LlxcbiAgICAgIElmIHlvdSB3YW50IHRvIGVuYWJsZSB1c2VDYXB0dXJlLCBzcGVjaWZ5IHtjYXB0dXJlOiB0cnVlfSBhcyB0aGUgZm91cnRoIHBhcmFtZXRlciBpbnN0ZWFkLlwiKTpuZXcgRXJyb3IoXCJUeXBlIG9mIFwiLmNvbmNhdChyKGUpLFwiIGlzIG5vdCBhY2NlcHRlZCBhcyB0aGUgZm91cnRoIGFyZ3VtZW50IHlvdSBzcGVjaWZ5LlxcbiAgICAgIElmIHlvdSB3YW50IHRvIHNwZWNpZnkgb3B0aW9ucywgc3BlY2lmeSBhbiBvYmplY3QgbGlrZSB7Y2FwdHVyZTogdHJ1ZSwgbGlzdGVuZXJOYW1lOidteS1saXN0ZW5lci0wMSd9LlwiKSl9fSx7a2V5OlwiX2Nsb25lSnNvblwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGUpKX19LHtrZXk6XCJ0eXBlT2ZcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpfX1dKSYmbCh0LnByb3RvdHlwZSxuKSxhJiZsKHQsYSksZX0oKX1dKS5kZWZhdWx0fSkpOyIsIi8qISBtZXJnZS1kZWVwbHkgdjIuMS4xIENvcHlyaWdodCAoYykgMjAxOS0yMDIwIHJpdmVyc3VuLm9yZ0BnbWFpbC5jb20gKi9cbiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwibWVyZ2VEZWVwbHlcIixbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLm1lcmdlRGVlcGx5PXQoKTplLm1lcmdlRGVlcGx5PXQoKX0odGhpcywoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gcihuKXtpZih0W25dKXJldHVybiB0W25dLmV4cG9ydHM7dmFyIG89dFtuXT17aTpuLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbbl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsciksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gci5tPWUsci5jPXQsci5kPWZ1bmN0aW9uKGUsdCxuKXtyLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6bn0pfSxyLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sci50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1yKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBuPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoci5yKG4pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbyBpbiBlKXIuZChuLG8sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxvKSk7cmV0dXJuIG59LHIubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gci5kKHQsXCJhXCIsdCksdH0sci5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxyLnA9XCIvXCIscihyLnM9MCl9KFtmdW5jdGlvbihlLHQscil7ZS5leHBvcnRzPXIoMSl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBjKGUpfShlKXx8ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChlKSlyZXR1cm4gQXJyYXkuZnJvbShlKX0oZSl8fGkoZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gbyhlLHQpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBlfShlKXx8ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgU3ltYm9sfHwhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoZSkpKXJldHVybjt2YXIgcj1bXSxuPSEwLG89ITEsaT12b2lkIDA7dHJ5e2Zvcih2YXIgYyxhPWVbU3ltYm9sLml0ZXJhdG9yXSgpOyEobj0oYz1hLm5leHQoKSkuZG9uZSkmJihyLnB1c2goYy52YWx1ZSksIXR8fHIubGVuZ3RoIT09dCk7bj0hMCk7fWNhdGNoKGUpe289ITAsaT1lfWZpbmFsbHl7dHJ5e258fG51bGw9PWEucmV0dXJufHxhLnJldHVybigpfWZpbmFsbHl7aWYobyl0aHJvdyBpfX1yZXR1cm4gcn0oZSx0KXx8aShlLHQpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gaShlLHQpe2lmKGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBjKGUsdCk7dmFyIHI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpO3JldHVyblwiT2JqZWN0XCI9PT1yJiZlLmNvbnN0cnVjdG9yJiYocj1lLmNvbnN0cnVjdG9yLm5hbWUpLFwiTWFwXCI9PT1yfHxcIlNldFwiPT09cj9BcnJheS5mcm9tKGUpOlwiQXJndW1lbnRzXCI9PT1yfHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChyKT9jKGUsdCk6dm9pZCAwfX1mdW5jdGlvbiBjKGUsdCl7KG51bGw9PXR8fHQ+ZS5sZW5ndGgpJiYodD1lLmxlbmd0aCk7Zm9yKHZhciByPTAsbj1uZXcgQXJyYXkodCk7cjx0O3IrKyluW3JdPWVbcl07cmV0dXJuIG59ZnVuY3Rpb24gYShlKXtyZXR1cm4oYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSkoZSl9ZnVuY3Rpb24gdShlLHQscil7dmFyIGk9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwib2JqZWN0XCI9PT1hKGUpJiYhQXJyYXkuaXNBcnJheShlKX0sYz1yJiZyLmNvbmNhdEFycmF5LGY9e307ciYmci5hc3NpZ25Ub09iamVjdCYmKGY9ci5hc3NpZ25Ub09iamVjdCxyLmFzc2lnblRvT2JqZWN0PW51bGwpO3ZhciBsLHksYixwPW51bGw7aWYocD1mPT09ZT9lOk9iamVjdC5hc3NpZ24oZixlKSxpKGUpJiZpKHQpKWZvcih2YXIgcz0wLGQ9T2JqZWN0LmVudHJpZXModCk7czxkLmxlbmd0aDtzKyspe3ZhciBtPW8oZFtzXSwyKSxqPW1bMF0sZz1tWzFdLHY9ZVtqXTtjJiZBcnJheS5pc0FycmF5KGcpJiZBcnJheS5pc0FycmF5KHYpJiZ0IT09ZT9wW2pdPXYuY29uY2F0LmFwcGx5KHYsbihnKSk6aShnKSYmT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaik/cFtqXT11KHYsZyxyKTpPYmplY3QuYXNzaWduKHAsKGI9ZywoeT1qKWluKGw9e30pP09iamVjdC5kZWZpbmVQcm9wZXJ0eShsLHkse3ZhbHVlOmIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTpsW3ldPWIsbCkpfXJldHVybiBwfWZ1bmN0aW9uIGYoZSl7dmFyIHQ9bnVsbCxyPW51bGwsbj1lLm9wO2lmKCFuKXRocm93IEVycm9yKCdUaGUgaW5pdGlhbGl6YXRpb24gcHJvcGVydHkgXCJvcFwiIGNhbm5vdCBiZSBvbWl0dGVkLiBcIm1lcmdlXCIsXCJvdmVyd3JpdGUtbWVyZ2VcIixcImNsb25lXCIgY2FuIGJlIHNwZWNpZmllZC4nKTt2YXIgbz1cIm1lcmdlXCI9PT1uLGk9XCJjbG9uZVwiPT09bixjPVwib3ZlcndyaXRlLW1lcmdlXCI9PT1uO2lmKG8pe2lmKHQ9ZS5vYmplY3QxLHI9ZS5vYmplY3QyLCF0fHwhcil0aHJvdyBFcnJvcihcIm9iamVjdDEgb3Igb2JqZWN0MiBpcyBub3Qgc3BlY2lmaWVkLlwiKX1lbHNlIGlmKGMpe2lmKHQ9ZS5vYmplY3QxLHI9ZS5vYmplY3QyLCF0fHwhcil0aHJvdyBFcnJvcihcIm9iamVjdDEgb3Igb2JqZWN0MiBpcyBub3Qgc3BlY2lmaWVkLlwiKTtpZigwPT09T2JqZWN0LmtleXMocikubGVuZ3RoKXJldHVybiBudWxsfWVsc2V7aWYoIWkpdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJvcFwiIHByb3BlcnR5IHZhbHVlIFwiJy5jb25jYXQobiwnXCIgaGFzIGJlZW4gc3BlY2lmaWVkLicpKTt0PWUub2JqZWN0MSxyPXt9fXZhciBhLGY9T2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodCkpLGw9bnVsbCx5PShhPXQsT2JqZWN0LmdldFByb3RvdHlwZU9mKGEpIT09T2JqZWN0LnByb3RvdHlwZSk7cmV0dXJuIG8mJnl8fGk/KHUodCx0LHthc3NpZ25Ub09iamVjdDpmLGNvbmNhdEFycmF5OmUmJmUuY29uY2F0QXJyYXl9KSxsPWYpOmw9e30sdShpP2w6dCxyLHthc3NpZ25Ub09iamVjdDpjP3Q6bCxjb25jYXRBcnJheTplJiZlLmNvbmNhdEFycmF5fSksbH1yLnIodCksci5kKHQsXCJkZWZhdWx0XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGZ9KSl9XSkuZGVmYXVsdH0pKTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIkNBTElHTiA9IHt9O1xuXG5DQUxJR04uTEVGVF9UT1AgPSAnTEVGVF9UT1AnO1xuQ0FMSUdOLkhDRU5URVJfVE9QID0gJ0NFTlRFUl9UT1AnO1xuQ0FMSUdOLlJJR0hUX1RPUCA9ICdSSUdIVF9UT1AnO1xuQ0FMSUdOLkxFRlRfVkNFTlRFUiA9ICdMRUZUX0NFTlRFUic7XG5DQUxJR04uSENFTlRFUl9WQ0VOVEVSID0gJ0NFTlRFUl9DRU5URVInO1xuQ0FMSUdOLkNFTlRFUiA9IENBTElHTi5IQ0VOVEVSX1ZDRU5URVI7XG5DQUxJR04uUklHSFRfVkNFTlRFUiA9ICdSSUdIVF9DRU5URVInO1xuQ0FMSUdOLkxFRlRfQk9UVE9NID0gJ0xFRlRfQk9UVE9NJztcbkNBTElHTi5IQ0VOVEVSX0JPVFRPTSA9ICdDRU5URVJfQk9UVE9NJztcbkNBTElHTi5SSUdIVF9CT1RUT00gPSAnUklHSFRfQk9UVE9NJztcblxubW9kdWxlLmV4cG9ydHMgPSBDQUxJR047XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSlNGcmFtZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi9KU0ZyYW1lLmNzcycpO1xudmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ0ByaXZlcnN1bi9ldmVudC1lbWl0dGVyJyk7XG52YXIgQ0FMSUdOID0gcmVxdWlyZSgnLi9DQ29tbW9uLmpzJyk7XG52YXIgV2luZG93RXZlbnRIZWxwZXIgPSByZXF1aXJlKCcuL3V0aWxzL1dpbmRvd0V2ZW50SGVscGVyLmpzJyk7XG52YXIgaW5oZXJpdCA9IHJlcXVpcmUoJy4vdXRpbHMvSW5oZXJpdC5qcycpO1xudmFyIENGcmFtZUFwcGVhcmFuY2UgPSByZXF1aXJlKCcuL2FwcGVhcmFuY2UvQ0ZyYW1lQXBwZWFyYW5jZS5qcycpO1xudmFyIENEb21QYXJ0c0J1aWxkZXIgPSByZXF1aXJlKCcuL2FwcGVhcmFuY2UvQ0RvbVBhcnRzQnVpbGRlci5qcycpO1xudmFyIENTaW1wbGVMYXlvdXRBbmltYXRvciA9IHJlcXVpcmUoJy4vdXRpbHMvQ1NpbXBsZUxheW91dEFuaW1hdG9yLmpzJyk7XG52YXIgRXZlbnRMaXN0ZW5lckhlbHBlciA9IHJlcXVpcmUoJ2V2ZW50LWxpc3RlbmVyLWhlbHBlcicpO1xuXG4vL0lmIHlvdSBkb24ndCB3YW50IHRvIGJ1bmRsZSBwcmVzZXQgc3R5bGVzIGluIEpzRnJhbWUuanMgLGNvbW1lbnQgb3V0IGJlbG93LlxudmFyIHByZXNldFN0eWxlcyA9IHtcbiAgJ3lvc2VtaXRlJzogcmVxdWlyZSgnLi9wcmVzZXRzL2FwcGVhcmFuY2UvUHJlc2V0U3R5bGVZb3NlbWl0ZS5qcycpLFxuICAncmVkc3RvbmUnOiByZXF1aXJlKCcuL3ByZXNldHMvYXBwZWFyYW5jZS9QcmVzZXRTdHlsZVJlZHN0b25lLmpzJyksXG4gICdwb3B1cCc6IHJlcXVpcmUoJy4vcHJlc2V0cy9hcHBlYXJhbmNlL1ByZXNldFN0eWxlUG9wdXAuanMnKSxcbiAgJ3RvYXN0JzogcmVxdWlyZSgnLi9wcmVzZXRzL2FwcGVhcmFuY2UvUHJlc2V0U3R5bGVUb2FzdC5qcycpLFxuICAnbWF0ZXJpYWwnOiByZXF1aXJlKCcuL3ByZXNldHMvYXBwZWFyYW5jZS9QcmVzZXRTdHlsZU1hdGVyaWFsLmpzJyksXG59O1xuXG52YXIgcHJlc2V0V2luZG93cyA9IHtcbiAgJ3lvc2VtaXRlJzogcmVxdWlyZSgnLi9wcmVzZXRzL3dpbmRvdy9QcmVzZXRXaW5kb3dZb3NlbWl0ZS5qcycpLFxufTtcblxudmFyIERFRiA9IHt9O1xuXG4vLyB0cnVlOlN1cHBvcnQgbW91c2Ugb24gbW91c2UtZW5hYmxlZCBkZXZpY2VzXG52YXIgTU9VU0VfRU5BQkxFRCA9IHRydWU7XG5cbi8vIHRydWU6U3VwcG9ydCB0b3VjaCBvbiB0b3VjaC1lbmFibGVkIGRldmljZXNcbnZhciBUT1VDSF9FTkFCTEVEID0gdHJ1ZTtcblxuLy90cnVlOkFsbG93IHRoZSB3aW5kb3cgdG8gYmUgbW92ZWQgb25seSBpbiB0aGUgY2FzZSBvZiBvbmUgZmluZ2VyXG4vLyAodGhlIHdpbmRvdyBjYW5ub3QgYmUgbW92ZWQgaW4gdGhlIGNhc2Ugb2YgdHdvIG9yIG1vcmUgZmluZ2VycylcbnZhciBUT1VDSF9NT1ZFX09OTFlfV0lUSF9PTkVfRklOR0VSID0gdHJ1ZTtcblxuXG4vKipcbiAqIERFRklOSVRJT05TXG4gKi9cbkRFRi5DQkVBTiA9IHt9O1xuREVGLkNCRUFOLkhUTUxfRUxFTUVOVCA9ICdzcGFuJztcbkRFRi5DQkVBTi5IVE1MX0VMRU1FTlRfSURfUFJFRklYID0gJ2h0bWxFbGVtZW50Xyc7XG5ERUYuQ0JFQU4uVFlQRV9OQU1FID0gJ2JlYW4nO1xuXG5cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuXG5cbi8qKlxuICogQ0JlYW5GcmFtZSBDbGFzczxwPlxuICogVGhlIHNtYWxsZXN0IHdpbmRvdy4gSXQgaXMgcmVzcG9uc2libGUgZm9yIGJhc2ljIHByb2Nlc3Npbmcgb25seS5cbiAqXG4gKiBAcGFyYW0gYmVhbklkIGlkIG9mIHRoaXMgc21hbGwgd2luZG93XG4gKiBAcGFyYW0gbGVmdFxuICogQHBhcmFtIHRvcFxuICogQHBhcmFtIHdpZHRoXG4gKiBAcGFyYW0gaGVpZ2h0XG4gKiBAcGFyYW0gemluZGV4XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ0JlYW5GcmFtZShiZWFuSWQsIGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCwgemluZGV4LCB3X2JvcmRlcl93aWR0aCwgYXBwZWFyYW5jZSkge1xuXG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgbWUubW92YWJsZSA9IHRydWU7XG5cblxuICAvL2ZpZWxkc1xuICBtZS5pZCA9IGJlYW5JZDtcbiAgbWUucHJvcGVydHkgPSB7fTtcblxuICBtZS5leHRyYSA9IHt9O1xuXG4gIG1lLnBhcmVudENhbnZhcyA9IG51bGw7XG4gIG1lLmh0bWxFbGVtZW50ID0gbnVsbDtcblxuICBtZS5wdWxsVXBEaXNhYmxlZCA9IGZhbHNlO1xuICBpZiAoYXBwZWFyYW5jZSkge1xuICAgIG1lLnB1bGxVcERpc2FibGVkID0gYXBwZWFyYW5jZS5wdWxsVXBEaXNhYmxlZDtcbiAgfVxuXG5cbiAgLy9pbml0aWFsaXplXG4gIG1lLmh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChERUYuQ0JFQU4uSFRNTF9FTEVNRU5UKTtcbiAgbWUuaHRtbEVsZW1lbnQuaWQgPSBERUYuQ0JFQU4uSFRNTF9FTEVNRU5UX0lEX1BSRUZJWCArIGJlYW5JZDtcbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gcGFyc2VJbnQobGVmdCwgMTApICsgJ3B4JztcbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gcGFyc2VJbnQodG9wLCAxMCkgKyAncHgnO1xuICBtZS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCA9IHBhcnNlSW50KHdpZHRoLCAxMCkgKyAncHgnO1xuICBtZS5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBwYXJzZUludChoZWlnaHQsIDEwKSArICdweCc7XG5cblxuICAvL1ppbmRleCBtYXkgYmVjb21lICd1bmRlZmluZWQnIGluIHNvbWUgY2FzZXMuXG4gIGlmICh6aW5kZXggIT09IG51bGwpIHtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS56SW5kZXggPSB6aW5kZXg7XG4gIH1cbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnIzAwMDAwMCc7XG5cbiAgLy9JZiBJIHNldCBhIGxhcmdlciBmb250IHNpemUsIHdpZHRoIGFuZCBoZWlnaHQgb2Ygd2luZG93IHdpbGwgYmUgYWZmZWN0ZWQuLi4uXG4gIG1lLmh0bWxFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gJzFweCc7XG5cbiAgLy9SZWZlciBwYXJlbnRzIHRvIGVhY2ggb3RoZXIuKHNvdWdvLXNhbnNobylcbiAgbWUuaHRtbEVsZW1lbnQucGFyZW50ID0gbWU7XG5cbiAgaWYgKE1PVVNFX0VOQUJMRUQpIHtcbiAgICAvL05vdGUgdGhhdCAnbW91c2VEb3duJyBpcyBtYXBwZWQgdG8gJ29ubW91c2Vkb3duJyBvZiBodG1sRWxlbWVudCxcbiAgICAvL3NvIHdoZW4gJ29ubW91c2VEb3duJyBmaXJlcyAsdGhlICd0aGlzJyB3aWxsIGluZGljYXRlICdodG1sRWxlbWVudCdcbiAgICBtZS5odG1sRWxlbWVudC5vbm1vdXNlZG93biA9IG1lLm9ubW91c2VEb3duO1xuICB9XG5cbiAgaWYgKFRPVUNIX0VOQUJMRUQpIHtcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB7XG4gICAgICB2YXIgZnVuY09uVG91Y2hTdGFydCA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAvLyBUaGUgXCJtb3VzZWRvd25cIiBldmVudCBoYXBwZW5zIHJpZ2h0IGFmdGVyIFwidG91Y2hzdGFydFwiIGV2ZW50LFxuICAgICAgICAvLyBidXQgSSBkb24ndCBjYWxsICNwcmV2ZW50ZGVmYXVsdCBiZWNhdXNlICNwcmV2ZW50ZGVmYXVsdCBwcmV2ZW50cyBcIm9uY2xpY2tcIi5cbiAgICAgICAgLy8gU28sIHBlcmZvcm0gI3ByZXZlbnRkZWZhdWx0IG9ubHkgZm9yIFwidG91Y2htb3ZlXCJcbiAgICAgICAgLy8gZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG1lLm9ubW91c2VEb3duLmJpbmQodGhpcykoZXZ0KTtcbiAgICAgIH07XG4gICAgICBtZS5odG1sRWxlbWVudC5vbnRvdWNoc3RhcnQgPSBmdW5jT25Ub3VjaFN0YXJ0O1xuICAgIH1cbiAgfVxuXG4gIC8vVHlwZSBuYW1lIG9mIHRoaXMgY2xhc3NcbiAgbWUuaHRtbEVsZW1lbnQudHlwZU5hbWUgPSBERUYuQ0JFQU4uVFlQRV9OQU1FO1xuXG4gIC8vU3BlY2lhbCBmaWVsZCBpbmRpY2F0aW5nIHVzYWdlIG9mIHRoaXMgY2xhc3NcbiAgbWUuaHRtbEVsZW1lbnQudXNhZ2UgPSAnbm90aGluZyc7XG5cbiAgLy9XaGV0aGVyIGl0IGNhbiBtb3ZlIG91dHNpZGUgdGhlIGZyYW1lKHdha3UpLlxuICBtZS5odG1sRWxlbWVudC5pc1JhbmdlTGltaXRlZCA9IGZhbHNlO1xuXG4gIC8vTW92ZW1lbnQgbWFnbmlmaWNhdGlvbiBpbiB0aGUgWCBkaXJlY3Rpb25cbiAgLy8oSWYgaXQgaXMgMCwgaXQgY2FuIG5vdCBtb3ZlIGluIHRoZSBYIGRpcmVjdGlvbi4pXG4gIG1lLmh0bWxFbGVtZW50LmFyZ1ggPSAxO1xuXG4gIC8vTW92ZW1lbnQgbWFnbmlmaWNhdGlvbiBpbiBZIGRpcmVjdGlvblxuICAvLyAoSWYgaXQgaXMgMCwgaXQgY2FuIG5vdCBtb3ZlIGluIFkgZGlyZWN0aW9uKVxuICBtZS5odG1sRWxlbWVudC5hcmdZID0gMTtcbiAgbWUuZXh0ZXJuYWxBcmVhQ2xpY2tlZExpc3RlbmVyID0gbnVsbDtcblxuICBtZS5vbk1vdmVMaXN0ZW5lciA9IG51bGw7XG59XG5cbkNCZWFuRnJhbWUucHJvdG90eXBlLmdldFdpbmRvd1R5cGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICdDQmVhbkZyYW1lJztcbn07XG5cbkNCZWFuRnJhbWUucHJvdG90eXBlLnNldE9uTW92ZUxpc3RlbmVyID0gZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUub25Nb3ZlTGlzdGVuZXIgPSBsaXN0ZW5lcjtcbn07XG5DQmVhbkZyYW1lLnByb3RvdHlwZS5fb25Nb3ZlID0gZnVuY3Rpb24oZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBpZiAobWUub25Nb3ZlTGlzdGVuZXIpIHtcbiAgICBtZS5vbk1vdmVMaXN0ZW5lcihlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgd2hldGhlciB0aGUgZnJhbWUgY2FuIGJlIG1vdmVkIHdoaWxlIGRyYWdnaW5nIHdpdGggdGhlIG1vdXNlXG4gKiBAcGFyYW0gZW5hYmxlZFxuICovXG5DQmVhbkZyYW1lLnByb3RvdHlwZS5zZXRNb3ZhYmxlID0gZnVuY3Rpb24oZW5hYmxlZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIGlmIChlbmFibGVkKSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuYXJnWCA9IDE7XG4gICAgbWUuaHRtbEVsZW1lbnQuYXJnWSA9IDE7XG4gIH0gZWxzZSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuYXJnWCA9IDA7XG4gICAgbWUuaHRtbEVsZW1lbnQuYXJnWSA9IDA7XG4gIH1cblxuICBtZS5tb3ZhYmxlID0gZW5hYmxlZDtcblxuICByZXR1cm4gbWU7XG59O1xuXG5cbkNCZWFuRnJhbWUucHJvdG90eXBlLnNldFBhcmVudENhbnZhcyA9IGZ1bmN0aW9uKHBhcmVudENhbnZhcykge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5wYXJlbnRDYW52YXMgPSBwYXJlbnRDYW52YXM7XG4gIG1lLmh0bWxFbGVtZW50LnBhcmVudENhbnZhcyA9IG1lLnBhcmVudENhbnZhcztcbiAgcmV0dXJuIG1lO1xufTtcbkNCZWFuRnJhbWUucHJvdG90eXBlLnNldE9uRXh0ZXJuYWxBcmVhQ2xpY2tlZExpc3RlbmVyID0gZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUuZXh0ZXJuYWxBcmVhQ2xpY2tlZExpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHJldHVybiBtZTtcbn07XG5DQmVhbkZyYW1lLnByb3RvdHlwZS5vbkJvZHlDbGlja2VkID0gZnVuY3Rpb24oZSkge1xuXG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgdmFyIGNsaWNrWCA9IGUucGFnZVg7XG4gIHZhciBjbGlja1kgPSBlLnBhZ2VZO1xuXG4gIHZhciBsZWZ0ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCk7XG4gIHZhciB0b3AgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS50b3ApO1xuICB2YXIgd2lkdGggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCk7XG4gIHZhciBoZWlnaHQgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQpO1xuXG4gIGlmIChsZWZ0IDwgY2xpY2tYICYmIGNsaWNrWCA8IChsZWZ0ICsgd2lkdGgpICYmIHRvcCA8IGNsaWNrWSAmJiAoY2xpY2tZIDwgdG9wICsgaGVpZ2h0KSkge1xuICAgIC8vLSBjbGlja2VkIGludGVybmFsIGFyZWEgb2YgdGhpcyBmcmFtZVxuICB9IGVsc2Uge1xuXG4gICAgLy8tIGNsaWNrZWQgZXh0ZXJuYWwgYXJlYSBvZiB0aGlzIGZyYW1lXG4gICAgaWYgKG1lLmV4dGVybmFsQXJlYUNsaWNrZWRMaXN0ZW5lcikge1xuICAgICAgbWUuZXh0ZXJuYWxBcmVhQ2xpY2tlZExpc3RlbmVyKCk7XG4gICAgfVxuXG4gIH1cblxuXG59O1xuQ0JlYW5GcmFtZS5wcm90b3R5cGUub25tb3VzZURvd24gPSBmdW5jdGlvbihldnQpIHtcblxuICAvLyBUeXBpY2FsbHksIGlmIHlvdSBtb3VzZSBkb3duIG9uIHRoZSB0aXRsZSBwb3J0aW9uLCB0aGUgb25tb3VzZWRvd24gZmlyZXMgdG8gbW92ZSB0aGUgd2luZG93LlxuICAvLyBNb3VzaW5nIGRvd24gdGhlIGJvdHRvbSBvZiB0aGUgd2luZG93LCB0aGUgbGVmdCBzaWRlIG9mIHRoZSB3aW5kb3csXG4gIC8vIG9yIHRoZSBib3R0b20gb2YgdGhlIHdpbmRvdyB3aWxsIGZpcmUgdGhlIG9ubW91c2VEb3duIG9mIHRoZSB3aW5kb3cgaXRzZWxmIChDQmVhbkZyYW1lKVxuICAvLyBhcyB3ZWxsIGFzIHRoZSBvbm1vdXNlRG93biBvZiB0aGUgQ01hcmtlcldpbmRvdyBmb3IgcmVzaXppbmcuXG4gIC8vIEVhY2ggbW91c2Vkb3duIGVsZW1lbnQgaXMgc2V0IHRvIGEgY3VycmVudE9iamVjdCBhcyBiZWluZyBzZWxlY3RlZCxcbiAgLy8gd2hldGhlciBpdCdzIGEgd2luZG93IG9yIGEgbWFya2VyLlxuXG4gIC8vIHRoaXMgbWVhbnMgaHRtbEVsZW1lbnQgb2YgQ0JlYW5GcmFtZSBvYmplY3RcbiAgdmFyIHJlZkh0bWxFbGVtZW50ID0gdGhpcztcblxuICB2YXIgZSA9IGV2dDtcblxuICBpZiAoVE9VQ0hfRU5BQkxFRCkge1xuICAgIGlmIChldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICB2YXIgY2hhbmdlZFRvdWNoZXMgPSBldnQuY2hhbmdlZFRvdWNoZXM7XG4gICAgICBpZiAoVE9VQ0hfTU9WRV9PTkxZX1dJVEhfT05FX0ZJTkdFUikge1xuICAgICAgICB2YXIgdG91Y2hlcyA9IGV2dC50b3VjaGVzO1xuICAgICAgICBpZiAodG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBlID0gY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUgPSBjaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL1JldHJpZXZlIENCZWFuRnJhbWUgb2JqZWN0IGl0c2VsZlxuICB2YXIgcmVmQ0JlYW5GcmFtZSA9IHJlZkh0bWxFbGVtZW50LnBhcmVudDtcblxuICBpZiAoZS5idXR0b24gPT0gMCB8fCBldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgLy8gZm9yIG1vZGFsIGJhY2tncm91bmQgd2luZG93XG4gICAgaWYgKHJlZkNCZWFuRnJhbWUucHVsbFVwRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICAvLyBTZXQgdGhlIGN1cnJlbnQgQ0JlYW5GcmFtZSB0byBiZSBzZWxlY3RlZCg9Y3VycmVudE9iamVjdCkgYW1vbmcgb3RoZXIgQ0JlYW5GcmFtZXMgaW4gdGhlIHBhcmVudCBjYW52YXMuXG4gICAgICByZWZIdG1sRWxlbWVudC5wYXJlbnRDYW52YXMuY3VycmVudE9iamVjdCA9IHJlZkh0bWxFbGVtZW50O1xuXG4gICAgICAvLyBCcmluZyB0aGUgY3VycmVudCBiZWFuIHRvIHRoZSB0b3BcbiAgICAgIHJlZkh0bWxFbGVtZW50LnBhcmVudENhbnZhcy5wdWxsVXAocmVmQ0JlYW5GcmFtZS5pZCk7XG4gICAgfVxuXG4gIH0gZWxzZSBpZiAoZS5idXR0b24gPT0gMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChyZWZIdG1sRWxlbWVudC5wYXJlbnRDYW52YXMuY3VycmVudE9iamVjdCkge1xuXG4gICAgcmVmSHRtbEVsZW1lbnQucGFyZW50Q2FudmFzLm9mZnNldFggPSBlLnBhZ2VYIC0gcGFyc2VJbnQocmVmSHRtbEVsZW1lbnQucGFyZW50Q2FudmFzLmN1cnJlbnRPYmplY3Quc3R5bGUubGVmdCwgMTApO1xuICAgIHJlZkh0bWxFbGVtZW50LnBhcmVudENhbnZhcy5vZmZzZXRZID0gZS5wYWdlWSAtIHBhcnNlSW50KHJlZkh0bWxFbGVtZW50LnBhcmVudENhbnZhcy5jdXJyZW50T2JqZWN0LnN0eWxlLnRvcCwgMTApO1xuICB9XG5cblxuICByZXR1cm4gZmFsc2U7XG59O1xuLyoqXG4gKiBFbmQgb2YgQ0JlYW5GcmFtZSBDbGFzcyA8cD5cbiAqL1xuXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cblxuXG5ERUYuQ0FOVkFTID0ge307XG5ERUYuQ0FOVkFTLkhUTUxfRUxFTUVOVCA9ICdkaXYnO1xuREVGLkNBTlZBUy5XSURUSF9BREpVU1RfMjAxODA3MjIgPSAyO1xuREVGLkNBTlZBUy5IRUlHSFRfQURKVVNUXzIwMTgwNzIyID0gMztcblxuLyoqXG4gKiBDQ2FudmFzIGNsYXNzXG4gKiBBIGNhbnZhcyBpcyBhIHBsYWNlIHdoZXJlIHdpbmRvd3MgYXJlIGFycmFuZ2VkLCB3aGVyZSB5b3UgY2FuIGRyYWcgYW5kIG1vdmUgZnJlZWx5LlxuICpcbiAqIEBwYXJhbSBwYXJlbnRFbGVtZW50XG4gKiBAcGFyYW0gY2FudmFzSWRcbiAqIEBwYXJhbSBsZWZ0XG4gKiBAcGFyYW0gdG9wXG4gKiBAcGFyYW0gd2lkdGhcbiAqIEBwYXJhbSBoZWlnaHRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDQ2FudmFzKHBhcmVudEVsZW1lbnQsIGNhbnZhc0lkLCBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQpIHtcblxuICAvL0V2ZW50IGRhdGEgdG8gYmUgdHJhbnNtaXR0ZWRcbiAgZnVuY3Rpb24gRXZlbnREYXRhKCkge1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgICB0aGlzLnNjcmVlblggPSAwO1xuICAgIHRoaXMuc2NyZWVuWSA9IDA7XG4gICAgdGhpcy5kZWx0YVggPSAwO1xuICAgIHRoaXMuZGVsdGFZID0gMDtcbiAgICB0aGlzLmlzTW92ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnRhcmdldFR5cGVOYW1lID0gbnVsbDtcbiAgICB0aGlzLnRhcmdldFVzYWdlID0gbnVsbDtcbiAgICB0aGlzLnRhcmdldE9iamVjdCA9IG51bGw7XG4gIH1cblxuICB2YXIgbWUgPSB0aGlzO1xuXG5cbiAgbWUuZW5hYmxlUHVsbFVwID0gdHJ1ZTsvLyB0cnVlOlB1bGwtdXAgc29ydGluZyB0byBicmluZyB0aGUgd2luZG93IHRvIHRoZSBmb3JlZnJvbnQgYnkgY2xpY2tpbmcgdG8gZ2V0IGZvY3VzLlxuICBtZS5jdXJyZW50T2JqZWN0ID0gbnVsbDtcbiAgbWUub25Ub3BPYmplY3QgPSBudWxsO1xuICBtZS5vZmZzZXRYID0gMDtcbiAgbWUub2Zmc2V0WSA9IDA7XG5cblxuICAvL09iamVjdCB3aGljaCBnZW5lcmF0ZWQgJ21vdXNlRG93bicgZXZlbnQgYXQgdGhlIHZlcnkgYmVnaW5uaW5nKGljaGliYW4tc2Fpc2hvKVxuICBtZS5tb3VzZURvd25Tb3VyY2UgPSBudWxsO1xuXG4gIG1lLmlkID0gY2FudmFzSWQ7XG4gIG1lLmNhbnZhc0VsZW1lbnQgPSBudWxsO1xuICBtZS5wYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudDtcbiAgbWUuYmVhbkxpc3QgPSBuZXcgQXJyYXkoKTtcblxuICBtZS5iZWFuSWROYW1lID0ge307Ly9rZXk6YmVhbklkIHZhbHVlOmJlYW5OYW1lXG4gIG1lLmJlYW5OYW1lSWQgPSB7fTsvL2tleTpiZWFuTmFtZSB2YWx1ZTpiZWFuSWRcblxuICBtZS5ldmVudERhdGEgPSBuZXcgRXZlbnREYXRhKCk7XG5cblxuICBtZS5iYXNlWkluZGV4ID0gMDtcbiAgbWUuc2V0QmFzZVpJbmRleCA9IGZ1bmN0aW9uKGJhc2VaSW5kZXgpIHtcbiAgICBtZS5iYXNlWkluZGV4ID0gYmFzZVpJbmRleDtcbiAgfTtcbiAgbWUuZ2V0QmFzZVpJbmRleCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBtZS5iYXNlWkluZGV4O1xuICB9O1xuXG5cbiAgbWUuY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoREVGLkNBTlZBUy5IVE1MX0VMRU1FTlQpO1xuXG4gIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUuekluZGV4ID0gMjAwMDtcbiAgbWUuY2FudmFzRWxlbWVudC5pZCA9IG1lLmlkO1xuICBtZS5jYW52YXNFbGVtZW50LnN0eWxlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcbiAgbWUuY2FudmFzRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUubGVmdCA9IHBhcnNlSW50KGxlZnQpICsgJ3B4JztcbiAgbWUuY2FudmFzRWxlbWVudC5zdHlsZS50b3AgPSBwYXJzZUludCh0b3ApICsgJ3B4JztcbiAgLy9BZGRlZCBhbiBhZGp1c3RtZW50IHZhbHVlLkJlY2F1c2UgdHJhbnNwYXJlbnQgcGFydCBhcHBlYXJzIGF0IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbixcbiAgbWUuY2FudmFzRWxlbWVudC5zdHlsZS53aWR0aCA9IChwYXJzZUludCh3aWR0aCkgKyBERUYuQ0FOVkFTLldJRFRIX0FESlVTVF8yMDE4MDcyMikgKyAncHgnO1xuICBtZS5jYW52YXNFbGVtZW50LnN0eWxlLmhlaWdodCA9IChwYXJzZUludChoZWlnaHQpICsgREVGLkNBTlZBUy5IRUlHSFRfQURKVVNUXzIwMTgwNzIyKSArICdweCc7XG4gIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgbWUuY2FudmFzRWxlbWVudC5zdHlsZS5ib3JkZXJTdHlsZSA9ICdub25lJztcbiAgbWUuY2FudmFzRWxlbWVudC5zdHlsZS5tYXJnaW4gPSAnMHB4JztcbiAgbWUuY2FudmFzRWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9ICcwcHgnO1xuICBtZS5jYW52YXNFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gJ3RyYW5zcGFyZW50JztcblxuICAvL0FkZCB0aGUgQ2FudmFzJ3MgaHRtbCBlbGVtZW50IGludG8gdGhlIGNhbnZhcydzIHBhcmVudCBodG1sIGVsZW1lbnRcbiAgbWUucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChtZS5jYW52YXNFbGVtZW50KTtcblxufVxuXG5cbkNDYW52YXMucHJvdG90eXBlLm1vdXNlTW92ZSA9IGZ1bmN0aW9uKGV2dCkge1xuXG4gIHZhciBtZSA9IHRoaXM7XG4gIHZhciBlID0gZXZ0O1xuICBpZiAoVE9VQ0hfRU5BQkxFRCkge1xuICAgIGlmIChldnQudHlwZSA9PT0gJ3RvdWNobW92ZScpIHtcbiAgICAgIHZhciBjaGFuZ2VkVG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlcztcbiAgICAgIGlmIChUT1VDSF9NT1ZFX09OTFlfV0lUSF9PTkVfRklOR0VSKSB7XG4gICAgICAgIHZhciB0b3VjaGVzID0gZXZ0LnRvdWNoZXM7XG4gICAgICAgIGlmICh0b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGUgPSBjaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZSA9IGNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAobWUuY3VycmVudE9iamVjdCkge1xuXG4gICAgLy9ldmVudERhdGEuaXNNb3ZlZD10cnVlO1RoZSBwcmVzZW5jZSBvZiBldmVudCBkYXRhIG1lYW5zIHRoYXQgaXQgaGFzIG1vdmVkLlxuICAgIG1lLmV2ZW50RGF0YS50YXJnZXRUeXBlTmFtZSA9IG1lLmN1cnJlbnRPYmplY3QudHlwZU5hbWU7XG4gICAgbWUuZXZlbnREYXRhLnRhcmdldFVzYWdlID0gbWUuY3VycmVudE9iamVjdC51c2FnZTtcbiAgICBtZS5ldmVudERhdGEudGFyZ2V0T2JqZWN0ID0gbWUuY3VycmVudE9iamVjdDtcblxuICAgIC8vRXZlbiB3aGVuIG9iaiBpcyBub3QgYmVpbmcgZHJhZ2dlZCwgbW91c2UgY29vcmRpbmF0ZXMgYXJlIHVzZWQgaGVyZSBiZWNhdXNlIHRoZXkgYXJlIG5lZWRlZC5cbiAgICB2YXIgbmV3T2JqTGVmdFB4ID0gZS5wYWdlWCAtIG1lLm9mZnNldFg7XG4gICAgdmFyIG5ld09ialRvcFB4ID0gZS5wYWdlWSAtIG1lLm9mZnNldFk7XG5cbiAgICB2YXIgYWJzb2x1dGVNb3VzZVggPSBlLnBhZ2VYO1xuICAgIHZhciBhYnNvbHV0ZU1vdXNlWSA9IGUucGFnZVk7XG5cbiAgICAvL1Rha2UgdGhlIHNuYXBzaG90IGJlZm9yZSB1cGRhdGluZyB0aGUgbG9jYXRpb24uXG4gICAgdmFyIG9sZE9iakxlZnRQeCA9IG1lLmN1cnJlbnRPYmplY3Quc3R5bGUubGVmdDtcbiAgICB2YXIgb2xkT2JqVG9wUHggPSBtZS5jdXJyZW50T2JqZWN0LnN0eWxlLnRvcDtcblxuICAgIC8vV2hlbiB0aGUgbW91c2UgY3Vyc29yIGdvZXMgb3V0IG9mIHJhbmdlLFxuICAgIC8vdGhlIGFkZGl0aW9uIGluIHRoZSBYIGRpcmVjdGlvbiBhbmQgWSBkaXJlY3Rpb24gKGRlbHRhIFgsIGRlbHRhIFkpIGlzIHNldCB0byB6ZXJvLlxuICAgIC8vdGhpcy5sZWZ0PUNhdmFzJ3MgbGVmdCBzaWRlIGVkZ2UsIHRoaXMudG9wPUNhbnZhcydzIHRvcCBzaWRlIGVkZ2UuXG4gICAgdmFyIHRtcExlZnQgPSBwYXJzZUludChuZXdPYmpMZWZ0UHgsIDEwKTtcbiAgICB2YXIgdG1wVG9wID0gcGFyc2VJbnQobmV3T2JqVG9wUHgsIDEwKTtcblxuICAgIHZhciB0bXBSaWdodCA9IHRtcExlZnQgKyBwYXJzZUludChtZS5jdXJyZW50T2JqZWN0LnN0eWxlLndpZHRoLCAxMCk7XG4gICAgdmFyIHRtcEJvdHRvbSA9IHRtcFRvcCArIHBhcnNlSW50KG1lLmN1cnJlbnRPYmplY3Quc3R5bGUuaGVpZ2h0LCAxMCk7XG5cbiAgICB2YXIgc3R5bGVXaWR0aCA9IHBhcnNlSW50KG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGgsIDEwKTtcbiAgICB2YXIgc3R5bGVIZWlnaHQgPSBwYXJzZUludChtZS5jYW52YXNFbGVtZW50LnN0eWxlLmhlaWdodCwgMTApO1xuXG4gICAgdmFyIGRlbHRhWCA9IDA7XG4gICAgdmFyIGRlbHRhWSA9IDA7XG5cbiAgICBpZiAobWUuY3VycmVudE9iamVjdC5pc1JhbmdlTGltaXRlZCA9PSB0cnVlICYmXG4gICAgICAodG1wTGVmdCA8PSAwIHx8IHRtcFJpZ2h0ID4gc3R5bGVXaWR0aCB8fCB0bXBUb3AgPD0gMCB8fCB0bXBCb3R0b20gPiBzdHlsZUhlaWdodClcbiAgICApIHtcbiAgICAgIGRlbHRhWCA9IDA7XG4gICAgICBkZWx0YVkgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWx0YVggPSAocGFyc2VJbnQobmV3T2JqTGVmdFB4LCAxMCkgLSBwYXJzZUludChvbGRPYmpMZWZ0UHgsIDEwKSk7XG4gICAgICBkZWx0YVkgPSAocGFyc2VJbnQobmV3T2JqVG9wUHgsIDEwKSAtIHBhcnNlSW50KG9sZE9ialRvcFB4LCAxMCkpO1xuICAgICAgbWUuY3VycmVudE9iamVjdC5zdHlsZS5sZWZ0ID0gKHBhcnNlSW50KG1lLmN1cnJlbnRPYmplY3Quc3R5bGUubGVmdCkgKyBkZWx0YVggKiBtZS5jdXJyZW50T2JqZWN0LmFyZ1gpICsgJ3B4JztcbiAgICAgIG1lLmN1cnJlbnRPYmplY3Quc3R5bGUudG9wID0gKHBhcnNlSW50KG1lLmN1cnJlbnRPYmplY3Quc3R5bGUudG9wKSArIGRlbHRhWSAqIG1lLmN1cnJlbnRPYmplY3QuYXJnWSkgKyAncHgnO1xuXG4gICAgICB2YXIgcGFyZW50T2JqZWN0ID0gbWUuY3VycmVudE9iamVjdC5wYXJlbnQ7XG4gICAgICBpZiAocGFyZW50T2JqZWN0ICYmIHBhcmVudE9iamVjdC5fb25Nb3ZlKSB7XG4gICAgICAgIHBhcmVudE9iamVjdC5fb25Nb3ZlKCk7XG4gICAgICB9XG5cbiAgICB9XG4gICAgbWUuZXZlbnREYXRhLmRlbHRhWCA9IGRlbHRhWDtcbiAgICBtZS5ldmVudERhdGEuZGVsdGFZID0gZGVsdGFZO1xuXG4gICAgcmV0dXJuIG1lLmV2ZW50RGF0YTtcblxuICB9XG4gIC8vUmV0dXJucyBudWxsIGlmIG5vbmUgb2YgdGhlIG9iamVjdHMgYXJlIGNsaWNrZWQgYW5kIHRoZSBvbmx5IG1vdXNlIGp1c3QgbW92ZXMuXG4gIHJldHVybiBudWxsO1xufTtcblxuXG5DQ2FudmFzLnByb3RvdHlwZS5tb3VzZVVwID0gZnVuY3Rpb24oZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5jdXJyZW50T2JqZWN0ID0gbnVsbDtcbiAgbWUubW91c2VEb3duU291cmNlID0gbnVsbDtcbn07XG5cblxuLy9CcmluZyB0aGUgb2JqZWN0IGluIGZyb250XG5DQ2FudmFzLnByb3RvdHlwZS5wdWxsVXAgPSBmdW5jdGlvbih0YXJnZXRCZWFuSWQpIHtcblxuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciB0bXBCZWFuQXJyYXkgPSBbXTtcblxuICB2YXIgYmVhbkxpc3QgPSBtZS5iZWFuTGlzdDtcblxuICBmb3IgKHZhciBpIGluIGJlYW5MaXN0KSB7XG4gICAgdG1wQmVhbkFycmF5LnB1c2goYmVhbkxpc3RbaV0pO1xuICB9XG5cbiAgLy9CcmluZyB0aGUgdGFyZ2V0IG9iamVjdCBpbiBmcm9udCBhbmQgc2V0IHppbmRleCB0byAxLlxuICB2YXIgdGFyZ2V0QmVhbiA9IGJlYW5MaXN0W3RhcmdldEJlYW5JZF07XG5cbiAgaWYgKG1lLmVuYWJsZVB1bGxVcCkge1xuICAgIG1lLnB1bGxVcFNvcnQodGFyZ2V0QmVhbiwgdG1wQmVhbkFycmF5LCBtZS5iYXNlWkluZGV4KTtcbiAgfVxuXG5cbiAgLy9SZW1lbWJlciB0aGUgdG9wIG9iamVjdFxuICBtZS5vblRvcE9iamVjdCA9IHRhcmdldEJlYW47XG5cblxufTtcblxuLy9DYWxjdWxhdGUgdGhlIGZyb250IC8gYmFjayBpbmZvcm1hdGlvbiBvZiB0aGUgd2luZG93IGFjY3VyYXRlbHkuXG5DQ2FudmFzLnByb3RvdHlwZS5wdWxsVXBTb3J0ID0gZnVuY3Rpb24ocHVsbHVwT2JqZWN0LCBvYmplY3RBcnJheSwgYmFzZUluZGV4KSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgLy9JbmNyZWFzZSB0aGUgaW5kZXggbnVtYmVyIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIHB1bGx1cE9iamVjdC5odG1sRWxlbWVudC5zdHlsZS56SW5kZXggPSBvYmplY3RBcnJheS5sZW5ndGggKyBiYXNlSW5kZXg7XG5cbiAgLy9zb3J0IGJ5IGluZGV4XG4gIG9iamVjdEFycmF5LnNvcnQoZnVuY3Rpb24oYiwgYSkge1xuICAgIHJldHVybiAtcGFyc2VJbnQoYi5odG1sRWxlbWVudC5zdHlsZS56SW5kZXgsIDEwKSArIHBhcnNlSW50KGEuaHRtbEVsZW1lbnQuc3R5bGUuekluZGV4LCAxMCk7XG4gIH0pO1xuXG4gIC8vUmVkZWZpbmUgbnVtYmVyIG9mIHRoZSBpbmRleFxuICBmb3IgKHZhciBpIGluIG9iamVjdEFycmF5KSB7XG4gICAgb2JqZWN0QXJyYXlbaV0uaHRtbEVsZW1lbnQuc3R5bGUuekluZGV4ID0gKG9iamVjdEFycmF5Lmxlbmd0aCAtIDEpIC0gaSArIGJhc2VJbmRleDtcbiAgfVxuXG59O1xuXG5cbi8qKlxuICogcmVtb3ZlIHRoZSBiZWFuIG9iamVjdFxuICogQHBhcmFtIGJlYW5JZFxuICovXG5DQ2FudmFzLnByb3RvdHlwZS5yZW1vdmVCZWFuID0gZnVuY3Rpb24oYmVhbklkKSB7XG5cbiAgdmFyIG1lID0gdGhpcztcblxuICAvL1JldHJpZXZlIHRoZSB0YXJnZXQgYmVhbkZyYW1lXG4gIHZhciBiZWFuTGlzdCA9IG1lLmJlYW5MaXN0O1xuICB2YXIgdGFyZ2V0QmVhbiA9IGJlYW5MaXN0W2JlYW5JZF07XG5cbiAgLy9SZW1vdmUgYmVhbidzIGh0bWxFbGVtZW50IGZyb20gY2FudmFzRWxlbWVudFxuICBtZS5jYW52YXNFbGVtZW50LnJlbW92ZUNoaWxkKHRhcmdldEJlYW4uaHRtbEVsZW1lbnQpO1xuXG4gIC8vRGVsZXRlIHRoZSBiZWFuIG9iamVjdCBpbiB0aGUgYXNzb2NpYXRpdmUgYXJyYXkuXG4gIGRlbGV0ZSBiZWFuTGlzdFtiZWFuSWRdO1xuXG5cbn07XG5cblxuLyoqXG4gKiBBZGQgYmVhbiBpbnRvIHRoaXMgY2FudmFzXG4gKiBAcGFyYW0gYmVhblxuICovXG5DQ2FudmFzLnByb3RvdHlwZS5hZGRCZWFuID0gZnVuY3Rpb24oYmVhbikge1xuXG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgdmFyIGJlYW5MaXN0ID0gbWUuYmVhbkxpc3Q7XG5cbiAgdmFyIGJlYW5JZE5hbWUgPSBtZS5iZWFuSWROYW1lOy8va2V5OmJlYW5JZCB2YWx1ZTpiZWFuTmFtZVxuICB2YXIgYmVhbk5hbWVJZCA9IG1lLmJlYW5OYW1lSWQ7IC8va2V5OmJlYW5OYW1lIHZhbHVlOmJlYW5JZFxuXG5cbiAgYmVhbkxpc3RbYmVhbi5pZF0gPSBiZWFuO1xuXG4gIGlmIChiZWFuLnByb3BlcnR5Lm5hbWUpIHtcbiAgICBiZWFuTmFtZUlkW2JlYW4ucHJvcGVydHkubmFtZV0gPSBiZWFuLmlkO1xuICAgIGJlYW5JZE5hbWVbYmVhbi5pZF0gPSBiZWFuLnByb3BlcnR5Lm5hbWU7XG4gIH1cblxuICAvL0luIHRoaXMgdXNhZ2UgY2FzZSB0aGUgJ2xlbmd0aCcgcHJvcGVydHkgaXMgaW52YWxpZCAuLlxuICB2YXIgbnVtID0gMDtcblxuICBmb3IgKHZhciBqIGluIGJlYW5MaXN0KSB7XG4gICAgbnVtKys7XG4gIH1cblxuICAvL1NldCB6SW5kZXggc28gdGhhdCB3aGF0IHlvdSBhZGQgbGF0ZXIgd2lsbCBjb21lIHVwLlxuICBiZWFuLmh0bWxFbGVtZW50LnN0eWxlLnpJbmRleCA9IG51bSArIG1lLmJhc2VaSW5kZXg7XG5cbiAgLy9PbiB0aGUgYmVhbiBzaWRlLCBzcGVjaWZ5IHRoZSBwYXJlbnQgb2YgdGhlIGJlYW4gdG8gbWUuXG4gIGJlYW4uc2V0UGFyZW50Q2FudmFzKG1lKTtcblxuXG4gIHRoaXMuY2FudmFzRWxlbWVudC5hcHBlbmRDaGlsZChiZWFuLmh0bWxFbGVtZW50KTtcbn07XG5cbkNDYW52YXMucHJvdG90eXBlLmdldFBhcmVudEVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgcmV0dXJuIG1lLnBhcmVudEVsZW1lbnQ7XG59O1xuXG4vKipcbiAqIEVuZCBvZiBjYW52YXMgY2xhc3NcbiAqL1xuXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cblxuXG5ERUYuQ0ZSQU1FID0ge307XG5ERUYuQ0ZSQU1FLkNBTlZBU19FTEVNRU5UX0JHQ09MT1IgPSAndHJhbnNwYXJlbnQnO1xuREVGLkNGUkFNRS5NT0RBTF9CQUNLR1JPVU5EX0ZSQU1FX0lEX1BSRUZJWCA9ICd3aW5kb3dfX21vZGFsX3dpbmRvd19iYWNrZ3JvdW5kXyc7XG5cblxuaW5oZXJpdChDRnJhbWUsIENCZWFuRnJhbWUpO1xuXG5cbi8qKlxuICogQ0ZyYW1lIGNsYXNzXG4gKiA8cD5cbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIHdpbmRvdyB3aG9zZSBzaXplIGNhbiBiZSBjaGFuZ2VkICxcbiAqIGNhbiBtb3ZlIGZyZWVseSBvbiB0aGUgc2NyZWVuLFxuICogY2FuIGhhdmUgYSB0aXRsZSBiYXIsXG4gKlxuICogQHBhcmFtIHdpbmRvd0lkXG4gKiBAcGFyYW0gd19sZWZ0XG4gKiBAcGFyYW0gd190b3BcbiAqIEBwYXJhbSB3X3dpZHRoXG4gKiBAcGFyYW0gd19oZWlnaHRcbiAqIEBwYXJhbSB6aW5kZXhcbiAqIEBwYXJhbSB3X2JvcmRlcl93aWR0aFxuICogQHBhcmFtIGFwcGVhcmFuY2VcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDRnJhbWUod2luZG93SWQsIHdfbGVmdCwgd190b3AsIHdfd2lkdGgsIHdfaGVpZ2h0LCB6aW5kZXgsIHdfYm9yZGVyX3dpZHRoLCBhcHBlYXJhbmNlKSB7XG5cbiAgdmFyIG1lID0gdGhpcztcblxuICAvL2NhbGwgY29uc3RydWN0b3Igb2Ygc3VwZXJjbGFzc1xuICBDRnJhbWUuc3VwZXJDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIHdpbmRvd0lkLCB3X2xlZnQsIHdfdG9wLCB3X3dpZHRoLCB3X2hlaWdodCwgemluZGV4LCB3X2JvcmRlcl93aWR0aCwgYXBwZWFyYW5jZSk7XG5cbiAgbWUuYW5jaG9yID0gQ0FMSUdOLkxFRlRfVE9QO1xuXG4gIG1lLnNob3dUaXRsZUJhciA9IGFwcGVhcmFuY2Uuc2hvd1RpdGxlQmFyO1xuXG4gIG1lLmNhbnZhc05ldEhlaWdodCA9IG51bGw7XG4gIG1lLmNhbnZhc05ldFdpZHRoID0gbnVsbDtcbiAgbWUuZnJhbWVIZWlnaHRBZGp1c3QgPSBhcHBlYXJhbmNlLmZyYW1lSGVpZ2h0QWRqdXN0O1xuXG4gIG1lLmZyYW1lQ29tcG9uZW50TWFwID0ge307XG5cblxuICAvL2luaXRpYWxpemUgdGhlIGZpZWxkXG4gIG1lLmNhbnZhcyA9IG51bGw7XG5cbiAgLy9jYW52YXMgaWRcbiAgbWUubXlDYW52YXNJZCA9IG51bGw7XG5cbiAgLy9CdXR0b25zIHRvIGJlIHBsYWNlZCBvbiB0aGUgc2NyZWVuIChwb3NpdGlvbmluZyBzYW1lIGFzIHRoZSBjbG9zZSBidXR0b24pXG4gIG1lLmZsb2F0aW5nQnV0dG9uID0gbnVsbDtcblxuICBtZS50aXRsZUJhckNsYXNzTmFtZURlZmF1bHQgPSAnanNmcmFtZS10aXRsZWJhci1kZWZhdWx0JzsvLyBERUYuQ0ZSQU1FLlRJVExFX0JBUl9DTEFTU19ERUZBVUxUO1xuICBtZS50aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQgPSAnanNmcmFtZS10aXRsZWJhci1mb2N1c2VkJzsvL0RFRi5DRlJBTUUuVElUTEVfQkFSX0NMQVNTX0ZPQ1VTRUQ7XG5cblxuICAvL2hlaWdodCBvZiB0aXRsZWJhclxuICBtZS50aXRsZUJhckhlaWdodCA9IGFwcGVhcmFuY2UudGl0bGVCYXJIZWlnaHQ7XG5cbiAgbWUudGl0bGVCYXJDYXB0aW9uID0gYXBwZWFyYW5jZS50aXRsZUJhckNhcHRpb247XG4gIG1lLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW4gPSBhcHBlYXJhbmNlLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW47XG4gIG1lLnRpdGxlQmFyQ2FwdGlvbkZvbnRTaXplID0gYXBwZWFyYW5jZS50aXRsZUJhckNhcHRpb25Gb250U2l6ZTtcbiAgbWUudGl0bGVCYXJDYXB0aW9uRm9udFdlaWdodCA9IGFwcGVhcmFuY2UudGl0bGVCYXJDYXB0aW9uRm9udFdlaWdodDtcbiAgbWUudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0ID0gYXBwZWFyYW5jZS50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQ7XG4gIG1lLnRpdGxlQmFyQm9yZGVyQm90dG9tRm9jdXNlZCA9IGFwcGVhcmFuY2UudGl0bGVCYXJCb3JkZXJCb3R0b21Gb2N1c2VkO1xuICBtZS50aXRsZUJhckNhcHRpb25UZXh0U2hhZG93ID0gYXBwZWFyYW5jZS50aXRsZUJhckNhcHRpb25UZXh0U2hhZG93O1xuICBtZS50aXRsZUJhckNhcHRpb25UZXh0QWxpZ24gPSBhcHBlYXJhbmNlLnRpdGxlQmFyQ2FwdGlvblRleHRBbGlnbjtcblxuICAvL1RpdGxlIGJhciB3aWR0aCBhZGp1c3RtZW50IHZhbHVlXG4gIG1lLnRpdGxlQWRqdXN0V2lkdGggPSAyO1xuXG4gIG1lLndpbmRvd0lkID0gd2luZG93SWQ7XG5cbiAgbWUuZXhCb3JkZXJXaWR0aCA9IDA7XG5cblxuICBtZS5teUNhbnZhc0lkID0gd2luZG93SWQgKyAnX2NhbnZhcyc7XG5cblxuICAvL2ltZyBlbGVtZW50IGZvciBpY29uIHBsYWNlZCBvbiB0aGUgbGVmdC10b3BcbiAgdmFyIGFwcEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgLy9cdFx0YXBwSWNvbi5zcmM9J2ltZy9pY29fYXBwX2ZpbGUxNi5naWYnO1xuXG4gIC8vdXJsIG9mIGljb24gaW1hZ2VcbiAgYXBwSWNvbi5zcmMgPSAnJztcbiAgYXBwSWNvbi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIGFwcEljb24uc3R5bGUubGVmdCA9ICcycHgnO1xuICBhcHBJY29uLnN0eWxlLnRvcCA9ICcycHgnO1xuICBhcHBJY29uLnN0eWxlLndpZHRoID0gJzE2cHgnO1xuICBhcHBJY29uLnN0eWxlLmhlaWdodCA9ICcxNnB4JztcbiAgYXBwSWNvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cblxuICAvL1RoZSB0aXRsZSBiYXIgbXVzdCBiZSBvbiB0aGUgZnJvbnQgb2YgdGhlIGNhbnZhcy5cbiAgbWUudGl0bGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBtZS50aXRsZUJhci5jbGFzc05hbWUgPSAnanNmcmFtZXRpdGxlYmFyJztcblxuICBpZiAobWUuc2hvd1RpdGxlQmFyKSB7XG5cbiAgICBtZS50aXRsZUJhci5pZCA9IHdpbmRvd0lkICsgJ190aXRsZSc7XG4gICAgbWUudGl0bGVCYXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIG1lLnRpdGxlQmFyLnN0eWxlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcbiAgICBtZS50aXRsZUJhci5zdHlsZS50b3AgPSAnMHB4JztcbiAgICBtZS50aXRsZUJhci5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgbWUudGl0bGVCYXIuc3R5bGUud2lkdGggPSAod193aWR0aCAtIG1lLnRpdGxlQWRqdXN0V2lkdGggKyBERUYuQ0FOVkFTLldJRFRIX0FESlVTVF8yMDE4MDcyMikgKyAncHgnO1xuICAgIG1lLnRpdGxlQmFyLnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG5cblxuICAgIGlmIChtZS50aXRsZUJhckhlaWdodCkge1xuXG4gICAgICB2YXIgdGl0bGVCYXJBZGp1c3QgPSAwO1xuXG4gICAgICBpZiAobWUudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0KSB7XG4gICAgICAgIHRpdGxlQmFyQWRqdXN0ID0gMDtcbiAgICAgIH1cblxuXG4gICAgICBtZS50aXRsZUJhci5zdHlsZS5oZWlnaHQgPSAocGFyc2VJbnQobWUudGl0bGVCYXJIZWlnaHQsIDEwKSArIDApICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAobWUudGl0bGVCYXJDb2xvckRlZmF1bHQpIHtcbiAgICAgIG1lLnRpdGxlQmFyLnN0eWxlLmJhY2tncm91bmQgPSBtZS50aXRsZUJhckNvbG9yRGVmYXVsdDtcbiAgICB9XG4gICAgbWUudGl0bGVCYXIuc3R5bGUuekluZGV4ID0gMDtcblxuICAgIG1lLnRpdGxlQmFyLnN0eWxlLmNvbG9yID0gbWUudGl0bGVCYXJDYXB0aW9uQ29sb3JEZWZhdWx0O1xuICAgIG1lLnRpdGxlQmFyLnN0eWxlLmZvbnRTaXplID0gbWUudGl0bGVCYXJDYXB0aW9uRm9udFNpemU7XG4gICAgbWUudGl0bGVCYXIuc3R5bGUuZm9udFdlaWdodCA9IG1lLnRpdGxlQmFyQ2FwdGlvbkZvbnRXZWlnaHQ7XG4gICAgbWUudGl0bGVCYXIuc3R5bGUudGV4dFNoYWRvdyA9IG1lLnRpdGxlQmFyQ2FwdGlvblRleHRTaGFkb3c7XG4gICAgbWUudGl0bGVCYXIuc3R5bGUudGV4dEFsaWduID0gbWUudGl0bGVCYXJDYXB0aW9uVGV4dEFsaWduO1xuICAgIC8vIG1lLnRpdGxlQmFyLnN0eWxlLnRleHRTaGFkb3cgPSBcIjAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuNylcIjtcbiAgICAvLyBtZS50aXRsZUJhci5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcblxuICAgIG1lLnRpdGxlQmFyLnN0eWxlLmxpbmVIZWlnaHQgPSBtZS50aXRsZUJhci5zdHlsZS5oZWlnaHQ7XG5cblxuICAgIG1lLnRpdGxlQmFyLnN0eWxlLmJvcmRlckJvdHRvbSA9IG1lLnRpdGxlQmFyQm9yZGVyQm90dG9tRGVmYXVsdDtcbiAgICAvL21lLnRpdGxlQmFyLnN0eWxlLmJveFNoYWRvdyA9ICcwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC41KSc7XG5cblxuICAgIC8vU2V0IG5vdCB0byBkaXNwbGF5IG92ZXJmbG93IGNoYXJhY3RlciBzdHJpbmdcbiAgICBtZS50aXRsZUJhci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG5cbiAgICB2YXIgdGl0bGVCYXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXG4gICAgLy8nc3BhbicgdG8gc3RvcmUgdGV4dFxuICAgIHZhciB0aXRsZUJhclRleHRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgdGl0bGVCYXJUZXh0U3Bhbi5pZCA9IG1lLmlkICsgJ190aXRsZUJhclRleHQnO1xuICAgIGlmIChtZS50aXRsZUJhckNhcHRpb25MZWZ0TWFyZ2luICE9IG51bGwpIHtcbiAgICAgIHRpdGxlQmFyVGV4dFNwYW4uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGl0bGVCYXJUZXh0U3Bhbi5zdHlsZS5sZWZ0ID0gcGFyc2VJbnQobWUudGl0bGVCYXJDYXB0aW9uTGVmdE1hcmdpbiwgMTApICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGl0bGVCYXJUZXh0U3Bhbi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aXRsZUJhclRleHRTcGFuLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgIHRpdGxlQmFyVGV4dFNwYW4uc3R5bGUucmlnaHQgPSAnMHB4JztcbiAgICB9XG4gICAgdGl0bGVCYXJUZXh0U3Bhbi5zdHlsZS50b3AgPSAnMHB4JztcbiAgICB0aXRsZUJhclRleHRTcGFuLmFwcGVuZENoaWxkKHRpdGxlQmFyVGV4dCk7XG4gICAgbWUudGl0bGVCYXIuYXBwZW5kQ2hpbGQodGl0bGVCYXJUZXh0U3Bhbik7XG5cbiAgICAvL0Rpc2NvbnRpbnVlIGFwcGljb24oMjAwNjEwMTEpXG4gICAgLy9tZS50aXRsZUJhci5hcHBlbmRDaGlsZChhcHBJY29uKTtcbiAgfVxuXG4gIG1lLmh0bWxFbGVtZW50LmFwcGVuZENoaWxkKG1lLnRpdGxlQmFyKTtcblxuXG4gIC8vU2V0IENhbnZhcyB0aHJvdWdob3V0IHRoZSB3aW5kb3dcblxuICAvL3BhcnNlSW50KG1lLnRpdGxlQmFyLnN0eWxlLmhlaWdodCk7Ly9tZS50aXRsZUJhckhlaWdodCk7XG4gIHZhciBjYW52YXNNb3JlSGVpZ2h0ID0gcGFyc2VJbnQobWUudGl0bGVCYXJIZWlnaHQsIDEwKSAtIHRpdGxlQmFyQWRqdXN0O1xuICB2YXIgY2FudmFzTW9yZVNwYWNpbmcgPSBwYXJzZUludChtZS50aXRsZUFkanVzdFdpZHRoLCAxMCk7XG5cbiAgaWYgKG1lLnNob3dUaXRsZUJhcikge1xuXG5cbiAgfSBlbHNlIHtcbiAgICBjYW52YXNNb3JlSGVpZ2h0ID0gMDtcbiAgICBjYW52YXNNb3JlU3BhY2luZyA9IDA7XG4gICAgdGl0bGVCYXJBZGp1c3QgPSAwO1xuICB9XG5cblxuICBtZS5jYW52YXNOZXRXaWR0aCA9IHdfd2lkdGggLSBjYW52YXNNb3JlU3BhY2luZztcbiAgbWUuY2FudmFzTmV0SGVpZ2h0ID0gd19oZWlnaHQgLSBjYW52YXNNb3JlSGVpZ2h0IC0gY2FudmFzTW9yZVNwYWNpbmcgLSAxIC0gdGl0bGVCYXJBZGp1c3QgKyBtZS5mcmFtZUhlaWdodEFkanVzdDtcblxuXG4gIC8vQ2hhbmdlIHRoZSBzdHlsZSBvZiBodG1sRWxlbWVudCBvZiBDRnJhbWUgKENCZWFuKS5cbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xuXG5cbiAgLy9DcmVhdGUgYSBjYW52YXNcbiAgbWUuY2FudmFzID0gbmV3IENDYW52YXMobWUuaHRtbEVsZW1lbnQsIG1lLm15Q2FudmFzSWQsIDAsIGNhbnZhc01vcmVIZWlnaHQsIHdfd2lkdGggLSBjYW52YXNNb3JlU3BhY2luZywgd19oZWlnaHQgLSBjYW52YXNNb3JlSGVpZ2h0IC0gY2FudmFzTW9yZVNwYWNpbmcpO1xuXG4gIG1lLmNhbnZhcy5lbmFibGVQdWxsVXAgPSBmYWxzZTtcbiAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gREVGLkNGUkFNRS5DQU5WQVNfRUxFTUVOVF9CR0NPTE9SO1xuICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG5cbiAgaWYgKE1PVVNFX0VOQUJMRUQpIHtcbiAgICAvL0hhbmRsaW5nIHRoZSBvbW91c2Vkb3duIGV2ZW50IHRoYXQgb2NjdXJyZWQgaW4gQ2FudmFzIHdoaWNoIGlzIGEgY2hpbGQgZWxlbWVudCBvZiBDRnJhbWVcbiAgICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5vbm1vdXNlZG93biA9IG1lLmNhbnZhc01vdXNlRG93bjtcbiAgfVxuXG4gIGlmIChUT1VDSF9FTkFCTEVEKSB7XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgdmFyIGZ1bmNPblRvdWNoU3RhcnQgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgLy8gVGhlIFwibW91c2Vkb3duXCIgZXZlbnQgaGFwcGVucyByaWdodCBhZnRlciBcInRvdWNoc3RhcnRcIiBldmVudCxcbiAgICAgICAgLy8gYnV0IEkgZG9uJ3QgY2FsbCAjcHJldmVudGRlZmF1bHQgYmVjYXVzZSAjcHJldmVudGRlZmF1bHQgcHJldmVudHMgXCJvbmNsaWNrXCIgKGxpa2UgYnV0dG9uIG9uIHRpdGxlYmFyKS5cbiAgICAgICAgLy8gU28sIHBlcmZvcm0gI3ByZXZlbnRkZWZhdWx0IG9ubHkgZm9yIFwidG91Y2htb3ZlXCJcbiAgICAgICAgLy8gZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciB0b3VjaFN0YXJ0RXZlbnQgPSBldnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIG1lLmNhbnZhc01vdXNlRG93bi5iaW5kKHRoaXMpKHRvdWNoU3RhcnRFdmVudCk7XG4gICAgICB9O1xuICAgICAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQub250b3VjaHN0YXJ0ID0gZnVuY09uVG91Y2hTdGFydDtcbiAgICB9XG4gIH1cblxuICAvL1NldCB0aGUgY2FudmFzIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgb2YgdGhlIGNhbnZhcyBodG1sIGVsZW1lbnQgY2FudmFzRWxlbWVudC5cbiAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQucGFyZW50Q0ZyYW1lID0gbWU7XG5cblxuICB2YXIgdG1wQ2FudmFzV2lkdGggPSBwYXJzZUludChtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS53aWR0aCwgMTApO1xuICB2YXIgdG1wQ2FudmFzSGVpZ2h0ID0gcGFyc2VJbnQobWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuaGVpZ2h0LCAxMCk7XG5cbiAgdmFyIG1hcmtlcldpZHRoID0gYXBwZWFyYW5jZS5yZXNpemVBcmVhV2lkdGg7XG4gIHZhciBtYXJrZXJIZWlnaHQgPSBhcHBlYXJhbmNlLnJlc2l6ZUFyZWFIZWlnaHQ7XG5cbiAgLy9PZmZzZXQgZnJvbSBtYXJrZXIgZWRnZVxuICB2YXIgZWRnZU1hcmdpbiA9IGFwcGVhcmFuY2UucmVzaXplQXJlYU9mZnNldDtcbiAgdmFyIG1hcmtlclpJbmRleCA9IDA7XG5cbiAgdmFyIGNvbG9yUkQsIGNvbG9yREQsIGNvbG9yUlI7XG5cbiAgaWYgKGFwcGVhcmFuY2UucmVzaXplQXJlYVZpc2libGUpIHtcbiAgICBjb2xvclJEID0gJ3JnYmEoMjU1LCAwLCAwLCAwLjUpJztcbiAgICBjb2xvckREID0gJ3JnYmEoMCwgMCwgMjU1LCAwLjUpJztcbiAgICBjb2xvclJSID0gJ3JnYmEoMCwgMjU1LCAwLCAwLjUpJztcbiAgfVxuXG4gIC8vTG93ZXIgcmlnaHQoUi1EKVxuICB2YXIgbWFya2VyUkQgPSBuZXcgQ01hcmtlcldpbmRvdyhcbiAgICBtZS5teUNhbnZhc0lkICsgJ19SRCcsXG4gICAgdG1wQ2FudmFzV2lkdGggKyBlZGdlTWFyZ2luLFxuICAgIHRtcENhbnZhc0hlaWdodCArIGVkZ2VNYXJnaW4sXG4gICAgbWFya2VyV2lkdGgsXG4gICAgbWFya2VySGVpZ2h0LFxuICAgIG1hcmtlclpJbmRleCxcbiAgICAnUkQnLCBjb2xvclJEKTtcblxuICBtYXJrZXJSRC5odG1sRWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnc2UtcmVzaXplJzsvL253LXJlc2l6ZSc7XG5cbiAgLy9TaW5jZSBvbmx5IHRoZSBkZWx0YVggYW5kIGRlbHRhWSBhcmUgYWNxdWlyZWQgYW5kIHRoZSBtb3ZlbWVudCBvZiB0aGUgbWFya2VyIGl0c2VsZiBpc1xuICAvLyBwZXJmb3JtZWQgYnkgQ0ZyYW1lX3Jlc2l6ZSwgdGhlIG1vdmVtZW50IGNvZWZmaWNpZW50IG9mIHRoZSBtYXJrZXIgaXRzZWxmIGlzIHNldCB0byAwLlxuICBtYXJrZXJSRC5odG1sRWxlbWVudC5hcmdYID0gMDtcbiAgbWFya2VyUkQuaHRtbEVsZW1lbnQuYXJnWSA9IDA7XG5cblxuICAvL0JvdHRvbShELUQpXG4gIHZhciBtYXJrZXJERCA9IG5ldyBDTWFya2VyV2luZG93KFxuICAgIG1lLm15Q2FudmFzSWQgKyAnX0REJyxcbiAgICAwLFxuICAgIHRtcENhbnZhc0hlaWdodCArIGVkZ2VNYXJnaW4sXG4gICAgdG1wQ2FudmFzV2lkdGggKyBlZGdlTWFyZ2luLFxuICAgIG1hcmtlckhlaWdodCxcbiAgICBtYXJrZXJaSW5kZXgsXG4gICAgJ0REJywgY29sb3JERCk7XG5cbiAgbWFya2VyREQuaHRtbEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ24tcmVzaXplJztcblxuICAvL1NpbmNlIG9ubHkgdGhlIGRlbHRhWCBhbmQgZGVsdGFZIGFyZSBhY3F1aXJlZCBhbmQgdGhlIG1vdmVtZW50IG9mIHRoZSBtYXJrZXIgaXRzZWxmIGlzXG4gIC8vIHBlcmZvcm1lZCBieSBDRnJhbWVfcmVzaXplLCB0aGUgbW92ZW1lbnQgY29lZmZpY2llbnQgb2YgdGhlIG1hcmtlciBpdHNlbGYgaXMgc2V0IHRvIDAuXG4gIG1hcmtlckRELmh0bWxFbGVtZW50LmFyZ1ggPSAwO1xuICBtYXJrZXJERC5odG1sRWxlbWVudC5hcmdZID0gMDtcblxuICAvL1JpZ2h0KFItUilcbiAgdmFyIG1hcmtlclJSID0gbmV3IENNYXJrZXJXaW5kb3coXG4gICAgbWUubXlDYW52YXNJZCArICdfUlInLFxuICAgIHRtcENhbnZhc1dpZHRoICsgZWRnZU1hcmdpbixcbiAgICAwLFxuICAgIG1hcmtlcldpZHRoLFxuICAgIHRtcENhbnZhc0hlaWdodCArIGVkZ2VNYXJnaW4sXG4gICAgbWFya2VyWkluZGV4LFxuICAgICdSUicsIGNvbG9yUlIpO1xuXG4gIG1hcmtlclJSLmh0bWxFbGVtZW50LnN0eWxlLmN1cnNvciA9ICd3LXJlc2l6ZSc7XG5cbiAgLy9TaW5jZSBvbmx5IHRoZSBkZWx0YVggYW5kIGRlbHRhWSBhcmUgYWNxdWlyZWQgYW5kIHRoZSBtb3ZlbWVudCBvZiB0aGUgbWFya2VyIGl0c2VsZiBpc1xuICAvLyBwZXJmb3JtZWQgYnkgQ0ZyYW1lX3Jlc2l6ZSwgdGhlIG1vdmVtZW50IGNvZWZmaWNpZW50IG9mIHRoZSBtYXJrZXIgaXRzZWxmIGlzIHNldCB0byAwLlxuICBtYXJrZXJSUi5odG1sRWxlbWVudC5hcmdZID0gMDtcbiAgbWFya2VyUlIuaHRtbEVsZW1lbnQuYXJnWCA9IDA7XG5cbiAgLy9BZGQgc2l6ZSBjaGFuZ2UgbWFya2VyIHRvIGNhbnZhcy5cbiAgbWUuY2FudmFzLmFkZEJlYW4obWFya2VyUkQpO1xuICBtZS5jYW52YXMuYWRkQmVhbihtYXJrZXJERCk7XG4gIG1lLmNhbnZhcy5hZGRCZWFuKG1hcmtlclJSKTtcblxuICAvL01ldGhvZCB0byByZW1vdmUgc2l6ZSBjaGFuZ2UgbWFya2VyIChjYW4gbm90IHJlc2l6ZSlcbiAgbWUucmVtb3ZlTWFya2VycyA9IGZ1bmN0aW9uKCkge1xuICAgIG1lLmNhbnZhcy5yZW1vdmVCZWFuKG1hcmtlclJELmlkKTtcbiAgICBtZS5jYW52YXMucmVtb3ZlQmVhbihtYXJrZXJERC5pZCk7XG4gICAgbWUuY2FudmFzLnJlbW92ZUJlYW4obWFya2VyUlIuaWQpO1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgfTtcblxuXG4gIG1lLnJlbW92ZU1hcmtlcnMyID0gZnVuY3Rpb24oKSB7XG4gICAgbWUuY2FudmFzLnJlbW92ZUJlYW4obWFya2VyUkQuaWQpO1xuICAgIG1lLmNhbnZhcy5yZW1vdmVCZWFuKG1hcmtlckRELmlkKTtcbiAgICBtZS5jYW52YXMucmVtb3ZlQmVhbihtYXJrZXJSUi5pZCk7XG4gIH07XG4gIG1lLmVuYWJsZU1hcmtlcnMgPSBmdW5jdGlvbihlbmFibGVkKSB7XG4gICAgaWYgKGVuYWJsZWQpIHtcblxuICAgICAgbWFya2VyUkQuaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIG1hcmtlckRELmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICBtYXJrZXJSUi5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgbWFya2VyUkQuaHRtbEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ3NlLXJlc2l6ZSc7XG4gICAgICBtYXJrZXJERC5odG1sRWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnbi1yZXNpemUnO1xuICAgICAgbWFya2VyUlIuaHRtbEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ3ctcmVzaXplJztcbiAgICB9IGVsc2Uge1xuICAgICAgbWFya2VyUkQuaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIG1hcmtlckRELmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBtYXJrZXJSUi5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICAvLyBtZS5jYW52YXMucmVtb3ZlQmVhbihtYXJrZXJSRC5pZCk7XG4gICAgLy8gbWUuY2FudmFzLnJlbW92ZUJlYW4obWFya2VyREQuaWQpO1xuICAgIC8vIG1lLmNhbnZhcy5yZW1vdmVCZWFuKG1hcmtlclJSLmlkKTtcbiAgfTtcblxuICBmb3IgKHZhciBpZHggaW4gYXBwZWFyYW5jZS5mcmFtZUNvbXBvbmVudHMpIHtcblxuICAgIHZhciBmcmFtZUNvbXBvbmVudCA9IGFwcGVhcmFuY2UuZnJhbWVDb21wb25lbnRzW2lkeF07XG4gICAgZnJhbWVDb21wb25lbnQuc2V0RnJhbWUobWUpO1xuXG4gICAgLy9pZiBmcmFtZUNvbXBvbmVudCBoYXMgc3BlY2lhbCBuYW1lICdjbG9zZUJ1dHRvbicsIGl0IHdpbGwgYWN0IGFzIGEgY2xvc2UgYnV0dG9uLlxuICAgIGlmICgnY2xvc2VCdXR0b24nID09IGZyYW1lQ29tcG9uZW50LmlkKSB7XG4gICAgICBmcmFtZUNvbXBvbmVudC5odG1sRWxlbWVudC5vbmNsaWNrID0gbWUuY2xvc2U7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGNoaWxkIG1lbnUgb3Blbi9jbG9zZVxuICAgIHZhciBmcmFtZUNvbXBvbmVudEhhc0NoaWxkTWVudSA9IGZyYW1lQ29tcG9uZW50Lmh0bWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qc2ZyYW1lLWNoaWxkLW1lbnUnKTtcbiAgICBpZiAoZnJhbWVDb21wb25lbnRIYXNDaGlsZE1lbnUpIHtcbiAgICAgIG1lLmV2ZW50TGlzdGVuZXJIZWxwZXIuYWRkRXZlbnRMaXN0ZW5lcihmcmFtZUNvbXBvbmVudC5odG1sRWxlbWVudCwgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgdmFyIGZyYW1lQ29tcG9uZW50SWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudC1pZCcpO1xuXG4gICAgICAgICAgLy8gQ2xvc2UgYWxsIGZyYW1lIGNvbXBvbmVudCdzIGNoaWxkbWVudSBvbmNlIGJlY2F1c2Ugb3RoZXIgZnJhbWUgY29tcG9uZW50J3MgY2hpbGRtZW51IG1heSBiZSBvcGVuLlxuICAgICAgICAgIC8vIElmIHtleGNlcHRGcmFtZUNvbXBvbmVudElkOltmcmFtZUNvbXBvbmVudElkXX0gaXMgc3BlY2lmaWVkIGZvciB0aGUgYXJndW1lbnQsXG4gICAgICAgICAgLy8gdGhlIGNoaWxkIG1lbnUgd2lsbCBub3QgYmUgY2xvc2VkLlxuICAgICAgICAgIG1lLmhpZGVGcmFtZUNvbXBvbmVudENoaWxkTWVudXMoeyBleGNlcHRGcmFtZUNvbXBvbmVudElkOiBmcmFtZUNvbXBvbmVudElkIH0pO1xuXG4gICAgICAgICAgaWYgKGZyYW1lQ29tcG9uZW50SWQpIHtcbiAgICAgICAgICAgIHZhciBmcmFtZUNvbXBvbmVudEh0bWxFbGVtZW50ID0gbWUuZ2V0RnJhbWVDb21wb25lbnRFbGVtZW50KGZyYW1lQ29tcG9uZW50SWQpO1xuICAgICAgICAgICAgdmFyIGZyYW1lQ29tcG9uZW50Q2hpbGRNZW51ID0gZnJhbWVDb21wb25lbnRIdG1sRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuanNmcmFtZS1jaGlsZC1tZW51Jyk7XG4gICAgICAgICAgICBpZiAoZnJhbWVDb21wb25lbnRDaGlsZE1lbnUpIHtcbiAgICAgICAgICAgICAgLy8gQnkgbWFraW5nIHRoZSBkaXNwbGF5IGEgdGFibGUsXG4gICAgICAgICAgICAgIC8vIHRoZSB3aWR0aCBvZiB0aGUgY2hpbGRNZW51IGNhbiBiZSBhY2N1cmF0ZWx5IHJlZmxlY3RlZC5cbiAgICAgICAgICAgICAgLy8gKGZsZXggZG9lcyBub3Qgc2V0IHRoZSB3aWR0aCBjb3JyZWN0bHkuKVxuICAgICAgICAgICAgICBpZiAoZnJhbWVDb21wb25lbnRDaGlsZE1lbnUuc3R5bGUuZGlzcGxheSA9PSAndGFibGUnKSB7XG4gICAgICAgICAgICAgICAgZnJhbWVDb21wb25lbnRDaGlsZE1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmcmFtZUNvbXBvbmVudENoaWxkTWVudS5zdHlsZS5kaXNwbGF5ID0gJ3RhYmxlJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZnJhbWVDb21wb25lbnQgY2hpbGQgbWVudSBpc250IGZvdW5kLiBmcmFtZUNvbXBvbmVudElkPScgKyBmcmFtZUNvbXBvbmVudElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHsgbGlzdGVuZXJOYW1lOiAnZnJhbWUtY29tcG9uZW50X2NoaWxkLW1lbnUtbGlzdGVuZXInIH0pO1xuICAgIH1cblxuICAgIG1lLmFkZEZyYW1lQ29tcG9uZW50KGZyYW1lQ29tcG9uZW50KTtcbiAgfSAgLy8gL2FkZCBmcmFtZUNvbXBvbmVudHNbZW5kXVxuXG4gIC8vb3ZlcnJpZGUgdGhlIGZpZWxkXG4gIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cbiAgbWUuaHRtbEVsZW1lbnQub25jb250ZXh0bWVudSA9IHRoaXMuY29udGV4dE1lbnU7XG5cblxuICAvL1RoZSBwb2xpY3kgb2YgQm9yZGVyIGRyYXdpbmcgc2VlbXMgdG8gYmUgZGlmZmVyZW50IGJldHdlZW4gSUUgYW5kIEZGLlxuICB2YXIgY2FyaWJWYWwgPSAwO1xuXG5cbiAgbWUuY2FyaWJWYWx1ZSA9IGNhcmliVmFsO1xuXG4gIGlmIChtZS5leEJvcmRlcldpZHRoKSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyV2lkdGggPSBtZS5leEJvcmRlcldpZHRoICsgJ3B4JztcbiAgfVxuICBtZS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCA9IChwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCwgMTApIC0gY2FyaWJWYWwpICsgJ3B4JztcbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gKHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCwgMTApIC0gY2FyaWJWYWwgKyAxKSArICdweCc7XG4gIG1lLmh0bWxFbGVtZW50LnR5cGVOYW1lID0gJ2N3aW5kb3cnO1xuICBtZS5odG1sRWxlbWVudC5vdmVyZmxvdyA9ICdhdXRvJztcbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm94U2l6aW5nID0gJ2NvbnRlbnQtYm94JztcblxuXG4gIGlmIChhcHBlYXJhbmNlLmZyYW1lQm9yZGVyU3R5bGUpIHtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJTdHlsZSA9IGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJTdHlsZTtcbiAgfVxuXG4gIGlmIChhcHBlYXJhbmNlLmZyYW1lQm94U2hhZG93KSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm94U2hhZG93ID0gYXBwZWFyYW5jZS5mcmFtZUJveFNoYWRvdztcbiAgfVxuXG4gIC8vVE9ETyBkZXByZWNhdGlvbihiZWNhdXNlIENJZkZyYW1lIGlzIGV4dGVuZGVkIHRoaXMgb3BlcmF0aW9uKVxuICBpZiAocGFyc2VJbnQoYXBwZWFyYW5jZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCwgMTApID49IDApIHtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9IGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQ7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBhcHBlYXJhbmNlLmZyYW1lQm9yZGVyQ29sb3JEZWZhdWx0O1xuXG4gIH1cbiAgaWYgKHBhcnNlSW50KGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJSYWRpdXMsIDEwKSA+PSAwKSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyUmFkaXVzID0gYXBwZWFyYW5jZS5mcmFtZUJvcmRlclJhZGl1cztcbiAgfVxuXG4gIG1lLm9uQ2xvc2VGcmFtZUxpc3RlbmVyID0gbnVsbDtcblxufVxuXG5cbkNGcmFtZS5wcm90b3R5cGUuc2V0VGl0bGVCYXJDbGFzc05hbWUgPSBmdW5jdGlvbihjbGFzc05hbWVGb3JEZWZhdWx0LCBjbGFzc05hbWVGb3JGb2N1c2VkKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIGlmIChjbGFzc05hbWVGb3JEZWZhdWx0KSB7XG4gICAgbWUudGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0ID0gY2xhc3NOYW1lRm9yRGVmYXVsdDtcbiAgICBtZS50aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQgPSBjbGFzc05hbWVGb3JEZWZhdWx0O1xuICB9XG4gIGlmIChjbGFzc05hbWVGb3JGb2N1c2VkKSB7XG4gICAgbWUudGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkID0gY2xhc3NOYW1lRm9yRm9jdXNlZDtcbiAgfVxuICByZXR1cm4gbWU7XG59O1xuLyoqXG4gKiBBZGQgZnJhbWVDb21wb25lbnQoV3JhcHBlZCBET00gZWxlbWVudCBsaWtlICdkaXYnIHRvIGRpc3BsYXkgYWJvdmUgdGhlIGZyYW1lKSB0byBmcmFtZVxuICogQHBhcmFtIGZyYW1lQ29tcG9uZW50XG4gKi9cbkNGcmFtZS5wcm90b3R5cGUuYWRkRnJhbWVDb21wb25lbnQgPSBmdW5jdGlvbihmcmFtZUNvbXBvbmVudCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIG1lLmZyYW1lQ29tcG9uZW50TWFwW2ZyYW1lQ29tcG9uZW50LmlkXSA9IGZyYW1lQ29tcG9uZW50O1xuICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5hcHBlbmRDaGlsZChmcmFtZUNvbXBvbmVudC5odG1sRWxlbWVudCk7XG4gIHJldHVybiBtZTtcbn07XG5cbi8qKlxuICogR2V0IHN0b3JlZCBmcmFtZSBjb21wb25lbnQgYnkgaWRcbiAqIEBwYXJhbSBmcmFtZUNvbXBvbmVudFxuICovXG5DRnJhbWUucHJvdG90eXBlLmdldEZyYW1lQ29tcG9uZW50RWxlbWVudCA9IGZ1bmN0aW9uKGlkKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIGlmIChtZS5mcmFtZUNvbXBvbmVudE1hcFtpZF0pIHtcbiAgICByZXR1cm4gbWUuZnJhbWVDb21wb25lbnRNYXBbaWRdLmh0bWxFbGVtZW50O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5cbkNGcmFtZS5wcm90b3R5cGUucmVtb3ZlRnJhbWVDb21wb25lbnRCeUlkID0gZnVuY3Rpb24oZnJhbWVDb21wb25lbnRJZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciBmcmFtZUNvbXBvbmVudCA9IG1lLmZyYW1lQ29tcG9uZW50TWFwW2ZyYW1lQ29tcG9uZW50SWRdO1xuXG4gIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnJlbW92ZUNoaWxkKGZyYW1lQ29tcG9uZW50Lmh0bWxFbGVtZW50KTtcbiAgZGVsZXRlIG1lLmZyYW1lQ29tcG9uZW50TWFwW2ZyYW1lQ29tcG9uZW50SWRdO1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5zaG93RnJhbWVDb21wb25lbnQgPSBmdW5jdGlvbihmcmFtZUNvbXBvbmVudElkLCBkaXNwbGF5KSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHZhciBjb21wID0gbWUuZ2V0RnJhbWVDb21wb25lbnRFbGVtZW50KGZyYW1lQ29tcG9uZW50SWQpO1xuICBpZiAoY29tcCkge1xuICAgIGlmIChkaXNwbGF5KSB7XG4gICAgICBjb21wLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfVxuICB9XG4gIHJldHVybiBtZTtcbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuaGlkZUZyYW1lQ29tcG9uZW50ID0gZnVuY3Rpb24oZnJhbWVDb21wb25lbnRJZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICB2YXIgY29tcCA9IG1lLmdldEZyYW1lQ29tcG9uZW50RWxlbWVudChmcmFtZUNvbXBvbmVudElkKTtcbiAgaWYgKGNvbXApIHtcbiAgICBjb21wLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgcmV0dXJuIG1lO1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5oaWRlQWxsVmlzaWJsZUZyYW1lQ29tcG9uZW50cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciBjb21wTWFwID0gbWUuZnJhbWVDb21wb25lbnRNYXA7XG4gIGZvciAodmFyIGtleSBpbiBjb21wTWFwKSB7XG4gICAgaWYgKGNvbXBNYXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdmFyIGNvbXAgPSBjb21wTWFwW2tleV0uaHRtbEVsZW1lbnQ7XG4gICAgICBpZiAoY29tcC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgY29tcC5fYWxyZWFkeU5vbmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY29tcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxufTtcbkNGcmFtZS5wcm90b3R5cGUuc2hvd0FsbFZpc2libGVGcmFtZUNvbXBvbmVudHMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgdmFyIGNvbXBNYXAgPSBtZS5mcmFtZUNvbXBvbmVudE1hcDtcbiAgZm9yICh2YXIga2V5IGluIGNvbXBNYXApIHtcbiAgICBpZiAoY29tcE1hcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YXIgY29tcCA9IGNvbXBNYXBba2V5XS5odG1sRWxlbWVudDtcbiAgICAgIGlmIChjb21wLl9hbHJlYWR5Tm9uZSkge1xuICAgICAgICBjb21wLl9hbHJlYWR5Tm9uZSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENsb3NlIGFsbCBjaGlsZE1lbnVcbiBJZiB7ZXhjZXB0RnJhbWVDb21wb25lbnRJZDpbZnJhbWVDb21wb25lbnRJZF19IGlzIHNwZWNpZmllZCBmb3IgdGhlIGFyZ3VtZW50LFxuIHRoZSBjaGlsZCBtZW51IHdpbGwgbm90IGJlIGNsb3NlZC5cblxuICogQHBhcmFtIG9wdFxuICovXG5DRnJhbWUucHJvdG90eXBlLmhpZGVGcmFtZUNvbXBvbmVudENoaWxkTWVudXMgPSBmdW5jdGlvbihvcHQpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICB2YXIgY29tcE1hcCA9IG1lLmZyYW1lQ29tcG9uZW50TWFwO1xuICBmb3IgKHZhciBmcmFtZUNvbXBvbmVudElkIGluIGNvbXBNYXApIHtcbiAgICBpZiAoY29tcE1hcC5oYXNPd25Qcm9wZXJ0eShmcmFtZUNvbXBvbmVudElkKSkge1xuICAgICAgaWYgKG9wdCAmJiBvcHQuZXhjZXB0RnJhbWVDb21wb25lbnRJZCkge1xuICAgICAgICBpZiAoZnJhbWVDb21wb25lbnRJZCA9PT0gb3B0LmV4Y2VwdEZyYW1lQ29tcG9uZW50SWQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGNvbXAgPSBjb21wTWFwW2ZyYW1lQ29tcG9uZW50SWRdO1xuICAgICAgaWYgKGNvbXAuY2hpbGRNZW51KSB7XG4gICAgICAgIGNvbXAuY2hpbGRNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5cbkNGcmFtZS5wcm90b3R5cGUuc2V0VGl0bGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUudGl0bGUgPSBzdHI7XG4gIGlmIChtZS5zaG93VGl0bGVCYXIpIHtcblxuICAgIHZhciB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0cik7XG4gICAgLy9maXJzdENoaWxk44GuZmlyc3RDaGlsZOOBjHNwYW5cbiAgICBtZS50aXRsZUJhci5maXJzdENoaWxkLnJlcGxhY2VDaGlsZCh0ZXh0Tm9kZSwgbWUudGl0bGVCYXIuZmlyc3RDaGlsZC5maXJzdENoaWxkKTtcbiAgfVxuICByZXR1cm4gbWU7XG59O1xuXG5DRnJhbWUucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKGRlbHRhTGVmdCwgZGVsdGFUb3AsIGRlbHRhV2lkdGgsIGRlbHRhSGVpZ2h0KSB7XG5cbiAgdmFyIG1lID0gdGhpcztcblxuICB2YXIgdG1wTGVmdCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKTtcbiAgdmFyIHRtcFRvcCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApO1xuICB2YXIgdG1wV2lkdGggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCwgMTApO1xuICB2YXIgdG1wSGVpZ2h0ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0LCAxMCk7XG5cbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IHBhcnNlSW50KHRtcExlZnQgKyBkZWx0YUxlZnQsIDEwKSArICdweCc7XG4gIG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9IHBhcnNlSW50KHRtcFRvcCArIGRlbHRhVG9wLCAxMCkgKyAncHgnO1xuXG4gIG1lLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoID0gcGFyc2VJbnQodG1wV2lkdGggKyBkZWx0YVdpZHRoLCAxMCkgKyAncHgnO1xuICBtZS5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBwYXJzZUludCh0bXBIZWlnaHQgKyBkZWx0YUhlaWdodCwgMTApICsgJ3B4JztcblxuXG4gIHZhciB0bXBDYW52YXNXaWR0aCA9IHBhcnNlSW50KG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLndpZHRoLCAxMCk7XG4gIHZhciB0bXBDYW52YXNIZWlnaHQgPSBwYXJzZUludChtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5oZWlnaHQsIDEwKTtcblxuICAvL1NpbmNlIGNhbnZhc0VsZW1lbnQgaXMgYSAoMCwgMCkgcmVsYXRpdmUgY29vcmRpbmF0ZSB3aXRoIHJlc3BlY3QgdG8gdGhlIHBhcmVudCBlbGVtZW50LFxuICAvLyBzbyBpdCBpcyBub3QgbmVjZXNzYXJ5IHRvIGNoYW5nZSBsZWZ0IGFuZCB0b3AuXG4gIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLndpZHRoID0gKHRtcENhbnZhc1dpZHRoICsgZGVsdGFXaWR0aCkgKyAncHgnO1xuICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAodG1wQ2FudmFzSGVpZ2h0ICsgZGVsdGFIZWlnaHQpICsgJ3B4JztcblxuXG4gIGlmIChtZS5zaG93VGl0bGVCYXIpIHtcblxuICAgIC8vQ2hhbmdlIHRoZSBzaXplIG9mIHRoZSB0aXRsZSBiYXIuIFRpdGxlQWRqdXN0V2lkdGggZXRjLlxuICAgIC8vVGhlIHJlYXNvbiB3aHkgeW91IGRvIG5vdCBoYXZlIHRvIHVzZSB0aXRsZUFkanVzdFdpZHRoIGlzIGJlY2F1c2VcbiAgICAvLyB0aGVzZSBzY2FsaW5nIGFyZSBkb25lIHdpdGggZGlmZmVyZW5jZXMgKGRlbHRhWCwgZGVsdGFZKS5cbiAgICAvL1RoZXJlZm9yZSwgaWYgeW91IGFkanVzdCB3aXRoIHRoZSB0aXRsZUFkanVzdFdpZHRoIGFzXG4gICAgLy8gdGhlIGluaXRpYWwgdmFsdWUsIHRoZSBvdGhlciB3aWxsIHN0cmV0Y2ggcmVsYXRpdmUuXG4gICAgLy9Zb3UgZG8gbm90IHRoaW5rIHlvdSBjYW4gdXNlIGlmRGVsdGFcbiAgICBtZS50aXRsZUJhci5zdHlsZS53aWR0aCA9ICh0bXBDYW52YXNXaWR0aCArIGRlbHRhV2lkdGgpICsgJ3B4JztcblxuICB9IGVsc2Uge1xuXG5cbiAgfVxuXG5cbiAgZm9yICh2YXIgYmVhbk5hbWUgaW4gbWUuY2FudmFzLmJlYW5MaXN0KSB7XG4gICAgdmFyIHRtcEJlYW4gPSBtZS5jYW52YXMuYmVhbkxpc3RbYmVhbk5hbWVdO1xuXG4gICAgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudHlwZU5hbWUgPT0gJ2NtYXJrZXJ3aW5kb3cnKSB7XG4gICAgICBpZiAodG1wQmVhbi5odG1sRWxlbWVudC51c2FnZSA9PSAnUkQnKSB7XG4gICAgICAgIC8vTW92ZSB0aGUgc2l6ZSBjaGFuZ2UgbG93ZXIgcmlnaHQoUkQpIG1hcmtlciBhY2NvcmRpbmcgdG8gdGhlIGFtb3VudCBvZiBtb3ZlbWVudC5cbiAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gKHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwgMTApICsgZGVsdGFXaWR0aCkgKyAncHgnO1xuICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9IChwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApICsgZGVsdGFIZWlnaHQpICsgJ3B4JztcbiAgICAgIH0gZWxzZSBpZiAodG1wQmVhbi5odG1sRWxlbWVudC51c2FnZSA9PSAnREQnKSB7XG4gICAgICAgIC8vTW92ZSB0aGUgc2l6ZSBjaGFuZ2UgbG93ZXIgbWFya2VyIGFjY29yZGluZyB0byB0aGUgbW92ZW1lbnQgYW1vdW50LlxuICAgICAgICAvLyBEbyBub3QgbW92ZSBsZWZ0Lk9ubHkgdGhlIHdpZHRoIHdpbCBpbmNyZWFzZSBvciBkZWNyZWFzZS5cbiAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS53aWR0aCA9IChwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoLCAxMCkgKyBkZWx0YVdpZHRoKSArICdweCc7XG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gKHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wLCAxMCkgKyBkZWx0YUhlaWdodCkgKyAncHgnO1xuICAgICAgfSBlbHNlIGlmICh0bXBCZWFuLmh0bWxFbGVtZW50LnVzYWdlID09ICdSUicpIHtcbiAgICAgICAgLy9Nb3ZlIHRoZSBzaXplIGNoYW5nZSByaWdodCBtYXJrZXIgYWNjb3JkaW5nIHRvIHRoZSBtb3ZlbWVudCBhbW91bnRcbiAgICAgICAgLy9EbyBub3QgbW92ZSB0b3AsT25seSB0aGUgaGVpZ2h0IHdpbGwgaW5jcmVhc2Ugb3IgZGVjcmVhc2UuXG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IChwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKSArIGRlbHRhV2lkdGgpICsgJ3B4JztcbiAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAocGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQsIDEwKSArIGRlbHRhSGVpZ2h0KSArICdweCc7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbn07XG5cblxuQ0ZyYW1lLnByb3RvdHlwZS5jYW52YXNNb3VzZURvd24gPSBmdW5jdGlvbihlKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgLy9Nb3VzZWRvd24gcHJvY2Vzc2luZyBvZiBDRnJhbWUuY2FudmFzXG5cbiAgLy8nVGhpcycgaW4gdGhpcyBtZXRob2QgaW5kaWNhdGVzICdDd2luZG93LmNhbnZhcy5jYW52YXNFbGVtZW50Jy5cbiAgaWYgKHRoaXMucGFyZW50Q0ZyYW1lLnBhcmVudENhbnZhcy5tb3VzZURvd25Tb3VyY2UgPT0gbnVsbCkge1xuICAgIHRoaXMucGFyZW50Q0ZyYW1lLnBhcmVudENhbnZhcy5tb3VzZURvd25Tb3VyY2UgPSAnY2hpbGRjYW52YXMnO1xuICB9XG5cblxufTtcbkNGcmFtZS5wcm90b3R5cGUubW91c2VVcCA9IGZ1bmN0aW9uKGUpIHtcbiAgdGhpcy5jYW52YXMubW91c2VVcChlKTtcbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbihlKSB7XG5cbiAgdmFyIG1lID0gdGhpcztcbiAgLy9DbG9zZSBwcm9jZXNzaW5nIG9mIENGcmFtZSBmcm9tIENsb3NlQnV0dG9uXG5cblxuICB2YXIgcGFyZW50Q2FudmFzID0gdGhpcy5wYXJlbnRPYmplY3QucGFyZW50Q2FudmFzO1xuICB2YXIgY2ZyYW1lT2JqID0gdGhpcy5wYXJlbnRPYmplY3Q7XG5cbiAgY29uc29sZS5sb2coJ0NGcmFtZSNjbG9zZSBcIicgKyBjZnJhbWVPYmoudGl0bGUgKyAnKEAnICsgY2ZyYW1lT2JqLmdldE5hbWUoKSArICcpJyArICdcIiBAJyArIGNmcmFtZU9iai53aW5kb3dJZCk7XG5cbiAgdmFyIHdpbmRvd0lkID0gY2ZyYW1lT2JqLmlkO1xuICBjZnJhbWVPYmouY2xvc2VJbnRlcm5hbGx5KGUsIHBhcmVudENhbnZhcywgd2luZG93SWQpO1xuXG5cbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuY2xvc2VGcmFtZSA9IGZ1bmN0aW9uKGUpIHtcblxuXG4gIC8vQ2xvc2UgcHJvY2Vzc2luZyBvZiBDRnJhbWVcbiAgdmFyIG1lID0gdGhpcztcblxuICBjb25zb2xlLmxvZygnQ0ZyYW1lI2Nsb3NlRnJhbWUgXCInICsgbWUudGl0bGUgKyAnKCcgKyBtZS5nZXROYW1lKCkgKyAnKScgKyAnXCIgQCcgKyBtZS53aW5kb3dJZCk7XG5cbiAgdmFyIHBhcmVudENhbnZhcyA9IHRoaXMucGFyZW50Q2FudmFzO1xuICBtZS5jbG9zZUludGVybmFsbHkoZSwgcGFyZW50Q2FudmFzLCBtZS53aW5kb3dJZCk7XG5cblxufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5jbG9zZUludGVybmFsbHkgPSBmdW5jdGlvbihlLCBwYXJlbnRDYW52YXMsIHdpbmRvd0lkKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgaWYgKCFwYXJlbnRDYW52YXMpIHtcbiAgICBjb25zb2xlLmVycm9yKCdXaW5kb3coJyArIHdpbmRvd0lkICsgJykgbWF5IGhhdmUgYmVlbiBjbG9zZWQnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgcGFyZW50Q2FudmFzLnJlbW92ZUJlYW4od2luZG93SWQpO1xuXG5cbiAgLy9hZGRlZCBmb3IgbW9kYWwgd2luZG93XG4gIGlmIChtZS5tb2RhbEJhY2tncm91bmRXaW5kb3dJZCkge1xuICAgIHBhcmVudENhbnZhcy5yZW1vdmVCZWFuKG1lLm1vZGFsQmFja2dyb3VuZFdpbmRvd0lkKTtcbiAgICBtZS5tb2RhbEJhY2tncm91bmRXaW5kb3dJZCA9IG51bGw7XG4gIH1cblxuICBpZiAobWUub25DbG9zZUZyYW1lTGlzdGVuZXIpIHtcbiAgICBtZS5vbkNsb3NlRnJhbWVMaXN0ZW5lcihtZSk7XG4gIH1cbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuc2V0T25DbG9zZUZyYW1lTGlzdGVuZXIgPSBmdW5jdGlvbihsaXN0ZW5lcikge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5vbkNsb3NlRnJhbWVMaXN0ZW5lciA9IGxpc3RlbmVyO1xuXG59O1xuXG5DRnJhbWUucHJvdG90eXBlLmNvbnRleHRNZW51ID0gZnVuY3Rpb24oKSB7XG4gIC8vSWYgeW91IGlzc3VlIHRoZSByaWdodC1jbGljayBtZW51IGluIHRoZSB3aW5kb3csIHNldCB0aGUgc291cmNlIHRvIENGcmFtZS5cbiAgdmFyIGNvbnRleHRNZW51U291cmNlID0gJ0NGcmFtZSc7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblxuQ0ZyYW1lLnByb3RvdHlwZS5zZXRUaXRsZUJhclRleHRDb2xvciA9IGZ1bmN0aW9uKHN0cikge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS50aXRsZUJhci5zdHlsZS5jb2xvciA9IHN0cjtcbn07XG5cbi8qKlxuICogU2V0IHdpbmRvdyBwb3NpdGlvbiB3aXRoIGFuY2hvclxuICogQHBhcmFtIHtudW1iZXJ9IHhcbiAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gKiBAcGFyYW0ge3N0cmluZ30gYW5jaG9yIGFuY2hvciBtZWFucyB0aGUgcG9zaXRpb24gb2YgdGhlIHdpbmRvdyB3aXRoIHJlc3BlY3QgdG8gd2hpY2ggdGhlIHBvc2l0aW9uIGlzIHNwZWNpZmllZC48YnI+XG4gKiAgIFRoZSBmb2xsb3dpbmcgdmFsdWVzIGNhbiBiZSBzcGVjaWZpZWQgZm9yIHRoZSBhbmNob3JcbiBMRUZUX1RPUFxuIENFTlRFUl9UT1BcbiBSSUdIVF9UT1BcbiBMRUZUX0NFTlRFUlxuIENFTlRFUl9DRU5URVJcbiBSSUdIVF9DRU5URVJcbiBMRUZUX0JPVFRPTVxuIENFTlRFUl9CT1RUT01cbiBSSUdIVF9CT1RUT01cbiAqIEByZXR1cm5zIHtDRnJhbWV9XG4gKi9cbkNGcmFtZS5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbih4LCB5LCBhbmNob3IpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICB2YXIgZnJhbWVXaWR0aCA9IG1lLmdldFdpZHRoKCk7XG4gIHZhciBmcmFtZUhlaWdodCA9IG1lLmdldEhlaWdodCgpO1xuXG4gIG1lLl9zZXRQb3NpdGlvbkludGVybmFsbHkoeCwgeSwgYW5jaG9yLCBmcmFtZVdpZHRoLCBmcmFtZUhlaWdodCk7XG5cbiAgcmV0dXJuIG1lO1xufTtcbkNGcmFtZS5wcm90b3R5cGUuX3NldFBvc2l0aW9uSW50ZXJuYWxseSA9IGZ1bmN0aW9uKHgsIHksIGFuY2hvciwgZnJhbWVXaWR0aCwgZnJhbWVIZWlnaHQpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICBpZiAoYW5jaG9yKSB7XG4gICAgbWUuYW5jaG9yID0gYW5jaG9yO1xuICB9XG5cbiAgaWYgKCFhbmNob3IgfHwgQ0FMSUdOLkxFRlRfVE9QID09IGFuY2hvcikge1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgfSBlbHNlIGlmIChDQUxJR04uSENFTlRFUl9UT1AgPT0gYW5jaG9yKSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9ICgtZnJhbWVXaWR0aCAvIDIgKyB4KSArICdweCc7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wID0geSArICdweCc7XG4gIH0gZWxzZSBpZiAoQ0FMSUdOLlJJR0hUX1RPUCA9PSBhbmNob3IpIHtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gKC1mcmFtZVdpZHRoICsgeCkgKyAncHgnO1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuICB9IGVsc2UgaWYgKENBTElHTi5MRUZUX1ZDRU5URVIgPT0gYW5jaG9yKSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IHggKyAncHgnO1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9ICgtZnJhbWVIZWlnaHQgLyAyICsgeSkgKyAncHgnO1xuICB9IGVsc2UgaWYgKENBTElHTi5IQ0VOVEVSX1ZDRU5URVIgPT0gYW5jaG9yKSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9ICgtZnJhbWVXaWR0aCAvIDIgKyB4KSArICdweCc7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gKC1mcmFtZUhlaWdodCAvIDIgKyB5KSArICdweCc7XG4gIH0gZWxzZSBpZiAoQ0FMSUdOLlJJR0hUX1ZDRU5URVIgPT0gYW5jaG9yKSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9ICgtZnJhbWVXaWR0aCArIHgpICsgJ3B4JztcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSAoLWZyYW1lSGVpZ2h0IC8gMiArIHkpICsgJ3B4JztcbiAgfSBlbHNlIGlmIChDQUxJR04uTEVGVF9CT1RUT00gPT0gYW5jaG9yKSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IHggKyAncHgnO1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9ICgtZnJhbWVIZWlnaHQgKyB5KSArICdweCc7XG4gIH0gZWxzZSBpZiAoQ0FMSUdOLkhDRU5URVJfQk9UVE9NID09IGFuY2hvcikge1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSAoLWZyYW1lV2lkdGggLyAyICsgeCkgKyAncHgnO1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9ICgtZnJhbWVIZWlnaHQgKyB5KSArICdweCc7XG4gIH0gZWxzZSBpZiAoQ0FMSUdOLlJJR0hUX0JPVFRPTSA9PSBhbmNob3IpIHtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gKC1mcmFtZVdpZHRoICsgeCkgKyAncHgnO1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9ICgtZnJhbWVIZWlnaHQgKyB5KSArICdweCc7XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyByZWxhdGl2ZSBwb3NpdGlvbiB3aXRoIGFuY2hvclxuICogQHJldHVybnMge3t4OiAqLCB5OiAqLCBhbmNob3I6ICp9fVxuICovXG5DRnJhbWUucHJvdG90eXBlLmdldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHZhciBmcmFtZVdpZHRoID0gbWUuZ2V0V2lkdGgoKTtcbiAgdmFyIGZyYW1lSGVpZ2h0ID0gbWUuZ2V0SGVpZ2h0KCk7XG4gIHZhciB4O1xuICB2YXIgeTtcbiAgdmFyIGFuY2hvciA9IG1lLmFuY2hvcjtcbiAgaWYgKCFhbmNob3IgfHwgQ0FMSUdOLkxFRlRfVE9QID09IGFuY2hvcikge1xuICAgIHggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCk7XG4gICAgeSA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApO1xuICB9IGVsc2UgaWYgKENBTElHTi5IQ0VOVEVSX1RPUCA9PSBhbmNob3IpIHtcbiAgICB4ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwgMTApICsgZnJhbWVXaWR0aCAvIDI7XG4gICAgeSA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApO1xuICB9IGVsc2UgaWYgKENBTElHTi5SSUdIVF9UT1AgPT0gYW5jaG9yKSB7XG4gICAgeCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKSArIGZyYW1lV2lkdGg7XG4gICAgeSA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApO1xuICB9IGVsc2UgaWYgKENBTElHTi5MRUZUX1ZDRU5URVIgPT0gYW5jaG9yKSB7XG4gICAgeCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKTtcbiAgICB5ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wLCAxMCkgKyBmcmFtZUhlaWdodCAvIDI7XG4gIH0gZWxzZSBpZiAoQ0FMSUdOLkhDRU5URVJfVkNFTlRFUiA9PSBhbmNob3IpIHtcbiAgICB4ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwgMTApICsgZnJhbWVXaWR0aCAvIDI7XG4gICAgeSA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApICsgZnJhbWVIZWlnaHQgLyAyO1xuICB9IGVsc2UgaWYgKENBTElHTi5SSUdIVF9WQ0VOVEVSID09IGFuY2hvcikge1xuICAgIHggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCkgKyBmcmFtZVdpZHRoO1xuICAgIHkgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKSArIGZyYW1lSGVpZ2h0IC8gMjtcbiAgfSBlbHNlIGlmIChDQUxJR04uTEVGVF9CT1RUT00gPT0gYW5jaG9yKSB7XG4gICAgeCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKTtcbiAgICB5ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wLCAxMCkgKyBmcmFtZUhlaWdodDtcbiAgfSBlbHNlIGlmIChDQUxJR04uSENFTlRFUl9CT1RUT00gPT0gYW5jaG9yKSB7XG4gICAgeCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKSArIGZyYW1lV2lkdGggLyAyO1xuICAgIHkgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKSArIGZyYW1lSGVpZ2h0O1xuICB9IGVsc2UgaWYgKENBTElHTi5SSUdIVF9CT1RUT00gPT0gYW5jaG9yKSB7XG4gICAgeCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKSArIGZyYW1lV2lkdGg7XG4gICAgeSA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApICsgZnJhbWVIZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIHsgeDogeCwgeTogeSwgYW5jaG9yOiBhbmNob3IgfTtcbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICByZXR1cm4gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwgMTApO1xufTtcblxuXG5DRnJhbWUucHJvdG90eXBlLmdldFRvcCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICByZXR1cm4gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wLCAxMCk7XG59O1xuQ0ZyYW1lLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICByZXR1cm4gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUud2lkdGgsIDEwKTtcbn07XG5DRnJhbWUucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICByZXR1cm4gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0LCAxMCk7XG59O1xuXG5DRnJhbWUucHJvdG90eXBlLmdldFNpemUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgcmV0dXJuIHsgd2lkdGg6IG1lLmdldFdpZHRoKCksIGhlaWdodDogbWUuZ2V0SGVpZ2h0KCkgfTtcbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuc2V0U2l6ZSA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQsIGZvcmNlKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgdmFyIGJ5VXNlciA9IHRydWU7XG5cbiAgaWYgKGZvcmNlKSB7XG4gICAgYnlVc2VyID0gZmFsc2U7XG4gIH1cblxuXG4gIC8vY2FsbCBDSUZyYW1lI3Jlc2l6ZSBpbnN0ZWFkIG9mIENGcmFtZSNyZXNpemVcbiAgbWUucmVzaXplKDAsIDAsIHdpZHRoIC0gbWUuZ2V0V2lkdGgoKSwgaGVpZ2h0IC0gbWUuZ2V0SGVpZ2h0KCksIGJ5VXNlcik7XG4gIHJldHVybiBtZTtcbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuZ2V0V2luZG93SWQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgcmV0dXJuIG1lLndpbmRvd0lkO1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHJldHVybiBtZS5wcm9wZXJ0eS5uYW1lO1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5zZXROYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5wcm9wZXJ0eS5uYW1lID0gbmFtZTtcbn07XG4vKipcbiAqIGVuZCBvZiBDRnJhbWUgY2xhc3NcbiAqL1xuXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cblxuXG5pbmhlcml0KENJZkZyYW1lLCBDRnJhbWUpO1xuXG4vKipcbiAqIENJZkZyYW1lIGNsYXNzXG4gKiBFeHRlbnNpb24gY2xhc3Mgd2l0aCBjb250ZW50cyBmcmFtZSBvZiBDRnJhbWUgYXMgaWZyYW1lXG4gKiBAcGFyYW0gd2luZG93SWRcbiAqIEBwYXJhbSBhcHBlYXJhbmNlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ0lmRnJhbWUod2luZG93SWQsIGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCwgYXBwZWFyYW5jZSkge1xuXG5cbiAgdmFyIHdsZWZ0ID0gbGVmdDtcbiAgdmFyIHd0b3AgPSB0b3A7XG4gIHZhciB3d2lkdGggPSB3aWR0aDtcbiAgdmFyIHdoZWlnaHQgPSBoZWlnaHQ7XG4gIHZhciB6aW5kZXggPSBhcHBlYXJhbmNlLnppbmRleDtcbiAgdmFyIHdib3JkZXJ3aWR0aCA9IG51bGw7XG5cblxuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHRoaXMuanNGcmFtZSA9IG51bGw7XG4gIHRoaXMuY29udHJvbCA9IG51bGw7XG5cbiAgdGhpcy5taW5GcmFtZVdpZHRoID0gMTI4O1xuICB0aGlzLm1pbldpbmRvd0hlaWdodCA9IDMyO1xuXG4gIHRoaXMuZXZlbnRMaXN0ZW5lckhlbHBlciA9IG5ldyBFdmVudExpc3RlbmVySGVscGVyKCk7XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgdmFsdWUgaXMgdHJ1ZSwgdGhlIGZvY3VzIHdpbGwgbW92ZSB3aGVuIHRhcHBpbmcgdGhlIGlmcmFtZSBhcmVhLFxuICAgKiBidXQgaWYgdGhlIHdpbmRvdyBkbyBub3QgaGF2ZSB0aGUgZm9jdXMsIHlvdSBjYW4gbm90IGNsaWNrIG9uIHRoZSBlbGVtZW50IGluIHRoZSBpZnJhbWUuXG4gICAqL1xuICB0aGlzLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbkVuYWJsZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogIE9ubHkgaW4gdGhlIGNhc2Ugb2YgcmVzaXppbmcgYSB0cmFuc3BhcmVudCBzY3JlZW4gY2FuIGJlIGRpc3BsYXllZCBvbiB0aGUgaWZyYW1lXG4gICAqICBhbmQgdGhlIHNpemUgY2FuIGJlIGFkanVzdGVkIHNtb290aGx5LlxuICAgKiAgdHJ1ZSBpcyByZWNvbW1lbmRlZC5cbiAgICovXG4gIC8vQ2hhbmdlIGhpc3RvcnlcbiAgLy8yMDE4MTIyNlxuICAvL0NoYW5nZWQgdG8gZmFsc2UuXG4gIC8vIFNvIGl0IGJlY29tZXMgbmVjZXNzYXJ5IHRvIGNsaWNrIHR3aWNlIHRvIHJlYWN0IHdoZW4geW91IGNhbGwgdGhlICNzZXRTaXplLEkgY2hhbmdlZCB0aGUgdmFsdWUgdG8gZmFsc2UuXG4gIC8vMjAxODEyMzFcbiAgLy9JIGZvdW5kIHRoZSB3YXkgdGhhdCBpZnJhbWUgd2lsbCBiZSBjaGFuZ2VkIHRoZSBzaXplIHNtb290aGx5LnNvIHRoZSBmaW5hbCBhbnN3ZXIgaXMgdHJ1ZS5cbiAgdGhpcy5vdmVycmF5VHJhbnNwYXJlbnRTY3JlZW5PblJlc2l6ZSA9IHRydWU7XG5cbiAgdGhpcy50aXRsZUJhckNvbG9yRm9jdXNlZCA9IGFwcGVhcmFuY2UudGl0bGVCYXJDb2xvckZvY3VzZWQ7XG5cbiAgdGhpcy50aXRsZUJhckNvbG9yRGVmYXVsdCA9IGFwcGVhcmFuY2UudGl0bGVCYXJDb2xvckRlZmF1bHQ7XG5cbiAgdGhpcy50aXRsZUJhckNhcHRpb25Db2xvckRlZmF1bHQgPSBhcHBlYXJhbmNlLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRGVmYXVsdDtcbiAgdGhpcy50aXRsZUJhckNhcHRpb25Db2xvckZvY3VzZWQgPSBhcHBlYXJhbmNlLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRm9jdXNlZDtcblxuICAvL2NhbGwgc3VwZXIgY29uc3RydWN0b3JcbiAgQ0lmRnJhbWUuc3VwZXJDb25zdHJ1Y3Rvci5jYWxsKG1lLCB3aW5kb3dJZCwgd2xlZnQsIHd0b3AsIHd3aWR0aCwgd2hlaWdodCwgemluZGV4LCB3Ym9yZGVyd2lkdGgsIGFwcGVhcmFuY2UpO1xuXG4gIC8vYm9yZGVyIGNvbG9yXG4gIG1lLmZyYW1lQm9yZGVyQ29sb3JEZWZhdWx0ID0gYXBwZWFyYW5jZS5mcmFtZUJvcmRlckNvbG9yRGVmYXVsdDtcbiAgbWUuZnJhbWVCb3JkZXJDb2xvckZvY3VzZWQgPSBhcHBlYXJhbmNlLmZyYW1lQm9yZGVyQ29sb3JGb2N1c2VkO1xuXG4gIC8vYm9yZGVyIHdpZHRoXG4gIG1lLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0ID0gYXBwZWFyYW5jZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdDtcbiAgbWUuZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQgPSBhcHBlYXJhbmNlLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkO1xuXG4gIG1lLmlmcmFtZSA9IG51bGw7XG5cblxuICAvL09mZnNldCB2YWx1ZSBmb3Igd2lkdGggYWRqdXN0bWVudCBvZiBpZnJhbWVcbiAgbWUuaWZEZWx0YSA9IDA7XG5cbiAgbWUucmVzaXphYmxlID0gdHJ1ZTtcblxuXG4gIG1lLm9uTW91c2VNb3ZlT25JZnJhbWUgPSBudWxsO1xuICBtZS5vbk1vdXNlVXBPbklmcmFtZSA9IG51bGw7XG5cbiAgbWUuX2hhc0ZvY3VzID0gZmFsc2U7XG5cbiAgbWUuX2hhc0ZvY3VzVGltZSA9IDA7XG5cblxuICBtZS5odG1sRWxlbWVudC50eXBlTmFtZSA9ICdjaWZ3aW5kb3cnO1xuXG4gIC8vbmFtZSBvZiBpZnJhbWVcbiAgdmFyIGV4SWZyYW1lTmFtZSA9ICdyaXZlcnN1bl8nICsgd2luZG93SWQ7XG5cblxuICBtZS5kZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG4gIG1lLmlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuXG5cbiAgbWUuaWZyYW1lLm5hbWUgPSBleElmcmFtZU5hbWU7XG5cbiAgbWUuaWZyYW1lLmlkID0gZXhJZnJhbWVOYW1lO1xuXG4gIG1lLmlmcmFtZS5mcmFtZUJvcmRlciA9ICcwJztcbiAgLy9tZS5pZnJhbWUuc2Nyb2xsaW5nID0gJ25vJztcblxuICBtZS5pZnJhbWUuekluZGV4ID0gLTE7XG5cbiAgLy9BbGxvdyB0cmFuc3BhcmVudCBvZiBpZnJhbWUgYmFja2dyb3VuZC5cbiAgbWUuaWZyYW1lLmFsbG93VHJhbnNwYXJlbmN5ID0gJ3RydWUnO1xuICBtZS5pZnJhbWUud2lkdGggPSBtZS5jYW52YXNOZXRXaWR0aCAtIG1lLmlmRGVsdGEgKyAwO1xuICBtZS5pZnJhbWUuaGVpZ2h0ID0gbWUuY2FudmFzTmV0SGVpZ2h0IC0gbWUuaWZEZWx0YSArIDA7XG5cbiAgbWUuc2hvd1RpdGxlQmFyID0gYXBwZWFyYW5jZS5zaG93VGl0bGVCYXI7XG5cbiAgbWUuZ2V0RnJhbWVJbm5lckJvcmRlclJhZGl1cyA9IGFwcGVhcmFuY2UuZ2V0RnJhbWVJbm5lckJvcmRlclJhZGl1cztcblxuICBtZS5mcmFtZUJvcmRlclJhZGl1cyA9IGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJSYWRpdXM7XG5cblxuICBtZS5hZGp1c3RGcmFtZUJvcmRlclJhZGl1cygpO1xuXG4gIG1lLnVzZUlmcmFtZSA9IGZhbHNlO1xuXG5cbiAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuYXBwZW5kQ2hpbGQobWUuaWZyYW1lKTtcblxuICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5hcHBlbmRDaGlsZChtZS5kZnJhbWUpO1xuXG5cbiAgdGhpcy5zZXRVc2VJZnJhbWUgPSBmdW5jdGlvbih1c2VJZnJhbWUpIHtcbiAgICBtZS51c2VJZnJhbWUgPSB1c2VJZnJhbWU7XG4gICAgbWUuaWZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBtZS5pZnJhbWUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIG1lLmlmcmFtZS5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgbWUuaWZyYW1lLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgIG1lLmlmcmFtZS5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBtZS5pZnJhbWUuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuXG4gICAgbWUuZGZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBtZS5kZnJhbWUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIG1lLmRmcmFtZS5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgbWUuZGZyYW1lLnN0eWxlLmJveFNpemluZyA9ICdjb250ZW50LWJveCc7XG5cbiAgICBtZS5kZnJhbWUuc3R5bGUudG9wID0gJzBweCc7XG4gICAgbWUuZGZyYW1lLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIG1lLmRmcmFtZS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgLy9tZS5kZnJhbWUuc3R5bGUuYm9yZGVyU3R5bGU9XCJzb2xpZFwiO1xuICAgIG1lLmRmcmFtZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuXG4gICAgaWYgKHVzZUlmcmFtZSkge1xuICAgICAgbWUuaWZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICBtZS5kZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZS5pZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgbWUuZGZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfVxuICB9O1xuXG4gIG1lLnNldFVzZUlmcmFtZShhcHBlYXJhbmNlLnVzZUlmcmFtZSk7XG5cbiAgLy8gSWYgaXQgaXMgSUUsIHNldCB0aGUgY2FudmFzRWxlbWVudCBvZiB0aGUgY2FudmFzIHdoaWNoIGlzIHRoZSBwYXJlbnQgb2YgdGhlIGlmcmFtZSB0byB0cmFuc3BhcmVudC5cblxuICBpZiAobWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuRW5hYmxlZCB8fCBtZS5vdmVycmF5VHJhbnNwYXJlbnRTY3JlZW5PblJlc2l6ZSkge1xuICAgIC8vQ3JlYXRlIGEgdHJhbnNwYXJlbnQgc2NyZWVuLlxuICAgIG1lLnRyYW5zcGFyZW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAvLyBtZS50cmFuc3BhcmVuY2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChpbWcvaW1nX2Jhcm9uX3RwLmdpZiknO1xuXG4gICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBtZS50cmFuc3BhcmVuY2Uuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS50b3AgPSAnMHB4JztcblxuICAgIC8vVHJhbnNwYXJlbnQgc2NyZWVuIGlzIDBweCB3aGVuIGNyZWF0aW5nIHdpbmRvd1xuICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcblxuICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS56SW5kZXggPSA0O1xuICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS5ib3JkZXJXaWR0aCA9ICcwcHgnO1xuICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS5ib3JkZXJDb2xvciA9ICcjZmYwMGVlJztcbiAgICBtZS50cmFuc3BhcmVuY2Uuc3R5bGUuYm9yZGVyU3R5bGUgPSAnbm9uZSc7XG4gICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcblxuICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGFwcGVhcmFuY2UuZnJhbWVCYWNrZ3JvdW5kQ29sb3I7XG5cblxuICAgIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LmFwcGVuZENoaWxkKG1lLnRyYW5zcGFyZW5jZSk7XG4gIH1cblxuICBtZS5ldmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbWUuYXBwZWFyYW5jZSA9IGFwcGVhcmFuY2U7XG5cbn1cblxuXG5DSWZGcmFtZS5wcm90b3R5cGUuZ2V0RnJhbWVWaWV3ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHJldHVybiBtZS5kZnJhbWU7XG59O1xuXG5DSWZGcmFtZS5wcm90b3R5cGUuZ2V0RnJhbWVBcHBlYXJhbmNlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHJldHVybiBtZS5hcHBlYXJhbmNlO1xufTtcblxuQ0lmRnJhbWUucHJvdG90eXBlLnNldEhUTUwgPSBmdW5jdGlvbihodG1sKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIG1lLmRmcmFtZS5pbm5lckhUTUwgPSBodG1sO1xufTtcbkNJZkZyYW1lLnByb3RvdHlwZS5zZXRGcmFtZUluRnJhbWUgPSBmdW5jdGlvbihlbmFibGVkKSB7XG5cbiAgLy8gV2h5IGkgaGFkIHRvIChib3RoZXIgdG86KSApIG1ha2UgYSBzZXRGcmFtZUluRnJhbWVcbiAgLy8gVGhlIGVsZW1lbnQgc3BlY2lmaWVkIGF0IHRoZSB0b3Agb2YgdGhlIGNvbnRlbnQgb2YgdGhlIHBhcmVudCB3aW5kb3cgKGZvciBleGFtcGxlLCBkaXYgZWxlbWVudClcbiAgLy8gbWF5IE5PVCBiZSBhYmxlIHRvIGdldCB0aGUgcmVzaXplIGV2ZW50IHVzaW5nIGFkZEV2ZW50TGlzdGVuZXIuXG4gIC8vIFRoZXJlZm9yZSwgd2hlbiB0aGUgcmVzaXplIGV2ZW50IGlzc3VlZCBieSBqc0ZyYW1lIGluIHRoZSBwYXJlbnQgd2luZG93IG9jY3VycyxcbiAgLy8gaXRzIGN1c3RvbSBhdHRyaWJ1dGUgKFdpbmRvd0V2ZW50SGVscGVyLk1BVENIX1BBUkVOVF9DSEFOR0VfTUFSS0VSX0FUVFIpIGlzIGF0dGFjaGVkXG4gIC8vIHRvIHRoZSBlbGVtZW50IGF0IHRoZSB0b3Agb2YgdGhlIHBhcmVudCB3aW5kb3cgY29udGVudFxuICAvLyBhbmQgaXQgaXMgY2FwdHVyZWQgYnkgdGhlIG11dGF0aW9uT2JzZXJ2ZXIgb24gdGhlIGNoaWxkIHdpbmRvdyBzaWRlLlxuXG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgdmFyIGNvbnRlbnRzRWxlID0gbWUuZGZyYW1lID8gbWUuZGZyYW1lLmZpcnN0Q2hpbGQgOiBudWxsO1xuXG4gIGlmIChjb250ZW50c0VsZSkge1xuICAgIC8vIHBvbHlmaWxsIGZvciAjbm93XG4gICAgaWYgKCFEYXRlLm5vdykge1xuICAgICAgRGF0ZS5ub3cgPSBmdW5jdGlvbiBub3coKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChlbmFibGVkKSB7XG4gICAgICBtZS5ldmVudEVtaXR0ZXIub25seSgncmVzaXplJywgJ2ZpZi1saXN0ZW5lcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50c0VsZS5zZXRBdHRyaWJ1dGUoV2luZG93RXZlbnRIZWxwZXIuTUFUQ0hfUEFSRU5UX0NIQU5HRV9NQVJLRVJfQVRUUiwgRGF0ZS5ub3coKSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudHNFbGUucmVtb3ZlQXR0cmlidXRlKFdpbmRvd0V2ZW50SGVscGVyLk1BVENIX1BBUkVOVF9DSEFOR0VfTUFSS0VSX0FUVFIpO1xuICAgICAgbWUuZXZlbnRFbWl0dGVyLm9ubHkoJ3Jlc2l6ZScsICdmaWYtbGlzdGVuZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuLyoqXG4gKiBGaW5kIERPTSBFbGVtZW50IGluIHRoZSBmcmFtZSBieSBxdWVyeVNlbGVjdG9yPGJyPlxuICogIEV4YW1wbGVzPGJyPlxuICogICAgICBmcmFtZS4kKFwiI215X2lkX25hbWVcIik7XG4gKiAgICAgIGZyYW1lLiQoXCIubXlfY2xhc3NfbmFtZVwiKTtcbiAqICAgICAgZnJhbWUuJChcImRpdj5pbWdcIik7XG4gKiAgICAgIGZyYW1lLiQoXCJpbnB1dFt0eXBlPSdzdWJtaXRdXCIpO1xuICogQHBhcmFtIHtzdHJpbmd9IHEgc2VsZWN0b3IgcXVlcnlcbiAqIEByZXR1cm5zIHtOb2RlfVxuICovXG5DSWZGcmFtZS5wcm90b3R5cGUuJCA9IGZ1bmN0aW9uKHEpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICBpZiAobWUudXNlSWZyYW1lKSB7XG5cbiAgICB2YXIgZG9jSW5JZnJhbWUgPSBtZS5pZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgICByZXR1cm4gZG9jSW5JZnJhbWUucXVlcnlTZWxlY3RvcihxKTtcblxuICB9IGVsc2Uge1xuICAgIHJldHVybiBtZS5kZnJhbWUucXVlcnlTZWxlY3RvcihxKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXRzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgd2luZG93IGl0c2VsZiBvciBlbGVtZW50cyBpbiB0aGUgY29udGVudHMgb2YgdGhlIHdpbmRvdy5cbiBJdCBpcyBwb3NzaWJsZSB0byByZWdpc3RlciBtdWx0aXBsZSBsaXN0ZW5lcnMgdG8gdGhlIHNhbWUgZXZlbnQgdHlwZS5cblxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gSWYgdGhlIFwiaWRcIiBpcyBwcmVmaXhlZCB3aXRoIFwiI1wiLFxuIGFuIGV2ZW50IGxpc3RlbmVyIGNhbiBiZSBzZXQgdG8gYSBET00gZWxlbWVudCAoZXZlbnRUYXJnZXQpIGlkZW50aWZpZWQgYnkgdGhlIGlkIGluIHRoZSBjb250ZW50Ljxicj5cbiBUaGlzIGlzIHRoZSBzYW1lIGJlaGF2aW9yIGFzIHRoZSB1c3VhbCBldmVudFRhcmdldCNhZGRFdmVudExpc3RlbmVyLjxicj5cbiA8YnI+XG4gSW4gYWRkaXRpb24gdG8gdGhlIERPTSBlbGVtZW50IGluIHRoZSBjb250ZW50LCB0aGUgZm9sbG93aW5nIHNwZWNpYWwgbmFtZXMgYXJlIHJlc2VydmVkIGZvciB0aGUgXCJpZFwiPGJyPlxuIFwiY2xvc2VCdXR0b25cIiAuLi4gY2xvc2UgYnV0dG9uLjxicj5cbiBcIm1pbmltaXplQnV0dG9uXCIgLi4uIE1pbmltaXplIEJ1dHRvbjxicj5cbiBcInpvb21CdXR0b25cIi4uLnpvb20gYnV0dG9uLjxicj5cbiBcInJlc3RvcmVCdXR0b25cIiAuLi4gdGhlIGJ1dHRvbiB0aGF0IHJlc3RvcmVzIHRoZSB3aW5kb3cgc2l6ZS48YnI+XG4gXCJkZW1pbmltaXplQnV0dG9uXCIgLi4uIHRoZSBidXR0b24gdG8gcmV0dXJuIGZyb20gdGhlIG1pbmltaXplZCBzdGF0ZS48YnI+XG4gPGJyPlxuIFlvdSBjYW4gYWxzbyByZWNlaXZlIGV2ZW50cyBzdWNoIGFzIHdpbmRvdyByZXNpemluZywgbW92aW5nLCBhbmQgZm9jdXNpbmcuXG4gSW4gdGhpcyBjYXNlLCBzcGVjaWZ5IHRoZSBmb2xsb3dpbmcgYXMgXCJpZFwiPGJyPlxuIFwiZnJhbWVcIiBvciBcIndpbmRvd1wiLjxicj5cbiA8YnI+XG4gWW91IGNhbiBzcGVjaWZ5IGEgZnJhbWVDb21wb25lbnQgbmFtZSB0aGF0IGlzIHVuaXF1ZWx5IGRlZmluZWQgYnkgYWRkRnJhbWVDb21wb25lbnQuXG4gKEdlbmVyaWMgYnV0dG9ucyBzdWNoIGFzIGNsb3NlQnV0dG9uIGFyZSBvbmUgb2YgdGhlIGZyYW1lIGNvbXBvbmVudHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIFRoZSBlbGVtZW50IGluIHRoZSBjb250ZW50IChIVE1MKSBvZiBhIHdpbmRvdyB3aG9zZSBcImlkXCIgc3RhcnRzIHdpdGggXCIjXCJcbiAqIGNhbiBiZSB0aGUgc2FtZSBhcyB0aGUgZXZlbnRUeXBlKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FdmVudC90eXBlKSB1c2VkIGJ5IHRoZSBub3JtYWwgYWRkRXZlbnRMaXN0ZW5lci48YnI+XG4gPGJyPlxuIElmIHRoZSBcImlkXCIgaXMgYSBmcmFtZSBvciBhIHdpbmRvdywgdGhlIGZvbGxvd2luZyBjYW4gYmUgdXNlZDxicj5cbiBcIm1vdmVcIi4uLiBXaGVuIGEgd2luZG93IGlzIG1vdmVkLCBpdCBmaXJlcy48YnI+XG4gXCJyZXNpemVcIi4uLiBGaXJlcyB3aGVuIHRoZSB3aW5kb3cgaXMgcmVzaXplZC48YnI+XG4gXCJmb2N1c1wiLi4uIFwiZm9jdXNcIiBtZWFucyBnb3QgZm9jdXMuIEl0IGZpcmVzIHdoZW4gdGhlIHdpbmRvdyBpcyBpbiBmb2N1cy48YnI+XG4gXCJibHVyXCIuLi4gXCJibHVyXCIgbWVhbnMgbG9zdCBmb2N1cy5JdCBmaXJlcyB3aGVuIHRoZSB3aW5kb3cgbG9zZXMgZm9jdXMuPGJyPlxuIDxicj5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrRnVuY1xuICovXG5DSWZGcmFtZS5wcm90b3R5cGUub24gPSBmdW5jdGlvbihpZCwgZXZlbnRUeXBlLCBjYWxsYmFja0Z1bmMpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgdmFyIGNvbXBvbmVudCA9IG1lLmdldEZyYW1lQ29tcG9uZW50RWxlbWVudChpZCk7XG5cbiAgLy8gaWYgaWQgaW5kaWNhdGVzIGZyYW1lIGNvbXBvbmVudCBsaWtlIENUZXh0QnV0dG9uLENJbWFnZUJ1dHRvblxuICBpZiAoY29tcG9uZW50KSB7XG5cbiAgICAvL1NpbmNlIHdlIHdhbnQgdG8gc3BlY2lmeSBvbmx5IG9uZSBoYW5kbGVyIGZvciBmcmFtZSBjb21wb25lbnRzIGF0IHRoZSBzYW1lIHRpbWUsXG4gICAgLy8gdXNlIGV2ZW50TGlzdGVuZXJIZWxwZXIgaW5zdGVhZCBvZiBhbiBldmVudCBsaXN0ZW5lclxuICAgIG1lLmV2ZW50TGlzdGVuZXJIZWxwZXIuYWRkRXZlbnRMaXN0ZW5lcihjb21wb25lbnQsIGV2ZW50VHlwZSwgZnVuY3Rpb24oZSkge1xuICAgICAgY2FsbGJhY2tGdW5jKG1lLCBlLFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2ZyYW1lQ29tcG9uZW50JyxcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgZXZlbnRUeXBlOiBldmVudFR5cGUsXG4gICAgICAgICAgLy9jaGlsZDogY2hpbGRNZW51RWxlXG4gICAgICAgIH0pO1xuICAgIH0sIHsgbGlzdGVuZXJOYW1lOiAnZnJhbWUtY29tcG9uZW50LWxpc3RlbmVyJyB9KTtcbiAgfVxuXG4gIGlmIChpZCA9PT0gJ2ZyYW1lJyB8fCBpZCA9PT0gJ3dpbmRvdycpIHtcblxuICAgIGlmIChldmVudFR5cGUgPT09ICdtb3ZlJyAmJiAhbWUuZXZlbnRFbWl0dGVyLmhhc0xpc3RlbmVyRnVuY3MoJ21vdmUnKSkge1xuICAgICAgbWUuc2V0T25Nb3ZlTGlzdGVuZXIoZnVuY3Rpb24oZSkge1xuICAgICAgICAvL3JlZkNJZkZyYW1lLmV2ZW50RW1pdHRlci5lbWl0KCdyZXNpemUnLCk7XG4gICAgICAgIG1lLmV2ZW50RW1pdHRlci5lbWl0KCdtb3ZlJywgbWUuX2dldEN1cnJlbnRTaXplUG9zKCkpO1xuICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBtZS5ldmVudEVtaXR0ZXIub24oZXZlbnRUeXBlLCBjYWxsYmFja0Z1bmMpO1xuICB9XG5cbiAgLy8gRE9NIGVsZW1lbnQgaW4gaWZyYW1lIG9yIERPTSBlbGVtZW50IG9uIGRmcmFtZVxuICB2YXIgZG9tRWxlbWVudCA9IG1lLiQoaWQpO1xuXG4gIGlmIChkb21FbGVtZW50KSB7XG4gICAgaWYgKG1lLmV2ZW50TGlzdGVuZXJIZWxwZXIuaGFzRXZlbnRMaXN0ZW5lcihkb21FbGVtZW50LCBldmVudFR5cGUsICdmcmFtZS1kb20tbGlzdGVuZXInKSkge1xuICAgICAgbWUuZXZlbnRMaXN0ZW5lckhlbHBlci5yZW1vdmVFdmVudExpc3RlbmVyKGRvbUVsZW1lbnQsIGV2ZW50VHlwZSwgbnVsbCwgeyBsaXN0ZW5lck5hbWU6ICdmcmFtZS1kb20tbGlzdGVuZXInIH0pO1xuICAgIH1cbiAgICBtZS5ldmVudExpc3RlbmVySGVscGVyLmFkZEV2ZW50TGlzdGVuZXIoZG9tRWxlbWVudCwgZXZlbnRUeXBlLCBmdW5jdGlvbihlKSB7XG4gICAgICBjYWxsYmFja0Z1bmMobWUsIGUsIHtcbiAgICAgICAgdHlwZTogJ2RvbScsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgZXZlbnRUeXBlOiBldmVudFR5cGVcbiAgICAgIH0pO1xuICAgIH0sIHsgbGlzdGVuZXJOYW1lOiAnZnJhbWUtZG9tLWxpc3RlbmVyJyB9KTtcbiAgfVxuXG4gIC8vIFNlYXJjaCBET00gZWxlbWVudCBvbiBmcmFtZUNvbXBvbmVudFxuICBpZiAoIWRvbUVsZW1lbnQpIHtcblxuICAgIHZhciBkb21FbGVtZW50T25DYW52YXNFbGVtZW50ID0gbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG4gICAgaWYgKGRvbUVsZW1lbnRPbkNhbnZhc0VsZW1lbnQpIHtcbiAgICAgIGRvbUVsZW1lbnRPbkNhbnZhc0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY2FsbGJhY2tGdW5jKG1lLCBlLCB7XG4gICAgICAgICAgdHlwZTogJ2RvbScsXG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGV2ZW50VHlwZTogZXZlbnRUeXBlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG5cbkNJZkZyYW1lLnByb3RvdHlwZS5hZGp1c3RGcmFtZUJvcmRlclJhZGl1cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIGlmIChwYXJzZUludChtZS5mcmFtZUJvcmRlclJhZGl1cywgMTApID4gMCkge1xuXG4gICAgdmFyIGJvcmRlckRhdGEgPSBtZS5nZXRGcmFtZUlubmVyQm9yZGVyUmFkaXVzKG1lLCBtZS5faGFzRm9jdXMpO1xuICAgIHZhciBmcmFtZUFwcGVhcmFuY2UgPSBib3JkZXJEYXRhLmZyYW1lQXBwZWFyYW5jZTtcbiAgICB2YXIgaW5uZXJCb3JkZXJSYWRpdXMgPSBib3JkZXJEYXRhLmlubmVyQm9yZGVyUmFkaXVzO1xuICAgIHZhciB0aXRsZUJhckhlaWdodCA9IHBhcnNlSW50KGZyYW1lQXBwZWFyYW5jZS50aXRsZUJhckhlaWdodCwgMTApO1xuXG4gICAgaWYgKG1lLnNob3dUaXRsZUJhcikge1xuXG4gICAgICAvL3RpdGxlIGJhciBleGlzdHNcbiAgICAgIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG4gICAgICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG4gICAgICBtZS5pZnJhbWUuc3R5bGUuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSBpbm5lckJvcmRlclJhZGl1cztcbiAgICAgIG1lLmlmcmFtZS5zdHlsZS5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG5cbiAgICAgIG1lLnRpdGxlQmFyLnN0eWxlLmJvcmRlclRvcExlZnRSYWRpdXMgPSBpbm5lckJvcmRlclJhZGl1cztcbiAgICAgIG1lLnRpdGxlQmFyLnN0eWxlLmJvcmRlclRvcFJpZ2h0UmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG5cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8vdGl0bGUgYmFyIG5vdCBleGl0c1xuICAgICAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuYm9yZGVyUmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG4gICAgICBtZS5pZnJhbWUuc3R5bGUuYm9yZGVyUmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG5cbiAgICB9XG5cbiAgICBpZiAobWUuZGZyYW1lKSB7XG4gICAgICBpZiAodGl0bGVCYXJIZWlnaHQgPT09IDApIHtcbiAgICAgICAgaWYgKCFtZS5kZnJhbWUuc3R5bGUuYm9yZGVyVG9wUmlnaHRSYWRpdXMpIHtcbiAgICAgICAgICBtZS5kZnJhbWUuc3R5bGUuYm9yZGVyVG9wUmlnaHRSYWRpdXMgPSBpbm5lckJvcmRlclJhZGl1cztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1lLmRmcmFtZS5zdHlsZS5ib3JkZXJUb3BMZWZ0UmFkaXVzKSB7XG4gICAgICAgICAgbWUuZGZyYW1lLnN0eWxlLmJvcmRlclRvcExlZnRSYWRpdXMgPSBpbm5lckJvcmRlclJhZGl1cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbWUuZGZyYW1lLnN0eWxlLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG4gICAgICBtZS5kZnJhbWUuc3R5bGUuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9IGlubmVyQm9yZGVyUmFkaXVzO1xuICAgIH1cblxuXG4gIH1cbn07XG5cbkNJZkZyYW1lLnByb3RvdHlwZS5oYW5kbGVSZWxlYXNpbmdGb2N1cyA9IGZ1bmN0aW9uKGUpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICB2YXIgZm9jdXNlZCA9IG1lLl9oYXNGb2N1cztcblxuICBtZS5faGFzRm9jdXMgPSBmYWxzZTtcblxuICAvL3VwZGF0ZSBzdHlsZSBjbGFzc1xuICBtZS50aXRsZUJhci5jbGFzc05hbWUgPSBtZS50aXRsZUJhckNsYXNzTmFtZURlZmF1bHQ7XG5cbiAgaWYgKG1lLnRpdGxlQmFyQ29sb3JEZWZhdWx0KSB7XG4gICAgbWUudGl0bGVCYXIuc3R5bGUuYmFja2dyb3VuZCA9IG1lLnRpdGxlQmFyQ29sb3JEZWZhdWx0O1xuICB9XG4gIG1lLnRpdGxlQmFyLnN0eWxlLmNvbG9yID0gbWUudGl0bGVCYXJDYXB0aW9uQ29sb3JEZWZhdWx0O1xuXG4gIC8vYm9yZGVyIGNvbG9yXG4gIGlmIChtZS5mcmFtZUJvcmRlckNvbG9yRGVmYXVsdCkge1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gbWUuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQ7XG4gIH1cblxuICAvL2JvcmRlciB3aWR0aFxuICBpZiAobWUuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQpIHtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9IG1lLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0O1xuICAgIG1lLmFkanVzdEZyYW1lQm9yZGVyUmFkaXVzKCk7XG4gIH1cblxuICBpZiAobWUuaHRtbEVsZW1lbnQudHlwZU5hbWUgPT0gJ2NpZndpbmRvdycpIHtcbiAgICBpZiAobWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuRW5hYmxlZCkge1xuICAgICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLndpZHRoID0gcGFyc2VJbnQobWUuaWZyYW1lLndpZHRoLCAxMCkgKyAncHgnO1xuICAgICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLmhlaWdodCA9IHBhcnNlSW50KG1lLmlmcmFtZS5oZWlnaHQsIDEwKSArICdweCc7XG4gICAgfVxuICB9XG5cbiAgLy9oYW5kbGluZyBmb3IgY2hpbGQgZnJhbWVDb21wb25lbnRzXG4gIGZvciAodmFyIGZyYW1lQ29tcG9uZW50SWQgaW4gbWUuZnJhbWVDb21wb25lbnRNYXApIHtcbiAgICB2YXIgZnJhbWVDb21wb25lbnQgPSBtZS5mcmFtZUNvbXBvbmVudE1hcFtmcmFtZUNvbXBvbmVudElkXTtcbiAgICBmcmFtZUNvbXBvbmVudC5oYW5kbGVSZWxlYXNpbmdGb2N1cygpO1xuICB9XG5cbiAgLy9ib3JkZXIgYm90dG9tXG4gIGlmIChtZS50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQpIHtcbiAgICBtZS50aXRsZUJhci5zdHlsZS5ib3JkZXJCb3R0b20gPSBtZS50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQ7XG4gIH1cblxuICBpZiAoZm9jdXNlZCkge1xuICAgIG1lLmV2ZW50RW1pdHRlci5lbWl0KCdibHVyJywgeyB0YXJnZXQ6IG1lIH0pO1xuICB9XG5cblxuICByZXR1cm4gbWU7XG59O1xuXG5DSWZGcmFtZS5wcm90b3R5cGUuaGFuZGxlVGFraW5nRm9jdXMgPSBmdW5jdGlvbihlKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHZhciBmb2N1c2VkID0gbWUuX2hhc0ZvY3VzO1xuICBtZS5faGFzRm9jdXMgPSB0cnVlO1xuICBtZS5faGFzRm9jdXMgPSBEYXRlLm5vdygpO1xuXG4gIGlmIChtZS5vdmVycmF5VHJhbnNwYXJlbnRTY3JlZW5FbmFibGVkKSB7XG5cbiAgICAvL2Nsb3NlIHRyYW5zcGFyZW5jZSBzY3JlZW5cbiAgICBtZS50cmFuc3BhcmVuY2Uuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICBtZS50cmFuc3BhcmVuY2Uuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG5cbiAgfVxuXG4gIC8vdXBkYXRlIHN0eWxlIGNsYXNzXG4gIG1lLnRpdGxlQmFyLmNsYXNzTmFtZSA9IG1lLnRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZDtcblxuICBpZiAobWUudGl0bGVCYXJDb2xvckZvY3VzZWQpIHtcbiAgICBtZS50aXRsZUJhci5zdHlsZS5iYWNrZ3JvdW5kID0gbWUudGl0bGVCYXJDb2xvckZvY3VzZWQ7XG4gIH1cbiAgbWUudGl0bGVCYXIuc3R5bGUuY29sb3IgPSBtZS50aXRsZUJhckNhcHRpb25Db2xvckZvY3VzZWQ7XG5cblxuICAvL2JvcmRlciBjb2xvclxuICBpZiAobWUuZnJhbWVCb3JkZXJDb2xvckZvY3VzZWQpIHtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IG1lLmZyYW1lQm9yZGVyQ29sb3JGb2N1c2VkO1xuICB9XG5cbiAgLy9ib3JkZXIgd2lkdGhcbiAgaWYgKG1lLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkKSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyV2lkdGggPSBtZS5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZDtcbiAgICBtZS5hZGp1c3RGcmFtZUJvcmRlclJhZGl1cygpO1xuICB9XG5cbiAgLy9ib3JkZXIgYm90dG9tXG4gIGlmIChtZS50aXRsZUJhckJvcmRlckJvdHRvbUZvY3VzZWQpIHtcbiAgICBtZS50aXRsZUJhci5zdHlsZS5ib3JkZXJCb3R0b20gPSBtZS50aXRsZUJhckJvcmRlckJvdHRvbUZvY3VzZWQ7XG4gIH1cblxuICAvL2hhbmRsaW5nIGZvciBjaGlsZCBmcmFtZUNvbXBvbmVudHNcbiAgZm9yICh2YXIgZnJhbWVDb21wb25lbnRJZCBpbiBtZS5mcmFtZUNvbXBvbmVudE1hcCkge1xuICAgIHZhciBmcmFtZUNvbXBvbmVudCA9IG1lLmZyYW1lQ29tcG9uZW50TWFwW2ZyYW1lQ29tcG9uZW50SWRdO1xuICAgIGZyYW1lQ29tcG9uZW50LmhhbmRsZVRha2luZ0ZvY3VzKCk7XG4gIH1cblxuXG4gIGlmICghZm9jdXNlZCkge1xuICAgIG1lLmV2ZW50RW1pdHRlci5lbWl0KCdmb2N1cycsIHsgdGFyZ2V0OiBtZSB9KTtcbiAgfVxuXG4gIHJldHVybiBtZTtcbn07XG5cblxuQ0ZyYW1lLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgLy9tZS5odG1sRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICBtZS5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnOy8vaGlkZGVuJztcblxuICBpZiAobW9kZWwgJiYgbW9kZWwucmVxdWVzdEZvY3VzID09IGZhbHNlKSB7XG5cbiAgfSBlbHNlIHtcbiAgICBtZS5yZXF1ZXN0Rm9jdXMoKTtcbiAgfVxuICByZXR1cm4gbWU7XG59O1xuXG5cbkNGcmFtZS5wcm90b3R5cGUuc2hvd01vZGFsID0gZnVuY3Rpb24ob25DbG9zZUxpc3RlbmVyKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgdmFyIGFwcGVhcmFuY2UgPSBuZXcgQ0ZyYW1lQXBwZWFyYW5jZSgpO1xuICBhcHBlYXJhbmNlLnNob3dUaXRsZUJhciA9IHRydWU7XG4gIGFwcGVhcmFuY2Uuc2hvd0Nsb3NlQnV0dG9uID0gZmFsc2U7XG4gIGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJSYWRpdXMgPSAnMHB4JztcbiAgYXBwZWFyYW5jZS5mcmFtZUJvcmRlclN0eWxlID0gJ25vbmUnO1xuICBhcHBlYXJhbmNlLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0ID0gJzBweCc7XG4gIGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQgPSAnMHB4JztcbiAgYXBwZWFyYW5jZS5mcmFtZUJveFNoYWRvdyA9IG51bGw7XG4gIGFwcGVhcmFuY2UuZnJhbWVCYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICBhcHBlYXJhbmNlLmZyYW1lQ29tcG9uZW50cyA9IFtdO1xuICBhcHBlYXJhbmNlLmZyYW1lSGVpZ2h0QWRqdXN0ID0gMDtcbiAgYXBwZWFyYW5jZS50aXRsZUJhckhlaWdodCA9ICcwcHgnO1xuICBhcHBlYXJhbmNlLnRpdGxlQmFyQm9yZGVyQm90dG9tRm9jdXNlZCA9IG51bGw7XG4gIGFwcGVhcmFuY2UudGl0bGVCYXJDYXB0aW9uTGVmdE1hcmdpbiA9ICcwcHgnO1xuXG5cbiAgYXBwZWFyYW5jZS5vbkluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcbiAgfTtcblxuICAvL2FkZGVkIGZvciBtb2RhbCB3aW5kb3dcbiAgYXBwZWFyYW5jZS5wdWxsVXBEaXNhYmxlZCA9IHRydWU7XG5cbiAgdmFyIHdpbmRvd01hbmFnZXIgPSBtZS5wYXJlbnRDYW52YXM7XG5cbiAgdmFyIG1vZGFsQmFja2dyb3VuZFdpbmRvd0lkID0gREVGLkNGUkFNRS5NT0RBTF9CQUNLR1JPVU5EX0ZSQU1FX0lEX1BSRUZJWCArIG1lLmlkO1xuXG4gIC8vY3JlYXRlIGJhY2tncm91bmQgd2luZG93IGZvciBwcmV2ZW50aW5nIGNsaWNrIGJhY2tncm91bmRcbiAgdmFyIG1vZGFsQmFja2dyb3VuZEZyYW1lID0gbmV3IENJZkZyYW1lKG1vZGFsQmFja2dyb3VuZFdpbmRvd0lkLCAwLCAwLCAxLCAxLCBhcHBlYXJhbmNlKTtcbiAgbW9kYWxCYWNrZ3JvdW5kRnJhbWUuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0LCB0cnVlKTtcbiAgbW9kYWxCYWNrZ3JvdW5kRnJhbWUuc2V0UmVzaXphYmxlKGZhbHNlKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgbW9kYWxCYWNrZ3JvdW5kRnJhbWUuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0LCB0cnVlKTtcbiAgfSk7XG5cblxuICAvL3JlbWVtYmVyIGlkIG9mIG1vZGFsIGJhY2tncm91bmQgZnJhbWVcbiAgbWUubW9kYWxCYWNrZ3JvdW5kV2luZG93SWQgPSBtb2RhbEJhY2tncm91bmRXaW5kb3dJZDtcblxuICAvLyBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLndpbmRvd05hbWUpIHtcbiAgLy8gICAgIGZyYW1lLnNldE5hbWUocHJvcGVydGllcy53aW5kb3dOYW1lKTtcbiAgLy8gfVxuXG4gIG1vZGFsQmFja2dyb3VuZEZyYW1lLmhpZGUoKTtcbiAgd2luZG93TWFuYWdlci5hZGRXaW5kb3cobW9kYWxCYWNrZ3JvdW5kRnJhbWUpO1xuXG5cbiAgbW9kYWxCYWNrZ3JvdW5kRnJhbWUuc2V0VGl0bGUoJycpLmdldEZyYW1lVmlldygpLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwianNmcmFtZS1tb2RhbC13aW5kb3ctYmFja2dyb3VuZFwiPjwvZGl2Pic7XG4gIG1vZGFsQmFja2dyb3VuZEZyYW1lLmdldEZyYW1lVmlldygpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsMCwwLDAuMCknO1xuICBtb2RhbEJhY2tncm91bmRGcmFtZS5zaG93KCk7XG5cbiAgbWUuc2hvdygpO1xuXG4gIGlmIChvbkNsb3NlTGlzdGVuZXIpIHtcbiAgICBtZS5zZXRPbkNsb3NlRnJhbWVMaXN0ZW5lcihvbkNsb3NlTGlzdGVuZXIpO1xuICB9XG59O1xuQ0ZyYW1lLnByb3RvdHlwZS5nZXRXaW5kb3dNYW5hZ2VyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHJldHVybiBtZS5wYXJlbnRDYW52YXM7XG59XG5cblxuQ0lmRnJhbWUucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgLy8gIG1lLmh0bWxFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJzsvL2hpZGRlbic7XG4gIHJldHVybiBtZTtcbn07XG5cbi8vT3ZlcnJpZGluZyBDQmVhbkZyYW1lLnByb3RvdHlwZS5vbm1vdXNlRG93blxuQ0lmRnJhbWUucHJvdG90eXBlLm9ubW91c2VEb3duID0gZnVuY3Rpb24oZSkge1xuXG4gIHZhciByZWZIdG1sRWxlbWVudCA9IHRoaXM7XG5cbiAgLy9EbyBub3Qgc2VsZWN0IGl0IHdoZW4gZHJhZ2dpbmcgYnkgdGhlIG1vdXNlLlxuICBkb2N1bWVudC5ib2R5Lm9uZHJhZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgLy8gZG9jdW1lbnQuYm9keS5vbnNlbGVjdHN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAvLyB9O1xuXG5cbiAgLy9PdmVycmlkZSBkZWNvcmF0b3Igd2l0aCBvbm1vdXNlRG93biBvZiBwYXJlbnQgY2xhc3NcbiAgcmVmSHRtbEVsZW1lbnQuZGVjb3JhdG9yID0gQ0ZyYW1lLnByb3RvdHlwZS5vbm1vdXNlRG93bjtcbiAgcmVmSHRtbEVsZW1lbnQuZGVjb3JhdG9yKGUpO1xuXG4gIC8vRGVwbG95IGEgdHJhbnNwYXJlbnQgc2NyZWVuLlxuICAvLyBTaW5jZSBtb3VzZURvd24gaXMgcG9pbnRlZCB0byB0aGlzLmh0bWxFbGVtZW50Lm9ubW91c2Vkb3duIGluIHRoZSBDQmVhbiBjbGFzcyxcbiAgLy8gdGhpcyAndGhpcycgd2lsbCBpbmRpY2F0ZSB0aGlzLmh0bWxFbGVtZW50LlxuICAvL0luIG90aGVyIHdvcmRzLFxuICAvL2lmIHlvdSB3YW50IHRvIHJlZmVyICdDSWZGcmFtZScseW91IG5lZWQgdG8gc3BlY2lmeSAndGhpcy5wYXJlbnQuJ1xuICAvL1NlZSBDQmVhbkZyYW1lIGNsYXNzLCB5b3UgY2FuIGZpbmQgJ3RoaXMuaHRtbEVsZW1lbnQucGFyZW50ID0gdGhpcydcbiAgdmFyIHJlZkNJZkZyYW1lID0gcmVmSHRtbEVsZW1lbnQucGFyZW50O1xuXG5cbiAgdmFyIHJlZkNXaW5kb3dNYW5hZ2VyID0gcmVmSHRtbEVsZW1lbnQucGFyZW50Q2FudmFzO1xuXG4gIC8vV2hlbiBzb21ld2hlcmUgd2luZG93KENGcmFtZSxDSWZGcmFtZSkgZmlyZXMgJ21vdXNlRG93bicsXG4gIC8vIENsb3NlIGFsbCB0cmFuc3BhcmVuY3kgc2NyZWVucyBzbyB0aGF0IHRoZSBtb3VzZSBjdXJzb3IgY2FuIHBhc3Mgb3ZlciBhbnkgaUZyYW1lXG4gIGZvciAodmFyIHdpbmRvd0lkIGluIHJlZkNXaW5kb3dNYW5hZ2VyLmJlYW5MaXN0KSB7XG4gICAgdmFyIG9iakNJZkZyYW1lID0gcmVmQ1dpbmRvd01hbmFnZXIuYmVhbkxpc3Rbd2luZG93SWRdO1xuICAgIGlmICh3aW5kb3dJZCA9PSByZWZDSWZGcmFtZS5nZXRXaW5kb3dJZCgpKSB7XG4gICAgICAvL3NraXBcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqQ0lmRnJhbWUuaGFuZGxlUmVsZWFzaW5nRm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICByZWZDSWZGcmFtZS5oYW5kbGVUYWtpbmdGb2N1cygpO1xuXG59O1xuXG5DSWZGcmFtZS5wcm90b3R5cGUubW91c2VVcCA9IGZ1bmN0aW9uKGUpIHtcbiAgdmFyIHJlZkNJZkZyYW1lID0gdGhpcztcblxuXG4gIGlmIChyZWZDSWZGcmFtZS5vdmVycmF5VHJhbnNwYXJlbnRTY3JlZW5FbmFibGVkIHx8IHJlZkNJZkZyYW1lLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbk9uUmVzaXplKSB7XG4gICAgaWYgKHJlZkNJZkZyYW1lLnBhcmVudENhbnZhcy5vblRvcE9iamVjdCA9PSByZWZDSWZGcmFtZSkge1xuICAgICAgLy9NaW5pbWl6ZSB0aGUgd2luZG93IGF0IHRoZSBmcm9udC5cbiAgICAgIHJlZkNJZkZyYW1lLnRyYW5zcGFyZW5jZS5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgcmVmQ0lmRnJhbWUudHJhbnNwYXJlbmNlLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL1RoZSB3aW5kb3cgd2hpY2ggaXMgbm90IHRoZSBhdCB0aGUgZnJvbnQgZXhwYW5kcyB0aGUgc2NyZWVuIHNvIHRoYXQgaXQgY2FuIHJlc3BvbmQgdG8gY2xpY2tzLlxuXG4gICAgICBpZiAocmVmQ0lmRnJhbWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuRW5hYmxlZCkge1xuICAgICAgICByZWZDSWZGcmFtZS50cmFuc3BhcmVuY2Uuc3R5bGUud2lkdGggPSBwYXJzZUludChyZWZDSWZGcmFtZS5pZnJhbWUud2lkdGgpICsgJ3B4JztcbiAgICAgICAgcmVmQ0lmRnJhbWUudHJhbnNwYXJlbmNlLnN0eWxlLmhlaWdodCA9IHBhcnNlSW50KHJlZkNJZkZyYW1lLmlmcmFtZS5oZWlnaHQpICsgJ3B4JztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWZDSWZGcmFtZS5kZWNvcmF0b3IgPSBDRnJhbWUucHJvdG90eXBlLm1vdXNlVXA7XG4gIHJlZkNJZkZyYW1lLmRlY29yYXRvcihlKTtcblxuXG4gIC8vQ2FuY2VsIHNlbGVjdGluZyBcIkRvIG5vdCBzZWxlY3Qgd2hlbiBkcmFnZ2luZyBtb3VzZSB3aGlsZSByZWxlYXNpbmcgYnV0dG9uXCIgaXMgY2FuY2VsZWRcbiAgZG9jdW1lbnQuYm9keS5vbmRyYWcgPSBudWxsO1xuICBkb2N1bWVudC5ib2R5Lm9uc2VsZWN0c3RhcnQgPSBudWxsO1xuXG4gIC8vRGlzYWJsZSB3aGVuIHN0b3BwaW5nIG1vdmluZy4oRW5hYmxlIHRyYW5zcGFyZW50IHdpbmRvdyBvbmx5IHdoZW4gbW92aW5nLilcbiAgLy9UaGlzIHdpbGwgd29yayBzbW9vdGhseSBldmVuIHdpdGggaWZyYW1lIGNvbnRlbnRcbiAgcmVmQ0lmRnJhbWUudHJhbnNwYXJlbmNlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG59O1xuXG5DSWZGcmFtZS5wcm90b3R5cGUuc2V0TWluRnJhbWVTaXplID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5taW5GcmFtZVdpZHRoID0gd2lkdGg7XG4gIG1lLm1pbldpbmRvd0hlaWdodCA9IGhlaWdodDtcbn07XG5cbkNJZkZyYW1lLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbihkZWx0YUxlZnQsIGRlbHRhVG9wLCBkZWx0YVdpZHRoLCBkZWx0YUhlaWdodCwgYnlVc2VyKSB7XG5cblxuICB2YXIgcmVmQ0lmRnJhbWUgPSB0aGlzO1xuXG4gIGlmICghcmVmQ0lmRnJhbWUucmVzaXphYmxlICYmIGJ5VXNlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHByZXZTaXplID0gcmVmQ0lmRnJhbWUuZ2V0U2l6ZSgpO1xuXG5cbiAgLy9SZXNpemUgcHJvY2Vzc2luZyBzaG91bGQgYmUgb3ZlcnJpZGRlbiBkaXJlY3RseSByYXRoZXIgdGhhbiBhZG9wdGluZyBhIGRlY29yYXRvciBwYXR0ZXJuIGJlY2F1c2UgaXQgaGFzIGJldHRlciBwZXJmb3JtYW5jZS5cbiAgdmFyIHRtcExlZnQgPSBwYXJzZUludChyZWZDSWZGcmFtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCk7XG4gIHZhciB0bXBUb3AgPSBwYXJzZUludChyZWZDSWZGcmFtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKTtcbiAgdmFyIHRtcFdpZHRoID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUud2lkdGgsIDEwKTtcbiAgdmFyIHRtcEhlaWdodCA9IHBhcnNlSW50KHJlZkNJZkZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCwgMTApO1xuXG4gIC8vSW1wb3J0YW50IGxvZ2ljIHRvIGhhbmRsZSB0aGUgbWluaW11bSBvZiBXaW5kb3cgd2VsbFxuICBpZiAoYnlVc2VyICYmICh0bXBXaWR0aCArIGRlbHRhV2lkdGggPCByZWZDSWZGcmFtZS5taW5GcmFtZVdpZHRoICYgZGVsdGFXaWR0aCA8IDApKSB7XG4gICAgLy9NaW5pbXVtIGFkanVzdG1lbnQgb2Ygd2lkdGhcbiAgICByZWZDSWZGcmFtZS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCA9IHRtcFdpZHRoICsgJ3B4JztcbiAgICBkZWx0YVdpZHRoID0gMDtcbiAgfVxuXG4gIGlmIChieVVzZXIgJiYgKHRtcEhlaWdodCArIGRlbHRhSGVpZ2h0IDwgcmVmQ0lmRnJhbWUubWluV2luZG93SGVpZ2h0ICYgZGVsdGFIZWlnaHQgPCAwKSkge1xuICAgIC8vTWluaW11bSBhZGp1c3RtZW50IG9mIGhlaWdodFxuICAgIHJlZkNJZkZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRtcEhlaWdodCArICdweCc7XG4gICAgZGVsdGFIZWlnaHQgPSAwO1xuICB9XG4gIHJlZkNJZkZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSAodG1wTGVmdCArIGRlbHRhTGVmdCkgKyAncHgnO1xuICByZWZDSWZGcmFtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSAodG1wVG9wICsgZGVsdGFUb3ApICsgJ3B4JztcbiAgcmVmQ0lmRnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUud2lkdGggPSAodG1wV2lkdGggKyBkZWx0YVdpZHRoKSArICdweCc7XG4gIHJlZkNJZkZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9ICh0bXBIZWlnaHQgKyBkZWx0YUhlaWdodCkgKyAncHgnO1xuXG5cbiAgdmFyIHRtcENhbnZhc1dpZHRoID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGgsIDEwKTtcbiAgdmFyIHRtcENhbnZhc0hlaWdodCA9IHBhcnNlSW50KHJlZkNJZkZyYW1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmhlaWdodCwgMTApO1xuXG4gIC8vU2luY2UgY2FudmFzRWxlbWVudCBpcyBhICgwLCAwKSByZWxhdGl2ZSBjb29yZGluYXRlIHdpdGggcmVzcGVjdFxuICAvLyB0byB0aGUgcGFyZW50IGVsZW1lbnQsIGl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gY2hhbmdlIGxlZnQgYW5kIHRvcC5cbiAgcmVmQ0lmRnJhbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGggPSAodG1wQ2FudmFzV2lkdGggKyBkZWx0YVdpZHRoKSArICdweCc7XG4gIHJlZkNJZkZyYW1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmhlaWdodCA9ICh0bXBDYW52YXNIZWlnaHQgKyBkZWx0YUhlaWdodCkgKyAncHgnO1xuXG4gIC8vQ2hhbmdlIHRoZSBzaXplIG9mIHRoZSB0aXRsZSBiYXIuIFRpdGxlQWRqdXN0V2lkdGggZXRjLlxuICAvLyBUaGUgcmVhc29uIHdoeSB5b3UgZG8gbm90IGhhdmUgdG8gdXNlIHRpdGxlQWRqdXN0V2lkdGggaXNcbiAgLy8gYmVjYXVzZSB0aGVzZSBzY2FsaW5nIGFyZSBkb25lIHdpdGggZGlmZmVyZW5jZXMgKGRlbHRhWCwgZGVsdGFZKS5cbiAgLy9UaGVyZWZvcmUsIGlmIHlvdSBhZGp1c3Qgd2l0aCB0aGUgdGl0bGVBZGp1c3RXaWR0aFxuICAvLyBhcyB0aGUgaW5pdGlhbCB2YWx1ZSwgdGhlIG90aGVyIHdpbGwgc3RyZXRjaCByZWxhdGl2ZS5cbiAgcmVmQ0lmRnJhbWUudGl0bGVCYXIuc3R5bGUud2lkdGggPSAodG1wQ2FudmFzV2lkdGggLSByZWZDSWZGcmFtZS5pZkRlbHRhICsgZGVsdGFXaWR0aCArIDApICsgJ3B4JztcblxuICAvL0ltYWdlIHJlc2l6aW5nIGZvciBpZnJhbWUgdGhhdCBpcyB0aGUgY2hpbGQgZWxlbWVudCBvZiBjYW52YXNcbiAgcmVmQ0lmRnJhbWUuaWZyYW1lLndpZHRoID0gKHRtcENhbnZhc1dpZHRoIC0gcmVmQ0lmRnJhbWUuaWZEZWx0YSArIGRlbHRhV2lkdGggKyAwKSArICdweCc7XG4gIHJlZkNJZkZyYW1lLmlmcmFtZS5oZWlnaHQgPSAodG1wQ2FudmFzSGVpZ2h0IC0gcmVmQ0lmRnJhbWUuaWZEZWx0YSArIGRlbHRhSGVpZ2h0ICsgcmVmQ0lmRnJhbWUuZnJhbWVIZWlnaHRBZGp1c3QpICsgJ3B4JztcblxuICBpZiAocmVmQ0lmRnJhbWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuRW5hYmxlZCB8fCByZWZDSWZGcmFtZS5vdmVycmF5VHJhbnNwYXJlbnRTY3JlZW5PblJlc2l6ZSkge1xuICAgIC8vRGVwbG95IGEgdHJhbnNwYXJlbnQgc2NyZWVuLlxuICAgIHJlZkNJZkZyYW1lLnRyYW5zcGFyZW5jZS5zdHlsZS53aWR0aCA9IHBhcnNlSW50KHJlZkNJZkZyYW1lLmlmcmFtZS53aWR0aCkgKyAncHgnO1xuICAgIHJlZkNJZkZyYW1lLnRyYW5zcGFyZW5jZS5zdHlsZS5oZWlnaHQgPSBwYXJzZUludChyZWZDSWZGcmFtZS5pZnJhbWUuaGVpZ2h0KSArICdweCc7XG4gIH1cblxuICAvL21vdmUgZnJhbWVDb21wb25lbnQobGlrZSBjbG9zZUJ1dHRvbikgY29ycmVzcG9uZGluZyB0byBtb3Zpbmcgd2luZG93IGVkZ2UgZm9yIHJlc2l6ZVxuICBmb3IgKHZhciBmcmFtZUNvbXBvbmVudElkIGluIHJlZkNJZkZyYW1lLmZyYW1lQ29tcG9uZW50TWFwKSB7XG4gICAgdmFyIGZyYW1lQ29tcG9uZW50ID0gcmVmQ0lmRnJhbWUuZnJhbWVDb21wb25lbnRNYXBbZnJhbWVDb21wb25lbnRJZF07XG4gICAgLy91cGRhdGUgYWxpZ25tZW50IG9mIGZyYW1lQ29tcG9uZW50IGNvcnJlc3BvbmRpbmcgdG8gbW92aW5nIHdpbmRvdyBlZGdlIGZvciByZXNpemVcbiAgICBmcmFtZUNvbXBvbmVudC51cGRhdGVBbGlnbigpO1xuICB9XG5cblxuICBmb3IgKHZhciBiZWFuTmFtZSBpbiByZWZDSWZGcmFtZS5jYW52YXMuYmVhbkxpc3QpIHtcbiAgICB2YXIgdG1wQmVhbiA9IHJlZkNJZkZyYW1lLmNhbnZhcy5iZWFuTGlzdFtiZWFuTmFtZV07XG5cbiAgICBpZiAodG1wQmVhbi5odG1sRWxlbWVudC50eXBlTmFtZSA9PSAnY21hcmtlcndpbmRvdycpIHtcblxuICAgICAgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudXNhZ2UgPT0gJ1JEJykge1xuICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSAocGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5sZWZ0KSArIGRlbHRhV2lkdGgpICsgJ3B4JztcbiAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS50b3AgPSAocGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS50b3ApICsgZGVsdGFIZWlnaHQpICsgJ3B4JztcbiAgICAgIH0gZWxzZSBpZiAodG1wQmVhbi5odG1sRWxlbWVudC51c2FnZSA9PSAnREQnKSB7XG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUud2lkdGggPSAocGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS53aWR0aCkgKyBkZWx0YVdpZHRoKSArICdweCc7XG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gKHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wKSArIGRlbHRhSGVpZ2h0KSArICdweCc7XG4gICAgICB9IGVsc2UgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudXNhZ2UgPT0gJ1JSJykge1xuICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSAocGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5sZWZ0KSArIGRlbHRhV2lkdGgpICsgJ3B4JztcbiAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAocGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQpICsgZGVsdGFIZWlnaHQpICsgJ3B4JztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgY3JyU2l6ZSA9IHJlZkNJZkZyYW1lLmdldFNpemUoKTtcbiAgaWYgKHByZXZTaXplLndpZHRoICE9PSBjcnJTaXplLndpZHRoIHx8IHByZXZTaXplLmhlaWdodCAhPT0gY3JyU2l6ZS5oZWlnaHQpIHtcbiAgICByZWZDSWZGcmFtZS5ldmVudEVtaXR0ZXIuZW1pdCgncmVzaXplJywgcmVmQ0lmRnJhbWUuX2dldEN1cnJlbnRTaXplUG9zKCkpO1xuICB9XG5cblxufTsvL3Jlc2l6ZVxuXG5DSWZGcmFtZS5wcm90b3R5cGUuX2dldEN1cnJlbnRTaXplUG9zID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHZhciBjcnJTaXplID0gbWUuZ2V0U2l6ZSgpO1xuICB2YXIgY3JyUG9zID0gbWUuZ2V0UG9zaXRpb24oKTtcbiAgcmV0dXJuIHsgdGFyZ2V0OiBtZSwgcG9zOiBjcnJQb3MsIHNpemU6IGNyclNpemUgfTtcbn07XG5cbkNJZkZyYW1lLnByb3RvdHlwZS5yZXNpemVEaXJlY3QgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCBieVVzZXIpIHtcblxuICB2YXIgcmVmQ0lmRnJhbWUgPSB0aGlzO1xuXG5cbiAgaWYgKCFyZWZDSWZGcmFtZS5yZXNpemFibGUgJiYgYnlVc2VyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZWZDSWZGcmFtZS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgcmVmQ0lmRnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcblxuXG4gIHZhciB0bXBDYW52YXNXaWR0aCA9IHBhcnNlSW50KHJlZkNJZkZyYW1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLndpZHRoKTtcbiAgdmFyIHRtcENhbnZhc0hlaWdodCA9IHBhcnNlSW50KHJlZkNJZkZyYW1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmhlaWdodCk7XG5cbiAgLy9TaW5jZSBjYW52YXNFbGVtZW50IGlzIGEgKDAsIDApIHJlbGF0aXZlIGNvb3JkaW5hdGUgd2l0aCByZXNwZWN0XG4gIC8vIHRvIHRoZSBwYXJlbnQgZWxlbWVudCwgaXQgaXMgbm90IG5lY2Vzc2FyeSB0byBjaGFuZ2UgbGVmdCBhbmQgdG9wLlxuICByZWZDSWZGcmFtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgcmVmQ0lmRnJhbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gKGhlaWdodCAtIHJlZkNJZkZyYW1lLnRpdGxlQmFyLnN0eWxlLmhlaWdodCkgKyAncHgnO1xuXG4gIC8vQ2hhbmdlIHRoZSBzaXplIG9mIHRoZSB0aXRsZSBiYXIuIFRpdGxlQWRqdXN0V2lkdGggZXRjLlxuICAvLyBUaGUgcmVhc29uIHdoeSB5b3UgZG8gbm90IGhhdmUgdG8gdXNlIHRpdGxlQWRqdXN0V2lkdGggaXNcbiAgLy8gYmVjYXVzZSB0aGVzZSBzY2FsaW5nIGFyZSBkb25lIHdpdGggZGlmZmVyZW5jZXMgKGRlbHRhWCwgZGVsdGFZKS5cbiAgLy9UaGVyZWZvcmUsIGlmIHlvdSBhZGp1c3Qgd2l0aCB0aGUgdGl0bGVBZGp1c3RXaWR0aFxuICAvLyBhcyB0aGUgaW5pdGlhbCB2YWx1ZSwgdGhlIG90aGVyIHdpbGwgc3RyZXRjaCByZWxhdGl2ZS5cbiAgcmVmQ0lmRnJhbWUudGl0bGVCYXIuc3R5bGUud2lkdGggPSAod2lkdGggLSByZWZDSWZGcmFtZS5pZkRlbHRhKSArICdweCc7XG5cbiAgLy9JbWFnZSByZXNpemluZyBmb3IgaWZyYW1lIHRoYXQgaXMgdGhlIGNoaWxkIGVsZW1lbnQgb2YgY2FudmFzXG4gIHJlZkNJZkZyYW1lLmlmcmFtZS53aWR0aCA9IHdpZHRoIC0gcmVmQ0lmRnJhbWUuaWZEZWx0YSArICdweCc7XG4gIHJlZkNJZkZyYW1lLmlmcmFtZS5oZWlnaHQgPSBoZWlnaHQgLSByZWZDSWZGcmFtZS5pZkRlbHRhICsgcmVmQ0lmRnJhbWUuZnJhbWVIZWlnaHRBZGp1c3QgKyAncHgnO1xuXG5cbiAgaWYgKHJlZkNJZkZyYW1lLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbkVuYWJsZWQgfHwgcmVmQ0lmRnJhbWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuT25SZXNpemUpIHtcbiAgICAvL0RlcGxveSBhIHRyYW5zcGFyZW50IHNjcmVlbi5cbiAgICByZWZDSWZGcmFtZS50cmFuc3BhcmVuY2Uuc3R5bGUud2lkdGggPSBwYXJzZUludChyZWZDSWZGcmFtZS5pZnJhbWUud2lkdGgpICsgJ3B4JztcbiAgICByZWZDSWZGcmFtZS50cmFuc3BhcmVuY2Uuc3R5bGUuaGVpZ2h0ID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuaWZyYW1lLmhlaWdodCkgKyAncHgnO1xuICB9XG5cbiAgLy9tb3ZlIGZyYW1lQ29tcG9uZW50KGxpa2UgY2xvc2VCdXR0b24pIGNvcnJlc3BvbmRpbmcgdG8gbW92aW5nIHdpbmRvdyBlZGdlIGZvciByZXNpemVcbiAgZm9yICh2YXIgZnJhbWVDb21wb25lbnRJZCBpbiByZWZDSWZGcmFtZS5mcmFtZUNvbXBvbmVudE1hcCkge1xuICAgIHZhciBmcmFtZUNvbXBvbmVudCA9IHJlZkNJZkZyYW1lLmZyYW1lQ29tcG9uZW50TWFwW2ZyYW1lQ29tcG9uZW50SWRdO1xuICAgIC8vdXBkYXRlIGFsaWdubWVudCBvZiBmcmFtZUNvbXBvbmVudCBjb3JyZXNwb25kaW5nIHRvIG1vdmluZyB3aW5kb3cgZWRnZSBmb3IgcmVzaXplXG4gICAgZnJhbWVDb21wb25lbnQudXBkYXRlQWxpZ24oKTtcbiAgfVxuXG5cbiAgZm9yICh2YXIgYmVhbk5hbWUgaW4gcmVmQ0lmRnJhbWUuY2FudmFzLmJlYW5MaXN0KSB7XG4gICAgdmFyIHRtcEJlYW4gPSByZWZDSWZGcmFtZS5jYW52YXMuYmVhbkxpc3RbYmVhbk5hbWVdO1xuXG4gICAgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudHlwZU5hbWUgPT0gJ2NtYXJrZXJ3aW5kb3cnKSB7XG5cbiAgICAgIGlmICh0bXBCZWFuLmh0bWxFbGVtZW50LnVzYWdlID09ICdSRCcpIHtcbiAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gd2lkdGggKyAncHgnOy8vIHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCkgKyBkZWx0YVdpZHRoICsgJ3B4JztcbiAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS50b3AgPSBoZWlnaHQgKyAncHgnOy8vcGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS50b3ApICsgZGVsdGFIZWlnaHQgKyAncHgnO1xuICAgICAgfSBlbHNlIGlmICh0bXBCZWFuLmh0bWxFbGVtZW50LnVzYWdlID09ICdERCcpIHtcbiAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS50b3AgPSBoZWlnaHQgKyAncHgnOy8vaGVpZ2h0cGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS50b3ApICsgZGVsdGFIZWlnaHQgKyAncHgnO1xuICAgICAgfSBlbHNlIGlmICh0bXBCZWFuLmh0bWxFbGVtZW50LnVzYWdlID09ICdSUicpIHtcbiAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gd2lkdGggKyAncHgnOy8vK3BhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCkgKyBkZWx0YVdpZHRoICsgJ3B4JztcbiAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTsvL3Jlc2l6ZVxuXG4vKipcbiAqIEZvY3VzIG9uIHRoaXMgZnJhbWVcbiAqL1xuQ0lmRnJhbWUucHJvdG90eXBlLnJlcXVlc3RGb2N1cyA9IGZ1bmN0aW9uKCkge1xuXG5cbiAgdmFyIG1lID0gdGhpcztcblxuICB2YXIgYmVhbkxpc3QgPSBtZS5wYXJlbnRDYW52YXMuYmVhbkxpc3Q7XG5cbiAgZm9yICh2YXIgd2luZG93SWQgaW4gYmVhbkxpc3QpIHtcblxuICAgIHZhciB0bXBJZldpbmRvdyA9IGJlYW5MaXN0W3dpbmRvd0lkXTtcblxuICAgIC8vSWYgaXQncyBteSBvd24gd2luZG93LCBtaW5pbWl6ZSB0aGUgdHJhbnNwYXJlbnQgc2NyZWVuIGFuZCBjaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSB0aXRsZSBiYXIuXG4gICAgaWYgKHdpbmRvd0lkID09IG1lLmdldFdpbmRvd0lkKCkpIHtcblxuICAgICAgLy9pZiB0aGlzIGZyYW1lIGlzIGEgdGFyZ2V0IGZyYW1lXG4gICAgICB0bXBJZldpbmRvdy5oYW5kbGVUYWtpbmdGb2N1cygpO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8vaWYgdGhpcyBmcmFtZSBpcyBOT1QgYSB0YXJnZXQgZnJhbWVcbiAgICAgIHRtcElmV2luZG93LmhhbmRsZVJlbGVhc2luZ0ZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgbWUucGFyZW50Q2FudmFzLnB1bGxVcChtZS5pZCk7XG5cbn07XG5cbi8qKlxuICogVVJMIGZvciBpZnJhbWVcbiAqIEBwYXJhbSB1cmxcbiAqL1xuQ0lmRnJhbWUucHJvdG90eXBlLnNldFVybCA9IGZ1bmN0aW9uKHVybCkge1xuXG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXG5cbiAgICBpZiAodXJsKSB7XG4gICAgICBtZS5zZXRVc2VJZnJhbWUodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lLnNldFVzZUlmcmFtZShmYWxzZSk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfVxuXG5cbiAgICBtZS5pZnJhbWUuc3JjID0gdXJsO1xuXG4gICAgbWUuaWZyYW1lLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGZ1bmNPbk1vdXNlTW92ZSA9IGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICB2YXIgY2xpZW50WCA9IGUucGFnZVg7XG4gICAgICAgIHZhciBjbGllbnRZID0gZS5wYWdlWTtcblxuICAgICAgICBpZiAoVE9VQ0hfRU5BQkxFRCkge1xuICAgICAgICAgIGlmIChlLnR5cGUgPT09ICd0b3VjaG1vdmUnKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlZFRvdWNoZXMgPSBlLmNoYW5nZWRUb3VjaGVzO1xuICAgICAgICAgICAgaWYgKFRPVUNIX01PVkVfT05MWV9XSVRIX09ORV9GSU5HRVIpIHtcbiAgICAgICAgICAgICAgdmFyIHRvdWNoZXMgPSBlLnRvdWNoZXM7XG4gICAgICAgICAgICAgIGlmICh0b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNsaWVudFggPSBjaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICBjbGllbnRZID0gY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNsaWVudFggPSBjaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgY2xpZW50WSA9IGNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgZnJhbWVMZWZ0ID0gbWUuZ2V0TGVmdCgpO1xuICAgICAgICB2YXIgZnJhbWVUb3AgPSBtZS5nZXRUb3AoKTtcbiAgICAgICAgdmFyIGV2ZW50RnJvbUlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuICAgICAgICAvLyBQcm9jZXNzaW5nIHRvIG1ha2UgaXQgbG9vayBsaWtlIG1vdXNlIG1vdmUgZXZlbiBpZiB5b3UgYXJlIG1vdmluZyBieSB0b3VjaFxuICAgICAgICBldmVudEZyb21JZnJhbWUuaW5pdE1vdXNlRXZlbnQoJ21vdXNlbW92ZScsIHRydWUsIGZhbHNlLCB3aW5kb3csIGUuZGV0YWlsLCBlLnNjcmVlblgsIGUuc2NyZWVuWSwgKGNsaWVudFggKyBmcmFtZUxlZnQpLCAoY2xpZW50WSArIGZyYW1lVG9wKSxcbiAgICAgICAgICBlLmN0cmxLZXksIGUuYWx0S2V5LCBlLnNoaWZ0S2V5LCBlLm1ldGFLZXksIGUuYnV0dG9uLCBudWxsKTtcblxuICAgICAgICAvL3Ntb290aCBkcmFnZ2luZyBkdXJpbmcgaWZyYW1lIG1vZGVcbiAgICAgICAgbWUucGFyZW50Q2FudmFzLndpbmRvd01vdXNlTW92ZShldmVudEZyb21JZnJhbWUpO1xuXG4gICAgICAgIGlmIChtZS5vbk1vdXNlTW92ZU9uSWZyYW1lKSB7XG4gICAgICAgICAgbWUub25Nb3VzZU1vdmVPbklmcmFtZShldmVudEZyb21JZnJhbWUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgbWUuaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQub25tb3VzZW1vdmUgPSBmdW5jT25Nb3VzZU1vdmU7XG4gICAgICBtZS5pZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5vbnRvdWNobW92ZSA9IGZ1bmNPbk1vdXNlTW92ZTtcblxuXG4gICAgICAvL21vdXNlIHVwXG4gICAgICB2YXIgZnVuY09uTW91c2VVcCA9IGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICB2YXIgY2xpZW50WCA9IGUucGFnZVg7XG4gICAgICAgIHZhciBjbGllbnRZID0gZS5wYWdlWTtcblxuICAgICAgICBpZiAoVE9VQ0hfRU5BQkxFRCkge1xuICAgICAgICAgIGlmIChlLnR5cGUgPT09ICd0b3VjaGVuZCcpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VkVG91Y2hlcyA9IGUuY2hhbmdlZFRvdWNoZXM7XG4gICAgICAgICAgICBjbGllbnRYID0gY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICBjbGllbnRZID0gY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBmcmFtZUxlZnQgPSBtZS5nZXRMZWZ0KCk7XG4gICAgICAgIHZhciBmcmFtZVRvcCA9IG1lLmdldFRvcCgpO1xuICAgICAgICB2YXIgZXZlbnRGcm9tSWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJyk7XG4gICAgICAgIC8vIFByb2Nlc3NpbmcgdG8gbWFrZSBpdCBsb29rIGxpa2UgbW91c2UgdXAgZXZlbiBpZiB5b3UgbW91c2V1cCBieSB0b3VjaFxuICAgICAgICBldmVudEZyb21JZnJhbWUuaW5pdE1vdXNlRXZlbnQoJ21vdXNldXAnLCB0cnVlLCBmYWxzZSwgd2luZG93LCBlLmRldGFpbCwgZS5zY3JlZW5YLCBlLnNjcmVlblksIChjbGllbnRYICsgZnJhbWVMZWZ0KSwgKGNsaWVudFkgKyBmcmFtZVRvcCksXG4gICAgICAgICAgZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5zaGlmdEtleSwgZS5tZXRhS2V5LCBlLmJ1dHRvbiwgbnVsbCk7XG5cbiAgICAgICAgLy9zbW9vdGggZHJhZ2dpbmcgZHVyaW5nIGlmcmFtZSBtb2RlXG4gICAgICAgIG1lLnBhcmVudENhbnZhcy53aW5kb3dNb3VzZVVwKGV2ZW50RnJvbUlmcmFtZSk7XG5cbiAgICAgICAgaWYgKG1lLm9uTW91c2VVcE9uSWZyYW1lKSB7XG4gICAgICAgICAgbWUub25Nb3VzZVVwT25JZnJhbWUoZXZlbnRGcm9tSWZyYW1lKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIG1lLmlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50Lm9ubW91c2V1cCA9IGZ1bmNPbk1vdXNlVXA7XG4gICAgICBtZS5pZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5vbnRvdWNoZW5kID0gZnVuY09uTW91c2VVcDtcblxuICAgICAgcmVzb2x2ZShtZSwgbWUuaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQpO1xuICAgIH07XG4gIH0pO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgRE9NLWRvY3VtZW50IG9mIGlmcmFtZVxuICogQHJldHVybnMgeyp8SFRNTERvY3VtZW50fVxuICovXG5DSWZGcmFtZS5wcm90b3R5cGUuZ2V0SWZEb2N1bWVudCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICByZXR1cm4gbWUuaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG59O1xuXG5cbkNJZkZyYW1lLnByb3RvdHlwZS5zZXRTY3JvbGxpbmcgPSBmdW5jdGlvbihzdHIpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUuaWZyYW1lLnNjcm9sbGluZyA9IHN0cjtcbn07XG5cbkNJZkZyYW1lLnByb3RvdHlwZS5nZXRTY3JvbGxpbmcgPSBmdW5jdGlvbihzdHIpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgcmV0dXJuIG1lLmlmcmFtZS5zY3JvbGxpbmc7XG59O1xuXG5cbkNJZkZyYW1lLnByb3RvdHlwZS5zZXRSZXNpemFibGUgPSBmdW5jdGlvbihlbmFibGVkKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIG1lLnJlc2l6YWJsZSA9IGVuYWJsZWQ7XG4gIG1lLmVuYWJsZU1hcmtlcnMoZW5hYmxlZCk7XG4gIHJldHVybiBtZTtcbn07XG5cblxuQ0lmRnJhbWUucHJvdG90eXBlLnNldENvbnRyb2wgPSBmdW5jdGlvbihtb2RlbCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIGlmIChtb2RlbCkge1xuICAgIG1vZGVsLmZyYW1lID0gbWU7XG4gICAgbWUuY29udHJvbCA9IG1lLmpzRnJhbWUuY3JlYXRlV2luZG93RXZlbnRIZWxwZXIobW9kZWwpO1xuICAgIG1lLmNvbnRyb2wuc2V0dXBEZWZhdWx0RXZlbnRzKCk7XG4gIH1cblxufTtcblxuLyoqXG4gKiBlbmQgb2YgQ0lGcmFtZSBjbGFzc1xuICovXG5cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuXG5cbmluaGVyaXQoQ1dpbmRvd01hbmFnZXIsIENDYW52YXMpO1xuXG4vKipcbiAqIENXaW5kb3dNYW5hZ2VyIGNsYXNzXG4gKiA8cD5cbiAqIEEgY2FudmFzIGNsYXNzIHRoYXQgZGlzcGxheXMgbXVsdGlwbGUgZnJhbWVzLiBIYW5kbGUgZXZlbnRzIG9uIHRoZSB3aW5kb3cgdG8gY29vcmRpbmF0ZSBtdWx0aXBsZSB3aW5kb3dzPGJyPlxuICpcbiAqIEBwYXJhbSBwYXJlbnRFbGVtZW50XG4gKiBAcGFyYW0gY2FudmFzSWRcbiAqIEBwYXJhbSBsZWZ0XG4gKiBAcGFyYW0gdG9wXG4gKiBAcGFyYW0gd2lkdGhcbiAqIEBwYXJhbSBoZWlnaHRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDV2luZG93TWFuYWdlcihwYXJlbnRFbGVtZW50LCBjYW52YXNJZCwgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0KSB7XG4gIENXaW5kb3dNYW5hZ2VyLnN1cGVyQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBwYXJlbnRFbGVtZW50LCBjYW52YXNJZCwgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0KTtcbiAgdmFyIG1lID0gdGhpcztcbiAgLy8gZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuICAgIGZvciAodmFyIHdpbmRvd0lkIGluIG1lLmJlYW5MaXN0KSB7XG4gICAgICB2YXIgYmVhbkZyYW1lID0gbWUuYmVhbkxpc3Rbd2luZG93SWRdO1xuICAgICAgYmVhbkZyYW1lLm9uQm9keUNsaWNrZWQoZXZ0KTtcbiAgICB9XG4gIH0pO1xuXG59XG5cbkNXaW5kb3dNYW5hZ2VyLnByb3RvdHlwZS5nZXRXaW5kb3cgPSBmdW5jdGlvbih3aW5kb3dJZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICByZXR1cm4gbWUuYmVhbkxpc3Rbd2luZG93SWRdO1xufTtcblxuLy9XcmFwcGluZyB0aGUgJ2FkZEJlYW4nIG9mIHRoZSBwYXJlbnQgY2xhc3NcbkNXaW5kb3dNYW5hZ2VyLnByb3RvdHlwZS5hZGRXaW5kb3cgPSBmdW5jdGlvbih3aW5kb3cpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICB2YXIgd2luZG93SWQgPSB3aW5kb3cuZ2V0V2luZG93SWQoKTtcbiAgdmFyIG5hbWUgPSB3aW5kb3cuZ2V0TmFtZSgpO1xuICBtZS5iZWFuSWROYW1lW3dpbmRvd0lkXSA9IG5hbWU7XG4gIG1lLmJlYW5OYW1lSWRbbmFtZV0gPSB3aW5kb3dJZDtcblxuICBtZS5hZGRCZWFuKHdpbmRvdyk7XG59O1xuXG4vL2lmIGNvbnRhaW5zIHdpbmRvdyBuYW1lZCBzcGVjaWZpZWQgbmFtZVxuQ1dpbmRvd01hbmFnZXIucHJvdG90eXBlLmNvbnRhaW5zV2luZG93TmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuXG4gIHZhciB3aW5kb3dJZCA9IG1lLmJlYW5OYW1lSWRbbmFtZV07XG5cbiAgaWYgKHdpbmRvd0lkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuQ1dpbmRvd01hbmFnZXIucHJvdG90eXBlLmdldFdpbmRvd0J5TmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgdmFyIHdpbmRvd0lkID0gbWUuYmVhbk5hbWVJZFtuYW1lXTtcblxuICBpZiAod2luZG93SWQpIHtcbiAgICByZXR1cm4gbWUuZ2V0V2luZG93KHdpbmRvd0lkKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuLy9XcmFwcGluZyB0aGUgJ21vdXNlTW92ZScgbWV0aG9kIG9mIHRoZSBwYXJlbnQgY2xhc3NcbkNXaW5kb3dNYW5hZ2VyLnByb3RvdHlwZS53aW5kb3dNb3VzZU1vdmUgPSBmdW5jdGlvbihlKSB7XG5cbiAgdmFyIG1lID0gdGhpcztcbiAgaWYgKG1lLmN1cnJlbnRPYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGNoaWxkV2luZG93TW92ZWQgPSBmYWxzZTtcblxuICAvL0xvb3AgcHJvY2Vzc2luZyBvZiBlYWNoIENXaW5kb3cgaGVsZCBieSBDV2luZG93TWFuYWdlclxuICB2YXIgYmVhbkxpc3QgPSBtZS5iZWFuTGlzdDtcblxuICBmb3IgKHZhciB3aW5kb3dJZCBpbiBiZWFuTGlzdCkge1xuXG4gICAgdmFyIHRhcmdldFdpbmRvdyA9IGJlYW5MaXN0W3dpbmRvd0lkXTtcblxuXG4gICAgLy9TaW5jZSB0aGlzICdtb3VzZU1vdmUnIGlzIGNhbnZhcyBvZiBDV2luZG93J3MgJ21vdXNlTW92ZScsc28gZG8gbW92ZSBDQmVhbkZyYW1lcyBpbiB0aGUgY2FudmFzLlxuICAgIHZhciBldmVudERhdGEgPSB0YXJnZXRXaW5kb3cuY2FudmFzLm1vdXNlTW92ZShlKTtcblxuICAgIC8vV2hldGhlciBhbnkgb25lIG9mIHRoZSBiZWFucyBpbiB0aGUgQ2FudmFzIGhhcyBtb3ZlZCBvciBub3QuXG4gICAgLy9ZZXMuKFdoZW4gaXQgbW92ZXMpLCBldmVudERhdGEgaXMgc2V0LlxuICAgIC8vTk8uIElmIGl0IGRvZXMgbm90IG1vdmUgaXQgaXMgc2V0IHRvIG51bGwuXG4gICAgY2hpbGRXaW5kb3dNb3ZlZCA9IGNoaWxkV2luZG93TW92ZWQgfCAoZXZlbnREYXRhICE9IG51bGwpO1xuICAgIGlmIChldmVudERhdGEgIT0gbnVsbCkge1xuXG4gICAgICAvL0lmIGl0IGlzIHRoZSBtYXJrZXIgZm9yIHJlc2l6aW5nXG4gICAgICBpZiAoZXZlbnREYXRhLnRhcmdldFR5cGVOYW1lID09ICdjbWFya2Vyd2luZG93Jykge1xuXG4gICAgICAgIHZhciB0YXJnZXRPYmplY3QgPSBldmVudERhdGEudGFyZ2V0T2JqZWN0O1xuXG4gICAgICAgIC8vRW5hYmxlIHRyYW5zcGFyZW50IHdpbmRvdyBvbmx5IHdoZW4gbW92aW5nLlxuICAgICAgICAvL1RoaXMgd2lsbCB3b3JrIHNtb290aGx5IGV2ZW4gd2l0aCBpZnJhbWUgY29udGVudFxuICAgICAgICB0YXJnZXRXaW5kb3cudHJhbnNwYXJlbmNlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG5cbiAgICAgICAgaWYgKHRhcmdldE9iamVjdC51c2FnZSA9PSAnUkQnKSB7XG4gICAgICAgICAgdGFyZ2V0V2luZG93LnJlc2l6ZSgwLCAwLCBldmVudERhdGEuZGVsdGFYLCBldmVudERhdGEuZGVsdGFZLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRPYmplY3QudXNhZ2UgPT0gJ0REJykge1xuICAgICAgICAgIHRhcmdldFdpbmRvdy5yZXNpemUoMCwgMCwgMCwgZXZlbnREYXRhLmRlbHRhWSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0T2JqZWN0LnVzYWdlID09ICdSUicpIHtcbiAgICAgICAgICB0YXJnZXRXaW5kb3cucmVzaXplKDAsIDAsIGV2ZW50RGF0YS5kZWx0YVgsIDAsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL0lmIGFueSBvbmUgb2YgdGhlIGJlYW5zIGluIHRoZSBDYW52YXMgaGFzIG1vdmVkLkRvIG5vdCBkbyAnQ3dpbmRvdydzIG1vdXNlTW92ZSdcbiAgaWYgKCFjaGlsZFdpbmRvd01vdmVkICYmIHRoaXMubW91c2VEb3duU291cmNlICE9ICdjaGlsZGNhbnZhcycpIHtcblxuICAgIC8vTW92aW5nIGxvZ2ljIGZvciBDV2luZG93IHdoaWNoIGlzIGhvbGRlZCBieSBDV2luZG93TWFuYWdlciBhcyBhIGNoaWxkIHdpbmRvdy5cbiAgICBtZS5tb3VzZU1vdmUoZSk7XG4gIH1cblxufTtcblxuLy9XcmFwcGluZyB0aGUgbWV0aG9kICdtb3VzZVVwJyBvZiB0aGUgcGFyZW50IGNsYXNzXG5DV2luZG93TWFuYWdlci5wcm90b3R5cGUud2luZG93TW91c2VVcCA9IGZ1bmN0aW9uKGUpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICAvL3J1biAnbW91c2VVcCcgb2YgcGFyZW50IGNsYXNzXG4gIG1lLm1vdXNlVXAoZSk7XG5cbiAgdmFyIGJlYW5MaXN0ID0gbWUuYmVhbkxpc3Q7XG5cbiAgZm9yICh2YXIgd2luZG93SWQgaW4gYmVhbkxpc3QpIHtcblxuICAgIHZhciBvYmpXaW5kb3cgPSBiZWFuTGlzdFt3aW5kb3dJZF07XG5cbiAgICAvL3J1biBDV2luZG93J3MgJ21vdXNlVXAnKGl0J3MgY2hpbGQgd2luZG93KS5cbiAgICBvYmpXaW5kb3cubW91c2VVcChlKTtcbiAgfVxuXG59O1xuXG4vKipcbiAqIChvdmVycmlkZSBDQ2FudmFzLnJlbW92ZUJlYW4pXG4gKiBAcGFyYW0gd2luZG93SWRcbiAqL1xuQ1dpbmRvd01hbmFnZXIucHJvdG90eXBlLnJlbW92ZUJlYW4gPSBmdW5jdGlvbih3aW5kb3dJZCkge1xuXG5cbiAgdmFyIG1lID0gdGhpcztcblxuICAvL1JldHJpZXZlIHRoZSB0YXJnZXQgYmVhbkZyYW1lXG4gIHZhciBiZWFuTGlzdCA9IG1lLmJlYW5MaXN0O1xuICB2YXIgdGFyZ2V0QmVhbiA9IGJlYW5MaXN0W3dpbmRvd0lkXTtcblxuICBpZiAodGFyZ2V0QmVhbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHJlbW92ZVRhcmdldEJlYW5IYXNGb2N1cyA9IHRhcmdldEJlYW4uX2hhc0ZvY3VzO1xuXG5cbiAgLy9SZW1vdmUgYmVhbidzIGh0bWxFbGVtZW50IGZyb20gY2FudmFzRWxlbWVudFxuICBtZS5jYW52YXNFbGVtZW50LnJlbW92ZUNoaWxkKHRhcmdldEJlYW4uaHRtbEVsZW1lbnQpO1xuXG4gIC8vRGVsZXRlIHRoZSBiZWFuIG9iamVjdCBpbiB0aGUgYXNzb2NpYXRpdmUgYXJyYXkuXG4gIGRlbGV0ZSBiZWFuTGlzdFt3aW5kb3dJZF07XG5cblxuICB2YXIgYmVhbk5hbWUgPSBtZS5iZWFuSWROYW1lW3dpbmRvd0lkXTtcbiAgaWYgKGJlYW5OYW1lKSB7XG4gICAgLy8taWYgYmVhbiBuYW1lIGV4aXN0XG4gICAgZGVsZXRlIG1lLmJlYW5JZE5hbWVbd2luZG93SWRdO1xuICAgIGRlbGV0ZSBtZS5iZWFuTmFtZUlkW2JlYW5OYW1lXTtcbiAgfVxuXG5cbiAgLy9mb2N1cyBvbiBsYXN0IGZvY3VzZWQgd2luZG93IGFmdGVyIHJlbW92aW5nXG4gIHZhciBtYXhGb2N1c1RpbWUgPSAwO1xuICB2YXIgbGFzdEZvY3VzZWRGcmFtZSA9IG51bGw7XG5cbiAgaWYgKHJlbW92ZVRhcmdldEJlYW5IYXNGb2N1cykge1xuICAgIGZvciAodmFyIHdpbmRvd0lkIGluIGJlYW5MaXN0KSB7XG4gICAgICB2YXIgZnJhbWUgPSBiZWFuTGlzdFt3aW5kb3dJZF07XG5cbiAgICAgIC8vcHVsbFVwRGlzYWJsZWQ9dHJ1ZSBtZWFucyB0aGF0IHRoZSBmcmFtZSBpcyBtb2RhbCBiYWNrZ3JvdW5kIHdpbmRvd1xuICAgICAgaWYgKG1heEZvY3VzVGltZSA8PSBmcmFtZS5faGFzRm9jdXNUaW1lICYmICFmcmFtZS5wdWxsVXBEaXNhYmxlZCkge1xuXG4gICAgICAgIG1heEZvY3VzVGltZSA9IGZyYW1lLl9oYXNGb2N1c1RpbWU7XG5cbiAgICAgICAgbGFzdEZvY3VzZWRGcmFtZSA9IGZyYW1lO1xuXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsYXN0Rm9jdXNlZEZyYW1lKSB7XG4gICAgICBsYXN0Rm9jdXNlZEZyYW1lLnJlcXVlc3RGb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHRhcmdldEJlYW4ucGFyZW50Q2FudmFzID0gbnVsbDtcblxufTtcbi8qKlxuICogZW5kIG9mIENXaW5kb3dNYW5hZ2VyIGNsYXNzXG4gKi9cblxuLy8rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstXG5cbmluaGVyaXQoQ01hcmtlcldpbmRvdywgQ0JlYW5GcmFtZSk7XG5cbi8qKlxuICogQ01hcmtlcldpbmRvdyBjbGFzc1xuICogQHBhcmFtIHdpbmRvd0lkXG4gKiBAcGFyYW0gbGVmdFxuICogQHBhcmFtIHRvcFxuICogQHBhcmFtIHdpZHRoXG4gKiBAcGFyYW0gaGVpZ2h0XG4gKiBAcGFyYW0gemluZGV4XG4gKiBAcGFyYW0gdXNhZ2VcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDTWFya2VyV2luZG93KHdpbmRvd0lkLCBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQsIHppbmRleCwgdXNhZ2UsIGNvbG9yKSB7XG5cbiAgdmFyIG1lID0gdGhpcztcblxuICBDTWFya2VyV2luZG93LnN1cGVyQ29uc3RydWN0b3IuY2FsbCh0aGlzLCB3aW5kb3dJZCwgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0LCB6aW5kZXgsIHVzYWdlKTtcblxuICBtZS5odG1sRWxlbWVudC50eXBlTmFtZSA9ICdjbWFya2Vyd2luZG93JztcbiAgbWUuaHRtbEVsZW1lbnQudXNhZ2UgPSB1c2FnZTtcbiAgbWUuaHRtbEVsZW1lbnQuaXNSYW5nZUxpbWl0ZWQgPSBmYWxzZTtcbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSAnbm9uZSc7XG4gIG1lLmh0bWxFbGVtZW50LnN0eWxlLnpJbmRleCA9IDE7XG4gIGlmIChjb2xvcikge1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcbiAgfVxuICAvL21lLnB1bGxVcERpc2FibGVkID0gdHJ1ZTtcblxuICBtZS5nZXRXaW5kb3dUeXBlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICdDTWFya2VyV2luZG93JztcbiAgfTtcbn1cblxuLyoqXG4gKiBFbmQgb2YgQ01hcmtlcldpbmRvdyBjbGFzc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuLy8rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstXG5cbi8qKlxuICogRnJhbWVNYW5hZ2VyIGNsYXNzXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSlNGcmFtZShtb2RlbCkge1xuXG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgdmFyIHBhcmVudEVsZW1lbnQgPSBudWxsO1xuXG4gIC8vIEZyYW1lcyB3aWxsIGJlIGZpeGVkKEZyYW1lcyBrZWVwIHN0YXlpbmcgaW4gdGhlIHNhbWUgcGxhY2UpIGV2ZW4gaWYgdGhlIHVzZXIgc2Nyb2xscyB0aGUgYnJvd3Nlci5cbiAgbWUuaXNXaW5kb3dNYW5hZ2VyRml4ZWQgPSB0cnVlOy8vZGVmYXVsdCBpcyB0cnVlLlxuXG4gIC8vSW5pdGlhbGl6YXRpb24gcGFyYW1ldGVyIGNoZWNrXG5cbiAgaWYgKG1vZGVsICYmIG1vZGVsLmZpeGVkID09IGZhbHNlKSB7XG4gICAgbWUuaXNXaW5kb3dNYW5hZ2VyRml4ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChtb2RlbCAmJiBtb2RlbC5wYXJlbnRFbGVtZW50KSB7XG4gICAgcGFyZW50RWxlbWVudCA9IG1vZGVsLnBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICBtZS5oQWxpZ24gPSAnbGVmdCc7XG4gIG1lLnZBbGlnbiA9ICd0b3AnO1xuXG4gIGlmIChtb2RlbCAmJiBtb2RlbC5ob3Jpem9udGFsQWxpZ24pIHtcbiAgICBtZS5oQWxpZ24gPSBtb2RlbC5ob3Jpem9udGFsQWxpZ247XG4gIH1cblxuICBpZiAobW9kZWwgJiYgbW9kZWwudmVydGljYWxBbGlnbikge1xuICAgIG1lLnZBbGlnbiA9IG1vZGVsLnZlcnRpY2FsQWxpZ247XG4gIH1cblxuICBtZS5wdWxsVG9SZWZyZXNoID0gZmFsc2U7XG4gIGlmIChtb2RlbCAmJiB0eXBlb2YgbW9kZWwucHVsbFRvUmVmcmVzaCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgbWUucHVsbFRvUmVmcmVzaCA9IG1vZGVsLnB1bGxUb1JlZnJlc2g7XG4gIH1cblxuICBtZS50b3VjaEFjdGlvbk1hbmlwdWxhdGlvbiA9IHRydWU7XG4gIGlmIChtb2RlbCAmJiB0eXBlb2YgbW9kZWwudG91Y2hBY3Rpb25NYW5pcHVsYXRpb24gPT09ICdib29sZWFuJykge1xuICAgIG1lLnRvdWNoQWN0aW9uTWFuaXB1bGF0aW9uID0gbW9kZWwudG91Y2hBY3Rpb25NYW5pcHVsYXRpb247XG4gIH1cblxuICBpZiAoIXBhcmVudEVsZW1lbnQpIHtcbiAgICBpZiAobWUuaXNXaW5kb3dNYW5hZ2VyRml4ZWQpIHtcbiAgICAgIHZhciB0b3BQYXJlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvcFBhcmVudERpdi5pZCA9ICdqc0ZyYW1lX2ZpeGVkXycgKyBtZS5nZW5lcmF0ZVVVSUQoKTtcbiAgICAgIHRvcFBhcmVudERpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJyxcbiAgICAgICAgJ3Bvc2l0aW9uOmZpeGVkOycgKyBtZS5oQWxpZ24gKyAnOjBweDsnICsgbWUudkFsaWduICsgJzowcHg7bWFyZ2luOjBweDtwYWRkaW5nOjBweDsnXG4gICAgICApO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b3BQYXJlbnREaXYpO1xuICAgICAgcGFyZW50RWxlbWVudCA9IHRvcFBhcmVudERpdjtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRvcFBhcmVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG9wUGFyZW50RGl2LmlkID0gJ2pzRnJhbWVfYWJzb2x1dGVfJyArIG1lLmdlbmVyYXRlVVVJRCgpO1xuICAgICAgdG9wUGFyZW50RGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLFxuICAgICAgICAncG9zaXRpb246YWJzb2x1dGU7JyArIG1lLmhBbGlnbiArICc6MHB4OycgKyBtZS52QWxpZ24gKyAnOjBweDttYXJnaW46MHB4O3BhZGRpbmc6MHB4OydcbiAgICAgICk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvcFBhcmVudERpdik7XG4gICAgICBwYXJlbnRFbGVtZW50ID0gdG9wUGFyZW50RGl2O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAobWUuaXNXaW5kb3dNYW5hZ2VyRml4ZWQpIHtcbiAgICAgIC8vcGFyZW50RWxlbWVudCBzZXRcbiAgICAgIHZhciB0b3BQYXJlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvcFBhcmVudERpdi5pZCA9ICdqc0ZyYW1lX2ZpeGVkXycgKyBtZS5nZW5lcmF0ZVVVSUQoKTtcbiAgICAgIHRvcFBhcmVudERpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJyxcbiAgICAgICAgJ3Bvc2l0aW9uOmZpeGVkOycgKyBtZS5oQWxpZ24gKyAnOjBweDsnICsgbWUudkFsaWduICsgJzowcHg7bWFyZ2luOjBweDtwYWRkaW5nOjBweDsnXG4gICAgICApO1xuICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0b3BQYXJlbnREaXYpO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIHZhciB0b3BQYXJlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvcFBhcmVudERpdi5pZCA9ICdqc0ZyYW1lX2Fic29sdXRlXycgKyBtZS5nZW5lcmF0ZVVVSUQoKTtcbiAgICAgIHRvcFBhcmVudERpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJyxcbiAgICAgICAgJ3Bvc2l0aW9uOmFic29sdXRlOycgKyBtZS5oQWxpZ24gKyAnOjBweDsnICsgbWUudkFsaWduICsgJzowcHg7bWFyZ2luOjBweDtwYWRkaW5nOjBweDsnXG4gICAgICApO1xuICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0b3BQYXJlbnREaXYpO1xuXG4gICAgfVxuICB9XG5cbiAgaWYgKE1PVVNFX0VOQUJMRUQpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlKTtcbiAgfVxuXG4gIGlmIChUT1VDSF9FTkFCTEVEKSB7XG4gICAgaWYgKCdvbnRvdWNoZW5kJyBpbiB3aW5kb3cpIHtcbiAgICAgIHZhciBmdW5jT25Ub3VjaEVuZCA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAvLyBUaGUgXCJtb3VzZXVwXCIgZXZlbnQgaGFwcGVucyByaWdodCBhZnRlciBcInRvdWNoZW5kXCIgZXZlbnQsXG4gICAgICAgIC8vIGJ1dCBJIGRvbid0IGNhbGwgI3ByZXZlbnRkZWZhdWx0IGJlY2F1c2UgI3ByZXZlbnRkZWZhdWx0IHByZXZlbnRzIFwib25jbGlja1wiLlxuICAgICAgICAvLyBTbywgcGVyZm9ybSAjcHJldmVudGRlZmF1bHQgb25seSBmb3IgXCJ0b3VjaG1vdmVcIlxuICAgICAgICAvLyBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbW91c2VVcC5iaW5kKHRoaXMpKGV2dCk7XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBmdW5jT25Ub3VjaEVuZCk7XG4gICAgfVxuXG4gICAgaWYgKCdvbnRvdWNobW92ZScgaW4gd2luZG93KSB7XG5cbiAgICAgIC8vIFRvIHJlbW92ZSB0aGUgMzAwbXMgdGFwIGRlbGF5IGJldHdlZW4gdG91Y2hlbmQgYW5kIGNsaWNrLFxuICAgICAgLy8gVG8gZGlzYWJsZSBkb3VibGUtdGFwIHRvIHpvb21cbiAgICAgIGlmIChtZS50b3VjaEFjdGlvbk1hbmlwdWxhdGlvbikge1xuICAgICAgICBtZS5kb0VuYWJsZVRvdWNoQWN0aW9uTWFuaXB1bGF0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghbWUucHVsbFRvUmVmcmVzaCkge1xuICAgICAgICAvLyBUaGUgQW5kcm9pZCB2ZXJzaW9uIG9mIENocm9tZSBoYXMgYSBmZWF0dXJlIHRoYXQgcmVmcmVzaGVzIHRoZSBwYWdlIGJ5IHNsaWRpbmcgZG93bndhcmRcbiAgICAgICAgLy8gd2hpbGUgdG91Y2hpbmcgb24gdGhlIHNjcmVlbiwgYnV0IHdoZW4gdGhpcyBmZWF0dXJlIGlzIGVuYWJsZWQsIHRoZSBkb3dud2FyZCBtb3ZlbWVudCBvZiB0aGUgd2luZG93IGlzIGluaGliaXRlZCxcbiAgICAgICAgLy8gc28gdGhpcyBmZWF0dXJlIGNhbiBiZSBleHBsaWNpdGx5IHR1cm5lZCBvZmYuXG4gICAgICAgIG1lLmRvRGlzYWJsZVB1bGxUb1JlZnJlc2goKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZ1bmNPblRvdWNoTW92ZSA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAvLyBDYWxsICNwcmV2ZW50RGVmYXVsdCB0byBwcmV2ZW50IHNpbXVsdGFuZW91cyBpZ25pdGlvbiBvZiBtb3VzZW1vdmVcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG1vdXNlTW92ZS5iaW5kKHRoaXMpKGV2dCk7XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZnVuY09uVG91Y2hNb3ZlKTtcbiAgICB9XG4gIH1cblxuXG4gIG1lLndpbmRvd01hbmFnZXIgPSBuZXcgQ1dpbmRvd01hbmFnZXIocGFyZW50RWxlbWVudCwgJ3dpbmRvd01hbmFnZXJfJyArIG1lLmdlbmVyYXRlVVVJRCgpLCAwLCAwLCAwLCAwKTtcbiAgLy9tZS53aW5kb3dNYW5hZ2VyID0gbmV3IENXaW5kb3dNYW5hZ2VyKGRvY3VtZW50LmJvZHksICd3aW5kb3dNYW5hZ2VyXycgKyBtZS5nZW5lcmF0ZVVVSUQoKSwgMCwgMCwgMCwgMCk7XG4gIG1lLmRvbVBhcnRzQnVpbGRlciA9IG51bGw7XG5cbiAgZnVuY3Rpb24gbW91c2VVcChlKSB7XG4gICAgbWUud2luZG93TWFuYWdlci53aW5kb3dNb3VzZVVwKGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gbW91c2VNb3ZlKGUpIHtcbiAgICBtZS53aW5kb3dNYW5hZ2VyLndpbmRvd01vdXNlTW92ZShlKTtcbiAgfVxufVxuXG5KU0ZyYW1lLnByb3RvdHlwZS5kb0VuYWJsZVRvdWNoQWN0aW9uTWFuaXB1bGF0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHZhciBib2R5U3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuICBpZiAoIWJvZHlTdHlsZSkge1xuICAgIGJvZHlTdHlsZSA9ICcnO1xuICB9IGVsc2Uge1xuICAgIGlmICghYm9keVN0eWxlLmVuZHNXaXRoKCc7JykpIHtcbiAgICAgIGJvZHlTdHlsZSArPSAnOyc7XG4gICAgfVxuICB9XG4gIGlmIChib2R5U3R5bGUuaW5kZXhPZigndG91Y2gtYWN0aW9uJykgPT09IC0xKSB7XG4gICAgYm9keVN0eWxlICs9ICctbXMtdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247dG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247JztcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIGJvZHlTdHlsZSk7XG4gIH1cbn07XG5cbkpTRnJhbWUucHJvdG90eXBlLmRvRGlzYWJsZVB1bGxUb1JlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgdmFyIGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuICBpZiAoIWJvZHlTdHlsZSkge1xuICAgIGJvZHlTdHlsZSA9ICcnO1xuICB9IGVsc2Uge1xuICAgIGlmICghYm9keVN0eWxlLmVuZHNXaXRoKCc7JykpIHtcbiAgICAgIGJvZHlTdHlsZSArPSAnOyc7XG4gICAgfVxuICB9XG4gIGlmIChib2R5U3R5bGUuaW5kZXhPZignb3ZlcnNjcm9sbC1iZWhhdmlvci15JykgPT09IC0xKSB7XG4gICAgYm9keVN0eWxlICs9ICdvdmVyc2Nyb2xsLWJlaGF2aW9yLXk6IGNvbnRhaW47JztcbiAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBib2R5U3R5bGUpO1xuICB9XG59O1xuSlNGcmFtZS5wcm90b3R5cGUuZ2V0RG9tUGFydHNCdWlsZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgaWYgKCFtZS5kb21QYXJ0c0J1aWxkZXIpIHtcbiAgICBtZS5kb21QYXJ0c0J1aWxkZXIgPSBuZXcgQ0RvbVBhcnRzQnVpbGRlcigpO1xuICB9XG4gIHJldHVybiBtZS5kb21QYXJ0c0J1aWxkZXI7XG59O1xuXG5KU0ZyYW1lLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbihtb2RlbCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciBwcm9wZXJ0aWVzID0ge307XG4gIHByb3BlcnRpZXMubmFtZSA9IG1vZGVsLm5hbWU7XG4gIHZhciB0aXRsZSA9IG1vZGVsLnRpdGxlO1xuICB2YXIgbGVmdCA9IG1vZGVsLmxlZnQ7XG4gIHZhciB0b3AgPSBtb2RlbC50b3A7XG4gIHZhciB3aWR0aCA9IG1vZGVsLndpZHRoO1xuICB2YXIgaGVpZ2h0ID0gbW9kZWwuaGVpZ2h0O1xuICB2YXIgYXBwZWFyYW5jZSA9IG1vZGVsLmFwcGVhcmFuY2U7XG4gIHZhciBwcmVzZXRXaW5kb3dOYW1lID0gbW9kZWwucHJlc2V0O1xuICB2YXIgcHJlc2V0V2luZG93UGFyYW0gPSBtb2RlbC5wcmVzZXRQYXJhbTtcbiAgdmFyIGFwcGVhcmFuY2VOYW1lID0gbW9kZWwuYXBwZWFyYW5jZU5hbWU7XG4gIHZhciBhcHBlYXJhbmNlUGFyYW0gPSBtb2RlbC5hcHBlYXJhbmNlUGFyYW07XG4gIHZhciBzdHlsZSA9IG1vZGVsLnN0eWxlO1xuXG4gIHZhciBtaW5XaWR0aCA9IG1vZGVsLm1pbldpZHRoO1xuICB2YXIgbWluSGVpZ2h0ID0gbW9kZWwubWluSGVpZ2h0O1xuXG5cbiAgdmFyIGh0bWwgPSBtb2RlbC5odG1sO1xuICB2YXIgcmVzaXphYmxlID0gbW9kZWwucmVzaXphYmxlO1xuICB2YXIgbW92YWJsZSA9IG1vZGVsLm1vdmFibGU7XG4gIHZhciB1cmwgPSBtb2RlbC51cmw7XG4gIHZhciB1cmxMb2FkZWQgPSBtb2RlbC51cmxMb2FkZWQ7XG5cbiAgdmFyIHByZXNldFBhcmFtID0gbW9kZWwucHJlc2V0UGFyYW07XG4gIHZhciBwcmVzZXRXaW5kb3c7XG5cbiAgaWYgKHByZXNldFdpbmRvd05hbWUpIHtcblxuICAgIHZhciBwcmVzZXRXaW5kb3dPYmogPSB0aGlzLmdldFByZXNldFdpbmRvdyhwcmVzZXRXaW5kb3dOYW1lKTtcbiAgICBwcmVzZXRXaW5kb3cgPSBwcmVzZXRXaW5kb3dPYmouZ2V0UHJlc2V0V2luZG93KHByZXNldFBhcmFtKTtcbiAgICBhcHBlYXJhbmNlID0gdGhpcy5jcmVhdGVQcmVzZXRTdHlsZShwcmVzZXRXaW5kb3cuYXBwZWFyYW5jZU5hbWUsXG4gICAgICB7IGFwcGVhcmFuY2VQYXJhbTogcHJlc2V0V2luZG93LmFwcGVhcmFuY2VQYXJhbSB9KTtcblxuICB9IGVsc2UgaWYgKGFwcGVhcmFuY2VOYW1lKSB7XG4gICAgYXBwZWFyYW5jZSA9IHRoaXMuY3JlYXRlUHJlc2V0U3R5bGUoYXBwZWFyYW5jZU5hbWUsXG4gICAgICB7IGFwcGVhcmFuY2VQYXJhbTogYXBwZWFyYW5jZVBhcmFtIH0pO1xuICB9XG5cbiAgaWYgKG1vZGVsLmNsaWVudEhlaWdodCkge1xuICAgIHZhciB3aW5kb3dUaXRsZUJhckhlaWdodCA9IHBhcnNlSW50KGFwcGVhcmFuY2UudGl0bGVCYXJIZWlnaHQgfHwgMCkgLSBhcHBlYXJhbmNlLmZyYW1lSGVpZ2h0QWRqdXN0O1xuICAgIGhlaWdodCA9IG1vZGVsLmNsaWVudEhlaWdodCArIHdpbmRvd1RpdGxlQmFySGVpZ2h0O1xuICB9XG5cblxuICB2YXIgZnJhbWUgPSB0aGlzLmNyZWF0ZUZyYW1lKGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCwgYXBwZWFyYW5jZSwgcHJvcGVydGllcyk7XG5cbiAgaWYgKHRpdGxlKSB7XG4gICAgZnJhbWUuc2V0VGl0bGUodGl0bGUpO1xuICB9XG5cbiAgaWYgKGh0bWwpIHtcbiAgICBmcmFtZS5zZXRIVE1MKGh0bWwpO1xuICB9XG4gIGlmICh1cmwpIHtcbiAgICB2YXIgdXJsUHJvbWlzZSA9IGZyYW1lLnNldFVybCh1cmwpO1xuICAgIGlmICh1cmxMb2FkZWQpIHtcbiAgICAgIHVybFByb21pc2UudGhlbih1cmxMb2FkZWQpO1xuICAgIH1cbiAgfVxuICBpZiAocmVzaXphYmxlID09IGZhbHNlKSB7XG4gICAgZnJhbWUuc2V0UmVzaXphYmxlKGZhbHNlKTtcbiAgfVxuICBpZiAobW92YWJsZSA9PSBmYWxzZSkge1xuICAgIGZyYW1lLnNldE1vdmFibGUoZmFsc2UpO1xuICB9XG5cbiAgaWYgKG1pbldpZHRoICYmIG1pbkhlaWdodCkge1xuICAgIGZyYW1lLm1pbkZyYW1lV2lkdGggPSBtaW5XaWR0aDtcbiAgfVxuICBpZiAobWluSGVpZ2h0KSB7XG4gICAgZnJhbWUubWluV2luZG93SGVpZ2h0ID0gbWluSGVpZ2h0O1xuXG4gICAgaWYgKG1vZGVsLmNsaWVudEhlaWdodCkge1xuICAgICAgZnJhbWUubWluV2luZG93SGVpZ2h0ID0gbWluSGVpZ2h0ICsgd2luZG93VGl0bGVCYXJIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgdmFyIGZyYW1lVmlldyA9IGZyYW1lLmdldEZyYW1lVmlldygpO1xuXG4gICAgZm9yICh2YXIgbmFtZSBpbiBzdHlsZSkge1xuICAgICAgaWYgKHN0eWxlLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGZyYW1lVmlldy5zdHlsZVtuYW1lXSA9IHN0eWxlW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChwcmVzZXRXaW5kb3cpIHtcbiAgICBwcmVzZXRXaW5kb3cuc2V0dXBQcmVzZXRXaW5kb3coZnJhbWUpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgd2luZG93XG4gKlxuICogQHJldHVybnMge0NJZkZyYW1lfVxuICovXG5KU0ZyYW1lLnByb3RvdHlwZS5jcmVhdGVGcmFtZSA9IGZ1bmN0aW9uKGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCwgYXBwZWFyYW5jZSwgcHJvcGVydGllcykge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIGlmICghYXBwZWFyYW5jZSkge1xuICAgIGFwcGVhcmFuY2UgPSBtZS5jcmVhdGVGcmFtZUFwcGVhcmFuY2UoKTtcbiAgfVxuXG5cbiAgYXBwZWFyYW5jZS5pbml0aWFsaXplKCk7XG5cbiAgdmFyIHdpbmRvd0lkID0gJ3dpbmRvd18nICsgbWUuZ2VuZXJhdGVVVUlEKCk7XG5cbiAgaWYgKCFsZWZ0KSB7XG4gICAgbGVmdCA9IDA7XG4gIH1cbiAgaWYgKCF0b3ApIHtcbiAgICB0b3AgPSAwO1xuICB9XG4gIGlmICghd2lkdGgpIHtcbiAgICB3aWR0aCA9IDEyODtcbiAgfVxuICBpZiAoIWhlaWdodCkge1xuICAgIGhlaWdodCA9IDEyODtcbiAgfVxuXG5cbiAgdmFyIGZyYW1lID0gbmV3IENJZkZyYW1lKHdpbmRvd0lkLCBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQsIGFwcGVhcmFuY2UpO1xuXG4gIC8vZXhwZXJpbWVudGFsXG4gIGZyYW1lLmpzRnJhbWUgPSBtZTtcblxuICBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLm5hbWUpIHtcbiAgICBmcmFtZS5zZXROYW1lKHByb3BlcnRpZXMubmFtZSk7XG4gIH1cbiAgZnJhbWUuaGlkZSgpO1xuXG4gIG1lLndpbmRvd01hbmFnZXIuYWRkV2luZG93KGZyYW1lKTtcblxuXG4gIC8vIGdldFRpdGxlQmFyU3R5bGUgaXMgZGVwcmVjYXRlZFxuICBpZiAoYXBwZWFyYW5jZS5nZXRUaXRsZUJhclN0eWxlKSB7XG5cbiAgICB2YXIgdGl0bGVCYXJTdHlsZSA9IGFwcGVhcmFuY2UuZ2V0VGl0bGVCYXJTdHlsZSgpO1xuICAgIGlmICh0aXRsZUJhclN0eWxlKSB7XG4gICAgICBmcmFtZS5zZXRUaXRsZUJhckNsYXNzTmFtZSh0aXRsZUJhclN0eWxlLnRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdCwgdGl0bGVCYXJTdHlsZS50aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChhcHBlYXJhbmNlLnRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdCAmJiBhcHBlYXJhbmNlLnRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZCkge1xuICAgIGZyYW1lLnNldFRpdGxlQmFyQ2xhc3NOYW1lKGFwcGVhcmFuY2UudGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0LCBhcHBlYXJhbmNlLnRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZCk7XG4gIH0gZWxzZSBpZiAoYXBwZWFyYW5jZS50aXRsZUJhckNsYXNzTmFtZURlZmF1bHQpIHtcbiAgICBmcmFtZS5zZXRUaXRsZUJhckNsYXNzTmFtZShhcHBlYXJhbmNlLnRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdCwgYXBwZWFyYW5jZS50aXRsZUJhckNsYXNzTmFtZURlZmF1bHQpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xuXG59O1xuXG5cbkpTRnJhbWUucHJvdG90eXBlLmNvbnRhaW5zV2luZG93TmFtZSA9IGZ1bmN0aW9uKHdpbmRvd05hbWUpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgcmV0dXJuIG1lLndpbmRvd01hbmFnZXIuY29udGFpbnNXaW5kb3dOYW1lKHdpbmRvd05hbWUpO1xufTtcblxuSlNGcmFtZS5wcm90b3R5cGUuZ2V0V2luZG93QnlOYW1lID0gZnVuY3Rpb24od2luZG93TmFtZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuICByZXR1cm4gbWUud2luZG93TWFuYWdlci5nZXRXaW5kb3dCeU5hbWUod2luZG93TmFtZSk7XG59O1xuXG5KU0ZyYW1lLnByb3RvdHlwZS5nZW5lcmF0ZVVVSUQgPSBmdW5jdGlvbigpIHtcblxuICB2YXIgdW5peFRpbWUgPSBEYXRlLm5vdygpO1xuXG4gIHZhciB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XG4gICAgdmFyIHIgPSAodW5peFRpbWUgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xuICAgIHVuaXhUaW1lID0gTWF0aC5mbG9vcih1bml4VGltZSAvIDE2KTtcbiAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KSkudG9TdHJpbmcoMTYpO1xuICB9KTtcbiAgcmV0dXJuIHV1aWQ7XG5cbn07XG5cbkpTRnJhbWUucHJvdG90eXBlLmNyZWF0ZUZyYW1lQXBwZWFyYW5jZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IENGcmFtZUFwcGVhcmFuY2UoKTtcbn07XG5cbkpTRnJhbWUucHJvdG90eXBlLmNyZWF0ZUFuaW1hdG9yID0gZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuIG5ldyBDU2ltcGxlTGF5b3V0QW5pbWF0b3IoKTtcbn07XG5cbi8qKlxuICogSGVscGVyIGNsYXNzIGZvciBtYXhpbWl6aW5nIGFuZCBtaW5pbWl6aW5nIHdpbmRvd3MoZnJhbWVzKSBhbmQgaGFuZGxpbmcgYW5pbWF0aW9ucyBhY2NvcmRpbmdseVxuICovXG5KU0ZyYW1lLnByb3RvdHlwZS5jcmVhdGVXaW5kb3dFdmVudEhlbHBlciA9IGZ1bmN0aW9uKG1vZGVsKSB7XG5cbiAgdmFyIG1lID0gdGhpcztcblxuICBpZiAoIW1vZGVsKSB7XG4gICAgbW9kZWwgPSB7fTtcbiAgfVxuXG4gIG1vZGVsLnZlcnRpY2FsQWxpZ24gPSBtZS52QWxpZ247XG4gIG1vZGVsLmhvcml6b250YWxBbGlnbiA9IG1lLmhBbGlnbjtcblxuICB2YXIgd25kRXZlbnRIZWxwZXIgPSBuZXcgV2luZG93RXZlbnRIZWxwZXIobW9kZWwpO1xuICByZXR1cm4gd25kRXZlbnRIZWxwZXI7XG59O1xuXG5KU0ZyYW1lLnByb3RvdHlwZS5nZXRQcmVzZXRXaW5kb3cgPSBmdW5jdGlvbihwcmVzZXROYW1lLCBwYXJhbSkge1xuXG4gIGlmIChwcmVzZXRXaW5kb3dzW3ByZXNldE5hbWVdKSB7XG4gICAgdmFyIHByZXNldE9iaiA9IHByZXNldFdpbmRvd3NbcHJlc2V0TmFtZV07XG4gICAgcmV0dXJuIHByZXNldE9iajtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuSlNGcmFtZS5wcm90b3R5cGUuY3JlYXRlUHJlc2V0U3R5bGUgPSBmdW5jdGlvbihwcmVzZXROYW1lLCBwYXJhbSkge1xuXG4gIHZhciBtZSA9IHRoaXM7XG4gIHZhciBhcHIgPSBtZS5jcmVhdGVGcmFtZUFwcGVhcmFuY2UoKTtcbiAgaWYgKHBhcmFtICYmIHBhcmFtLmZvY3VzZWRGcmFtZU9ubHkpIHtcbiAgICBhcHIuZm9jdXNlZEZyYW1lT25seSA9IHBhcmFtLmZvY3VzZWRGcmFtZU9ubHk7XG4gIH1cblxuICBpZiAocHJlc2V0U3R5bGVzW3ByZXNldE5hbWVdKSB7XG4gICAgdmFyIHN0eWxlT2JqID0gcHJlc2V0U3R5bGVzW3ByZXNldE5hbWVdO1xuICAgIHZhciBhcHBlYXJhbmNlUGFyYW0gPSBudWxsO1xuXG4gICAgaWYgKHBhcmFtICYmIHBhcmFtLmFwcGVhcmFuY2VQYXJhbSkge1xuICAgICAgYXBwZWFyYW5jZVBhcmFtID0gcGFyYW0uYXBwZWFyYW5jZVBhcmFtO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZU9iai5nZXRTdHlsZShhcHIsIGFwcGVhcmFuY2VQYXJhbSk7XG4gIH1cblxuICBjb25zb2xlLmVycm9yKCdbSlNGcmFtZV0gUHJlc2V0IGFwcGVhcmFuY2UgXCInICsgcHJlc2V0TmFtZSArICdcIiBub3QgZm91bmQuJyk7XG4gIHJldHVybiBhcHI7XG59O1xuXG5KU0ZyYW1lLnByb3RvdHlwZS5zaG93VG9hc3QgPSBmdW5jdGlvbihtb2RlbCkge1xuICBpZiAoIW1vZGVsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG1lID0gdGhpcztcbiAgdmFyIHRvYXN0SGVpZ2h0ID0gNjA7XG4gIHZhciB0b2FzdFdpZHRoID0gMjYwO1xuICB2YXIgb3BlbkNsb3NlRHVyYXRpb25NcyA9IDMwMDtcbiAgdmFyIHN0YXlEdXJhdGlvbk1zID0gMTAwMDtcbiAgdmFyIHN0YXJ0WSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDEwIC0gdG9hc3RIZWlnaHQgLyAyO1xuICB2YXIgZW5kWSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDIwIC0gdG9hc3RIZWlnaHQgLyAyO1xuICB2YXIgbXlIdG1sID0gJyc7XG4gIHZhciBzaG93QnV0dG9uID0gZmFsc2U7XG4gIHZhciBzdHlsZSA9IHtcbiAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwLjgpJyxcbiAgfTtcblxuICBpZiAobW9kZWwuc3R5bGUpIHtcbiAgICBzdHlsZSA9IG1vZGVsLnN0eWxlO1xuICB9XG4gIGlmIChtb2RlbC5oZWlnaHQpIHtcbiAgICB0b2FzdEhlaWdodCA9IG1vZGVsLmhlaWdodDtcbiAgfVxuICBpZiAobW9kZWwud2lkdGgpIHtcbiAgICB0b2FzdFdpZHRoID0gbW9kZWwud2lkdGg7XG4gIH1cbiAgaWYgKG1vZGVsLmR1cmF0aW9uKSB7XG4gICAgc3RheUR1cmF0aW9uTXMgPSBtb2RlbC5kdXJhdGlvbjtcbiAgfVxuICBpZiAobW9kZWwuYWxpZ24pIHtcblxuICAgIGlmIChtb2RlbC5hbGlnbiA9PSAndG9wJykge1xuICAgICAgc3RhcnRZID0gMTAgKyB0b2FzdEhlaWdodCAvIDI7XG4gICAgICBlbmRZID0gMjAgKyB0b2FzdEhlaWdodCAvIDI7XG4gICAgfSBlbHNlIGlmIChtb2RlbC5hbGlnbiA9PSAnY2VudGVyJykge1xuICAgICAgc3RhcnRZID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcbiAgICAgIGVuZFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL2JvdHRvbVxuICAgIH1cbiAgfVxuICBpZiAobW9kZWwuaHRtbCkge1xuICAgIG15SHRtbCA9IG1vZGVsLmh0bWw7XG4gIH1cbiAgaWYgKG1vZGVsLnRleHQpIHtcbiAgICBteUh0bWwgPSBtb2RlbC50ZXh0O1xuICB9XG4gIGlmIChtb2RlbC5jbG9zZUJ1dHRvbiA9PSB0cnVlKSB7XG4gICAgc2hvd0J1dHRvbiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc2hvd0J1dHRvbiA9IGZhbHNlO1xuICB9XG5cblxuICB2YXIgYXByID0gbWUuY3JlYXRlUHJlc2V0U3R5bGUoJ3RvYXN0Jyk7XG5cbiAgaWYgKHN0eWxlLmJvcmRlclJhZGl1cykge1xuICAgIGFwci5mcmFtZUJvcmRlclJhZGl1cyA9IHN0eWxlLmJvcmRlclJhZGl1cztcbiAgfVxuXG4gIGlmIChtb2RlbC5jbG9zZUJ1dHRvbkNvbG9yKSB7XG4gICAgYXByLmNhcHRpb25DbG9yID0gbW9kZWwuY2xvc2VCdXR0b25Db2xvcjtcblxuICB9XG5cblxuICB2YXIgZnJhbWUgPSBtZS5jcmVhdGUoe1xuICAgIG5hbWU6ICd0b2FzdF8nICsgbWUuZ2VuZXJhdGVVVUlEKCksXG4gICAgd2lkdGg6IHRvYXN0V2lkdGgsIGhlaWdodDogdG9hc3RIZWlnaHQsXG4gICAgbW92YWJsZTogZmFsc2UsXG4gICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICBhcHBlYXJhbmNlOiBhcHIsXG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIGh0bWw6ICc8ZGl2IGlkPVwibXlfZWxlbWVudFwiIHN0eWxlPVwiYm94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtwYWRkaW5nOjEwcHg7Zm9udC1zaXplOjE2cHg7Y29sb3I6ZGFya2dyYXk7aGVpZ2h0OicgKyAodG9hc3RIZWlnaHQpICsgJ3B4XCI+JyArXG4gICAgICBteUh0bWwgK1xuICAgICAgJzwvZGl2PidcbiAgfSk7XG5cblxuICBpZiAoc2hvd0J1dHRvbikge1xuICB9IGVsc2Uge1xuICAgIGZyYW1lLmhpZGVGcmFtZUNvbXBvbmVudCgnY2xvc2VCdXR0b24nKTtcbiAgfVxuXG4gIHZhciByZXF1ZXN0Rm9jdXNBZnRlckFuaW1hdGlvbiA9IGZhbHNlO1xuXG4gIHZhciBzdGFydFggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XG5cbiAgaWYgKG1lLmhBbGlnbiA9PSAncmlnaHQnKSB7XG4gICAgc3RhcnRYID0gLXN0YXJ0WDsvLyAtNTAwO1xuICB9XG5cbiAgaWYgKG1lLnZBbGlnbiA9PSAnYm90dG9tJykge1xuICAgIHN0YXJ0WSA9IHN0YXJ0WSAtIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBlbmRZID0gZW5kWSAtIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfVxuXG5cbiAgdmFyIGFuaW1hdG9yID0gbWUuY3JlYXRlQW5pbWF0b3IoKTtcbiAgYW5pbWF0b3Iuc2V0KGZyYW1lKVxuICAgIC5zZXREdXJhdGlvbihvcGVuQ2xvc2VEdXJhdGlvbk1zKVxuICAgIC5mcm9tUG9zaXRpb24oc3RhcnRYLCBzdGFydFksICdDRU5URVJfQ0VOVEVSJylcbiAgICAudG9Qb3NpdGlvbihzdGFydFgsIGVuZFksICdDRU5URVJfQ0VOVEVSJylcbiAgICAudG9BbHBoYSgxLjApXG4gICAgLmZyb21BbHBoYSgwLjApXG4gICAgLnN0YXJ0KDAsIHJlcXVlc3RGb2N1c0FmdGVyQW5pbWF0aW9uKVxuICAgIC50aGVuKGZ1bmN0aW9uKGFuaW1hdG9yT2JqKSB7XG4gICAgICByZXR1cm4gYW5pbWF0b3JPYmpcbiAgICAgICAgLnNldER1cmF0aW9uKG9wZW5DbG9zZUR1cmF0aW9uTXMpXG4gICAgICAgIC5mcm9tUG9zaXRpb24oc3RhcnRYLCBlbmRZLCAnQ0VOVEVSX0NFTlRFUicpXG4gICAgICAgIC50b1Bvc2l0aW9uKHN0YXJ0WCwgc3RhcnRZLCAnQ0VOVEVSX0NFTlRFUicpXG4gICAgICAgIC5mcm9tQWxwaGEoMS4wKVxuICAgICAgICAudG9BbHBoYSgwLjUpXG4gICAgICAgIC5zdGFydChzdGF5RHVyYXRpb25NcywgcmVxdWVzdEZvY3VzQWZ0ZXJBbmltYXRpb24pO1xuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24oYW5pbWF0b3JPYmopIHtcbiAgICAgIHZhciBfZnJhbWUgPSBhbmltYXRvck9iai5nZXQoKTtcbiAgICAgIF9mcmFtZS5jbG9zZUZyYW1lKCk7XG4gICAgfSk7XG5cbn07XG5cbi8qKlxuICogZW5kIG9mIEZyYW1lTWFuYWdlciBjbGFzc1xuICovXG5cblxuT2JqZWN0LmZyZWV6ZShERUYpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEpTRnJhbWU7XG4iLCJmdW5jdGlvbiBDVGV4dEJ1dHRvbkFwcGVhcmFuY2UoKSB7XG5cbiAgdmFyIGNyb3NzTWFyazAgPSAnXFx1Mjc0Yyc7XG5cbiAgdGhpcy5zaXplID0gMTQ7XG4gIHRoaXMud2lkdGggPSBudWxsO1xuICB0aGlzLmhlaWdodCA9IG51bGw7XG5cbiAgLy9ib3JkZXJcbiAgdGhpcy5ib3JkZXJSYWRpdXMgPSAyO1xuICB0aGlzLmJvcmRlcldpZHRoID0gMDtcbiAgdGhpcy5ib3JkZXJDb2xvckRlZmF1bHQgPSAnI2FhYWFhYSc7XG4gIHRoaXMuYm9yZGVyQ29sb3JGb2N1c2VkID0gdGhpcy5ib3JkZXJDb2xvckRlZmF1bHQ7XG4gIHRoaXMuYm9yZGVyQ29sb3JIb3ZlcmVkID0gbnVsbDtcbiAgdGhpcy5ib3JkZXJDb2xvclByZXNzZWQgPSB0aGlzLmJvcmRlckNvbG9yRGVmYXVsdDtcblxuICB0aGlzLmJvcmRlclN0eWxlRGVmYXVsdCA9ICdzb2xpZCc7XG4gIHRoaXMuYm9yZGVyU3R5bGVGb2N1c2VkID0gdGhpcy5ib3JkZXJTdHlsZURlZmF1bHQ7XG4gIHRoaXMuYm9yZGVyU3R5bGVIb3ZlcmVkID0gbnVsbDtcbiAgdGhpcy5ib3JkZXJTdHlsZVByZXNzZWQgPSB0aGlzLmJvcmRlclN0eWxlRGVmYXVsdDtcblxuICB0aGlzLmJhY2tncm91bmRCb3hTaGFkb3cgPSBudWxsO1xuXG5cbiAgLy9iYWNrZ3JvdW5kXG4gIHRoaXMuYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9ICd0cmFuc3BhcmVudCc7XG4gIHRoaXMuYmFja2dyb3VuZENvbG9yRm9jdXNlZCA9IHRoaXMuYmFja2dyb3VuZENvbG9yRGVmYXVsdDtcbiAgdGhpcy5iYWNrZ3JvdW5kQ29sb3JIb3ZlcmVkID0gbnVsbDtcbiAgdGhpcy5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0O1xuXG4gIC8vY2FwdGlvblxuICB0aGlzLmNhcHRpb24gPSBudWxsO1xuICB0aGlzLmNhcHRpb25Db2xvckRlZmF1bHQgPSAnd2hpdGUnO1xuICB0aGlzLmNhcHRpb25Db2xvckZvY3VzZWQgPSB0aGlzLmNhcHRpb25Db2xvckRlZmF1bHQ7XG4gIHRoaXMuY2FwdGlvbkNvbG9ySG92ZXJlZCA9IG51bGw7XG4gIHRoaXMuY2FwdGlvbkNvbG9yUHJlc3NlZCA9IHRoaXMuY2FwdGlvbkNvbG9yRGVmYXVsdDtcbiAgdGhpcy5jYXB0aW9uU2hpZnRZcHggPSAwO1xuICB0aGlzLmNhcHRpb25Gb250UmF0aW8gPSAxLjA7XG5cblxufVxubW9kdWxlLmV4cG9ydHMgPSBDVGV4dEJ1dHRvbkFwcGVhcmFuY2U7IiwiZnVuY3Rpb24gQ0NoaWxkTWVudUFwcGVhcmFuY2UobW9kZWwpIHtcbiAgdGhpcy5jaGlsZE1lbnVIVE1MID0gJyc7XG4gIHRoaXMuY2hpbGRNZW51V2lkdGggPSAwO1xuICB0aGlzLmNoaWxkTWVudUFsaWduID0gJ0xFRlQnOy8vIG9mZiBzZXQgcG9zaXRpb24gZnJvbSBwYXJlbnQgZnJhbWVDb21wb25lbnQgXCJMRUZUXCIgXCJSSUdIVFwiIFwiQ0VOVEVSXCJcbiAgdGhpcy55T2Zmc2V0ID0gMDtcbiAgdGhpcy54T2Zmc2V0ID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDQ2hpbGRNZW51QXBwZWFyYW5jZTsiLCJ2YXIgbWVyZ2VEZWVwbHkgPSByZXF1aXJlKCdtZXJnZS1kZWVwbHknKTtcbnZhciBDVGV4dEJ1dHRvbkFwcGVhcmFuY2UgPSByZXF1aXJlKCcuL0NCdXR0b25BcHBlYXJhbmNlLmpzJyk7XG52YXIgQ0ltYWdlQnV0dG9uQXBwZWFyYW5jZSA9IHJlcXVpcmUoJy4vQ0ltYWdlQnV0dG9uQXBwZWFyYW5jZS5qcycpO1xudmFyIENDaGlsZE1lbnVBcHBlYXJhbmNlID0gcmVxdWlyZSgnLi9DQ2hpbGRNZW51QXBwZWFyYW5jZS5qcycpO1xuXG4vKipcbiAqIENEb21QYXJ0c0J1aWxkZXIgY2xhc3NcbiAqIEVhc3kgdG8gYnVpbGQgYSBiZWF1dGlmdWwgb3IgdHlwaWNhbCBkb20gcGFydHMoaHRtbEVsZW1lbnQpXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ0RvbVBhcnRzQnVpbGRlcigpIHtcbn1cblxuQ0RvbVBhcnRzQnVpbGRlci5wcm90b3R5cGUuYnVpbGRDaGlsZE1lbnVBcHBlYXJhbmNlID0gZnVuY3Rpb24oZnJhbWVBcHBlYXJhbmNlKSB7XG4gIHJldHVybiBuZXcgQ0NoaWxkTWVudUFwcGVhcmFuY2UoZnJhbWVBcHBlYXJhbmNlKTtcbn07XG5DRG9tUGFydHNCdWlsZGVyLnByb3RvdHlwZS5idWlsZFRleHRCdXR0b25BcHBlYXJhbmNlID0gZnVuY3Rpb24oc3JjKSB7XG4gIGlmIChzcmMpIHtcbiAgICB2YXIgcmVzdWx0ID0gbWVyZ2VEZWVwbHkoeyBvcDogJ2Nsb25lJywgb2JqZWN0MTogc3JjLCBjb25jYXRBcnJheTogdHJ1ZSB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgQ1RleHRCdXR0b25BcHBlYXJhbmNlKCk7XG4gIH1cbn07XG5DRG9tUGFydHNCdWlsZGVyLnByb3RvdHlwZS5idWlsZEltYWdlQnV0dG9uQXBwZWFyYW5jZSA9IGZ1bmN0aW9uKHNyYykge1xuICBpZiAoc3JjKSB7XG4gICAgdmFyIGNsb25lZEltYWdlQnV0dG9uQXBwZWFyYW5jZSA9IG1lcmdlRGVlcGx5KHsgb3A6ICdjbG9uZScsIG9iamVjdDE6IHNyYyB9KTtcbiAgICByZXR1cm4gY2xvbmVkSW1hZ2VCdXR0b25BcHBlYXJhbmNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgQ0ltYWdlQnV0dG9uQXBwZWFyYW5jZSgpO1xuICB9XG59O1xuXG5DRG9tUGFydHNCdWlsZGVyLnByb3RvdHlwZS5idWlsZEJ1dHRvbiA9IGZ1bmN0aW9uKGJ0bkFwcGVhcmFuY2UpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgcmV0dXJuIG1lLmJ1aWxkVGV4dEJ1dHRvbihidG5BcHBlYXJhbmNlKTtcbn07XG5cbkNEb21QYXJ0c0J1aWxkZXIucHJvdG90eXBlLmFwcGVuZENoaWxkTWVudVRvID0gZnVuY3Rpb24oY2hpbGRNZW51QXBwZWFyYW5jZSwgcGFyZW50RWxlKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHZhciBuZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5kaXYuY2xhc3NMaXN0LmFkZCgnanNmcmFtZS1jaGlsZC1tZW51Jyk7XG4gIG5kaXYuaW5uZXJIVE1MID0gY2hpbGRNZW51QXBwZWFyYW5jZS5jaGlsZE1lbnVIVE1MO1xuICBuZGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgbmRpdi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICBuZGl2LnN0eWxlLndpZHRoID0gY2hpbGRNZW51QXBwZWFyYW5jZS5jaGlsZE1lbnVXaWR0aCArICdweCc7XG4gIC8vIG5kaXYuc3R5bGUudG9wID0gY2hpbGRNZW51QXBwZWFyYW5jZS5jaGlsZE1lbnVUb3AgKyAncHgnO1xuICAvLyBuZGl2LnN0eWxlLmxlZnQgPSBjaGlsZE1lbnVBcHBlYXJhbmNlLmNoaWxkTWVudUxlZnQgKyAncHgnO1xuICBuZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgdmFyIHBvc1ggPSBjaGlsZE1lbnVBcHBlYXJhbmNlLnhPZmZzZXQ7XG4gIHZhciBwb3NZID0gcGFyc2VJbnQocGFyZW50RWxlLnN0eWxlLmhlaWdodCwgMTApICsgY2hpbGRNZW51QXBwZWFyYW5jZS55T2Zmc2V0ICsgMjtcblxuICBpZiAoY2hpbGRNZW51QXBwZWFyYW5jZS5jaGlsZE1lbnVBbGlnbiA9PT0gJ0xFRlQnKSB7XG4gICAgbmRpdi5zdHlsZS5sZWZ0ID0gcG9zWCArICdweCc7XG4gIH0gZWxzZSBpZiAoY2hpbGRNZW51QXBwZWFyYW5jZS5jaGlsZE1lbnVBbGlnbiA9PT0gJ1JJR0hUJykge1xuICAgIG5kaXYuc3R5bGUucmlnaHQgPSBwb3NYICsgJ3B4JztcbiAgfSBlbHNlIGlmIChjaGlsZE1lbnVBcHBlYXJhbmNlLmNoaWxkTWVudUFsaWduID09PSAnQ0VOVEVSJykge1xuICAgIHBvc1ggPSAtY2hpbGRNZW51QXBwZWFyYW5jZS5jaGlsZE1lbnVXaWR0aCAvIDIgKyBwYXJzZUludChwYXJlbnRFbGUuc3R5bGUuaGVpZ2h0LCAxMCkgLyAyO1xuICAgIG5kaXYuc3R5bGUubGVmdCA9IHBvc1ggKyAncHgnO1xuICB9XG4gIG5kaXYuc3R5bGUudG9wID0gcG9zWSArICdweCc7XG5cbiAgLy8gbmRpdi5zdHlsZS5wb2ludGVyRXZlbnRzIGlzIG5vbmUgdG8gYXZvaWQgcmVmZXJyaW5nIGNsaWNrcyB0byBleHRyYSBhcmVhcy5cbiAgLy8gQnV0IHdlIHdhbnQgaXRzIGNoaWxkcmVuIHRvIGJlIHJlc3BvbnNpdmUsIHNvIHdlIHNldCBwb2ludGVyRXZlbnRzIHRvIGF1dG9cbiAgbmRpdi5maXJzdENoaWxkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG5cbiAgcGFyZW50RWxlLmFwcGVuZENoaWxkKG5kaXYpO1xuICAvL3JldHVybiBuZGl2O1xufTtcblxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYWN0dWFsIERPTSBlbGVtZW50IGZyb20gdGhlIHNwZWNpZmllZCBhcHBlYXJhbmNlXG4gKiBAcGFyYW0gYnRuQXBwZWFyYW5jZVxuICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fVxuICovXG5DRG9tUGFydHNCdWlsZGVyLnByb3RvdHlwZS5idWlsZFRleHRCdXR0b24gPSBmdW5jdGlvbihidG5BcHBlYXJhbmNlKSB7XG5cbiAgdmFyIHNpemUgPSBidG5BcHBlYXJhbmNlLnNpemU7XG4gIHZhciB3aWR0aCA9IHNpemU7XG4gIHZhciBoZWlnaHQgPSBzaXplO1xuXG4gIGlmIChidG5BcHBlYXJhbmNlLndpZHRoICE9IG51bGwpIHtcbiAgICB3aWR0aCA9IGJ0bkFwcGVhcmFuY2Uud2lkdGg7XG4gIH1cblxuICBpZiAoYnRuQXBwZWFyYW5jZS5oZWlnaHQgIT0gbnVsbCkge1xuICAgIGhlaWdodCA9IGJ0bkFwcGVhcmFuY2UuaGVpZ2h0O1xuICB9XG5cblxuICB2YXIgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIC8vYm9yZGVyXG4gIHZhciBib3JkZXJXaWR0aCA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyV2lkdGg7XG4gIHZhciBib3JkZXJSYWRpdXMgPSBidG5BcHBlYXJhbmNlLmJvcmRlclJhZGl1cztcblxuICB2YXIgYm9yZGVyQ29sb3JEZWZhdWx0ID0gYnRuQXBwZWFyYW5jZS5ib3JkZXJDb2xvckRlZmF1bHQ7XG4gIHZhciBib3JkZXJDb2xvckZvY3VzZWQgPSBidG5BcHBlYXJhbmNlLmJvcmRlckNvbG9yRm9jdXNlZDtcbiAgdmFyIGJvcmRlckNvbG9ySG92ZXJlZCA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyQ29sb3JIb3ZlcmVkO1xuICB2YXIgYm9yZGVyQ29sb3JQcmVzc2VkID0gYnRuQXBwZWFyYW5jZS5ib3JkZXJDb2xvclByZXNzZWQ7XG5cbiAgdmFyIGJvcmRlclN0eWxlRGVmYXVsdCA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICB2YXIgYm9yZGVyU3R5bGVGb2N1c2VkID0gYnRuQXBwZWFyYW5jZS5ib3JkZXJTdHlsZUZvY3VzZWQ7XG4gIHZhciBib3JkZXJTdHlsZUhvdmVyZWQgPSBidG5BcHBlYXJhbmNlLmJvcmRlclN0eWxlSG92ZXJlZDtcbiAgdmFyIGJvcmRlclN0eWxlUHJlc3NlZCA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyU3R5bGVQcmVzc2VkO1xuXG4gIC8vYmFja2dyb3VuZFxuICB2YXIgYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9IGJ0bkFwcGVhcmFuY2UuYmFja2dyb3VuZENvbG9yRGVmYXVsdDtcbiAgdmFyIGJhY2tncm91bmRDb2xvckZvY3VzZWQgPSBidG5BcHBlYXJhbmNlLmJhY2tncm91bmRDb2xvckZvY3VzZWQ7XG4gIHZhciBiYWNrZ3JvdW5kQ29sb3JIb3ZlcmVkID0gYnRuQXBwZWFyYW5jZS5iYWNrZ3JvdW5kQ29sb3JIb3ZlcmVkO1xuICB2YXIgYmFja2dyb3VuZENvbG9yUHJlc3NlZCA9IGJ0bkFwcGVhcmFuY2UuYmFja2dyb3VuZENvbG9yUHJlc3NlZDtcblxuICB2YXIgYmFja2dyb3VuZEJveFNoYWRvdyA9IGJ0bkFwcGVhcmFuY2UuYmFja2dyb3VuZEJveFNoYWRvdztcblxuICB2YXIgZmEgPSBidG5BcHBlYXJhbmNlLmZhO1xuXG4gIC8vY2FwdGlvblxuICB2YXIgY2FwdGlvbiA9IGJ0bkFwcGVhcmFuY2UuY2FwdGlvbjtcbiAgdmFyIGJ0bkltYWdlRGVmYXVsdCA9IGJ0bkFwcGVhcmFuY2UuaW1hZ2VEZWZhdWx0O1xuICB2YXIgYnRuSW1hZ2VGb2N1c2VkID0gYnRuQXBwZWFyYW5jZS5pbWFnZUZvY3VzZWQ7XG4gIHZhciBidG5JbWFnZUhvdmVyZWQgPSBidG5BcHBlYXJhbmNlLmltYWdlSG92ZXJlZDtcbiAgdmFyIGJ0bkltYWdlUHJlc3NlZCA9IGJ0bkFwcGVhcmFuY2UuaW1hZ2VQcmVzc2VkO1xuXG4gIC8vcHJldmVudCB0byBjYXRjaCBtb3VzZSBldmVudHNcbiAgaWYgKGJ0bkltYWdlRGVmYXVsdCkge1xuICAgIGJ0bkltYWdlRGVmYXVsdC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICB9XG4gIGlmIChidG5JbWFnZUZvY3VzZWQpIHtcbiAgICBidG5JbWFnZUZvY3VzZWQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgfVxuICBpZiAoYnRuSW1hZ2VIb3ZlcmVkKSB7XG4gICAgYnRuSW1hZ2VIb3ZlcmVkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gIH1cbiAgaWYgKGJ0bkltYWdlUHJlc3NlZCkge1xuICAgIGJ0bkltYWdlUHJlc3NlZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICB9XG5cbiAgdmFyIF9jYXB0aW9uQ29sb3JEZWZhdWx0ID0gYnRuQXBwZWFyYW5jZS5jYXB0aW9uQ29sb3JEZWZhdWx0O1xuICB2YXIgY2FwdGlvbkNvbG9yRm9jdXNlZCA9IGJ0bkFwcGVhcmFuY2UuY2FwdGlvbkNvbG9yRm9jdXNlZDtcbiAgdmFyIGNhcHRpb25Db2xvckhvdmVyZWQgPSBidG5BcHBlYXJhbmNlLmNhcHRpb25Db2xvckhvdmVyZWQ7XG4gIHZhciBjYXB0aW9uQ29sb3JQcmVzc2VkID0gYnRuQXBwZWFyYW5jZS5jYXB0aW9uQ29sb3JQcmVzc2VkO1xuXG4gIHZhciBjYXB0aW9uU2hpZnRZcHggPSBidG5BcHBlYXJhbmNlLmNhcHRpb25TaGlmdFlweDtcbiAgdmFyIGNhcHRpb25Gb250UmF0aW8gPSBidG5BcHBlYXJhbmNlLmNhcHRpb25Gb250UmF0aW87XG5cbiAgLy9TZXQgd2hldGhlciBwYXJlbnQgZnJhbWUgaGFzIGZvY3VzIG9yIG5vdCBpbnRlcm5hbGx5XG4gIGRpdkVsZW1lbnQuX2hhc0ZyYW1lRm9jdXMgPSBmYWxzZTtcblxuICAvL1NldCB3aGV0aGVyIG1vdXNlIGlzIHByZXNzaW5nIG9yIG5vdCBpbnRlcm5hbGx5LlxuICBkaXZFbGVtZW50Ll9pc01vdXNlRG93biA9IGZhbHNlO1xuXG4gIGRpdkVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXG4gIGRpdkVsZW1lbnQuc3R5bGUudG9wID0gJzBweCc7XG4gIGRpdkVsZW1lbnQuc3R5bGUubGVmdCA9ICcwcHgnO1xuICBkaXZFbGVtZW50LnN0eWxlLndpZHRoID0gKHdpZHRoKSArICdweCc7XG4gIGRpdkVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gKGhlaWdodCkgKyAncHgnO1xuXG4gIGlmIChidG5BcHBlYXJhbmNlLmN1cnNvcikge1xuICAgIGRpdkVsZW1lbnQuc3R5bGUuY3Vyc29yID0gYnRuQXBwZWFyYW5jZS5jdXJzb3I7XG4gIH0gZWxzZSB7XG4gICAgZGl2RWxlbWVudC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gIH1cbiAgZGl2RWxlbWVudC5zdHlsZS5tYXJnaW4gPSAnMHB4JztcbiAgZGl2RWxlbWVudC5zdHlsZS5wYWRkaW5nID0gJzBweCc7XG4gIC8vYWRkZWQgZm9yIHByZXZlbnRpbmcgYm9vdHN0cmFwLmNzcyBwb2xsdXRpb25cbiAgZGl2RWxlbWVudC5zdHlsZS5ib3hTaXppbmcgPSAnY29udGVudC1ib3gnO1xuICBkaXZFbGVtZW50LnN0eWxlLmZvbnRGYW1pbHkgPSAnc2Fucy1zZXJpZic7XG5cbiAgZGl2RWxlbWVudC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgICBkaXZFbGVtZW50Ll9pc01vdXNlRG93biA9IHRydWU7XG4gICAgZGl2RWxlbWVudC5faGFuZGxlRm9jdXNEcmF3aW5nKCdvbm1vdXNlZG93bicpO1xuICB9O1xuXG4gIGRpdkVsZW1lbnQub25tb3VzZW91dCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBkaXZFbGVtZW50Ll9pc01vdXNlRG93biA9IGZhbHNlO1xuICAgIGRpdkVsZW1lbnQuX2hhbmRsZUZvY3VzRHJhd2luZygnb25tb3VzZW91dCcpO1xuICB9O1xuXG4gIGRpdkVsZW1lbnQub25tb3VzZW92ZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgZGl2RWxlbWVudC5faGFuZGxlSG92ZXJEcmF3aW5nKCk7XG4gIH07XG5cbiAgZGl2RWxlbWVudC5vbm1vdXNldXAgPSBmdW5jdGlvbihlKSB7XG4gICAgZGl2RWxlbWVudC5faXNNb3VzZURvd24gPSBmYWxzZTtcbiAgICBkaXZFbGVtZW50Ll9oYW5kbGVGb2N1c0RyYXdpbmcoJ29ubW91c2V1cCcpO1xuICB9O1xuXG5cbiAgLyoqXG4gICAqIFRoZSBwYXJlbnQgbm90aWZpZXMgdGhhdCB0aGUgcGFyZW50J3MgZnJhbWUgZ290IGZvY3VzXG4gICAqL1xuICBkaXZFbGVtZW50Ll9vblRha2VGb2N1cyA9IGZ1bmN0aW9uKCkge1xuICAgIGRpdkVsZW1lbnQuX2hhc0ZyYW1lRm9jdXMgPSB0cnVlO1xuICAgIGRpdkVsZW1lbnQuX2hhbmRsZUZvY3VzRHJhd2luZygnX29uVGFrZUZvY3VzJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoZSBwYXJlbnQgbm90aWZpZXMgdGhhdCB0aGUgcGFyZW50J3MgZnJhbWUgaGFzIGxvc3QgZm9jdXNcbiAgICovXG4gIGRpdkVsZW1lbnQuX29uUmVsZWFzZUZvY3VzID0gZnVuY3Rpb24oKSB7XG5cbiAgICBkaXZFbGVtZW50Ll9oYXNGcmFtZUZvY3VzID0gZmFsc2U7XG4gICAgZGl2RWxlbWVudC5faGFuZGxlRm9jdXNEcmF3aW5nKCdfb25SZWxlYXNlRm9jdXMnKTtcbiAgfTtcblxuICAvKipcbiAgICogIFRvIGhhbmRsZSAyeDIgbWF0cml4LlxuICAgKiAgKF9oYXNGcmFtZUZvY3VzIHRydWUvZmFsc2UgeCBfaXNNb3VzZURvd24gdHJ1ZS9mYWxzZSlcbiAgICovXG4gIGRpdkVsZW1lbnQuX2hhbmRsZUZvY3VzRHJhd2luZyA9IGZ1bmN0aW9uKGV2dE5hbWUpIHtcbiAgICBpZiAoZGl2RWxlbWVudC5faGFzRnJhbWVGb2N1cykge1xuICAgICAgLy9XaGVuIHRoaXMgZWxlbWVudCBoYXMgZm9jdXNcblxuICAgICAgaWYgKGRpdkVsZW1lbnQuX2lzTW91c2VEb3duKSB7XG4gICAgICAgIC8vYm9yZGVyXG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvclByZXNzZWQ7XG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSBib3JkZXJTdHlsZVByZXNzZWQ7XG5cbiAgICAgICAgLy9iYWNrZ3JvdW5kXG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yUHJlc3NlZDtcblxuICAgICAgICAvL2NhcHRpb25cbiAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5jb2xvciA9IGNhcHRpb25Db2xvclByZXNzZWQ7XG5cbiAgICAgICAgaWYgKGJ0bkltYWdlUHJlc3NlZCkge1xuICAgICAgICAgIC8vIGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgLy8gZGl2RWxlbWVudC5hcHBlbmRDaGlsZChidG5JbWFnZVByZXNzZWQpO1xuICAgICAgICAgIHVwZGF0ZUltYWdlKGJ0bkltYWdlUHJlc3NlZCwgZGl2RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vYm9yZGVyXG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvckZvY3VzZWQ7XG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSBib3JkZXJTdHlsZUZvY3VzZWQ7XG5cbiAgICAgICAgLy9iYWNrZ3JvdW5kXG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yRm9jdXNlZDtcblxuICAgICAgICAvL2NhcHRpb25cbiAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5jb2xvciA9IGNhcHRpb25Db2xvckZvY3VzZWQ7XG5cbiAgICAgICAgaWYgKGJ0bkltYWdlRm9jdXNlZCkge1xuICAgICAgICAgIC8vIGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgLy8gZGl2RWxlbWVudC5hcHBlbmRDaGlsZChidG5JbWFnZUZvY3VzZWQpO1xuICAgICAgICAgIHVwZGF0ZUltYWdlKGJ0bkltYWdlRm9jdXNlZCwgZGl2RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvL1doZW4gdGhpcyBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBmb2N1c1xuICAgICAgaWYgKGRpdkVsZW1lbnQuX2lzTW91c2VEb3duKSB7XG4gICAgICAgIC8vYm9yZGVyXG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvclByZXNzZWQ7XG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSBib3JkZXJTdHlsZVByZXNzZWQ7XG5cbiAgICAgICAgLy9iYWNrZ3JvdW5kXG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yUHJlc3NlZDtcblxuICAgICAgICAvL2NhcHRpb25cbiAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5jb2xvciA9IGNhcHRpb25Db2xvclByZXNzZWQ7XG5cbiAgICAgICAgaWYgKGJ0bkltYWdlUHJlc3NlZCkge1xuICAgICAgICAgIC8vIGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgLy8gZGl2RWxlbWVudC5hcHBlbmRDaGlsZChidG5JbWFnZVByZXNzZWQpO1xuICAgICAgICAgIHVwZGF0ZUltYWdlKGJ0bkltYWdlUHJlc3NlZCwgZGl2RWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICAvL2JvcmRlclxuICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gYm9yZGVyQ29sb3JEZWZhdWx0O1xuICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmJvcmRlclN0eWxlID0gYm9yZGVyU3R5bGVEZWZhdWx0O1xuXG4gICAgICAgIC8vYmFja2dyb3VuZFxuICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvckRlZmF1bHQ7XG5cbiAgICAgICAgLy9jYXB0aW9uXG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuY29sb3IgPSBfY2FwdGlvbkNvbG9yRGVmYXVsdDtcblxuICAgICAgICBpZiAoYnRuSW1hZ2VEZWZhdWx0KSB7XG4gICAgICAgICAgLy8gZGl2RWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAvLyBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGJ0bkltYWdlRGVmYXVsdCk7XG4gICAgICAgICAgdXBkYXRlSW1hZ2UoYnRuSW1hZ2VEZWZhdWx0LCBkaXZFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBkaXZFbGVtZW50Ll9oYW5kbGVIb3ZlckRyYXdpbmcgPSBmdW5jdGlvbigpIHtcblxuICAgIGlmIChkaXZFbGVtZW50Ll9oYXNGcmFtZUZvY3VzKSB7XG4gICAgICAvL1doZW4gdGhpcyBlbGVtZW50IGhhcyBmb2N1c1xuICAgIH0gZWxzZSB7XG4gICAgICAvL1doZW4gdGhpcyBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBmb2N1c1xuICAgIH1cbiAgICAvL2JvcmRlclxuICAgIGlmIChib3JkZXJDb2xvckhvdmVyZWQpIHtcbiAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvckhvdmVyZWQ7XG4gICAgfVxuICAgIGlmIChib3JkZXJTdHlsZUhvdmVyZWQpIHtcbiAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSBib3JkZXJTdHlsZUhvdmVyZWQ7XG4gICAgfVxuXG4gICAgLy9iYWNrZ3JvdW5kXG4gICAgaWYgKGJhY2tncm91bmRDb2xvckhvdmVyZWQpIHtcbiAgICAgIGRpdkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9ySG92ZXJlZDtcbiAgICB9XG5cbiAgICBpZiAoY2FwdGlvbkNvbG9ySG92ZXJlZCkge1xuICAgICAgLy9jYXB0aW9uXG4gICAgICBkaXZFbGVtZW50LnN0eWxlLmNvbG9yID0gY2FwdGlvbkNvbG9ySG92ZXJlZDtcbiAgICB9XG4gICAgaWYgKGJ0bkltYWdlSG92ZXJlZCkge1xuICAgICAgLy8gZGl2RWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgIC8vIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuSW1hZ2VIb3ZlcmVkKTtcbiAgICAgIHVwZGF0ZUltYWdlKGJ0bkltYWdlSG92ZXJlZCwgZGl2RWxlbWVudCk7XG4gICAgfVxuICB9O1xuICBkaXZFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnMHB4JztcblxuICBkaXZFbGVtZW50LnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICBkaXZFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gKGhlaWdodCAqIGNhcHRpb25Gb250UmF0aW8pICsgJ3B4JztcblxuICBkaXZFbGVtZW50LnN0eWxlLmxpbmVIZWlnaHQgPSAoaGVpZ2h0KSArICdweCc7XG5cbiAgZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9ICcxcHgnO1xuXG4gIGlmIChib3JkZXJXaWR0aCAhPSBudWxsKSB7XG4gICAgZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9IGJvcmRlcldpZHRoICsgJ3B4JztcbiAgfVxuXG4gIGlmIChiYWNrZ3JvdW5kQm94U2hhZG93ICE9IG51bGwpIHtcbiAgICBkaXZFbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IGJhY2tncm91bmRCb3hTaGFkb3c7XG4gIH1cblxuICBkaXZFbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9IChib3JkZXJSYWRpdXMgKyBwYXJzZUludChkaXZFbGVtZW50LnN0eWxlLmJvcmRlcldpZHRoKSkgKyAncHgnO1xuXG4gIHZhciBjaGlsZE1vZGUgPSB0cnVlO1xuXG4gIGlmIChjaGlsZE1vZGUgJiYgYnRuSW1hZ2VEZWZhdWx0KSB7XG4gICAgLy8gZGl2RWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAvLyBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGJ0bkltYWdlRGVmYXVsdCk7XG4gICAgdXBkYXRlSW1hZ2UoYnRuSW1hZ2VEZWZhdWx0LCBkaXZFbGVtZW50KTtcbiAgfSBlbHNlIGlmIChjaGlsZE1vZGUgJiYgY2FwdGlvbikge1xuXG4gICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgLy9zcGFuLnN0eWxlLnBvc2l0aW9uPSdhYnNvbHV0ZSc7XG4gICAgc3Bhbi5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBzcGFuLnN0eWxlLm1hcmdpblRvcCA9IGNhcHRpb25TaGlmdFlweCArICdweCc7XG4gICAgc3Bhbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgc3Bhbi5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICBzcGFuLnN0eWxlLmZvbnRGYW1pbHkgPSAnc2Fucy1zZXJpZic7XG4gICAgc3Bhbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXB0aW9uKSk7XG4gICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICB9IGVsc2UgaWYgKGNoaWxkTW9kZSAmJiBmYSkge1xuXG4gICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3Bhbi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIHNwYW4uc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgc3Bhbi5zdHlsZS5tYXJnaW5Ub3AgPSBjYXB0aW9uU2hpZnRZcHggKyAncHgnO1xuICAgIHNwYW4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIHNwYW4uc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgc3Bhbi5zdHlsZS5mb250RmFtaWx5ID0gJ3NhbnMtc2VyaWYnO1xuICAgIHNwYW4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiJyArIGZhICsgJ1wiPjwvaT4nO1xuICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIH0gZWxzZSBpZiAoIWNoaWxkTW9kZSAmJiBjYXB0aW9uKSB7XG4gICAgZGl2RWxlbWVudC5zdHlsZS5wYWRkaW5nVG9wID0gY2FwdGlvblNoaWZ0WXB4ICsgJ3B4JztcbiAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhcHRpb24pKTtcbiAgfVxuXG4gIGRpdkVsZW1lbnQuX2hhbmRsZUZvY3VzRHJhd2luZygpO1xuICByZXR1cm4gZGl2RWxlbWVudDtcblxufTtcblxuLy8gRG9uJ3QgdXNlIGlubmVySFRNTD0nJyBiZWNhdXNlIHRoZXJlIG1heSBiZSBhIGNoaWxkIGJlbG93IHRoaXMgJ2ltZycgZWxlbWVudC5cbi8vIEEgY2hpbGQgdGhhdCBtYXkgYmUgYSBjaGlsZCBpcyBhIGNoaWxkTWVudS5cbmZ1bmN0aW9uIHVwZGF0ZUltYWdlKGltYWdlLCBwYXJlbnRFbGVtZW50KSB7XG4gIHZhciBpbWdzID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKTtcbiAgaWYgKHBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIHBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGltYWdlLCBwYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICB9IGVsc2Uge1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW1ncy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpbWcgPSBpbWdzW2ldO1xuICAgIGlmIChpbWFnZSAhPT0gaW1nKSB7XG4gICAgICBwYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGltZyk7XG4gICAgfVxuICB9XG59XG5cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuXG5cbi8qKlxuICogZW5kIG9mIENEb21QYXJ0c0J1aWxkZXIgY2xhc3NcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBDRG9tUGFydHNCdWlsZGVyO1xuIiwidmFyIENEb21QYXJ0c0J1aWxkZXIgPSByZXF1aXJlKCcuL0NEb21QYXJ0c0J1aWxkZXIuanMnKTtcbnZhciBDRnJhbWVDb21wb25lbnQgPSByZXF1aXJlKCcuL0NGcmFtZUNvbXBvbmVudC5qcycpO1xuXG4vKipcbiAqIENGcmFtZUFwcGVhcmFuY2UgY2xhc3M8YnI+XG4gKiBBcHBlYXJhbmNlIE1vZGVsIENsYXNzIGZvciBGcmFtZVxuICpcbiAqL1xuZnVuY3Rpb24gQ0ZyYW1lQXBwZWFyYW5jZSgpIHtcblxuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHRoaXMuc2hvd1RpdGxlQmFyID0gdHJ1ZTtcbiAgdGhpcy5zaG93Q2xvc2VCdXR0b24gPSB0cnVlO1xuICB0aGlzLnRpdGxlQmFyQ2FwdGlvbiA9ICcnO1xuICB0aGlzLnRpdGxlQmFyQ2FwdGlvbkZvbnRTaXplID0gJzEycHgnO1xuICB0aGlzLnRpdGxlQmFyQ2FwdGlvbkZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gIHRoaXMudGl0bGVCYXJIZWlnaHQgPSAnMjRweCc7XG4gIHRoaXMudXNlSWZyYW1lID0gZmFsc2U7XG4gIHRoaXMudXNlRnJhbWUgPSB0cnVlO1xuXG4gIHRoaXMudGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0PW51bGw7XG4gIHRoaXMudGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkPW51bGw7XG5cbiAgdGhpcy5zZXRVc2VJRnJhbWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIG1lLnVzZUlmcmFtZSA9IHZhbHVlO1xuICAgIG1lLnVzZUZyYW1lID0gIXZhbHVlO1xuICAgIHJldHVybiBtZTtcbiAgfTtcblxuXG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gZnJvbSB0aGUgbGVmdCBzaWRlIG9mIHRoZSBjYXB0aW9uLiBJZiB0aGlzIHZhbHVlIGlzIG51bGwsIGNhcHRpb24gd2lsbCBiZSBjZW50ZXJlZC5cbiAgICovXG4gIHRoaXMudGl0bGVCYXJDYXB0aW9uTGVmdE1hcmdpbiA9ICc1cHgnO1xuXG4gIHRoaXMudGl0bGVCYXJDb2xvckRlZmF1bHQgPSBudWxsO1xuICB0aGlzLnRpdGxlQmFyQ29sb3JGb2N1c2VkID0gbnVsbDtcbiAgdGhpcy50aXRsZUJhckNhcHRpb25Db2xvckRlZmF1bHQgPSAnJztcbiAgdGhpcy50aXRsZUJhckNhcHRpb25Db2xvckZvY3VzZWQgPSAnJztcbiAgdGhpcy50aXRsZUJhckNhcHRpb25UZXh0U2hhZG93ID0gJzAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuNyknO1xuICB0aGlzLnRpdGxlQmFyQ2FwdGlvblRleHRBbGlnbiA9ICdjZW50ZXInO1xuXG4gIHRoaXMudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0ID0gJzFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMiknO1xuICB0aGlzLnRpdGxlQmFyQm9yZGVyQm90dG9tRm9jdXNlZCA9IG51bGw7XG5cbiAgdGhpcy5mcmFtZUJvcmRlclJhZGl1cyA9ICc2cHgnO1xuXG4gIHRoaXMuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQgPSAnMXB4JztcbiAgdGhpcy5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZCA9IHRoaXMuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQ7XG5cbiAgdGhpcy5mcmFtZUJvcmRlckNvbG9yRGVmYXVsdCA9ICdyZ2JhKDEsIDEsIDEsIDAuMiknO1xuICB0aGlzLmZyYW1lQm9yZGVyQ29sb3JGb2N1c2VkID0gdGhpcy5mcmFtZUJvcmRlckNvbG9yRGVmYXVsdDtcblxuICB0aGlzLmZyYW1lQm9yZGVyU3R5bGUgPSAnc29saWQnO1xuICB0aGlzLmZyYW1lQm94U2hhZG93ID0gJzJweCAzcHggMTZweCByZ2JhKDAsMCwwLC42KSc7XG4gIHRoaXMuZnJhbWVCYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXG4gIHRoaXMuX3BhcnRzQnVpbGRlciA9IG51bGw7XG5cbiAgdGhpcy5mcmFtZUNvbXBvbmVudHMgPSBbXTtcblxuICB0aGlzLmZyYW1lSGVpZ2h0QWRqdXN0ID0gMTtcblxuICB0aGlzLnJlc2l6ZUFyZWFXaWR0aCA9IDIwO1xuICB0aGlzLnJlc2l6ZUFyZWFIZWlnaHQgPSAyMDtcbiAgdGhpcy5yZXNpemVBcmVhT2Zmc2V0ID0gMDtcbiAgdGhpcy5yZXNpemVBcmVhVmlzaWJsZSA9IGZhbHNlO1xuXG4gIHRoaXMuZ2V0RnJhbWVJbm5lckJvcmRlclJhZGl1cyA9IGZ1bmN0aW9uKHJlZiwgaGFzRm9jdXMpIHtcblxuICAgIGlmICghcmVmKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKGhhc0ZvY3VzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmcmFtZUFwcGVhcmFuY2U6IG1lLFxuICAgICAgICBpbm5lckJvcmRlclJhZGl1czogKHBhcnNlSW50KHJlZi5mcmFtZUJvcmRlclJhZGl1cywgMTApIC0gcGFyc2VJbnQocmVmLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkLCAxMCkpICsgJ3B4J1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGZyYW1lQXBwZWFyYW5jZTogbWUsXG4gICAgICBpbm5lckJvcmRlclJhZGl1czogKHBhcnNlSW50KHJlZi5mcmFtZUJvcmRlclJhZGl1cywgMTApIC0gcGFyc2VJbnQocmVmLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0LCAxMCkpICsgJ3B4J1xuICAgIH07XG4gIH07XG5cblxuICB0aGlzLm9uSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgLy9BZGQgY2xvc2UgYnV0dG9uIGlmIG5lZWRlZFxuICAgIGlmIChtZS5zaG93Q2xvc2VCdXR0b24pIHtcbiAgICAgIHZhciBwYXJ0c0J1aWxkZXIgPSBtZS5nZXRQYXJ0c0J1aWxkZXIoKSxcbiAgICAgICAgY3Jvc3NNYXJrMCA9ICdcXHUyNzRjJyxcbiAgICAgICAgY3Jvc3NNYXJrMSA9ICdcXHUyNzE2JyxcbiAgICAgICAgY3Jvc3NNYXJrMiA9ICdcXHUyNzRlJztcblxuXG4gICAgICB2YXIgYnRuQXBwZWFyYW5jZSA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b25BcHBlYXJhbmNlKCk7XG5cbiAgICAgIGJ0bkFwcGVhcmFuY2Uuc2l6ZSA9IDE0O1xuICAgICAgYnRuQXBwZWFyYW5jZS5jYXB0aW9uU2hpZnRZcHggPSAwO1xuICAgICAgYnRuQXBwZWFyYW5jZS5jYXB0aW9uRm9udFJhdGlvID0gMS4wO1xuICAgICAgYnRuQXBwZWFyYW5jZS5ib3JkZXJSYWRpdXMgPSAyO1xuICAgICAgYnRuQXBwZWFyYW5jZS5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gJ3RyYW5zcGFyZW50JztcbiAgICAgIGJ0bkFwcGVhcmFuY2UuYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9ICd0cmFuc3BhcmVudCc7XG4gICAgICBidG5BcHBlYXJhbmNlLmNhcHRpb24gPSBjcm9zc01hcmsxO1xuXG4gICAgICBidG5BcHBlYXJhbmNlLmNhcHRpb25Db2xvckRlZmF1bHQgPSAnZ3JheSc7XG4gICAgICBidG5BcHBlYXJhbmNlLmNhcHRpb25Db2xvckZvY3VzZWQgPSAnZ3JheSc7XG4gICAgICBidG5BcHBlYXJhbmNlLmNhcHRpb25Db2xvckhvdmVyZWQgPSAnc2lsdmVyJztcbiAgICAgIGJ0bkFwcGVhcmFuY2UuY2FwdGlvbkNvbG9yUHJlc3NlZCA9ICdibGFjayc7XG5cbiAgICAgIGJ0bkFwcGVhcmFuY2UuYm9yZGVyV2lkdGggPSAwO1xuICAgICAgYnRuQXBwZWFyYW5jZS5ib3JkZXJDb2xvckRlZmF1bHQgPSAnI2FhYWFhYSc7XG4gICAgICBidG5BcHBlYXJhbmNlLmJvcmRlclN0eWxlID0gJ3NvbGlkJztcblxuICAgICAgdmFyIGNsb3NlQnRuRWxlID0gcGFydHNCdWlsZGVyLmJ1aWxkVGV4dEJ1dHRvbihidG5BcHBlYXJhbmNlKTtcbiAgICAgIHZhciBlbGVMZWZ0ID0gLTEwO1xuICAgICAgdmFyIGVsZVRvcCA9IC0xODtcbiAgICAgIHZhciBlbGVBbGlnbiA9ICdSSUdIVF9UT1AnO1xuXG4gICAgICAvL2Nsb3NlQnV0dG9uIGlzIGEgc3BlY2lhbCBuYW1lXG4gICAgICB2YXIgZnJhbWVDb21wb25lbnQgPSBtZS5hZGRGcmFtZUNvbXBvbmVudCgnY2xvc2VCdXR0b24nLCBjbG9zZUJ0bkVsZSwgZWxlTGVmdCwgZWxlVG9wLCBlbGVBbGlnbik7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMub25UaXRsZUJhclN0eWxlSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuXG4gIH07XG5cbn1cblxuXG5DRnJhbWVBcHBlYXJhbmNlLnByb3RvdHlwZS5nZXRQYXJ0c0J1aWxkZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgaWYgKG1lLl9wYXJ0c0J1aWxkZXIgPT09IG51bGwpIHtcbiAgICBtZS5fcGFydHNCdWlsZGVyID0gbmV3IENEb21QYXJ0c0J1aWxkZXIoKTtcbiAgfVxuICByZXR1cm4gbWUuX3BhcnRzQnVpbGRlcjtcbn07XG5DRnJhbWVBcHBlYXJhbmNlLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIG1lLm9uSW5pdGlhbGl6ZSgpO1xufTtcblxuLyoqXG4gKiAgQWRkIEZyYW1lQ29tcG9uZW50IGludG8gZnJhbWVcbiAqICBGcmFtZUNvbXBvbmVudCBpcyBhdHRhY2hlZCB0byBGcmFtZSBhbmQgaXQgbW92ZXMgd2l0aCBGcmFtZS5cbiAqXG4gKiBAcGFyYW0gaWRcbiAqIEBwYXJhbSBteURvbUVsZW1lbnQgRE9NIGVsZW1lbnQuXG4gKiBAcGFyYW0geCAgUmVsYXRpdmUgeCBjb29kaW5hdGUgZnJvbSB0aGUgc25hcCBwb3NpdGlvbiBzcGVjaWZpZWQgYnkgYWxpZ25tZW50XG4gKiBAcGFyYW0geSAgUmVsYXRpdmUgeSBjb29kaW5hdGUgZnJvbSB0aGUgc25hcCBwb3NpdGlvbiBzcGVjaWZpZWQgYnkgYWxpZ25tZW50XG4gKiBAcGFyYW0gYWxpZ24gJ0xFRlRfVE9QJyAnQ0VOVEVSX1RPUCcgJ1JJR0hUX1RPUCcgJ0xFRlRfQ0VOVEVSJyAnQ0VOVEVSX0NFTlRFUicgJ1JJR0hUX0NFTlRFUicgJ0xFRlRfQk9UVE9NJyAnQ0VOVEVSX0JPVFRPTScgJ1JJR0hUX0JPVFRPTSdcbiAqIEByZXR1cm5zIHtDRnJhbWVDb21wb25lbnR9XG4gKlxuICovXG5DRnJhbWVBcHBlYXJhbmNlLnByb3RvdHlwZS5hZGRGcmFtZUNvbXBvbmVudCA9IGZ1bmN0aW9uKGlkLCBteURvbUVsZW1lbnQsIHgsIHksIGFsaWduLCBleHRyYSkge1xuXG4gIC8vKGlkLCBmcmFtZSwgaHRtbEVsZW1lbnQsIHgsIHksIGFsaWduKVxuICB2YXIgZnJhbWVDb21wb25lbnQgPSBuZXcgQ0ZyYW1lQ29tcG9uZW50KGlkLCBteURvbUVsZW1lbnQsIHgsIHksIGFsaWduLCBleHRyYSk7XG5cbiAgaWYgKG15RG9tRWxlbWVudC5fb25UYWtlRm9jdXMgJiYgbXlEb21FbGVtZW50Ll9vblJlbGVhc2VGb2N1cykge1xuICAgIC8vaWYgdGhpcyBET00gZWxlbWVudCBoYXMgc3BlY2lhbCBtZXRob2QgZm9yIGZvY3VzXG4gICAgLy9zZXQgZm9jdXMgY2FsbGJhY2tcbiAgICBmcmFtZUNvbXBvbmVudC5zZXRGb2N1c0NhbGxiYWNrKG15RG9tRWxlbWVudC5fb25UYWtlRm9jdXMsIG15RG9tRWxlbWVudC5fb25SZWxlYXNlRm9jdXMpO1xuICB9XG5cbiAgdGhpcy5mcmFtZUNvbXBvbmVudHMucHVzaChmcmFtZUNvbXBvbmVudCk7XG5cbiAgcmV0dXJuIGZyYW1lQ29tcG9uZW50O1xufTtcblxuXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cblxuLyoqXG4gKiAgRW5kIG9mIENGcmFtZUFwcGVhcmFuY2UgY2xhc3NcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBDRnJhbWVBcHBlYXJhbmNlO1xuIiwiLyoqXG4gKiBDRnJhbWVDb21wb25lbnQgY2xhc3NcbiAqIDxwPlxuICogV3JhcHBlZCBET00gZWxlbWVudCBsaWtlICdkaXYnIHRvIGRpc3BsYXkgYWJvdmUgdGhlIGZyYW1lPGJyPlxuICpcbiAqIGV4LkFuIG9iamVjdCBzdWNoIGFzIGNsb3NlQnV0dG9uXG4gKlxuICogQHBhcmFtIGlkXG4gKiBAcGFyYW0gZnJhbWVcbiAqIEBwYXJhbSBodG1sRWxlbWVudCBET00tZWxlbWVudFxuICogQHBhcmFtIHggcmVsYXRpdmUgeC1wb3NpdGlvbiBpbiB0aGUgZnJhbWUgcmVzcGVjdCB0byBhbGlnblxuICogQHBhcmFtIHkgcmVsYXRpdmUgeS1wb3NpdGlvbiBpbiB0aGUgZnJhbWUgcmVzcGVjdCB0byBhbGlnblxuICogQHBhcmFtIGFsaWduIHJlbGF0aXZlIGFsaWdubWVudCBpbiB0aGUgZnJhbWVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDRnJhbWVDb21wb25lbnQoaWQsIGh0bWxFbGVtZW50LCB4LCB5LCBhbGlnbiwgZXh0cmEpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICBtZS5pZCA9IGlkO1xuICBtZS54ID0geDtcbiAgbWUueSA9IHk7XG4gIG1lLmZyYW1lID0gbnVsbDtcblxuICBtZS5fZm9jdXNUYWtpbmdDYWxsYWJjayA9IG51bGw7XG4gIG1lLl9mb2N1c1JlbGVhc2luZ0NhbGxhYmNrID0gbnVsbDtcblxuICBpZiAoYWxpZ24pIHtcbiAgICBtZS5mcmFtZUNvbXBvbmVudEFsaWduID0gYWxpZ247XG4gIH0gZWxzZSB7XG4gICAgbWUuZnJhbWVDb21wb25lbnRBbGlnbiA9IENBTElHTi5MRUZUX1RPUDtcbiAgfVxuICBtZS5odG1sRWxlbWVudCA9IGh0bWxFbGVtZW50O1xuICBtZS5odG1sRWxlbWVudC5zdHlsZS56SW5kZXggPSA1MDtcbiAgbWUuaHRtbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb21wb25lbnQtaWQnLCBpZCk7XG5cbiAgaWYgKGV4dHJhICYmIGV4dHJhLmNoaWxkTWVudSkge1xuICAgIG1lLmNoaWxkTWVudSA9IGV4dHJhLmNoaWxkTWVudTtcbiAgfSBlbHNlIGlmIChodG1sRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuanNmcmFtZS1jaGlsZC1tZW51JykpIHtcbiAgICBtZS5jaGlsZE1lbnUgPSBodG1sRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuanNmcmFtZS1jaGlsZC1tZW51Jyk7XG4gIH1cblxufVxuXG5DRnJhbWVDb21wb25lbnQucHJvdG90eXBlLnNldEZvY3VzQ2FsbGJhY2sgPSBmdW5jdGlvbihmb2N1c1Rha2luZ0NhbGxiYWNrLCBmb2N1c1JlbGVhc2luZ0NhbGxiYWNrKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIG1lLl9mb2N1c1Rha2luZ0NhbGxhYmNrID0gZm9jdXNUYWtpbmdDYWxsYmFjaztcbiAgbWUuX2ZvY3VzUmVsZWFzaW5nQ2FsbGFiY2sgPSBmb2N1c1JlbGVhc2luZ0NhbGxiYWNrO1xufTtcblxuLyoqXG4gKiBTZXQgcGFyZW50IGZyYW1lIG9mIHRoaXMgZnJhbWVDb21wb25lbnRcbiAqIEBwYXJhbSBmcmFtZVxuICovXG5DRnJhbWVDb21wb25lbnQucHJvdG90eXBlLnNldEZyYW1lID0gZnVuY3Rpb24oZnJhbWUpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICBtZS5mcmFtZSA9IGZyYW1lO1xuICBtZS5odG1sRWxlbWVudC5wYXJlbnRPYmplY3QgPSBmcmFtZTtcbiAgbWUudXBkYXRlQWxpZ24oKTtcbn07XG5cbi8qKlxuICogUGxhY2UgdGhlIEZyYW1lQ29tcG9uZW50IHJlbGF0aXZlIHRvIHRoZSBwYXJlbnQncyBmcmFtZS5cbiAqIFJlbG9jYXRlIHJlbGF0aXZlIHRvIHBhcmVudCBmcmFtZSB3aGVuIHdpbmRvdyByZXNpemUgZXZlbnQgb2NjdXJzXG4gKi9cbkNGcmFtZUNvbXBvbmVudC5wcm90b3R5cGUudXBkYXRlQWxpZ24gPSBmdW5jdGlvbigpIHtcblxuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciBmcmFtZUNvbXBvbmVudEFsaWduID0gbWUuZnJhbWVDb21wb25lbnRBbGlnbjtcblxuICB2YXIgZnJhbWUgPSBtZS5mcmFtZTtcbiAgdmFyIGVsZVN0eWxlID0gbWUuaHRtbEVsZW1lbnQuc3R5bGU7XG4gIGVsZVN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG5cbiAgdmFyIHggPSBtZS54O1xuICB2YXIgeSA9IG1lLnk7XG5cbiAgdmFyIGZyYW1lV2lkdGggPSBmcmFtZS5nZXRXaWR0aCgpO1xuICB2YXIgZnJhbWVIZWlnaHQgPSBmcmFtZS5nZXRIZWlnaHQoKTtcbiAgdmFyIGVsZVN0eWxlV2lkdGggPSBlbGVTdHlsZS53aWR0aDtcbiAgdmFyIGVsZVN0eWxlSGVpZ2h0ID0gZWxlU3R5bGUuaGVpZ2h0O1xuXG4gIGlmIChDQUxJR04uTEVGVF9UT1AgPT0gZnJhbWVDb21wb25lbnRBbGlnbikge1xuICAgIGVsZVN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICBlbGVTdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgfSBlbHNlIGlmIChDQUxJR04uSENFTlRFUl9UT1AgPT0gZnJhbWVDb21wb25lbnRBbGlnbikge1xuICAgIGVsZVN0eWxlLmxlZnQgPSAocGFyc2VJbnQoZnJhbWVXaWR0aCkgLyAyIC0gcGFyc2VJbnQoZWxlU3R5bGVXaWR0aCkgLyAyICsgeCkgKyAncHgnO1xuICAgIGVsZVN0eWxlLnRvcCA9IHkgKyAncHgnO1xuICB9IGVsc2UgaWYgKENBTElHTi5SSUdIVF9UT1AgPT0gZnJhbWVDb21wb25lbnRBbGlnbikge1xuICAgIGVsZVN0eWxlLmxlZnQgPSAocGFyc2VJbnQoZnJhbWVXaWR0aCkgLSBwYXJzZUludChlbGVTdHlsZVdpZHRoKSArIHgpICsgJ3B4JztcbiAgICBlbGVTdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgfSBlbHNlIGlmIChDQUxJR04uTEVGVF9WQ0VOVEVSID09IGZyYW1lQ29tcG9uZW50QWxpZ24pIHtcbiAgICBlbGVTdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgZWxlU3R5bGUudG9wID0gKHBhcnNlSW50KGZyYW1lSGVpZ2h0KSAvIDIgLSBwYXJzZUludChlbGVTdHlsZUhlaWdodCkgLyAyICsgeSkgKyAncHgnO1xuICB9IGVsc2UgaWYgKENBTElHTi5IQ0VOVEVSX1ZDRU5URVIgPT0gZnJhbWVDb21wb25lbnRBbGlnbikge1xuICAgIGVsZVN0eWxlLmxlZnQgPSAocGFyc2VJbnQoZnJhbWVXaWR0aCkgLyAyIC0gcGFyc2VJbnQoZWxlU3R5bGVXaWR0aCkgLyAyICsgeCkgKyAncHgnO1xuICAgIGVsZVN0eWxlLnRvcCA9IChwYXJzZUludChmcmFtZUhlaWdodCkgLyAyIC0gcGFyc2VJbnQoZWxlU3R5bGVIZWlnaHQpIC8gMiArIHkpICsgJ3B4JztcbiAgfSBlbHNlIGlmIChDQUxJR04uUklHSFRfVkNFTlRFUiA9PSBmcmFtZUNvbXBvbmVudEFsaWduKSB7XG4gICAgZWxlU3R5bGUubGVmdCA9IChwYXJzZUludChmcmFtZVdpZHRoKSAtIHBhcnNlSW50KGVsZVN0eWxlV2lkdGgpICsgeCkgKyAncHgnO1xuICAgIGVsZVN0eWxlLnRvcCA9IChwYXJzZUludChmcmFtZUhlaWdodCkgLyAyIC0gcGFyc2VJbnQoZWxlU3R5bGVIZWlnaHQpIC8gMiArIHkpICsgJ3B4JztcbiAgfSBlbHNlIGlmIChDQUxJR04uTEVGVF9CT1RUT00gPT0gZnJhbWVDb21wb25lbnRBbGlnbikge1xuICAgIGVsZVN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICBlbGVTdHlsZS50b3AgPSAocGFyc2VJbnQoZnJhbWVIZWlnaHQpIC0gcGFyc2VJbnQoZWxlU3R5bGVIZWlnaHQpICsgeSkgKyAncHgnO1xuICB9IGVsc2UgaWYgKENBTElHTi5IQ0VOVEVSX0JPVFRPTSA9PSBmcmFtZUNvbXBvbmVudEFsaWduKSB7XG4gICAgZWxlU3R5bGUubGVmdCA9IChwYXJzZUludChmcmFtZVdpZHRoKSAvIDIgLSBwYXJzZUludChlbGVTdHlsZVdpZHRoKSAvIDIgKyB4KSArICdweCc7XG4gICAgZWxlU3R5bGUudG9wID0gKHBhcnNlSW50KGZyYW1lSGVpZ2h0KSAtIHBhcnNlSW50KGVsZVN0eWxlSGVpZ2h0KSArIHkpICsgJ3B4JztcbiAgfSBlbHNlIGlmIChDQUxJR04uUklHSFRfQk9UVE9NID09IGZyYW1lQ29tcG9uZW50QWxpZ24pIHtcbiAgICBlbGVTdHlsZS5sZWZ0ID0gKHBhcnNlSW50KGZyYW1lV2lkdGgpIC0gcGFyc2VJbnQoZWxlU3R5bGVXaWR0aCkgKyB4KSArICdweCc7XG4gICAgZWxlU3R5bGUudG9wID0gKHBhcnNlSW50KGZyYW1lSGVpZ2h0KSAtIHBhcnNlSW50KGVsZVN0eWxlSGVpZ2h0KSArIHkpICsgJ3B4JztcbiAgfVxufTtcblxuQ0ZyYW1lQ29tcG9uZW50LnByb3RvdHlwZS5oYW5kbGVUYWtpbmdGb2N1cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBpZiAobWUuX2ZvY3VzVGFraW5nQ2FsbGFiY2spIHtcbiAgICBtZS5fZm9jdXNUYWtpbmdDYWxsYWJjaygpO1xuICB9XG59O1xuXG5DRnJhbWVDb21wb25lbnQucHJvdG90eXBlLmhhbmRsZVJlbGVhc2luZ0ZvY3VzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIGlmIChtZS5fZm9jdXNSZWxlYXNpbmdDYWxsYWJjaykge1xuICAgIG1lLl9mb2N1c1JlbGVhc2luZ0NhbGxhYmNrKCk7XG4gIH1cbn07XG5cbi8qKlxuICogZW5kIG9mIENGcmFtZUNvbXBvbmVudCBjbGFzc1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gQ0ZyYW1lQ29tcG9uZW50O1xuIiwidmFyIGluaGVyaXQgPSByZXF1aXJlKCcuLi91dGlscy9Jbmhlcml0LmpzJylcbnZhciBDVGV4dEJ1dHRvbkFwcGVhcmFuY2UgPSByZXF1aXJlKCcuL0NCdXR0b25BcHBlYXJhbmNlLmpzJyk7XG5cbmluaGVyaXQoQ0ltYWdlQnV0dG9uQXBwZWFyYW5jZSwgQ1RleHRCdXR0b25BcHBlYXJhbmNlKTtcblxuZnVuY3Rpb24gQ0ltYWdlQnV0dG9uQXBwZWFyYW5jZSgpIHtcblxuXG4gIHRoaXMuaW1hZ2VEZWZhdWx0ID0gbnVsbDtcbiAgdGhpcy5pbWFnZUhvdmVyZWQgPSBudWxsO1xuICB0aGlzLmltYWdlUHJlc3NlZCA9IG51bGw7XG4gIHRoaXMuaW1hZ2VGb2N1c2VkID0gbnVsbDtcblxuICB0aGlzLmltYWdlU3RvcmUgPSB7fTtcbn1cblxuQ0ltYWdlQnV0dG9uQXBwZWFyYW5jZS5wcm90b3R5cGUuX3NldEltYWdlID0gZnVuY3Rpb24oc3JjLCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgdmFyIHN0b3JlZEltZ0VsZSA9IG1lLmltYWdlU3RvcmVbc3JjXTtcblxuICBpZiAoc3RvcmVkSW1nRWxlKSB7XG4gICAgcmV0dXJuIHN0b3JlZEltZ0VsZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaW1nRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nRWxlLnNyYyA9IHNyYztcbiAgICBpZiAod2lkdGggJiYgaGVpZ2h0KSB7XG4gICAgICB2YXIgaW1nV2lkdGggPSB3aWR0aDtcbiAgICAgIHZhciBpbWdIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB2YXIgaW1nU3R5bGUgPSAnbWFyZ2luOjBweDtwYWRkaW5nOjBweDt3aWR0aDonICsgaW1nV2lkdGggKyAncHg7aGVpZ2h0OicgKyBpbWdIZWlnaHQgKyAncHgnO1xuICAgICAgaW1nRWxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBpbWdTdHlsZSk7XG4gICAgfVxuICAgIG1lLmltYWdlU3RvcmVbc3JjXSA9IGltZ0VsZTtcblxuICAgIHJldHVybiBpbWdFbGU7XG4gIH1cbn1cbkNJbWFnZUJ1dHRvbkFwcGVhcmFuY2UucHJvdG90eXBlLnNldFNyYyA9IGZ1bmN0aW9uKG1vZGVsKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIGlmIChtb2RlbC5kZWZhdWx0KSB7XG4gICAgbWUuaW1hZ2VEZWZhdWx0ID0gbWUuX3NldEltYWdlKG1vZGVsLmRlZmF1bHQsIG1vZGVsLndpZHRoLCBtb2RlbC5oZWlnaHQpO1xuICB9XG4gIGlmIChtb2RlbC5ob3ZlcmVkKSB7XG4gICAgbWUuaW1hZ2VIb3ZlcmVkID0gbWUuX3NldEltYWdlKG1vZGVsLmhvdmVyZWQsIG1vZGVsLndpZHRoLCBtb2RlbC5oZWlnaHQpO1xuICB9XG4gIGlmIChtb2RlbC5wcmVzc2VkKSB7XG4gICAgbWUuaW1hZ2VQcmVzc2VkID0gbWUuX3NldEltYWdlKG1vZGVsLnByZXNzZWQsIG1vZGVsLndpZHRoLCBtb2RlbC5oZWlnaHQpO1xuICB9XG4gIGlmIChtb2RlbC5mb2N1c2VkKSB7XG4gICAgbWUuaW1hZ2VGb2N1c2VkID0gbWUuX3NldEltYWdlKG1vZGVsLmZvY3VzZWQsIG1vZGVsLndpZHRoLCBtb2RlbC5oZWlnaHQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ0ltYWdlQnV0dG9uQXBwZWFyYW5jZTsiLCIvL2V4cG9ydCB7IGRlZmF1bHQgYXMgSlNGcmFtZSB9IGZyb20gJy4vSlNGcmFtZS5qcyc7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgSlNGcmFtZTogcmVxdWlyZSgnLi9KU0ZyYW1lJylcbn1cblxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1ByZXNldFN0eWxlTWF0ZXJpYWwuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJyZXF1aXJlKCcuL1ByZXNldFN0eWxlTWF0ZXJpYWwuY3NzJyk7XG52YXIgT2JqZWN0QXNzaWduZXIgPSByZXF1aXJlKCcuLi8uLi91dGlscy9PYmplY3RBc3NpZ25lci5qcycpO1xuXG5cbmZ1bmN0aW9uIGdldFN0eWxlKGZBcHIsIHVzZXJQYXJhbSkge1xuXG4gIHZhciBzcmNQYXJhbSA9IHtcbiAgICBib3JkZXI6IHtcbiAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgd2lkdGg6IDAsXG4gICAgICByYWRpdXM6IDYsXG5cbiAgICB9LFxuICAgIGNvbnRyb2w6IHtcbiAgICAgIG1heGltaXplV2l0aG91dFRpdGxlQmFyOiBmYWxzZSxcbiAgICAgIHJlc3RvcmVLZXk6ICdFc2NhcGUnLFxuICAgIH0sXG4gICAgdGl0bGVCYXI6IHtcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICAgIGxlZnRNYXJnaW46IDIwLFxuICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgIGJ1dHRvbldpZHRoOiAzNixcbiAgICAgIGJ1dHRvbkhlaWdodDogMTYsXG4gICAgICBidXR0b25Db2xvcjogJ3doaXRlJyxcbiAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZhOiAnZmFzIGZhLXRpbWVzJyxcbiAgICAgICAgICBuYW1lOiAnY2xvc2VCdXR0b24nLFxuICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZhOiAnZmFyIGZhLXdpbmRvdy1tYXhpbWl6ZScsXG4gICAgICAgICAgbmFtZTogJ21heGltaXplQnV0dG9uJyxcbiAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmYTogJ2ZhciBmYS13aW5kb3ctcmVzdG9yZScsXG4gICAgICAgICAgbmFtZTogJ3Jlc3RvcmVCdXR0b24nLFxuICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmYTogJ2ZhciBmYS13aW5kb3ctbWluaW1pemUnLFxuICAgICAgICAgIG5hbWU6ICdtaW5pbWl6ZUJ1dHRvbicsXG4gICAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmE6ICdmYXMgZmEtY2FyZXQtdXAnLFxuICAgICAgICAgIG5hbWU6ICdkZW1pbmltaXplQnV0dG9uJyxcbiAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgIF0sXG4gICAgICBidXR0b25zT25MZWZ0OiBbXSxcbiAgICB9LFxuXG5cbiAgfTtcblxuICB2YXIgcGFyYW0gPSBzcmNQYXJhbTtcblxuICBpZiAodXNlclBhcmFtKSB7XG4gICAgLy9wYXJhbT1PYmplY3QuYXNzaWduKHt9LHNyY1BhcmFtLCB1c2VyUGFyYW0pO1xuICAgIE9iamVjdEFzc2lnbmVyLm9iamVjdEFzc2lnbihzcmNQYXJhbSwgdXNlclBhcmFtKTtcblxuICB9XG5cblxuICBmQXByLnNob3dUaXRsZUJhciA9IHRydWU7XG4gIGZBcHIuc2hvd0Nsb3NlQnV0dG9uID0gdHJ1ZTtcblxuICBmQXByLnRpdGxlQmFyQ2FwdGlvbkZvbnRTaXplID0gcGFyYW0udGl0bGVCYXIuZm9udFNpemUgKyAncHgnOy8vJzEycHgnO1xuICBmQXByLnRpdGxlQmFyQ2FwdGlvbkZvbnRXZWlnaHQgPSAnbm9ybWFsJztcbiAgZkFwci50aXRsZUJhckNhcHRpb25MZWZ0TWFyZ2luID0gcGFyYW0udGl0bGVCYXIubGVmdE1hcmdpbiArICdweCc7XG4gIGZBcHIudGl0bGVCYXJDYXB0aW9uQ29sb3JEZWZhdWx0ID0gcGFyYW0udGl0bGVCYXIuY29sb3I7XG4gIGZBcHIudGl0bGVCYXJDYXB0aW9uQ29sb3JGb2N1c2VkID0gcGFyYW0udGl0bGVCYXIuY29sb3I7XG4gIGZBcHIudGl0bGVCYXJDYXB0aW9uVGV4dFNoYWRvdyA9IG51bGw7XG4gIGZBcHIudGl0bGVCYXJDYXB0aW9uVGV4dEFsaWduID0gJ2xlZnQnO1xuXG4gIGZBcHIudGl0bGVCYXJIZWlnaHQgPSBwYXJhbS50aXRsZUJhci5oZWlnaHQgKyAncHgnOy8vICc1MHB4JztcblxuICBmQXByLnRpdGxlQmFyQ29sb3JEZWZhdWx0ID0gcGFyYW0udGl0bGVCYXIuYmFja2dyb3VuZDtcbiAgZkFwci50aXRsZUJhckNvbG9yRm9jdXNlZCA9IHBhcmFtLnRpdGxlQmFyLmJhY2tncm91bmQ7XG5cbiAgZkFwci50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQgPSAnc29saWQgMHB4ICNhYWFhYWEnO1xuICBmQXByLnRpdGxlQmFyQm9yZGVyQm90dG9tRm9jdXNlZCA9ICdzb2xpZCAwcHggIzE4ODNkNyc7XG5cbiAgZkFwci5mcmFtZUJvcmRlclJhZGl1cyA9IHBhcmFtLmJvcmRlci5yYWRpdXMgKyAncHgnOy8vICc2cHgnO1xuXG4gIC8vYm9yZGVyIHdpZHRoXG4gIGZBcHIuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQgPSBwYXJhbS5ib3JkZXIud2lkdGggKyAncHgnO1xuICBmQXByLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkID0gcGFyYW0uYm9yZGVyLndpZHRoICsgJ3B4JztcblxuXG4gIC8vYm9yZGVyIGNvbG9yXG4gIGZBcHIuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQgPSBwYXJhbS5ib3JkZXIuY29sb3I7XG4gIGZBcHIuZnJhbWVCb3JkZXJDb2xvckZvY3VzZWQgPSBwYXJhbS5ib3JkZXIuY29sb3I7XG5cbiAgZkFwci5mcmFtZUJvcmRlclN0eWxlID0gJ3NvbGlkJztcblxuICAvL3dpbmRvdyBzaGFkb3dcbiAgZkFwci5mcmFtZUJveFNoYWRvdyA9IHBhcmFtLmJvcmRlci5zaGFkb3c7Ly8nMnB4IDJweCAxMHB4ICByZ2JhKDAsIDAsIDAsIDAuNSknO1xuXG4gIGZBcHIuZnJhbWVCYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXG4gIGZBcHIuZnJhbWVDb21wb25lbnRzID0gbmV3IEFycmF5KCk7XG5cbiAgZkFwci5mcmFtZUhlaWdodEFkanVzdCA9IDA7Ly9kZWZhdWx0IGlzIDFcblxuICBmQXByLmdldFRpdGxlQmFyU3R5bGUgPSBmdW5jdGlvbigpIHtcblxuICAgIGlmIChmQXByLmZvY3VzZWRGcmFtZU9ubHkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdDogJyAnLFxuICAgICAgICB0aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQ6ICcgJ1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0OiAnICcsXG4gICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZDogJyAnXG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICBmQXByLm9uSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgYWxpZ25CdXR0b25zKGZBcHIsIHBhcmFtLCBmYWxzZSk7XG4gICAgYWxpZ25CdXR0b25zKGZBcHIsIHBhcmFtLCB0cnVlKTtcblxuICB9O1xuXG4gIC8vXG5cbiAgcmV0dXJuIGZBcHI7XG59XG5cbmZ1bmN0aW9uIGFsaWduQnV0dG9ucyhmQXByLCBwYXJhbSwgZnJvbUxlZnQpIHtcbiAgdmFyIHBhcnRzQnVpbGRlciA9IGZBcHIuZ2V0UGFydHNCdWlsZGVyKCk7XG4gIHZhciByYnRYID0gMDtcbiAgdmFyIGJ1dHRvbnM7XG5cbiAgaWYgKGZyb21MZWZ0KSB7XG4gICAgYnV0dG9ucyA9IHBhcmFtLnRpdGxlQmFyLmJ1dHRvbnNPbkxlZnQ7XG5cbiAgfSBlbHNlIHtcbiAgICBidXR0b25zID0gcGFyYW0udGl0bGVCYXIuYnV0dG9ucztcbiAgfVxuXG4gIGZvciAodmFyIHJidElkeCBpbiBidXR0b25zKSB7XG5cbiAgICB2YXIgcmJ0U3JjID0gYnV0dG9uc1tyYnRJZHhdO1xuXG4gICAgdmFyIHJidCA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b25BcHBlYXJhbmNlKCk7XG5cbiAgICAvL2NhcHRpb25cbiAgICByYnQuZmEgPSByYnRTcmMuZmE7XG5cbiAgICByYnQud2lkdGggPSBwYXJhbS50aXRsZUJhci5idXR0b25XaWR0aDtcbiAgICByYnQuaGVpZ2h0ID0gcGFyYW0udGl0bGVCYXIuYnV0dG9uSGVpZ2h0O1xuXG4gICAgcmJ0LmJvcmRlclJhZGl1cyA9IDA7XG4gICAgcmJ0LmJvcmRlcldpZHRoID0gMDtcblxuICAgIHJidC5ib3JkZXJDb2xvckRlZmF1bHQgPSAnI2M2YzZjNic7XG4gICAgcmJ0LmJvcmRlckNvbG9yRm9jdXNlZCA9ICcjZmM2MTVjJztcbiAgICByYnQuYm9yZGVyQ29sb3JIb3ZlcmVkID0gcmJ0LmJvcmRlckNvbG9yRm9jdXNlZDtcbiAgICByYnQuYm9yZGVyQ29sb3JQcmVzc2VkID0gJyNlNjQ4NDInO1xuXG4gICAgcmJ0LmJvcmRlclN0eWxlRGVmYXVsdCA9ICdzb2xpZCc7XG4gICAgcmJ0LmJvcmRlclN0eWxlRm9jdXNlZCA9IHJidC5ib3JkZXJTdHlsZURlZmF1bHQ7XG4gICAgcmJ0LmJvcmRlclN0eWxlSG92ZXJlZCA9IHJidC5ib3JkZXJTdHlsZURlZmF1bHQ7XG4gICAgcmJ0LmJvcmRlclN0eWxlUHJlc3NlZCA9IHJidC5ib3JkZXJTdHlsZURlZmF1bHQ7XG5cbiAgICAvL2JhY2tncm91bmRcbiAgICByYnQuYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9ICd0cmFuc3BhcmVudCc7XG4gICAgcmJ0LmJhY2tncm91bmRDb2xvckZvY3VzZWQgPSAndHJhbnNwYXJlbnQnO1xuICAgIHJidC5iYWNrZ3JvdW5kQ29sb3JIb3ZlcmVkID0gJ3RyYW5zcGFyZW50JztcbiAgICByYnQuYmFja2dyb3VuZENvbG9yUHJlc3NlZCA9ICd0cmFuc3BhcmVudCc7XG5cbiAgICB2YXIgY29sb3JzID0gZ2V0U3ViQ29sb3IocGFyYW0udGl0bGVCYXIuYnV0dG9uQ29sb3IpO1xuICAgIHJidC5jYXB0aW9uQ29sb3JEZWZhdWx0ID0gcGFyYW0udGl0bGVCYXIuYnV0dG9uQ29sb3I7XG4gICAgcmJ0LmNhcHRpb25Db2xvckZvY3VzZWQgPSBwYXJhbS50aXRsZUJhci5idXR0b25Db2xvcjtcbiAgICByYnQuY2FwdGlvbkNvbG9ySG92ZXJlZCA9IGNvbG9ycy5ob3ZlcmVkO1xuICAgIHJidC5jYXB0aW9uQ29sb3JQcmVzc2VkID0gY29sb3JzLnByZXNzZWQ7XG5cbiAgICByYnQuY2FwdGlvblNoaWZ0WXB4ID0gMDtcbiAgICByYnQuY2FwdGlvbkZvbnRSYXRpbyA9IDE7XG5cbiAgICB2YXIgcmJ0RWxlID0gcGFydHNCdWlsZGVyLmJ1aWxkVGV4dEJ1dHRvbihyYnQpO1xuXG4gICAgaWYgKHJidFNyYy52aXNpYmxlKSB7XG4gICAgICByYnRFbGUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZyb21MZWZ0KSB7XG4gICAgICAgIHJidFggLT0gcGFyYW0udGl0bGVCYXIuYnV0dG9uV2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByYnRYICs9IHBhcmFtLnRpdGxlQmFyLmJ1dHRvbldpZHRoO1xuICAgICAgfVxuICAgICAgcmJ0RWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgdmFyIHRpdGxlQmFySGVpZ2h0ID0gcGFyc2VJbnQoZkFwci50aXRsZUJhckhlaWdodCk7XG5cbiAgICB2YXIgcmJ0RWxlTGVmdCA9IHJidFg7XG5cbiAgICAvL2NvbXB1dGUgdmVydGljYWwgY2VudGVyXG5cbiAgICB2YXIgcmJ0RWxlVG9wID0gLXRpdGxlQmFySGVpZ2h0ICsgKHRpdGxlQmFySGVpZ2h0IC0gcmJ0LmhlaWdodCkgLyAyO1xuXG4gICAgdmFyIHJidEVsZUFsaWduO1xuICAgIGlmIChmcm9tTGVmdCkge1xuICAgICAgcmJ0RWxlQWxpZ24gPSAnTEVGVF9UT1AnO1xuICAgIH0gZWxzZSB7XG4gICAgICByYnRFbGVBbGlnbiA9ICdSSUdIVF9UT1AnO1xuICAgIH1cblxuICAgIHZhciBuZGl2O1xuICAgIGlmIChyYnRTcmMuY2hpbGRNZW51SFRNTCkge1xuXG4gICAgICBuZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBuZGl2LmlkID0gcmJ0U3JjLm5hbWUgKyAnX2NoaWxkX21lbnUnO1xuXG4gICAgICBuZGl2LmlubmVySFRNTCA9IHJidFNyYy5jaGlsZE1lbnVIVE1MO1xuICAgICAgbmRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICBuZGl2LnN0eWxlLndpZHRoID0gKHJidFNyYy5jaGlsZE1lbnVXaWR0aCA/IHJidFNyYy5jaGlsZE1lbnVXaWR0aCA6IDIwMCkgKyAncHgnO1xuICAgICAgbmRpdi5zdHlsZS50b3AgPSAocGFyc2VJbnQocmJ0RWxlLnN0eWxlLnRvcCwgMTApICsgcGFyc2VJbnQocmJ0RWxlLnN0eWxlLmhlaWdodCwgMTApIC8gMiArIHRpdGxlQmFySGVpZ2h0IC8gMikgKyAncHgnO1xuICAgICAgbmRpdi5zdHlsZS5sZWZ0ID0gcmJ0RWxlLnN0eWxlLmxlZnQ7XG4gICAgICBuZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgIHJidEVsZS5hcHBlbmRDaGlsZChuZGl2KTtcbiAgICB9XG5cblxuICAgIGZBcHIuYWRkRnJhbWVDb21wb25lbnQocmJ0U3JjLm5hbWUsIHJidEVsZSwgcmJ0RWxlTGVmdCwgcmJ0RWxlVG9wLCByYnRFbGVBbGlnbiwgeyBjaGlsZE1lbnU6IG5kaXYgfSk7XG5cbiAgICBpZiAoZnJvbUxlZnQpIHtcbiAgICAgIHJidFggKz0gcGFyYW0udGl0bGVCYXIuYnV0dG9uV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJidFggKz0gLXBhcmFtLnRpdGxlQmFyLmJ1dHRvbldpZHRoO1xuICAgIH1cblxuICB9XG59XG5cblxuZnVuY3Rpb24gZ2V0U3ViQ29sb3IoY29sb3IpIHtcblxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNhbnZhcy5oZWlnaHQgPSAxO1xuICBjYW52YXMud2lkdGggPSAxO1xuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIDEsIDEpO1xuICB2YXIgY29sb3JEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCAxLCAxKS5kYXRhO1xuXG4gIHZhciByID0gY29sb3JEYXRhWzBdO1xuICB2YXIgZyA9IGNvbG9yRGF0YVsxXTtcbiAgdmFyIGIgPSBjb2xvckRhdGFbMl07XG4gIHZhciBhbHBoYSA9IGNvbG9yRGF0YVszXSAvIDI1NTtcbiAgdmFyIGFscGhhMiA9IGFscGhhICogMC44NTtcbiAgdmFyIGFscGhhMyA9IGFscGhhICogMC43NTtcblxuICB2YXIgcmV0ID0gJ3JnYignICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJywnICsgYWxwaGEyICsgJyknO1xuICB2YXIgcmV0MiA9ICdyZ2IoJyArIHIgKyAnLCcgKyBnICsgJywnICsgYiArICcsJyArIGFscGhhMiArICcpJztcbiAgdmFyIHJldDMgPSAncmdiKCcgKyByICsgJywnICsgZyArICcsJyArIGIgKyAnLCcgKyBhbHBoYTMgKyAnKSc7XG4gIHJldHVybiB7IHNyYzogcmV0LCBob3ZlcmVkOiByZXQyLCBwcmVzc2VkOiByZXQzIH07XG59XG5cblxubW9kdWxlLmV4cG9ydHMuZ2V0U3R5bGUgPSBnZXRTdHlsZTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9QcmVzZXRTdHlsZVBvcHVwLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwicmVxdWlyZSgnLi9QcmVzZXRTdHlsZVBvcHVwLmNzcycpO1xuXG5mdW5jdGlvbiBnZXRTdHlsZShmQXByKSB7XG5cblxuICBmQXByLnNob3dUaXRsZUJhciA9IGZhbHNlO1xuICBmQXByLnNob3dDbG9zZUJ1dHRvbiA9IHRydWU7XG5cblxuICBmQXByLnRpdGxlQmFyQ2FwdGlvbkZvbnRTaXplID0gJzEycHgnO1xuICBmQXByLnRpdGxlQmFyQ2FwdGlvbkZvbnRXZWlnaHQgPSAnbm9ybWFsJztcbiAgZkFwci50aXRsZUJhckNhcHRpb25MZWZ0TWFyZ2luID0gJzEwcHgnO1xuICBmQXByLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRGVmYXVsdCA9ICcjNGQ0OTRkJztcbiAgZkFwci50aXRsZUJhckNhcHRpb25Db2xvckZvY3VzZWQgPSAnIzRkNDk0ZCc7XG5cbiAgZkFwci50aXRsZUJhckhlaWdodCA9ICc1cHgnO1xuXG4gIGZBcHIudGl0bGVCYXJDb2xvckRlZmF1bHQgPSAnd2hpdGUnO1xuICBmQXByLnRpdGxlQmFyQ29sb3JGb2N1c2VkID0gJ3doaXRlJztcblxuICBmQXByLnRpdGxlQmFyQm9yZGVyQm90dG9tRGVmYXVsdCA9IG51bGw7XG4gIGZBcHIudGl0bGVCYXJCb3JkZXJCb3R0b21Gb2N1c2VkID0gbnVsbDtcblxuICBmQXByLmZyYW1lQm9yZGVyUmFkaXVzID0gJzZweCc7XG5cbiAgLy9ib3JkZXIgd2lkdGhcbiAgZkFwci5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCA9ICcxcHgnO1xuICBmQXByLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkID0gJzFweCc7XG5cblxuICAvL2JvcmRlciBjb2xvclxuICBmQXByLmZyYW1lQm9yZGVyQ29sb3JEZWZhdWx0ID0gJyNhYWFhYWEnO1xuICBmQXByLmZyYW1lQm9yZGVyQ29sb3JGb2N1c2VkID0gJyNhYWFhYWEnO1xuXG4gIGZBcHIuZnJhbWVCb3JkZXJTdHlsZSA9ICdzb2xpZCc7XG5cbiAgLy93aW5kb3cgc2hhZG93XG4gIGZBcHIuZnJhbWVCb3hTaGFkb3cgPSAnMnB4IDJweCA1cHggIHJnYmEoMCwgMCwgMCwgMC41KSc7XG5cbiAgZkFwci5mcmFtZUJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG5cblxuICBmQXByLmZyYW1lQ29tcG9uZW50cyA9IG5ldyBBcnJheSgpO1xuXG4gIC8vYWRqdXN0bWVudCB2YWx1ZVxuICBmQXByLmZyYW1lSGVpZ2h0QWRqdXN0ID0gMjsvL2RlZmF1bHQgaXMgMVxuICBmQXByLmdldFRpdGxlQmFyU3R5bGUgPSBmdW5jdGlvbigpIHtcblxuICAgIGlmIChmQXByLmZvY3VzZWRGcmFtZU9ubHkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdDogJ2pzZnJhbWUtcHJlc2V0LXN0eWxlLXBvcHVwLWZvY3VzZWQnLFxuICAgICAgICB0aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQ6ICdqc2ZyYW1lLXByZXNldC1zdHlsZS1wb3B1cC1mb2N1c2VkJ1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0OiAnanNmcmFtZS1wcmVzZXQtc3R5bGUtcG9wdXAtZGVmYXVsdCcsXG4gICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZDogJ2pzZnJhbWUtcHJlc2V0LXN0eWxlLXBvcHVwLWZvY3VzZWQnXG4gICAgICB9O1xuICAgIH1cbiAgfTtcbiAgZkFwci5vbkluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcblxuXG4gICAgdmFyIHBhcnRzQnVpbGRlciA9IGZBcHIuZ2V0UGFydHNCdWlsZGVyKCk7XG5cblxuICAgIC8vY29uZmlndXJlIGNsb3NlIGJ1dHRvbiBhcHBlYXJhbmNlW2JlZ2luXS8vLy8vLy8vLy8vLy8vXG5cbiAgICB2YXIgY3Jvc3NNYXJrMCA9ICdcXHUyNzRjJztcbiAgICB2YXIgY3Jvc3NNYXJrMSA9ICdcXHUyNzE2JztcbiAgICB2YXIgY3Jvc3NNYXJrMiA9ICdcXHUyNzRlJztcbiAgICB2YXIgQ1JPU1NfTUFSSyA9IGNyb3NzTWFyazE7XG5cblxuICAgIHZhciBjYkFwciA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b25BcHBlYXJhbmNlKCk7XG5cbiAgICBjYkFwci53aWR0aCA9IDIwO1xuICAgIGNiQXByLmhlaWdodCA9IDIwO1xuXG5cbiAgICBjYkFwci5ib3JkZXJSYWRpdXMgPSAxMDtcbiAgICBjYkFwci5ib3JkZXJXaWR0aCA9IDE7XG5cbiAgICBjYkFwci5ib3JkZXJDb2xvckRlZmF1bHQgPSAnI2NjY2NjYyc7XG4gICAgY2JBcHIuYm9yZGVyQ29sb3JGb2N1c2VkID0gJyNjY2NjY2MnO1xuICAgIGNiQXByLmJvcmRlckNvbG9ySG92ZXJlZCA9ICcjZGRkZGRkJztcbiAgICBjYkFwci5ib3JkZXJDb2xvclByZXNzZWQgPSAnI2VlZWVlZSc7XG5cbiAgICBjYkFwci5ib3JkZXJTdHlsZURlZmF1bHQgPSAnc29saWQnO1xuICAgIGNiQXByLmJvcmRlclN0eWxlRm9jdXNlZCA9IGNiQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgICBjYkFwci5ib3JkZXJTdHlsZUhvdmVyZWQgPSBjYkFwci5ib3JkZXJTdHlsZURlZmF1bHQ7XG4gICAgY2JBcHIuYm9yZGVyU3R5bGVQcmVzc2VkID0gY2JBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuXG4gICAgLy9iYWNrZ3JvdW5kXG4gICAgY2JBcHIuYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9ICd3aGl0ZSc7XG4gICAgY2JBcHIuYmFja2dyb3VuZENvbG9yRm9jdXNlZCA9ICd3aGl0ZSc7XG4gICAgY2JBcHIuYmFja2dyb3VuZENvbG9ySG92ZXJlZCA9ICcjZWVlZWVlJztcbiAgICBjYkFwci5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gJyNkZGRkZGQnO1xuXG4gICAgY2JBcHIuYmFja2dyb3VuZEJveFNoYWRvdyA9ICcycHggMnB4IDVweCAgcmdiYSgwLCAwLCAwLCAwLjUpJztcblxuICAgIC8vY2FwdGlvblxuICAgIGNiQXByLmNhcHRpb24gPSBDUk9TU19NQVJLO1xuXG4gICAgY2JBcHIuY2FwdGlvbkNvbG9yRGVmYXVsdCA9ICdibGFjayc7XG4gICAgY2JBcHIuY2FwdGlvbkNvbG9yRm9jdXNlZCA9ICdibGFjayc7XG4gICAgY2JBcHIuY2FwdGlvbkNvbG9ySG92ZXJlZCA9ICd3aGl0ZSc7XG4gICAgY2JBcHIuY2FwdGlvbkNvbG9yUHJlc3NlZCA9ICd3aGl0ZSc7XG5cbiAgICBjYkFwci5jYXB0aW9uU2hpZnRZcHggPSAxO1xuICAgIGNiQXByLmNhcHRpb25Gb250UmF0aW8gPSAwLjY7XG5cbiAgICB2YXIgY2xvc2VCdG5FbGUgPSBwYXJ0c0J1aWxkZXIuYnVpbGRUZXh0QnV0dG9uKGNiQXByKTtcbiAgICB2YXIgZWxlTGVmdCA9IDEwO1xuICAgIHZhciBlbGVUb3AgPSAtNiAtIHBhcnNlSW50KGZBcHIudGl0bGVCYXJIZWlnaHQpO1xuICAgIHZhciBlbGVBbGlnbiA9ICdSSUdIVF9UT1AnO1xuXG4gICAgLy8gJ2Nsb3NlQnV0dG9uJyBpcyBhIHNwZWNpYWwgbmFtZVxuICAgIGZBcHIuYWRkRnJhbWVDb21wb25lbnQoJ2Nsb3NlQnV0dG9uJywgY2xvc2VCdG5FbGUsIGVsZUxlZnQsIGVsZVRvcCwgZWxlQWxpZ24pO1xuXG4gICAgLy9jb25maWd1cmUgY2xvc2UgYnV0dG9uIGFwcGVhcmFuY2VbZW5kXS8vLy8vLy8vLy8vLy8vXG5cblxuICB9O1xuICAvL1xuXG4gIHJldHVybiBmQXByO1xuXG5cbn1cblxuXG5tb2R1bGUuZXhwb3J0cy5nZXRTdHlsZSA9IGdldFN0eWxlO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1ByZXNldFN0eWxlUmVkc3RvbmUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJyZXF1aXJlKCcuL1ByZXNldFN0eWxlUmVkc3RvbmUuY3NzJyk7XG5cbmZ1bmN0aW9uIGdldFN0eWxlKGZBcHIpIHtcblxuICBmQXByLnNob3dUaXRsZUJhciA9IHRydWU7XG4gIGZBcHIuc2hvd0Nsb3NlQnV0dG9uID0gdHJ1ZTtcblxuICBmQXByLnRpdGxlQmFyQ2FwdGlvbkZvbnRTaXplID0gJzEycHgnO1xuICBmQXByLnRpdGxlQmFyQ2FwdGlvbkZvbnRXZWlnaHQgPSAnbm9ybWFsJztcbiAgZkFwci50aXRsZUJhckNhcHRpb25MZWZ0TWFyZ2luID0gJzEwcHgnO1xuICBmQXByLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRGVmYXVsdCA9ICcjOWI5YTliJztcbiAgZkFwci50aXRsZUJhckNhcHRpb25Db2xvckZvY3VzZWQgPSAnIzRkNDk0ZCc7XG5cbiAgZkFwci50aXRsZUJhckhlaWdodCA9ICczMHB4JztcblxuICBmQXByLnRpdGxlQmFyQ29sb3JEZWZhdWx0ID0gbnVsbDtcbiAgZkFwci50aXRsZUJhckNvbG9yRm9jdXNlZCA9IG51bGw7XG5cbiAgZkFwci50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQgPSAnc29saWQgMXB4ICNhYWFhYWEnO1xuICBmQXByLnRpdGxlQmFyQm9yZGVyQm90dG9tRm9jdXNlZCA9ICdzb2xpZCAxcHggIzE4ODNkNyc7XG5cbiAgZkFwci5mcmFtZUJvcmRlclJhZGl1cyA9ICcwcHgnO1xuXG4gIC8vYm9yZGVyIHdpZHRoXG4gIGZBcHIuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQgPSAnMXB4JztcbiAgZkFwci5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZCA9ICcxcHgnO1xuXG5cbiAgLy9ib3JkZXIgY29sb3JcbiAgZkFwci5mcmFtZUJvcmRlckNvbG9yRGVmYXVsdCA9ICcjYWFhYWFhJztcbiAgZkFwci5mcmFtZUJvcmRlckNvbG9yRm9jdXNlZCA9ICcjMTg4M2Q3JztcblxuICBmQXByLmZyYW1lQm9yZGVyU3R5bGUgPSAnc29saWQnO1xuXG4gIC8vd2luZG93IHNoYWRvd1xuICBmQXByLmZyYW1lQm94U2hhZG93ID0gbnVsbDtcblxuICBmQXByLmZyYW1lQmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcblxuXG4gIGZBcHIuZnJhbWVDb21wb25lbnRzID0gbmV3IEFycmF5KCk7XG5cbiAgLy9hZGp1c3RtZW50IHZhbHVlXG4gIGZBcHIuZnJhbWVIZWlnaHRBZGp1c3QgPSAwOy8vZGVmYXVsdCBpcyAxXG5cbiAgZkFwci5nZXRUaXRsZUJhclN0eWxlID0gZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAoZkFwci5mb2N1c2VkRnJhbWVPbmx5KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZUJhckNsYXNzTmFtZURlZmF1bHQ6ICdqc2ZyYW1lLXByZXNldC1zdHlsZS1yZWRzdG9uZS1mb2N1c2VkJyxcbiAgICAgICAgdGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkOiAnanNmcmFtZS1wcmVzZXQtc3R5bGUtcmVkc3RvbmUtZm9jdXNlZCdcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdDogJ2pzZnJhbWUtcHJlc2V0LXN0eWxlLXJlZHN0b25lLWRlZmF1bHQnLFxuICAgICAgICB0aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQ6ICdqc2ZyYW1lLXByZXNldC1zdHlsZS1yZWRzdG9uZS1mb2N1c2VkJ1xuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgZkFwci5vbkluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcblxuXG4gICAgdmFyIHBhcnRzQnVpbGRlciA9IGZBcHIuZ2V0UGFydHNCdWlsZGVyKCk7XG5cblxuICAgIHtcbiAgICAgIC8vY29uZmlndXJlIGNsb3NlIGJ1dHRvbiBhcHBlYXJhbmNlW2JlZ2luXS8vLy8vLy8vLy8vLy8vXG5cbiAgICAgIHZhciBDUk9TU19NQVJLID0gJ1xcdTI1NzMnO1xuXG4gICAgICB2YXIgY2JBcHIgPSBwYXJ0c0J1aWxkZXIuYnVpbGRUZXh0QnV0dG9uQXBwZWFyYW5jZSgpO1xuXG4gICAgICBjYkFwci53aWR0aCA9IDQ1O1xuICAgICAgY2JBcHIuaGVpZ2h0ID0gMjg7XG5cblxuICAgICAgY2JBcHIuYm9yZGVyUmFkaXVzID0gMDtcbiAgICAgIGNiQXByLmJvcmRlcldpZHRoID0gMDtcblxuICAgICAgY2JBcHIuYm9yZGVyQ29sb3JEZWZhdWx0ID0gJyNjNmM2YzYnO1xuICAgICAgY2JBcHIuYm9yZGVyQ29sb3JGb2N1c2VkID0gJyNmYzYxNWMnO1xuICAgICAgY2JBcHIuYm9yZGVyQ29sb3JIb3ZlcmVkID0gY2JBcHIuYm9yZGVyQ29sb3JGb2N1c2VkO1xuICAgICAgY2JBcHIuYm9yZGVyQ29sb3JQcmVzc2VkID0gJyNlNjQ4NDInO1xuXG4gICAgICBjYkFwci5ib3JkZXJTdHlsZURlZmF1bHQgPSAnc29saWQnO1xuICAgICAgY2JBcHIuYm9yZGVyU3R5bGVGb2N1c2VkID0gY2JBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgICAgY2JBcHIuYm9yZGVyU3R5bGVIb3ZlcmVkID0gY2JBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgICAgY2JBcHIuYm9yZGVyU3R5bGVQcmVzc2VkID0gY2JBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuXG4gICAgICAvL2JhY2tncm91bmRcbiAgICAgIGNiQXByLmJhY2tncm91bmRDb2xvckRlZmF1bHQgPSAnd2hpdGUnO1xuICAgICAgY2JBcHIuYmFja2dyb3VuZENvbG9yRm9jdXNlZCA9ICd3aGl0ZSc7XG4gICAgICBjYkFwci5iYWNrZ3JvdW5kQ29sb3JIb3ZlcmVkID0gJyNlODExMjMnO1xuICAgICAgY2JBcHIuYmFja2dyb3VuZENvbG9yUHJlc3NlZCA9ICcjZjE3MDdhJztcblxuICAgICAgLy9jYXB0aW9uXG4gICAgICBjYkFwci5jYXB0aW9uID0gQ1JPU1NfTUFSSztcblxuICAgICAgY2JBcHIuY2FwdGlvbkNvbG9yRGVmYXVsdCA9ICcjOWI5YTliJztcbiAgICAgIGNiQXByLmNhcHRpb25Db2xvckZvY3VzZWQgPSAnYmxhY2snO1xuICAgICAgY2JBcHIuY2FwdGlvbkNvbG9ySG92ZXJlZCA9ICd3aGl0ZSc7XG4gICAgICBjYkFwci5jYXB0aW9uQ29sb3JQcmVzc2VkID0gJ3doaXRlJztcblxuICAgICAgY2JBcHIuY2FwdGlvblNoaWZ0WXB4ID0gMTtcbiAgICAgIGNiQXByLmNhcHRpb25Gb250UmF0aW8gPSAwLjY7XG5cbiAgICAgIHZhciBjbG9zZUJ0bkVsZSA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b24oY2JBcHIpO1xuICAgICAgdmFyIGVsZUxlZnQgPSAwO1xuICAgICAgdmFyIGVsZVRvcCA9IC1wYXJzZUludChmQXByLnRpdGxlQmFySGVpZ2h0KTtcbiAgICAgIHZhciBlbGVBbGlnbiA9ICdSSUdIVF9UT1AnO1xuXG4gICAgICAvLyAnY2xvc2VCdXR0b24nIGlzIGEgc3BlY2lhbCBuYW1lXG4gICAgICBmQXByLmFkZEZyYW1lQ29tcG9uZW50KCdjbG9zZUJ1dHRvbicsIGNsb3NlQnRuRWxlLCBlbGVMZWZ0LCBlbGVUb3AsIGVsZUFsaWduKTtcblxuICAgICAgLy9jb25maWd1cmUgY2xvc2UgYnV0dG9uIGFwcGVhcmFuY2VbZW5kXS8vLy8vLy8vLy8vLy8vXG4gICAgfVxuXG4gICAge1xuICAgICAgLy9jb25maWd1cmUgY2xvc2UgYnV0dG9uIGFwcGVhcmFuY2VbYmVnaW5dLy8vLy8vLy8vLy8vLy9cblxuICAgICAgdmFyIE1BWElNSVpFX01BUksgPSAnXFx1MjYxMCc7XG5cbiAgICAgIHZhciBtYXhBcHIgPSBwYXJ0c0J1aWxkZXIuYnVpbGRUZXh0QnV0dG9uQXBwZWFyYW5jZSgpO1xuXG4gICAgICBtYXhBcHIud2lkdGggPSA0NTtcbiAgICAgIG1heEFwci5oZWlnaHQgPSAyODtcblxuXG4gICAgICBtYXhBcHIuYm9yZGVyUmFkaXVzID0gMDtcbiAgICAgIG1heEFwci5ib3JkZXJXaWR0aCA9IDA7XG5cbiAgICAgIG1heEFwci5ib3JkZXJDb2xvckRlZmF1bHQgPSAnI2M2YzZjNic7XG4gICAgICBtYXhBcHIuYm9yZGVyQ29sb3JGb2N1c2VkID0gJyNmYzYxNWMnO1xuICAgICAgbWF4QXByLmJvcmRlckNvbG9ySG92ZXJlZCA9IG1heEFwci5ib3JkZXJDb2xvckZvY3VzZWQ7XG4gICAgICBtYXhBcHIuYm9yZGVyQ29sb3JQcmVzc2VkID0gJyNlNjQ4NDInO1xuXG4gICAgICBtYXhBcHIuYm9yZGVyU3R5bGVEZWZhdWx0ID0gJ3NvbGlkJztcbiAgICAgIG1heEFwci5ib3JkZXJTdHlsZUZvY3VzZWQgPSBtYXhBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgICAgbWF4QXByLmJvcmRlclN0eWxlSG92ZXJlZCA9IG1heEFwci5ib3JkZXJTdHlsZURlZmF1bHQ7XG4gICAgICBtYXhBcHIuYm9yZGVyU3R5bGVQcmVzc2VkID0gbWF4QXByLmJvcmRlclN0eWxlRGVmYXVsdDtcblxuICAgICAgLy9iYWNrZ3JvdW5kXG4gICAgICBtYXhBcHIuYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9ICd3aGl0ZSc7XG4gICAgICBtYXhBcHIuYmFja2dyb3VuZENvbG9yRm9jdXNlZCA9ICd3aGl0ZSc7XG4gICAgICBtYXhBcHIuYmFja2dyb3VuZENvbG9ySG92ZXJlZCA9ICcjZTVlNWU1JztcbiAgICAgIG1heEFwci5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gJyNjY2NjY2MnO1xuXG4gICAgICAvL2NhcHRpb25cbiAgICAgIG1heEFwci5jYXB0aW9uID0gTUFYSU1JWkVfTUFSSztcblxuICAgICAgbWF4QXByLmNhcHRpb25Db2xvckRlZmF1bHQgPSAnIzliOWE5Yic7XG4gICAgICBtYXhBcHIuY2FwdGlvbkNvbG9yRm9jdXNlZCA9ICdibGFjayc7XG4gICAgICBtYXhBcHIuY2FwdGlvbkNvbG9ySG92ZXJlZCA9ICdibGFjayc7XG4gICAgICBtYXhBcHIuY2FwdGlvbkNvbG9yUHJlc3NlZCA9ICdibGFjayc7XG5cbiAgICAgIG1heEFwci5jYXB0aW9uU2hpZnRZcHggPSAxO1xuICAgICAgbWF4QXByLmNhcHRpb25Gb250UmF0aW8gPSAwLjU1O1xuXG4gICAgICB2YXIgbWF4QnRuRWxlID0gcGFydHNCdWlsZGVyLmJ1aWxkVGV4dEJ1dHRvbihtYXhBcHIpO1xuICAgICAgdmFyIGVsZUxlZnQgPSAtNDY7XG4gICAgICB2YXIgZWxlVG9wID0gLXBhcnNlSW50KGZBcHIudGl0bGVCYXJIZWlnaHQpO1xuICAgICAgdmFyIGVsZUFsaWduID0gJ1JJR0hUX1RPUCc7XG5cbiAgICAgIC8vICdjbG9zZUJ1dHRvbicgaXMgYSBzcGVjaWFsIG5hbWVcbiAgICAgIGZBcHIuYWRkRnJhbWVDb21wb25lbnQoJ21heGltaXplQnV0dG9uJywgbWF4QnRuRWxlLCBlbGVMZWZ0LCBlbGVUb3AsIGVsZUFsaWduKTtcblxuICAgICAgLy9jb25maWd1cmUgY2xvc2UgYnV0dG9uIGFwcGVhcmFuY2VbZW5kXS8vLy8vLy8vLy8vLy8vXG4gICAgfVxuXG4gICAge1xuICAgICAgLy9jb25maWd1cmUgY2xvc2UgYnV0dG9uIGFwcGVhcmFuY2VbYmVnaW5dLy8vLy8vLy8vLy8vLy9cblxuICAgICAgdmFyIE1JTklNSVpFX01BUksgPSAnXFx1ZmYzZic7XG5cbiAgICAgIHZhciBtaW5BcHIgPSBwYXJ0c0J1aWxkZXIuYnVpbGRUZXh0QnV0dG9uQXBwZWFyYW5jZSgpO1xuXG4gICAgICBtaW5BcHIud2lkdGggPSA0NTtcbiAgICAgIG1pbkFwci5oZWlnaHQgPSAyODtcblxuXG4gICAgICBtaW5BcHIuYm9yZGVyUmFkaXVzID0gMDtcbiAgICAgIG1pbkFwci5ib3JkZXJXaWR0aCA9IDA7XG5cbiAgICAgIG1pbkFwci5ib3JkZXJDb2xvckRlZmF1bHQgPSAnI2M2YzZjNic7XG4gICAgICBtaW5BcHIuYm9yZGVyQ29sb3JGb2N1c2VkID0gJyNmYzYxNWMnO1xuICAgICAgbWluQXByLmJvcmRlckNvbG9ySG92ZXJlZCA9IG1pbkFwci5ib3JkZXJDb2xvckZvY3VzZWQ7XG4gICAgICBtaW5BcHIuYm9yZGVyQ29sb3JQcmVzc2VkID0gJyNlNjQ4NDInO1xuXG4gICAgICBtaW5BcHIuYm9yZGVyU3R5bGVEZWZhdWx0ID0gJ3NvbGlkJztcbiAgICAgIG1pbkFwci5ib3JkZXJTdHlsZUZvY3VzZWQgPSBtaW5BcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgICAgbWluQXByLmJvcmRlclN0eWxlSG92ZXJlZCA9IG1pbkFwci5ib3JkZXJTdHlsZURlZmF1bHQ7XG4gICAgICBtaW5BcHIuYm9yZGVyU3R5bGVQcmVzc2VkID0gbWluQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcblxuICAgICAgLy9iYWNrZ3JvdW5kXG4gICAgICBtaW5BcHIuYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9ICd3aGl0ZSc7XG4gICAgICBtaW5BcHIuYmFja2dyb3VuZENvbG9yRm9jdXNlZCA9ICd3aGl0ZSc7XG4gICAgICBtaW5BcHIuYmFja2dyb3VuZENvbG9ySG92ZXJlZCA9ICcjZTVlNWU1JztcbiAgICAgIG1pbkFwci5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gJyNjY2NjY2MnO1xuXG4gICAgICAvL2NhcHRpb25cbiAgICAgIG1pbkFwci5jYXB0aW9uID0gTUlOSU1JWkVfTUFSSztcblxuICAgICAgbWluQXByLmNhcHRpb25Db2xvckRlZmF1bHQgPSAnIzliOWE5Yic7XG4gICAgICBtaW5BcHIuY2FwdGlvbkNvbG9yRm9jdXNlZCA9ICdibGFjayc7XG4gICAgICBtaW5BcHIuY2FwdGlvbkNvbG9ySG92ZXJlZCA9ICdibGFjayc7XG4gICAgICBtaW5BcHIuY2FwdGlvbkNvbG9yUHJlc3NlZCA9ICdibGFjayc7XG5cbiAgICAgIG1pbkFwci5jYXB0aW9uU2hpZnRZcHggPSAtMjtcbiAgICAgIG1pbkFwci5jYXB0aW9uRm9udFJhdGlvID0gMC4zO1xuXG4gICAgICB2YXIgbWluQnRuRWxlID0gcGFydHNCdWlsZGVyLmJ1aWxkVGV4dEJ1dHRvbihtaW5BcHIpO1xuICAgICAgdmFyIGVsZUxlZnQgPSAtOTI7XG4gICAgICB2YXIgZWxlVG9wID0gLXBhcnNlSW50KGZBcHIudGl0bGVCYXJIZWlnaHQpO1xuICAgICAgdmFyIGVsZUFsaWduID0gJ1JJR0hUX1RPUCc7XG5cbiAgICAgIC8vICdjbG9zZUJ1dHRvbicgaXMgYSBzcGVjaWFsIG5hbWVcbiAgICAgIGZBcHIuYWRkRnJhbWVDb21wb25lbnQoJ21pbmltaXplQnV0dG9uJywgbWluQnRuRWxlLCBlbGVMZWZ0LCBlbGVUb3AsIGVsZUFsaWduKTtcblxuICAgICAgLy9jb25maWd1cmUgY2xvc2UgYnV0dG9uIGFwcGVhcmFuY2VbZW5kXS8vLy8vLy8vLy8vLy8vXG4gICAgfVxuICAgIHtcbiAgICAgIC8vY29uZmlndXJlIGNsb3NlIGJ1dHRvbiBhcHBlYXJhbmNlW2JlZ2luXS8vLy8vLy8vLy8vLy8vXG5cblxuICAgICAgdmFyIGRlbWluQXByID0gcGFydHNCdWlsZGVyLmJ1aWxkVGV4dEJ1dHRvbkFwcGVhcmFuY2UoKTtcblxuICAgICAgZGVtaW5BcHIud2lkdGggPSA0NTtcbiAgICAgIGRlbWluQXByLmhlaWdodCA9IDI4O1xuXG5cbiAgICAgIGRlbWluQXByLmJvcmRlclJhZGl1cyA9IDA7XG4gICAgICBkZW1pbkFwci5ib3JkZXJXaWR0aCA9IDA7XG5cbiAgICAgIGRlbWluQXByLmJvcmRlckNvbG9yRGVmYXVsdCA9ICcjYzZjNmM2JztcbiAgICAgIGRlbWluQXByLmJvcmRlckNvbG9yRm9jdXNlZCA9ICcjZmM2MTVjJztcbiAgICAgIGRlbWluQXByLmJvcmRlckNvbG9ySG92ZXJlZCA9IGRlbWluQXByLmJvcmRlckNvbG9yRm9jdXNlZDtcbiAgICAgIGRlbWluQXByLmJvcmRlckNvbG9yUHJlc3NlZCA9ICcjZTY0ODQyJztcblxuICAgICAgZGVtaW5BcHIuYm9yZGVyU3R5bGVEZWZhdWx0ID0gJ3NvbGlkJztcbiAgICAgIGRlbWluQXByLmJvcmRlclN0eWxlRm9jdXNlZCA9IGRlbWluQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgICAgIGRlbWluQXByLmJvcmRlclN0eWxlSG92ZXJlZCA9IGRlbWluQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgICAgIGRlbWluQXByLmJvcmRlclN0eWxlUHJlc3NlZCA9IGRlbWluQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcblxuICAgICAgLy9iYWNrZ3JvdW5kXG4gICAgICBkZW1pbkFwci5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0ID0gJ3doaXRlJztcbiAgICAgIGRlbWluQXByLmJhY2tncm91bmRDb2xvckZvY3VzZWQgPSAnd2hpdGUnO1xuICAgICAgZGVtaW5BcHIuYmFja2dyb3VuZENvbG9ySG92ZXJlZCA9ICcjZTVlNWU1JztcbiAgICAgIGRlbWluQXByLmJhY2tncm91bmRDb2xvclByZXNzZWQgPSAnI2NjY2NjYyc7XG5cbiAgICAgIC8vY2FwdGlvblxuICAgICAgZGVtaW5BcHIuY2FwdGlvbiA9ICdcXHUyNUEzJztcblxuICAgICAgZGVtaW5BcHIuY2FwdGlvbkNvbG9yRGVmYXVsdCA9ICcjOWI5YTliJztcbiAgICAgIGRlbWluQXByLmNhcHRpb25Db2xvckZvY3VzZWQgPSAnYmxhY2snO1xuICAgICAgZGVtaW5BcHIuY2FwdGlvbkNvbG9ySG92ZXJlZCA9ICdibGFjayc7XG4gICAgICBkZW1pbkFwci5jYXB0aW9uQ29sb3JQcmVzc2VkID0gJ2JsYWNrJztcblxuICAgICAgZGVtaW5BcHIuY2FwdGlvblNoaWZ0WXB4ID0gMTtcbiAgICAgIGRlbWluQXByLmNhcHRpb25Gb250UmF0aW8gPSAwLjY7XG5cbiAgICAgIHZhciBkZW1pbkJ0bkVsZSA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b24oZGVtaW5BcHIpO1xuICAgICAgdmFyIGVsZUxlZnQgPSAtOTI7XG4gICAgICB2YXIgZWxlVG9wID0gLXBhcnNlSW50KGZBcHIudGl0bGVCYXJIZWlnaHQpO1xuICAgICAgdmFyIGVsZUFsaWduID0gJ1JJR0hUX1RPUCc7XG5cbiAgICAgIGRlbWluQnRuRWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgIC8vICdjbG9zZUJ1dHRvbicgaXMgYSBzcGVjaWFsIG5hbWVcbiAgICAgIGZBcHIuYWRkRnJhbWVDb21wb25lbnQoJ2RlbWluaW1pemVCdXR0b24nLCBkZW1pbkJ0bkVsZSwgZWxlTGVmdCwgZWxlVG9wLCBlbGVBbGlnbik7XG5cbiAgICAgIC8vY29uZmlndXJlIGNsb3NlIGJ1dHRvbiBhcHBlYXJhbmNlW2VuZF0vLy8vLy8vLy8vLy8vL1xuICAgIH1cbiAgICB7XG4gICAgICAvL2NvbmZpZ3VyZSBjbG9zZSBidXR0b24gYXBwZWFyYW5jZVtiZWdpbl0vLy8vLy8vLy8vLy8vL1xuXG4gICAgICB2YXIgUkVTVE9SRV9NQVJLID0gJ1xcdTI3NEYnO1xuXG4gICAgICB2YXIgcmJBcHIgPSBwYXJ0c0J1aWxkZXIuYnVpbGRUZXh0QnV0dG9uQXBwZWFyYW5jZSgpO1xuXG4gICAgICByYkFwci53aWR0aCA9IDQ1O1xuICAgICAgcmJBcHIuaGVpZ2h0ID0gMjg7XG5cblxuICAgICAgcmJBcHIuYm9yZGVyUmFkaXVzID0gMDtcbiAgICAgIHJiQXByLmJvcmRlcldpZHRoID0gMDtcblxuICAgICAgcmJBcHIuYm9yZGVyQ29sb3JEZWZhdWx0ID0gJyNjNmM2YzYnO1xuICAgICAgcmJBcHIuYm9yZGVyQ29sb3JGb2N1c2VkID0gJyNmYzYxNWMnO1xuICAgICAgcmJBcHIuYm9yZGVyQ29sb3JIb3ZlcmVkID0gcmJBcHIuYm9yZGVyQ29sb3JGb2N1c2VkO1xuICAgICAgcmJBcHIuYm9yZGVyQ29sb3JQcmVzc2VkID0gJyNlNjQ4NDInO1xuXG4gICAgICByYkFwci5ib3JkZXJTdHlsZURlZmF1bHQgPSAnc29saWQnO1xuICAgICAgcmJBcHIuYm9yZGVyU3R5bGVGb2N1c2VkID0gcmJBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgICAgcmJBcHIuYm9yZGVyU3R5bGVIb3ZlcmVkID0gcmJBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgICAgcmJBcHIuYm9yZGVyU3R5bGVQcmVzc2VkID0gcmJBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuXG4gICAgICAvL2JhY2tncm91bmRcbiAgICAgIHJiQXByLmJhY2tncm91bmRDb2xvckRlZmF1bHQgPSAnd2hpdGUnO1xuICAgICAgcmJBcHIuYmFja2dyb3VuZENvbG9yRm9jdXNlZCA9ICd3aGl0ZSc7XG4gICAgICByYkFwci5iYWNrZ3JvdW5kQ29sb3JIb3ZlcmVkID0gJyNlNWU1ZTUnO1xuICAgICAgcmJBcHIuYmFja2dyb3VuZENvbG9yUHJlc3NlZCA9ICcjY2NjY2NjJztcblxuICAgICAgLy9jYXB0aW9uXG4gICAgICByYkFwci5jYXB0aW9uID0gUkVTVE9SRV9NQVJLO1xuXG4gICAgICByYkFwci5jYXB0aW9uQ29sb3JEZWZhdWx0ID0gJyM5YjlhOWInO1xuICAgICAgcmJBcHIuY2FwdGlvbkNvbG9yRm9jdXNlZCA9ICdibGFjayc7XG4gICAgICByYkFwci5jYXB0aW9uQ29sb3JIb3ZlcmVkID0gJ2JsYWNrJztcbiAgICAgIHJiQXByLmNhcHRpb25Db2xvclByZXNzZWQgPSAnYmxhY2snO1xuXG4gICAgICByYkFwci5jYXB0aW9uU2hpZnRZcHggPSAxO1xuICAgICAgcmJBcHIuY2FwdGlvbkZvbnRSYXRpbyA9IDAuNTU7XG5cbiAgICAgIHZhciByZXN0b3JlQnRuRWxlID0gcGFydHNCdWlsZGVyLmJ1aWxkVGV4dEJ1dHRvbihyYkFwcik7XG4gICAgICB2YXIgZWxlTGVmdCA9IC00NjtcbiAgICAgIHZhciBlbGVUb3AgPSAtcGFyc2VJbnQoZkFwci50aXRsZUJhckhlaWdodCk7XG4gICAgICB2YXIgZWxlQWxpZ24gPSAnUklHSFRfVE9QJztcblxuICAgICAgcmVzdG9yZUJ0bkVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAvLyAnY2xvc2VCdXR0b24nIGlzIGEgc3BlY2lhbCBuYW1lXG4gICAgICBmQXByLmFkZEZyYW1lQ29tcG9uZW50KCdyZXN0b3JlQnV0dG9uJywgcmVzdG9yZUJ0bkVsZSwgZWxlTGVmdCwgZWxlVG9wLCBlbGVBbGlnbik7XG5cbiAgICAgIC8vY29uZmlndXJlIGNsb3NlIGJ1dHRvbiBhcHBlYXJhbmNlW2VuZF0vLy8vLy8vLy8vLy8vL1xuICAgIH1cblxuXG4gIH07XG4gIC8vXG5cbiAgcmV0dXJuIGZBcHI7XG59XG5cblxubW9kdWxlLmV4cG9ydHMuZ2V0U3R5bGUgPSBnZXRTdHlsZTtcbiIsImZ1bmN0aW9uIGdldFN0eWxlKGZBcHIpIHtcblxuXG4gIGZBcHIuc2hvd1RpdGxlQmFyID0gZmFsc2U7XG4gIGZBcHIuc2hvd0Nsb3NlQnV0dG9uID0gdHJ1ZTtcblxuXG4gIGZBcHIudGl0bGVCYXJDYXB0aW9uRm9udFNpemUgPSAnMHB4JztcbiAgZkFwci50aXRsZUJhckNhcHRpb25Gb250V2VpZ2h0ID0gJ25vcm1hbCc7XG4gIGZBcHIudGl0bGVCYXJDYXB0aW9uTGVmdE1hcmdpbiA9ICcwcHgnO1xuICBmQXByLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRGVmYXVsdCA9ICd0cmFuc3BhcmVudCc7XG4gIGZBcHIudGl0bGVCYXJDYXB0aW9uQ29sb3JGb2N1c2VkID0gJ3RyYW5zcGFyZW50JztcblxuICBmQXByLnRpdGxlQmFySGVpZ2h0ID0gJzBweCc7XG5cbiAgZkFwci50aXRsZUJhckNvbG9yRGVmYXVsdCA9ICd0cmFuc3BhcmVudCc7XG4gIGZBcHIudGl0bGVCYXJDb2xvckZvY3VzZWQgPSAndHJhbnNwYXJlbnQnO1xuXG4gIGZBcHIudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0ID0gbnVsbDtcbiAgZkFwci50aXRsZUJhckJvcmRlckJvdHRvbUZvY3VzZWQgPSBudWxsO1xuXG4gIGZBcHIuZnJhbWVCb3JkZXJSYWRpdXMgPSAnMTBweCc7XG5cbiAgLy9ib3JkZXIgd2lkdGhcbiAgZkFwci5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCA9ICcwcHgnO1xuICBmQXByLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkID0gJzBweCc7XG5cbiAgLy9ib3JkZXIgY29sb3JcbiAgZkFwci5mcmFtZUJvcmRlckNvbG9yRGVmYXVsdCA9ICd0cmFuc3BhcmVudCc7XG4gIGZBcHIuZnJhbWVCb3JkZXJDb2xvckZvY3VzZWQgPSAndHJhbnNwYXJlbnQnO1xuICBmQXByLmZyYW1lQm9yZGVyU3R5bGUgPSAnc29saWQnO1xuICBmQXByLmZyYW1lQm94U2hhZG93ID0gJzJweCAycHggMTVweCAgcmdiYSgwLCAwLCAwLCAwLjUpJztcbiAgZkFwci5mcmFtZUJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cblxuICBmQXByLmZyYW1lQ29tcG9uZW50cyA9IFtdO1xuICBmQXByLmZyYW1lSGVpZ2h0QWRqdXN0ID0gMTsvL2RlZmF1bHQgaXMgMVxuXG4gIGZBcHIuY2FwdGlvbkNsb3IgPSAnZGFya2dyYXknO1xuXG4gIGZBcHIucHVsbFVwRGlzYWJsZWQgPSBmYWxzZTtcblxuICBmQXByLmdldFRpdGxlQmFyU3R5bGUgPSBmdW5jdGlvbigpIHtcblxuICAgIGlmIChmQXByLmZvY3VzZWRGcmFtZU9ubHkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdDogJyAnLFxuICAgICAgICB0aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQ6ICcgJ1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0OiAnICcsXG4gICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZDogJyAnXG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuXG4gIGZBcHIub25Jbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XG5cblxuICAgIHZhciBwYXJ0c0J1aWxkZXIgPSBmQXByLmdldFBhcnRzQnVpbGRlcigpO1xuXG5cbiAgICAvL2NvbmZpZ3VyZSBjbG9zZSBidXR0b24gYXBwZWFyYW5jZVtiZWdpbl0vLy8vLy8vLy8vLy8vL1xuXG4gICAgdmFyIGNyb3NzTWFyazAgPSAnXFx1Mjc0Yyc7XG4gICAgdmFyIGNyb3NzTWFyazEgPSAnXFx1MjcxNic7XG4gICAgdmFyIGNyb3NzTWFyazIgPSAnXFx1Mjc0ZSc7XG4gICAgdmFyIENST1NTX01BUksgPSBjcm9zc01hcmsxO1xuXG5cbiAgICB2YXIgY2JBcHIgPSBwYXJ0c0J1aWxkZXIuYnVpbGRUZXh0QnV0dG9uQXBwZWFyYW5jZSgpO1xuXG4gICAgY2JBcHIud2lkdGggPSAyMDtcbiAgICBjYkFwci5oZWlnaHQgPSAyMDtcblxuXG4gICAgY2JBcHIuYm9yZGVyUmFkaXVzID0gMTA7XG4gICAgY2JBcHIuYm9yZGVyV2lkdGggPSAwO1xuXG4gICAgY2JBcHIuYm9yZGVyQ29sb3JEZWZhdWx0ID0gJyNjY2NjY2MnO1xuICAgIGNiQXByLmJvcmRlckNvbG9yRm9jdXNlZCA9ICcjY2NjY2NjJztcbiAgICBjYkFwci5ib3JkZXJDb2xvckhvdmVyZWQgPSAnI2RkZGRkZCc7XG4gICAgY2JBcHIuYm9yZGVyQ29sb3JQcmVzc2VkID0gJyNlZWVlZWUnO1xuXG4gICAgY2JBcHIuYm9yZGVyU3R5bGVEZWZhdWx0ID0gJ3NvbGlkJztcbiAgICBjYkFwci5ib3JkZXJTdHlsZUZvY3VzZWQgPSBjYkFwci5ib3JkZXJTdHlsZURlZmF1bHQ7XG4gICAgY2JBcHIuYm9yZGVyU3R5bGVIb3ZlcmVkID0gY2JBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgIGNiQXByLmJvcmRlclN0eWxlUHJlc3NlZCA9IGNiQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcblxuICAgIC8vYmFja2dyb3VuZFxuICAgIGNiQXByLmJhY2tncm91bmRDb2xvckRlZmF1bHQgPSAndHJhbnNwYXJlbnQnO1xuICAgIGNiQXByLmJhY2tncm91bmRDb2xvckZvY3VzZWQgPSAndHJhbnNwYXJlbnQnO1xuICAgIGNiQXByLmJhY2tncm91bmRDb2xvckhvdmVyZWQgPSAndHJhbnNwYXJlbnQnO1xuICAgIGNiQXByLmJhY2tncm91bmRDb2xvclByZXNzZWQgPSAndHJhbnNwYXJlbnQnO1xuXG4gICAgY2JBcHIuYmFja2dyb3VuZEJveFNoYWRvdyA9IG51bGw7Ly8gJzJweCAycHggNXB4ICByZ2JhKDAsIDAsIDAsIDAuNSknO1xuXG4gICAgLy9jYXB0aW9uXG4gICAgY2JBcHIuY2FwdGlvbiA9IENST1NTX01BUks7XG5cbiAgICBjYkFwci5jYXB0aW9uQ29sb3JEZWZhdWx0ID0gZkFwci5jYXB0aW9uQ2xvcjtcbiAgICBjYkFwci5jYXB0aW9uQ29sb3JGb2N1c2VkID0gZkFwci5jYXB0aW9uQ2xvcjtcbiAgICBjYkFwci5jYXB0aW9uQ29sb3JIb3ZlcmVkID0gZkFwci5jYXB0aW9uQ2xvcjtcbiAgICBjYkFwci5jYXB0aW9uQ29sb3JQcmVzc2VkID0gZkFwci5jYXB0aW9uQ2xvcjtcblxuICAgIGNiQXByLmNhcHRpb25TaGlmdFlweCA9IDE7XG4gICAgY2JBcHIuY2FwdGlvbkZvbnRSYXRpbyA9IDAuNjtcblxuICAgIHZhciBjbG9zZUJ0bkVsZSA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b24oY2JBcHIpO1xuICAgIHZhciBlbGVMZWZ0ID0gLTY7XG4gICAgdmFyIGVsZVRvcCA9IDM7XG4gICAgdmFyIGVsZUFsaWduID0gJ1JJR0hUX1RPUCc7XG5cbiAgICAvLyAnY2xvc2VCdXR0b24nIGlzIGEgc3BlY2lhbCBuYW1lXG4gICAgZkFwci5hZGRGcmFtZUNvbXBvbmVudCgnY2xvc2VCdXR0b24nLCBjbG9zZUJ0bkVsZSwgZWxlTGVmdCwgZWxlVG9wLCBlbGVBbGlnbik7XG5cbiAgICAvL2NvbmZpZ3VyZSBjbG9zZSBidXR0b24gYXBwZWFyYW5jZVtlbmRdLy8vLy8vLy8vLy8vLy9cblxuXG4gIH07XG4gIC8vXG5cblxuICByZXR1cm4gZkFwcjtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cy5nZXRTdHlsZSA9IGdldFN0eWxlO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1ByZXNldFN0eWxlWW9zZW1pdGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJyZXF1aXJlKCcuL1ByZXNldFN0eWxlWW9zZW1pdGUuY3NzJyk7XG52YXIgT2JqZWN0QXNzaWduZXIgPSByZXF1aXJlKCcuLi8uLi91dGlscy9PYmplY3RBc3NpZ25lci5qcycpO1xuXG5mdW5jdGlvbiBnZXRTdHlsZShmQXByLCB1c2VyUGFyYW0pIHtcblxuICB2YXIgc3JjUGFyYW0gPSB7XG4gICAgdGl0bGVCYXI6IHtcbiAgICAgIGdyZWVuQnV0dG9uOiAnbWF4aW1pemUnLC8vJ21heGltaXplJyBvciAnZnVsbHNjcmVlbidcbiAgICB9XG4gIH07XG5cbiAgdmFyIHBhcmFtID0gc3JjUGFyYW07XG5cbiAgaWYgKHVzZXJQYXJhbSkge1xuICAgIC8vcGFyYW09T2JqZWN0LmFzc2lnbih7fSxzcmNQYXJhbSwgdXNlclBhcmFtKTtcbiAgICBPYmplY3RBc3NpZ25lci5vYmplY3RBc3NpZ24oc3JjUGFyYW0sIHVzZXJQYXJhbSk7XG5cbiAgfVxuXG4gIGZBcHIuc2hvd1RpdGxlQmFyID0gdHJ1ZTtcbiAgZkFwci5zaG93Q2xvc2VCdXR0b24gPSB0cnVlO1xuXG4gIGZBcHIudGl0bGVCYXJDYXB0aW9uRm9udFNpemUgPSAnMTFweCc7XG4gIGZBcHIudGl0bGVCYXJDYXB0aW9uRm9udFdlaWdodCA9ICdub3JtYWwnO1xuICBmQXByLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW4gPSBudWxsO1xuICBmQXByLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRGVmYXVsdCA9ICcjNGQ0OTRkJztcbiAgZkFwci50aXRsZUJhckNhcHRpb25Db2xvckZvY3VzZWQgPSAnIzRkNDk0ZCc7XG5cbiAgZkFwci50aXRsZUJhckhlaWdodCA9ICcyNnB4JztcblxuICBmQXByLnRpdGxlQmFyQ29sb3JEZWZhdWx0ID0gbnVsbDtcbiAgZkFwci50aXRsZUJhckNvbG9yRm9jdXNlZCA9IG51bGw7XG5cbiAgZkFwci50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQgPSAnMXB4IHNvbGlkICNiMWFlYjEnO1xuICBmQXByLnRpdGxlQmFyQm9yZGVyQm90dG9tRm9jdXNlZCA9IGZBcHIudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0O1xuXG4gIGZBcHIuZnJhbWVCb3JkZXJSYWRpdXMgPSAnNnB4JztcblxuICAvL2JvcmRlciB3aWR0aFxuICBmQXByLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0ID0gJzFweCc7XG4gIGZBcHIuZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQgPSAnMXB4JztcblxuXG4gIC8vYm9yZGVyIGNvbG9yXG4gIGZBcHIuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQgPSAnI2FjYWNhYyc7XG4gIGZBcHIuZnJhbWVCb3JkZXJDb2xvckZvY3VzZWQgPSAnI2FjYWNhYyc7XG5cbiAgZkFwci5mcmFtZUJvcmRlclN0eWxlID0gJ3NvbGlkJztcblxuICAvL3dpbmRvdyBzaGFkb3dcbiAgZkFwci5mcmFtZUJveFNoYWRvdyA9ICcwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjMpJztcblxuICBmQXByLmZyYW1lQmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcblxuXG4gIGZBcHIuZnJhbWVDb21wb25lbnRzID0gbmV3IEFycmF5KCk7XG5cbiAgZkFwci5nZXRUaXRsZUJhclN0eWxlID0gZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAoZkFwci5mb2N1c2VkRnJhbWVPbmx5KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZUJhckNsYXNzTmFtZURlZmF1bHQ6ICdqc2ZyYW1lLXByZXNldC1zdHlsZS15b3NlbWl0ZS1mb2N1c2VkJyxcbiAgICAgICAgdGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkOiAnanNmcmFtZS1wcmVzZXQtc3R5bGUteW9zZW1pdGUtZm9jdXNlZCdcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdDogJ2pzZnJhbWUtcHJlc2V0LXN0eWxlLXlvc2VtaXRlLWRlZmF1bHQnLFxuICAgICAgICB0aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQ6ICdqc2ZyYW1lLXByZXNldC1zdHlsZS15b3NlbWl0ZS1mb2N1c2VkJ1xuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgZkFwci5vbkluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBwYXJ0c0J1aWxkZXIgPSBmQXByLmdldFBhcnRzQnVpbGRlcigpO1xuXG4gICAgdmFyIGltZ19kYXRhX2Nsb3NlX2hvdmVyZWQgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBb0FBQUFLQ0FZQUFBQ05Ncys5QUFBQVdFbEVRVlFvVTJOa0lCSXdFcW1PQWE2d2daV2xINlNwNGZlZlFqQ054a2RSeU1qQVVQQ2Y0ZjhDa0VKR0JzYUUvd3dNRTJBYVVheHVZR1dlRDFJQVVnalMwUEQ3YnlMTWFhUXJCTG1KS0t1SjlneWhZQ0k2SEFHbEZEQUxmOXM3ZVFBQUFBQkpSVTVFcmtKZ2dnPT0nO1xuICAgIHZhciBpbWdfZGF0YV9tYXhpbWl6ZV9ob3ZlcmVkID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQW9BQUFBS0NBWUFBQUNOTXMrOUFBQUFWRWxFUVZRb1UyTmtJQkl3b3F2aml4Rm9BSWw5V3ZJQlRNTUFoa0xlR1A3OUlNblBTejQ2a3E4UVpOMS9odi8ySUJNWUdSZ01RUFIvQm9ZTEVEN2pRWkF6d0ZZVHJSRFpMZFJ4STdLSlJBY1BydkFIQUFUWUtndkxIMGZBQUFBQUFFbEZUa1N1UW1DQyc7XG4gICAgaWYgKHBhcmFtLnRpdGxlQmFyLmdyZWVuQnV0dG9uID09PSAnZnVsbHNjcmVlbicpIHtcbiAgICAgIGltZ19kYXRhX21heGltaXplX2hvdmVyZWQgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBb0FBQUFLQ0FZQUFBQ05Ncys5QUFBQVpFbEVRVlFvVTJOa0lCSXdFcW1PQVVXaFFJS0F3TDgvLy9jek1EQVl3QXo0dE9RaldBMWNJVWpSaHdVZlBxQXJ4bERJRjhOL25vbUYwUkZkTVRhRi94a1lHQzZnSy82MDVLTWhpdFY4TWZ3Z2hTQ0FvaGhrQXk2RktJcGhuaUl2ZVBDRktRRHpHenNMUys3bjJBQUFBQUJKUlU1RXJrSmdnZz09JztcbiAgICB9XG4gICAgdmFyIGltZ19kYXRhX2RlbWF4aW1pemVfaG92ZXJlZCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFvQUFBQUtDQVlBQUFDTk1zKzlBQUFBaVVsRVFWUW9VMk5rd0FJRW9nUU1QaXo3Y0FGWmloR2JRdDRZL3YwTWpJd0xQeS8rc0FBbWoxTWhJd09EdzM5R3hrU1lZcndLUWFiQkZHTlZ5QmZMMS8vL1A2TUJ6RnJtZjR5RmpDQ0gvMlg2M3c5M0MrUC9DNThXZnlwRWR6dllSTjVZZ1FURy8vL25nNjFpWURqd2VjbEhSNndLa1JVVFZBaFR6UEQvZnp4ZUUyRldZUXRza0J3QUt3UTd0VmpBTDRNQUFBQUFTVVZPUks1Q1lJST0nO1xuICAgIHZhciBpbWdfZGF0YV9taW5pbWl6ZV9ob3ZlcmVkID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQW9BQUFBS0NBWUFBQUNOTXMrOUFBQUFNVWxFUVZRb1UyTmtJQkl3RXFtT2dVWUthN3c0R2hqK005aGpkUVlqdzhHV2JUOGF3RllUclpBWUQ5SElNOFJZRFFCc0VBd0xrcTRJQWdBQUFBQkpSVTVFcmtKZ2dnPT0nO1xuICAgIHZhciBpbWdfZGF0YV8xZG90X3RyYW5zcGFyZW50ID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQkNBWUFBQUFmRmNTSkFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBQkJKUkVGVWVOcGkrUC8vUHdOQWdBRUFDUHdDL3R1aVRSWUFBQUFBU1VWT1JLNUNZSUk9JztcbiAgICB2YXIgaW1nX3dpZHRoID0gMTA7XG4gICAgdmFyIGltZ19oZWlnaHQgPSAxMDtcbiAgICB2YXIgaW1nX3N0eWxlID0gJ21hcmdpbjowcHg7cGFkZGluZzowcHg7d2lkdGg6JyArIGltZ193aWR0aCArICdweDtoZWlnaHQ6JyArIGltZ19oZWlnaHQgKyAncHgnO1xuXG4gICAgdmFyIGltYWdlTWF4aW1pemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZU1heGltaXplLnNyYyA9IGltZ19kYXRhX21heGltaXplX2hvdmVyZWQ7XG4gICAgaW1hZ2VNYXhpbWl6ZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgaW1nX3N0eWxlKTtcblxuICAgIHZhciBpbWFnZURlbWF4aW1pemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZURlbWF4aW1pemUuc3JjID0gaW1nX2RhdGFfZGVtYXhpbWl6ZV9ob3ZlcmVkO1xuICAgIGltYWdlRGVtYXhpbWl6ZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgaW1nX3N0eWxlKTtcblxuICAgIC8vIHZhciBpbWFnZUZ1bGxTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAvLyBpbWFnZUZ1bGxTY3JlZW4uc3JjID0gaW1nX2RhdGFfbWF4aW1pemVfaG92ZXJlZDtcbiAgICAvLyBpbWFnZUZ1bGxTY3JlZW4uc2V0QXR0cmlidXRlKCdzdHlsZScsIGltZ19zdHlsZSk7XG5cbiAgICB2YXIgaW1hZ2VNaW5pbWl6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlTWluaW1pemUuc3JjID0gaW1nX2RhdGFfbWluaW1pemVfaG92ZXJlZDtcbiAgICBpbWFnZU1pbmltaXplLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBpbWdfc3R5bGUpO1xuXG4gICAgdmFyIGltYWdlQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZUNsb3NlLnNyYyA9IGltZ19kYXRhX2Nsb3NlX2hvdmVyZWQ7XG4gICAgaW1hZ2VDbG9zZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgaW1nX3N0eWxlKTtcblxuXG4gICAgdmFyIGltZ1RyYW5zcGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nVHJhbnNwYXJlbnQuc3JjID0gaW1nX2RhdGFfMWRvdF90cmFuc3BhcmVudDtcbiAgICBpbWdUcmFuc3BhcmVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21hcmdpbjowcHg7cGFkZGluZzowcHg7d2lkdGg6NnB4O2hlaWdodDo2cHgnKTtcblxuICAgIHtcbiAgICAgIC8vY29uZmlndXJlIGNsb3NlIGJ1dHRvbiBhcHBlYXJhbmNlW2JlZ2luXS8vLy8vLy8vLy8vLy8vXG5cblxuICAgICAgdmFyIGNiQXByID0gcGFydHNCdWlsZGVyLmJ1aWxkSW1hZ2VCdXR0b25BcHBlYXJhbmNlKCk7XG4gICAgICBjYkFwci5pbWFnZURlZmF1bHQgPSBpbWdUcmFuc3BhcmVudDtcbiAgICAgIGNiQXByLmltYWdlSG92ZXJlZCA9IGltYWdlQ2xvc2U7XG4gICAgICBjYkFwci5pbWFnZVByZXNzZWQgPSBpbWFnZUNsb3NlO1xuICAgICAgY2JBcHIuaW1hZ2VGb2N1c2VkID0gaW1nVHJhbnNwYXJlbnQ7XG4gICAgICBjYkFwci5zaXplID0gMTA7XG5cbiAgICAgIGNiQXByLmJvcmRlclJhZGl1cyA9IDU7XG4gICAgICBjYkFwci5ib3JkZXJXaWR0aCA9IDE7XG5cbiAgICAgIGNiQXByLmJvcmRlckNvbG9yRGVmYXVsdCA9ICcjYzZjNmM2JztcbiAgICAgIGNiQXByLmJvcmRlckNvbG9yRm9jdXNlZCA9ICcjZDM1MjRlJztcbiAgICAgIGNiQXByLmJvcmRlckNvbG9ySG92ZXJlZCA9IGNiQXByLmJvcmRlckNvbG9yRm9jdXNlZDtcbiAgICAgIGNiQXByLmJvcmRlckNvbG9yUHJlc3NlZCA9ICcjZTY0ODQyJztcblxuICAgICAgY2JBcHIuYm9yZGVyU3R5bGVEZWZhdWx0ID0gJ3NvbGlkJztcbiAgICAgIGNiQXByLmJvcmRlclN0eWxlRm9jdXNlZCA9IGNiQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgICAgIGNiQXByLmJvcmRlclN0eWxlSG92ZXJlZCA9IGNiQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgICAgIGNiQXByLmJvcmRlclN0eWxlUHJlc3NlZCA9IGNiQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcblxuICAgICAgLy9iYWNrZ3JvdW5kXG4gICAgICBjYkFwci5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0ID0gJyNkMGQwZDAnO1xuICAgICAgY2JBcHIuYmFja2dyb3VuZENvbG9yRm9jdXNlZCA9ICcjZmM2MTVjJztcbiAgICAgIGNiQXByLmJhY2tncm91bmRDb2xvckhvdmVyZWQgPSBjYkFwci5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkO1xuICAgICAgY2JBcHIuYmFja2dyb3VuZENvbG9yUHJlc3NlZCA9IGNiQXByLmJhY2tncm91bmRDb2xvckRlZmF1bHQ7XG4gICAgICBjYkFwci5zZXRTcmMoe1xuICAgICAgICBkZWZhdWx0OiBpbWdfZGF0YV8xZG90X3RyYW5zcGFyZW50LFxuICAgICAgICBmb2N1c2VkOiBpbWdfZGF0YV8xZG90X3RyYW5zcGFyZW50LFxuICAgICAgICBob3ZlcmVkOiBpbWdfZGF0YV9jbG9zZV9ob3ZlcmVkLFxuICAgICAgICBwcmVzc2VkOiBpbWdfZGF0YV9jbG9zZV9ob3ZlcmVkLFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBjbG9zZUJ0bkVsZSA9IHBhcnRzQnVpbGRlci5idWlsZEJ1dHRvbihjYkFwcik7XG4gICAgICB2YXIgZWxlTGVmdCA9IDg7XG4gICAgICB2YXIgZWxlVG9wID0gLTE5O1xuICAgICAgdmFyIGVsZUFsaWduID0gJ0xFRlRfVE9QJztcblxuICAgICAgLy8gJ2Nsb3NlQnV0dG9uJyBpcyBhIHNwZWNpYWwgbmFtZVxuICAgICAgZkFwci5hZGRGcmFtZUNvbXBvbmVudChwYXJhbS5jbG9zZUJ1dHRvbk5hbWUgfHwgJ2Nsb3NlQnV0dG9uJywgY2xvc2VCdG5FbGUsIGVsZUxlZnQsIGVsZVRvcCwgZWxlQWxpZ24pO1xuXG4gICAgICAvL3ByZXBhcmUgW21pbmltaXplIGJ1dHRvbl1cbiAgICAgIHZhciBtaW5CdG5BcHIgPSBwYXJ0c0J1aWxkZXIuYnVpbGRJbWFnZUJ1dHRvbkFwcGVhcmFuY2UoY2JBcHIpO1xuICAgICAgbWluQnRuQXByLmJvcmRlckNvbG9yRGVmYXVsdCA9ICcjYzZjNmM2JztcbiAgICAgIG1pbkJ0bkFwci5ib3JkZXJDb2xvckZvY3VzZWQgPSAnI2U2YjM0Nyc7XG4gICAgICBtaW5CdG5BcHIuYm9yZGVyQ29sb3JIb3ZlcmVkID0gbWluQnRuQXByLmJvcmRlckNvbG9yRm9jdXNlZDtcbiAgICAgIG1pbkJ0bkFwci5ib3JkZXJDb2xvclByZXNzZWQgPSAnI2UxYTEyZCc7XG4gICAgICBtaW5CdG5BcHIuYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9ICcjZDBkMGQwJztcbiAgICAgIG1pbkJ0bkFwci5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkID0gJyNmZGJlNDAnO1xuICAgICAgbWluQnRuQXByLmJhY2tncm91bmRDb2xvckhvdmVyZWQgPSBtaW5CdG5BcHIuYmFja2dyb3VuZENvbG9yRm9jdXNlZDtcbiAgICAgIG1pbkJ0bkFwci5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gbWluQnRuQXByLmJhY2tncm91bmRDb2xvckRlZmF1bHQ7XG4gICAgICBtaW5CdG5BcHIuaW1hZ2VEZWZhdWx0ID0gaW1nVHJhbnNwYXJlbnQ7XG4gICAgICBtaW5CdG5BcHIuaW1hZ2VIb3ZlcmVkID0gaW1hZ2VNaW5pbWl6ZTtcbiAgICAgIG1pbkJ0bkFwci5pbWFnZVByZXNzZWQgPSBpbWFnZU1pbmltaXplO1xuICAgICAgbWluQnRuQXByLmltYWdlRm9jdXNlZCA9IGltZ1RyYW5zcGFyZW50O1xuXG4gICAgICB2YXIgbWluQnRuRWxlID0gcGFydHNCdWlsZGVyLmJ1aWxkQnV0dG9uKG1pbkJ0bkFwcik7XG4gICAgICB2YXIgZGVtaW5pbWl6ZUJ0bkVsZSA9IHBhcnRzQnVpbGRlci5idWlsZEJ1dHRvbihtaW5CdG5BcHIpO1xuICAgICAgZGVtaW5pbWl6ZUJ0bkVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdmFyIGVsZUxlZnQgPSAyODtcbiAgICAgIHZhciBlbGVUb3AgPSAtMTk7XG4gICAgICB2YXIgZWxlQWxpZ24gPSAnTEVGVF9UT1AnO1xuICAgICAgZkFwci5hZGRGcmFtZUNvbXBvbmVudCgnbWluaW1pemVCdXR0b24nLCBtaW5CdG5FbGUsIGVsZUxlZnQsIGVsZVRvcCwgZWxlQWxpZ24pO1xuICAgICAgZkFwci5hZGRGcmFtZUNvbXBvbmVudCgnZGVtaW5pbWl6ZUJ1dHRvbicsIGRlbWluaW1pemVCdG5FbGUsIGVsZUxlZnQsIGVsZVRvcCwgZWxlQWxpZ24pO1xuXG5cbiAgICAgIC8vIHByZXBhcmUgW21heGltaXplIGJ1dHRvbl1cbiAgICAgIC8vY29uZmlndXJlIHpvb20gYnV0dG9uIGFwcGVhcmFuY2VbYmVnaW5dLy8vLy8vLy8vLy8vLy9cbiAgICAgIHZhciBtYXhCdG5BcHIgPSBwYXJ0c0J1aWxkZXIuYnVpbGRJbWFnZUJ1dHRvbkFwcGVhcmFuY2UoY2JBcHIpO1xuICAgICAgbWF4QnRuQXByLmJvcmRlckNvbG9yRGVmYXVsdCA9ICcjYzZjNmM2JztcbiAgICAgIG1heEJ0bkFwci5ib3JkZXJDb2xvckZvY3VzZWQgPSAnIzY3YjY1Nyc7XG4gICAgICBtYXhCdG5BcHIuYm9yZGVyQ29sb3JIb3ZlcmVkID0gbWF4QnRuQXByLmJvcmRlckNvbG9yRm9jdXNlZDtcbiAgICAgIG1heEJ0bkFwci5ib3JkZXJDb2xvclByZXNzZWQgPSAnIzAwYWYzOCc7XG4gICAgICBtYXhCdG5BcHIuYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9ICcjZDBkMGQwJztcbiAgICAgIG1heEJ0bkFwci5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkID0gJyMzNGNhNDknO1xuICAgICAgbWF4QnRuQXByLmJhY2tncm91bmRDb2xvckhvdmVyZWQgPSBtYXhCdG5BcHIuYmFja2dyb3VuZENvbG9yRm9jdXNlZDtcbiAgICAgIG1heEJ0bkFwci5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gbWF4QnRuQXByLmJhY2tncm91bmRDb2xvckRlZmF1bHQ7XG4gICAgICBtYXhCdG5BcHIuaW1hZ2VEZWZhdWx0ID0gaW1nVHJhbnNwYXJlbnQ7XG4gICAgICBtYXhCdG5BcHIuaW1hZ2VIb3ZlcmVkID0gaW1hZ2VNYXhpbWl6ZTtcbiAgICAgIG1heEJ0bkFwci5pbWFnZVByZXNzZWQgPSBpbWFnZU1heGltaXplO1xuICAgICAgbWF4QnRuQXByLmltYWdlRm9jdXNlZCA9IGltZ1RyYW5zcGFyZW50O1xuXG4gICAgICB2YXIgem9vbUJ0bkVsZSA9IHBhcnRzQnVpbGRlci5idWlsZEJ1dHRvbihtYXhCdG5BcHIpO1xuXG5cbiAgICAgIHZhciBkZW1heEJ0bkFwciA9IHBhcnRzQnVpbGRlci5idWlsZEltYWdlQnV0dG9uQXBwZWFyYW5jZShjYkFwcik7XG4gICAgICBkZW1heEJ0bkFwci5ib3JkZXJDb2xvckRlZmF1bHQgPSAnI2M2YzZjNic7XG4gICAgICBkZW1heEJ0bkFwci5ib3JkZXJDb2xvckZvY3VzZWQgPSAnIzY3YjY1Nyc7XG4gICAgICBkZW1heEJ0bkFwci5ib3JkZXJDb2xvckhvdmVyZWQgPSBkZW1heEJ0bkFwci5ib3JkZXJDb2xvckZvY3VzZWQ7XG4gICAgICBkZW1heEJ0bkFwci5ib3JkZXJDb2xvclByZXNzZWQgPSAnIzAwYWYzOCc7XG4gICAgICBkZW1heEJ0bkFwci5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0ID0gJyNkMGQwZDAnO1xuICAgICAgZGVtYXhCdG5BcHIuYmFja2dyb3VuZENvbG9yRm9jdXNlZCA9ICcjMzRjYTQ5JztcbiAgICAgIGRlbWF4QnRuQXByLmJhY2tncm91bmRDb2xvckhvdmVyZWQgPSBkZW1heEJ0bkFwci5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkO1xuICAgICAgZGVtYXhCdG5BcHIuYmFja2dyb3VuZENvbG9yUHJlc3NlZCA9IGRlbWF4QnRuQXByLmJhY2tncm91bmRDb2xvckRlZmF1bHQ7XG4gICAgICBkZW1heEJ0bkFwci5pbWFnZURlZmF1bHQgPSBpbWdUcmFuc3BhcmVudDtcbiAgICAgIGRlbWF4QnRuQXByLmltYWdlSG92ZXJlZCA9IGltYWdlRGVtYXhpbWl6ZTtcbiAgICAgIGRlbWF4QnRuQXByLmltYWdlUHJlc3NlZCA9IGltYWdlRGVtYXhpbWl6ZTtcbiAgICAgIGRlbWF4QnRuQXByLmltYWdlRm9jdXNlZCA9IGltZ1RyYW5zcGFyZW50O1xuICAgICAgdmFyIGRlbWF4QnRuRWxlID0gcGFydHNCdWlsZGVyLmJ1aWxkQnV0dG9uKGRlbWF4QnRuQXByKTtcbiAgICAgIGRlbWF4QnRuRWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgIHZhciBlbGVMZWZ0ID0gNDg7XG4gICAgICB2YXIgZWxlVG9wID0gLTE5O1xuICAgICAgdmFyIGVsZUFsaWduID0gJ0xFRlRfVE9QJztcblxuXG4gICAgICBmQXByLmFkZEZyYW1lQ29tcG9uZW50KCdkZXpvb21CdXR0b24nLCBkZW1heEJ0bkVsZSwgZWxlTGVmdCwgZWxlVG9wLCBlbGVBbGlnbik7XG4gICAgICBmQXByLmFkZEZyYW1lQ29tcG9uZW50KCd6b29tQnV0dG9uJywgem9vbUJ0bkVsZSwgZWxlTGVmdCwgZWxlVG9wLCBlbGVBbGlnbik7XG5cbiAgICAgIC8vY29uZmlndXJlIHpvb20gYnV0dG9uIGFwcGVhcmFuY2VbZW5kXS8vLy8vLy8vLy8vLy8vXG4gICAgfVxuICAgIC8vXG5cbiAgfTtcbiAgLy9cblxuICByZXR1cm4gZkFwcjtcbn1cblxubW9kdWxlLmV4cG9ydHMuZ2V0U3R5bGUgPSBnZXRTdHlsZTtcbiIsInZhciBtZXJnZURlZXBseSA9IHJlcXVpcmUoJ21lcmdlLWRlZXBseScpO1xuXG5mdW5jdGlvbiBnZXRQcmVzZXQocGFyYW0pIHtcblxuICB2YXIgcmVzdWx0ID0ge307XG4gIHJlc3VsdC5hcHBlYXJhbmNlTmFtZSA9ICd5b3NlbWl0ZSc7XG4gIHJlc3VsdC5hcHBlYXJhbmNlUGFyYW0gPSB7fTtcblxuICB2YXIgcHJlc2V0UGFyYW0gPSB7fTtcblxuICBpZiAocGFyYW0pIHtcbiAgICBwcmVzZXRQYXJhbSA9IHBhcmFtO1xuICB9XG5cbiAgdmFyIGlzRnVsbFNjcmVlbiA9IHByZXNldFBhcmFtLm1heGltaXplQnV0dG9uQmVoYXZpb3IgPT09ICdmdWxsc2NyZWVuJztcbiAgdmFyIG1pbmltaXplQnV0dG9uID0gcHJlc2V0UGFyYW0ubWluaW1pemVCdXR0b25CZWhhdmlvciA9PT0gJ21pbmltaXplJyA/ICdtaW5pbWl6ZUJ1dHRvbicgOiBudWxsO1xuICB2YXIgaGlkZUJ1dHRvbjEgPSBwcmVzZXRQYXJhbS5taW5pbWl6ZUJ1dHRvbkJlaGF2aW9yID09PSAnaGlkZScgPyAnbWluaW1pemVCdXR0b24nIDogbnVsbDtcbiAgdmFyIGhpZGVCdXR0b24yID0gcHJlc2V0UGFyYW0uY2xvc2VCdXR0b25CZWhhdmlvciA9PT0gJ2hpZGUnID8gJ2N1c3RvbS1jbG9zZS1idXR0b24nIDogbnVsbDtcbiAgdmFyIHdpbmRvd0NvbnRyb2xQYXJhbSA9IHByZXNldFBhcmFtLmNvbnRyb2w7XG5cbiAgdmFyIGNsb3NlQnV0dG9uTmFtZUJ5Q2xvc2VCdXR0b25CZWhhdmlvciA9IGhpZGVCdXR0b24yO1xuICB2YXIgY2xvc2VCdXR0b25OYW1lID0gcHJlc2V0UGFyYW0uY2xvc2VCdXR0b25OYW1lO1xuXG4gIGlmIChpc0Z1bGxTY3JlZW4pIHtcbiAgICByZXN1bHQuYXBwZWFyYW5jZVBhcmFtLnRpdGxlQmFyID0ge1xuICAgICAgZ3JlZW5CdXR0b246ICdmdWxsc2NyZWVuJywvLydtYXhpbWl6ZScgaWNvbiBvciAnZnVsbHNjcmVlbicgaWNvblxuICAgIH07XG4gIH1cbiAgLy8gU2V0IHRoaXMgdG8gJ2Nsb3NlQnV0dG9uJyB0byBhdXRvbWF0aWNhbGx5IGNsb3NlIHdoZW4gY2xpY2tpbmdcbiAgcmVzdWx0LmFwcGVhcmFuY2VQYXJhbS5jbG9zZUJ1dHRvbk5hbWUgPSBjbG9zZUJ1dHRvbk5hbWVCeUNsb3NlQnV0dG9uQmVoYXZpb3IgfHwgY2xvc2VCdXR0b25OYW1lIHx8ICdjbG9zZUJ1dHRvbic7XG5cbiAgcmVzdWx0LnNldHVwUHJlc2V0V2luZG93ID0gZnVuY3Rpb24oZnJhbWUpIHtcbiAgICB2YXIgZGVmYXVsdFdpbmRvd0NvbnRyb2xQYXJhbSA9IHtcbiAgICAgIG1heGltaXplQnV0dG9uOiAnem9vbUJ1dHRvbicsXG4gICAgICBtYXhpbWl6ZVBhcmFtOiB7XG4gICAgICAgIGZ1bGxTY3JlZW46IGlzRnVsbFNjcmVlbiwvLyB0cnVlOm1heGltaXplZCB3aXRob3V0IHRpdGxlIGJhcixmYWxzZTptYXhpbWl6ZWQgd2l0aCB0aXRsZSBiYXJcbiAgICAgICAgcmVzdG9yZUtleTogJ0VzY2FwZScsLy9TZXQga2V5IGNvZGUgZnJvbSBodHRwczovL3d3dy53My5vcmcvVFIvdWlldmVudHMtY29kZS8ja2V5Ym9hcmQta2V5LWNvZGVzXG4gICAgICB9LFxuXG4gICAgICBkZW1heGltaXplQnV0dG9uOiAnZGV6b29tQnV0dG9uJyxcbiAgICAgIGRlbWluaW1pemVCdXR0b246ICdkZW1pbmltaXplQnV0dG9uJyxcbiAgICAgIG1pbmltaXplQnV0dG9uOiBtaW5pbWl6ZUJ1dHRvbixcbiAgICAgIGhpZGVCdXR0b25zOiBbaGlkZUJ1dHRvbjEsIGhpZGVCdXR0b24yXSxcbiAgICAgIGhpZGVQYXJhbToge1xuICAgICAgICBhbGlnbjogJ0NFTlRFUl9DRU5URVInLC8vQUJTT0xVVEU6SWYgeW91IHdhbnQgdGhlIHdpbmRvdyB0byBkaXNhcHBlYXIgYWZ0ZXIgdHJhbnNpdGlvbmluZyB0byB0aGUgcG9zaXRpb24geW91IHNwZWNpZmllZFxuXG4gICAgICAgIGR1cmF0aW9uOiAzMDBcbiAgICAgIH0sXG4gICAgICBkZWhpZGVQYXJhbToge1xuICAgICAgICBkdXJhdGlvbjogMzAwXG4gICAgICB9LFxuICAgICAgc3R5bGVEaXNwbGF5OiAnaW5saW5lJyxcbiAgICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAxMDAsLy9UaGUgd2hvbGUgYW5pbWF0aW9uIGR1cmF0aW9uKG1pbGxpc2VjKVxuICAgIH07XG5cbiAgICBpZiAod2luZG93Q29udHJvbFBhcmFtKSB7XG4gICAgICBtZXJnZURlZXBseSh7IG9wOiAnb3ZlcndyaXRlLW1lcmdlJywgb2JqZWN0MTogZGVmYXVsdFdpbmRvd0NvbnRyb2xQYXJhbSwgb2JqZWN0Mjogd2luZG93Q29udHJvbFBhcmFtIH0pO1xuICAgIH1cblxuICAgIGZyYW1lLnNldENvbnRyb2woZGVmYXVsdFdpbmRvd0NvbnRyb2xQYXJhbSk7XG4gIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxubW9kdWxlLmV4cG9ydHMuZ2V0UHJlc2V0V2luZG93ID0gZ2V0UHJlc2V0O1xuIiwidmFyIENUaW1lciA9IHJlcXVpcmUoJy4vQ1RpbWVyLmpzJyk7XG5cbi8qKlxuICogQ1NpbXBsZUxheW91dEFuaW1hdG9yIGNsYXNzXG4gKiBDbGFzcyBmb3IgbW92aW5nIGFuaW1hdGlvbiDCtyBzY2FsaW5nIGFuaW1hdGlvbiBvZiBmcmFtZS5cbiAqIDxwPlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENTaW1wbGVMYXlvdXRBbmltYXRvcigpIHtcblxuICB0aGlzLmZwcyA9IDMwO1xuICB0aGlzLmR1cmF0aW9uTWlsbGlzID0gMjAwO1xuICB0aGlzLnRhcmdldEZyYW1lID0gbnVsbDtcblxuICB0aGlzLl9jcnJBbHBoYSA9IDEuMDtcbiAgdGhpcy5fdG9BbHBoYSA9IDEuMDtcblxuICAvL2N1cnJlbnQgd2lkdGgvaGVpZ2h0XG4gIHRoaXMuX2NycldpZHRoID0gMDtcbiAgdGhpcy5fY3JySGVpZ2h0ID0gMDtcbiAgdGhpcy5fdG9XaWR0aCA9IDA7XG4gIHRoaXMuX3RvSGVpZ2h0ID0gMDtcblxuICAvL2N1cnJlbnQgcG9zaXRpb24oeCx5KVxuICAvL3RoaXMuX2NyclggPSAwO1xuICAvL3RoaXMuX2NyclkgPSAwO1xuICB0aGlzLl90b1ggPSAwO1xuICB0aGlzLl90b1kgPSAwO1xuXG5cbiAgdGhpcy5waW5uZWRBbmltYXRpb25FbmFibGVkID0gZmFsc2U7XG4gIHRoaXMuX3BpblggPSAwO1xuICB0aGlzLl9waW5ZID0gMDtcbiAgdGhpcy5fcGluQW5jaG9yID0gbnVsbDtcblxufVxuXG4vKipcbiAqIFNldCBDSUZyYW1lIG9iamVjdCB0byBiZSByZXNpemVkXG4gKiBAcGFyYW0gY2lmcmFtZVxuICogQHJldHVybnMgeyp9XG4gKi9cbkNTaW1wbGVMYXlvdXRBbmltYXRvci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oY2lmcmFtZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS50YXJnZXRGcmFtZSA9IGNpZnJhbWU7XG5cblxuICBtZS5mcm9tV2lkdGgoY2lmcmFtZS5nZXRXaWR0aCgpKTtcbiAgbWUuZnJvbUhlaWdodChjaWZyYW1lLmdldEhlaWdodCgpKTtcblxuICBtZS50b1dpZHRoKGNpZnJhbWUuZ2V0V2lkdGgoKSk7XG4gIG1lLnRvSGVpZ2h0KGNpZnJhbWUuZ2V0SGVpZ2h0KCkpO1xuXG4gIHZhciBjcnJQb3MgPSBjaWZyYW1lLmdldFBvc2l0aW9uKCk7XG5cbiAgbWUuZnJvbVBvc2l0aW9uKGNyclBvcy54LCBjcnJQb3MueSwgY3JyUG9zLmFuY2hvcik7XG5cblxuICByZXR1cm4gbWU7XG5cbn07XG5cbi8qKlxuICogR2V0IENJRnJhbWUgb2JqZWN0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgcmV0dXJuIG1lLnRhcmdldEZyYW1lO1xufTtcblxuLyoqXG4gKiBTZXQgYW5pbWF0aW9uIGR1cmF0aW9uIHRpbWUgbWlsbGlzXG4gKiBAcGFyYW0gZHVyYXRpb25NaWxsaXNcbiAqIEByZXR1cm5zIHsqfVxuICovXG5DU2ltcGxlTGF5b3V0QW5pbWF0b3IucHJvdG90eXBlLnNldER1cmF0aW9uID0gZnVuY3Rpb24oZHVyYXRpb25NaWxsaXMpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICBtZS5kdXJhdGlvbk1pbGxpcyA9IGR1cmF0aW9uTWlsbGlzO1xuICByZXR1cm4gbWU7XG59O1xuXG4vKipcbiAqIFNldCBleHBlY3RlZCBGUFNcbiAqIEBwYXJhbSBmcHNcbiAqIEByZXR1cm5zIHsqfVxuICovXG5DU2ltcGxlTGF5b3V0QW5pbWF0b3IucHJvdG90eXBlLnNldEZQUyA9IGZ1bmN0aW9uKGZwcykge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5mcHMgPSBmcHM7XG4gIHJldHVybiBtZTtcbn07XG5cbi8qKlxuICogU2V0IFBJTiBwb3NpdGlvblxuICogQHBhcmFtIHhcbiAqIEBwYXJhbSB5XG4gKiBAcGFyYW0gYW5jaG9yIFBvc2l0aW9uIHdoZXJlIGFuaW1hdGlvbiBzdGFydHMgZnJvbS5FeHBlY3RlZCBwYXJhbWV0ZXJzIGFzIGZvbGxvd3MuXG4gJ0xFRlRfVE9QJzpEZWZhdWx0LlNwZWNpZnkgdGhlIHBvc2l0aW9uIHN0YXJ0aW5nIGZyb20gdGhlIHVwcGVyIGxlZnQuXG4gJ0NFTlRFUl9UT1AnXG4gJ1JJR0hUX1RPUCdcbiAnTEVGVF9DRU5URVInXG4gJ0NFTlRFUl9DRU5URVInXG4gJ1JJR0hUX0NFTlRFUidcbiAnTEVGVF9CT1RUT00nXG4gJ0NFTlRFUl9CT1RUT00nXG4gJ1JJR0hUX0JPVFRPTSdcbiAqIEByZXR1cm5zIHsqfVxuICovXG5DU2ltcGxlTGF5b3V0QW5pbWF0b3IucHJvdG90eXBlLmZyb21Qb3NpdGlvbiA9IGZ1bmN0aW9uKHgsIHksIGFuY2hvcikge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5waW5uZWRBbmltYXRpb25FbmFibGVkID0gdHJ1ZTtcblxuICBtZS5fcGluWCA9IHg7XG4gIG1lLl9waW5ZID0geTtcblxuICBtZS50b1Bvc2l0aW9uKHgsIHkpO1xuXG4gIGlmIChhbmNob3IpIHtcbiAgICBtZS5fcGluQW5jaG9yID0gYW5jaG9yO1xuICB9XG4gIHJldHVybiBtZTtcbn07XG4vKipcbiAqIFNldCByZXNpemVGcm9tIHdpZHRoXG4gKiBAcGFyYW0gZnJvbVdpZHRoXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS5mcm9tV2lkdGggPSBmdW5jdGlvbihmcm9tV2lkdGgpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUuX2NycldpZHRoID0gZnJvbVdpZHRoO1xuXG4gIHJldHVybiBtZTtcbn07XG5cbi8qKlxuICogU2V0IHJlc2l6ZUZyb20gaGVpZ2h0XG4gKiBAcGFyYW0gZnJvbUhlaWdodFxuICogQHJldHVybnMgeyp9XG4gKi9cbkNTaW1wbGVMYXlvdXRBbmltYXRvci5wcm90b3R5cGUuZnJvbUhlaWdodCA9IGZ1bmN0aW9uKGZyb21IZWlnaHQpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUuX2NyckhlaWdodCA9IGZyb21IZWlnaHQ7XG5cbiAgcmV0dXJuIG1lO1xufTtcblxuLyoqXG4gKiBTZXQgcmVzaXplVG8gd2lkdGhcbiAqIEBwYXJhbSB0b1dpZHRoXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS50b1dpZHRoID0gZnVuY3Rpb24odG9XaWR0aCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5fdG9XaWR0aCA9IHRvV2lkdGg7XG5cbiAgcmV0dXJuIG1lO1xufTtcblxuLyoqXG4gKiBTZXQgcmVzaXplVG8gaGVpZ2h0XG4gKiBAcGFyYW0gdG9IZWlnaHRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5DU2ltcGxlTGF5b3V0QW5pbWF0b3IucHJvdG90eXBlLnRvSGVpZ2h0ID0gZnVuY3Rpb24odG9IZWlnaHQpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUuX3RvSGVpZ2h0ID0gdG9IZWlnaHQ7XG4gIHJldHVybiBtZTtcbn07XG5cbi8qKlxuICogU2V0IGZyb20gYWxwaGFcbiAqIEBwYXJhbSBmcm9tQWxwaGFcbiAqIEByZXR1cm5zIHsqfVxuICovXG5DU2ltcGxlTGF5b3V0QW5pbWF0b3IucHJvdG90eXBlLmZyb21BbHBoYSA9IGZ1bmN0aW9uKGZyb21BbHBoYSkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5fY3JyQWxwaGEgPSBmcm9tQWxwaGE7XG5cbiAgcmV0dXJuIG1lO1xufTtcblxuLyoqXG4gKiBTZXQgdG8gYWxwaGFcbiAqIEBwYXJhbSB0b0FscGhhXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS50b0FscGhhID0gZnVuY3Rpb24odG9BbHBoYSkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5fdG9BbHBoYSA9IHRvQWxwaGE7XG5cbiAgcmV0dXJuIG1lO1xufTtcblxuLyoqXG4gKiBHZXQgQ0lGcmFtZSBvYmplY3RcbiAqIEByZXR1cm5zIHsqfVxuICovXG5DU2ltcGxlTGF5b3V0QW5pbWF0b3IucHJvdG90eXBlLmVhc2UgPSBmdW5jdGlvbihlYXNlKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIG1lLl9lYXNlPWVhc2U7XG4gIHJldHVybiBtZTtcbn07XG5cbi8qKlxuICogU2V0IG1vdmUgdG8gcG9zaXRpb25cbiAqIEBwYXJhbSB4XG4gKiBAcGFyYW0geVxuICogQHJldHVybnMgeyp9XG4gKi9cbkNTaW1wbGVMYXlvdXRBbmltYXRvci5wcm90b3R5cGUudG9Qb3NpdGlvbiA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUuX3RvWCA9IHg7XG4gIG1lLl90b1kgPSB5O1xuICByZXR1cm4gbWU7XG59O1xuXG4vKipcbiAqIFNldCBtb3ZlIHRvIHhcbiAqIEBwYXJhbSB4XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS50b1ggPSBmdW5jdGlvbih4KSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIG1lLl90b1ggPSB4O1xuICByZXR1cm4gbWU7XG59O1xuXG4vKipcbiAqIFNldCBtb3ZlIHRvIHlcbiAqIEBwYXJhbSB0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS50b1kgPSBmdW5jdGlvbih0KSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIG1lLl90b1kgPSB0O1xuICByZXR1cm4gbWU7XG59O1xuXG5cbkNTaW1wbGVMYXlvdXRBbmltYXRvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbih3YWl0TWlsbGlzLCByZXF1ZXN0Rm9jdXNFbmFibGVkKSB7XG5cblxuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciBmcm9tV2lkdGggPSBtZS5fY3JyV2lkdGg7XG4gIHZhciBmcm9tSGVpZ2h0ID0gbWUuX2NyckhlaWdodDtcblxuICB2YXIgZnJvbVggPSBtZS5fcGluWDtcbiAgdmFyIGZyb21ZID0gbWUuX3Bpblk7XG5cbiAgdmFyIGZyb21BbHBoYSA9IG1lLl9jcnJBbHBoYTtcblxuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblxuXG4gICAgdmFyIG51bU9mU3RlcHMgPSBwYXJzZUludChtZS5mcHMgKiAobWUuZHVyYXRpb25NaWxsaXMgLyAxMDAwKSk7XG4gICAgaWYgKG51bU9mU3RlcHMgPT0gMCkge1xuICAgICAgbnVtT2ZTdGVwcyA9IDE7XG4gICAgfVxuXG4gICAgdmFyIGRlbHRhV2lkdGggPSAobWUuX3RvV2lkdGggLSBmcm9tV2lkdGgpIC8gbnVtT2ZTdGVwcztcbiAgICB2YXIgZGVsdGFIZWlnaHQgPSAobWUuX3RvSGVpZ2h0IC0gZnJvbUhlaWdodCkgLyBudW1PZlN0ZXBzO1xuXG4gICAgdmFyIGRlbHRhWCA9IChtZS5fdG9YIC0gZnJvbVgpIC8gbnVtT2ZTdGVwcztcbiAgICB2YXIgZGVsdGFZID0gKG1lLl90b1kgLSBmcm9tWSkgLyBudW1PZlN0ZXBzO1xuXG4gICAgdmFyIGRlbHRhQWxwaGEgPSAobWUuX3RvQWxwaGEgLSBmcm9tQWxwaGEpIC8gbnVtT2ZTdGVwcztcbiAgICBpZihtZS5fZWFzZSl7XG4gICAgICBkZWx0YUFscGhhPWRlbHRhQWxwaGEvMS4yNDtcbiAgICB9XG5cbiAgICB2YXIgdW5pdE1pbGxpcyA9IG1lLmR1cmF0aW9uTWlsbGlzIC8gbnVtT2ZTdGVwcztcblxuICAgIHZhciBpZHggPSAwO1xuXG5cbiAgICBmdW5jdGlvbiBsb29wKCkge1xuICAgICAgdmFyIHRpbWVyID0gbmV3IENUaW1lcigpO1xuXG4gICAgICB0aW1lci5zZXRJbnRlcnZhbE1pbGxpcyh1bml0TWlsbGlzKTtcblxuICAgICAgdGltZXIuc2V0Q2FsbGJhY2soZnVuY3Rpb24odGltZXIpIHtcblxuICAgICAgICBpZiAoaWR4ID09IG51bU9mU3RlcHMpIHtcblxuICAgICAgICAgIHZhciBfd2lkdGggPSBtZS5fdG9XaWR0aDtcbiAgICAgICAgICB2YXIgX2hlaWdodCA9IG1lLl90b0hlaWdodDtcblxuICAgICAgICAgIHZhciBfeCA9IGZyb21YICsgZGVsdGFYICogaWR4O1xuICAgICAgICAgIHZhciBfeSA9IGZyb21ZICsgZGVsdGFZICogaWR4O1xuXG4gICAgICAgICAgdmFyIF9hbHBoYSA9IG1lLl90b0FscGhhO1xuXG4gICAgICAgICAgaWYgKG1lLnBpbm5lZEFuaW1hdGlvbkVuYWJsZWQpIHtcbiAgICAgICAgICAgIC8vbWUudGFyZ2V0RnJhbWUuX3NldFBvc2l0aW9uSW50ZXJuYWxseShtZS5fcGluWCwgbWUuX3BpblksIG1lLl9waW5BbmNob3IsIF93aWR0aCwgX2hlaWdodCk7XG5cbiAgICAgICAgICAgIG1lLnRhcmdldEZyYW1lLl9zZXRQb3NpdGlvbkludGVybmFsbHkoX3gsIF95LCBtZS5fcGluQW5jaG9yLCBfd2lkdGgsIF9oZWlnaHQpO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgaWYgKG1lLnRhcmdldEZyYW1lLmh0bWxFbGVtZW50LnN0eWxlKSB7XG4gICAgICAgICAgICBtZS50YXJnZXRGcmFtZS5odG1sRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gX2FscGhhO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vbWUudGFyZ2V0RnJhbWUucmVzaXplRGlyZWN0KF93aWR0aCwgX2hlaWdodCxmYWxzZSk7XG4gICAgICAgICAgbWUudGFyZ2V0RnJhbWUuc2V0U2l6ZShfd2lkdGgsIF9oZWlnaHQsIHRydWUpO1xuXG4gICAgICAgICAgbWUuX2NycldpZHRoID0gX3dpZHRoO1xuICAgICAgICAgIG1lLl9jcnJIZWlnaHQgPSBfaGVpZ2h0O1xuXG4gICAgICAgICAgbWUuX3BpblggPSBfeDtcbiAgICAgICAgICBtZS5fcGluWSA9IF95O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlkeCA9PSAobnVtT2ZTdGVwcyArIDEpKSB7XG4gICAgICAgICAgLy9TdG9wIHRpbWVyIGFmdGVyIGxhc3QgZHJhdyB1cGRhdGUuXG4gICAgICAgICAgdGltZXIuc3RvcFRpbWVyKCk7XG5cbiAgICAgICAgICBpZiAobWUudGFyZ2V0RnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgICAgICAgIG1lLnRhcmdldEZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBtZS5fdG9BbHBoYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZShtZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICB2YXIgX3dpZHRoID0gZnJvbVdpZHRoICsgZGVsdGFXaWR0aCAqIGlkeDtcbiAgICAgICAgdmFyIF9oZWlnaHQgPSBmcm9tSGVpZ2h0ICsgZGVsdGFIZWlnaHQgKiBpZHg7XG5cbiAgICAgICAgdmFyIF94ID0gZnJvbVggKyBkZWx0YVggKiBpZHg7XG4gICAgICAgIHZhciBfeSA9IGZyb21ZICsgZGVsdGFZICogaWR4O1xuXG4gICAgICAgIHZhciBfYWxwaGEgPSBmcm9tQWxwaGEgKyBkZWx0YUFscGhhICogaWR4O1xuXG4gICAgICAgIGlmIChtZS5waW5uZWRBbmltYXRpb25FbmFibGVkKSB7XG4gICAgICAgICAgLy9tZS50YXJnZXRGcmFtZS5fc2V0UG9zaXRpb25JbnRlcm5hbGx5KG1lLl9waW5YLCBtZS5fcGluWSwgbWUuX3BpbkFuY2hvciwgX3dpZHRoLCBfaGVpZ2h0KTtcbiAgICAgICAgICBtZS50YXJnZXRGcmFtZS5fc2V0UG9zaXRpb25JbnRlcm5hbGx5KF94LCBfeSwgbWUuX3BpbkFuY2hvciwgX3dpZHRoLCBfaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS50YXJnZXRGcmFtZS5odG1sRWxlbWVudC5zdHlsZSkge1xuICAgICAgICAgIG1lLnRhcmdldEZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBfYWxwaGE7XG4gICAgICAgIH1cblxuICAgICAgICAvL21lLnRhcmdldEZyYW1lLnJlc2l6ZURpcmVjdChfd2lkdGgsIF9oZWlnaHQsZmFsc2UpO1xuICAgICAgICBtZS50YXJnZXRGcmFtZS5zZXRTaXplKF93aWR0aCwgX2hlaWdodCwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKGlkeCA9PSAwKSB7XG5cbiAgICAgICAgICAvL2NoZWNrIHdpbmRvdyBleGlzdGVuY2VcbiAgICAgICAgICB2YXIgd21nciA9IG1lLnRhcmdldEZyYW1lLnBhcmVudENhbnZhcztcbiAgICAgICAgICBpZiAod21ncikge1xuICAgICAgICAgICAgdmFyIF90YXJnZXRGcmFtZSA9IHdtZ3IuZ2V0V2luZG93KG1lLnRhcmdldEZyYW1lLmlkKTtcbiAgICAgICAgICAgIGlmIChfdGFyZ2V0RnJhbWUpIHtcbiAgICAgICAgICAgICAgbWUudGFyZ2V0RnJhbWUuc2hvdyh7IHJlcXVlc3RGb2N1czogcmVxdWVzdEZvY3VzRW5hYmxlZCB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vdGhlIHRhcmdldCB3aW5kb3cgbXVzdCBiZSBkZWxldGVkLlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlkeCsrO1xuICAgICAgfSk7XG5cblxuICAgICAgdGltZXIuc3RhcnRUaW1lcigpO1xuICAgIH1cblxuICAgIGlmICh3YWl0TWlsbGlzKSB7XG5cbiAgICAgIHZhciB3YWl0ZXIgPSBuZXcgQ1RpbWVyKCk7XG4gICAgICB3YWl0ZXIuc2V0SW50ZXJ2YWxNaWxsaXMod2FpdE1pbGxpcyk7XG4gICAgICB3YWl0ZXIuc2V0Q2FsbGJhY2soZnVuY3Rpb24oX3RpbWVyKSB7XG4gICAgICAgIF90aW1lci5zdG9wVGltZXIoKTtcblxuICAgICAgICBsb29wKCk7XG4gICAgICB9KTtcbiAgICAgIHdhaXRlci5zdGFydFRpbWVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvb3AoKTtcbiAgICB9XG5cblxuICB9KTtcblxufTsvL3N0YXJ0XG5cbi8qKlxuICogZW5kIG9mIENTaW1wbGVMYXlvdXRBbmltYXRvciBjbGFzc1xuICovXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IENTaW1wbGVMYXlvdXRBbmltYXRvcjtcbiIsIi8qKlxuICogQ1RpbWVyIGNsYXNzPGJyPlxuICpcbiAqIEhvdyB0byB1c2U6XG4gKiAgdmFyIHRpbWVyID0gbmV3IENUaW1lcigpO1xuICogICAgdmFyIHZhbHVlID0gMDtcbiAqXG4gKiAgICB0aW1lci5zZXRDYWxsYmFjayhmdW5jdGlvbiAodGltZXJPYmopIHtcbiAqICAgICAgICB2YWx1ZSsrO1xuICogICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAqICAgICAgICBpZiAodmFsdWUgPT0gMTAwKSB7XG4gKiAgICAgICAgICAgIHRpbWVyT2JqLnN0b3BUaW1lcigpO1xuICogICAgICAgIH1cbiAqICAgIH0pO1xuICogICAgdGltZXIuc2V0SW50ZXJ2YWxNaWxsaXMoMTAwKTtcbiAqICAgIHRpbWVyLnN0YXJ0VGltZXIoKTtcbiAqXG4gKiBAYXV0aG9yIFRvbSBNaXNhd2EgKHJpdmVyc3VuLm9yZ0BnbWFpbC5jb20pXG4gKi9cbnZhciBDVGltZXIgPVxuICAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQ1RpbWVyKCkge1xuICAgICAgdmFyIG1lID0gdGhpcztcblxuICAgICAgbWUuX3RpbWVySWQgPSBudWxsO1xuICAgICAgbWUuX2lzUnVubmluZyA9IGZhbHNlO1xuICAgICAgbWUuX3RpbWVySW50ZXJ2YWwgPSAwO1xuXG4gICAgICBtZS5faW50ZXJuYWxDYWxsYmFjayA9IF9pbnRlcm5hbENhbGxiYWNrO1xuICAgICAgbWUuX3RpbWVyTWV0aG9kID0gbnVsbDtcblxuXG4gICAgICBmdW5jdGlvbiBfaW50ZXJuYWxDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKG1lLl90aW1lck1ldGhvZCkge1xuICAgICAgICAgIG1lLl90aW1lck1ldGhvZChtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lLl9pc1J1bm5pbmcpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQobWUuX3RpbWVySWQpO1xuICAgICAgICAgIG1lLl90aW1lcklkID0gc2V0VGltZW91dChtZS5faW50ZXJuYWxDYWxsYmFjaywgbWUuX3RpbWVySW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ1RpbWVyLnByb3RvdHlwZS5zZXRDYWxsYmFjayA9IGZ1bmN0aW9uKGNhbGxiYWNrX2Z1bmMpIHtcbiAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICBtZS5fdGltZXJNZXRob2QgPSBjYWxsYmFja19mdW5jO1xuICAgICAgcmV0dXJuIG1lO1xuICAgIH07XG5cbiAgICBDVGltZXIucHJvdG90eXBlLnNldEludGVydmFsTWlsbGlzID0gZnVuY3Rpb24oaW50ZXJ2YWwpIHtcbiAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICBtZS5fdGltZXJJbnRlcnZhbCA9IGludGVydmFsO1xuICAgICAgcmV0dXJuIG1lO1xuICAgIH07XG5cbiAgICBDVGltZXIucHJvdG90eXBlLnN0b3BUaW1lciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgIG1lLl9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgIHJldHVybiBtZTtcbiAgICB9O1xuXG4gICAgQ1RpbWVyLnByb3RvdHlwZS5zdGFydFRpbWVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgaWYgKG1lLl90aW1lckludGVydmFsID4gMCkge1xuICAgICAgICBtZS5fdGltZXJJZCA9IHNldFRpbWVvdXQobWUuX2ludGVybmFsQ2FsbGJhY2ssIG1lLl90aW1lckludGVydmFsKTtcbiAgICAgICAgbWUuX2lzUnVubmluZyA9IHRydWU7XG5cbiAgICAgIH1cbiAgICAgIHJldHVybiBtZTtcbiAgICB9O1xuXG5cbiAgICByZXR1cm4gQ1RpbWVyO1xuICB9KSgpO1xuLyoqXG4gKiBlbmQgb2YgQ1RpbWVyIGNsYXNzXG4gKi9cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxubW9kdWxlLmV4cG9ydHMgPSBDVGltZXI7XG4iLCIvKipcbiAqIEluaGVyaXRhbmNlIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHN1YkNsYXNzXG4gKiBAcGFyYW0gYmFzZUNsYXNzXG4gKi9cbmZ1bmN0aW9uIGluaGVyaXQoc3ViQ2xhc3MsIGJhc2VDbGFzcykge1xuXG4gIGZ1bmN0aW9uIGNsYXp6KCkge1xuICB9XG5cbiAgY2xhenoucHJvdG90eXBlID0gYmFzZUNsYXNzLnByb3RvdHlwZTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gbmV3IGNsYXp6KCk7XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLnN1cGVyQ29uc3RydWN0b3IgPSBiYXNlQ2xhc3M7XG4gIHN1YkNsYXNzLnN1cGVyQ2xhc3MgPSBiYXNlQ2xhc3MucHJvdG90eXBlO1xuXG59XG5cbi8qKlxuICogRW5kIG9mIGluaGVyaXRhbmNlIGZ1bmN0aW9uXG4gKi9cblxuLy8rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstXG5cbm1vZHVsZS5leHBvcnRzID0gaW5oZXJpdDsiLCJ2YXIgX3R5cGVvZiA9XG4gICAgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCJcbiAgICAgICAgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICAgICAgfVxuICAgICAgICA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBvYmogJiZcbiAgICAgICAgICAgIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgICAgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiZcbiAgICAgICAgICAgIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZVxuICAgICAgICAgICAgICAgID8gXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgIDogdHlwZW9mIG9iajtcbiAgICAgICAgfTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBpdGVtICYmXG4gICAgICAgICh0eXBlb2YgaXRlbSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGl0ZW0pKSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAhQXJyYXkuaXNBcnJheShpdGVtKVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIG9iamVjdEFzc2lnbih0YXJnZXQpIHtcbiAgICBmb3IgKFxuICAgICAgICB2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBzb3VyY2VzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLFxuICAgICAgICAgICAgX2tleSA9IDE7XG4gICAgICAgIF9rZXkgPCBfbGVuO1xuICAgICAgICBfa2V5KytcbiAgICApIHtcbiAgICAgICAgc291cmNlc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgcmV0dXJuIHRhcmdldDtcbiAgICB2YXIgc291cmNlID0gc291cmNlcy5zaGlmdCgpO1xuXG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkgT2JqZWN0LmFzc2lnbih0YXJnZXQsIF9kZWZpbmVQcm9wZXJ0eSh7fSwga2V5LCB7fSkpO1xuICAgICAgICAgICAgICAgIG9iamVjdEFzc2lnbih0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgX2RlZmluZVByb3BlcnR5KHt9LCBrZXksIHNvdXJjZVtrZXldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdEFzc2lnbi5hcHBseSh1bmRlZmluZWQsIFt0YXJnZXRdLmNvbmNhdChzb3VyY2VzKSk7XG59XG5cblxuXG5tb2R1bGUuZXhwb3J0cy5vYmplY3RBc3NpZ24gPSBvYmplY3RBc3NpZ247XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDU2ltcGxlTGF5b3V0QW5pbWF0b3IgPSByZXF1aXJlKCcuL0NTaW1wbGVMYXlvdXRBbmltYXRvci5qcycpO1xudmFyIENBTElHTiA9IHJlcXVpcmUoJy4uL0NDb21tb24uanMnKTtcbnZhciBtZXJnZURlZXBseSA9IHJlcXVpcmUoJ21lcmdlLWRlZXBseScpO1xudmFyIEV2ZW50TGlzdGVuZXJIZWxwZXIgPSByZXF1aXJlKCdldmVudC1saXN0ZW5lci1oZWxwZXInKTtcblxuZnVuY3Rpb24gV2luZG93RXZlbnRIZWxwZXIobW9kZWwpIHtcblxuICB0aGlzLmV2ZW50TGlzdGVuZXJIZWxwZXIgPSBuZXcgRXZlbnRMaXN0ZW5lckhlbHBlcigpO1xuICB0aGlzLndpbmRvd01vZGUgPSAnZGVmYXVsdCc7XG4gIHRoaXMuc3R5bGVEaXNwbGF5ID0gJ2ZsZXgnO1xuICB0aGlzLmhvcml6b250YWxBbGlnbiA9ICdsZWZ0JztcbiAgdGhpcy52ZXJ0aWNhbEFsaWduID0gJ3RvcCc7XG5cbiAgdGhpcy5rZXlMaXN0ZW5lciA9IG51bGw7XG5cbiAgdGhpcy5taW5pbWl6ZUJ1dHRvbiA9IG51bGw7XG4gIHRoaXMubWF4aW1pemVCdXR0b24gPSBudWxsO1xuICB0aGlzLmRlbWF4aW1pemVCdXR0b24gPSBudWxsO1xuICB0aGlzLmRlbWluaW1pemVCdXR0b24gPSBudWxsO1xuXG4gIHRoaXMub3B0cyA9IG1vZGVsO1xuXG4gIHRoaXMuaXNXaW5kb3dNYW5hZ2VyRml4ZWQgPSBtb2RlbC5mcmFtZS5qc0ZyYW1lLmlzV2luZG93TWFuYWdlckZpeGVkO1xuXG4gIGlmIChtb2RlbC5zdHlsZURpc3BsYXkpIHtcbiAgICB0aGlzLnN0eWxlRGlzcGxheSA9IG1vZGVsLnN0eWxlRGlzcGxheTtcbiAgfVxuICBpZiAobW9kZWwubWluaW1pemVCdXR0b24pIHtcbiAgICB0aGlzLm1pbmltaXplQnV0dG9uID0gbW9kZWwubWluaW1pemVCdXR0b247XG4gIH1cbiAgaWYgKG1vZGVsLmRlbWluaW1pemVCdXR0b24pIHtcbiAgICB0aGlzLmRlbWluaW1pemVCdXR0b24gPSBtb2RlbC5kZW1pbmltaXplQnV0dG9uO1xuICB9XG4gIGlmIChtb2RlbC5tYXhpbWl6ZUJ1dHRvbikge1xuICAgIHRoaXMubWF4aW1pemVCdXR0b24gPSBtb2RlbC5tYXhpbWl6ZUJ1dHRvbjtcbiAgfVxuICBpZiAobW9kZWwuZGVtYXhpbWl6ZUJ1dHRvbikge1xuICAgIHRoaXMuZGVtYXhpbWl6ZUJ1dHRvbiA9IG1vZGVsLmRlbWF4aW1pemVCdXR0b247XG4gIH1cblxuICBpZiAobW9kZWwuaGlkZUJ1dHRvbikge1xuICAgIHRoaXMuaGlkZUJ1dHRvbiA9IG1vZGVsLmhpZGVCdXR0b247XG4gIH1cbiAgaWYgKG1vZGVsLmhpZGVCdXR0b25zKSB7XG4gICAgdGhpcy5oaWRlQnV0dG9ucyA9IG1vZGVsLmhpZGVCdXR0b25zO1xuICB9XG5cbiAgdGhpcy5tYXhpbWl6ZVBhcmFtID0gbW9kZWwubWF4aW1pemVQYXJhbTtcbiAgdGhpcy5kZW1heGltaXplUGFyYW0gPSBtb2RlbC5kZW1heGltaXplUGFyYW07XG4gIHRoaXMubWluaW1pemVQYXJhbSA9IG1vZGVsLm1pbmltaXplUGFyYW07XG4gIHRoaXMuZGVtaW5pbWl6ZVBhcmFtID0gbW9kZWwuZGVtaW5pbWl6ZVBhcmFtO1xuICB0aGlzLmhpZGVQYXJhbSA9IG1vZGVsLmhpZGVQYXJhbTtcbiAgdGhpcy5kZWhpZGVQYXJhbSA9IG1vZGVsLmRlaGlkZVBhcmFtO1xuXG5cbiAgaWYgKG1vZGVsLmhvcml6b250YWxBbGlnbikge1xuICAgIHRoaXMuaG9yaXpvbnRhbEFsaWduID0gbW9kZWwuaG9yaXpvbnRhbEFsaWduO1xuICB9XG4gIGlmIChtb2RlbC52ZXJ0aWNhbEFsaWduKSB7XG4gICAgdGhpcy52ZXJ0aWNhbEFsaWduID0gbW9kZWwudmVydGljYWxBbGlnbjtcbiAgfVxuXG5cbiAgdGhpcy5hbmltYXRpb25FbmFibGVkID0gZmFsc2U7XG4gIHRoaXMuYW5pbWF0aW9uRHVyYXRpb24gPSAxMDA7XG4gIHRoaXMuZnJhbWUgPSBtb2RlbC5mcmFtZTtcbiAgdGhpcy5oaWRlRnJhbWVCb3JkZXIgPSB0cnVlO1xuICB0aGlzLmhpZGVUaXRsZUJhciA9IHRydWU7XG5cbiAgdGhpcy5yZXN0b3JlS2V5ID0gbnVsbDtcbiAgdGhpcy5yZXN0b3JlRHVyYXRpb24gPSBudWxsO1xuICB0aGlzLnJlc3RvcmVDYWxsYmFjayA9IG51bGw7XG5cbiAgdGhpcy5zdGF0c1N0b3JlID0ge307XG5cbiAgaWYgKG1vZGVsLmFuaW1hdGlvbikge1xuICAgIHRoaXMuYW5pbWF0aW9uRW5hYmxlZCA9IG1vZGVsLmFuaW1hdGlvbjtcbiAgfVxuICBpZiAobW9kZWwuYW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uID0gbW9kZWwuYW5pbWF0aW9uRHVyYXRpb247XG4gIH1cbiAgdGhpcy5ldmVudExpc3RlbmVycyA9IHt9O1xuXG5cbiAgLy9JZiB0aGUgdXNlciBjaGFuZ2VzIHRoZSB3aW5kb3cgc2l6ZSB3aGVuIHRoZSB3aW5kb3cgaXMgbWF4aW1pemVkIHN0YXRlLFxuICAvLyBhZGp1c3QgdGhlIHNpemUgc28gdGhhdCB3aW5kb3cgbG9va3MgbWF4aW1pemVkLlxuICB0aGlzLnJlc2l6ZUxpc3RlbmVyID0gdGhpcy5oYW5kbGVPblJlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gIGlmICh0aGlzLm1heGltaXplUGFyYW0gJiYgdGhpcy5tYXhpbWl6ZVBhcmFtLm1hdGNoUGFyZW50KSB7XG4gICAgdGhpcy5yZXNpemVMaXN0ZW5lciA9IHRoaXMuaGFuZGxlT25WaXJ0dWFsUmVzaXplLmJpbmQodGhpcyk7XG4gIH1cblxuXG59XG5cbldpbmRvd0V2ZW50SGVscGVyLk1BVENIX1BBUkVOVF9DSEFOR0VfTUFSS0VSX0FUVFIgPSAnX19qc2ZyYW1lLW1wLW1hcmtlcic7XG5cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGV2ZW50VHlwZSwgY2FsbGJhY2spIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXSA9IGNhbGxiYWNrO1xufTtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5kb01heGltaXplID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICBpZiAobWUud2luZG93TW9kZSA9PT0gJ2hpZCcpIHtcbiAgICB0aHJvdyBFcnJvcignW0pTcmFtZV0gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGNoYW5nZSBkaXJlY3RseSBmcm9tIHRoZSBoaWQgc3RhdGUgdG8gdGhlIG1heGltaXplZCBzdGF0ZScpO1xuICAgIHJldHVybjtcbiAgfVxuXG5cbiAgaWYgKG1lLndpbmRvd01vZGUgPT09ICdtYXhpbWl6ZWQnIHx8IG1lLndpbmRvd01vZGUgPT09ICdtYXhpbWl6aW5nJykge1xuICAgIC8vIElmIGl0J3MgYWxyZWFkeSAnbWF4aW1pemVkJyBzdGF0dXMsIGl0IGRvZXNuJ3QgZG8gYW55dGhpbmcuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbWUud2luZG93TW9kZSA9ICdtYXhpbWl6aW5nJztcblxuXG4gIHZhciBmcmFtZSA9IG1lLmZyYW1lO1xuXG4gIGlmIChtb2RlbCAmJiBtb2RlbC5tYXRjaFBhcmVudCkge1xuICAgIC8vIFRoZSBkaXYgZWxlbWVudCBkb2VzIG5vdCBpc3N1ZSB0aGUgcmVzaXplIGV2ZW50LiBGdXJ0aGVybW9yZSxcbiAgICAvLyBkaXYgaXMgc3BlY2lmaWVkIGFzIDEwMCUsIHNvIHN0eWxlLndpZHRoIGlzIGFsd2F5cyAxMDAlLlxuICAgIC8vIFNvIEkgd2FudCB0byBnZXQgdGhlIGNsaWVudFdpZHRoIGJ1dCBJIGNhbid0IGdldCBpdCB3aXRoIG11dGF0aW9uT2JzZXJ2ZXIuXG4gICAgLy8gVGhlcmVmb3JlLCB3ZSBhZG9wdCBhIG1lY2hhbmlzbSB0byBjYXRjaCB0aGUgcGFyZW50IHdpbmRvd1xuICAgIC8vIHJlc2l6ZSBldmVudCBhbmQgY2hhbmdlIHRoZSBhdHRyaWJ1dGUgb2YgdGhlIHBhcmVudCB3aW5kb3cgY29udGVudFxuICAgIC8vIGJ5IGRpZmZlcmVudGlhdGlvbiB0byBjYXRjaCBpdC5cbiAgICB2YXIgd2luZG93TWFuYWdlciA9IGZyYW1lLmdldFdpbmRvd01hbmFnZXIoKTtcbiAgICB2YXIgcGFyZW50RWxlbWVudCA9IHdpbmRvd01hbmFnZXIuZ2V0UGFyZW50RWxlbWVudCgpO1xuXG4gICAgaWYgKCFtZS5tYXRjaFBhcmVudFJlc2l6ZU9ic2VydmVyKSB7XG4gICAgICB2YXIgbWF0Y2hQYXJlbnRSZXNpemVPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uIHZpcnR1YWwgcmVzaXplXCIpO1xuICAgICAgICBtZS5yZXNpemVMaXN0ZW5lcigpO1xuICAgICAgfSk7XG4gICAgICBtYXRjaFBhcmVudFJlc2l6ZU9ic2VydmVyLm9ic2VydmUocGFyZW50RWxlbWVudCwge1xuICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFtXaW5kb3dFdmVudEhlbHBlci5NQVRDSF9QQVJFTlRfQ0hBTkdFX01BUktFUl9BVFRSXSxcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBtZS5tYXRjaFBhcmVudFJlc2l6ZU9ic2VydmVyID0gbWF0Y2hQYXJlbnRSZXNpemVPYnNlcnZlcjtcbiAgICB9XG4gIH1cbiAgICAvL3NldCBvbnJlc2l6ZSBsaXN0ZW5lclxuICAvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBtZS5yZXNpemVMaXN0ZW5lcik7XG4gIGVsc2UgaWYgKCFtZS5ldmVudExpc3RlbmVySGVscGVyLmhhc0V2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgJ3dpbmRvdy1yZXNpemUtbGlzdGVuZXInKSkge1xuICAgIG1lLmV2ZW50TGlzdGVuZXJIZWxwZXIuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCBtZS5yZXNpemVMaXN0ZW5lcixcbiAgICAgIHsgbGlzdGVuZXJOYW1lOiAnd2luZG93LXJlc2l6ZS1saXN0ZW5lcicgfSk7XG4gIH1cblxuICAvL1JlbWVtYmVyIHRoZSBzdGF0dXMgb2YgdGhlIHdpbmRvdyBiZWZvcmUgbWF4aW1pemluZyB0aGUgd2luZG93IHNpemVcbiAgbWUuc2F2ZUN1cnJlbnRXaW5kb3dTdGF0cygnbWF4aW1pemVfbW9kZScpO1xuXG4gIG1lLmhpZGVUaXRsZUJhciA9IG1vZGVsID8gbW9kZWwuZnVsbFNjcmVlbiA6IGZhbHNlO1xuXG4gIGlmIChtZS5oaWRlVGl0bGVCYXIpIHtcblxuICAgIC8vSGlkZSBvbmx5IHRoZSBjdXJyZW50bHkgdmlzaWJsZSBGcmFtZUNvbXBvbmVudFxuICAgIC8v44Km44Kj44Oz44OJ44Km44Gu44Oi44O844OJ44KS5aSJ5pu044GZ44KL5YmN44Gu5LuK44Gu54q25oWL44Gn5Y+v6KaW54q25oWL44Gr44GC44KL44OV44Os44O844Og44Kz44Oz44Od44O844ON44Oz44OI77yI6ZaJ44GY44KL44Oc44K/44Oz6aGe77yJ44KS5LiN5Y+v6KaW44Gr44GZ44KLXG4gICAgLy8o44K/44Kk44OI44Or44OQ44O86Z2e6KGo56S644Gu5aC05ZCI44Gr44Gv5pyA5aSn5YyW44GZ44KL44Go44GN44Gu44Ki44OL44Oh44O844K344On44Oz44Gn44OV44Os44O844Og44Kz44Oz44Od44O844ON44Oz44OI44KS6KaL44Gb44Gq44GE44KI44GG44Gr44GZ44KLKVxuICAgIGZyYW1lLmhpZGVBbGxWaXNpYmxlRnJhbWVDb21wb25lbnRzKCk7XG5cbiAgICAvL+OBvuOBn2hpZGVBbGxWaXNpYmxlRnJhbWVDb21wb25lbnTjgpLlrp/mlr3jgZnjgovjgajjgY3jgavjgIHlgIvliKXjga5oaWRlRnJhbWVDb21wb25lbnTjgoRzaG93RnJhbWVDb21wb25lbnTjgpLlrp/ooYzjgZnjgovjgahcbiAgICAvL+euoeeQhuOCueODhuODvOODiOOBjOegtOe2u+OBmeOCi+OBn+OCgeOAgeOCv+OCpOODiOODq+ODkOODvOmdnuihqOekuuOBruWgtOWQiOOBr+OBqeOBhuOBm+aTjeS9nOOBp+OBjeOBquOBhOOBqOOBhOOBhuOBk+OBqOOCguOBguOCilxuICAgIC8vaGlkZUZyYW1lQ29tcG9uZW50IOOChCBzaG93RnJhbWVDb21wb25lbnTjga/lrp/ooYzjgZfjgarjgYRcblxuICB9IGVsc2Uge1xuXG4gICAgLy9Qcm9jZXNzIHJlcXVpcmVkIGZvciBtYXhpbWl6YXRpb25cbiAgICBpZiAobWUubWF4aW1pemVCdXR0b24pIHtcbiAgICAgIGZyYW1lLmhpZGVGcmFtZUNvbXBvbmVudChtZS5tYXhpbWl6ZUJ1dHRvbik7XG4gICAgfVxuICAgIGlmIChtZS5kZW1heGltaXplQnV0dG9uKSB7XG4gICAgICBmcmFtZS5zaG93RnJhbWVDb21wb25lbnQobWUuZGVtYXhpbWl6ZUJ1dHRvbiwgbWUuc3R5bGVEaXNwbGF5KTtcbiAgICB9XG4gIH1cblxuXG4gIGZyYW1lLnNldE1vdmFibGUoZmFsc2UpO1xuICBmcmFtZS5zZXRSZXNpemFibGUoZmFsc2UpO1xuXG5cbiAgaWYgKG1vZGVsICYmIG1vZGVsLnJlc3RvcmVLZXkpIHtcbiAgICBtZS5yZXN0b3JlS2V5ID0gbW9kZWwucmVzdG9yZUtleTtcbiAgfVxuICBpZiAobW9kZWwgJiYgbW9kZWwucmVzdG9yZUR1cmF0aW9uKSB7XG4gICAgbWUucmVzdG9yZUR1cmF0aW9uID0gbW9kZWwucmVzdG9yZUR1cmF0aW9uO1xuICB9XG4gIGlmIChtb2RlbCAmJiBtb2RlbC5yZXN0b3JlQ2FsbGJhY2spIHtcbiAgICBtZS5yZXN0b3JlQ2FsbGJhY2sgPSBtb2RlbC5yZXN0b3JlQ2FsbGJhY2s7XG4gIH1cbiAgLy9SZW5kZXIgbWF4aW1pemF0aW9uIGl0c2VsZlxuICBtZS5yZW5kZXJNYXhpbWl6ZWRNb2RlKHtcbiAgICBhbmltYXRpb246IG1lLmFuaW1hdGlvbkVuYWJsZWQsXG4gICAgY2FsbGJhY2s6IChtb2RlbCAmJiBtb2RlbC5jYWxsYmFjaykgPyBtb2RlbC5jYWxsYmFjayA6IG51bGwsIC8vc2V0IG1heGltaXplZCBmaW5pc2hlZCBjYWxsYmFja1xuICAgIGR1cmF0aW9uOiAobW9kZWwgJiYgbW9kZWwuZHVyYXRpb24pID8gbW9kZWwuZHVyYXRpb24gOiBudWxsLFxuICAgIG1hdGNoUGFyZW50OiAobW9kZWwgJiYgbW9kZWwubWF0Y2hQYXJlbnQpID8gbW9kZWwubWF0Y2hQYXJlbnQgOiBmYWxzZSxcbiAgfSk7XG59O1xuXG5cbi8qKlxuICogUmVuZGVyIHdpbmRvdyBhcyBhIG1heGltaXplZCBtb2RlKCBmdWxsIHNjcmVlbiApXG4gKi9cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5yZW5kZXJNYXhpbWl6ZWRNb2RlID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgdmFyIGZyYW1lID0gbWUuZnJhbWU7XG4gIHZhciBmcm9tID0gbWUubG9hZFdpbmRvd1N0YXRzKCdtYXhpbWl6ZV9tb2RlJyk7XG5cbiAgdmFyIF90b1ggPSAwO1xuICB2YXIgX3RvWSA9IDA7XG4gIHZhciBfdG9XaWR0aCA9IDA7XG4gIHZhciBfdG9IZWlnaHQgPSAwO1xuXG4gIC8vY29tcHV0ZSBwb3NpdGlvbiBhbmQgc2l6ZVtiZWdpbl1cbiAgaWYgKG1lLmhpZGVUaXRsZUJhcikge1xuICAgIF90b1ggPSAwO1xuICAgIF90b1kgPSAtZnJvbS50aXRsZUJhckhlaWdodDtcbiAgfVxuXG4gIHZhciBwYXJlbnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB2YXIgcGFyZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gIGlmIChtb2RlbC5tYXRjaFBhcmVudCkge1xuICAgIC8vIElmIG1hdGNoUGFyZW50IGlzIHNwZWNpZmllZFxuICAgIC8vIFdoZW4gbWF4aW1pemluZywgdXNlIHRoZSBzaXplIG9mIHBhcmVudEVsZW1lbnQgc3BlY2lmaWVkIGF0IGluaXRpYWxpemF0aW9uXG4gICAgLy8gUGFyZW50bEVsZW1lbnQgaXMgb2Z0ZW4gdXNlZCBvbmx5IGZvciBhZGp1c3RpbmcgdGhlIGRpc3BsYXkgb3JkZXIuXG4gICAgLy8gVGhlcmVmb3JlLCBvbmx5IGlmIG1hdGNoUGFyZW50IGlzIHNwZWNpZmllZCwgbWF0Y2ggdGhlIHNpemUgb2YgcGFyZW50RWxlbWVudFxuICAgIHZhciB3aW5kb3dNYW5hZ2VyID0gZnJhbWUuZ2V0V2luZG93TWFuYWdlcigpO1xuICAgIHZhciBwYXJlbnRFbGVtZW50ID0gd2luZG93TWFuYWdlci5nZXRQYXJlbnRFbGVtZW50KCk7XG4gICAgcGFyZW50V2lkdGggPSBwYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIHBhcmVudEhlaWdodCA9IHBhcmVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICB9XG5cbiAgaWYgKG1lLmhpZGVGcmFtZUJvcmRlcikge1xuICAgIF90b1dpZHRoID0gcGFyZW50V2lkdGg7XG4gICAgX3RvSGVpZ2h0ID0gcGFyZW50SGVpZ2h0ICsgKG1lLmhpZGVUaXRsZUJhciA/IGZyb20udGl0bGVCYXJIZWlnaHQgOiAwKTtcbiAgfSBlbHNlIHtcbiAgICBfdG9XaWR0aCA9IHBhcmVudFdpZHRoIC0gZnJvbS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCAqIDI7XG4gICAgX3RvSGVpZ2h0ID0gcGFyZW50SGVpZ2h0IC0gZnJvbS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCAqIDIgKyAobWUuaGlkZVRpdGxlQmFyID8gZnJvbS50aXRsZUJhckhlaWdodCA6IDApO1xuICB9XG4gIC8vY29tcHV0ZSBwb3NpdGlvbiBhbmQgc2l6ZVtlbmRdXG5cbiAgaWYgKG1lLmhvcml6b250YWxBbGlnbiA9PSAncmlnaHQnKSB7XG4gICAgX3RvWCA9IC1fdG9XaWR0aDtcbiAgfVxuICBpZiAobWUudmVydGljYWxBbGlnbiA9PSAnYm90dG9tJykge1xuICAgIF90b1kgPSAtX3RvSGVpZ2h0O1xuICB9XG5cblxuICAvL3JlbmRlciBwb3NpdGlvbiBhbmQgc2l6ZVtiZWdpbl1cbiAgdmFyIGZ1bmNEb1JlbmRlciA9IGZ1bmN0aW9uKG9wdCkge1xuXG4gICAgdmFyIGRpc2FibGVDYWxsYmFjayA9IG9wdCAmJiBvcHQuZGlzYWJsZUNhbGxiYWNrO1xuXG4gICAgZnJhbWUuc2V0UG9zaXRpb24oX3RvWCwgX3RvWSk7XG5cbiAgICBpZiAobWUuaGlkZUZyYW1lQm9yZGVyKSB7XG4gICAgICBmcmFtZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCA9IDA7XG4gICAgICBmcmFtZS5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZCA9IDA7XG4gICAgICBmcmFtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9ICcwcHgnO1xuICAgIH1cbiAgICBmcmFtZS5zZXRTaXplKF90b1dpZHRoLCBfdG9IZWlnaHQsIHRydWUpO1xuXG4gICAgaWYgKGRpc2FibGVDYWxsYmFjaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChtZS5oaWRlVGl0bGVCYXIpIHtcbiAgICAgIC8vIHdoZW4gZnVsbCBzY3JlZW4gbW9kZShtZWFucyBoaWRkZW4gdGl0bGUgYmFyKVxuXG4gICAgICBpZiAobWUucmVzdG9yZUtleSkge1xuICAgICAgICBtZS5rZXlMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09IG1lLnJlc3RvcmVLZXkpIHtcbiAgICAgICAgICAgIG1lLmRvQ29tbWFuZCgncmVzdG9yZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbWUua2V5TGlzdGVuZXIpO1xuXG4gICAgICAvL2FkZCBrZXlsaXN0ZW5lciBmb3IgaW5zaWRlIHRoZSBpZnJhbWVcbiAgICAgIGlmIChmcmFtZS5pZnJhbWUpIHtcbiAgICAgICAgZnJhbWUuaWZyYW1lLmNvbnRlbnRXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG1lLmtleUxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZS53aW5kb3dNb2RlID0gJ21heGltaXplZCc7XG5cblxuICAgIGlmIChtb2RlbCAmJiBtb2RlbC5jYWxsYmFjaykge1xuICAgICAgbW9kZWwuY2FsbGJhY2sobWUuZnJhbWUsIHsgZXZlbnRUeXBlOiAnbWF4aW1pemVkJyB9KTtcbiAgICB9XG4gICAgaWYgKG1lLmV2ZW50TGlzdGVuZXJzWydtYXhpbWl6ZWQnXSkge1xuICAgICAgbWUuZXZlbnRMaXN0ZW5lcnNbJ21heGltaXplZCddKG1lLmZyYW1lLCB7IGV2ZW50VHlwZTogJ21heGltaXplZCcgfSk7XG4gICAgfVxuXG4gIH07Ly8gZW5kIG9mIGZ1bmNEb1JlbmRlclxuXG5cbiAgaWYgKG1vZGVsICYmIG1vZGVsLmFuaW1hdGlvbikge1xuXG5cbiAgICBtZS5hbmltYXRlRnJhbWUoe1xuICAgICAgZnJhbWU6IGZyYW1lLFxuICAgICAgZnJvbTogZnJvbSxcbiAgICAgIHRvOiB7XG4gICAgICAgIGxlZnQ6IF90b1gsXG4gICAgICAgIHRvcDogX3RvWSxcbiAgICAgICAgd2lkdGg6IF90b1dpZHRoLFxuICAgICAgICBoZWlnaHQ6IF90b0hlaWdodFxuICAgICAgfSxcbiAgICAgIGR1cmF0aW9uOiBtb2RlbC5kdXJhdGlvbiA/IG1vZGVsLmR1cmF0aW9uIDogbWUuYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICBjYWxsYmFjazogZnVuY0RvUmVuZGVyXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKG1vZGVsICYmIG1vZGVsLmNhbGxlciA9PT0gJ2hhbmRsZU9uUmVzaXplJykge1xuICAgICAgZnVuY0RvUmVuZGVyKHsgZGlzYWJsZUNhbGxiYWNrOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmdW5jRG9SZW5kZXIoKTtcbiAgICB9XG4gIH1cbiAgLy9yZW5kZXIgcG9zaXRpb24gYW5kIHNpemVbZW5kXVxufTtcblxuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLmdldFdpbmRvd01vZGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMud2luZG93TW9kZTtcbn07XG4vKipcbiAqIFJlc3RvcmUgd2luZG93IGZyb20gbWF4aW1pemVkIG1vZGVcbiAqL1xuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLmRvRGVtYXhpbWl6ZSA9IGZ1bmN0aW9uKG1vZGVsKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHZhciBmcmFtZSA9IG1lLmZyYW1lO1xuXG4gIGlmIChtZS53aW5kb3dNb2RlID09PSAnaGlkJykge1xuICAgIC8vY29uc29sZS5lcnJvcignZGVtYXhpbWl6ZSg9cmVjb3ZlcnkgZnJvbSBtYXhpbWl6ZWQpIGNhbm5vdCBiZSBwZXJmb3JtZWQgaW4gaGlkIHN0YXRlLicpO1xuICAgIHRocm93IEVycm9yKCdbSlNGcmFtZV0gZGVtYXhpbWl6ZSg9cmVjb3ZlcnkgZnJvbSBtYXhpbWl6ZWQpIGNhbm5vdCBiZSBwZXJmb3JtZWQgaW4gaGlkIHN0YXRlLicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghbWUuaGFzV2luZG93U3RhdHMoJ21heGltaXplX21vZGUnKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChtZS5oaWRlVGl0bGVCYXIpIHtcblxuICB9IGVsc2Uge1xuICAgIGlmIChtZS5tYXhpbWl6ZUJ1dHRvbikge1xuICAgICAgZnJhbWUuc2hvd0ZyYW1lQ29tcG9uZW50KG1lLm1heGltaXplQnV0dG9uLCBtZS5zdHlsZURpc3BsYXkpO1xuICAgIH1cbiAgICBpZiAobWUuZGVtYXhpbWl6ZUJ1dHRvbikge1xuICAgICAgZnJhbWUuaGlkZUZyYW1lQ29tcG9uZW50KG1lLmRlbWF4aW1pemVCdXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIG1lLnJlc3RvcmVXaW5kb3coe1xuICAgIHJlc3RvcmVQb3NpdGlvbjogdHJ1ZSxcbiAgICByZXN0b3JlTW9kZTogJ21heGltaXplX21vZGUnLFxuICAgIGFuaW1hdGlvbjogbWUuYW5pbWF0aW9uRW5hYmxlZCxcbiAgICBjYWxsYmFjazogKG1vZGVsICYmIG1vZGVsLmNhbGxiYWNrKSA/IG1vZGVsLmNhbGxiYWNrIDogbnVsbCxcbiAgICBmb3JjZVNob3dGcmFtZUNvbXBvbmVudHM6IChtZS5hbmltYXRpb25FbmFibGVkICYmIG1lLmhpZGVUaXRsZUJhciksXG4gICAgZHVyYXRpb246IChtb2RlbCAmJiBtb2RlbC5kdXJhdGlvbikgPyBtb2RlbC5kdXJhdGlvbiA6IG51bGwsXG4gICAgZXZlbnRUeXBlOiAnZGVtYXhpbWl6ZWQnXG4gIH0pO1xufTtcblxuXG4vKipcbiAqIENhbGxlZCB3aGVuIGNoYW5naW5nIHRoZSB3aW5kb3cgc2l6ZSBieSB1c2VyIG9wZXJhdGlvbiBpbiBtYXhpbWl6ZWQgbW9kZVxuICovXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuaGFuZGxlT25SZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUucmVuZGVyTWF4aW1pemVkTW9kZSh7XG4gICAgY2FsbGVyOiAnaGFuZGxlT25SZXNpemUnLFxuICAgIC8vbWF0Y2hQYXJlbnQ6IHRydWVcbiAgfSk7XG59O1xuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLmhhbmRsZU9uVmlydHVhbFJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5yZW5kZXJNYXhpbWl6ZWRNb2RlKHtcbiAgICBjYWxsZXI6ICdoYW5kbGVPblJlc2l6ZScsXG4gICAgbWF0Y2hQYXJlbnQ6IHRydWVcbiAgfSk7XG59O1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIE1ha2Ugd2luZG93IG1pbmltaXplZCBtb2RlXG4gKi9cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5kb01pbmltaXplID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICBpZiAobWUud2luZG93TW9kZSA9PT0gJ21pbmltaXplZCcgfHwgbWUud2luZG93TW9kZSA9PT0gJ21pbmltaXppbmcnKSB7XG4gICAgLy8gSWYgaXQncyBhbHJlYWR5ICdtaW5pbWl6ZWQnIHN0YXR1cywgaXQgZG9lc24ndCBkbyBhbnl0aGluZy5cbiAgICByZXR1cm47XG4gIH1cblxuICBtZS53aW5kb3dNb2RlID0gJ21pbmltaXppbmcnO1xuXG5cbiAgdmFyIGZyYW1lID0gbWUuZnJhbWU7XG5cbiAgLy9SZW1lbWJlciB0aGUgc3RhdHMgb2YgdGhlIHdpbmRvdyBiZWZvcmUgbWF4aW1pemluZyB0aGUgd2luZG93XG4gIG1lLnNhdmVDdXJyZW50V2luZG93U3RhdHMoJ21pbmltaXplX21vZGUnKTtcblxuXG4gIGZyYW1lLnNldFJlc2l6YWJsZShmYWxzZSk7XG5cbiAgbWUucmVuZGVyTWluaW1pemVkTW9kZSh7XG4gICAgYW5pbWF0aW9uOiBtZS5hbmltYXRpb25FbmFibGVkLFxuICAgIGNhbGxiYWNrOiAobW9kZWwgJiYgbW9kZWwuY2FsbGJhY2spID8gbW9kZWwuY2FsbGJhY2sgOiBudWxsLFxuICAgIGR1cmF0aW9uOiAobW9kZWwgJiYgbW9kZWwuZHVyYXRpb24pID8gbW9kZWwuZHVyYXRpb24gOiBudWxsLFxuICAgIHRvV2lkdGg6IChtb2RlbCAmJiBtb2RlbC50b1dpZHRoKSA/IG1vZGVsLnRvV2lkdGggOiBudWxsLFxuICB9KTtcbn07XG5cblxuLyoqXG4gKiBSZW5kZXIgd2luZG93IGFzIG1pbmltaXplZCBtb2RlXG4gKi9cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5yZW5kZXJNaW5pbWl6ZWRNb2RlID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgdmFyIGZyYW1lID0gbWUuZnJhbWU7XG4gIHZhciByaSA9IG1lLmxvYWRXaW5kb3dTdGF0cygnbWluaW1pemVfbW9kZScpO1xuXG4gIHZhciBmcm9tID0gbWUuZ2V0Q3VycmVudFdpbmRvd1N0YXRzKCk7XG4gIHZhciB0byA9IG1lLmdldEN1cnJlbnRXaW5kb3dTdGF0cygpO1xuXG4gIHRvLmhlaWdodCA9IHJpLnRpdGxlQmFySGVpZ2h0O1xuICBpZiAobW9kZWwgJiYgbW9kZWwudG9XaWR0aCkge1xuICAgIHRvLndpZHRoID0gbW9kZWwudG9XaWR0aFxuICB9XG5cbiAgdmFyIGZ1bmNEb1JlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmb3JjZVNldFNpemUgPSB0cnVlO1xuICAgIGZyYW1lLnNldFNpemUodG8ud2lkdGgsIHRvLmhlaWdodCwgZm9yY2VTZXRTaXplKTtcblxuICAgIG1lLndpbmRvd01vZGUgPSAnbWluaW1pemVkJztcblxuICAgIGlmIChtZS5taW5pbWl6ZUJ1dHRvbikge1xuICAgICAgZnJhbWUuaGlkZUZyYW1lQ29tcG9uZW50KG1lLm1pbmltaXplQnV0dG9uKTtcbiAgICB9XG5cbiAgICBpZiAobWUuZGVtaW5pbWl6ZUJ1dHRvbikge1xuICAgICAgZnJhbWUuc2hvd0ZyYW1lQ29tcG9uZW50KG1lLmRlbWluaW1pemVCdXR0b24sIG1lLnN0eWxlRGlzcGxheSk7XG4gICAgfVxuXG4gICAgaWYgKG1vZGVsLmNhbGxiYWNrKSB7XG4gICAgICBtb2RlbC5jYWxsYmFjayhtZS5mcmFtZSwgeyBldmVudFR5cGU6ICdtaW5pbWl6ZWQnIH0pO1xuICAgIH1cbiAgICBpZiAobWUuZXZlbnRMaXN0ZW5lcnNbJ21pbmltaXplZCddKSB7XG4gICAgICBtZS5ldmVudExpc3RlbmVyc1snbWluaW1pemVkJ10obWUuZnJhbWUsIHsgZXZlbnRUeXBlOiAnbWluaW1pemVkJyB9KTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKG1vZGVsICYmIG1vZGVsLmFuaW1hdGlvbikge1xuICAgIG1lLmFuaW1hdGVGcmFtZSh7XG4gICAgICB0b0FscGhhOiAxLjAsXG4gICAgICBkdXJhdGlvbjogbW9kZWwuZHVyYXRpb24gPyBtb2RlbC5kdXJhdGlvbiA6IG1lLmFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgZnJhbWU6IGZyYW1lLFxuICAgICAgZnJvbTogZnJvbSxcbiAgICAgIHRvOiB0byxcbiAgICAgIGNhbGxiYWNrOiBmdW5jRG9SZW5kZXJcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmdW5jRG9SZW5kZXIoKTtcbiAgfVxuXG5cbn07XG5cblxuLyoqXG4gKiBSZXN0b3JlIHdpbmRvdyBmcm9tIG1pbmltaXplZCBtb2RlXG4gKi9cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5kb0RlbWluaW1pemUgPSBmdW5jdGlvbihtb2RlbCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciBmcmFtZSA9IG1lLmZyYW1lO1xuXG4gIGlmICghbWUuaGFzV2luZG93U3RhdHMoJ21pbmltaXplX21vZGUnKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChtZS5taW5pbWl6ZUJ1dHRvbikge1xuICAgIGZyYW1lLnNob3dGcmFtZUNvbXBvbmVudChtZS5taW5pbWl6ZUJ1dHRvbiwgbWUuc3R5bGVEaXNwbGF5KTtcbiAgfVxuICBpZiAobWUuZGVtaW5pbWl6ZUJ1dHRvbikge1xuICAgIGZyYW1lLmhpZGVGcmFtZUNvbXBvbmVudChtZS5kZW1pbmltaXplQnV0dG9uKTtcbiAgfVxuXG4gIG1lLnJlc3RvcmVXaW5kb3coXG4gICAge1xuICAgICAgcmVzdG9yZVBvc2l0aW9uOiBmYWxzZSxcbiAgICAgIHJlc3RvcmVNb2RlOiAnbWluaW1pemVfbW9kZScsXG4gICAgICBhbmltYXRpb246IG1lLmFuaW1hdGlvbkVuYWJsZWQsXG4gICAgICBkdXJhdGlvbjogKG1vZGVsICYmIG1vZGVsLmR1cmF0aW9uKSA/IG1vZGVsLmR1cmF0aW9uIDogbnVsbCxcbiAgICAgIGNhbGxiYWNrOiAobW9kZWwgJiYgbW9kZWwuY2FsbGJhY2spID8gbW9kZWwuY2FsbGJhY2sgOiBudWxsLFxuICAgICAgZXZlbnRUeXBlOiAnZGVtaW5pbWl6ZWQnXG4gICAgfSk7XG59O1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLyoqXG4gKiBNYWtlIHdpbmRvdyBoaWRkZW4gbW9kZVxuICovXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuZG9IaWRlID0gZnVuY3Rpb24obW9kZWwpIHtcblxuICB2YXIgbWUgPSB0aGlzO1xuXG4gIGlmIChtZS53aW5kb3dNb2RlID09PSAnaGlkJyB8fCBtZS53aW5kb3dNb2RlID09PSAnaGlkaW5nJykge1xuICAgIC8vIElmIGl0J3MgYWxyZWFkeSAnaGlkJyBzdGF0dXMsIGl0IGRvZXNuJ3QgZG8gYW55dGhpbmcuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbWUud2luZG93TW9kZSA9ICdoaWRpbmcnO1xuXG4gIHZhciBmcmFtZSA9IG1lLmZyYW1lO1xuXG4gIC8vUmVtZW1iZXIgdGhlIHN0YXRzIG9mIHRoZSB3aW5kb3cgYmVmb3JlIG1heGltaXppbmcgdGhlIHdpbmRvd1xuICBtZS5zYXZlQ3VycmVudFdpbmRvd1N0YXRzKCdoaWRlX21vZGUnKTtcblxuXG4gIGZyYW1lLnNldFJlc2l6YWJsZShmYWxzZSk7XG5cblxuICB2YXIgYXJnID0ge1xuLy8gICAgc2lsZW50OiBtb2RlbC5zaWxlbnQsXG4gICAgYW5pbWF0aW9uOiBtZS5hbmltYXRpb25FbmFibGVkLFxuICAgIC8vIGR1cmF0aW9uOiAobW9kZWwgJiYgbW9kZWwuZHVyYXRpb24pID8gbW9kZWwuZHVyYXRpb24gOiBudWxsLFxuICAgIC8vIGNhbGxiYWNrOiAobW9kZWwgJiYgbW9kZWwuY2FsbGJhY2spID8gbW9kZWwuY2FsbGJhY2sgOiBudWxsLFxuICAgIC8vIGFsaWduOiAobW9kZWwgJiYgbW9kZWwuYWxpZ24pID8gbW9kZWwuYWxpZ24gOiBudWxsLFxuICAgIC8vIG9mZnNldDogKG1vZGVsICYmIG1vZGVsLmFsaWduKSA/IG1vZGVsLm9mZnNldCA6IG51bGwsXG4gIH07XG4gIGlmIChtb2RlbCkge1xuICAgIG1lcmdlRGVlcGx5KHsgb3A6ICdvdmVyd3JpdGUtbWVyZ2UnLCBvYmplY3QxOiBhcmcsIG9iamVjdDI6IG1vZGVsIH0pO1xuICB9XG4gIG1lLnJlbmRlckhpZGVNb2RlKGFyZyk7XG59O1xuXG5cbi8qKlxuICogUmVuZGVyIHdpbmRvdyBhcyBoaWRkZW4gbW9kZVxuICovXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUucmVuZGVySGlkZU1vZGUgPSBmdW5jdGlvbihtb2RlbCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICB2YXIgZnJhbWUgPSBtZS5mcmFtZTtcbiAgdmFyIHJpID0gbWUubG9hZFdpbmRvd1N0YXRzKCdoaWRlX21vZGUnKTtcblxuICB2YXIgZnJvbSA9IG1lLmdldEN1cnJlbnRXaW5kb3dTdGF0cygpO1xuXG4gIHZhciBvZmZzZXQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgdmFyIHRvRWxlbWVudCA9IG1vZGVsLnRvRWxlbWVudDtcblxuICBpZiAobW9kZWwub2Zmc2V0KSB7XG4gICAgb2Zmc2V0ID0gbW9kZWwub2Zmc2V0O1xuICB9XG5cbiAgdmFyIGxlZnQgPSAwO1xuICB2YXIgdG9wID0gMDtcbiAge1xuICAgIHZhciBhbGlnbiA9IChtb2RlbCAmJiBtb2RlbC5hbGlnbikgPyBtb2RlbC5hbGlnbiA6ICdMRUZUX1RPUCc7XG5cblxuICAgIGlmICghYWxpZ24gfHwgQ0FMSUdOLkxFRlRfVE9QID09IGFsaWduKSB7XG4gICAgICBsZWZ0ID0gZnJvbS5sZWZ0O1xuICAgICAgdG9wID0gZnJvbS50b3A7XG4gICAgfSBlbHNlIGlmIChDQUxJR04uSENFTlRFUl9UT1AgPT0gYWxpZ24pIHtcbiAgICAgIGxlZnQgPSBmcm9tLmxlZnQgKyBmcm9tLndpZHRoIC8gMjtcbiAgICAgIHRvcCA9IGZyb20udG9wO1xuICAgIH0gZWxzZSBpZiAoQ0FMSUdOLlJJR0hUX1RPUCA9PSBhbGlnbikge1xuICAgICAgbGVmdCA9IGZyb20ubGVmdCArIGZyb20ud2lkdGg7XG4gICAgICB0b3AgPSBmcm9tLnRvcDtcbiAgICB9IGVsc2UgaWYgKENBTElHTi5MRUZUX1ZDRU5URVIgPT0gYWxpZ24pIHtcbiAgICAgIGxlZnQgPSBmcm9tLmxlZnQ7XG4gICAgICB0b3AgPSBmcm9tLnRvcCArIGZyb20uaGVpZ2h0IC8gMjtcbiAgICB9IGVsc2UgaWYgKENBTElHTi5IQ0VOVEVSX1ZDRU5URVIgPT0gYWxpZ24pIHtcbiAgICAgIGxlZnQgPSBmcm9tLmxlZnQgKyBmcm9tLndpZHRoIC8gMjtcbiAgICAgIHRvcCA9IGZyb20udG9wICsgZnJvbS5oZWlnaHQgLyAyO1xuICAgIH0gZWxzZSBpZiAoQ0FMSUdOLlJJR0hUX1ZDRU5URVIgPT0gYWxpZ24pIHtcbiAgICAgIGxlZnQgPSBmcm9tLmxlZnQgKyBmcm9tLndpZHRoO1xuICAgICAgdG9wID0gZnJvbS50b3AgKyBmcm9tLmhlaWdodCAvIDI7XG4gICAgfSBlbHNlIGlmIChDQUxJR04uTEVGVF9CT1RUT00gPT0gYWxpZ24pIHtcbiAgICAgIGxlZnQgPSBmcm9tLmxlZnQ7XG4gICAgICB0b3AgPSBmcm9tLnRvcCArIGZyb20uaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAoQ0FMSUdOLkhDRU5URVJfQk9UVE9NID09IGFsaWduKSB7XG4gICAgICBsZWZ0ID0gZnJvbS5sZWZ0ICsgZnJvbS53aWR0aCAvIDI7XG4gICAgICB0b3AgPSBmcm9tLnRvcCArIGZyb20uaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAoQ0FMSUdOLlJJR0hUX0JPVFRPTSA9PSBhbGlnbikge1xuICAgICAgbGVmdCA9IGZyb20ubGVmdCArIGZyb20ud2lkdGg7XG4gICAgICB0b3AgPSBmcm9tLnRvcCArIGZyb20uaGVpZ2h0O1xuXG4gICAgfSBlbHNlIGlmICgnQUJTT0xVVEUnID09IGFsaWduKSB7XG4gICAgICBpZiAodG9FbGVtZW50KSB7XG4gICAgICAgIHZhciBlbGVtZW50UmVjdCA9IHRvRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKG1lLmlzV2luZG93TWFuYWdlckZpeGVkKSB7XG4gICAgICAgICAgbGVmdCA9IGVsZW1lbnRSZWN0LmxlZnQ7XG4gICAgICAgICAgdG9wID0gZWxlbWVudFJlY3QudG9wO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlZnQgPSBlbGVtZW50UmVjdC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgICAgICAgIHRvcCA9IGVsZW1lbnRSZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdCA9IG9mZnNldC54O1xuICAgICAgICB0b3AgPSBvZmZzZXQueTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHZhciB0byA9IHtcbiAgICBsZWZ0OiBsZWZ0LFxuICAgIHRvcDogdG9wLFxuICAgIHdpZHRoOiAwLFxuICAgIC8vbWluaW11bSBoZWlnaHQgbXVzdCBiZSB0aXRsZUJhckhlaWdodFxuICAgIGhlaWdodDogcmkudGl0bGVCYXJIZWlnaHRcbiAgfTtcblxuICB2YXIgZnVuY0RvUmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZvcmNlU2V0U2l6ZSA9IHRydWU7XG4gICAgZnJhbWUuc2V0U2l6ZSh0by53aWR0aCwgdG8uaGVpZ2h0LCBmb3JjZVNldFNpemUpO1xuICAgIC8vZnJhbWUuaGlkZSgpO1xuXG4gICAgbWUud2luZG93TW9kZSA9ICdoaWQnO1xuXG4gICAgaWYgKG1vZGVsICYmIG1vZGVsLmNhbGxiYWNrKSB7XG4gICAgICBtb2RlbC5jYWxsYmFjayhtZS5mcmFtZSwgeyBldmVudFR5cGU6ICdoaWQnIH0pO1xuICAgIH1cbiAgICBpZiAobWUuZXZlbnRMaXN0ZW5lcnNbJ2hpZCddKSB7XG4gICAgICBtZS5ldmVudExpc3RlbmVyc1snaGlkJ10obWUuZnJhbWUsIHsgZXZlbnRUeXBlOiAnaGlkJyB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy9IaWRlIG9ubHkgdGhlIGN1cnJlbnRseSB2aXNpYmxlIEZyYW1lQ29tcG9uZW50XG4gIGZyYW1lLmhpZGVBbGxWaXNpYmxlRnJhbWVDb21wb25lbnRzKCk7XG5cbiAgaWYgKG1vZGVsICYmIG1vZGVsLmFuaW1hdGlvbikge1xuICAgIG1lLmFuaW1hdGVGcmFtZSh7XG4gICAgICBmcm9tQWxwaGE6IG1vZGVsLnNpbGVudCA/IDAgOiAxLjAsXG4gICAgICB0b0FscGhhOiAwLFxuICAgICAgZWFzZTogdHJ1ZSxcbiAgICAgIGR1cmF0aW9uOiBtb2RlbC5kdXJhdGlvbiA/IG1vZGVsLmR1cmF0aW9uIDogbWUuYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICBmcmFtZTogZnJhbWUsXG4gICAgICBmcm9tOiBmcm9tLFxuICAgICAgdG86IHRvLFxuICAgICAgY2FsbGJhY2s6IGZ1bmNEb1JlbmRlclxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGZ1bmNEb1JlbmRlcigpO1xuICB9XG5cblxufTtcblxuXG4vKipcbiAqIFJlc3RvcmUgd2luZG93IGZyb20gaGlkZWQgbW9kZVxuICovXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuZG9EZWhpZGUgPSBmdW5jdGlvbihtb2RlbCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICB2YXIgZnJhbWUgPSBtZS5mcmFtZTtcblxuICBpZiAoIW1lLmhhc1dpbmRvd1N0YXRzKCdoaWRlX21vZGUnKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG1lLnJlc3RvcmVXaW5kb3coXG4gICAge1xuICAgICAgZHVyYXRpb246IChtb2RlbCAmJiBtb2RlbC5kdXJhdGlvbikgPyBtb2RlbC5kdXJhdGlvbiA6IG51bGwsXG4gICAgICByZXN0b3JlUG9zaXRpb246IHRydWUsXG4gICAgICByZXN0b3JlTW9kZTogJ2hpZGVfbW9kZScsXG4gICAgICBhbmltYXRpb246IG1lLmFuaW1hdGlvbkVuYWJsZWQsXG4gICAgICBmb3JjZVNob3dGcmFtZUNvbXBvbmVudHM6IHRydWUsXG4gICAgICBjYWxsYmFjazogKG1vZGVsICYmIG1vZGVsLmNhbGxiYWNrKSA/IG1vZGVsLmNhbGxiYWNrIDogbnVsbCxcbiAgICAgIGV2ZW50VHlwZTogJ2RlaGlkZWQnXG4gICAgfSk7XG59O1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5sb2FkV2luZG93U3RhdHMgPSBmdW5jdGlvbihzdG9yZUtleU5hbWUpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgcmV0dXJuIG1lLnN0YXRzU3RvcmVbc3RvcmVLZXlOYW1lXTtcbn07XG5cblxuLyoqXG4gKiBSZW1lbWJlciB0aGUgc3RhdHVzIG9mIHRoZSB3aW5kb3cgYmVmb3JlIG1heGltaXppbmcgb3IgbWluaW1pemluZyB0aGUgd2luZG93IHNpemVcbiAqIEBwYXJhbSBzdG9yZUtleU5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIHN0YXR1cyBvZiB0aGUgd2luZG93IGhhcyBiZWVuIHVwZGF0ZWQgb3IgaXMgYSBuZXcgc3RhdHVzLlxuICogUmV0dXJucyBmYWxzZSBpZiB0aGUgc3RhdHVzIGhhcyBub3QgYmVlbiB1cGRhdGVkLlxuICovXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuc2F2ZUN1cnJlbnRXaW5kb3dTdGF0cyA9IGZ1bmN0aW9uKHN0b3JlS2V5TmFtZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciBjcnJXaW5kb3dTdGF0cyA9IG1lLmdldEN1cnJlbnRXaW5kb3dTdGF0cygpO1xuXG4gIGlmIChtZS5oYXNXaW5kb3dTdGF0cyhzdG9yZUtleU5hbWUpKSB7XG5cbiAgICB2YXIgc3RvcmVkU3RhdHMgPSBtZS5sb2FkV2luZG93U3RhdHMoc3RvcmVLZXlOYW1lKTtcbiAgICB2YXIgaXNXaW5kb3dTdGF0c1VwZGF0ZWQgPSAhbWUud2luZG93U3RhdHNFcXVhbHMoY3JyV2luZG93U3RhdHMsIHN0b3JlZFN0YXRzKTtcblxuICAgIGlmIChpc1dpbmRvd1N0YXRzVXBkYXRlZCkge1xuICAgICAgbWUuc3RhdHNTdG9yZVtzdG9yZUtleU5hbWVdID0gY3JyV2luZG93U3RhdHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzV2luZG93U3RhdHNVcGRhdGVkO1xuXG4gIH0gZWxzZSB7XG4gICAgbWUuc3RhdHNTdG9yZVtzdG9yZUtleU5hbWVdID0gY3JyV2luZG93U3RhdHM7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuXG59O1xuXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUud2luZG93U3RhdHNFcXVhbHMgPSBmdW5jdGlvbih3aW5kb3dTdGF0czEsIHdpbmRvd1N0YXRzMikge1xuXG4gIGlmICh3aW5kb3dTdGF0czEgJiYgd2luZG93U3RhdHMyKSB7XG4gICAgdmFyIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHdpbmRvd1N0YXRzMSkgPT09IEpTT04uc3RyaW5naWZ5KHdpbmRvd1N0YXRzMik7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufTtcblxuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLmNsZWFyV2luZG93U3RhdHMgPSBmdW5jdGlvbihzdG9yZUtleU5hbWUpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUuc3RhdHNTdG9yZVtzdG9yZUtleU5hbWVdID0gbnVsbDtcbn07XG5cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5oYXNXaW5kb3dTdGF0cyA9IGZ1bmN0aW9uKHN0b3JlS2V5TmFtZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuICByZXR1cm4gbWUuc3RhdHNTdG9yZVtzdG9yZUtleU5hbWVdO1xufTtcblxuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLmdldEN1cnJlbnRXaW5kb3dTdGF0cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICB2YXIgZnJhbWUgPSBtZS5mcmFtZTtcblxuICAvL0FjcXVpcmUgd2luZG93J3Mgc3RhdHNcbiAgdmFyIF9fdGl0bGVCYXJIZWlnaHQgPSBwYXJzZUludChmcmFtZS50aXRsZUJhci5zdHlsZS5oZWlnaHQsIDEwKTtcbiAgdmFyIF9fZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQgPSBmcmFtZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdDsvLyBwYXJzZUludChmcmFtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCwgMTApO1xuICB2YXIgX19mcmFtZUJvcmRlcldpZHRoRm9jdXNlZCA9IGZyYW1lLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkO1xuICB2YXIgX19sZWZ0ID0gZnJhbWUuZ2V0TGVmdCgpO1xuICB2YXIgX190b3AgPSBmcmFtZS5nZXRUb3AoKTtcbiAgdmFyIF9fd2lkdGggPSBmcmFtZS5nZXRXaWR0aCgpO1xuICB2YXIgX19oZWlnaHQgPSBmcmFtZS5nZXRIZWlnaHQoKTtcbiAgdmFyIF9fcmVzaXphYmxlID0gZnJhbWUucmVzaXphYmxlO1xuICB2YXIgX19tb3ZhYmxlID0gZnJhbWUubW92YWJsZTtcblxuXG4gIHJldHVybiB7XG4gICAgbGVmdDogX19sZWZ0LFxuICAgIHRvcDogX190b3AsXG4gICAgd2lkdGg6IF9fd2lkdGgsXG4gICAgaGVpZ2h0OiBfX2hlaWdodCxcbiAgICB0aXRsZUJhckhlaWdodDogX190aXRsZUJhckhlaWdodCxcbiAgICBmcmFtZUJvcmRlcldpZHRoRGVmYXVsdDogX19mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCxcbiAgICBmcmFtZUJvcmRlcldpZHRoRm9jdXNlZDogX19mcmFtZUJvcmRlcldpZHRoRm9jdXNlZCxcbiAgICByZXNpemFibGU6IF9fcmVzaXphYmxlLFxuICAgIG1vdmFibGU6IF9fbW92YWJsZSxcbiAgfTtcbn07XG5cblxuLyoqXG4gKiBSZXN0b3JlIHRoZSBzdGF0ZSBvZiB0aGUgd2luZG93XG4gKiBAcGFyYW0gbW9kZWxcbiAqL1xuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLnJlc3RvcmVXaW5kb3cgPSBmdW5jdGlvbihtb2RlbCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICB2YXIgZnJhbWUgPSBtZS5mcmFtZTtcbiAgdmFyIHRvID0gbWUubG9hZFdpbmRvd1N0YXRzKG1vZGVsLnJlc3RvcmVNb2RlKTtcbiAgLy/nj77lnKjjga7nirbmhYvjgpLkuIDmmYLkv53lrZjjgZnjgotcbiAgLy9tZS5zYXZlQ3VycmVudFdpbmRvd1N0YXRzKCd0ZW1wJyk7XG4gIHZhciBjcnIgPSBtZS5nZXRDdXJyZW50V2luZG93U3RhdHMoKTsvL2xvYWRXaW5kb3dTdGF0cygndGVtcCcpO1xuXG5cbiAgLy/ku6XkuIvjga4z44Gk44Gv44CB44Oc44O844OA44O844KS5aSq44GV44KS5aSJ5pu044GZ44KL44Gf44KB44Gu44KC44Gu44Gg44GMXG4gIC8vIGZ1bmNEb1JlbmRlcuWGheOBp+WHpueQhuOBl+OBpuOBl+OBvuOBhuOBqOOCouODi+ODoeODvOOCt+ODp+ODs+S4reOBq+OBr+ODnOODvOODgOODvOOBjOaPj+OBi+OCjOOBquOBj+OBquOCi1xuICAvL+OCouODi+ODoeODvOOCt+ODp+ODs+S4reOBq+OBr+ODnOODvOODgOODvOOBr+W+qea0u+OBl+OBpuOBhOOBn+OBu+OBhuOBjOiHqueEtuOBquOBruOBp2Z1bmNEb1JlbmRlcuWkluOBp+Wun+ihjOOBmeOCi1xuICBmcmFtZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCA9IHRvLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0O1xuICBmcmFtZS5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZCA9IHRvLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkO1xuICBmcmFtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9IGZyYW1lLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkO1xuXG4gIHZhciBmdW5jRG9SZW5kZXIgPSBmdW5jdGlvbigpIHtcblxuXG4gICAgaWYgKG1vZGVsICYmIG1vZGVsLnJlc3RvcmVQb3NpdGlvbiA9PSBmYWxzZSkge1xuICAgICAgLy/kvY3nva7jga7np7vli5XjgpLkvLTjgo/jgarjgYTloLTlkIjvvIjmnIDlsI/ljJbjgYvjgonmiLvjgZnjgajjgY3jgarjgakpXG4gICAgICB0by5sZWZ0ID0gY3JyLmxlZnQ7XG4gICAgICB0by50b3AgPSBjcnIudG9wO1xuICAgIH1cblxuICAgIGZyYW1lLnNldFBvc2l0aW9uKHRvLmxlZnQsIHRvLnRvcCk7XG5cbiAgICB2YXIgZm9yY2UgPSB0cnVlO1xuICAgIGZyYW1lLnNldFNpemUodG8ud2lkdGgsIHRvLmhlaWdodCwgZm9yY2UpO1xuXG4gICAgZnJhbWUuc2V0UmVzaXphYmxlKHRvLnJlc2l6YWJsZSk7XG4gICAgZnJhbWUuc2V0TW92YWJsZSh0by5tb3ZhYmxlKTtcblxuICAgIG1lLmNsZWFyV2luZG93U3RhdHMobW9kZWwucmVzdG9yZU1vZGUpO1xuXG4gICAgaWYgKG1lLmtleUxpc3RlbmVyKSB7XG4gICAgICAvL+OCv+OCpOODiOODq+ODkOODvOeEoeOBl+acgOWkp+WMlueKtuaFi+OBi+OCieaIu+OBmeOBn+OCgeOBruOCreODvOODquOCueODiuODvOOBr+WJiumZpOOBmeOCi1xuXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG1lLmtleUxpc3RlbmVyKTtcbiAgICAgIGlmIChmcmFtZS5pZnJhbWUpIHtcbiAgICAgICAgZnJhbWUuaWZyYW1lLmNvbnRlbnRXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG1lLmtleUxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIG1lLmtleUxpc3RlbmVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBtZS53aW5kb3dNb2RlID0gJ2RlZmF1bHQnO1xuXG4gICAgaWYgKG1vZGVsICYmIG1vZGVsLmZvcmNlU2hvd0ZyYW1lQ29tcG9uZW50cykge1xuICAgICAgLy/jgqbjgqPjg7Pjg4njgqbjga7jg6Ljg7zjg4nlpInmm7TliY3jgavlj6/oppbnirbmhYvjgavjgYLjgaPjgZ/jg5Xjg6zjg7zjg6DjgrPjg7Pjg53jg7zjg43jg7Pjg4jvvIjplonjgZjjgovjg5zjgr/jg7PpoZ7vvInjgpLlj6/oppbnirbmhYvjgavjgZnjgotcbiAgICAgIGZyYW1lLnNob3dBbGxWaXNpYmxlRnJhbWVDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZnJhbWUuc2hvdygpO1xuXG4gICAgdmFyIGV2ZW50VHlwZSA9ICdyZXN0b3JlZCc7XG4gICAgaWYgKG1vZGVsICYmIG1vZGVsLmV2ZW50VHlwZSkge1xuICAgICAgZXZlbnRUeXBlID0gbW9kZWwuZXZlbnRUeXBlO1xuICAgIH1cblxuICAgIGlmIChtb2RlbCAmJiBtb2RlbC5jYWxsYmFjaykge1xuICAgICAgbW9kZWwuY2FsbGJhY2soXG4gICAgICAgIG1lLmZyYW1lLCB7IGV2ZW50VHlwZTogZXZlbnRUeXBlIH0pO1xuICAgIH1cbiAgICBpZiAobWUuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXSkge1xuICAgICAgbWUuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXShtZS5mcmFtZSwgeyBldmVudFR5cGU6IGV2ZW50VHlwZSB9KTtcbiAgICB9XG4gIH07XG5cblxuICBpZiAobW9kZWwgJiYgbW9kZWwuYW5pbWF0aW9uKSB7XG4gICAgbWUuYW5pbWF0ZUZyYW1lKHtcbiAgICAgIGR1cmF0aW9uOiBtb2RlbC5kdXJhdGlvbiA/IG1vZGVsLmR1cmF0aW9uIDogbWUuYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICBmcmFtZTogZnJhbWUsXG4gICAgICBmcm9tQWxwaGE6IDAsXG4gICAgICB0b0FscGhhOiAxLFxuICAgICAgZnJvbTogY3JyLFxuICAgICAgdG86IHRvLFxuICAgICAgY2FsbGJhY2s6IGZ1bmNEb1JlbmRlclxuICAgIH0pO1xuICB9IGVsc2Uge1xuXG4gICAgZnVuY0RvUmVuZGVyKCk7XG4gIH1cblxuICAvL3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBtZS5yZXNpemVMaXN0ZW5lcik7XG4gIG1lLmV2ZW50TGlzdGVuZXJIZWxwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCBtZS5yZXNpemVMaXN0ZW5lcik7XG4gIGlmIChtZS5tYXRjaFBhcmVudFJlc2l6ZU9ic2VydmVyKSB7XG4gICAgbWUubWF0Y2hQYXJlbnRSZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgbWUubWF0Y2hQYXJlbnRSZXNpemVPYnNlcnZlciA9IG51bGw7XG4gIH1cblxufTtcblxuXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuYW5pbWF0ZUZyYW1lID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgdmFyIG5lZWRSZXF1ZXN0Rm9jdXNBZnRlckFuaW1hdGlvbiA9IGZhbHNlO1xuXG5cbiAgdmFyIGZyb21BbHBoYSA9ICFpc05hTihtb2RlbC5mcm9tQWxwaGEpID8gbW9kZWwuZnJvbUFscGhhIDogMS4wO1xuXG4gIHZhciBmcm9tID0gbW9kZWwuZnJvbTtcbiAgdmFyIHRvID0gbW9kZWwudG87XG5cbiAgdmFyIGFuaW1hdG9yID0gbmV3IENTaW1wbGVMYXlvdXRBbmltYXRvcigpO1xuXG4gIGFuaW1hdG9yLnNldChtb2RlbC5mcmFtZSlcbiAgICAuc2V0RHVyYXRpb24obW9kZWwuZHVyYXRpb24gPyBtb2RlbC5kdXJhdGlvbiA6IG1lLmFuaW1hdGlvbkR1cmF0aW9uKVxuICAgIC5mcm9tUG9zaXRpb24oZnJvbS5sZWZ0LCBmcm9tLnRvcCwgJ0xFRlRfVE9QJylcbiAgICAudG9Qb3NpdGlvbih0by5sZWZ0LCB0by50b3AsICdMRUZUX1RPUCcpXG4gICAgLmZyb21XaWR0aChmcm9tLndpZHRoKVxuICAgIC5mcm9tSGVpZ2h0KGZyb20uaGVpZ2h0KVxuICAgIC50b1dpZHRoKHRvLndpZHRoKVxuICAgIC50b0hlaWdodCh0by5oZWlnaHQpXG4gICAgLmZyb21BbHBoYShmcm9tQWxwaGEpXG4gICAgLnRvQWxwaGEoKG1vZGVsLnRvQWxwaGEgPT0gMCkgPyAwIDogMS4wKVxuICAgIC5lYXNlKG1vZGVsLmVhc2UpXG4gICAgLnN0YXJ0KDAsIG5lZWRSZXF1ZXN0Rm9jdXNBZnRlckFuaW1hdGlvbilcbiAgICAudGhlbihmdW5jdGlvbihhbmltYXRvck9iaikge1xuICAgICAgbW9kZWxbJ2NhbGxiYWNrJ10oKTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogUGVyZm9ybSBjb21wbGV4IHdpbmRvd2luZyB3aXRoIHNpbXBsZSBjb21tYW5kc1xuICogQHBhcmFtIGNtZFxuICogQHBhcmFtIG9wdFxuICovXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuZG9Db21tYW5kID0gZnVuY3Rpb24oY21kLCBvcHQpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuXG4gIGlmIChjbWQgPT09ICdtYXhpbWl6ZScpIHtcbiAgICBtZS5fZGVmYXVsdEZ1bmN0aW9uTWF4aW1pemUobWUuZnJhbWUpO1xuICB9XG4gIGlmIChjbWQgPT09ICdkZW1heGltaXplJykge1xuICAgIG1lLl9kZWZhdWx0RnVuY3Rpb25EZW1heGltaXplKG1lLmZyYW1lKTtcbiAgfVxuICBpZiAoY21kID09PSAncmVzdG9yZScpIHtcbiAgICBtZS5fZGVmYXVsdEZ1bmN0aW9uUmVzdG9yZUZyb21GdWxsc2NyZWVuKG1lLmZyYW1lKVxuICB9XG4gIGlmIChjbWQgPT09ICdtaW5pbWl6ZScpIHtcbiAgICBtZS5fZGVmYXVsdEZ1bmN0aW9uTWluaW1pemUobWUuZnJhbWUpO1xuICB9XG4gIGlmIChjbWQgPT09ICdkZW1pbmltaXplJykge1xuICAgIG1lLl9kZWZhdWx0RnVuY3Rpb25EZW1pbmltaXplKG1lLmZyYW1lKTtcbiAgfVxuICBpZiAoY21kID09PSAnaGlkZScpIHtcbiAgICBtZS5fZGVmYXVsdEZ1bmN0aW9uSGlkZShtZS5mcmFtZSk7XG4gIH1cbiAgaWYgKGNtZCA9PT0gJ2RlaGlkZScpIHtcbiAgICBtZS5fZGVmYXVsdEZ1bmN0aW9uRGVoaWRlKG1lLmZyYW1lKTtcbiAgfVxufVxuXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuX2RlZmF1bHRGdW5jdGlvbk1heGltaXplID0gZnVuY3Rpb24oX2ZyYW1lLCBldnQpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgdmFyIG1vZGVsID0gbWUub3B0cztcblxuICB2YXIgcGFyYW0gPSB7XG4gICAgLy8gREVQUkVDQVRFRDogbWF4aW1pemVXaXRob3V0VGl0bGVCYXIgaXMgZGVwcmVjYXRlZFxuICAgIC8vIFVTRSBtYXhpbWl6ZVBhcmFtLmZ1bGxTY3JlZW5cbiAgICBmdWxsU2NyZWVuOiAobW9kZWwubWF4aW1pemVXaXRob3V0VGl0bGVCYXIgPT09IHRydWUpID8gdHJ1ZSA6IGZhbHNlLFxuXG4gICAgLy8gREVQUkVDQVRFRDogbW9kZWwucmVzdG9yZUtleSBpcyBkZXByZWNhdGVkXG4gICAgLy8gVVNFIG1heGltaXplUGFyYW0ucmVzdG9yZUtleVxuXG4gICAgLy8gSWYgeW91IHdhbnQgdG8gdXNlIHRoZSBrZXkgaW5wdXQgaW5zdGVhZCBvZiB0aGUgdGl0bGUgYmFyLFxuICAgIC8vIHlvdSBjYW4gc3BlY2lmeSB0aGUga2V5IGJlY2F1c2UgaXQgaXMgbm90IHBvc3NpYmxlXG4gICAgLy8gdG8gcmVjb3ZlciB3aXRoIHRoZSBidXR0b24gd2hlbiBoaWRpbmcgdGhlIHRpdGxlIGJhci5cbiAgICByZXN0b3JlS2V5OiBtb2RlbC5yZXN0b3JlS2V5ID8gbW9kZWwucmVzdG9yZUtleSA6ICdFc2NhcGUnLFxuXG4gICAgLy8gREVQUkVDQVRFRDogbW9kZWwucmVzdG9yZUR1cmF0aW9uIGlzIGRlcHJlY2F0ZWRcbiAgICAvLyBVU0UgbWF4aW1pemVQYXJhbS5yZXN0b3JlRHVyYXRpb25cbiAgICByZXN0b3JlRHVyYXRpb246IG1vZGVsLnJlc3RvcmVEdXJhdGlvbixcbiAgfTtcblxuICBpZiAodGhpcy5tYXhpbWl6ZVBhcmFtKSB7XG4gICAgLy8gd3JpdGUgbWF4aW1pemVQYXJhbSBpbnRvIHBhcmFtXG4gICAgbWVyZ2VEZWVwbHkoeyBvcDogJ292ZXJ3cml0ZS1tZXJnZScsIG9iamVjdDE6IHBhcmFtLCBvYmplY3QyOiB0aGlzLm1heGltaXplUGFyYW0gfSk7XG4gIH1cblxuICAvL+OCpuOCo+ODs+ODieOCpuOCkuacgOWkp+WMluOBmeOCi1xuICBfZnJhbWUuY29udHJvbC5kb01heGltaXplKHBhcmFtKTtcbn07XG5cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5fZGVmYXVsdEZ1bmN0aW9uRGVtYXhpbWl6ZSA9IGZ1bmN0aW9uKF9mcmFtZSwgZXZ0KSB7XG4gIF9mcmFtZS5jb250cm9sLmRvRGVtYXhpbWl6ZShcbiAgICB7fSk7XG59O1xuXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuX2RlZmF1bHRGdW5jdGlvblJlc3RvcmVGcm9tRnVsbHNjcmVlbiA9IGZ1bmN0aW9uKF9mcmFtZSwgZXZ0KSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIF9mcmFtZS5jb250cm9sLmRvRGVtYXhpbWl6ZSh7XG4gICAgZHVyYXRpb246IG1lLnJlc3RvcmVEdXJhdGlvbiA/IG1lLnJlc3RvcmVEdXJhdGlvbiA6IG51bGwsXG4gICAgY2FsbGJhY2s6IG1lLnJlc3RvcmVDYWxsYmFjayA/IG1lLnJlc3RvcmVDYWxsYmFjayA6IG51bGxcbiAgfSk7XG59O1xuXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuX2RlZmF1bHRGdW5jdGlvbk1pbmltaXplID0gZnVuY3Rpb24oX2ZyYW1lLCBldnQpIHtcblxuICAvLydtaW5pbWl6ZUJ1dHRvbifjgYzmirzjgZXjgozjgZ/jgajjgY3jgavjgIHmnIDlsI/ljJbjgZfjgZ/jgYTloLTlkIhcbiAgX2ZyYW1lLmNvbnRyb2wuZG9NaW5pbWl6ZSh0aGlzLm1pbmltaXplUGFyYW0pO1xuXG59O1xuXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuX2RlZmF1bHRGdW5jdGlvbkRlbWluaW1pemUgPSBmdW5jdGlvbihfZnJhbWUsIGV2dCkge1xuICBfZnJhbWUuY29udHJvbC5kb0RlbWluaW1pemUodGhpcy5kZW1pbmltaXplUGFyYW0pO1xufTtcblxuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLl9kZWZhdWx0RnVuY3Rpb25IaWRlID0gZnVuY3Rpb24oX2ZyYW1lLCBldnQpIHtcblxuICB2YXIgcGFyYW0gPSB7XG4gICAgYWxpZ246ICdDRU5URVJfQk9UVE9NJ1xuICB9O1xuICBpZiAodGhpcy5oaWRlUGFyYW0pIHtcbiAgICBwYXJhbSA9IHRoaXMuaGlkZVBhcmFtO1xuICB9XG4gIF9mcmFtZS5jb250cm9sLmRvSGlkZShwYXJhbSk7XG5cbn07XG5cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5fZGVmYXVsdEZ1bmN0aW9uRGVoaWRlID0gZnVuY3Rpb24oX2ZyYW1lLCBldnQpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgX2ZyYW1lLmNvbnRyb2wuZG9EZWhpZGUobWUuZGVoaWRlUGFyYW0pO1xufTtcblxuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLnNldHVwRGVmYXVsdEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIGlmIChtZS5tYXhpbWl6ZUJ1dHRvbikge1xuICAgIC8v44Kk44OZ44Oz44OI44Gv44Kq44O844OQ44O844Op44Kk44OJ44GV44KM44KLXG4gICAgbWUuZnJhbWUub24obWUubWF4aW1pemVCdXR0b24sICdjbGljaycsIG1lLl9kZWZhdWx0RnVuY3Rpb25NYXhpbWl6ZS5iaW5kKG1lKSk7XG4gIH1cblxuICBpZiAobWUuZGVtYXhpbWl6ZUJ1dHRvbikge1xuICAgIG1lLmZyYW1lLm9uKG1lLmRlbWF4aW1pemVCdXR0b24sICdjbGljaycsIG1lLl9kZWZhdWx0RnVuY3Rpb25EZW1heGltaXplLmJpbmQobWUpKTtcbiAgfVxuXG4gIGlmIChtZS5taW5pbWl6ZUJ1dHRvbikge1xuICAgIG1lLmZyYW1lLm9uKG1lLm1pbmltaXplQnV0dG9uLCAnY2xpY2snLCBtZS5fZGVmYXVsdEZ1bmN0aW9uTWluaW1pemUuYmluZChtZSkpO1xuICB9XG5cbiAgaWYgKG1lLmRlbWluaW1pemVCdXR0b24pIHtcbiAgICBtZS5mcmFtZS5vbihtZS5kZW1pbmltaXplQnV0dG9uLCAnY2xpY2snLCBtZS5fZGVmYXVsdEZ1bmN0aW9uRGVtaW5pbWl6ZS5iaW5kKG1lKSk7XG4gIH1cblxuICBpZiAobWUuaGlkZUJ1dHRvbikge1xuICAgIG1lLmZyYW1lLm9uKG1lLmhpZGVCdXR0b24sICdjbGljaycsIG1lLl9kZWZhdWx0RnVuY3Rpb25IaWRlLmJpbmQobWUpKTtcbiAgfVxuXG4gIGlmIChtZS5oaWRlQnV0dG9ucykge1xuICAgIGZvciAodmFyIGtleSBpbiBtZS5oaWRlQnV0dG9ucykge1xuICAgICAgdmFyIGhpZGVCdXR0b24gPSBtZS5oaWRlQnV0dG9uc1trZXldO1xuICAgICAgaWYgKGhpZGVCdXR0b24pIHtcbiAgICAgICAgbWUuZnJhbWUub24oaGlkZUJ1dHRvbiwgJ2NsaWNrJywgbWUuX2RlZmF1bHRGdW5jdGlvbkhpZGUuYmluZChtZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdpbmRvd0V2ZW50SGVscGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==