module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/about-four","2":"components/about-one","3":"components/about-three","4":"components/about-two","5":"components/become-volunteer-form","6":"components/call-to-action-one","7":"components/call-to-action-two","8":"components/causes-card","9":"components/causes-carousel","10":"components/causes-carousel-three","11":"components/causes-carousel-two","12":"components/causes-grid","13":"components/causes-post","14":"components/causes-sidebar","15":"components/causes-single","16":"components/contact-home","17":"components/contact-page-form","18":"components/daily-updates","19":"components/event-card","20":"components/event-carousel","21":"components/event-single","22":"components/events-grid","23":"components/feature-one","24":"components/feature-three","25":"components/feature-two","26":"components/footer","27":"components/funfact-one","28":"components/gallery-card","29":"components/gallery-carousel","30":"components/gallery-grid","31":"components/google-map","32":"components/header","33":"components/header-three","34":"components/header-two","35":"components/main-slider-counter","36":"components/main-slider-one","37":"components/main-slider-three","38":"components/main-slider-two","39":"components/mobile-drawer","40":"components/need-help","41":"components/news-card","42":"components/news-grid","43":"components/news-home","44":"components/news-home-three","45":"components/news-home-two","46":"components/news-sidebar","47":"components/news-single","48":"components/page-header","49":"components/post","50":"components/post-author","51":"components/post-comments","52":"components/question-answer","53":"components/search-popup","54":"components/section-title","55":"components/sponsors-one","56":"components/testimonials-card","57":"components/testimonials-carousel-one","58":"components/testimonials-grid-one","59":"components/three-boxes","60":"components/video-one","61":"components/volunteer-about","62":"components/volunteer-card","63":"components/volunteer-grid","64":"pages/about","65":"pages/become-volunteer","66":"pages/causes","67":"pages/causes-details","68":"pages/contact","69":"pages/events","70":"pages/events-details","71":"pages/founder","72":"pages/gallery","73":"pages/index","74":"pages/index-2","75":"pages/index-3","76":"pages/news","77":"pages/news-details","78":"pages/volunteers"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
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

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("ad839196", content, true, context)
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("252f4f7d", content, true, context)
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("node-fetch-native");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASBAMAAABGPIgdAAAAKlBMVEUAAAD///////////////////////////////////////////////////+Gu8ovAAAADXRSTlMAOKOJCsDeXBJxKRxJ9ZJhEAAAAJlJREFUCNctzssJwkAUheFjfKFRSNbizu2ADQixANdu04CQEqYBwQYES7EBF1FiQsLpJedmsvn4mTsvAJNEIDVmt6+MmMs56QHHUv0kM2zIFohpKxeyGLY8bGiH7vxLspEf1rqWPKpPrN5YkldvU/I1FW3ofGH6ocutWYSOhE4761XovezW1oneHaeVvuz4A3TpAUCcZvK8A3qedFv77WjdBQAAAABJRU5ErkJggg=="

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17);
module.exports = __webpack_require__(58);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;align-items:center;background:#f7f8fb;bottom:0;color:#47494e;display:flex;flex-direction:column;font-family:sans-serif;font-weight:100!important;justify-content:center;left:0;padding:1rem;position:absolute;right:0;text-align:center;top:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{color:#47494e;font-size:1.5rem;margin-bottom:8px;margin-top:15px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;-webkit-text-decoration:none;text-decoration:none}.__nuxt-error-page .logo{bottom:12px;left:12px;position:fixed}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{background-color:#000;height:2px;left:0;opacity:1;position:fixed;right:0;top:0;transition:width .1s,opacity .4s;width:0;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("1867e450", content, true)

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\r\nAnimate.css - http://daneden.me/animate\r\nLicensed under the MIT license - http://opensource.org/licenses/MIT\r\n\r\nCopyright (c) 2015 Daniel Eden\r\n*/.animated{animation-duration:1s;animation-fill-mode:both}.animated.infinite{animation-iteration-count:infinite}.animated.hinge{animation-duration:2s}.animated.bounceIn,.animated.bounceOut,.animated.flipOutX,.animated.flipOutY{animation-duration:.75s}@keyframes bounce{0%,20%,53%,80%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1);transform:translateZ(0)}40%,43%{animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-30px,0)}70%{animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-15px,0)}90%{transform:translate3d(0,-4px,0)}}.bounce{animation-name:bounce;transform-origin:center bottom}@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}.flash{animation-name:flash}@keyframes pulse{0%{transform:scaleX(1)}50%{transform:scale3d(1.05,1.05,1.05)}to{transform:scaleX(1)}}.pulse{animation-name:pulse}@keyframes rubberBand{0%{transform:scaleX(1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}to{transform:scaleX(1)}}.rubberBand{animation-name:rubberBand}@keyframes shake{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}.shake{animation-name:shake}@keyframes swing{20%{transform:rotate(15deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-5deg)}to{transform:rotate(0deg)}}.swing{animation-name:swing;transform-origin:top center}@keyframes tada{0%{transform:scaleX(1)}10%,20%{transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{transform:scaleX(1)}}.tada{animation-name:tada}@keyframes wobble{0%{transform:none}15%{transform:translate3d(-25%,0,0) rotate(-5deg)}30%{transform:translate3d(20%,0,0) rotate(3deg)}45%{transform:translate3d(-15%,0,0) rotate(-3deg)}60%{transform:translate3d(10%,0,0) rotate(2deg)}75%{transform:translate3d(-5%,0,0) rotate(-1deg)}to{transform:none}}.wobble{animation-name:wobble}@keyframes jello{11.1%{transform:none}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{transform:skewX(.390625deg) skewY(.390625deg)}88.8%{transform:skewX(-.1953125deg) skewY(-.1953125deg)}to{transform:none}}.jello{animation-name:jello;transform-origin:center}@keyframes bounceIn{0%,20%,40%,60%,80%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}.bounceIn{animation-name:bounceIn}@keyframes bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}.bounceInDown{animation-name:bounceInDown}@keyframes bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}.bounceInLeft{animation-name:bounceInLeft}@keyframes bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}.bounceInRight{animation-name:bounceInRight}@keyframes bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}.bounceInUp{animation-name:bounceInUp}@keyframes bounceOut{20%{transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}to{opacity:0;transform:scale3d(.3,.3,.3)}}.bounceOut{animation-name:bounceOut}@keyframes bounceOutDown{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.bounceOutDown{animation-name:bounceOutDown}@keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}.bounceOutLeft{animation-name:bounceOutLeft}@keyframes bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}.bounceOutRight{animation-name:bounceOutRight}@keyframes bounceOutUp{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}.bounceOutUp{animation-name:bounceOutUp}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.fadeIn{animation-name:fadeIn}@keyframes fadeInDown{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}.fadeInDown{animation-name:fadeInDown}@keyframes fadeInDownBig{0%{opacity:0;transform:translateY(-2000px)}to{opacity:1;transform:translateY(0)}}.fadeInDownBig{animation-name:fadeInDownBig}@keyframes fadeInLeft{0%{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}.fadeInLeft{animation-name:fadeInLeft}@keyframes fadeInLeftBig{0%{opacity:0;transform:translateX(-2000px)}to{opacity:1;transform:translateX(0)}}.fadeInLeftBig{animation-name:fadeInLeftBig}@keyframes fadeInRight{0%{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}}.fadeInRight{animation-name:fadeInRight}@keyframes fadeInRightBig{0%{opacity:0;transform:translateX(2000px)}to{opacity:1;transform:translateX(0)}}.fadeInRightBig{animation-name:fadeInRightBig}@keyframes fadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.fadeInUp{animation-name:fadeInUp}@keyframes fadeInUpBig{0%{opacity:0;transform:translateY(2000px)}to{opacity:1;transform:translateY(0)}}.fadeInUpBig{animation-name:fadeInUpBig}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.fadeOut{animation-name:fadeOut}@keyframes fadeOutDown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(20px)}}.fadeOutDown{animation-name:fadeOutDown}@keyframes fadeOutDownBig{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(2000px)}}.fadeOutDownBig{animation-name:fadeOutDownBig}@keyframes fadeOutLeft{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-20px)}}.fadeOutLeft{animation-name:fadeOutLeft}@keyframes fadeOutLeftBig{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-2000px)}}.fadeOutLeftBig{animation-name:fadeOutLeftBig}@keyframes fadeOutRight{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(20px)}}.fadeOutRight{animation-name:fadeOutRight}@keyframes fadeOutRightBig{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(2000px)}}.fadeOutRightBig{animation-name:fadeOutRightBig}@keyframes fadeOutUp{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-20px)}}.fadeOutUp{animation-name:fadeOutUp}@keyframes fadeOutUpBig{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-2000px)}}.fadeOutUpBig{animation-name:fadeOutUpBig}@keyframes flip{0%{animation-timing-function:ease-out;transform:perspective(400px) rotateY(-1turn)}40%{animation-timing-function:ease-out;transform:perspective(400px) translateZ(150px) rotateY(-190deg)}50%{animation-timing-function:ease-in;transform:perspective(400px) translateZ(150px) rotateY(-170deg)}80%{animation-timing-function:ease-in;transform:perspective(400px) scale3d(.95,.95,.95)}to{animation-timing-function:ease-in;transform:perspective(400px)}}.animated.flip{animation-name:flip;backface-visibility:visible}@keyframes flipInX{0%{animation-timing-function:ease-in;opacity:0;transform:perspective(400px) rotateX(90deg)}40%{animation-timing-function:ease-in;transform:perspective(400px) rotateX(-20deg)}60%{opacity:1;transform:perspective(400px) rotateX(10deg)}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}.flipInX{animation-name:flipInX;backface-visibility:visible!important}@keyframes flipInY{0%{animation-timing-function:ease-in;opacity:0;transform:perspective(400px) rotateY(90deg)}40%{animation-timing-function:ease-in;transform:perspective(400px) rotateY(-20deg)}60%{opacity:1;transform:perspective(400px) rotateY(10deg)}80%{transform:perspective(400px) rotateY(-5deg)}to{transform:perspective(400px)}}.flipInY{animation-name:flipInY;backface-visibility:visible!important}@keyframes flipOutX{0%{transform:perspective(400px)}30%{opacity:1;transform:perspective(400px) rotateX(-20deg)}to{opacity:0;transform:perspective(400px) rotateX(90deg)}}.flipOutX{animation-name:flipOutX;backface-visibility:visible!important}@keyframes flipOutY{0%{transform:perspective(400px)}30%{opacity:1;transform:perspective(400px) rotateY(-15deg)}to{opacity:0;transform:perspective(400px) rotateY(90deg)}}.flipOutY{animation-name:flipOutY;backface-visibility:visible!important}@keyframes lightSpeedIn{0%{opacity:0;transform:translate3d(100%,0,0) skewX(-30deg)}60%{opacity:1;transform:skewX(20deg)}80%{opacity:1;transform:skewX(-5deg)}to{opacity:1;transform:none}}.lightSpeedIn{animation-name:lightSpeedIn;animation-timing-function:ease-out}@keyframes lightSpeedOut{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) skewX(30deg)}}.lightSpeedOut{animation-name:lightSpeedOut;animation-timing-function:ease-in}@keyframes rotateIn{0%{opacity:0;transform:rotate(-200deg);transform-origin:center}to{opacity:1;transform:none;transform-origin:center}}.rotateIn{animation-name:rotateIn}@keyframes rotateInDownLeft{0%{opacity:0;transform:rotate(-45deg);transform-origin:left bottom}to{opacity:1;transform:none;transform-origin:left bottom}}.rotateInDownLeft{animation-name:rotateInDownLeft}@keyframes rotateInDownRight{0%{opacity:0;transform:rotate(45deg);transform-origin:right bottom}to{opacity:1;transform:none;transform-origin:right bottom}}.rotateInDownRight{animation-name:rotateInDownRight}@keyframes rotateInUpLeft{0%{opacity:0;transform:rotate(45deg);transform-origin:left bottom}to{opacity:1;transform:none;transform-origin:left bottom}}.rotateInUpLeft{animation-name:rotateInUpLeft}@keyframes rotateInUpRight{0%{opacity:0;transform:rotate(-90deg);transform-origin:right bottom}to{opacity:1;transform:none;transform-origin:right bottom}}.rotateInUpRight{animation-name:rotateInUpRight}@keyframes rotateOut{0%{opacity:1;transform-origin:center}to{opacity:0;transform:rotate(200deg);transform-origin:center}}.rotateOut{animation-name:rotateOut}@keyframes rotateOutDownLeft{0%{opacity:1;transform-origin:left bottom}to{opacity:0;transform:rotate(45deg);transform-origin:left bottom}}.rotateOutDownLeft{animation-name:rotateOutDownLeft}@keyframes rotateOutDownRight{0%{opacity:1;transform-origin:right bottom}to{opacity:0;transform:rotate(-45deg);transform-origin:right bottom}}.rotateOutDownRight{animation-name:rotateOutDownRight}@keyframes rotateOutUpLeft{0%{opacity:1;transform-origin:left bottom}to{opacity:0;transform:rotate(-45deg);transform-origin:left bottom}}.rotateOutUpLeft{animation-name:rotateOutUpLeft}@keyframes rotateOutUpRight{0%{opacity:1;transform-origin:right bottom}to{opacity:0;transform:rotate(90deg);transform-origin:right bottom}}.rotateOutUpRight{animation-name:rotateOutUpRight}@keyframes hinge{0%{animation-timing-function:ease-in-out;transform-origin:top left}20%,60%{animation-timing-function:ease-in-out;transform:rotate(80deg);transform-origin:top left}40%,80%{animation-timing-function:ease-in-out;opacity:1;transform:rotate(60deg);transform-origin:top left}to{opacity:0;transform:translate3d(0,700px,0)}}.hinge{animation-name:hinge}@keyframes rollIn{0%{opacity:0;transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;transform:none}}.rollIn{animation-name:rollIn}@keyframes rollOut{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) rotate(120deg)}}.rollOut{animation-name:rollOut}@keyframes zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}.zoomIn{animation-name:zoomIn}@keyframes zoomInStable{0%{opacity:0;transform:scale3d(.3,.3,.3)}33.333%{opacity:1;transform:scale3d(1.1,1.1,1.1)}66.666666%{opacity:1;transform:scaleX(1)}}.zoomInStable{animation-name:zoomInStable}@keyframes zoomInDown{0%{animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0)}60%{animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0)}}.zoomInDown{animation-name:zoomInDown}@keyframes zoomInLeft{0%{animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0)}60%{animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;transform:scale3d(.475,.475,.475) translate3d(10px,0,0)}}.zoomInLeft{animation-name:zoomInLeft}@keyframes zoomInRight{0%{animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;transform:scale3d(.1,.1,.1) translate3d(1000px,0,0)}60%{animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;transform:scale3d(.475,.475,.475) translate3d(-10px,0,0)}}.zoomInRight{animation-name:zoomInRight}@keyframes zoomInUp{0%{animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,1000px,0)}60%{animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0)}}.zoomInUp{animation-name:zoomInUp}@keyframes zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.zoomOut{animation-name:zoomOut}@keyframes zoomOutDown{40%{animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0)}to{animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform-origin:center bottom}}.zoomOutDown{animation-name:zoomOutDown}@keyframes zoomOutLeft{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(-2000px,0,0);transform-origin:left center}}.zoomOutLeft{animation-name:zoomOutLeft}@keyframes zoomOutRight{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(2000px,0,0);transform-origin:right center}}.zoomOutRight{animation-name:zoomOutRight}@keyframes zoomOutUp{40%{animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0)}to{animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform-origin:center bottom}}.zoomOutUp{animation-name:zoomOutUp}@keyframes slideInDown{0%{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translateZ(0)}}.slideInDown{animation-name:slideInDown}@keyframes slideInLeft{0%{transform:translate3d(-100%,0,0);visibility:visible}to{transform:translateZ(0)}}.slideInLeft{animation-name:slideInLeft}@keyframes slideInRight{0%{transform:translate3d(100%,0,0);visibility:visible}to{transform:translateZ(0)}}.slideInRight{animation-name:slideInRight}@keyframes slideInUp{0%{transform:translate3d(0,100%,0);visibility:visible}to{transform:translateZ(0)}}.slideInUp{animation-name:slideInUp}@keyframes slideOutDown{0%{transform:translateZ(0)}to{transform:translate3d(0,100%,0);visibility:hidden}}.slideOutDown{animation-name:slideOutDown}@keyframes slideOutLeft{0%{transform:translateZ(0)}to{transform:translate3d(-100%,0,0);visibility:hidden}}.slideOutLeft{animation-name:slideOutLeft}@keyframes slideOutRight{0%{transform:translateZ(0)}to{transform:translate3d(100%,0,0);visibility:hidden}}.slideOutRight{animation-name:slideOutRight}@keyframes slideOutUp{0%{transform:translateZ(0)}to{transform:translate3d(0,-100%,0);visibility:hidden}}.slideOutUp{animation-name:slideOutUp}@keyframes anime{0%{opacity:0;transform:scaleY(0);-webkit-transform:scaleY(0);-moz-transform:scaleY(0);-ms-transform:scaleY(0);-o-transform:scaleY(0)}to{opacity:1;transform:scaleY(1);-webkit-transform:scaleY(1);-ms-transform:scaleY(1);-o-transform:scaleY(1);-moz-transform:scaleY(1)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("45fbb22a", content, true)

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n/*!\n * Bootstrap v5.1.3 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-body-color-rgb:33,37,41;--bs-body-bg-rgb:255,255,255;--bs-font-sans-serif:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--bs-gradient:linear-gradient(180deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-bg:#fff}*,:after,:before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent;background-color:#fff;background-color:var(--bs-body-bg);color:#212529;color:var(--bs-body-color);font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Segoe UI\",\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-family:var(--bs-body-font-family);font-size:1rem;font-size:var(--bs-body-font-size);font-weight:400;font-weight:var(--bs-body-font-weight);line-height:1.5;line-height:var(--bs-body-line-height);margin:0;text-align:var(--bs-body-text-align)}hr{background-color:currentColor;border:0;color:inherit;margin:1rem 0;opacity:.25}hr:not([size]){height:1px}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{font-weight:500;line-height:1.2;margin-bottom:.5rem;margin-top:0}.h1,h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){.h1,h1{font-size:2.5rem}}.h2,h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){.h2,h2{font-size:2rem}}.h3,h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){.h3,h3{font-size:1.75rem}}.h4,h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){.h4,h4{font-size:1.5rem}}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}p{margin-bottom:1rem;margin-top:0}abbr[data-bs-original-title],abbr[title]{cursor:help;-webkit-text-decoration:underline dotted;text-decoration:underline;text-decoration:underline dotted;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{font-style:normal;line-height:inherit;margin-bottom:1rem}ol,ul{padding-left:2rem}dl,ol,ul{margin-bottom:1rem;margin-top:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}.small,small{font-size:.875em}.mark,mark{background-color:#fcf8e3;padding:.2em}sub,sup{font-size:.75em;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#0d6efd;-webkit-text-decoration:underline;text-decoration:underline}a:hover{color:#0a58ca}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;-webkit-text-decoration:none;text-decoration:none}code,kbd,pre,samp{direction:ltr;font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-family:var(--bs-font-monospace);font-size:1em;unicode-bidi:bidi-override}pre{display:block;font-size:.875em;margin-bottom:1rem;margin-top:0;overflow:auto}pre code{color:inherit;font-size:inherit;word-break:normal}code{word-wrap:break-word;color:#d63384;font-size:.875em}a>code{color:inherit}kbd{background-color:#212529;border-radius:.2rem;color:#fff;font-size:.875em;padding:.2rem .4rem}kbd kbd{font-size:1em;font-weight:700;padding:0}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{border-collapse:collapse;caption-side:bottom}caption{color:#6c757d;padding-bottom:.5rem;padding-top:.5rem;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}tbody,td,tfoot,th,thead,tr{border:0 solid;border-color:inherit}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit;margin:0}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}[list]::-webkit-calendar-picker-indicator{display:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}::-moz-focus-inner{border-style:none;padding:0}textarea{resize:vertical}fieldset{border:0;margin:0;min-width:0;padding:0}legend{float:left;font-size:calc(1.275rem + .3vw);line-height:inherit;margin-bottom:.5rem;padding:0;width:100%}@media (min-width:1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::file-selector-button{font:inherit}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}output{display:inline-block}iframe{border:0}summary{cursor:pointer;display:list-item}progress{vertical-align:baseline}[hidden]{display:none!important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-6{font-size:2.5rem}}.list-inline,.list-unstyled{list-style:none;padding-left:0}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:.875em;text-transform:uppercase}.blockquote{font-size:1.25rem;margin-bottom:1rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{color:#6c757d;font-size:.875em;margin-bottom:1rem;margin-top:-1rem}.blockquote-footer:before{content:\"— \"}.img-fluid,.img-thumbnail{height:auto;max-width:100%}.img-thumbnail{background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;padding:.25rem}.figure{display:inline-block}.figure-img{line-height:1;margin-bottom:.5rem}.figure-caption{color:#6c757d;font-size:.875em}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{margin-left:auto;margin-right:auto;padding-left:.75rem;padding-left:var(--bs-gutter-x,.75rem);padding-right:.75rem;padding-right:var(--bs-gutter-x,.75rem);width:100%}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}@media (min-width:1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1320px}}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-left:-.75rem;margin-left:calc(var(--bs-gutter-x)*-.5);margin-right:-.75rem;margin-right:calc(var(--bs-gutter-x)*-.5);margin-top:0;margin-top:calc(var(--bs-gutter-y)*-1)}.row>*{flex-shrink:0;margin-top:var(--bs-gutter-y);max-width:100%;padding-left:calc(var(--bs-gutter-x)*.5);padding-right:calc(var(--bs-gutter-x)*.5);width:100%}.col{flex:1 0 0%}.row-cols-auto>*{flex:0 0 auto;width:auto}.row-cols-1>*{flex:0 0 auto;width:100%}.row-cols-2>*{flex:0 0 auto;width:50%}.row-cols-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*{flex:0 0 auto;width:25%}.row-cols-5>*{flex:0 0 auto;width:20%}.row-cols-6>*{flex:0 0 auto;width:16.6666666667%}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333333%}.col-5{flex:0 0 auto;width:41.66666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333333%}.col-8{flex:0 0 auto;width:66.66666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333333%}.col-11{flex:0 0 auto;width:91.66666667%}.col-12{flex:0 0 auto;width:100%}.offset-1{margin-left:8.33333333%}.offset-2{margin-left:16.66666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333333%}.offset-5{margin-left:41.66666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333333%}.offset-8{margin-left:66.66666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333333%}.offset-11{margin-left:91.66666667%}.g-0,.gx-0{--bs-gutter-x:0}.g-0,.gy-0{--bs-gutter-y:0}.g-1,.gx-1{--bs-gutter-x:0.25rem}.g-1,.gy-1{--bs-gutter-y:0.25rem}.g-2,.gx-2{--bs-gutter-x:0.5rem}.g-2,.gy-2{--bs-gutter-y:0.5rem}.g-3,.gx-3{--bs-gutter-x:1rem}.g-3,.gy-3{--bs-gutter-y:1rem}.g-4,.gx-4{--bs-gutter-x:1.5rem}.g-4,.gy-4{--bs-gutter-y:1.5rem}.g-5,.gx-5{--bs-gutter-x:3rem}.g-5,.gy-5{--bs-gutter-y:3rem}@media (min-width:576px){.col-sm{flex:1 0 0%}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.6666666667%}.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.33333333%}.col-sm-2{flex:0 0 auto;width:16.66666667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.33333333%}.col-sm-5{flex:0 0 auto;width:41.66666667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.33333333%}.col-sm-8{flex:0 0 auto;width:66.66666667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.33333333%}.col-sm-11{flex:0 0 auto;width:91.66666667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333333%}.offset-sm-2{margin-left:16.66666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333333%}.offset-sm-5{margin-left:41.66666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333333%}.offset-sm-8{margin-left:66.66666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333333%}.offset-sm-11{margin-left:91.66666667%}.g-sm-0,.gx-sm-0{--bs-gutter-x:0}.g-sm-0,.gy-sm-0{--bs-gutter-y:0}.g-sm-1,.gx-sm-1{--bs-gutter-x:0.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y:0.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x:0.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y:0.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x:1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y:1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x:1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y:1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x:3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y:3rem}}@media (min-width:768px){.col-md{flex:1 0 0%}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.6666666667%}.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.33333333%}.col-md-2{flex:0 0 auto;width:16.66666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.33333333%}.col-md-5{flex:0 0 auto;width:41.66666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.33333333%}.col-md-8{flex:0 0 auto;width:66.66666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.33333333%}.col-md-11{flex:0 0 auto;width:91.66666667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333333%}.offset-md-2{margin-left:16.66666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333333%}.offset-md-5{margin-left:41.66666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333333%}.offset-md-8{margin-left:66.66666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333333%}.offset-md-11{margin-left:91.66666667%}.g-md-0,.gx-md-0{--bs-gutter-x:0}.g-md-0,.gy-md-0{--bs-gutter-y:0}.g-md-1,.gx-md-1{--bs-gutter-x:0.25rem}.g-md-1,.gy-md-1{--bs-gutter-y:0.25rem}.g-md-2,.gx-md-2{--bs-gutter-x:0.5rem}.g-md-2,.gy-md-2{--bs-gutter-y:0.5rem}.g-md-3,.gx-md-3{--bs-gutter-x:1rem}.g-md-3,.gy-md-3{--bs-gutter-y:1rem}.g-md-4,.gx-md-4{--bs-gutter-x:1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y:1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x:3rem}.g-md-5,.gy-md-5{--bs-gutter-y:3rem}}@media (min-width:992px){.col-lg{flex:1 0 0%}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.6666666667%}.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.33333333%}.col-lg-2{flex:0 0 auto;width:16.66666667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.33333333%}.col-lg-5{flex:0 0 auto;width:41.66666667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.33333333%}.col-lg-8{flex:0 0 auto;width:66.66666667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.33333333%}.col-lg-11{flex:0 0 auto;width:91.66666667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333333%}.offset-lg-2{margin-left:16.66666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333333%}.offset-lg-5{margin-left:41.66666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333333%}.offset-lg-8{margin-left:66.66666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333333%}.offset-lg-11{margin-left:91.66666667%}.g-lg-0,.gx-lg-0{--bs-gutter-x:0}.g-lg-0,.gy-lg-0{--bs-gutter-y:0}.g-lg-1,.gx-lg-1{--bs-gutter-x:0.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y:0.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x:0.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y:0.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x:1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y:1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x:1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y:1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x:3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y:3rem}}@media (min-width:1200px){.col-xl{flex:1 0 0%}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.33333333%}.col-xl-2{flex:0 0 auto;width:16.66666667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.33333333%}.col-xl-5{flex:0 0 auto;width:41.66666667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.33333333%}.col-xl-8{flex:0 0 auto;width:66.66666667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.33333333%}.col-xl-11{flex:0 0 auto;width:91.66666667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333333%}.offset-xl-2{margin-left:16.66666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333333%}.offset-xl-5{margin-left:41.66666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333333%}.offset-xl-8{margin-left:66.66666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333333%}.offset-xl-11{margin-left:91.66666667%}.g-xl-0,.gx-xl-0{--bs-gutter-x:0}.g-xl-0,.gy-xl-0{--bs-gutter-y:0}.g-xl-1,.gx-xl-1{--bs-gutter-x:0.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y:0.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x:0.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y:0.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x:1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y:1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x:1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y:1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x:3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y:3rem}}@media (min-width:1400px){.col-xxl{flex:1 0 0%}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.33333333%}.col-xxl-2{flex:0 0 auto;width:16.66666667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.33333333%}.col-xxl-5{flex:0 0 auto;width:41.66666667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.33333333%}.col-xxl-8{flex:0 0 auto;width:66.66666667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.33333333%}.col-xxl-11{flex:0 0 auto;width:91.66666667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333333%}.offset-xxl-2{margin-left:16.66666667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333333%}.offset-xxl-5{margin-left:41.66666667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333333%}.offset-xxl-8{margin-left:66.66666667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333333%}.offset-xxl-11{margin-left:91.66666667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x:0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y:0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x:0.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y:0.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x:0.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y:0.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x:1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y:1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x:1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y:1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x:3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y:3rem}}.table{--bs-table-bg:transparent;--bs-table-accent-bg:transparent;--bs-table-striped-color:#212529;--bs-table-striped-bg:rgba(0,0,0,.05);--bs-table-active-color:#212529;--bs-table-active-bg:rgba(0,0,0,.1);--bs-table-hover-color:#212529;--bs-table-hover-bg:rgba(0,0,0,.075);border-color:#dee2e6;color:#212529;margin-bottom:1rem;vertical-align:top;width:100%}.table>:not(caption)>*>*{background-color:var(--bs-table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg);padding:.5rem}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table>:not(:first-child){border-top:2px solid}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-borderless>:not(:first-child){border-top-width:0}.table-striped>tbody>tr:nth-of-type(odd)>*{--bs-table-accent-bg:var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-active{--bs-table-accent-bg:var(--bs-table-active-bg);color:var(--bs-table-active-color)}.table-hover>tbody>tr:hover>*{--bs-table-accent-bg:var(--bs-table-hover-bg);color:var(--bs-table-hover-color)}.table-primary{--bs-table-bg:#cfe2ff;--bs-table-striped-bg:#c5d7f2;--bs-table-striped-color:#000;--bs-table-active-bg:#bacbe6;--bs-table-active-color:#000;--bs-table-hover-bg:#bfd1ec;--bs-table-hover-color:#000;border-color:#bacbe6;color:#000}.table-secondary{--bs-table-bg:#e2e3e5;--bs-table-striped-bg:#d7d8da;--bs-table-striped-color:#000;--bs-table-active-bg:#cbccce;--bs-table-active-color:#000;--bs-table-hover-bg:#d1d2d4;--bs-table-hover-color:#000;border-color:#cbccce;color:#000}.table-success{--bs-table-bg:#d1e7dd;--bs-table-striped-bg:#c7dbd2;--bs-table-striped-color:#000;--bs-table-active-bg:#bcd0c7;--bs-table-active-color:#000;--bs-table-hover-bg:#c1d6cc;--bs-table-hover-color:#000;border-color:#bcd0c7;color:#000}.table-info{--bs-table-bg:#cff4fc;--bs-table-striped-bg:#c5e8ef;--bs-table-striped-color:#000;--bs-table-active-bg:#badce3;--bs-table-active-color:#000;--bs-table-hover-bg:#bfe2e9;--bs-table-hover-color:#000;border-color:#badce3;color:#000}.table-warning{--bs-table-bg:#fff3cd;--bs-table-striped-bg:#f2e7c3;--bs-table-striped-color:#000;--bs-table-active-bg:#e6dbb9;--bs-table-active-color:#000;--bs-table-hover-bg:#ece1be;--bs-table-hover-color:#000;border-color:#e6dbb9;color:#000}.table-danger{--bs-table-bg:#f8d7da;--bs-table-striped-bg:#eccccf;--bs-table-striped-color:#000;--bs-table-active-bg:#dfc2c4;--bs-table-active-color:#000;--bs-table-hover-bg:#e5c7ca;--bs-table-hover-color:#000;border-color:#dfc2c4;color:#000}.table-light{--bs-table-bg:#f8f9fa;--bs-table-striped-bg:#ecedee;--bs-table-striped-color:#000;--bs-table-active-bg:#dfe0e1;--bs-table-active-color:#000;--bs-table-hover-bg:#e5e6e7;--bs-table-hover-color:#000;border-color:#dfe0e1;color:#000}.table-dark{--bs-table-bg:#212529;--bs-table-striped-bg:#2c3034;--bs-table-striped-color:#fff;--bs-table-active-bg:#373b3e;--bs-table-active-color:#fff;--bs-table-hover-bg:#323539;--bs-table-hover-color:#fff;border-color:#373b3e;color:#fff}.table-responsive{-webkit-overflow-scrolling:touch;overflow-x:auto}@media (max-width:575.98px){.table-responsive-sm{-webkit-overflow-scrolling:touch;overflow-x:auto}}@media (max-width:767.98px){.table-responsive-md{-webkit-overflow-scrolling:touch;overflow-x:auto}}@media (max-width:991.98px){.table-responsive-lg{-webkit-overflow-scrolling:touch;overflow-x:auto}}@media (max-width:1199.98px){.table-responsive-xl{-webkit-overflow-scrolling:touch;overflow-x:auto}}@media (max-width:1399.98px){.table-responsive-xxl{-webkit-overflow-scrolling:touch;overflow-x:auto}}.form-label{margin-bottom:.5rem}.col-form-label{font-size:inherit;line-height:1.5;margin-bottom:0;padding-bottom:calc(.375rem + 1px);padding-top:calc(.375rem + 1px)}.col-form-label-lg{font-size:1.25rem;padding-bottom:calc(.5rem + 1px);padding-top:calc(.5rem + 1px)}.col-form-label-sm{font-size:.875rem;padding-bottom:calc(.25rem + 1px);padding-top:calc(.25rem + 1px)}.form-text{color:#6c757d;font-size:.875em;margin-top:.25rem}.form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-clip:padding-box;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem;color:#212529;display:block;font-size:1rem;font-weight:400;line-height:1.5;padding:.375rem .75rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{background-color:#fff;border-color:#86b7fe;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);color:#212529;outline:0}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}.form-control::file-selector-button{-webkit-margin-end:.75rem;background-color:#e9ecef;border-color:inherit;border-radius:0;border-style:solid;border-width:0 1px 0 0;color:#212529;margin:-.375rem .75rem -.375rem -.75rem;padding:.375rem .75rem;pointer-events:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#dde0e3}.form-control::-webkit-file-upload-button{-webkit-margin-end:.75rem;background-color:#e9ecef;border-color:inherit;border-radius:0;border-style:solid;border-width:0 1px 0 0;color:#212529;margin:-.375rem .75rem -.375rem -.75rem;padding:.375rem .75rem;pointer-events:none;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::-webkit-file-upload-button{-webkit-transition:none;transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:#dde0e3}.form-control-plaintext{background-color:transparent;border:solid transparent;border-width:1px 0;color:#212529;display:block;line-height:1.5;margin-bottom:0;padding:.375rem 0;width:100%}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-left:0;padding-right:0}.form-control-sm{border-radius:.2rem;font-size:.875rem;min-height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem}.form-control-sm::file-selector-button{-webkit-margin-end:.5rem;margin:-.25rem .5rem -.25rem -.5rem;padding:.25rem .5rem}.form-control-sm::-webkit-file-upload-button{-webkit-margin-end:.5rem;margin:-.25rem .5rem -.25rem -.5rem;padding:.25rem .5rem}.form-control-lg{border-radius:.3rem;font-size:1.25rem;min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem}.form-control-lg::file-selector-button{-webkit-margin-end:1rem;margin:-.5rem 1rem -.5rem -1rem;padding:.5rem 1rem}.form-control-lg::-webkit-file-upload-button{-webkit-margin-end:1rem;margin:-.5rem 1rem -.5rem -1rem;padding:.5rem 1rem}textarea.form-control{min-height:calc(1.5em + .75rem + 2px)}textarea.form-control-sm{min-height:calc(1.5em + .5rem + 2px)}textarea.form-control-lg{min-height:calc(1.5em + 1rem + 2px)}.form-control-color{height:auto;padding:.375rem;width:3rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{border-radius:.25rem;height:1.5em}.form-control-color::-webkit-color-swatch{border-radius:.25rem;height:1.5em}.form-select{-moz-padding-start:calc(.75rem - 3px);-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E\");background-position:right .75rem center;background-repeat:no-repeat;background-size:16px 12px;border:1px solid #ced4da;border-radius:.25rem;color:#212529;display:block;font-size:1rem;font-weight:400;line-height:1.5;padding:.375rem 2.25rem .375rem .75rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);outline:0}.form-select[multiple],.form-select[size]:not([size=\"1\"]){background-image:none;padding-right:.75rem}.form-select:disabled{background-color:#e9ecef}.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #212529}.form-select-sm{border-radius:.2rem;font-size:.875rem;padding-bottom:.25rem;padding-left:.5rem;padding-top:.25rem}.form-select-lg{border-radius:.3rem;font-size:1.25rem;padding-bottom:.5rem;padding-left:1rem;padding-top:.5rem}.form-check{display:block;margin-bottom:.125rem;min-height:1.5rem;padding-left:1.5em}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-input{color-adjust:exact;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;background-position:50%;background-repeat:no-repeat;background-size:contain;border:1px solid rgba(0,0,0,.25);height:1em;margin-top:.25em;-webkit-print-color-adjust:exact;vertical-align:top;width:1em}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);outline:0}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3E%3C/svg%3E\")}.form-check-input:checked[type=radio]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='2' fill='%23fff'/%3E%3C/svg%3E\")}.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3E%3C/svg%3E\");border-color:#0d6efd}.form-check-input:disabled{filter:none;opacity:.5;pointer-events:none}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='rgba(0, 0, 0, 0.25)'/%3E%3C/svg%3E\");background-position:0;border-radius:2em;margin-left:-2.5em;transition:background-position .15s ease-in-out;width:2em}@media (prefers-reduced-motion:reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%2386b7fe'/%3E%3C/svg%3E\")}.form-switch .form-check-input:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\");background-position:100%}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{clip:rect(0,0,0,0);pointer-events:none;position:absolute}.btn-check:disabled+.btn,.btn-check[disabled]+.btn{filter:none;opacity:.65;pointer-events:none}.form-range{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;height:1.5rem;padding:0;width:100%}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background-color:#0d6efd;border:0;border-radius:1rem;height:1rem;margin-top:-.25rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:1rem}@media (prefers-reduced-motion:reduce){.form-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{background-color:#dee2e6;border-color:transparent;border-radius:1rem;color:transparent;cursor:pointer;height:.5rem;width:100%}.form-range::-moz-range-thumb{-moz-appearance:none;appearance:none;background-color:#0d6efd;border:0;border-radius:1rem;height:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:1rem}@media (prefers-reduced-motion:reduce){.form-range::-moz-range-thumb{-moz-transition:none;transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{background-color:#dee2e6;border-color:transparent;border-radius:1rem;color:transparent;cursor:pointer;height:.5rem;width:100%}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.form-range:disabled::-moz-range-thumb{background-color:#adb5bd}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-select{height:calc(3.5rem + 2px);line-height:1.25}.form-floating>label{border:1px solid transparent;height:100%;left:0;padding:1rem .75rem;pointer-events:none;position:absolute;top:0;transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out}@media (prefers-reduced-motion:reduce){.form-floating>label{transition:none}}.form-floating>.form-control{padding:1rem .75rem}.form-floating>.form-control::-moz-placeholder{color:transparent}.form-floating>.form-control::placeholder{color:transparent}.form-floating>.form-control:not(:-moz-placeholder-shown){padding-bottom:.625rem;padding-top:1.625rem}.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown){padding-bottom:.625rem;padding-top:1.625rem}.form-floating>.form-control:-webkit-autofill{padding-bottom:.625rem;padding-top:1.625rem}.form-floating>.form-select{padding-bottom:.625rem;padding-top:1.625rem}.form-floating>.form-control:not(:-moz-placeholder-shown)~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control:-webkit-autofill~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.input-group{align-items:stretch;display:flex;flex-wrap:wrap;position:relative;width:100%}.input-group>.form-control,.input-group>.form-select{flex:1 1 auto;min-width:0;position:relative;width:1%}.input-group>.form-control:focus,.input-group>.form-select:focus{z-index:3}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:3}.input-group-text{align-items:center;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem;color:#212529;display:flex;font-size:1rem;font-weight:400;line-height:1.5;padding:.375rem .75rem;text-align:center;white-space:nowrap}.input-group-lg>.btn,.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text{border-radius:.3rem;font-size:1.25rem;padding:.5rem 1rem}.input-group-sm>.btn,.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text{border-radius:.2rem;font-size:.875rem;padding:.25rem .5rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu){border-bottom-right-radius:0;border-top-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.valid-feedback{color:#198754;display:none;font-size:.875em;margin-top:.25rem;width:100%}.valid-tooltip{background-color:rgba(25,135,84,.9);border-radius:.25rem;color:#fff;display:none;font-size:.875rem;margin-top:.1rem;max-width:100%;padding:.25rem .5rem;position:absolute;top:100%;z-index:5}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\");background-position:right calc(.375em + .1875rem) center;background-repeat:no-repeat;background-size:calc(.75em + .375rem) calc(.75em + .375rem);border-color:#198754;padding-right:calc(1.5em + .75rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem);padding-right:calc(1.5em + .75rem)}.form-select.is-valid,.was-validated .form-select:valid{border-color:#198754}.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size=\"1\"],.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size=\"1\"]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E\"),url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem);padding-right:4.125rem}.form-select.is-valid:focus,.was-validated .form-select:valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.form-check-input.is-valid,.was-validated .form-check-input:valid{border-color:#198754}.form-check-input.is-valid:checked,.was-validated .form-check-input:valid:checked{background-color:#198754}.form-check-input.is-valid:focus,.was-validated .form-check-input:valid:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#198754}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.input-group .form-control.is-valid,.input-group .form-select.is-valid,.was-validated .input-group .form-control:valid,.was-validated .input-group .form-select:valid{z-index:1}.input-group .form-control.is-valid:focus,.input-group .form-select.is-valid:focus,.was-validated .input-group .form-control:valid:focus,.was-validated .input-group .form-select:valid:focus{z-index:3}.invalid-feedback{color:#dc3545;display:none;font-size:.875em;margin-top:.25rem;width:100%}.invalid-tooltip{background-color:rgba(220,53,69,.9);border-radius:.25rem;color:#fff;display:none;font-size:.875rem;margin-top:.1rem;max-width:100%;padding:.25rem .5rem;position:absolute;top:100%;z-index:5}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");background-position:right calc(.375em + .1875rem) center;background-repeat:no-repeat;background-size:calc(.75em + .375rem) calc(.75em + .375rem);border-color:#dc3545;padding-right:calc(1.5em + .75rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem);padding-right:calc(1.5em + .75rem)}.form-select.is-invalid,.was-validated .form-select:invalid{border-color:#dc3545}.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size=\"1\"],.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size=\"1\"]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E\"),url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem);padding-right:4.125rem}.form-select.is-invalid:focus,.was-validated .form-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.form-check-input.is-invalid,.was-validated .form-check-input:invalid{border-color:#dc3545}.form-check-input.is-invalid:checked,.was-validated .form-check-input:invalid:checked{background-color:#dc3545}.form-check-input.is-invalid:focus,.was-validated .form-check-input:invalid:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.input-group .form-control.is-invalid,.input-group .form-select.is-invalid,.was-validated .input-group .form-control:invalid,.was-validated .input-group .form-select:invalid{z-index:2}.input-group .form-control.is-invalid:focus,.input-group .form-select.is-invalid:focus,.was-validated .input-group .form-control:invalid:focus,.was-validated .input-group .form-select:invalid:focus{z-index:3}.btn{background-color:transparent;border:1px solid transparent;border-radius:.25rem;color:#212529;cursor:pointer;display:inline-block;font-size:1rem;font-weight:400;line-height:1.5;padding:.375rem .75rem;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529}.btn-check:focus+.btn,.btn:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.25);outline:0}.btn.disabled,.btn:disabled,fieldset:disabled .btn{opacity:.65;pointer-events:none}.btn-primary{background-color:#0d6efd;border-color:#0d6efd;color:#fff}.btn-check:focus+.btn-primary,.btn-primary:focus,.btn-primary:hover{background-color:#0b5ed7;border-color:#0a58ca;color:#fff}.btn-check:focus+.btn-primary,.btn-primary:focus{box-shadow:0 0 0 .25rem rgba(49,132,253,.5)}.btn-check:active+.btn-primary,.btn-check:checked+.btn-primary,.btn-primary.active,.btn-primary:active,.show>.btn-primary.dropdown-toggle{background-color:#0a58ca;border-color:#0a53be;color:#fff}.btn-check:active+.btn-primary:focus,.btn-check:checked+.btn-primary:focus,.btn-primary.active:focus,.btn-primary:active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(49,132,253,.5)}.btn-primary.disabled,.btn-primary:disabled{background-color:#0d6efd;border-color:#0d6efd;color:#fff}.btn-secondary{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-check:focus+.btn-secondary,.btn-secondary:focus,.btn-secondary:hover{background-color:#5c636a;border-color:#565e64;color:#fff}.btn-check:focus+.btn-secondary,.btn-secondary:focus{box-shadow:0 0 0 .25rem hsla(208,6%,54%,.5)}.btn-check:active+.btn-secondary,.btn-check:checked+.btn-secondary,.btn-secondary.active,.btn-secondary:active,.show>.btn-secondary.dropdown-toggle{background-color:#565e64;border-color:#51585e;color:#fff}.btn-check:active+.btn-secondary:focus,.btn-check:checked+.btn-secondary:focus,.btn-secondary.active:focus,.btn-secondary:active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .25rem hsla(208,6%,54%,.5)}.btn-secondary.disabled,.btn-secondary:disabled{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-success{background-color:#198754;border-color:#198754;color:#fff}.btn-check:focus+.btn-success,.btn-success:focus,.btn-success:hover{background-color:#157347;border-color:#146c43;color:#fff}.btn-check:focus+.btn-success,.btn-success:focus{box-shadow:0 0 0 .25rem rgba(60,153,110,.5)}.btn-check:active+.btn-success,.btn-check:checked+.btn-success,.btn-success.active,.btn-success:active,.show>.btn-success.dropdown-toggle{background-color:#146c43;border-color:#13653f;color:#fff}.btn-check:active+.btn-success:focus,.btn-check:checked+.btn-success:focus,.btn-success.active:focus,.btn-success:active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(60,153,110,.5)}.btn-success.disabled,.btn-success:disabled{background-color:#198754;border-color:#198754;color:#fff}.btn-info{background-color:#0dcaf0;border-color:#0dcaf0;color:#000}.btn-check:focus+.btn-info,.btn-info:focus,.btn-info:hover{background-color:#31d2f2;border-color:#25cff2;color:#000}.btn-check:focus+.btn-info,.btn-info:focus{box-shadow:0 0 0 .25rem rgba(11,172,204,.5)}.btn-check:active+.btn-info,.btn-check:checked+.btn-info,.btn-info.active,.btn-info:active,.show>.btn-info.dropdown-toggle{background-color:#3dd5f3;border-color:#25cff2;color:#000}.btn-check:active+.btn-info:focus,.btn-check:checked+.btn-info:focus,.btn-info.active:focus,.btn-info:active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(11,172,204,.5)}.btn-info.disabled,.btn-info:disabled{background-color:#0dcaf0;border-color:#0dcaf0;color:#000}.btn-warning{background-color:#ffc107;border-color:#ffc107;color:#000}.btn-check:focus+.btn-warning,.btn-warning:focus,.btn-warning:hover{background-color:#ffca2c;border-color:#ffc720;color:#000}.btn-check:focus+.btn-warning,.btn-warning:focus{box-shadow:0 0 0 .25rem rgba(217,164,6,.5)}.btn-check:active+.btn-warning,.btn-check:checked+.btn-warning,.btn-warning.active,.btn-warning:active,.show>.btn-warning.dropdown-toggle{background-color:#ffcd39;border-color:#ffc720;color:#000}.btn-check:active+.btn-warning:focus,.btn-check:checked+.btn-warning:focus,.btn-warning.active:focus,.btn-warning:active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(217,164,6,.5)}.btn-warning.disabled,.btn-warning:disabled{background-color:#ffc107;border-color:#ffc107;color:#000}.btn-danger{background-color:#dc3545;border-color:#dc3545;color:#fff}.btn-check:focus+.btn-danger,.btn-danger:focus,.btn-danger:hover{background-color:#bb2d3b;border-color:#b02a37;color:#fff}.btn-check:focus+.btn-danger,.btn-danger:focus{box-shadow:0 0 0 .25rem rgba(225,83,97,.5)}.btn-check:active+.btn-danger,.btn-check:checked+.btn-danger,.btn-danger.active,.btn-danger:active,.show>.btn-danger.dropdown-toggle{background-color:#b02a37;border-color:#a52834;color:#fff}.btn-check:active+.btn-danger:focus,.btn-check:checked+.btn-danger:focus,.btn-danger.active:focus,.btn-danger:active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{background-color:#dc3545;border-color:#dc3545;color:#fff}.btn-light{background-color:#f8f9fa;border-color:#f8f9fa;color:#000}.btn-check:focus+.btn-light,.btn-light:focus,.btn-light:hover{background-color:#f9fafb;border-color:#f9fafb;color:#000}.btn-check:focus+.btn-light,.btn-light:focus{box-shadow:0 0 0 .25rem hsla(210,2%,83%,.5)}.btn-check:active+.btn-light,.btn-check:checked+.btn-light,.btn-light.active,.btn-light:active,.show>.btn-light.dropdown-toggle{background-color:#f9fafb;border-color:#f9fafb;color:#000}.btn-check:active+.btn-light:focus,.btn-check:checked+.btn-light:focus,.btn-light.active:focus,.btn-light:active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .25rem hsla(210,2%,83%,.5)}.btn-light.disabled,.btn-light:disabled{background-color:#f8f9fa;border-color:#f8f9fa;color:#000}.btn-dark{background-color:#212529;border-color:#212529;color:#fff}.btn-check:focus+.btn-dark,.btn-dark:focus,.btn-dark:hover{background-color:#1c1f23;border-color:#1a1e21;color:#fff}.btn-check:focus+.btn-dark,.btn-dark:focus{box-shadow:0 0 0 .25rem rgba(66,70,73,.5)}.btn-check:active+.btn-dark,.btn-check:checked+.btn-dark,.btn-dark.active,.btn-dark:active,.show>.btn-dark.dropdown-toggle{background-color:#1a1e21;border-color:#191c1f;color:#fff}.btn-check:active+.btn-dark:focus,.btn-check:checked+.btn-dark:focus,.btn-dark.active:focus,.btn-dark:active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(66,70,73,.5)}.btn-dark.disabled,.btn-dark:disabled{background-color:#212529;border-color:#212529;color:#fff}.btn-outline-primary{border-color:#0d6efd;color:#0d6efd}.btn-outline-primary:hover{background-color:#0d6efd;border-color:#0d6efd;color:#fff}.btn-check:focus+.btn-outline-primary,.btn-outline-primary:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.5)}.btn-check:active+.btn-outline-primary,.btn-check:checked+.btn-outline-primary,.btn-outline-primary.active,.btn-outline-primary.dropdown-toggle.show,.btn-outline-primary:active{background-color:#0d6efd;border-color:#0d6efd;color:#fff}.btn-check:active+.btn-outline-primary:focus,.btn-check:checked+.btn-outline-primary:focus,.btn-outline-primary.active:focus,.btn-outline-primary.dropdown-toggle.show:focus,.btn-outline-primary:active:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{background-color:transparent;color:#0d6efd}.btn-outline-secondary{border-color:#6c757d;color:#6c757d}.btn-outline-secondary:hover{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-check:focus+.btn-outline-secondary,.btn-outline-secondary:focus{box-shadow:0 0 0 .25rem hsla(208,7%,46%,.5)}.btn-check:active+.btn-outline-secondary,.btn-check:checked+.btn-outline-secondary,.btn-outline-secondary.active,.btn-outline-secondary.dropdown-toggle.show,.btn-outline-secondary:active{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn-check:active+.btn-outline-secondary:focus,.btn-check:checked+.btn-outline-secondary:focus,.btn-outline-secondary.active:focus,.btn-outline-secondary.dropdown-toggle.show:focus,.btn-outline-secondary:active:focus{box-shadow:0 0 0 .25rem hsla(208,7%,46%,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{background-color:transparent;color:#6c757d}.btn-outline-success{border-color:#198754;color:#198754}.btn-outline-success:hover{background-color:#198754;border-color:#198754;color:#fff}.btn-check:focus+.btn-outline-success,.btn-outline-success:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.5)}.btn-check:active+.btn-outline-success,.btn-check:checked+.btn-outline-success,.btn-outline-success.active,.btn-outline-success.dropdown-toggle.show,.btn-outline-success:active{background-color:#198754;border-color:#198754;color:#fff}.btn-check:active+.btn-outline-success:focus,.btn-check:checked+.btn-outline-success:focus,.btn-outline-success.active:focus,.btn-outline-success.dropdown-toggle.show:focus,.btn-outline-success:active:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{background-color:transparent;color:#198754}.btn-outline-info{border-color:#0dcaf0;color:#0dcaf0}.btn-outline-info:hover{background-color:#0dcaf0;border-color:#0dcaf0;color:#000}.btn-check:focus+.btn-outline-info,.btn-outline-info:focus{box-shadow:0 0 0 .25rem rgba(13,202,240,.5)}.btn-check:active+.btn-outline-info,.btn-check:checked+.btn-outline-info,.btn-outline-info.active,.btn-outline-info.dropdown-toggle.show,.btn-outline-info:active{background-color:#0dcaf0;border-color:#0dcaf0;color:#000}.btn-check:active+.btn-outline-info:focus,.btn-check:checked+.btn-outline-info:focus,.btn-outline-info.active:focus,.btn-outline-info.dropdown-toggle.show:focus,.btn-outline-info:active:focus{box-shadow:0 0 0 .25rem rgba(13,202,240,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{background-color:transparent;color:#0dcaf0}.btn-outline-warning{border-color:#ffc107;color:#ffc107}.btn-outline-warning:hover{background-color:#ffc107;border-color:#ffc107;color:#000}.btn-check:focus+.btn-outline-warning,.btn-outline-warning:focus{box-shadow:0 0 0 .25rem rgba(255,193,7,.5)}.btn-check:active+.btn-outline-warning,.btn-check:checked+.btn-outline-warning,.btn-outline-warning.active,.btn-outline-warning.dropdown-toggle.show,.btn-outline-warning:active{background-color:#ffc107;border-color:#ffc107;color:#000}.btn-check:active+.btn-outline-warning:focus,.btn-check:checked+.btn-outline-warning:focus,.btn-outline-warning.active:focus,.btn-outline-warning.dropdown-toggle.show:focus,.btn-outline-warning:active:focus{box-shadow:0 0 0 .25rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{background-color:transparent;color:#ffc107}.btn-outline-danger{border-color:#dc3545;color:#dc3545}.btn-outline-danger:hover{background-color:#dc3545;border-color:#dc3545;color:#fff}.btn-check:focus+.btn-outline-danger,.btn-outline-danger:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.5)}.btn-check:active+.btn-outline-danger,.btn-check:checked+.btn-outline-danger,.btn-outline-danger.active,.btn-outline-danger.dropdown-toggle.show,.btn-outline-danger:active{background-color:#dc3545;border-color:#dc3545;color:#fff}.btn-check:active+.btn-outline-danger:focus,.btn-check:checked+.btn-outline-danger:focus,.btn-outline-danger.active:focus,.btn-outline-danger.dropdown-toggle.show:focus,.btn-outline-danger:active:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{background-color:transparent;color:#dc3545}.btn-outline-light{border-color:#f8f9fa;color:#f8f9fa}.btn-outline-light:hover{background-color:#f8f9fa;border-color:#f8f9fa;color:#000}.btn-check:focus+.btn-outline-light,.btn-outline-light:focus{box-shadow:0 0 0 .25rem rgba(248,249,250,.5)}.btn-check:active+.btn-outline-light,.btn-check:checked+.btn-outline-light,.btn-outline-light.active,.btn-outline-light.dropdown-toggle.show,.btn-outline-light:active{background-color:#f8f9fa;border-color:#f8f9fa;color:#000}.btn-check:active+.btn-outline-light:focus,.btn-check:checked+.btn-outline-light:focus,.btn-outline-light.active:focus,.btn-outline-light.dropdown-toggle.show:focus,.btn-outline-light:active:focus{box-shadow:0 0 0 .25rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{background-color:transparent;color:#f8f9fa}.btn-outline-dark{border-color:#212529;color:#212529}.btn-outline-dark:hover{background-color:#212529;border-color:#212529;color:#fff}.btn-check:focus+.btn-outline-dark,.btn-outline-dark:focus{box-shadow:0 0 0 .25rem rgba(33,37,41,.5)}.btn-check:active+.btn-outline-dark,.btn-check:checked+.btn-outline-dark,.btn-outline-dark.active,.btn-outline-dark.dropdown-toggle.show,.btn-outline-dark:active{background-color:#212529;border-color:#212529;color:#fff}.btn-check:active+.btn-outline-dark:focus,.btn-check:checked+.btn-outline-dark:focus,.btn-outline-dark.active:focus,.btn-outline-dark.dropdown-toggle.show:focus,.btn-outline-dark:active:focus{box-shadow:0 0 0 .25rem rgba(33,37,41,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{background-color:transparent;color:#212529}.btn-link{color:#0d6efd;font-weight:400;-webkit-text-decoration:underline;text-decoration:underline}.btn-link:hover{color:#0a58ca}.btn-link.disabled,.btn-link:disabled{color:#6c757d}.btn-group-lg>.btn,.btn-lg{border-radius:.3rem;font-size:1.25rem;padding:.5rem 1rem}.btn-group-sm>.btn,.btn-sm{border-radius:.2rem;font-size:.875rem;padding:.25rem .5rem}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.collapsing.collapse-horizontal{height:auto;transition:width .35s ease;width:0}@media (prefers-reduced-motion:reduce){.collapsing.collapse-horizontal{transition:none}}.dropdown,.dropend,.dropstart,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{border-bottom:0;border-left:.3em solid transparent;border-right:.3em solid transparent;border-top:.3em solid;content:\"\";display:inline-block;margin-left:.255em;vertical-align:.255em}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{background-clip:padding-box;background-color:#fff;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;color:#212529;display:none;font-size:1rem;list-style:none;margin:0;min-width:10rem;padding:.5rem 0;position:absolute;text-align:left;z-index:1000}.dropdown-menu[data-bs-popper]{left:0;margin-top:.125rem;top:100%}.dropdown-menu-start{--bs-position:start}.dropdown-menu-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-end{--bs-position:end}.dropdown-menu-end[data-bs-popper]{left:auto;right:0}@media (min-width:576px){.dropdown-menu-sm-start{--bs-position:start}.dropdown-menu-sm-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-sm-end{--bs-position:end}.dropdown-menu-sm-end[data-bs-popper]{left:auto;right:0}}@media (min-width:768px){.dropdown-menu-md-start{--bs-position:start}.dropdown-menu-md-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-md-end{--bs-position:end}.dropdown-menu-md-end[data-bs-popper]{left:auto;right:0}}@media (min-width:992px){.dropdown-menu-lg-start{--bs-position:start}.dropdown-menu-lg-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-lg-end{--bs-position:end}.dropdown-menu-lg-end[data-bs-popper]{left:auto;right:0}}@media (min-width:1200px){.dropdown-menu-xl-start{--bs-position:start}.dropdown-menu-xl-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-xl-end{--bs-position:end}.dropdown-menu-xl-end[data-bs-popper]{left:auto;right:0}}@media (min-width:1400px){.dropdown-menu-xxl-start{--bs-position:start}.dropdown-menu-xxl-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-xxl-end{--bs-position:end}.dropdown-menu-xxl-end[data-bs-popper]{left:auto;right:0}}.dropup .dropdown-menu[data-bs-popper]{bottom:100%;margin-bottom:.125rem;margin-top:0;top:auto}.dropup .dropdown-toggle:after{border-bottom:.3em solid;border-left:.3em solid transparent;border-right:.3em solid transparent;border-top:0;content:\"\";display:inline-block;margin-left:.255em;vertical-align:.255em}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropend .dropdown-menu[data-bs-popper]{left:100%;margin-left:.125rem;margin-top:0;right:auto;top:0}.dropend .dropdown-toggle:after{border-bottom:.3em solid transparent;border-left:.3em solid;border-right:0;border-top:.3em solid transparent;content:\"\";display:inline-block;margin-left:.255em;vertical-align:.255em}.dropend .dropdown-toggle:empty:after{margin-left:0}.dropend .dropdown-toggle:after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{left:auto;margin-right:.125rem;margin-top:0;right:100%;top:0}.dropstart .dropdown-toggle:after{content:\"\";display:inline-block;display:none;margin-left:.255em;vertical-align:.255em}.dropstart .dropdown-toggle:before{border-bottom:.3em solid transparent;border-right:.3em solid;border-top:.3em solid transparent;content:\"\";display:inline-block;margin-right:.255em;vertical-align:.255em}.dropstart .dropdown-toggle:empty:after{margin-left:0}.dropstart .dropdown-toggle:before{vertical-align:0}.dropdown-divider{border-top:1px solid rgba(0,0,0,.15);height:0;margin:.5rem 0;overflow:hidden}.dropdown-item{background-color:transparent;border:0;clear:both;color:#212529;display:block;font-weight:400;padding:.25rem 1rem;text-align:inherit;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap;width:100%}.dropdown-item:focus,.dropdown-item:hover{background-color:#e9ecef;color:#1e2125}.dropdown-item.active,.dropdown-item:active{background-color:#0d6efd;color:#fff;-webkit-text-decoration:none;text-decoration:none}.dropdown-item.disabled,.dropdown-item:disabled{background-color:transparent;color:#adb5bd;pointer-events:none}.dropdown-menu.show{display:block}.dropdown-header{color:#6c757d;display:block;font-size:.875rem;margin-bottom:0;padding:.5rem 1rem;white-space:nowrap}.dropdown-item-text{color:#212529;display:block;padding:.25rem 1rem}.dropdown-menu-dark{background-color:#343a40;border-color:rgba(0,0,0,.15);color:#dee2e6}.dropdown-menu-dark .dropdown-item{color:#dee2e6}.dropdown-menu-dark .dropdown-item:focus,.dropdown-menu-dark .dropdown-item:hover{background-color:hsla(0,0%,100%,.15);color:#fff}.dropdown-menu-dark .dropdown-item.active,.dropdown-menu-dark .dropdown-item:active{background-color:#0d6efd;color:#fff}.dropdown-menu-dark .dropdown-item.disabled,.dropdown-menu-dark .dropdown-item:disabled{color:#adb5bd}.dropdown-menu-dark .dropdown-divider{border-color:rgba(0,0,0,.15)}.dropdown-menu-dark .dropdown-item-text{color:#dee2e6}.dropdown-menu-dark .dropdown-header{color:#adb5bd}.btn-group,.btn-group-vertical{display:inline-flex;position:relative;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{flex:1 1 auto;position:relative}.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn{border-bottom-left-radius:0;border-top-left-radius:0}.dropdown-toggle-split{padding-left:.5625rem;padding-right:.5625rem}.dropdown-toggle-split:after,.dropend .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after{margin-left:0}.dropstart .dropdown-toggle-split:before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-left:.375rem;padding-right:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-left:.75rem;padding-right:.75rem}.btn-group-vertical{align-items:flex-start;flex-direction:column;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-left-radius:0;border-bottom-right-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn~.btn{border-top-left-radius:0;border-top-right-radius:0}.nav{display:flex;flex-wrap:wrap;list-style:none;margin-bottom:0;padding-left:0}.nav-link{color:#0d6efd;display:block;padding:.5rem 1rem;-webkit-text-decoration:none;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media (prefers-reduced-motion:reduce){.nav-link{transition:none}}.nav-link:focus,.nav-link:hover{color:#0a58ca}.nav-link.disabled{color:#6c757d;cursor:default;pointer-events:none}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-link{background:0 0;border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem;margin-bottom:-1px}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6;isolation:isolate}.nav-tabs .nav-link.disabled{background-color:transparent;border-color:transparent;color:#6c757d}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{background-color:#fff;border-color:#dee2e6 #dee2e6 #fff;color:#495057}.nav-tabs .dropdown-menu{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}.nav-pills .nav-link{background:0 0;border:0;border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{background-color:#0d6efd;color:#fff}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link{width:100%}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{align-items:center;display:flex;flex-wrap:wrap;justify-content:space-between;padding-bottom:.5rem;padding-top:.5rem;position:relative}.navbar>.container,.navbar>.container-fluid,.navbar>.container-lg,.navbar>.container-md,.navbar>.container-sm,.navbar>.container-xl,.navbar>.container-xxl{align-items:center;display:flex;flex-wrap:inherit;justify-content:space-between}.navbar-brand{font-size:1.25rem;margin-right:1rem;padding-bottom:.3125rem;padding-top:.3125rem;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap}.navbar-nav{display:flex;flex-direction:column;list-style:none;margin-bottom:0;padding-left:0}.navbar-nav .nav-link{padding-left:0;padding-right:0}.navbar-nav .dropdown-menu{position:static}.navbar-text{padding-bottom:.5rem;padding-top:.5rem}.navbar-collapse{align-items:center;flex-basis:100%;flex-grow:1}.navbar-toggler{background-color:transparent;border:1px solid transparent;border-radius:.25rem;font-size:1.25rem;line-height:1;padding:.25rem .75rem;transition:box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.navbar-toggler{transition:none}}.navbar-toggler:focus,.navbar-toggler:hover{-webkit-text-decoration:none;text-decoration:none}.navbar-toggler:focus{box-shadow:0 0 0 .25rem;outline:0}.navbar-toggler-icon{background-position:50%;background-repeat:no-repeat;background-size:100%;display:inline-block;height:1.5em;vertical-align:middle;width:1.5em}.navbar-nav-scroll{max-height:75vh;max-height:var(--bs-scroll-height,75vh);overflow-y:auto}@media (min-width:576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler,.navbar-expand-sm .offcanvas-header{display:none}.navbar-expand-sm .offcanvas{background-color:transparent;border-left:0;border-right:0;bottom:0;flex-grow:1;position:inherit;transform:none;transition:none;visibility:visible!important;z-index:1000}.navbar-expand-sm .offcanvas-bottom,.navbar-expand-sm .offcanvas-top{border-bottom:0;border-top:0;height:auto}.navbar-expand-sm .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (min-width:768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler,.navbar-expand-md .offcanvas-header{display:none}.navbar-expand-md .offcanvas{background-color:transparent;border-left:0;border-right:0;bottom:0;flex-grow:1;position:inherit;transform:none;transition:none;visibility:visible!important;z-index:1000}.navbar-expand-md .offcanvas-bottom,.navbar-expand-md .offcanvas-top{border-bottom:0;border-top:0;height:auto}.navbar-expand-md .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (min-width:992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler,.navbar-expand-lg .offcanvas-header{display:none}.navbar-expand-lg .offcanvas{background-color:transparent;border-left:0;border-right:0;bottom:0;flex-grow:1;position:inherit;transform:none;transition:none;visibility:visible!important;z-index:1000}.navbar-expand-lg .offcanvas-bottom,.navbar-expand-lg .offcanvas-top{border-bottom:0;border-top:0;height:auto}.navbar-expand-lg .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (min-width:1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler,.navbar-expand-xl .offcanvas-header{display:none}.navbar-expand-xl .offcanvas{background-color:transparent;border-left:0;border-right:0;bottom:0;flex-grow:1;position:inherit;transform:none;transition:none;visibility:visible!important;z-index:1000}.navbar-expand-xl .offcanvas-bottom,.navbar-expand-xl .offcanvas-top{border-bottom:0;border-top:0;height:auto}.navbar-expand-xl .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (min-width:1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler,.navbar-expand-xxl .offcanvas-header{display:none}.navbar-expand-xxl .offcanvas{background-color:transparent;border-left:0;border-right:0;bottom:0;flex-grow:1;position:inherit;transform:none;transition:none;visibility:visible!important;z-index:1000}.navbar-expand-xxl .offcanvas-bottom,.navbar-expand-xxl .offcanvas-top{border-bottom:0;border-top:0;height:auto}.navbar-expand-xxl .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler,.navbar-expand .offcanvas-header{display:none}.navbar-expand .offcanvas{background-color:transparent;border-left:0;border-right:0;bottom:0;flex-grow:1;position:inherit;transform:none;transition:none;visibility:visible!important;z-index:1000}.navbar-expand .offcanvas-bottom,.navbar-expand .offcanvas-top{border-bottom:0;border-top:0;height:auto}.navbar-expand .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.55)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{border-color:rgba(0,0,0,.1);color:rgba(0,0,0,.55)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(0, 0, 0, 0.55)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-light .navbar-text{color:rgba(0,0,0,.55)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:hsla(0,0%,100%,.55)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:hsla(0,0%,100%,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:hsla(0,0%,100%,.25)}.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{border-color:hsla(0,0%,100%,.1);color:hsla(0,0%,100%,.55)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.55)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-dark .navbar-text{color:hsla(0,0%,100%,.55)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{word-wrap:break-word;background-clip:border-box;background-color:#fff;border:1px solid rgba(0,0,0,.125);border-radius:.25rem;display:flex;flex-direction:column;min-width:0;position:relative}.card>hr{margin-left:0;margin-right:0}.card>.list-group{border-bottom:inherit;border-top:inherit}.card>.list-group:first-child{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px);border-top-width:0}.card>.list-group:last-child{border-bottom-left-radius:calc(.25rem - 1px);border-bottom-right-radius:calc(.25rem - 1px);border-bottom-width:0}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;padding:1rem}.card-title{margin-bottom:.5rem}.card-subtitle{margin-top:-.25rem}.card-subtitle,.card-text:last-child{margin-bottom:0}.card-link+.card-link{margin-left:1rem}.card-header{background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125);margin-bottom:0;padding:.5rem 1rem}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125);padding:.5rem 1rem}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{border-bottom:0;margin-bottom:-.5rem}.card-header-pills,.card-header-tabs{margin-left:-.5rem;margin-right:-.5rem}.card-img-overlay{border-radius:calc(.25rem - 1px);bottom:0;left:0;padding:1rem;position:absolute;right:0;top:0}.card-img,.card-img-bottom,.card-img-top{width:100%}.card-img,.card-img-top{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-left-radius:calc(.25rem - 1px);border-bottom-right-radius:calc(.25rem - 1px)}.card-group>.card{margin-bottom:.75rem}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{border-left:0;margin-left:0}.card-group>.card:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.accordion-button{align-items:center;background-color:#fff;border:0;border-radius:0;color:#212529;display:flex;font-size:1rem;overflow-anchor:none;padding:1rem 1.25rem;position:relative;text-align:left;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease;width:100%}@media (prefers-reduced-motion:reduce){.accordion-button{transition:none}}.accordion-button:not(.collapsed){background-color:#e7f1ff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.125);color:#0c63e4}.accordion-button:not(.collapsed):after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230c63e4' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E\");transform:rotate(-180deg)}.accordion-button:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23212529' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-size:1.25rem;content:\"\";flex-shrink:0;height:1.25rem;margin-left:auto;transition:transform .2s ease-in-out;width:1.25rem}@media (prefers-reduced-motion:reduce){.accordion-button:after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{border-color:#86b7fe;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);outline:0;z-index:3}.accordion-header{margin-bottom:0}.accordion-item{background-color:#fff;border:1px solid rgba(0,0,0,.125)}.accordion-item:first-of-type{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.accordion-item:first-of-type .accordion-button{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.accordion-item:not(:first-of-type){border-top:0}.accordion-item:last-of-type{border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem}.accordion-item:last-of-type .accordion-button.collapsed{border-bottom-left-radius:calc(.25rem - 1px);border-bottom-right-radius:calc(.25rem - 1px)}.accordion-item:last-of-type .accordion-collapse{border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem}.accordion-body{padding:1rem 1.25rem}.accordion-flush .accordion-collapse{border-width:0}.accordion-flush .accordion-item{border-left:0;border-radius:0;border-right:0}.accordion-flush .accordion-item:first-child{border-top:0}.accordion-flush .accordion-item:last-child{border-bottom:0}.accordion-flush .accordion-item .accordion-button{border-radius:0}.breadcrumb{display:flex;flex-wrap:wrap;list-style:none;margin-bottom:1rem;padding:0}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item:before{color:#6c757d;content:\"/\";content:var(--bs-breadcrumb-divider,\"/\");float:left;padding-right:.5rem}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;list-style:none;padding-left:0}.page-link{background-color:#fff;border:1px solid #dee2e6;color:#0d6efd;display:block;position:relative;-webkit-text-decoration:none;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.page-link{transition:none}}.page-link:hover{border-color:#dee2e6;z-index:2}.page-link:focus,.page-link:hover{background-color:#e9ecef;color:#0a58ca}.page-link:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.25);outline:0;z-index:3}.page-item:not(:first-child) .page-link{margin-left:-1px}.page-item.active .page-link{background-color:#0d6efd;border-color:#0d6efd;color:#fff;z-index:3}.page-item.disabled .page-link{background-color:#fff;border-color:#dee2e6;color:#6c757d;pointer-events:none}.page-link{padding:.375rem .75rem}.page-item:first-child .page-link{border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.page-item:last-child .page-link{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.pagination-lg .page-link{font-size:1.25rem;padding:.75rem 1.5rem}.pagination-lg .page-item:first-child .page-link{border-bottom-left-radius:.3rem;border-top-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-bottom-right-radius:.3rem;border-top-right-radius:.3rem}.pagination-sm .page-link{font-size:.875rem;padding:.25rem .5rem}.pagination-sm .page-item:first-child .page-link{border-bottom-left-radius:.2rem;border-top-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-bottom-right-radius:.2rem;border-top-right-radius:.2rem}.badge{border-radius:.25rem;color:#fff;display:inline-block;font-size:.75em;font-weight:700;line-height:1;padding:.35em .65em;text-align:center;vertical-align:baseline;white-space:nowrap}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{border:1px solid transparent;border-radius:.25rem;margin-bottom:1rem;padding:1rem;position:relative}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{padding:1.25rem 1rem;position:absolute;right:0;top:0;z-index:2}.alert-primary{background-color:#cfe2ff;border-color:#b6d4fe;color:#084298}.alert-primary .alert-link{color:#06357a}.alert-secondary{background-color:#e2e3e5;border-color:#d3d6d8;color:#41464b}.alert-secondary .alert-link{color:#34383c}.alert-success{background-color:#d1e7dd;border-color:#badbcc;color:#0f5132}.alert-success .alert-link{color:#0c4128}.alert-info{background-color:#cff4fc;border-color:#b6effb;color:#055160}.alert-info .alert-link{color:#04414d}.alert-warning{background-color:#fff3cd;border-color:#ffecb5;color:#664d03}.alert-warning .alert-link{color:#523e02}.alert-danger{background-color:#f8d7da;border-color:#f5c2c7;color:#842029}.alert-danger .alert-link{color:#6a1a21}.alert-light{background-color:#fefefe;border-color:#fdfdfe;color:#636464}.alert-light .alert-link{color:#4f5050}.alert-dark{background-color:#d3d3d4;border-color:#bcbebf;color:#141619}.alert-dark .alert-link{color:#101214}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress{background-color:#e9ecef;border-radius:.25rem;font-size:.75rem;height:1rem}.progress,.progress-bar{display:flex;overflow:hidden}.progress-bar{background-color:#0d6efd;color:#fff;flex-direction:column;justify-content:center;text-align:center;transition:width .6s ease;white-space:nowrap}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:1rem 1rem}.progress-bar-animated{animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion:reduce){.progress-bar-animated{animation:none}}.list-group{border-radius:.25rem;display:flex;flex-direction:column;margin-bottom:0;padding-left:0}.list-group-numbered{counter-reset:section;list-style-type:none}.list-group-numbered>li:before{content:counters(section,\".\") \". \";counter-increment:section}.list-group-item-action{color:#495057;text-align:inherit;width:100%}.list-group-item-action:focus,.list-group-item-action:hover{background-color:#f8f9fa;color:#495057;-webkit-text-decoration:none;text-decoration:none;z-index:1}.list-group-item-action:active{background-color:#e9ecef;color:#212529}.list-group-item{background-color:#fff;border:1px solid rgba(0,0,0,.125);color:#212529;display:block;padding:.5rem 1rem;position:relative;-webkit-text-decoration:none;text-decoration:none}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{background-color:#fff;color:#6c757d;pointer-events:none}.list-group-item.active{background-color:#0d6efd;border-color:#0d6efd;color:#fff;z-index:2}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{border-top-width:1px;margin-top:-1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-bottom-left-radius:0;border-top-right-radius:.25rem}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-left-width:0;border-top-width:1px}.list-group-horizontal>.list-group-item+.list-group-item.active{border-left-width:1px;margin-left:-1px}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-bottom-left-radius:0;border-top-right-radius:.25rem}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-left-width:0;border-top-width:1px}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{border-left-width:1px;margin-left:-1px}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-bottom-left-radius:0;border-top-right-radius:.25rem}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-left-width:0;border-top-width:1px}.list-group-horizontal-md>.list-group-item+.list-group-item.active{border-left-width:1px;margin-left:-1px}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-bottom-left-radius:0;border-top-right-radius:.25rem}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-left-width:0;border-top-width:1px}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{border-left-width:1px;margin-left:-1px}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-bottom-left-radius:0;border-top-right-radius:.25rem}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-left-width:0;border-top-width:1px}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{border-left-width:1px;margin-left:-1px}}@media (min-width:1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child{border-bottom-left-radius:0;border-top-right-radius:.25rem}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-left-width:0;border-top-width:1px}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{border-left-width:1px;margin-left:-1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{background-color:#cfe2ff;color:#084298}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{background-color:#bacbe6;color:#084298}.list-group-item-primary.list-group-item-action.active{background-color:#084298;border-color:#084298;color:#fff}.list-group-item-secondary{background-color:#e2e3e5;color:#41464b}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{background-color:#cbccce;color:#41464b}.list-group-item-secondary.list-group-item-action.active{background-color:#41464b;border-color:#41464b;color:#fff}.list-group-item-success{background-color:#d1e7dd;color:#0f5132}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{background-color:#bcd0c7;color:#0f5132}.list-group-item-success.list-group-item-action.active{background-color:#0f5132;border-color:#0f5132;color:#fff}.list-group-item-info{background-color:#cff4fc;color:#055160}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{background-color:#badce3;color:#055160}.list-group-item-info.list-group-item-action.active{background-color:#055160;border-color:#055160;color:#fff}.list-group-item-warning{background-color:#fff3cd;color:#664d03}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{background-color:#e6dbb9;color:#664d03}.list-group-item-warning.list-group-item-action.active{background-color:#664d03;border-color:#664d03;color:#fff}.list-group-item-danger{background-color:#f8d7da;color:#842029}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{background-color:#dfc2c4;color:#842029}.list-group-item-danger.list-group-item-action.active{background-color:#842029;border-color:#842029;color:#fff}.list-group-item-light{background-color:#fefefe;color:#636464}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{background-color:#e5e5e5;color:#636464}.list-group-item-light.list-group-item-action.active{background-color:#636464;border-color:#636464;color:#fff}.list-group-item-dark{background-color:#d3d3d4;color:#141619}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{background-color:#bebebf;color:#141619}.list-group-item-dark.list-group-item-action.active{background-color:#141619;border-color:#141619;color:#fff}.btn-close{background:transparent url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3E%3C/svg%3E\") 50%/1em auto no-repeat;border:0;border-radius:.25rem;box-sizing:content-box;color:#000;height:1em;opacity:.5;padding:.25em;width:1em}.btn-close:hover{color:#000;opacity:.75;-webkit-text-decoration:none;text-decoration:none}.btn-close:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.25);opacity:1;outline:0}.btn-close.disabled,.btn-close:disabled{opacity:.25;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.btn-close-white{filter:invert(1) grayscale(100%) brightness(200%)}.toast{background-clip:padding-box;background-color:hsla(0,0%,100%,.85);border:1px solid rgba(0,0,0,.1);border-radius:.25rem;box-shadow:0 .5rem 1rem rgba(0,0,0,.15);font-size:.875rem;max-width:100%;pointer-events:auto;width:350px}.toast.showing{opacity:0}.toast:not(.show){display:none}.toast-container{max-width:100%;pointer-events:none;width:-moz-max-content;width:max-content}.toast-container>:not(:last-child){margin-bottom:.75rem}.toast-header{align-items:center;background-clip:padding-box;background-color:hsla(0,0%,100%,.85);border-bottom:1px solid rgba(0,0,0,.05);border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px);color:#6c757d;display:flex;padding:.5rem .75rem}.toast-header .btn-close{margin-left:.75rem;margin-right:-.375rem}.toast-body{word-wrap:break-word;padding:.75rem}.modal{display:none;height:100%;left:0;outline:0;overflow-x:hidden;overflow-y:auto;position:fixed;top:0;width:100%;z-index:1055}.modal-dialog{margin:.5rem;pointer-events:none;position:relative;width:auto}.modal.fade .modal-dialog{transform:translateY(-50px);transition:transform .3s ease-out}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{align-items:center;display:flex;min-height:calc(100% - 1rem)}.modal-content{background-clip:padding-box;background-color:#fff;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;display:flex;flex-direction:column;outline:0;pointer-events:auto;position:relative;width:100%}.modal-backdrop{background-color:#000;height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:1050}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{align-items:center;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px);display:flex;flex-shrink:0;justify-content:space-between;padding:1rem}.modal-header .btn-close{margin:-.5rem -.5rem -.5rem auto;padding:.5rem}.modal-title{line-height:1.5;margin-bottom:0}.modal-body{flex:1 1 auto;padding:1rem;position:relative}.modal-footer{align-items:center;border-bottom-left-radius:calc(.3rem - 1px);border-bottom-right-radius:calc(.3rem - 1px);border-top:1px solid #dee2e6;display:flex;flex-shrink:0;flex-wrap:wrap;justify-content:flex-end;padding:.75rem}.modal-footer>*{margin:.25rem}@media (min-width:576px){.modal-dialog{margin:1.75rem auto;max-width:500px}.modal-dialog-scrollable{height:calc(100% - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}.modal-fullscreen{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen .modal-header{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}.modal-fullscreen .modal-footer{border-radius:0}@media (max-width:575.98px){.modal-fullscreen-sm-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-sm-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-sm-down .modal-header{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}.modal-fullscreen-sm-down .modal-footer{border-radius:0}}@media (max-width:767.98px){.modal-fullscreen-md-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-md-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-md-down .modal-header{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}.modal-fullscreen-md-down .modal-footer{border-radius:0}}@media (max-width:991.98px){.modal-fullscreen-lg-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-lg-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-lg-down .modal-header{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}.modal-fullscreen-lg-down .modal-footer{border-radius:0}}@media (max-width:1199.98px){.modal-fullscreen-xl-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-xl-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-xl-down .modal-header{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}.modal-fullscreen-xl-down .modal-footer{border-radius:0}}@media (max-width:1399.98px){.modal-fullscreen-xxl-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-xxl-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-xxl-down .modal-header{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}.modal-fullscreen-xxl-down .modal-footer{border-radius:0}}.tooltip{word-wrap:break-word;display:block;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Segoe UI\",\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-family:var(--bs-font-sans-serif);font-size:.875rem;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;margin:0;opacity:0;position:absolute;text-align:left;text-align:start;-webkit-text-decoration:none;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;z-index:1080}.tooltip.show{opacity:.9}.tooltip .tooltip-arrow{display:block;height:.4rem;position:absolute;width:.8rem}.tooltip .tooltip-arrow:before{border-color:transparent;border-style:solid;content:\"\";position:absolute}.bs-tooltip-auto[data-popper-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow,.bs-tooltip-top .tooltip-arrow{bottom:0}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow:before,.bs-tooltip-top .tooltip-arrow:before{border-top-color:#000;border-width:.4rem .4rem 0;top:-1px}.bs-tooltip-auto[data-popper-placement^=right],.bs-tooltip-end{padding:0 .4rem}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow,.bs-tooltip-end .tooltip-arrow{height:.8rem;left:0;width:.4rem}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow:before,.bs-tooltip-end .tooltip-arrow:before{border-right-color:#000;border-width:.4rem .4rem .4rem 0;right:-1px}.bs-tooltip-auto[data-popper-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow,.bs-tooltip-bottom .tooltip-arrow{top:0}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow:before,.bs-tooltip-bottom .tooltip-arrow:before{border-bottom-color:#000;border-width:0 .4rem .4rem;bottom:-1px}.bs-tooltip-auto[data-popper-placement^=left],.bs-tooltip-start{padding:0 .4rem}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow,.bs-tooltip-start .tooltip-arrow{height:.8rem;right:0;width:.4rem}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow:before,.bs-tooltip-start .tooltip-arrow:before{border-left-color:#000;border-width:.4rem 0 .4rem .4rem;left:-1px}.tooltip-inner{background-color:#000;border-radius:.25rem;color:#fff;max-width:200px;padding:.25rem .5rem;text-align:center}.popover{word-wrap:break-word;background-clip:padding-box;background-color:#fff;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;display:block;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Segoe UI\",\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-family:var(--bs-font-sans-serif);font-size:.875rem;font-style:normal;font-weight:400;left:0;letter-spacing:normal;line-break:auto;line-height:1.5;max-width:276px;position:absolute;text-align:left;text-align:start;-webkit-text-decoration:none;text-decoration:none;text-shadow:none;text-transform:none;top:0;white-space:normal;word-break:normal;word-spacing:normal;z-index:1070}.popover .popover-arrow{display:block;height:.5rem;position:absolute;width:1rem}.popover .popover-arrow:after,.popover .popover-arrow:before{border-color:transparent;border-style:solid;content:\"\";display:block;position:absolute}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow,.bs-popover-top>.popover-arrow{bottom:calc(-.5rem - 1px)}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:before,.bs-popover-top>.popover-arrow:before{border-top-color:rgba(0,0,0,.25);border-width:.5rem .5rem 0;bottom:0}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:after,.bs-popover-top>.popover-arrow:after{border-top-color:#fff;border-width:.5rem .5rem 0;bottom:1px}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow,.bs-popover-end>.popover-arrow{height:1rem;left:calc(-.5rem - 1px);width:.5rem}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:before,.bs-popover-end>.popover-arrow:before{border-right-color:rgba(0,0,0,.25);border-width:.5rem .5rem .5rem 0;left:0}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:after,.bs-popover-end>.popover-arrow:after{border-right-color:#fff;border-width:.5rem .5rem .5rem 0;left:1px}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow,.bs-popover-bottom>.popover-arrow{top:calc(-.5rem - 1px)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:before,.bs-popover-bottom>.popover-arrow:before{border-bottom-color:rgba(0,0,0,.25);border-width:0 .5rem .5rem;top:0}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:after,.bs-popover-bottom>.popover-arrow:after{border-bottom-color:#fff;border-width:0 .5rem .5rem;top:1px}.bs-popover-auto[data-popper-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{border-bottom:1px solid #f0f0f0;content:\"\";display:block;left:50%;margin-left:-.5rem;position:absolute;top:0;width:1rem}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow,.bs-popover-start>.popover-arrow{height:1rem;right:calc(-.5rem - 1px);width:.5rem}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:before,.bs-popover-start>.popover-arrow:before{border-left-color:rgba(0,0,0,.25);border-width:.5rem 0 .5rem .5rem;right:0}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:after,.bs-popover-start>.popover-arrow:after{border-left-color:#fff;border-width:.5rem 0 .5rem .5rem;right:1px}.popover-header{background-color:#f0f0f0;border-bottom:1px solid rgba(0,0,0,.2);border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px);font-size:1rem;margin-bottom:0;padding:.5rem 1rem}.popover-header:empty{display:none}.popover-body{color:#212529;padding:1rem}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{overflow:hidden;position:relative;width:100%}.carousel-inner:after{clear:both;content:\"\";display:block}.carousel-item{backface-visibility:hidden;display:none;float:left;margin-right:-100%;position:relative;transition:transform .6s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-end,.carousel-item-next:not(.carousel-item-start){transform:translateX(100%)}.active.carousel-item-start,.carousel-item-prev:not(.carousel-item-end){transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transform:none;transition-property:opacity}.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end,.carousel-fade .carousel-item.active{opacity:1;z-index:1}.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{opacity:0;transition:opacity 0s .6s;z-index:0}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{transition:none}}.carousel-control-next,.carousel-control-prev{align-items:center;background:0 0;border:0;bottom:0;color:#fff;display:flex;justify-content:center;opacity:.5;padding:0;position:absolute;text-align:center;top:0;transition:opacity .15s ease;width:15%;z-index:1}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;opacity:.9;outline:0;-webkit-text-decoration:none;text-decoration:none}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{background-position:50%;background-repeat:no-repeat;background-size:100% 100%;display:inline-block;height:2rem;width:2rem}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 16 16'%3E%3Cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3E%3C/svg%3E\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 16 16'%3E%3Cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E\")}.carousel-indicators{bottom:0;display:flex;justify-content:center;left:0;list-style:none;margin-bottom:1rem;margin-left:15%;margin-right:15%;padding:0;position:absolute;right:0;z-index:2}.carousel-indicators [data-bs-target]{background-clip:padding-box;background-color:#fff;border:0;border-bottom:10px solid transparent;border-top:10px solid transparent;box-sizing:content-box;cursor:pointer;flex:0 1 auto;height:3px;margin-left:3px;margin-right:3px;opacity:.5;padding:0;text-indent:-999px;transition:opacity .6s ease;width:30px}@media (prefers-reduced-motion:reduce){.carousel-indicators [data-bs-target]{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{bottom:1.25rem;color:#fff;left:15%;padding-bottom:1.25rem;padding-top:1.25rem;position:absolute;right:15%;text-align:center}.carousel-dark .carousel-control-next-icon,.carousel-dark .carousel-control-prev-icon{filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators [data-bs-target]{background-color:#000}.carousel-dark .carousel-caption{color:#000}@keyframes spinner-border{to{transform:rotate(1turn)}}.spinner-border{animation:spinner-border .75s linear infinite;border:.25em solid;border-radius:50%;border-right:.25em solid transparent;display:inline-block;height:2rem;vertical-align:-.125em;width:2rem}.spinner-border-sm{border-width:.2em;height:1rem;width:1rem}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{animation:spinner-grow .75s linear infinite;background-color:currentColor;border-radius:50%;display:inline-block;height:2rem;opacity:0;vertical-align:-.125em;width:2rem}.spinner-grow-sm{height:1rem;width:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{animation-duration:1.5s}}.offcanvas{background-clip:padding-box;background-color:#fff;bottom:0;display:flex;flex-direction:column;max-width:100%;outline:0;position:fixed;transition:transform .3s ease-in-out;visibility:hidden;z-index:1045}@media (prefers-reduced-motion:reduce){.offcanvas{transition:none}}.offcanvas-backdrop{background-color:#000;height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:1040}.offcanvas-backdrop.fade{opacity:0}.offcanvas-backdrop.show{opacity:.5}.offcanvas-header{align-items:center;display:flex;justify-content:space-between;padding:1rem}.offcanvas-header .btn-close{margin-bottom:-.5rem;margin-right:-.5rem;margin-top:-.5rem;padding:.5rem}.offcanvas-title{line-height:1.5;margin-bottom:0}.offcanvas-body{flex-grow:1;overflow-y:auto;padding:1rem}.offcanvas-start{border-right:1px solid rgba(0,0,0,.2);left:0;top:0;transform:translateX(-100%);width:400px}.offcanvas-end{border-left:1px solid rgba(0,0,0,.2);right:0;top:0;transform:translateX(100%);width:400px}.offcanvas-top{border-bottom:1px solid rgba(0,0,0,.2);top:0;transform:translateY(-100%)}.offcanvas-bottom,.offcanvas-top{height:30vh;left:0;max-height:100%;right:0}.offcanvas-bottom{border-top:1px solid rgba(0,0,0,.2);transform:translateY(100%)}.offcanvas.show{transform:none}.placeholder{background-color:currentColor;cursor:wait;display:inline-block;min-height:1em;opacity:.5;vertical-align:middle}.placeholder.btn:before{content:\"\";display:inline-block}.placeholder-xs{min-height:.6em}.placeholder-sm{min-height:.8em}.placeholder-lg{min-height:1.2em}.placeholder-glow .placeholder{animation:placeholder-glow 2s ease-in-out infinite}@keyframes placeholder-glow{50%{opacity:.2}}.placeholder-wave{animation:placeholder-wave 2s linear infinite;-webkit-mask-image:linear-gradient(130deg,#000 55%,rgba(0,0,0,.8) 75%,#000 95%);mask-image:linear-gradient(130deg,#000 55%,rgba(0,0,0,.8) 75%,#000 95%);-webkit-mask-size:200% 100%;mask-size:200% 100%}@keyframes placeholder-wave{to{-webkit-mask-position:-200% 0;mask-position:-200% 0}}.clearfix:after{clear:both;content:\"\";display:block}.link-primary{color:#0d6efd}.link-primary:focus,.link-primary:hover{color:#0a58ca}.link-secondary{color:#6c757d}.link-secondary:focus,.link-secondary:hover{color:#565e64}.link-success{color:#198754}.link-success:focus,.link-success:hover{color:#146c43}.link-info{color:#0dcaf0}.link-info:focus,.link-info:hover{color:#3dd5f3}.link-warning{color:#ffc107}.link-warning:focus,.link-warning:hover{color:#ffcd39}.link-danger{color:#dc3545}.link-danger:focus,.link-danger:hover{color:#b02a37}.link-light{color:#f8f9fa}.link-light:focus,.link-light:hover{color:#f9fafb}.link-dark{color:#212529}.link-dark:focus,.link-dark:hover{color:#1a1e21}.ratio{position:relative;width:100%}.ratio:before{content:\"\";display:block;padding-top:var(--bs-aspect-ratio)}.ratio>*{height:100%;left:0;position:absolute;top:0;width:100%}.ratio-1x1{--bs-aspect-ratio:100%}.ratio-4x3{--bs-aspect-ratio:75%}.ratio-16x9{--bs-aspect-ratio:56.25%}.ratio-21x9{--bs-aspect-ratio:42.8571428571%}.fixed-top{top:0}.fixed-bottom,.fixed-top{left:0;position:fixed;right:0;z-index:1030}.fixed-bottom{bottom:0}.sticky-top{position:sticky;top:0;z-index:1020}@media (min-width:576px){.sticky-sm-top{position:sticky;top:0;z-index:1020}}@media (min-width:768px){.sticky-md-top{position:sticky;top:0;z-index:1020}}@media (min-width:992px){.sticky-lg-top{position:sticky;top:0;z-index:1020}}@media (min-width:1200px){.sticky-xl-top{position:sticky;top:0;z-index:1020}}@media (min-width:1400px){.sticky-xxl-top{position:sticky;top:0;z-index:1020}}.hstack{align-items:center;flex-direction:row}.hstack,.vstack{align-self:stretch;display:flex}.vstack{flex:1 1 auto;flex-direction:column}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){clip:rect(0,0,0,0)!important;border:0!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important}.stretched-link:after{bottom:0;content:\"\";left:0;position:absolute;right:0;top:0;z-index:1}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vr{align-self:stretch;background-color:currentColor;display:inline-block;min-height:1em;opacity:.25;width:1px}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.float-start{float:left!important}.float-end{float:right!important}.float-none{float:none!important}.opacity-0{opacity:0!important}.opacity-25{opacity:.25!important}.opacity-50{opacity:.5!important}.opacity-75{opacity:.75!important}.opacity-100{opacity:1!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.overflow-visible{overflow:visible!important}.overflow-scroll{overflow:scroll!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-grid{display:grid!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.d-none{display:none!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:sticky!important}.top-0{top:0!important}.top-50{top:50%!important}.top-100{top:100%!important}.bottom-0{bottom:0!important}.bottom-50{bottom:50%!important}.bottom-100{bottom:100%!important}.start-0{left:0!important}.start-50{left:50%!important}.start-100{left:100%!important}.end-0{right:0!important}.end-50{right:50%!important}.end-100{right:100%!important}.translate-middle{transform:translate(-50%,-50%)!important}.translate-middle-x{transform:translateX(-50%)!important}.translate-middle-y{transform:translateY(-50%)!important}.border{border:1px solid #dee2e6!important}.border-0{border:0!important}.border-top{border-top:1px solid #dee2e6!important}.border-top-0{border-top:0!important}.border-end{border-right:1px solid #dee2e6!important}.border-end-0{border-right:0!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-bottom-0{border-bottom:0!important}.border-start{border-left:1px solid #dee2e6!important}.border-start-0{border-left:0!important}.border-primary{border-color:#0d6efd!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#198754!important}.border-info{border-color:#0dcaf0!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#212529!important}.border-white{border-color:#fff!important}.border-1{border-width:1px!important}.border-2{border-width:2px!important}.border-3{border-width:3px!important}.border-4{border-width:4px!important}.border-5{border-width:5px!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.mw-100{max-width:100%!important}.vw-100{width:100vw!important}.min-vw-100{min-width:100vw!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mh-100{max-height:100%!important}.vh-100{height:100vh!important}.min-vh-100{min-height:100vh!important}.flex-fill{flex:1 1 auto!important}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-0{gap:0!important}.gap-1{gap:.25rem!important}.gap-2{gap:.5rem!important}.gap-3{gap:1rem!important}.gap-4{gap:1.5rem!important}.gap-5{gap:3rem!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.justify-content-evenly{justify-content:space-evenly!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}.order-first{order:-1!important}.order-0{order:0!important}.order-1{order:1!important}.order-2{order:2!important}.order-3{order:3!important}.order-4{order:4!important}.order-5{order:5!important}.order-last{order:6!important}.m-0{margin:0!important}.m-1{margin:.25rem!important}.m-2{margin:.5rem!important}.m-3{margin:1rem!important}.m-4{margin:1.5rem!important}.m-5{margin:3rem!important}.m-auto{margin:auto!important}.mx-0{margin-left:0!important;margin-right:0!important}.mx-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-3{margin-left:1rem!important;margin-right:1rem!important}.mx-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-5{margin-left:3rem!important;margin-right:3rem!important}.mx-auto{margin-left:auto!important;margin-right:auto!important}.my-0{margin-bottom:0!important;margin-top:0!important}.my-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-0{margin-top:0!important}.mt-1{margin-top:.25rem!important}.mt-2{margin-top:.5rem!important}.mt-3{margin-top:1rem!important}.mt-4{margin-top:1.5rem!important}.mt-5{margin-top:3rem!important}.mt-auto{margin-top:auto!important}.me-0{margin-right:0!important}.me-1{margin-right:.25rem!important}.me-2{margin-right:.5rem!important}.me-3{margin-right:1rem!important}.me-4{margin-right:1.5rem!important}.me-5{margin-right:3rem!important}.me-auto{margin-right:auto!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.mb-auto{margin-bottom:auto!important}.ms-0{margin-left:0!important}.ms-1{margin-left:.25rem!important}.ms-2{margin-left:.5rem!important}.ms-3{margin-left:1rem!important}.ms-4{margin-left:1.5rem!important}.ms-5{margin-left:3rem!important}.ms-auto{margin-left:auto!important}.p-0{padding:0!important}.p-1{padding:.25rem!important}.p-2{padding:.5rem!important}.p-3{padding:1rem!important}.p-4{padding:1.5rem!important}.p-5{padding:3rem!important}.px-0{padding-left:0!important;padding-right:0!important}.px-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-3{padding-left:1rem!important;padding-right:1rem!important}.px-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-5{padding-left:3rem!important;padding-right:3rem!important}.py-0{padding-bottom:0!important;padding-top:0!important}.py-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-0{padding-top:0!important}.pt-1{padding-top:.25rem!important}.pt-2{padding-top:.5rem!important}.pt-3{padding-top:1rem!important}.pt-4{padding-top:1.5rem!important}.pt-5{padding-top:3rem!important}.pe-0{padding-right:0!important}.pe-1{padding-right:.25rem!important}.pe-2{padding-right:.5rem!important}.pe-3{padding-right:1rem!important}.pe-4{padding-right:1.5rem!important}.pe-5{padding-right:3rem!important}.pb-0{padding-bottom:0!important}.pb-1{padding-bottom:.25rem!important}.pb-2{padding-bottom:.5rem!important}.pb-3{padding-bottom:1rem!important}.pb-4{padding-bottom:1.5rem!important}.pb-5{padding-bottom:3rem!important}.ps-0{padding-left:0!important}.ps-1{padding-left:.25rem!important}.ps-2{padding-left:.5rem!important}.ps-3{padding-left:1rem!important}.ps-4{padding-left:1.5rem!important}.ps-5{padding-left:3rem!important}.font-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace!important;font-family:var(--bs-font-monospace)!important}.fs-1{font-size:calc(1.375rem + 1.5vw)!important}.fs-2{font-size:calc(1.325rem + .9vw)!important}.fs-3{font-size:calc(1.3rem + .6vw)!important}.fs-4{font-size:calc(1.275rem + .3vw)!important}.fs-5{font-size:1.25rem!important}.fs-6{font-size:1rem!important}.fst-italic{font-style:italic!important}.fst-normal{font-style:normal!important}.fw-light{font-weight:300!important}.fw-lighter{font-weight:lighter!important}.fw-normal{font-weight:400!important}.fw-bold{font-weight:700!important}.fw-bolder{font-weight:bolder!important}.lh-1{line-height:1!important}.lh-sm{line-height:1.25!important}.lh-base{line-height:1.5!important}.lh-lg{line-height:2!important}.text-start{text-align:left!important}.text-end{text-align:right!important}.text-center{text-align:center!important}.text-decoration-none{-webkit-text-decoration:none!important;text-decoration:none!important}.text-decoration-underline{-webkit-text-decoration:underline!important;text-decoration:underline!important}.text-decoration-line-through{-webkit-text-decoration:line-through!important;text-decoration:line-through!important}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-break{word-wrap:break-word!important;word-break:break-word!important}.text-primary{--bs-text-opacity:1;color:#0d6efd!important;color:rgba(var(--bs-primary-rgb),var(--bs-text-opacity))!important}.text-secondary{--bs-text-opacity:1;color:#6c757d!important;color:rgba(var(--bs-secondary-rgb),var(--bs-text-opacity))!important}.text-success{--bs-text-opacity:1;color:#198754!important;color:rgba(var(--bs-success-rgb),var(--bs-text-opacity))!important}.text-info{--bs-text-opacity:1;color:#0dcaf0!important;color:rgba(var(--bs-info-rgb),var(--bs-text-opacity))!important}.text-warning{--bs-text-opacity:1;color:#ffc107!important;color:rgba(var(--bs-warning-rgb),var(--bs-text-opacity))!important}.text-danger{--bs-text-opacity:1;color:#dc3545!important;color:rgba(var(--bs-danger-rgb),var(--bs-text-opacity))!important}.text-light{--bs-text-opacity:1;color:#f8f9fa!important;color:rgba(var(--bs-light-rgb),var(--bs-text-opacity))!important}.text-dark{--bs-text-opacity:1;color:#212529!important;color:rgba(var(--bs-dark-rgb),var(--bs-text-opacity))!important}.text-black{--bs-text-opacity:1;color:#000!important;color:rgba(var(--bs-black-rgb),var(--bs-text-opacity))!important}.text-white{--bs-text-opacity:1;color:#fff!important;color:rgba(var(--bs-white-rgb),var(--bs-text-opacity))!important}.text-body{--bs-text-opacity:1;color:#212529!important;color:rgba(var(--bs-body-color-rgb),var(--bs-text-opacity))!important}.text-muted{--bs-text-opacity:1;color:#6c757d!important}.text-black-50{--bs-text-opacity:1;color:rgba(0,0,0,.5)!important}.text-white-50{--bs-text-opacity:1;color:hsla(0,0%,100%,.5)!important}.text-reset{--bs-text-opacity:1;color:inherit!important}.text-opacity-25{--bs-text-opacity:0.25}.text-opacity-50{--bs-text-opacity:0.5}.text-opacity-75{--bs-text-opacity:0.75}.text-opacity-100{--bs-text-opacity:1}.bg-primary{--bs-bg-opacity:1;background-color:#0d6efd!important;background-color:rgba(var(--bs-primary-rgb),var(--bs-bg-opacity))!important}.bg-secondary{--bs-bg-opacity:1;background-color:#6c757d!important;background-color:rgba(var(--bs-secondary-rgb),var(--bs-bg-opacity))!important}.bg-success{--bs-bg-opacity:1;background-color:#198754!important;background-color:rgba(var(--bs-success-rgb),var(--bs-bg-opacity))!important}.bg-info{--bs-bg-opacity:1;background-color:#0dcaf0!important;background-color:rgba(var(--bs-info-rgb),var(--bs-bg-opacity))!important}.bg-warning{--bs-bg-opacity:1;background-color:#ffc107!important;background-color:rgba(var(--bs-warning-rgb),var(--bs-bg-opacity))!important}.bg-danger{--bs-bg-opacity:1;background-color:#dc3545!important;background-color:rgba(var(--bs-danger-rgb),var(--bs-bg-opacity))!important}.bg-light{--bs-bg-opacity:1;background-color:#f8f9fa!important;background-color:rgba(var(--bs-light-rgb),var(--bs-bg-opacity))!important}.bg-dark{--bs-bg-opacity:1;background-color:#212529!important;background-color:rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important}.bg-black{--bs-bg-opacity:1;background-color:#000!important;background-color:rgba(var(--bs-black-rgb),var(--bs-bg-opacity))!important}.bg-white{--bs-bg-opacity:1;background-color:#fff!important;background-color:rgba(var(--bs-white-rgb),var(--bs-bg-opacity))!important}.bg-body{--bs-bg-opacity:1;background-color:#fff!important;background-color:rgba(var(--bs-body-bg-rgb),var(--bs-bg-opacity))!important}.bg-transparent{--bs-bg-opacity:1;background-color:transparent!important}.bg-opacity-10{--bs-bg-opacity:0.1}.bg-opacity-25{--bs-bg-opacity:0.25}.bg-opacity-50{--bs-bg-opacity:0.5}.bg-opacity-75{--bs-bg-opacity:0.75}.bg-opacity-100{--bs-bg-opacity:1}.bg-gradient{background-image:linear-gradient(180deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0))!important;background-image:var(--bs-gradient)!important}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}.pe-none{pointer-events:none!important}.pe-auto{pointer-events:auto!important}.rounded{border-radius:.25rem!important}.rounded-0{border-radius:0!important}.rounded-1{border-radius:.2rem!important}.rounded-2{border-radius:.25rem!important}.rounded-3{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-top{border-top-left-radius:.25rem!important}.rounded-end,.rounded-top{border-top-right-radius:.25rem!important}.rounded-bottom,.rounded-end{border-bottom-right-radius:.25rem!important}.rounded-bottom,.rounded-start{border-bottom-left-radius:.25rem!important}.rounded-start{border-top-left-radius:.25rem!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media (min-width:576px){.float-sm-start{float:left!important}.float-sm-end{float:right!important}.float-sm-none{float:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-grid{display:grid!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}.d-sm-none{display:none!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-sm-0{gap:0!important}.gap-sm-1{gap:.25rem!important}.gap-sm-2{gap:.5rem!important}.gap-sm-3{gap:1rem!important}.gap-sm-4{gap:1.5rem!important}.gap-sm-5{gap:3rem!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.justify-content-sm-evenly{justify-content:space-evenly!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}.order-sm-first{order:-1!important}.order-sm-0{order:0!important}.order-sm-1{order:1!important}.order-sm-2{order:2!important}.order-sm-3{order:3!important}.order-sm-4{order:4!important}.order-sm-5{order:5!important}.order-sm-last{order:6!important}.m-sm-0{margin:0!important}.m-sm-1{margin:.25rem!important}.m-sm-2{margin:.5rem!important}.m-sm-3{margin:1rem!important}.m-sm-4{margin:1.5rem!important}.m-sm-5{margin:3rem!important}.m-sm-auto{margin:auto!important}.mx-sm-0{margin-left:0!important;margin-right:0!important}.mx-sm-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-sm-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-sm-3{margin-left:1rem!important;margin-right:1rem!important}.mx-sm-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-sm-5{margin-left:3rem!important;margin-right:3rem!important}.mx-sm-auto{margin-left:auto!important;margin-right:auto!important}.my-sm-0{margin-bottom:0!important;margin-top:0!important}.my-sm-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-sm-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-sm-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-sm-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-sm-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-sm-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-sm-0{margin-top:0!important}.mt-sm-1{margin-top:.25rem!important}.mt-sm-2{margin-top:.5rem!important}.mt-sm-3{margin-top:1rem!important}.mt-sm-4{margin-top:1.5rem!important}.mt-sm-5{margin-top:3rem!important}.mt-sm-auto{margin-top:auto!important}.me-sm-0{margin-right:0!important}.me-sm-1{margin-right:.25rem!important}.me-sm-2{margin-right:.5rem!important}.me-sm-3{margin-right:1rem!important}.me-sm-4{margin-right:1.5rem!important}.me-sm-5{margin-right:3rem!important}.me-sm-auto{margin-right:auto!important}.mb-sm-0{margin-bottom:0!important}.mb-sm-1{margin-bottom:.25rem!important}.mb-sm-2{margin-bottom:.5rem!important}.mb-sm-3{margin-bottom:1rem!important}.mb-sm-4{margin-bottom:1.5rem!important}.mb-sm-5{margin-bottom:3rem!important}.mb-sm-auto{margin-bottom:auto!important}.ms-sm-0{margin-left:0!important}.ms-sm-1{margin-left:.25rem!important}.ms-sm-2{margin-left:.5rem!important}.ms-sm-3{margin-left:1rem!important}.ms-sm-4{margin-left:1.5rem!important}.ms-sm-5{margin-left:3rem!important}.ms-sm-auto{margin-left:auto!important}.p-sm-0{padding:0!important}.p-sm-1{padding:.25rem!important}.p-sm-2{padding:.5rem!important}.p-sm-3{padding:1rem!important}.p-sm-4{padding:1.5rem!important}.p-sm-5{padding:3rem!important}.px-sm-0{padding-left:0!important;padding-right:0!important}.px-sm-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-sm-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-sm-3{padding-left:1rem!important;padding-right:1rem!important}.px-sm-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-sm-5{padding-left:3rem!important;padding-right:3rem!important}.py-sm-0{padding-bottom:0!important;padding-top:0!important}.py-sm-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-sm-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-sm-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-sm-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-sm-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-sm-0{padding-top:0!important}.pt-sm-1{padding-top:.25rem!important}.pt-sm-2{padding-top:.5rem!important}.pt-sm-3{padding-top:1rem!important}.pt-sm-4{padding-top:1.5rem!important}.pt-sm-5{padding-top:3rem!important}.pe-sm-0{padding-right:0!important}.pe-sm-1{padding-right:.25rem!important}.pe-sm-2{padding-right:.5rem!important}.pe-sm-3{padding-right:1rem!important}.pe-sm-4{padding-right:1.5rem!important}.pe-sm-5{padding-right:3rem!important}.pb-sm-0{padding-bottom:0!important}.pb-sm-1{padding-bottom:.25rem!important}.pb-sm-2{padding-bottom:.5rem!important}.pb-sm-3{padding-bottom:1rem!important}.pb-sm-4{padding-bottom:1.5rem!important}.pb-sm-5{padding-bottom:3rem!important}.ps-sm-0{padding-left:0!important}.ps-sm-1{padding-left:.25rem!important}.ps-sm-2{padding-left:.5rem!important}.ps-sm-3{padding-left:1rem!important}.ps-sm-4{padding-left:1.5rem!important}.ps-sm-5{padding-left:3rem!important}.text-sm-start{text-align:left!important}.text-sm-end{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.float-md-start{float:left!important}.float-md-end{float:right!important}.float-md-none{float:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-grid{display:grid!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}.d-md-none{display:none!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-md-0{gap:0!important}.gap-md-1{gap:.25rem!important}.gap-md-2{gap:.5rem!important}.gap-md-3{gap:1rem!important}.gap-md-4{gap:1.5rem!important}.gap-md-5{gap:3rem!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.justify-content-md-evenly{justify-content:space-evenly!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}.order-md-first{order:-1!important}.order-md-0{order:0!important}.order-md-1{order:1!important}.order-md-2{order:2!important}.order-md-3{order:3!important}.order-md-4{order:4!important}.order-md-5{order:5!important}.order-md-last{order:6!important}.m-md-0{margin:0!important}.m-md-1{margin:.25rem!important}.m-md-2{margin:.5rem!important}.m-md-3{margin:1rem!important}.m-md-4{margin:1.5rem!important}.m-md-5{margin:3rem!important}.m-md-auto{margin:auto!important}.mx-md-0{margin-left:0!important;margin-right:0!important}.mx-md-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-md-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-md-3{margin-left:1rem!important;margin-right:1rem!important}.mx-md-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-md-5{margin-left:3rem!important;margin-right:3rem!important}.mx-md-auto{margin-left:auto!important;margin-right:auto!important}.my-md-0{margin-bottom:0!important;margin-top:0!important}.my-md-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-md-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-md-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-md-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-md-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-md-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-md-0{margin-top:0!important}.mt-md-1{margin-top:.25rem!important}.mt-md-2{margin-top:.5rem!important}.mt-md-3{margin-top:1rem!important}.mt-md-4{margin-top:1.5rem!important}.mt-md-5{margin-top:3rem!important}.mt-md-auto{margin-top:auto!important}.me-md-0{margin-right:0!important}.me-md-1{margin-right:.25rem!important}.me-md-2{margin-right:.5rem!important}.me-md-3{margin-right:1rem!important}.me-md-4{margin-right:1.5rem!important}.me-md-5{margin-right:3rem!important}.me-md-auto{margin-right:auto!important}.mb-md-0{margin-bottom:0!important}.mb-md-1{margin-bottom:.25rem!important}.mb-md-2{margin-bottom:.5rem!important}.mb-md-3{margin-bottom:1rem!important}.mb-md-4{margin-bottom:1.5rem!important}.mb-md-5{margin-bottom:3rem!important}.mb-md-auto{margin-bottom:auto!important}.ms-md-0{margin-left:0!important}.ms-md-1{margin-left:.25rem!important}.ms-md-2{margin-left:.5rem!important}.ms-md-3{margin-left:1rem!important}.ms-md-4{margin-left:1.5rem!important}.ms-md-5{margin-left:3rem!important}.ms-md-auto{margin-left:auto!important}.p-md-0{padding:0!important}.p-md-1{padding:.25rem!important}.p-md-2{padding:.5rem!important}.p-md-3{padding:1rem!important}.p-md-4{padding:1.5rem!important}.p-md-5{padding:3rem!important}.px-md-0{padding-left:0!important;padding-right:0!important}.px-md-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-md-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-md-3{padding-left:1rem!important;padding-right:1rem!important}.px-md-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-md-5{padding-left:3rem!important;padding-right:3rem!important}.py-md-0{padding-bottom:0!important;padding-top:0!important}.py-md-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-md-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-md-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-md-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-md-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-md-0{padding-top:0!important}.pt-md-1{padding-top:.25rem!important}.pt-md-2{padding-top:.5rem!important}.pt-md-3{padding-top:1rem!important}.pt-md-4{padding-top:1.5rem!important}.pt-md-5{padding-top:3rem!important}.pe-md-0{padding-right:0!important}.pe-md-1{padding-right:.25rem!important}.pe-md-2{padding-right:.5rem!important}.pe-md-3{padding-right:1rem!important}.pe-md-4{padding-right:1.5rem!important}.pe-md-5{padding-right:3rem!important}.pb-md-0{padding-bottom:0!important}.pb-md-1{padding-bottom:.25rem!important}.pb-md-2{padding-bottom:.5rem!important}.pb-md-3{padding-bottom:1rem!important}.pb-md-4{padding-bottom:1.5rem!important}.pb-md-5{padding-bottom:3rem!important}.ps-md-0{padding-left:0!important}.ps-md-1{padding-left:.25rem!important}.ps-md-2{padding-left:.5rem!important}.ps-md-3{padding-left:1rem!important}.ps-md-4{padding-left:1.5rem!important}.ps-md-5{padding-left:3rem!important}.text-md-start{text-align:left!important}.text-md-end{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.float-lg-start{float:left!important}.float-lg-end{float:right!important}.float-lg-none{float:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-grid{display:grid!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}.d-lg-none{display:none!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-lg-0{gap:0!important}.gap-lg-1{gap:.25rem!important}.gap-lg-2{gap:.5rem!important}.gap-lg-3{gap:1rem!important}.gap-lg-4{gap:1.5rem!important}.gap-lg-5{gap:3rem!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.justify-content-lg-evenly{justify-content:space-evenly!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}.order-lg-first{order:-1!important}.order-lg-0{order:0!important}.order-lg-1{order:1!important}.order-lg-2{order:2!important}.order-lg-3{order:3!important}.order-lg-4{order:4!important}.order-lg-5{order:5!important}.order-lg-last{order:6!important}.m-lg-0{margin:0!important}.m-lg-1{margin:.25rem!important}.m-lg-2{margin:.5rem!important}.m-lg-3{margin:1rem!important}.m-lg-4{margin:1.5rem!important}.m-lg-5{margin:3rem!important}.m-lg-auto{margin:auto!important}.mx-lg-0{margin-left:0!important;margin-right:0!important}.mx-lg-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-lg-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-lg-3{margin-left:1rem!important;margin-right:1rem!important}.mx-lg-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-lg-5{margin-left:3rem!important;margin-right:3rem!important}.mx-lg-auto{margin-left:auto!important;margin-right:auto!important}.my-lg-0{margin-bottom:0!important;margin-top:0!important}.my-lg-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-lg-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-lg-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-lg-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-lg-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-lg-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-lg-0{margin-top:0!important}.mt-lg-1{margin-top:.25rem!important}.mt-lg-2{margin-top:.5rem!important}.mt-lg-3{margin-top:1rem!important}.mt-lg-4{margin-top:1.5rem!important}.mt-lg-5{margin-top:3rem!important}.mt-lg-auto{margin-top:auto!important}.me-lg-0{margin-right:0!important}.me-lg-1{margin-right:.25rem!important}.me-lg-2{margin-right:.5rem!important}.me-lg-3{margin-right:1rem!important}.me-lg-4{margin-right:1.5rem!important}.me-lg-5{margin-right:3rem!important}.me-lg-auto{margin-right:auto!important}.mb-lg-0{margin-bottom:0!important}.mb-lg-1{margin-bottom:.25rem!important}.mb-lg-2{margin-bottom:.5rem!important}.mb-lg-3{margin-bottom:1rem!important}.mb-lg-4{margin-bottom:1.5rem!important}.mb-lg-5{margin-bottom:3rem!important}.mb-lg-auto{margin-bottom:auto!important}.ms-lg-0{margin-left:0!important}.ms-lg-1{margin-left:.25rem!important}.ms-lg-2{margin-left:.5rem!important}.ms-lg-3{margin-left:1rem!important}.ms-lg-4{margin-left:1.5rem!important}.ms-lg-5{margin-left:3rem!important}.ms-lg-auto{margin-left:auto!important}.p-lg-0{padding:0!important}.p-lg-1{padding:.25rem!important}.p-lg-2{padding:.5rem!important}.p-lg-3{padding:1rem!important}.p-lg-4{padding:1.5rem!important}.p-lg-5{padding:3rem!important}.px-lg-0{padding-left:0!important;padding-right:0!important}.px-lg-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-lg-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-lg-3{padding-left:1rem!important;padding-right:1rem!important}.px-lg-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-lg-5{padding-left:3rem!important;padding-right:3rem!important}.py-lg-0{padding-bottom:0!important;padding-top:0!important}.py-lg-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-lg-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-lg-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-lg-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-lg-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-lg-0{padding-top:0!important}.pt-lg-1{padding-top:.25rem!important}.pt-lg-2{padding-top:.5rem!important}.pt-lg-3{padding-top:1rem!important}.pt-lg-4{padding-top:1.5rem!important}.pt-lg-5{padding-top:3rem!important}.pe-lg-0{padding-right:0!important}.pe-lg-1{padding-right:.25rem!important}.pe-lg-2{padding-right:.5rem!important}.pe-lg-3{padding-right:1rem!important}.pe-lg-4{padding-right:1.5rem!important}.pe-lg-5{padding-right:3rem!important}.pb-lg-0{padding-bottom:0!important}.pb-lg-1{padding-bottom:.25rem!important}.pb-lg-2{padding-bottom:.5rem!important}.pb-lg-3{padding-bottom:1rem!important}.pb-lg-4{padding-bottom:1.5rem!important}.pb-lg-5{padding-bottom:3rem!important}.ps-lg-0{padding-left:0!important}.ps-lg-1{padding-left:.25rem!important}.ps-lg-2{padding-left:.5rem!important}.ps-lg-3{padding-left:1rem!important}.ps-lg-4{padding-left:1.5rem!important}.ps-lg-5{padding-left:3rem!important}.text-lg-start{text-align:left!important}.text-lg-end{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.float-xl-start{float:left!important}.float-xl-end{float:right!important}.float-xl-none{float:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-grid{display:grid!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}.d-xl-none{display:none!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-xl-0{gap:0!important}.gap-xl-1{gap:.25rem!important}.gap-xl-2{gap:.5rem!important}.gap-xl-3{gap:1rem!important}.gap-xl-4{gap:1.5rem!important}.gap-xl-5{gap:3rem!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.justify-content-xl-evenly{justify-content:space-evenly!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}.order-xl-first{order:-1!important}.order-xl-0{order:0!important}.order-xl-1{order:1!important}.order-xl-2{order:2!important}.order-xl-3{order:3!important}.order-xl-4{order:4!important}.order-xl-5{order:5!important}.order-xl-last{order:6!important}.m-xl-0{margin:0!important}.m-xl-1{margin:.25rem!important}.m-xl-2{margin:.5rem!important}.m-xl-3{margin:1rem!important}.m-xl-4{margin:1.5rem!important}.m-xl-5{margin:3rem!important}.m-xl-auto{margin:auto!important}.mx-xl-0{margin-left:0!important;margin-right:0!important}.mx-xl-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-xl-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-xl-3{margin-left:1rem!important;margin-right:1rem!important}.mx-xl-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-xl-5{margin-left:3rem!important;margin-right:3rem!important}.mx-xl-auto{margin-left:auto!important;margin-right:auto!important}.my-xl-0{margin-bottom:0!important;margin-top:0!important}.my-xl-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-xl-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-xl-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-xl-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-xl-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-xl-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-xl-0{margin-top:0!important}.mt-xl-1{margin-top:.25rem!important}.mt-xl-2{margin-top:.5rem!important}.mt-xl-3{margin-top:1rem!important}.mt-xl-4{margin-top:1.5rem!important}.mt-xl-5{margin-top:3rem!important}.mt-xl-auto{margin-top:auto!important}.me-xl-0{margin-right:0!important}.me-xl-1{margin-right:.25rem!important}.me-xl-2{margin-right:.5rem!important}.me-xl-3{margin-right:1rem!important}.me-xl-4{margin-right:1.5rem!important}.me-xl-5{margin-right:3rem!important}.me-xl-auto{margin-right:auto!important}.mb-xl-0{margin-bottom:0!important}.mb-xl-1{margin-bottom:.25rem!important}.mb-xl-2{margin-bottom:.5rem!important}.mb-xl-3{margin-bottom:1rem!important}.mb-xl-4{margin-bottom:1.5rem!important}.mb-xl-5{margin-bottom:3rem!important}.mb-xl-auto{margin-bottom:auto!important}.ms-xl-0{margin-left:0!important}.ms-xl-1{margin-left:.25rem!important}.ms-xl-2{margin-left:.5rem!important}.ms-xl-3{margin-left:1rem!important}.ms-xl-4{margin-left:1.5rem!important}.ms-xl-5{margin-left:3rem!important}.ms-xl-auto{margin-left:auto!important}.p-xl-0{padding:0!important}.p-xl-1{padding:.25rem!important}.p-xl-2{padding:.5rem!important}.p-xl-3{padding:1rem!important}.p-xl-4{padding:1.5rem!important}.p-xl-5{padding:3rem!important}.px-xl-0{padding-left:0!important;padding-right:0!important}.px-xl-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-xl-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-xl-3{padding-left:1rem!important;padding-right:1rem!important}.px-xl-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-xl-5{padding-left:3rem!important;padding-right:3rem!important}.py-xl-0{padding-bottom:0!important;padding-top:0!important}.py-xl-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-xl-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-xl-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-xl-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-xl-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-xl-0{padding-top:0!important}.pt-xl-1{padding-top:.25rem!important}.pt-xl-2{padding-top:.5rem!important}.pt-xl-3{padding-top:1rem!important}.pt-xl-4{padding-top:1.5rem!important}.pt-xl-5{padding-top:3rem!important}.pe-xl-0{padding-right:0!important}.pe-xl-1{padding-right:.25rem!important}.pe-xl-2{padding-right:.5rem!important}.pe-xl-3{padding-right:1rem!important}.pe-xl-4{padding-right:1.5rem!important}.pe-xl-5{padding-right:3rem!important}.pb-xl-0{padding-bottom:0!important}.pb-xl-1{padding-bottom:.25rem!important}.pb-xl-2{padding-bottom:.5rem!important}.pb-xl-3{padding-bottom:1rem!important}.pb-xl-4{padding-bottom:1.5rem!important}.pb-xl-5{padding-bottom:3rem!important}.ps-xl-0{padding-left:0!important}.ps-xl-1{padding-left:.25rem!important}.ps-xl-2{padding-left:.5rem!important}.ps-xl-3{padding-left:1rem!important}.ps-xl-4{padding-left:1.5rem!important}.ps-xl-5{padding-left:3rem!important}.text-xl-start{text-align:left!important}.text-xl-end{text-align:right!important}.text-xl-center{text-align:center!important}}@media (min-width:1400px){.float-xxl-start{float:left!important}.float-xxl-end{float:right!important}.float-xxl-none{float:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-grid{display:grid!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}.d-xxl-none{display:none!important}.flex-xxl-fill{flex:1 1 auto!important}.flex-xxl-row{flex-direction:row!important}.flex-xxl-column{flex-direction:column!important}.flex-xxl-row-reverse{flex-direction:row-reverse!important}.flex-xxl-column-reverse{flex-direction:column-reverse!important}.flex-xxl-grow-0{flex-grow:0!important}.flex-xxl-grow-1{flex-grow:1!important}.flex-xxl-shrink-0{flex-shrink:0!important}.flex-xxl-shrink-1{flex-shrink:1!important}.flex-xxl-wrap{flex-wrap:wrap!important}.flex-xxl-nowrap{flex-wrap:nowrap!important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-xxl-0{gap:0!important}.gap-xxl-1{gap:.25rem!important}.gap-xxl-2{gap:.5rem!important}.gap-xxl-3{gap:1rem!important}.gap-xxl-4{gap:1.5rem!important}.gap-xxl-5{gap:3rem!important}.justify-content-xxl-start{justify-content:flex-start!important}.justify-content-xxl-end{justify-content:flex-end!important}.justify-content-xxl-center{justify-content:center!important}.justify-content-xxl-between{justify-content:space-between!important}.justify-content-xxl-around{justify-content:space-around!important}.justify-content-xxl-evenly{justify-content:space-evenly!important}.align-items-xxl-start{align-items:flex-start!important}.align-items-xxl-end{align-items:flex-end!important}.align-items-xxl-center{align-items:center!important}.align-items-xxl-baseline{align-items:baseline!important}.align-items-xxl-stretch{align-items:stretch!important}.align-content-xxl-start{align-content:flex-start!important}.align-content-xxl-end{align-content:flex-end!important}.align-content-xxl-center{align-content:center!important}.align-content-xxl-between{align-content:space-between!important}.align-content-xxl-around{align-content:space-around!important}.align-content-xxl-stretch{align-content:stretch!important}.align-self-xxl-auto{align-self:auto!important}.align-self-xxl-start{align-self:flex-start!important}.align-self-xxl-end{align-self:flex-end!important}.align-self-xxl-center{align-self:center!important}.align-self-xxl-baseline{align-self:baseline!important}.align-self-xxl-stretch{align-self:stretch!important}.order-xxl-first{order:-1!important}.order-xxl-0{order:0!important}.order-xxl-1{order:1!important}.order-xxl-2{order:2!important}.order-xxl-3{order:3!important}.order-xxl-4{order:4!important}.order-xxl-5{order:5!important}.order-xxl-last{order:6!important}.m-xxl-0{margin:0!important}.m-xxl-1{margin:.25rem!important}.m-xxl-2{margin:.5rem!important}.m-xxl-3{margin:1rem!important}.m-xxl-4{margin:1.5rem!important}.m-xxl-5{margin:3rem!important}.m-xxl-auto{margin:auto!important}.mx-xxl-0{margin-left:0!important;margin-right:0!important}.mx-xxl-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-xxl-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-xxl-3{margin-left:1rem!important;margin-right:1rem!important}.mx-xxl-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-xxl-5{margin-left:3rem!important;margin-right:3rem!important}.mx-xxl-auto{margin-left:auto!important;margin-right:auto!important}.my-xxl-0{margin-bottom:0!important;margin-top:0!important}.my-xxl-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-xxl-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-xxl-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-xxl-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-xxl-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-xxl-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-xxl-0{margin-top:0!important}.mt-xxl-1{margin-top:.25rem!important}.mt-xxl-2{margin-top:.5rem!important}.mt-xxl-3{margin-top:1rem!important}.mt-xxl-4{margin-top:1.5rem!important}.mt-xxl-5{margin-top:3rem!important}.mt-xxl-auto{margin-top:auto!important}.me-xxl-0{margin-right:0!important}.me-xxl-1{margin-right:.25rem!important}.me-xxl-2{margin-right:.5rem!important}.me-xxl-3{margin-right:1rem!important}.me-xxl-4{margin-right:1.5rem!important}.me-xxl-5{margin-right:3rem!important}.me-xxl-auto{margin-right:auto!important}.mb-xxl-0{margin-bottom:0!important}.mb-xxl-1{margin-bottom:.25rem!important}.mb-xxl-2{margin-bottom:.5rem!important}.mb-xxl-3{margin-bottom:1rem!important}.mb-xxl-4{margin-bottom:1.5rem!important}.mb-xxl-5{margin-bottom:3rem!important}.mb-xxl-auto{margin-bottom:auto!important}.ms-xxl-0{margin-left:0!important}.ms-xxl-1{margin-left:.25rem!important}.ms-xxl-2{margin-left:.5rem!important}.ms-xxl-3{margin-left:1rem!important}.ms-xxl-4{margin-left:1.5rem!important}.ms-xxl-5{margin-left:3rem!important}.ms-xxl-auto{margin-left:auto!important}.p-xxl-0{padding:0!important}.p-xxl-1{padding:.25rem!important}.p-xxl-2{padding:.5rem!important}.p-xxl-3{padding:1rem!important}.p-xxl-4{padding:1.5rem!important}.p-xxl-5{padding:3rem!important}.px-xxl-0{padding-left:0!important;padding-right:0!important}.px-xxl-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-xxl-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-xxl-3{padding-left:1rem!important;padding-right:1rem!important}.px-xxl-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-xxl-5{padding-left:3rem!important;padding-right:3rem!important}.py-xxl-0{padding-bottom:0!important;padding-top:0!important}.py-xxl-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-xxl-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-xxl-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-xxl-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-xxl-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-xxl-0{padding-top:0!important}.pt-xxl-1{padding-top:.25rem!important}.pt-xxl-2{padding-top:.5rem!important}.pt-xxl-3{padding-top:1rem!important}.pt-xxl-4{padding-top:1.5rem!important}.pt-xxl-5{padding-top:3rem!important}.pe-xxl-0{padding-right:0!important}.pe-xxl-1{padding-right:.25rem!important}.pe-xxl-2{padding-right:.5rem!important}.pe-xxl-3{padding-right:1rem!important}.pe-xxl-4{padding-right:1.5rem!important}.pe-xxl-5{padding-right:3rem!important}.pb-xxl-0{padding-bottom:0!important}.pb-xxl-1{padding-bottom:.25rem!important}.pb-xxl-2{padding-bottom:.5rem!important}.pb-xxl-3{padding-bottom:1rem!important}.pb-xxl-4{padding-bottom:1.5rem!important}.pb-xxl-5{padding-bottom:3rem!important}.ps-xxl-0{padding-left:0!important}.ps-xxl-1{padding-left:.25rem!important}.ps-xxl-2{padding-left:.5rem!important}.ps-xxl-3{padding-left:1rem!important}.ps-xxl-4{padding-left:1.5rem!important}.ps-xxl-5{padding-left:3rem!important}.text-xxl-start{text-align:left!important}.text-xxl-end{text-align:right!important}.text-xxl-center{text-align:center!important}}@media (min-width:1200px){.fs-1{font-size:2.5rem!important}.fs-2{font-size:2rem!important}.fs-3{font-size:1.75rem!important}.fs-4{font-size:1.5rem!important}}@media print{.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-grid{display:grid!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}.d-print-none{display:none!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("0d5eae0a", content, true)

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(28);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(31);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(32);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(33);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(34);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(35);
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(36);
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(37);
var ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(38);
var ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(39);
var ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(40);
var ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(41);
var ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(42);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___, { hash: "#fontawesome" });
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___, { hash: "#fontawesome" });
var ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___, { hash: "#fontawesome" });
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\r\n * Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com\r\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\r\n */.fa,.fab,.fad,.fal,.far,.fas{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-feature-settings:normal;display:inline-block;font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;line-height:inherit;position:absolute;text-align:center;width:2em}.fa-border{border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{animation:fa-spin 2s linear infinite}.fa-pulse{animation:fa-spin 1s steps(8) infinite}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";transform:scaleX(-1)}.fa-flip-vertical{transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical,.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\"}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{transform:scale(-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{filter:none}.fa-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.fa-stack-1x,.fa-stack-2x{left:0;position:absolute;text-align:center;width:100%}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-500px:before{content:\"\\f26e\"}.fa-accessible-icon:before{content:\"\\f368\"}.fa-accusoft:before{content:\"\\f369\"}.fa-acquisitions-incorporated:before{content:\"\\f6af\"}.fa-ad:before{content:\"\\f641\"}.fa-address-book:before{content:\"\\f2b9\"}.fa-address-card:before{content:\"\\f2bb\"}.fa-adjust:before{content:\"\\f042\"}.fa-adn:before{content:\"\\f170\"}.fa-adversal:before{content:\"\\f36a\"}.fa-affiliatetheme:before{content:\"\\f36b\"}.fa-air-freshener:before{content:\"\\f5d0\"}.fa-airbnb:before{content:\"\\f834\"}.fa-algolia:before{content:\"\\f36c\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-justify:before{content:\"\\f039\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-right:before{content:\"\\f038\"}.fa-alipay:before{content:\"\\f642\"}.fa-allergies:before{content:\"\\f461\"}.fa-amazon:before{content:\"\\f270\"}.fa-amazon-pay:before{content:\"\\f42c\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-american-sign-language-interpreting:before{content:\"\\f2a3\"}.fa-amilia:before{content:\"\\f36d\"}.fa-anchor:before{content:\"\\f13d\"}.fa-android:before{content:\"\\f17b\"}.fa-angellist:before{content:\"\\f209\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-down:before{content:\"\\f107\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angry:before{content:\"\\f556\"}.fa-angrycreative:before{content:\"\\f36e\"}.fa-angular:before{content:\"\\f420\"}.fa-ankh:before{content:\"\\f644\"}.fa-app-store:before{content:\"\\f36f\"}.fa-app-store-ios:before{content:\"\\f370\"}.fa-apper:before{content:\"\\f371\"}.fa-apple:before{content:\"\\f179\"}.fa-apple-alt:before{content:\"\\f5d1\"}.fa-apple-pay:before{content:\"\\f415\"}.fa-archive:before{content:\"\\f187\"}.fa-archway:before{content:\"\\f557\"}.fa-arrow-alt-circle-down:before{content:\"\\f358\"}.fa-arrow-alt-circle-left:before{content:\"\\f359\"}.fa-arrow-alt-circle-right:before{content:\"\\f35a\"}.fa-arrow-alt-circle-up:before{content:\"\\f35b\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-arrows-alt-h:before{content:\"\\f337\"}.fa-arrows-alt-v:before{content:\"\\f338\"}.fa-artstation:before{content:\"\\f77a\"}.fa-assistive-listening-systems:before{content:\"\\f2a2\"}.fa-asterisk:before{content:\"\\f069\"}.fa-asymmetrik:before{content:\"\\f372\"}.fa-at:before{content:\"\\f1fa\"}.fa-atlas:before{content:\"\\f558\"}.fa-atlassian:before{content:\"\\f77b\"}.fa-atom:before{content:\"\\f5d2\"}.fa-audible:before{content:\"\\f373\"}.fa-audio-description:before{content:\"\\f29e\"}.fa-autoprefixer:before{content:\"\\f41c\"}.fa-avianex:before{content:\"\\f374\"}.fa-aviato:before{content:\"\\f421\"}.fa-award:before{content:\"\\f559\"}.fa-aws:before{content:\"\\f375\"}.fa-baby:before{content:\"\\f77c\"}.fa-baby-carriage:before{content:\"\\f77d\"}.fa-backspace:before{content:\"\\f55a\"}.fa-backward:before{content:\"\\f04a\"}.fa-bacon:before{content:\"\\f7e5\"}.fa-bacteria:before{content:\"\\e059\"}.fa-bacterium:before{content:\"\\e05a\"}.fa-bahai:before{content:\"\\f666\"}.fa-balance-scale:before{content:\"\\f24e\"}.fa-balance-scale-left:before{content:\"\\f515\"}.fa-balance-scale-right:before{content:\"\\f516\"}.fa-ban:before{content:\"\\f05e\"}.fa-band-aid:before{content:\"\\f462\"}.fa-bandcamp:before{content:\"\\f2d5\"}.fa-barcode:before{content:\"\\f02a\"}.fa-bars:before{content:\"\\f0c9\"}.fa-baseball-ball:before{content:\"\\f433\"}.fa-basketball-ball:before{content:\"\\f434\"}.fa-bath:before{content:\"\\f2cd\"}.fa-battery-empty:before{content:\"\\f244\"}.fa-battery-full:before{content:\"\\f240\"}.fa-battery-half:before{content:\"\\f242\"}.fa-battery-quarter:before{content:\"\\f243\"}.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-battle-net:before{content:\"\\f835\"}.fa-bed:before{content:\"\\f236\"}.fa-beer:before{content:\"\\f0fc\"}.fa-behance:before{content:\"\\f1b4\"}.fa-behance-square:before{content:\"\\f1b5\"}.fa-bell:before{content:\"\\f0f3\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-bezier-curve:before{content:\"\\f55b\"}.fa-bible:before{content:\"\\f647\"}.fa-bicycle:before{content:\"\\f206\"}.fa-biking:before{content:\"\\f84a\"}.fa-bimobject:before{content:\"\\f378\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-biohazard:before{content:\"\\f780\"}.fa-birthday-cake:before{content:\"\\f1fd\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitcoin:before{content:\"\\f379\"}.fa-bity:before{content:\"\\f37a\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-blackberry:before{content:\"\\f37b\"}.fa-blender:before{content:\"\\f517\"}.fa-blender-phone:before{content:\"\\f6b6\"}.fa-blind:before{content:\"\\f29d\"}.fa-blog:before{content:\"\\f781\"}.fa-blogger:before{content:\"\\f37c\"}.fa-blogger-b:before{content:\"\\f37d\"}.fa-bluetooth:before{content:\"\\f293\"}.fa-bluetooth-b:before{content:\"\\f294\"}.fa-bold:before{content:\"\\f032\"}.fa-bolt:before{content:\"\\f0e7\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-bone:before{content:\"\\f5d7\"}.fa-bong:before{content:\"\\f55c\"}.fa-book:before{content:\"\\f02d\"}.fa-book-dead:before{content:\"\\f6b7\"}.fa-book-medical:before{content:\"\\f7e6\"}.fa-book-open:before{content:\"\\f518\"}.fa-book-reader:before{content:\"\\f5da\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-bootstrap:before{content:\"\\f836\"}.fa-border-all:before{content:\"\\f84c\"}.fa-border-none:before{content:\"\\f850\"}.fa-border-style:before{content:\"\\f853\"}.fa-bowling-ball:before{content:\"\\f436\"}.fa-box:before{content:\"\\f466\"}.fa-box-open:before{content:\"\\f49e\"}.fa-box-tissue:before{content:\"\\e05b\"}.fa-boxes:before{content:\"\\f468\"}.fa-braille:before{content:\"\\f2a1\"}.fa-brain:before{content:\"\\f5dc\"}.fa-bread-slice:before{content:\"\\f7ec\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-briefcase-medical:before{content:\"\\f469\"}.fa-broadcast-tower:before{content:\"\\f519\"}.fa-broom:before{content:\"\\f51a\"}.fa-brush:before{content:\"\\f55d\"}.fa-btc:before{content:\"\\f15a\"}.fa-buffer:before{content:\"\\f837\"}.fa-bug:before{content:\"\\f188\"}.fa-building:before{content:\"\\f1ad\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bullseye:before{content:\"\\f140\"}.fa-burn:before{content:\"\\f46a\"}.fa-buromobelexperte:before{content:\"\\f37f\"}.fa-bus:before{content:\"\\f207\"}.fa-bus-alt:before{content:\"\\f55e\"}.fa-business-time:before{content:\"\\f64a\"}.fa-buy-n-large:before{content:\"\\f8a6\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-calendar:before{content:\"\\f133\"}.fa-calendar-alt:before{content:\"\\f073\"}.fa-calendar-check:before{content:\"\\f274\"}.fa-calendar-day:before{content:\"\\f783\"}.fa-calendar-minus:before{content:\"\\f272\"}.fa-calendar-plus:before{content:\"\\f271\"}.fa-calendar-times:before{content:\"\\f273\"}.fa-calendar-week:before{content:\"\\f784\"}.fa-camera:before{content:\"\\f030\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-campground:before{content:\"\\f6bb\"}.fa-canadian-maple-leaf:before{content:\"\\f785\"}.fa-candy-cane:before{content:\"\\f786\"}.fa-cannabis:before{content:\"\\f55f\"}.fa-capsules:before{content:\"\\f46b\"}.fa-car:before{content:\"\\f1b9\"}.fa-car-alt:before{content:\"\\f5de\"}.fa-car-battery:before{content:\"\\f5df\"}.fa-car-crash:before{content:\"\\f5e1\"}.fa-car-side:before{content:\"\\f5e4\"}.fa-caravan:before{content:\"\\f8ff\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-caret-square-down:before{content:\"\\f150\"}.fa-caret-square-left:before{content:\"\\f191\"}.fa-caret-square-right:before{content:\"\\f152\"}.fa-caret-square-up:before{content:\"\\f151\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-carrot:before{content:\"\\f787\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-cash-register:before{content:\"\\f788\"}.fa-cat:before{content:\"\\f6be\"}.fa-cc-amazon-pay:before{content:\"\\f42d\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-cc-apple-pay:before{content:\"\\f416\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-centercode:before{content:\"\\f380\"}.fa-centos:before{content:\"\\f789\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-chair:before{content:\"\\f6c0\"}.fa-chalkboard:before{content:\"\\f51b\"}.fa-chalkboard-teacher:before{content:\"\\f51c\"}.fa-charging-station:before{content:\"\\f5e7\"}.fa-chart-area:before{content:\"\\f1fe\"}.fa-chart-bar:before{content:\"\\f080\"}.fa-chart-line:before{content:\"\\f201\"}.fa-chart-pie:before{content:\"\\f200\"}.fa-check:before{content:\"\\f00c\"}.fa-check-circle:before{content:\"\\f058\"}.fa-check-double:before{content:\"\\f560\"}.fa-check-square:before{content:\"\\f14a\"}.fa-cheese:before{content:\"\\f7ef\"}.fa-chess:before{content:\"\\f439\"}.fa-chess-bishop:before{content:\"\\f43a\"}.fa-chess-board:before{content:\"\\f43c\"}.fa-chess-king:before{content:\"\\f43f\"}.fa-chess-knight:before{content:\"\\f441\"}.fa-chess-pawn:before{content:\"\\f443\"}.fa-chess-queen:before{content:\"\\f445\"}.fa-chess-rook:before{content:\"\\f447\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-child:before{content:\"\\f1ae\"}.fa-chrome:before{content:\"\\f268\"}.fa-chromecast:before{content:\"\\f838\"}.fa-church:before{content:\"\\f51d\"}.fa-circle:before{content:\"\\f111\"}.fa-circle-notch:before{content:\"\\f1ce\"}.fa-city:before{content:\"\\f64f\"}.fa-clinic-medical:before{content:\"\\f7f2\"}.fa-clipboard:before{content:\"\\f328\"}.fa-clipboard-check:before{content:\"\\f46c\"}.fa-clipboard-list:before{content:\"\\f46d\"}.fa-clock:before{content:\"\\f017\"}.fa-clone:before{content:\"\\f24d\"}.fa-closed-captioning:before{content:\"\\f20a\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-cloud-download-alt:before{content:\"\\f381\"}.fa-cloud-meatball:before{content:\"\\f73b\"}.fa-cloud-moon:before{content:\"\\f6c3\"}.fa-cloud-moon-rain:before{content:\"\\f73c\"}.fa-cloud-rain:before{content:\"\\f73d\"}.fa-cloud-showers-heavy:before{content:\"\\f740\"}.fa-cloud-sun:before{content:\"\\f6c4\"}.fa-cloud-sun-rain:before{content:\"\\f743\"}.fa-cloud-upload-alt:before{content:\"\\f382\"}.fa-cloudflare:before{content:\"\\e07d\"}.fa-cloudscale:before{content:\"\\f383\"}.fa-cloudsmith:before{content:\"\\f384\"}.fa-cloudversify:before{content:\"\\f385\"}.fa-cocktail:before{content:\"\\f561\"}.fa-code:before{content:\"\\f121\"}.fa-code-branch:before{content:\"\\f126\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-codiepie:before{content:\"\\f284\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cog:before{content:\"\\f013\"}.fa-cogs:before{content:\"\\f085\"}.fa-coins:before{content:\"\\f51e\"}.fa-columns:before{content:\"\\f0db\"}.fa-comment:before{content:\"\\f075\"}.fa-comment-alt:before{content:\"\\f27a\"}.fa-comment-dollar:before{content:\"\\f651\"}.fa-comment-dots:before{content:\"\\f4ad\"}.fa-comment-medical:before{content:\"\\f7f5\"}.fa-comment-slash:before{content:\"\\f4b3\"}.fa-comments:before{content:\"\\f086\"}.fa-comments-dollar:before{content:\"\\f653\"}.fa-compact-disc:before{content:\"\\f51f\"}.fa-compass:before{content:\"\\f14e\"}.fa-compress:before{content:\"\\f066\"}.fa-compress-alt:before{content:\"\\f422\"}.fa-compress-arrows-alt:before{content:\"\\f78c\"}.fa-concierge-bell:before{content:\"\\f562\"}.fa-confluence:before{content:\"\\f78d\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-contao:before{content:\"\\f26d\"}.fa-cookie:before{content:\"\\f563\"}.fa-cookie-bite:before{content:\"\\f564\"}.fa-copy:before{content:\"\\f0c5\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-cotton-bureau:before{content:\"\\f89e\"}.fa-couch:before{content:\"\\f4b8\"}.fa-cpanel:before{content:\"\\f388\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-creative-commons-by:before{content:\"\\f4e7\"}.fa-creative-commons-nc:before{content:\"\\f4e8\"}.fa-creative-commons-nc-eu:before{content:\"\\f4e9\"}.fa-creative-commons-nc-jp:before{content:\"\\f4ea\"}.fa-creative-commons-nd:before{content:\"\\f4eb\"}.fa-creative-commons-pd:before{content:\"\\f4ec\"}.fa-creative-commons-pd-alt:before{content:\"\\f4ed\"}.fa-creative-commons-remix:before{content:\"\\f4ee\"}.fa-creative-commons-sa:before{content:\"\\f4ef\"}.fa-creative-commons-sampling:before{content:\"\\f4f0\"}.fa-creative-commons-sampling-plus:before{content:\"\\f4f1\"}.fa-creative-commons-share:before{content:\"\\f4f2\"}.fa-creative-commons-zero:before{content:\"\\f4f3\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-critical-role:before{content:\"\\f6c9\"}.fa-crop:before{content:\"\\f125\"}.fa-crop-alt:before{content:\"\\f565\"}.fa-cross:before{content:\"\\f654\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-crow:before{content:\"\\f520\"}.fa-crown:before{content:\"\\f521\"}.fa-crutch:before{content:\"\\f7f7\"}.fa-css3:before{content:\"\\f13c\"}.fa-css3-alt:before{content:\"\\f38b\"}.fa-cube:before{content:\"\\f1b2\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-cut:before{content:\"\\f0c4\"}.fa-cuttlefish:before{content:\"\\f38c\"}.fa-d-and-d:before{content:\"\\f38d\"}.fa-d-and-d-beyond:before{content:\"\\f6ca\"}.fa-dailymotion:before{content:\"\\e052\"}.fa-dashcube:before{content:\"\\f210\"}.fa-database:before{content:\"\\f1c0\"}.fa-deaf:before{content:\"\\f2a4\"}.fa-deezer:before{content:\"\\e077\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-democrat:before{content:\"\\f747\"}.fa-deploydog:before{content:\"\\f38e\"}.fa-deskpro:before{content:\"\\f38f\"}.fa-desktop:before{content:\"\\f108\"}.fa-dev:before{content:\"\\f6cc\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-dharmachakra:before{content:\"\\f655\"}.fa-dhl:before{content:\"\\f790\"}.fa-diagnoses:before{content:\"\\f470\"}.fa-diaspora:before{content:\"\\f791\"}.fa-dice:before{content:\"\\f522\"}.fa-dice-d20:before{content:\"\\f6cf\"}.fa-dice-d6:before{content:\"\\f6d1\"}.fa-dice-five:before{content:\"\\f523\"}.fa-dice-four:before{content:\"\\f524\"}.fa-dice-one:before{content:\"\\f525\"}.fa-dice-six:before{content:\"\\f526\"}.fa-dice-three:before{content:\"\\f527\"}.fa-dice-two:before{content:\"\\f528\"}.fa-digg:before{content:\"\\f1a6\"}.fa-digital-ocean:before{content:\"\\f391\"}.fa-digital-tachograph:before{content:\"\\f566\"}.fa-directions:before{content:\"\\f5eb\"}.fa-discord:before{content:\"\\f392\"}.fa-discourse:before{content:\"\\f393\"}.fa-disease:before{content:\"\\f7fa\"}.fa-divide:before{content:\"\\f529\"}.fa-dizzy:before{content:\"\\f567\"}.fa-dna:before{content:\"\\f471\"}.fa-dochub:before{content:\"\\f394\"}.fa-docker:before{content:\"\\f395\"}.fa-dog:before{content:\"\\f6d3\"}.fa-dollar-sign:before{content:\"\\f155\"}.fa-dolly:before{content:\"\\f472\"}.fa-dolly-flatbed:before{content:\"\\f474\"}.fa-donate:before{content:\"\\f4b9\"}.fa-door-closed:before{content:\"\\f52a\"}.fa-door-open:before{content:\"\\f52b\"}.fa-dot-circle:before{content:\"\\f192\"}.fa-dove:before{content:\"\\f4ba\"}.fa-download:before{content:\"\\f019\"}.fa-draft2digital:before{content:\"\\f396\"}.fa-drafting-compass:before{content:\"\\f568\"}.fa-dragon:before{content:\"\\f6d5\"}.fa-draw-polygon:before{content:\"\\f5ee\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-dribbble-square:before{content:\"\\f397\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-drum:before{content:\"\\f569\"}.fa-drum-steelpan:before{content:\"\\f56a\"}.fa-drumstick-bite:before{content:\"\\f6d7\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-dumbbell:before{content:\"\\f44b\"}.fa-dumpster:before{content:\"\\f793\"}.fa-dumpster-fire:before{content:\"\\f794\"}.fa-dungeon:before{content:\"\\f6d9\"}.fa-dyalog:before{content:\"\\f399\"}.fa-earlybirds:before{content:\"\\f39a\"}.fa-ebay:before{content:\"\\f4f4\"}.fa-edge:before{content:\"\\f282\"}.fa-edge-legacy:before{content:\"\\e078\"}.fa-edit:before{content:\"\\f044\"}.fa-egg:before{content:\"\\f7fb\"}.fa-eject:before{content:\"\\f052\"}.fa-elementor:before{content:\"\\f430\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-ello:before{content:\"\\f5f1\"}.fa-ember:before{content:\"\\f423\"}.fa-empire:before{content:\"\\f1d1\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-envelope-open:before{content:\"\\f2b6\"}.fa-envelope-open-text:before{content:\"\\f658\"}.fa-envelope-square:before{content:\"\\f199\"}.fa-envira:before{content:\"\\f299\"}.fa-equals:before{content:\"\\f52c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-erlang:before{content:\"\\f39d\"}.fa-ethereum:before{content:\"\\f42e\"}.fa-ethernet:before{content:\"\\f796\"}.fa-etsy:before{content:\"\\f2d7\"}.fa-euro-sign:before{content:\"\\f153\"}.fa-evernote:before{content:\"\\f839\"}.fa-exchange-alt:before{content:\"\\f362\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-exclamation-triangle:before{content:\"\\f071\"}.fa-expand:before{content:\"\\f065\"}.fa-expand-alt:before{content:\"\\f424\"}.fa-expand-arrows-alt:before{content:\"\\f31e\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-external-link-alt:before{content:\"\\f35d\"}.fa-external-link-square-alt:before{content:\"\\f360\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-dropper:before{content:\"\\f1fb\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-facebook:before{content:\"\\f09a\"}.fa-facebook-f:before{content:\"\\f39e\"}.fa-facebook-messenger:before{content:\"\\f39f\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-fan:before{content:\"\\f863\"}.fa-fantasy-flight-games:before{content:\"\\f6dc\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-faucet:before{content:\"\\e005\"}.fa-fax:before{content:\"\\f1ac\"}.fa-feather:before{content:\"\\f52d\"}.fa-feather-alt:before{content:\"\\f56b\"}.fa-fedex:before{content:\"\\f797\"}.fa-fedora:before{content:\"\\f798\"}.fa-female:before{content:\"\\f182\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-figma:before{content:\"\\f799\"}.fa-file:before{content:\"\\f15b\"}.fa-file-alt:before{content:\"\\f15c\"}.fa-file-archive:before{content:\"\\f1c6\"}.fa-file-audio:before{content:\"\\f1c7\"}.fa-file-code:before{content:\"\\f1c9\"}.fa-file-contract:before{content:\"\\f56c\"}.fa-file-csv:before{content:\"\\f6dd\"}.fa-file-download:before{content:\"\\f56d\"}.fa-file-excel:before{content:\"\\f1c3\"}.fa-file-export:before{content:\"\\f56e\"}.fa-file-image:before{content:\"\\f1c5\"}.fa-file-import:before{content:\"\\f56f\"}.fa-file-invoice:before{content:\"\\f570\"}.fa-file-invoice-dollar:before{content:\"\\f571\"}.fa-file-medical:before{content:\"\\f477\"}.fa-file-medical-alt:before{content:\"\\f478\"}.fa-file-pdf:before{content:\"\\f1c1\"}.fa-file-powerpoint:before{content:\"\\f1c4\"}.fa-file-prescription:before{content:\"\\f572\"}.fa-file-signature:before{content:\"\\f573\"}.fa-file-upload:before{content:\"\\f574\"}.fa-file-video:before{content:\"\\f1c8\"}.fa-file-word:before{content:\"\\f1c2\"}.fa-fill:before{content:\"\\f575\"}.fa-fill-drip:before{content:\"\\f576\"}.fa-film:before{content:\"\\f008\"}.fa-filter:before{content:\"\\f0b0\"}.fa-fingerprint:before{content:\"\\f577\"}.fa-fire:before{content:\"\\f06d\"}.fa-fire-alt:before{content:\"\\f7e4\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-firefox:before{content:\"\\f269\"}.fa-firefox-browser:before{content:\"\\e007\"}.fa-first-aid:before{content:\"\\f479\"}.fa-first-order:before{content:\"\\f2b0\"}.fa-first-order-alt:before{content:\"\\f50a\"}.fa-firstdraft:before{content:\"\\f3a1\"}.fa-fish:before{content:\"\\f578\"}.fa-fist-raised:before{content:\"\\f6de\"}.fa-flag:before{content:\"\\f024\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-flag-usa:before{content:\"\\f74d\"}.fa-flask:before{content:\"\\f0c3\"}.fa-flickr:before{content:\"\\f16e\"}.fa-flipboard:before{content:\"\\f44d\"}.fa-flushed:before{content:\"\\f579\"}.fa-fly:before{content:\"\\f417\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-minus:before{content:\"\\f65d\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-folder-plus:before{content:\"\\f65e\"}.fa-font:before{content:\"\\f031\"}.fa-font-awesome:before{content:\"\\f2b4\"}.fa-font-awesome-alt:before{content:\"\\f35c\"}.fa-font-awesome-flag:before{content:\"\\f425\"}.fa-font-awesome-logo-full:before{content:\"\\f4e6\"}.fa-fonticons:before{content:\"\\f280\"}.fa-fonticons-fi:before{content:\"\\f3a2\"}.fa-football-ball:before{content:\"\\f44e\"}.fa-fort-awesome:before{content:\"\\f286\"}.fa-fort-awesome-alt:before{content:\"\\f3a3\"}.fa-forumbee:before{content:\"\\f211\"}.fa-forward:before{content:\"\\f04e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-free-code-camp:before{content:\"\\f2c5\"}.fa-freebsd:before{content:\"\\f3a4\"}.fa-frog:before{content:\"\\f52e\"}.fa-frown:before{content:\"\\f119\"}.fa-frown-open:before{content:\"\\f57a\"}.fa-fulcrum:before{content:\"\\f50b\"}.fa-funnel-dollar:before{content:\"\\f662\"}.fa-futbol:before{content:\"\\f1e3\"}.fa-galactic-republic:before{content:\"\\f50c\"}.fa-galactic-senate:before{content:\"\\f50d\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-gas-pump:before{content:\"\\f52f\"}.fa-gavel:before{content:\"\\f0e3\"}.fa-gem:before{content:\"\\f3a5\"}.fa-genderless:before{content:\"\\f22d\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-gg:before{content:\"\\f260\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-ghost:before{content:\"\\f6e2\"}.fa-gift:before{content:\"\\f06b\"}.fa-gifts:before{content:\"\\f79c\"}.fa-git:before{content:\"\\f1d3\"}.fa-git-alt:before{content:\"\\f841\"}.fa-git-square:before{content:\"\\f1d2\"}.fa-github:before{content:\"\\f09b\"}.fa-github-alt:before{content:\"\\f113\"}.fa-github-square:before{content:\"\\f092\"}.fa-gitkraken:before{content:\"\\f3a6\"}.fa-gitlab:before{content:\"\\f296\"}.fa-gitter:before{content:\"\\f426\"}.fa-glass-cheers:before{content:\"\\f79f\"}.fa-glass-martini:before{content:\"\\f000\"}.fa-glass-martini-alt:before{content:\"\\f57b\"}.fa-glass-whiskey:before{content:\"\\f7a0\"}.fa-glasses:before{content:\"\\f530\"}.fa-glide:before{content:\"\\f2a5\"}.fa-glide-g:before{content:\"\\f2a6\"}.fa-globe:before{content:\"\\f0ac\"}.fa-globe-africa:before{content:\"\\f57c\"}.fa-globe-americas:before{content:\"\\f57d\"}.fa-globe-asia:before{content:\"\\f57e\"}.fa-globe-europe:before{content:\"\\f7a2\"}.fa-gofore:before{content:\"\\f3a7\"}.fa-golf-ball:before{content:\"\\f450\"}.fa-goodreads:before{content:\"\\f3a8\"}.fa-goodreads-g:before{content:\"\\f3a9\"}.fa-google:before{content:\"\\f1a0\"}.fa-google-drive:before{content:\"\\f3aa\"}.fa-google-pay:before{content:\"\\e079\"}.fa-google-play:before{content:\"\\f3ab\"}.fa-google-plus:before{content:\"\\f2b3\"}.fa-google-plus-g:before{content:\"\\f0d5\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-gopuram:before{content:\"\\f664\"}.fa-graduation-cap:before{content:\"\\f19d\"}.fa-gratipay:before{content:\"\\f184\"}.fa-grav:before{content:\"\\f2d6\"}.fa-greater-than:before{content:\"\\f531\"}.fa-greater-than-equal:before{content:\"\\f532\"}.fa-grimace:before{content:\"\\f57f\"}.fa-grin:before{content:\"\\f580\"}.fa-grin-alt:before{content:\"\\f581\"}.fa-grin-beam:before{content:\"\\f582\"}.fa-grin-beam-sweat:before{content:\"\\f583\"}.fa-grin-hearts:before{content:\"\\f584\"}.fa-grin-squint:before{content:\"\\f585\"}.fa-grin-squint-tears:before{content:\"\\f586\"}.fa-grin-stars:before{content:\"\\f587\"}.fa-grin-tears:before{content:\"\\f588\"}.fa-grin-tongue:before{content:\"\\f589\"}.fa-grin-tongue-squint:before{content:\"\\f58a\"}.fa-grin-tongue-wink:before{content:\"\\f58b\"}.fa-grin-wink:before{content:\"\\f58c\"}.fa-grip-horizontal:before{content:\"\\f58d\"}.fa-grip-lines:before{content:\"\\f7a4\"}.fa-grip-lines-vertical:before{content:\"\\f7a5\"}.fa-grip-vertical:before{content:\"\\f58e\"}.fa-gripfire:before{content:\"\\f3ac\"}.fa-grunt:before{content:\"\\f3ad\"}.fa-guilded:before{content:\"\\e07e\"}.fa-guitar:before{content:\"\\f7a6\"}.fa-gulp:before{content:\"\\f3ae\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-hacker-news:before{content:\"\\f1d4\"}.fa-hacker-news-square:before{content:\"\\f3af\"}.fa-hackerrank:before{content:\"\\f5f7\"}.fa-hamburger:before{content:\"\\f805\"}.fa-hammer:before{content:\"\\f6e3\"}.fa-hamsa:before{content:\"\\f665\"}.fa-hand-holding:before{content:\"\\f4bd\"}.fa-hand-holding-heart:before{content:\"\\f4be\"}.fa-hand-holding-medical:before{content:\"\\e05c\"}.fa-hand-holding-usd:before{content:\"\\f4c0\"}.fa-hand-holding-water:before{content:\"\\f4c1\"}.fa-hand-lizard:before{content:\"\\f258\"}.fa-hand-middle-finger:before{content:\"\\f806\"}.fa-hand-paper:before{content:\"\\f256\"}.fa-hand-peace:before{content:\"\\f25b\"}.fa-hand-point-down:before{content:\"\\f0a7\"}.fa-hand-point-left:before{content:\"\\f0a5\"}.fa-hand-point-right:before{content:\"\\f0a4\"}.fa-hand-point-up:before{content:\"\\f0a6\"}.fa-hand-pointer:before{content:\"\\f25a\"}.fa-hand-rock:before{content:\"\\f255\"}.fa-hand-scissors:before{content:\"\\f257\"}.fa-hand-sparkles:before{content:\"\\e05d\"}.fa-hand-spock:before{content:\"\\f259\"}.fa-hands:before{content:\"\\f4c2\"}.fa-hands-helping:before{content:\"\\f4c4\"}.fa-hands-wash:before{content:\"\\e05e\"}.fa-handshake:before{content:\"\\f2b5\"}.fa-handshake-alt-slash:before{content:\"\\e05f\"}.fa-handshake-slash:before{content:\"\\e060\"}.fa-hanukiah:before{content:\"\\f6e6\"}.fa-hard-hat:before{content:\"\\f807\"}.fa-hashtag:before{content:\"\\f292\"}.fa-hat-cowboy:before{content:\"\\f8c0\"}.fa-hat-cowboy-side:before{content:\"\\f8c1\"}.fa-hat-wizard:before{content:\"\\f6e8\"}.fa-hdd:before{content:\"\\f0a0\"}.fa-head-side-cough:before{content:\"\\e061\"}.fa-head-side-cough-slash:before{content:\"\\e062\"}.fa-head-side-mask:before{content:\"\\e063\"}.fa-head-side-virus:before{content:\"\\e064\"}.fa-heading:before{content:\"\\f1dc\"}.fa-headphones:before{content:\"\\f025\"}.fa-headphones-alt:before{content:\"\\f58f\"}.fa-headset:before{content:\"\\f590\"}.fa-heart:before{content:\"\\f004\"}.fa-heart-broken:before{content:\"\\f7a9\"}.fa-heartbeat:before{content:\"\\f21e\"}.fa-helicopter:before{content:\"\\f533\"}.fa-highlighter:before{content:\"\\f591\"}.fa-hiking:before{content:\"\\f6ec\"}.fa-hippo:before{content:\"\\f6ed\"}.fa-hips:before{content:\"\\f452\"}.fa-hire-a-helper:before{content:\"\\f3b0\"}.fa-history:before{content:\"\\f1da\"}.fa-hive:before{content:\"\\e07f\"}.fa-hockey-puck:before{content:\"\\f453\"}.fa-holly-berry:before{content:\"\\f7aa\"}.fa-home:before{content:\"\\f015\"}.fa-hooli:before{content:\"\\f427\"}.fa-hornbill:before{content:\"\\f592\"}.fa-horse:before{content:\"\\f6f0\"}.fa-horse-head:before{content:\"\\f7ab\"}.fa-hospital:before{content:\"\\f0f8\"}.fa-hospital-alt:before{content:\"\\f47d\"}.fa-hospital-symbol:before{content:\"\\f47e\"}.fa-hospital-user:before{content:\"\\f80d\"}.fa-hot-tub:before{content:\"\\f593\"}.fa-hotdog:before{content:\"\\f80f\"}.fa-hotel:before{content:\"\\f594\"}.fa-hotjar:before{content:\"\\f3b1\"}.fa-hourglass:before{content:\"\\f254\"}.fa-hourglass-end:before{content:\"\\f253\"}.fa-hourglass-half:before{content:\"\\f252\"}.fa-hourglass-start:before{content:\"\\f251\"}.fa-house-damage:before{content:\"\\f6f1\"}.fa-house-user:before{content:\"\\e065\"}.fa-houzz:before{content:\"\\f27c\"}.fa-hryvnia:before{content:\"\\f6f2\"}.fa-html5:before{content:\"\\f13b\"}.fa-hubspot:before{content:\"\\f3b2\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-ice-cream:before{content:\"\\f810\"}.fa-icicles:before{content:\"\\f7ad\"}.fa-icons:before{content:\"\\f86d\"}.fa-id-badge:before{content:\"\\f2c1\"}.fa-id-card:before{content:\"\\f2c2\"}.fa-id-card-alt:before{content:\"\\f47f\"}.fa-ideal:before{content:\"\\e013\"}.fa-igloo:before{content:\"\\f7ae\"}.fa-image:before{content:\"\\f03e\"}.fa-images:before{content:\"\\f302\"}.fa-imdb:before{content:\"\\f2d8\"}.fa-inbox:before{content:\"\\f01c\"}.fa-indent:before{content:\"\\f03c\"}.fa-industry:before{content:\"\\f275\"}.fa-infinity:before{content:\"\\f534\"}.fa-info:before{content:\"\\f129\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-innosoft:before{content:\"\\e080\"}.fa-instagram:before{content:\"\\f16d\"}.fa-instagram-square:before{content:\"\\e055\"}.fa-instalod:before{content:\"\\e081\"}.fa-intercom:before{content:\"\\f7af\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-invision:before{content:\"\\f7b0\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-italic:before{content:\"\\f033\"}.fa-itch-io:before{content:\"\\f83a\"}.fa-itunes:before{content:\"\\f3b4\"}.fa-itunes-note:before{content:\"\\f3b5\"}.fa-java:before{content:\"\\f4e4\"}.fa-jedi:before{content:\"\\f669\"}.fa-jedi-order:before{content:\"\\f50e\"}.fa-jenkins:before{content:\"\\f3b6\"}.fa-jira:before{content:\"\\f7b1\"}.fa-joget:before{content:\"\\f3b7\"}.fa-joint:before{content:\"\\f595\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-journal-whills:before{content:\"\\f66a\"}.fa-js:before{content:\"\\f3b8\"}.fa-js-square:before{content:\"\\f3b9\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-kaaba:before{content:\"\\f66b\"}.fa-kaggle:before{content:\"\\f5fa\"}.fa-key:before{content:\"\\f084\"}.fa-keybase:before{content:\"\\f4f5\"}.fa-keyboard:before{content:\"\\f11c\"}.fa-keycdn:before{content:\"\\f3ba\"}.fa-khanda:before{content:\"\\f66d\"}.fa-kickstarter:before{content:\"\\f3bb\"}.fa-kickstarter-k:before{content:\"\\f3bc\"}.fa-kiss:before{content:\"\\f596\"}.fa-kiss-beam:before{content:\"\\f597\"}.fa-kiss-wink-heart:before{content:\"\\f598\"}.fa-kiwi-bird:before{content:\"\\f535\"}.fa-korvue:before{content:\"\\f42f\"}.fa-landmark:before{content:\"\\f66f\"}.fa-language:before{content:\"\\f1ab\"}.fa-laptop:before{content:\"\\f109\"}.fa-laptop-code:before{content:\"\\f5fc\"}.fa-laptop-house:before{content:\"\\e066\"}.fa-laptop-medical:before{content:\"\\f812\"}.fa-laravel:before{content:\"\\f3bd\"}.fa-lastfm:before{content:\"\\f202\"}.fa-lastfm-square:before{content:\"\\f203\"}.fa-laugh:before{content:\"\\f599\"}.fa-laugh-beam:before{content:\"\\f59a\"}.fa-laugh-squint:before{content:\"\\f59b\"}.fa-laugh-wink:before{content:\"\\f59c\"}.fa-layer-group:before{content:\"\\f5fd\"}.fa-leaf:before{content:\"\\f06c\"}.fa-leanpub:before{content:\"\\f212\"}.fa-lemon:before{content:\"\\f094\"}.fa-less:before{content:\"\\f41d\"}.fa-less-than:before{content:\"\\f536\"}.fa-less-than-equal:before{content:\"\\f537\"}.fa-level-down-alt:before{content:\"\\f3be\"}.fa-level-up-alt:before{content:\"\\f3bf\"}.fa-life-ring:before{content:\"\\f1cd\"}.fa-lightbulb:before{content:\"\\f0eb\"}.fa-line:before{content:\"\\f3c0\"}.fa-link:before{content:\"\\f0c1\"}.fa-linkedin:before{content:\"\\f08c\"}.fa-linkedin-in:before{content:\"\\f0e1\"}.fa-linode:before{content:\"\\f2b8\"}.fa-linux:before{content:\"\\f17c\"}.fa-lira-sign:before{content:\"\\f195\"}.fa-list:before{content:\"\\f03a\"}.fa-list-alt:before{content:\"\\f022\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-lock:before{content:\"\\f023\"}.fa-lock-open:before{content:\"\\f3c1\"}.fa-long-arrow-alt-down:before{content:\"\\f309\"}.fa-long-arrow-alt-left:before{content:\"\\f30a\"}.fa-long-arrow-alt-right:before{content:\"\\f30b\"}.fa-long-arrow-alt-up:before{content:\"\\f30c\"}.fa-low-vision:before{content:\"\\f2a8\"}.fa-luggage-cart:before{content:\"\\f59d\"}.fa-lungs:before{content:\"\\f604\"}.fa-lungs-virus:before{content:\"\\e067\"}.fa-lyft:before{content:\"\\f3c3\"}.fa-magento:before{content:\"\\f3c4\"}.fa-magic:before{content:\"\\f0d0\"}.fa-magnet:before{content:\"\\f076\"}.fa-mail-bulk:before{content:\"\\f674\"}.fa-mailchimp:before{content:\"\\f59e\"}.fa-male:before{content:\"\\f183\"}.fa-mandalorian:before{content:\"\\f50f\"}.fa-map:before{content:\"\\f279\"}.fa-map-marked:before{content:\"\\f59f\"}.fa-map-marked-alt:before{content:\"\\f5a0\"}.fa-map-marker:before{content:\"\\f041\"}.fa-map-marker-alt:before{content:\"\\f3c5\"}.fa-map-pin:before{content:\"\\f276\"}.fa-map-signs:before{content:\"\\f277\"}.fa-markdown:before{content:\"\\f60f\"}.fa-marker:before{content:\"\\f5a1\"}.fa-mars:before{content:\"\\f222\"}.fa-mars-double:before{content:\"\\f227\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-mars-stroke-h:before{content:\"\\f22b\"}.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-mask:before{content:\"\\f6fa\"}.fa-mastodon:before{content:\"\\f4f6\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-mdb:before{content:\"\\f8ca\"}.fa-medal:before{content:\"\\f5a2\"}.fa-medapps:before{content:\"\\f3c6\"}.fa-medium:before{content:\"\\f23a\"}.fa-medium-m:before{content:\"\\f3c7\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-medrt:before{content:\"\\f3c8\"}.fa-meetup:before{content:\"\\f2e0\"}.fa-megaport:before{content:\"\\f5a3\"}.fa-meh:before{content:\"\\f11a\"}.fa-meh-blank:before{content:\"\\f5a4\"}.fa-meh-rolling-eyes:before{content:\"\\f5a5\"}.fa-memory:before{content:\"\\f538\"}.fa-mendeley:before{content:\"\\f7b3\"}.fa-menorah:before{content:\"\\f676\"}.fa-mercury:before{content:\"\\f223\"}.fa-meteor:before{content:\"\\f753\"}.fa-microblog:before{content:\"\\e01a\"}.fa-microchip:before{content:\"\\f2db\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-alt:before{content:\"\\f3c9\"}.fa-microphone-alt-slash:before{content:\"\\f539\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-microscope:before{content:\"\\f610\"}.fa-microsoft:before{content:\"\\f3ca\"}.fa-minus:before{content:\"\\f068\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-minus-square:before{content:\"\\f146\"}.fa-mitten:before{content:\"\\f7b5\"}.fa-mix:before{content:\"\\f3cb\"}.fa-mixcloud:before{content:\"\\f289\"}.fa-mixer:before{content:\"\\e056\"}.fa-mizuni:before{content:\"\\f3cc\"}.fa-mobile:before{content:\"\\f10b\"}.fa-mobile-alt:before{content:\"\\f3cd\"}.fa-modx:before{content:\"\\f285\"}.fa-monero:before{content:\"\\f3d0\"}.fa-money-bill:before{content:\"\\f0d6\"}.fa-money-bill-alt:before{content:\"\\f3d1\"}.fa-money-bill-wave:before{content:\"\\f53a\"}.fa-money-bill-wave-alt:before{content:\"\\f53b\"}.fa-money-check:before{content:\"\\f53c\"}.fa-money-check-alt:before{content:\"\\f53d\"}.fa-monument:before{content:\"\\f5a6\"}.fa-moon:before{content:\"\\f186\"}.fa-mortar-pestle:before{content:\"\\f5a7\"}.fa-mosque:before{content:\"\\f678\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-mountain:before{content:\"\\f6fc\"}.fa-mouse:before{content:\"\\f8cc\"}.fa-mouse-pointer:before{content:\"\\f245\"}.fa-mug-hot:before{content:\"\\f7b6\"}.fa-music:before{content:\"\\f001\"}.fa-napster:before{content:\"\\f3d2\"}.fa-neos:before{content:\"\\f612\"}.fa-network-wired:before{content:\"\\f6ff\"}.fa-neuter:before{content:\"\\f22c\"}.fa-newspaper:before{content:\"\\f1ea\"}.fa-nimblr:before{content:\"\\f5a8\"}.fa-node:before{content:\"\\f419\"}.fa-node-js:before{content:\"\\f3d3\"}.fa-not-equal:before{content:\"\\f53e\"}.fa-notes-medical:before{content:\"\\f481\"}.fa-npm:before{content:\"\\f3d4\"}.fa-ns8:before{content:\"\\f3d5\"}.fa-nutritionix:before{content:\"\\f3d6\"}.fa-object-group:before{content:\"\\f247\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-octopus-deploy:before{content:\"\\e082\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-odnoklassniki-square:before{content:\"\\f264\"}.fa-oil-can:before{content:\"\\f613\"}.fa-old-republic:before{content:\"\\f510\"}.fa-om:before{content:\"\\f679\"}.fa-opencart:before{content:\"\\f23d\"}.fa-openid:before{content:\"\\f19b\"}.fa-opera:before{content:\"\\f26a\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-orcid:before{content:\"\\f8d2\"}.fa-osi:before{content:\"\\f41a\"}.fa-otter:before{content:\"\\f700\"}.fa-outdent:before{content:\"\\f03b\"}.fa-page4:before{content:\"\\f3d7\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-pager:before{content:\"\\f815\"}.fa-paint-brush:before{content:\"\\f1fc\"}.fa-paint-roller:before{content:\"\\f5aa\"}.fa-palette:before{content:\"\\f53f\"}.fa-palfed:before{content:\"\\f3d8\"}.fa-pallet:before{content:\"\\f482\"}.fa-paper-plane:before{content:\"\\f1d8\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-parachute-box:before{content:\"\\f4cd\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-parking:before{content:\"\\f540\"}.fa-passport:before{content:\"\\f5ab\"}.fa-pastafarianism:before{content:\"\\f67b\"}.fa-paste:before{content:\"\\f0ea\"}.fa-patreon:before{content:\"\\f3d9\"}.fa-pause:before{content:\"\\f04c\"}.fa-pause-circle:before{content:\"\\f28b\"}.fa-paw:before{content:\"\\f1b0\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-peace:before{content:\"\\f67c\"}.fa-pen:before{content:\"\\f304\"}.fa-pen-alt:before{content:\"\\f305\"}.fa-pen-fancy:before{content:\"\\f5ac\"}.fa-pen-nib:before{content:\"\\f5ad\"}.fa-pen-square:before{content:\"\\f14b\"}.fa-pencil-alt:before{content:\"\\f303\"}.fa-pencil-ruler:before{content:\"\\f5ae\"}.fa-penny-arcade:before{content:\"\\f704\"}.fa-people-arrows:before{content:\"\\e068\"}.fa-people-carry:before{content:\"\\f4ce\"}.fa-pepper-hot:before{content:\"\\f816\"}.fa-perbyte:before{content:\"\\e083\"}.fa-percent:before{content:\"\\f295\"}.fa-percentage:before{content:\"\\f541\"}.fa-periscope:before{content:\"\\f3da\"}.fa-person-booth:before{content:\"\\f756\"}.fa-phabricator:before{content:\"\\f3db\"}.fa-phoenix-framework:before{content:\"\\f3dc\"}.fa-phoenix-squadron:before{content:\"\\f511\"}.fa-phone:before{content:\"\\f095\"}.fa-phone-alt:before{content:\"\\f879\"}.fa-phone-slash:before{content:\"\\f3dd\"}.fa-phone-square:before{content:\"\\f098\"}.fa-phone-square-alt:before{content:\"\\f87b\"}.fa-phone-volume:before{content:\"\\f2a0\"}.fa-photo-video:before{content:\"\\f87c\"}.fa-php:before{content:\"\\f457\"}.fa-pied-piper:before{content:\"\\f2ae\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-pied-piper-hat:before{content:\"\\f4e5\"}.fa-pied-piper-pp:before{content:\"\\f1a7\"}.fa-pied-piper-square:before{content:\"\\e01e\"}.fa-piggy-bank:before{content:\"\\f4d3\"}.fa-pills:before{content:\"\\f484\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-pizza-slice:before{content:\"\\f818\"}.fa-place-of-worship:before{content:\"\\f67f\"}.fa-plane:before{content:\"\\f072\"}.fa-plane-arrival:before{content:\"\\f5af\"}.fa-plane-departure:before{content:\"\\f5b0\"}.fa-plane-slash:before{content:\"\\e069\"}.fa-play:before{content:\"\\f04b\"}.fa-play-circle:before{content:\"\\f144\"}.fa-playstation:before{content:\"\\f3df\"}.fa-plug:before{content:\"\\f1e6\"}.fa-plus:before{content:\"\\f067\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-podcast:before{content:\"\\f2ce\"}.fa-poll:before{content:\"\\f681\"}.fa-poll-h:before{content:\"\\f682\"}.fa-poo:before{content:\"\\f2fe\"}.fa-poo-storm:before{content:\"\\f75a\"}.fa-poop:before{content:\"\\f619\"}.fa-portrait:before{content:\"\\f3e0\"}.fa-pound-sign:before{content:\"\\f154\"}.fa-power-off:before{content:\"\\f011\"}.fa-pray:before{content:\"\\f683\"}.fa-praying-hands:before{content:\"\\f684\"}.fa-prescription:before{content:\"\\f5b1\"}.fa-prescription-bottle:before{content:\"\\f485\"}.fa-prescription-bottle-alt:before{content:\"\\f486\"}.fa-print:before{content:\"\\f02f\"}.fa-procedures:before{content:\"\\f487\"}.fa-product-hunt:before{content:\"\\f288\"}.fa-project-diagram:before{content:\"\\f542\"}.fa-pump-medical:before{content:\"\\e06a\"}.fa-pump-soap:before{content:\"\\e06b\"}.fa-pushed:before{content:\"\\f3e1\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-python:before{content:\"\\f3e2\"}.fa-qq:before{content:\"\\f1d6\"}.fa-qrcode:before{content:\"\\f029\"}.fa-question:before{content:\"\\f128\"}.fa-question-circle:before{content:\"\\f059\"}.fa-quidditch:before{content:\"\\f458\"}.fa-quinscape:before{content:\"\\f459\"}.fa-quora:before{content:\"\\f2c4\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-quran:before{content:\"\\f687\"}.fa-r-project:before{content:\"\\f4f7\"}.fa-radiation:before{content:\"\\f7b9\"}.fa-radiation-alt:before{content:\"\\f7ba\"}.fa-rainbow:before{content:\"\\f75b\"}.fa-random:before{content:\"\\f074\"}.fa-raspberry-pi:before{content:\"\\f7bb\"}.fa-ravelry:before{content:\"\\f2d9\"}.fa-react:before{content:\"\\f41b\"}.fa-reacteurope:before{content:\"\\f75d\"}.fa-readme:before{content:\"\\f4d5\"}.fa-rebel:before{content:\"\\f1d0\"}.fa-receipt:before{content:\"\\f543\"}.fa-record-vinyl:before{content:\"\\f8d9\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-red-river:before{content:\"\\f3e3\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-reddit-alien:before{content:\"\\f281\"}.fa-reddit-square:before{content:\"\\f1a2\"}.fa-redhat:before{content:\"\\f7bc\"}.fa-redo:before{content:\"\\f01e\"}.fa-redo-alt:before{content:\"\\f2f9\"}.fa-registered:before{content:\"\\f25d\"}.fa-remove-format:before{content:\"\\f87d\"}.fa-renren:before{content:\"\\f18b\"}.fa-reply:before{content:\"\\f3e5\"}.fa-reply-all:before{content:\"\\f122\"}.fa-replyd:before{content:\"\\f3e6\"}.fa-republican:before{content:\"\\f75e\"}.fa-researchgate:before{content:\"\\f4f8\"}.fa-resolving:before{content:\"\\f3e7\"}.fa-restroom:before{content:\"\\f7bd\"}.fa-retweet:before{content:\"\\f079\"}.fa-rev:before{content:\"\\f5b2\"}.fa-ribbon:before{content:\"\\f4d6\"}.fa-ring:before{content:\"\\f70b\"}.fa-road:before{content:\"\\f018\"}.fa-robot:before{content:\"\\f544\"}.fa-rocket:before{content:\"\\f135\"}.fa-rocketchat:before{content:\"\\f3e8\"}.fa-rockrms:before{content:\"\\f3e9\"}.fa-route:before{content:\"\\f4d7\"}.fa-rss:before{content:\"\\f09e\"}.fa-rss-square:before{content:\"\\f143\"}.fa-ruble-sign:before{content:\"\\f158\"}.fa-ruler:before{content:\"\\f545\"}.fa-ruler-combined:before{content:\"\\f546\"}.fa-ruler-horizontal:before{content:\"\\f547\"}.fa-ruler-vertical:before{content:\"\\f548\"}.fa-running:before{content:\"\\f70c\"}.fa-rupee-sign:before{content:\"\\f156\"}.fa-rust:before{content:\"\\e07a\"}.fa-sad-cry:before{content:\"\\f5b3\"}.fa-sad-tear:before{content:\"\\f5b4\"}.fa-safari:before{content:\"\\f267\"}.fa-salesforce:before{content:\"\\f83b\"}.fa-sass:before{content:\"\\f41e\"}.fa-satellite:before{content:\"\\f7bf\"}.fa-satellite-dish:before{content:\"\\f7c0\"}.fa-save:before{content:\"\\f0c7\"}.fa-schlix:before{content:\"\\f3ea\"}.fa-school:before{content:\"\\f549\"}.fa-screwdriver:before{content:\"\\f54a\"}.fa-scribd:before{content:\"\\f28a\"}.fa-scroll:before{content:\"\\f70e\"}.fa-sd-card:before{content:\"\\f7c2\"}.fa-search:before{content:\"\\f002\"}.fa-search-dollar:before{content:\"\\f688\"}.fa-search-location:before{content:\"\\f689\"}.fa-search-minus:before{content:\"\\f010\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-searchengin:before{content:\"\\f3eb\"}.fa-seedling:before{content:\"\\f4d8\"}.fa-sellcast:before{content:\"\\f2da\"}.fa-sellsy:before{content:\"\\f213\"}.fa-server:before{content:\"\\f233\"}.fa-servicestack:before{content:\"\\f3ec\"}.fa-shapes:before{content:\"\\f61f\"}.fa-share:before{content:\"\\f064\"}.fa-share-alt:before{content:\"\\f1e0\"}.fa-share-alt-square:before{content:\"\\f1e1\"}.fa-share-square:before{content:\"\\f14d\"}.fa-shekel-sign:before{content:\"\\f20b\"}.fa-shield-alt:before{content:\"\\f3ed\"}.fa-shield-virus:before{content:\"\\e06c\"}.fa-ship:before{content:\"\\f21a\"}.fa-shipping-fast:before{content:\"\\f48b\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-shoe-prints:before{content:\"\\f54b\"}.fa-shopify:before{content:\"\\e057\"}.fa-shopping-bag:before{content:\"\\f290\"}.fa-shopping-basket:before{content:\"\\f291\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-shopware:before{content:\"\\f5b5\"}.fa-shower:before{content:\"\\f2cc\"}.fa-shuttle-van:before{content:\"\\f5b6\"}.fa-sign:before{content:\"\\f4d9\"}.fa-sign-in-alt:before{content:\"\\f2f6\"}.fa-sign-language:before{content:\"\\f2a7\"}.fa-sign-out-alt:before{content:\"\\f2f5\"}.fa-signal:before{content:\"\\f012\"}.fa-signature:before{content:\"\\f5b7\"}.fa-sim-card:before{content:\"\\f7c4\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-sink:before{content:\"\\e06d\"}.fa-sistrix:before{content:\"\\f3ee\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-sith:before{content:\"\\f512\"}.fa-skating:before{content:\"\\f7c5\"}.fa-sketch:before{content:\"\\f7c6\"}.fa-skiing:before{content:\"\\f7c9\"}.fa-skiing-nordic:before{content:\"\\f7ca\"}.fa-skull:before{content:\"\\f54c\"}.fa-skull-crossbones:before{content:\"\\f714\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-skype:before{content:\"\\f17e\"}.fa-slack:before{content:\"\\f198\"}.fa-slack-hash:before{content:\"\\f3ef\"}.fa-slash:before{content:\"\\f715\"}.fa-sleigh:before{content:\"\\f7cc\"}.fa-sliders-h:before{content:\"\\f1de\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-smile:before{content:\"\\f118\"}.fa-smile-beam:before{content:\"\\f5b8\"}.fa-smile-wink:before{content:\"\\f4da\"}.fa-smog:before{content:\"\\f75f\"}.fa-smoking:before{content:\"\\f48d\"}.fa-smoking-ban:before{content:\"\\f54d\"}.fa-sms:before{content:\"\\f7cd\"}.fa-snapchat:before{content:\"\\f2ab\"}.fa-snapchat-ghost:before{content:\"\\f2ac\"}.fa-snapchat-square:before{content:\"\\f2ad\"}.fa-snowboarding:before{content:\"\\f7ce\"}.fa-snowflake:before{content:\"\\f2dc\"}.fa-snowman:before{content:\"\\f7d0\"}.fa-snowplow:before{content:\"\\f7d2\"}.fa-soap:before{content:\"\\e06e\"}.fa-socks:before{content:\"\\f696\"}.fa-solar-panel:before{content:\"\\f5ba\"}.fa-sort:before{content:\"\\f0dc\"}.fa-sort-alpha-down:before{content:\"\\f15d\"}.fa-sort-alpha-down-alt:before{content:\"\\f881\"}.fa-sort-alpha-up:before{content:\"\\f15e\"}.fa-sort-alpha-up-alt:before{content:\"\\f882\"}.fa-sort-amount-down:before{content:\"\\f160\"}.fa-sort-amount-down-alt:before{content:\"\\f884\"}.fa-sort-amount-up:before{content:\"\\f161\"}.fa-sort-amount-up-alt:before{content:\"\\f885\"}.fa-sort-down:before{content:\"\\f0dd\"}.fa-sort-numeric-down:before{content:\"\\f162\"}.fa-sort-numeric-down-alt:before{content:\"\\f886\"}.fa-sort-numeric-up:before{content:\"\\f163\"}.fa-sort-numeric-up-alt:before{content:\"\\f887\"}.fa-sort-up:before{content:\"\\f0de\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-sourcetree:before{content:\"\\f7d3\"}.fa-spa:before{content:\"\\f5bb\"}.fa-space-shuttle:before{content:\"\\f197\"}.fa-speakap:before{content:\"\\f3f3\"}.fa-speaker-deck:before{content:\"\\f83c\"}.fa-spell-check:before{content:\"\\f891\"}.fa-spider:before{content:\"\\f717\"}.fa-spinner:before{content:\"\\f110\"}.fa-splotch:before{content:\"\\f5bc\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-spray-can:before{content:\"\\f5bd\"}.fa-square:before{content:\"\\f0c8\"}.fa-square-full:before{content:\"\\f45c\"}.fa-square-root-alt:before{content:\"\\f698\"}.fa-squarespace:before{content:\"\\f5be\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-stackpath:before{content:\"\\f842\"}.fa-stamp:before{content:\"\\f5bf\"}.fa-star:before{content:\"\\f005\"}.fa-star-and-crescent:before{content:\"\\f699\"}.fa-star-half:before{content:\"\\f089\"}.fa-star-half-alt:before{content:\"\\f5c0\"}.fa-star-of-david:before{content:\"\\f69a\"}.fa-star-of-life:before{content:\"\\f621\"}.fa-staylinked:before{content:\"\\f3f5\"}.fa-steam:before{content:\"\\f1b6\"}.fa-steam-square:before{content:\"\\f1b7\"}.fa-steam-symbol:before{content:\"\\f3f6\"}.fa-step-backward:before{content:\"\\f048\"}.fa-step-forward:before{content:\"\\f051\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-sticker-mule:before{content:\"\\f3f7\"}.fa-sticky-note:before{content:\"\\f249\"}.fa-stop:before{content:\"\\f04d\"}.fa-stop-circle:before{content:\"\\f28d\"}.fa-stopwatch:before{content:\"\\f2f2\"}.fa-stopwatch-20:before{content:\"\\e06f\"}.fa-store:before{content:\"\\f54e\"}.fa-store-alt:before{content:\"\\f54f\"}.fa-store-alt-slash:before{content:\"\\e070\"}.fa-store-slash:before{content:\"\\e071\"}.fa-strava:before{content:\"\\f428\"}.fa-stream:before{content:\"\\f550\"}.fa-street-view:before{content:\"\\f21d\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-stripe:before{content:\"\\f429\"}.fa-stripe-s:before{content:\"\\f42a\"}.fa-stroopwafel:before{content:\"\\f551\"}.fa-studiovinari:before{content:\"\\f3f8\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-subscript:before{content:\"\\f12c\"}.fa-subway:before{content:\"\\f239\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-suitcase-rolling:before{content:\"\\f5c1\"}.fa-sun:before{content:\"\\f185\"}.fa-superpowers:before{content:\"\\f2dd\"}.fa-superscript:before{content:\"\\f12b\"}.fa-supple:before{content:\"\\f3f9\"}.fa-surprise:before{content:\"\\f5c2\"}.fa-suse:before{content:\"\\f7d6\"}.fa-swatchbook:before{content:\"\\f5c3\"}.fa-swift:before{content:\"\\f8e1\"}.fa-swimmer:before{content:\"\\f5c4\"}.fa-swimming-pool:before{content:\"\\f5c5\"}.fa-symfony:before{content:\"\\f83d\"}.fa-synagogue:before{content:\"\\f69b\"}.fa-sync:before{content:\"\\f021\"}.fa-sync-alt:before{content:\"\\f2f1\"}.fa-syringe:before{content:\"\\f48e\"}.fa-table:before{content:\"\\f0ce\"}.fa-table-tennis:before{content:\"\\f45d\"}.fa-tablet:before{content:\"\\f10a\"}.fa-tablet-alt:before{content:\"\\f3fa\"}.fa-tablets:before{content:\"\\f490\"}.fa-tachometer-alt:before{content:\"\\f3fd\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-tape:before{content:\"\\f4db\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-taxi:before{content:\"\\f1ba\"}.fa-teamspeak:before{content:\"\\f4f9\"}.fa-teeth:before{content:\"\\f62e\"}.fa-teeth-open:before{content:\"\\f62f\"}.fa-telegram:before{content:\"\\f2c6\"}.fa-telegram-plane:before{content:\"\\f3fe\"}.fa-temperature-high:before{content:\"\\f769\"}.fa-temperature-low:before{content:\"\\f76b\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-tenge:before{content:\"\\f7d7\"}.fa-terminal:before{content:\"\\f120\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-th:before{content:\"\\f00a\"}.fa-th-large:before{content:\"\\f009\"}.fa-th-list:before{content:\"\\f00b\"}.fa-the-red-yeti:before{content:\"\\f69d\"}.fa-theater-masks:before{content:\"\\f630\"}.fa-themeco:before{content:\"\\f5c6\"}.fa-themeisle:before{content:\"\\f2b2\"}.fa-thermometer:before{content:\"\\f491\"}.fa-thermometer-empty:before{content:\"\\f2cb\"}.fa-thermometer-full:before{content:\"\\f2c7\"}.fa-thermometer-half:before{content:\"\\f2c9\"}.fa-thermometer-quarter:before{content:\"\\f2ca\"}.fa-thermometer-three-quarters:before{content:\"\\f2c8\"}.fa-think-peaks:before{content:\"\\f731\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbtack:before{content:\"\\f08d\"}.fa-ticket-alt:before{content:\"\\f3ff\"}.fa-tiktok:before{content:\"\\e07b\"}.fa-times:before{content:\"\\f00d\"}.fa-times-circle:before{content:\"\\f057\"}.fa-tint:before{content:\"\\f043\"}.fa-tint-slash:before{content:\"\\f5c7\"}.fa-tired:before{content:\"\\f5c8\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-toilet:before{content:\"\\f7d8\"}.fa-toilet-paper:before{content:\"\\f71e\"}.fa-toilet-paper-slash:before{content:\"\\e072\"}.fa-toolbox:before{content:\"\\f552\"}.fa-tools:before{content:\"\\f7d9\"}.fa-tooth:before{content:\"\\f5c9\"}.fa-torah:before{content:\"\\f6a0\"}.fa-torii-gate:before{content:\"\\f6a1\"}.fa-tractor:before{content:\"\\f722\"}.fa-trade-federation:before{content:\"\\f513\"}.fa-trademark:before{content:\"\\f25c\"}.fa-traffic-light:before{content:\"\\f637\"}.fa-trailer:before{content:\"\\e041\"}.fa-train:before{content:\"\\f238\"}.fa-tram:before{content:\"\\f7da\"}.fa-transgender:before{content:\"\\f224\"}.fa-transgender-alt:before{content:\"\\f225\"}.fa-trash:before{content:\"\\f1f8\"}.fa-trash-alt:before{content:\"\\f2ed\"}.fa-trash-restore:before{content:\"\\f829\"}.fa-trash-restore-alt:before{content:\"\\f82a\"}.fa-tree:before{content:\"\\f1bb\"}.fa-trello:before{content:\"\\f181\"}.fa-tripadvisor:before{content:\"\\f262\"}.fa-trophy:before{content:\"\\f091\"}.fa-truck:before{content:\"\\f0d1\"}.fa-truck-loading:before{content:\"\\f4de\"}.fa-truck-monster:before{content:\"\\f63b\"}.fa-truck-moving:before{content:\"\\f4df\"}.fa-truck-pickup:before{content:\"\\f63c\"}.fa-tshirt:before{content:\"\\f553\"}.fa-tty:before{content:\"\\f1e4\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-tv:before{content:\"\\f26c\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-twitter:before{content:\"\\f099\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-typo3:before{content:\"\\f42b\"}.fa-uber:before{content:\"\\f402\"}.fa-ubuntu:before{content:\"\\f7df\"}.fa-uikit:before{content:\"\\f403\"}.fa-umbraco:before{content:\"\\f8e8\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-umbrella-beach:before{content:\"\\f5ca\"}.fa-uncharted:before{content:\"\\e084\"}.fa-underline:before{content:\"\\f0cd\"}.fa-undo:before{content:\"\\f0e2\"}.fa-undo-alt:before{content:\"\\f2ea\"}.fa-uniregistry:before{content:\"\\f404\"}.fa-unity:before{content:\"\\e049\"}.fa-universal-access:before{content:\"\\f29a\"}.fa-university:before{content:\"\\f19c\"}.fa-unlink:before{content:\"\\f127\"}.fa-unlock:before{content:\"\\f09c\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-unsplash:before{content:\"\\e07c\"}.fa-untappd:before{content:\"\\f405\"}.fa-upload:before{content:\"\\f093\"}.fa-ups:before{content:\"\\f7e0\"}.fa-usb:before{content:\"\\f287\"}.fa-user:before{content:\"\\f007\"}.fa-user-alt:before{content:\"\\f406\"}.fa-user-alt-slash:before{content:\"\\f4fa\"}.fa-user-astronaut:before{content:\"\\f4fb\"}.fa-user-check:before{content:\"\\f4fc\"}.fa-user-circle:before{content:\"\\f2bd\"}.fa-user-clock:before{content:\"\\f4fd\"}.fa-user-cog:before{content:\"\\f4fe\"}.fa-user-edit:before{content:\"\\f4ff\"}.fa-user-friends:before{content:\"\\f500\"}.fa-user-graduate:before{content:\"\\f501\"}.fa-user-injured:before{content:\"\\f728\"}.fa-user-lock:before{content:\"\\f502\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-user-minus:before{content:\"\\f503\"}.fa-user-ninja:before{content:\"\\f504\"}.fa-user-nurse:before{content:\"\\f82f\"}.fa-user-plus:before{content:\"\\f234\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-user-shield:before{content:\"\\f505\"}.fa-user-slash:before{content:\"\\f506\"}.fa-user-tag:before{content:\"\\f507\"}.fa-user-tie:before{content:\"\\f508\"}.fa-user-times:before{content:\"\\f235\"}.fa-users:before{content:\"\\f0c0\"}.fa-users-cog:before{content:\"\\f509\"}.fa-users-slash:before{content:\"\\e073\"}.fa-usps:before{content:\"\\f7e1\"}.fa-ussunnah:before{content:\"\\f407\"}.fa-utensil-spoon:before{content:\"\\f2e5\"}.fa-utensils:before{content:\"\\f2e7\"}.fa-vaadin:before{content:\"\\f408\"}.fa-vector-square:before{content:\"\\f5cb\"}.fa-venus:before{content:\"\\f221\"}.fa-venus-double:before{content:\"\\f226\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-vest:before{content:\"\\e085\"}.fa-vest-patches:before{content:\"\\e086\"}.fa-viacoin:before{content:\"\\f237\"}.fa-viadeo:before{content:\"\\f2a9\"}.fa-viadeo-square:before{content:\"\\f2aa\"}.fa-vial:before{content:\"\\f492\"}.fa-vials:before{content:\"\\f493\"}.fa-viber:before{content:\"\\f409\"}.fa-video:before{content:\"\\f03d\"}.fa-video-slash:before{content:\"\\f4e2\"}.fa-vihara:before{content:\"\\f6a7\"}.fa-vimeo:before{content:\"\\f40a\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-vimeo-v:before{content:\"\\f27d\"}.fa-vine:before{content:\"\\f1ca\"}.fa-virus:before{content:\"\\e074\"}.fa-virus-slash:before{content:\"\\e075\"}.fa-viruses:before{content:\"\\e076\"}.fa-vk:before{content:\"\\f189\"}.fa-vnv:before{content:\"\\f40b\"}.fa-voicemail:before{content:\"\\f897\"}.fa-volleyball-ball:before{content:\"\\f45f\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-mute:before{content:\"\\f6a9\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-up:before{content:\"\\f028\"}.fa-vote-yea:before{content:\"\\f772\"}.fa-vr-cardboard:before{content:\"\\f729\"}.fa-vuejs:before{content:\"\\f41f\"}.fa-walking:before{content:\"\\f554\"}.fa-wallet:before{content:\"\\f555\"}.fa-warehouse:before{content:\"\\f494\"}.fa-watchman-monitoring:before{content:\"\\e087\"}.fa-water:before{content:\"\\f773\"}.fa-wave-square:before{content:\"\\f83e\"}.fa-waze:before{content:\"\\f83f\"}.fa-weebly:before{content:\"\\f5cc\"}.fa-weibo:before{content:\"\\f18a\"}.fa-weight:before{content:\"\\f496\"}.fa-weight-hanging:before{content:\"\\f5cd\"}.fa-weixin:before{content:\"\\f1d7\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-whatsapp-square:before{content:\"\\f40c\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-whmcs:before{content:\"\\f40d\"}.fa-wifi:before{content:\"\\f1eb\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-wind:before{content:\"\\f72e\"}.fa-window-close:before{content:\"\\f410\"}.fa-window-maximize:before{content:\"\\f2d0\"}.fa-window-minimize:before{content:\"\\f2d1\"}.fa-window-restore:before{content:\"\\f2d2\"}.fa-windows:before{content:\"\\f17a\"}.fa-wine-bottle:before{content:\"\\f72f\"}.fa-wine-glass:before{content:\"\\f4e3\"}.fa-wine-glass-alt:before{content:\"\\f5ce\"}.fa-wix:before{content:\"\\f5cf\"}.fa-wizards-of-the-coast:before{content:\"\\f730\"}.fa-wodu:before{content:\"\\e088\"}.fa-wolf-pack-battalion:before{content:\"\\f514\"}.fa-won-sign:before{content:\"\\f159\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-wordpress-simple:before{content:\"\\f411\"}.fa-wpbeginner:before{content:\"\\f297\"}.fa-wpexplorer:before{content:\"\\f2de\"}.fa-wpforms:before{content:\"\\f298\"}.fa-wpressr:before{content:\"\\f3e4\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-x-ray:before{content:\"\\f497\"}.fa-xbox:before{content:\"\\f412\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-y-combinator:before{content:\"\\f23b\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-yammer:before{content:\"\\f840\"}.fa-yandex:before{content:\"\\f413\"}.fa-yandex-international:before{content:\"\\f414\"}.fa-yarn:before{content:\"\\f7e3\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-yen-sign:before{content:\"\\f157\"}.fa-yin-yang:before{content:\"\\f6ad\"}.fa-yoast:before{content:\"\\f2b1\"}.fa-youtube:before{content:\"\\f167\"}.fa-youtube-square:before{content:\"\\f431\"}.fa-zhihu:before{content:\"\\f63f\"}.sr-only{clip:rect(0,0,0,0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}@font-face{font-display:block;font-family:\"Font Awesome 5 Brands\";font-style:normal;font-weight:400;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"svg\")}.fab{font-family:\"Font Awesome 5 Brands\"}@font-face{font-display:block;font-family:\"Font Awesome 5 Free\";font-style:normal;font-weight:400;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format(\"svg\")}.fab,.far{font-weight:400}@font-face{font-display:block;font-family:\"Font Awesome 5 Free\";font-style:normal;font-weight:900;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ") format(\"svg\")}.fa,.far,.fas{font-family:\"Font Awesome 5 Free\"}.fa,.fas{font-weight:900}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-brands-400.0fea249.eot";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-brands-400.c967a94.woff2";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-brands-400.dc2cbad.woff";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-brands-400.ec82f28.ttf";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fa-brands-400.bc671f9.svg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-regular-400.08f9891.eot";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-regular-400.1008b52.woff2";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-regular-400.1069ea5.woff";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-regular-400.1495f57.ttf";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fa-regular-400.64f4b21.svg";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-solid-900.3a24a60.eot";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-solid-900.3ceb50e.woff2";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-solid-900.46fdbd2.woff";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/fa-solid-900.10ecefc.ttf";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fa-solid-900.ca408b6.svg";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("6787e692", content, true)

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(45);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(46);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(47);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(48);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___, { hash: "#icomoon" });
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-display:block;font-family:\"icomoon\";font-style:normal;font-weight:400;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"svg\")}[class*=\" icon-\"],[class^=icon-]{speak:never;font-feature-settings:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:\"icomoon\"!important;font-style:normal;font-variant:normal;font-weight:400;line-height:1;text-transform:none}.icon-magnifying-glass:before{content:\"\\e900\"}.icon-shopping-cart:before{content:\"\\e901\"}.icon-chat:before{content:\"\\e902\"}.icon-right-arrow:before{content:\"\\e903\"}.icon-fast-food:before{content:\"\\e904\"}.icon-water:before{content:\"\\e905\"}.icon-health-check:before{content:\"\\e906\"}.icon-heart:before{content:\"\\e907\"}.icon-charity:before{content:\"\\e908\"}.icon-generous:before{content:\"\\e909\"}.icon-fundraiser:before{content:\"\\e90a\"}.icon-message:before{content:\"\\e90b\"}.icon-address:before{content:\"\\e90c\"}.icon-college-graduation:before{content:\"\\e90d\"}.icon-coin:before{content:\"\\e90e\"}.icon-dove:before{content:\"\\e90f\"}.icon-cheque:before{content:\"\\e910\"}.icon-donation:before{content:\"\\e911\"}.icon-handshake:before{content:\"\\e912\"}.icon-adoption:before{content:\"\\e913\"}.icon-donation-1:before{content:\"\\e914\"}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/icomoon.388fbe9.eot";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/icomoon.d78f5d4.ttf";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/icomoon.ef3daba.woff";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icomoon.b8f51aa.svg";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("5976210c", content, true)

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(51);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(52);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! Generated by Font Squirrel (https://www.fontsquirrel.com) on January 28, 2021 */@font-face{font-family:\"reeyregular\";font-style:normal;font-weight:400;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\")}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/reey-regular-webfont.cb519b0.woff2";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/reey-regular-webfont.c67c43b.woff";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("472170a6", content, true)

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(15);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--thm-font:\"Nunito\",sans-serif;--thm-reey-font:\"reeyregular\";--thm-gray:#707876;--thm-gray-rgb:112,120,118;--thm-primary:#3382b8;--thm-primary-rgb:21,200,160;--thm-black:#1f2230;--thm-black-rgb:31,34,48}.row{--bs-gutter-x:30px}.gutter-y-30{--bs-gutter-y:30px}body{color:#707876;color:var(--thm-gray);font-family:\"Nunito\",sans-serif;font-family:var(--thm-font);font-size:18px;font-weight:700;line-height:30px}body.locked{overflow:hidden}a{color:var(--thm-base)}a,a:focus,a:hover,a:visited{-webkit-text-decoration:none;text-decoration:none}h1,h2,h3,h4,h5,h6{color:#1f2230;color:var(--thm-black);margin:0}.page-wrapper{margin:0 auto;min-width:300px;overflow:hidden;position:relative;width:100%}.container{padding-left:15px;padding-right:15px}@media (min-width:1200px){.container{max-width:1200px}}::-moz-placeholder{color:inherit;opacity:1}::placeholder{color:inherit;opacity:1}.section-separator{border-color:var(--thm-border);border-width:1px;margin-bottom:0;margin-top:0}.thm-btn{-webkit-appearance:none;background-color:#3382b8;background-color:var(--thm-primary);border:none;color:#fff;display:inline-block;font-size:16px;font-weight:900;outline:none!important;padding:18.5px 50px;transition:.5s;vertical-align:middle}.thm-btn i{margin-right:10px}.thm-btn:hover{background:#1f2230;background:var(--thm-black);color:#fff}.section-title{margin-bottom:50px;margin-top:-13px}.section-title__tagline{align-items:center;color:#3382b8;color:var(--thm-primary);display:inline-flex;font-size:18px;font-weight:900;line-height:30px}.section-title__tagline:before{background-color:currentColor;content:\"\";height:2px;margin-right:10px;width:44px}.section-title__title{color:#1f2230;color:var(--thm-black);font-size:50px;font-weight:900;line-height:62px;margin:0}.bootstrap-select .dropdown-menu{border-radius:0;padding-bottom:0;padding-top:0}.bootstrap-select .dropdown-item.active,.bootstrap-select .dropdown-item:active{background-color:var(--thm-base)}.preloader{align-items:center;background-color:#fff;background-position:50%;background-repeat:no-repeat;bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;text-align:center;top:0;z-index:9991}.preloader__image{animation-duration:2s;animation-fill-mode:both;animation-iteration-count:infinite;animation-name:flipInY}.scroll-to-top{background:#3382b8;background:var(--thm-primary);border-radius:50%;bottom:40px;cursor:pointer;display:inline-block;height:45px;position:fixed;right:40px;text-align:center;transition:all .4s ease;width:45px;z-index:99}.scroll-to-top i{color:#fff;font-size:18px;line-height:45px}.scroll-to-top:hover{background-color:#1f2230;background-color:var(--thm-black)}.scroll-to-top:hover i{color:#fff}.jarallax{position:relative;z-index:0}.jarallax>.jarallax-img{font-family:\"object-fit: cover;\";height:100%;left:0;-o-object-fit:cover;object-fit:cover;position:absolute;top:0;width:100%;z-index:-1}.main-header{display:block;position:relative}.main-header__logo{background-color:#3382b8;background-color:var(--thm-primary);float:left;padding:2px 0;position:relative;text-align:center;width:15%}.main-menu-wrapper{background-color:#fff;float:right;position:relative;width:85%}.main-menu-wrapper__top{background-color:#fff;box-shadow:0 1px 0 0 #e5eeec;display:block;padding:0 60px;position:relative}.main-menu-wrapper__top-inner{justify-content:space-between;padding:4px 0}.main-menu-wrapper__left-content,.main-menu-wrapper__top-inner{align-items:center;display:flex}.main-menu-wrapper__left-text p{color:#1f2230;color:var(--thm-black);font-size:14px;margin:0}.main-menu-wrapper__left-email-box{align-items:center;display:flex;margin-left:40px}.main-menu-wrapper__left-email-box .icon i{color:#3382b8;color:var(--thm-primary);font-size:12px}.main-menu-wrapper__left-email-box .email{margin-left:10px}.main-menu-wrapper__left-email-box .email a{color:#1f2230;color:var(--thm-black);font-size:14px}.main-menu-wrapper__right-social{align-items:center;display:flex;padding:9px 0}.main-menu-wrapper__right-social a{align-items:center;color:#1f2230;color:var(--thm-black);display:flex;font-size:14px;justify-content:center;text-align:center;transition:all .5s ease}.main-menu-wrapper__right-social a:hover{color:#3382b8;color:var(--thm-primary);transition:all .5s ease}.main-menu-wrapper__right-social a+a{margin-left:35px}.main-menu-wrapper__bottom{display:block;padding:0 60px;position:relative}.main-menu{position:relative;z-index:91}.main-menu__inner,.main-menu__right{align-items:center;display:flex;position:relative}.main-menu__right{margin-left:auto;padding-left:60px}.main-menu__right:before{background-color:#e5eeec;bottom:28px;content:\"\";left:0;position:absolute;top:28px;width:1px}@media (max-width:425px){.main-menu__right{padding-left:0}}.main-menu__search{margin-right:30px}.main-menu__cart,.main-menu__search{color:#1f2230;color:var(--thm-black);font-size:24px;transition:all .5s ease}.main-menu__cart{margin-right:60px}.main-menu__cart:hover,.main-menu__search:hover{color:#3382b8;color:var(--thm-primary)}@media (max-width:1199px){.main-menu__cart,.main-menu__search{font-size:20px;margin-right:20px}}@media (max-width:767px){.main-menu__cart{margin-right:0}}.main-menu__phone-contact{align-items:center;background-color:#eff5f4;display:flex;padding:19.5px 60px}.main-menu__phone-icon{align-items:center;background-color:#fff;border-radius:50%;color:#3382b8;color:var(--thm-primary);display:flex;font-size:35px;height:60px;justify-content:center;width:60px}.main-menu__phone-number{margin-left:10px}.main-menu__phone-number>p{font-size:14px;line-height:19px;margin:0}.main-menu__phone-number>a{color:#1f2230;color:var(--thm-black);font-size:18px;font-weight:800}.main-menu__donate-btn{background:#3382b8;background:var(--thm-primary);color:#fff;display:inline-block;font-size:14px;font-weight:900;margin-left:60px;padding:7px 20px;transition:all .5s ease}.main-menu__donate-btn i{font-size:12px;margin-right:7px}.main-menu__donate-btn:hover{background-color:#1f2230;background-color:var(--thm-black);color:#fff}.stricky-header.main-menu{padding:0 60px}.main-menu .main-menu__list,.main-menu .main-menu__list ul,.stricky-header .main-menu__list,.stricky-header .main-menu__list ul{align-items:center;display:none;list-style-type:none;margin:0;padding:0}@media (min-width:1200px){.main-menu .main-menu__list,.main-menu .main-menu__list ul,.stricky-header .main-menu__list,.stricky-header .main-menu__list ul{display:flex}}.main-menu .main-menu__list>li,.stricky-header .main-menu__list>li{padding-bottom:34.5px;padding-top:34.5px;position:relative}.main-menu .main-menu__list>li+li,.stricky-header .main-menu__list>li+li{margin-left:64px}.main-menu .main-menu__list>li>a,.stricky-header .main-menu__list>li>a{align-items:center;color:#707876;color:var(--thm-gray);display:flex;font-size:16px;font-weight:700;position:relative;transition:all .5s ease}.main-menu .main-menu__list>li>a:before,.stricky-header .main-menu__list>li>a:before{background-color:#3382b8;background-color:var(--thm-primary);bottom:0;content:\"\";height:2px;left:0;position:absolute;transform:scaleX(0);transform-origin:left center;transition:transform .5s ease;width:100%}.main-menu .main-menu__list>li.current>a,.main-menu .main-menu__list>li:hover>a,.stricky-header .main-menu__list>li.current>a,.stricky-header .main-menu__list>li:hover>a{color:#1f2230;color:var(--thm-black)}.main-menu .main-menu__list>li.current>a:before,.main-menu .main-menu__list>li:hover>a:before,.stricky-header .main-menu__list>li.current>a:before,.stricky-header .main-menu__list>li:hover>a:before{transform:scale(1);transform-origin:right center}.main-menu .main-menu__list li ul,.stricky-header .main-menu__list li ul{align-items:flex-start;background-color:#fff;box-shadow:0 0 65px 0 rgba(0,0,0,.1);flex-direction:column;justify-content:flex-start;left:0;min-width:220px;opacity:0;position:absolute;top:100%;transition:.5s ease;visibility:hidden;z-index:99}.main-menu .main-menu__list li:hover>ul,.stricky-header .main-menu__list li:hover>ul{opacity:1;visibility:visible}.main-menu .main-menu__list li ul li,.stricky-header .main-menu__list li ul li{flex:1 1 100%;position:relative;width:100%}.main-menu .main-menu__list li ul li+li,.stricky-header .main-menu__list li ul li+li{border-top:1px solid rgba(#1f2230,.1);border-top:1px solid rgba(var(--thm-black),.1)}.main-menu .main-menu__list li ul li a,.stricky-header .main-menu__list li ul li a{color:#1f2230;color:var(--thm-black);display:flex;font-size:16px;line-height:30px;padding:10px 20px;transition:.5s}.main-menu .main-menu__list li ul li:hover>a,.stricky-header .main-menu__list li ul li:hover>a{background-color:#3382b8;background-color:var(--thm-primary);color:#fff}.main-menu .main-menu__list li ul li>ul,.stricky-header .main-menu__list li ul li>ul{left:100%;top:0}.main-menu .main-menu__list li ul li>ul.right-align,.stricky-header .main-menu__list li ul li>ul.right-align{left:auto;right:100%;top:0}.main-menu .main-menu__list li ul li>ul ul,.stricky-header .main-menu__list li ul li>ul ul{display:none}.stricky-header{background-color:#fff;box-shadow:0 10px 60px 0 rgba(0,0,0,.05);left:0;position:fixed;top:0;transform:translateY(-120%);transition:transform .5s ease,visibility .5s ease;visibility:hidden;width:100%;z-index:991}@media (max-width:1199px){.stricky-header{display:none}}.stricky-header.stricky-fixed{transform:translateY(0);visibility:visible}.stricky-header .main-menu__inner{box-shadow:none;padding-right:0}.mobile-nav__buttons{display:flex;margin-left:auto;margin-right:10px}@media (min-width:1200px){.mobile-nav__buttons{display:none}}.mobile-nav__buttons a{color:#1f2230;color:var(--thm-black);cursor:pointer;font-size:20px}.mobile-nav__buttons a+a{margin-left:10px}.mobile-nav__buttons a:hover{color:var(--thm-base)}.main-menu .mobile-nav__toggler{color:#1f2230;color:var(--thm-black);cursor:pointer;font-size:20px;margin-right:20px;transition:.5s}.main-menu .mobile-nav__toggler:hover{color:var(--thm-base)}@media (min-width:1200px){.main-menu .mobile-nav__toggler{display:none}}.main-header-two{left:0;position:absolute;right:0;top:0;z-index:99}.main-header-two__inner{background-color:#1f2230;background-color:var(--thm-black);display:block;position:relative}.main-header-two__logo{display:block;float:left;max-width:120px;padding-bottom:63px;padding-top:25px;position:relative;text-align:center}.main-header-two__contact-info{display:block;float:right;margin-left:145px;max-width:905px;position:relative;width:100%}.main-header-two__contact-list{display:block;float:left;margin:0;padding:35px 0 58px;position:relative}.main-header-two__contact-list li{display:inline-block;padding-left:35px;position:relative}.main-header-two__contact-list li:before{background:hsla(0,0%,100%,.09);bottom:7px;content:\"\";position:absolute;right:-30px;top:-9px;width:1px}.main-header-two__contact-list li:last-child:before{display:none}.main-header-two__contact-list li+li{margin-left:55px}.main-header-two__contact-icon{left:0;position:absolute;top:2px}.main-header-two__contact-icon span{color:#3382b8;color:var(--thm-primary);font-size:35px}.main-header-two__contact-text{margin-left:15px}.main-header-two__contact-text p{color:#afb2c0;font-size:14px;line-height:14px;margin:0}.main-header-two__contact-text a,.main-header-two__contact-text h5{color:#fff;font-size:16px;font-weight:800}.main-header-two__contact-text h5{margin-top:7px}.main-header-two__btn{display:block;float:right;padding-bottom:39px;padding-top:55px;position:relative}.main-header-two__donate-btn{background:#3382b8;background:var(--thm-primary);color:#fff;display:inline-block;font-size:14px;font-weight:900;padding:7px 20px;transition:all .5s ease}.main-header-two__donate-btn i{font-size:12px;margin-right:7px}.main-header-two__donate-btn:hover{color:#1f2230;color:var(--thm-black)}.main-header-two__bottom{display:block;position:relative;top:-39px;z-index:5}.main-menu__two .main-menu__inner{background:#fff;padding:0 50px}.main-menu__two .main-menu__right{padding-bottom:21px;padding-left:0;padding-top:22px}.main-menu__two .main-menu__right:before{display:none}.main-menu__right-social{align-items:center;display:flex;margin-right:30px;padding-right:30px;position:relative}.main-menu__right-social:before{background:#e5eeec;bottom:-3px;content:\"\";position:absolute;right:0;top:-4px;width:1px}.main-menu__right-social a{align-items:center;background-color:#e5eeec;border-radius:50%;color:#1f2230;color:var(--thm-black);display:flex;font-size:13px;height:35px;justify-content:center;text-align:center;transition:all .5s ease;width:35px}.main-menu__right-social a+a{margin-left:10px}.main-menu__right-social a:hover{background:#3382b8;background:var(--thm-primary);color:#fff}.main-menu__two .main-menu__cart{margin-right:0}.main-menu__two .main-menu__list>li,.stricky-header.main-menu__two .main-menu__list>li{padding-bottom:24px;padding-top:24px}.stricky-header.main-menu__two,.stricky-header.main-menu__two .main-menu__inner{padding:0}.main-header-three,.main-header-three__menu-box{display:block;position:relative}.main-header-three__menu-box{box-shadow:0 10px 60px 0 rgba(0,0,0,.05);padding:0 30px}@media (min-width:992){.main-header-three__menu-box{padding:0 60px}}.main-menu-three__logo{display:block;float:left;padding:28.5px 0;position:relative;text-align:center}.main-menu-three__inner-upper{align-items:center;display:flex;float:left;justify-content:center;position:relative;width:70%}.main-menu-three__btn{margin-right:60px}.main-menu-three__donate-btn{background:#3382b8;background:var(--thm-primary);color:#fff;display:inline-block;font-size:14px;font-weight:900;padding:7px 20px;transition:all .5s ease}.main-menu-three__donate-btn i{font-size:12px;margin-right:7px}.main-menu-three__donate-btn:hover{color:#1f2230;color:var(--thm-black)}.main-menu__right-three{float:right;padding:36.5px 0;position:relative}.main-menu__right-three:before{display:none}.main-menu__right-three .main-menu__search{padding:5.5px 0}.main-menu__right-three .main-menu__cart{margin-right:0;padding:5.5px 0}.main-menu-three__inner .main-menu__list>li,.stricky-header.main-menu-three .main-menu__list>li{padding-bottom:38.5px;padding-top:39.5px}@keyframes bubbleMover{0%{transform:translateY(0) translateX(0) rotate(0)}30%{transform:translateY(30px) translateX(50px) rotate(15deg);transform-origin:center center}50%{transform:translateY(50px) translateX(100px) rotate(45deg);transform-origin:right bottom}80%{transform:translateY(30px) translateX(50px) rotate(15deg);transform-origin:left top}to{transform:translateY(0) translateX(0) rotate(0);transform-origin:center center}}@keyframes shapeMover{0%,to{transform:perspective(400px) translateY(0) rotate(0deg) translateZ(0) translateX(0)}50%{transform:perspective(400px) rotate(0deg) translateZ(20px) translateY(20px) translateX(20px)}}@keyframes banner3Shake{0%{transform:rotateY(0deg)}30%{transform:rotate(5deg)}60%{transform:rotateX(0deg)}80%{transform:rotate(5deg)}to{transform:rotateY(0deg)}}@keyframes squareMover{0%,to{transform:translate(0) rotate(0)}20%,60%{transform:translate(20px,40px) rotate(180deg)}30%,80%{transform:translate(40px,60px) rotate(0deg)}}@keyframes treeMove{0%,to{transform:rotate(0deg) translateX(0)}25%,75%{transform:rotate(5deg) translateX(15px)}50%{transform:rotate(10deg) translateX(30px)}}.zoom-fade{animation-duration:5s;-webkit-animation-duration:5s;-moz-animation-duration:5s;-ms-animation-duration:5s;-o-animation-duration:5s;animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;-ms-animation-iteration-count:infinite;-o-animation-iteration-count:infinite;animation-name:zoom-fade;-webkit-animation-name:zoom-fade;-moz-animation-name:zoom-fade;-ms-animation-name:zoom-fade;-o-animation-name:zoom-fade;animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear;-ms-animation-timing-function:linear;-o-animation-timing-function:linear}@keyframes zoom-fade{0%{transform:scale(.9)}50%{transform:scale(1)}to{transform:scale(.9)}}@keyframes service_hexagon_2{0%{transform:rotateY(0deg)}to{transform:rotateY(1turn)}}.mobile-nav__wrapper{height:100vh;left:0;opacity:0;position:fixed;top:0;transform:translateX(-50%);transform-origin:right center;transition:transform .5s ease-in,opacity .5s linear,visibility .5s ease-in;visibility:hidden;width:100vw;z-index:999}.mobile-nav__wrapper .container{padding-left:0;padding-right:0}.mobile-nav__wrapper.expanded{opacity:1;transform:translateX(0);visibility:visible}.mobile-nav__overlay{background-color:#000;bottom:0;cursor:pointer;left:0;opacity:.5;position:absolute;right:0;top:0}.mobile-nav__content{background-color:#1f2230;background-color:var(--thm-black);height:100%;overflow-y:auto;padding:30px 15px;position:relative;width:300px;z-index:10}.mobile-nav__content .thm-btn{padding:8px 0;text-align:center;width:100%}.mobile-nav__content .logo-box{display:flex;margin-bottom:40px}.mobile-nav__close{color:var(--thm-text-dark);cursor:pointer;font-size:18px;position:absolute;right:15px;top:20px}.mobile-nav__content .main-menu__list,.mobile-nav__content .main-menu__list ul{list-style-type:none;margin:0;padding:0}.mobile-nav__content .main-menu__list ul{border-top:1px solid hsla(0,0%,100%,.1);height:0;opacity:0;transform:scaleY(0);transform-origin:top center;visibility:hidden}.mobile-nav__content .main-menu__list ul.show{height:auto;opacity:1;transform:scaleY(1);transition:transform .5s ease 0ms,opacity .5s ease 0ms,visibility .5s ease,height .5s ease 0ms;visibility:visible}.mobile-nav__content .main-menu__list li:not(:last-child){border-bottom:1px solid hsla(0,0%,100%,.1)}.mobile-nav__content .main-menu__list li a{align-items:center;color:#fff;display:flex;font-family:\"Nunito\",sans-serif;font-family:var(--thm-font);font-size:14px;font-weight:500;height:46px;justify-content:space-between;line-height:30px;transition:.5s}.mobile-nav__content .main-menu__list li a.expanded{color:#3382b8;color:var(--thm-primary)}.mobile-nav__content .main-menu__list li a button{align-items:center;background-color:#3382b8;background-color:var(--thm-primary);border:none;color:#fff;display:flex;height:30px;justify-content:center;outline:none;text-align:center;transform:rotate(-90deg);transition:transform .5s ease;width:30px}.mobile-nav__content .main-menu__list li a button.expanded{background-color:#fff;color:#1f2230;color:var(--thm-black);transform:rotate(0deg)}.mobile-nav__content .main-menu__list li.cart-btn span{position:relative;right:auto;top:auto;transform:translate(0)}.mobile-nav__content .main-menu__list li.cart-btn i{font-size:16px}.mobile-nav__top{align-items:center;display:flex;justify-content:space-between;margin-bottom:30px}.mobile-nav__top .main-menu__login a{color:var(--thm-text-dark)}.mobile-nav__container{border-bottom:1px solid hsla(0,0%,100%,.1);border-top:1px solid hsla(0,0%,100%,.1)}.mobile-nav__social{align-items:center;display:flex}.mobile-nav__social a{color:#3382b8;color:var(--thm-primary);font-size:16px;transition:.5s}.mobile-nav__social a+a{margin-left:30px}.mobile-nav__social a:hover{color:#fff}.mobile-nav__contact{margin-bottom:20px;margin-top:20px}.mobile-nav__contact li{align-items:center;color:var(--thm-text-dark);display:flex;font-size:14px;font-weight:500;position:relative}.mobile-nav__contact li+li{margin-top:15px}.mobile-nav__contact li a{color:#fff;transition:.5s}.mobile-nav__contact li a:hover{color:#3382b8;color:var(--thm-primary)}.mobile-nav__contact li>i{align-items:center;background-color:#3382b8;background-color:var(--thm-primary);border-radius:50%;color:#fff;display:flex;font-size:11px;height:30px;justify-content:center;margin-right:10px;text-align:center;width:30px}.mobile-nav__container .main-logo,.mobile-nav__container .main-menu__language,.mobile-nav__container .main-menu__login,.mobile-nav__container .topbar__buttons{display:none}.search-popup{align-items:center;display:flex;height:100vh;justify-content:center;left:0;padding-left:20px;padding-right:20px;position:fixed;top:0;transform:translateY(-110%);transition:transform .5s ease,opacity .5s ease;width:100vw;z-index:991}.search-popup.active{transform:translateY(0)}.search-popup__overlay{background-color:#1f2230;background-color:var(--thm-black);bottom:0;cursor:pointer;left:0;opacity:.75;position:absolute;right:0;top:0}.search-popup__content{max-width:560px;width:100%}.search-popup__content form{background-color:#fff;border-radius:0;display:flex;flex-wrap:wrap;overflow:hidden;position:relative}.search-popup__content form input[type=search],.search-popup__content form input[type=text]{background-color:#fff;border:none;font-size:16px;height:66px;outline:none;padding-left:30px;width:100%}.search-popup__content .thm-btn{align-items:center;border-radius:0;display:flex;height:68px;justify-content:center;padding:0;position:absolute;right:-1px;text-align:center;top:0;width:68px}.search-popup__content .thm-btn:hover{background-color:#1f2230;background-color:var(--thm-black);color:#fff}.search-popup__content .thm-btn i{margin:0}.main-slider{overflow:hidden;position:relative}.main-slider .swiper-slide{background-color:#1f2230;background-color:var(--thm-black);position:relative}.main-slider-three .swiper-slide{background-color:transparent}.main-slider .swiper-slide .container{position:relative;z-index:30}.main-slider .image-layer{background-repeat:no-repeat;background-size:cover;bottom:0;filter:grayscale(100%);left:0;position:absolute;right:0;top:0;transform:scale(1);transition:transform 7s ease;z-index:1}.main-slider .image-layer-overlay{background:rgba(31,34,48,.7);background:rgba(var(--thm-black-rgb),.7);content:\"\";height:100%;left:0;position:absolute;top:0;width:100%;z-index:2}.main-slider .container{padding-bottom:190px;padding-top:219px}.main-slider__content{display:block;position:relative}.main-slider__shape-1{bottom:215px;opacity:0;position:absolute;right:9px;transition:opacity 1s ease,visibility 1s ease;transition-delay:1s;visibility:hidden}.main-slider .swiper-slide-active .main-slider__shape-1{opacity:1;visibility:visible}.main-slider p{color:#fff;font-family:\"reeyregular\";font-family:var(--thm-reey-font);font-size:40px;font-weight:400;line-height:50px;margin:0 0 19px;opacity:0;transform:translateY(100px);transition-delay:2.5s;transition:transform 2s ease,opacity 2s ease,color .5s ease,background .5s ease}.main-slider h2{color:#fff;font-size:110px;font-weight:900;line-height:120px;margin:0 0 37px;opacity:0;transform:translateY(120px);transition-delay:1s;transition:transform 2s ease,opacity 2s ease;visibility:hidden}.main-slider .thm-btn{font-size:18px;font-weight:800;opacity:0;padding:20px 48px;transform:translateY(100px);transition-delay:2.5s;transition:transform 2s ease,opacity 2s ease,color .5s ease,background .5s ease}.main-slider .thm-btn:hover{background-color:#fff;color:#1f2230;color:var(--thm-black)}.main-slider .swiper-slide-active .image-layer{transform:scale(1.15)}.main-slider .swiper-slide-active .thm-btn,.main-slider .swiper-slide-active h2,.main-slider .swiper-slide-active p{opacity:1;transform:translateY(0) translateX(0);visibility:visible}.main-slider__counter{bottom:0;left:0;margin:0 auto;max-width:1200px;padding:0 15px;position:absolute;right:0;width:100%;z-index:1}.main-slider__counter-box{display:block;float:right;margin:0;position:relative}.main-slider__counter-box li{background:#eff5f4;float:left;max-width:230px;padding:40px 50px;position:relative;transition:all .5s ease}.main-slider__counter-box li:hover{background:#3382b8;background:var(--thm-primary)}.main-sldier__counter-digit{color:#3382b8;color:var(--thm-primary);font-size:44px;font-weight:900;transition:all .5s ease}.main-slider__counter-text{color:#1f2230;color:var(--thm-black);font-size:16px;font-weight:900;line-height:26px;margin:0;transition:all .5s ease}.main-slider__counter-box li:hover .main-sldier__counter-digit,.main-slider__counter-box li:hover .main-slider__counter-text{color:#fff}.main-slider__nav{align-items:flex-end;display:flex;flex-direction:column;left:50%;max-width:1200px;padding-left:15px;padding-right:15px;position:absolute;top:54%;transform:translateY(-50%) translateX(-50%);width:100%;z-index:100}.main-slider__nav .swiper-button-next,.main-slider__nav .swiper-button-prev{align-items:center;background:#fff;border-radius:50%;bottom:auto;color:#1f2230;color:var(--thm-black);display:flex;font-size:20px;height:63px;justify-content:center;left:auto;margin:0;opacity:1;position:relative;right:auto;text-align:center;top:auto;transition:all .5s ease;width:63px;z-index:100}.main-slider__nav .swiper-button-next:hover,.main-slider__nav .swiper-button-prev:hover{opacity:.5}.main-slider__nav .swiper-button-next:after,.main-slider__nav .swiper-button-prev:after{display:none}.main-slider__nav .swiper-button-prev{margin-bottom:10px}.main-slider__nav .swiper-button-prev .icon-left-arrow{position:relative;transform:rotate(180deg)}#main-slider-pagination{bottom:51px;left:50%;max-width:1170px;text-align:left;transform:translate(-50%,0);width:100%;z-index:10}#main-slider-pagination .swiper-pagination-bullet{background-color:#fff;border-radius:50%;height:12px;opacity:.5;width:12px}#main-slider-pagination .swiper-pagination-bullet+.swiper-pagination-bullet{margin-left:6px}#main-slider-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active{opacity:1}.main-slider-two .container{padding-bottom:175px;padding-top:380px}.main-slider-two .image-layer-overlay{background:rgba(21,200,160,.5);background:rgba(var(--thm-primary-rgb),.5)}.main-slider-two .thm-btn{background:#1f2230;background:var(--thm-black)}.main-slider-two .thm-btn:hover{background-color:#fff;color:#1f2230;color:var(--thm-black)}.main-slider__nav-two{align-items:center;display:flex;justify-content:space-between;left:50%;max-width:1200px;padding-left:15px;padding-right:15px;position:absolute;top:59%;transform:translateY(-50%) translateX(-50%);width:100%;z-index:100}.main-slider__nav-two .swiper-button-next,.main-slider__nav-two .swiper-button-prev{align-items:center;background:#fff;border-radius:50%;bottom:auto;color:#1f2230;color:var(--thm-black);display:flex;font-size:20px;height:63px;justify-content:center;left:auto;margin:0;opacity:1;position:relative;right:auto;text-align:center;top:auto;transition:all .5s ease;width:63px;z-index:100}.main-slider__nav-two .swiper-button-next:hover,.main-slider__nav-two .swiper-button-prev:hover{opacity:.5}.main-slider__nav-two .swiper-button-next:after,.main-slider__nav-two .swiper-button-prev:after{display:none}.main-slider__nav-two .swiper-button-prev{margin-bottom:10px}.main-slider__nav-two .swiper-button-prev .icon-left-arrow{position:relative;transform:rotate(180deg)}.main-slider-two #main-slider-pagination{text-align:center}.main-slider-three .container{padding-bottom:210px;padding-top:240px}.main-slider-three .image-layer{opacity:inherit}.main-slider-three .image-layer-overlay{background:hsla(0,0%,100%,.3)}.main-slider-three p{color:#3382b8;color:var(--thm-primary)}.main-slider-three h2{color:#1f2230;color:var(--thm-black)}.main-slider-three-shape{animation:service_hexagon_2 15s linear infinite;position:absolute;right:194px;top:-50px}.main-slider-three .thm-btn:hover{background-color:#1f2230;background-color:var(--thm-black);color:#fff}.welcome-one{display:block;padding:100px 0 185px;position:relative}.welcome-one .row{--bs-gutter-x:70px}.welcome-one__img-box,.welcome-one__left{display:block;position:relative}.welcome-one__img-box:before{background:#3382b8;background:var(--thm-primary);content:\"\";height:330px;left:-60px;position:absolute;top:0;width:30px}.welcome-one__img-box img{width:100%}.welcome-one__img-box-2{bottom:-30px;left:-60px;position:absolute}.welcome-one__img-box-2 img{width:320px}.welcome-one__bottom-text{bottom:-55px;color:#3382b8;color:var(--thm-primary);font-family:\"reeyregular\";font-family:var(--thm-reey-font);font-size:50px;left:60px;line-height:60px;position:absolute}.welcome-one__heart-icon{bottom:-88px;position:absolute;right:30px}.welcome-one__right .section-title{margin-bottom:38px}.welcome-one__right-text{margin:0}.welcome-one__our-mission-and-story{align-items:start;display:flex;flex-direction:column;justify-content:space-around;margin-top:38px}.welcome-one__mission-and-story-single h3{font-size:20px;font-weight:900;line-height:30px;margin-bottom:15px}.welcome-one__mission-and-story-single i{color:#3382b8;color:var(--thm-primary);margin-right:10px}.welcome-one__our-mission-and-story-text{font-size:16px;margin:0}.welcome-one__progress{display:block;padding-top:33px;position:relative;width:100%}.welcome-one__progress-title{font-size:20px;font-weight:900;line-height:30px;margin-bottom:6px}.welcome-one__progress .bar{background:#eff5f4;border-radius:5px;height:13px;margin-bottom:12px;position:relative;width:100%}.welcome-one__progress .bar-inner{background:#3382b8;background:var(--thm-primary);border-radius:5px;display:block;height:13px;position:relative;transition:all 1.5s ease;width:0}.welcome-one__progress .count-text{bottom:20px;color:#707876;color:var(--thm-gray);font-size:16px;font-weight:700;line-height:26px;opacity:0;position:absolute;right:0;text-align:center;transition:all .5s ease}.welcome-one__progress .bar-inner.counted .count-text{opacity:1}.welcome-one__btn{margin-top:54px}.causes-one{display:block;padding:100px 0 140px;position:relative}.causes-one:before{background:#eff5f4;content:\"\";height:510px;left:0;position:absolute;right:0;top:0;z-index:-1}.causes-one .section-title{margin-bottom:34px}.causes-one__carousel{position:relative}.causes-one__carousel .owl-stage-outer,.causes-one__carousel .tns-ovh{overflow:visible;padding-top:30px}.causes-one__carousel .tns-item{opacity:0;transition:all .5s ease;visibility:hidden}.causes-one__carousel .tns-slide-active{opacity:1;visibility:visible}.causes-one__carousel .tns-nav,.causes-one__carousel.owl-carousel .owl-dots{align-items:center;bottom:-49px;display:flex;justify-content:center;left:0;margin:0;position:absolute;right:0;text-align:center}.causes-one__carousel .tns-nav button,.causes-one__carousel.owl-carousel .owl-dots .owl-dot{background:#1f2230;background:var(--thm-black);border:none;border-radius:50%;display:inline-block;height:10px;margin:0 3px;opacity:.5;outline:none;padding:0;position:relative;transition:all .1s linear;transition-delay:.1s;width:10px}.causes-one__carousel .tns-nav button.tns-nav-active,.causes-one__carousel.owl-carousel .owl-dot.active{opacity:1}.causes-one__carousel.owl-carousel .owl-dot:focus{outline:none}.causes-one__carousel.owl-carousel .owl-dots .owl-dot span{display:none}.causes-one__single{background:#fff;border:1px solid #e5eeec;display:block;position:relative}.causes-one__img{display:block;margin-top:-30px;padding:0 30px;position:relative}.causes-one__img-box{display:block;overflow:hidden;position:relative}.causes-one__img-box>img{position:relative;transform:scale(1);transition:transform .5s ease;width:100%}.causes-one__single:hover .causes-one__img-box>img{transform:scale(1.05)}.causes-one__img-box>a{align-items:center;background-color:rgba(31,34,48,.9);background-color:rgba(var(--thm-black-rgb),.9);bottom:0;color:#000;display:flex;font-size:25px;justify-content:center;left:0;margin:10px;opacity:0;position:absolute;right:0;top:0;transform:translateY(-30%);transition:opacity .5s ease,visibility .5s ease,transform .5s ease;visibility:hidden}.causes-one__img-box>a i{color:#3382b8;color:var(--thm-primary);transition:all .5s ease}.causes-one__img-box>a i:hover{color:#fff}.causes-one__single:hover .causes-one__img-box>a{opacity:1;transform:translateY(0);visibility:visible}.causes-one__category{background:#3382b8;background:var(--thm-primary);bottom:10px;left:20px;line-height:27px;padding:0 20px;position:absolute}.causes-one__category span{color:#fff;font-size:14px;font-weight:800}.causes-one__content{display:block;padding:26px 30px 20px;position:relative}.causes-one__title{font-size:24px;font-weight:900;line-height:27px;margin-bottom:15px}.causes-one__title a{color:#1f2230;color:var(--thm-black);transition:all .5s ease}.causes-one__title a:hover{color:#3382b8;color:var(--thm-primary)}.causes-one__text{font-size:16px;margin:0}.causes-one__progress{background:#eff5f4;display:block;padding:60px 30px 21px;position:relative;width:100%}.causes-one__progress .bar{background:#fff;border-radius:5px;height:10px;margin-bottom:6px;position:relative;width:100%}.causes-one__progress .bar-inner{background:#3382b8;background:var(--thm-primary);border-radius:5px;display:block;height:10px;position:relative;transition:all 1.5s ease;width:0}.causes-one__progress .count-text{background:#3382b8;background:var(--thm-primary);bottom:20px;color:#fff;font-size:12px;font-weight:800;height:20px;line-height:20px;opacity:0;position:absolute;right:-40px;text-align:center;transition:all .5s ease;width:40px}.causes-one__progress .bar-inner.counted .count-text{opacity:1}.causes-one__progress .count-text:after{border-right:7px solid transparent;border-top:5px solid #3382b8;border-top:5px solid var(--thm-primary);content:\"\";left:0;position:absolute;top:100%}.causes-one__goals{align-items:center;display:flex;justify-content:space-between}.causes-one__goals>p{font-size:14px;margin:0}.causes-one__goals>p>span{color:#1f2230;color:var(--thm-black);font-size:20px;font-weight:900;line-height:30px}.join-one{display:block;padding:87px 0 100px;position:relative}@media (min-width:992px){.join-one__about{padding-bottom:150px}}.join-one-bg{background-repeat:no-repeat;background-size:cover}.join-one-bg,.join-one-bg:before{height:100%;left:0;position:absolute;top:0;width:100%}.join-one-bg:before{background-color:rgba(31,34,48,.6);background-color:rgba(var(--thm-black-rgb),.6);content:\"\"}.join-one-bg.jarallax div div{filter:grayscale(100%)}.join-one__inner{display:block;position:relative;text-align:center}.join-one__title{color:#fff;font-size:60px;font-weight:900;line-height:70px;margin-bottom:45px}.three-boxes{display:block;position:relative}.three-boxes .row{--bs-gutter-x:0px}.three-boxes .container-box{display:block;position:relative;width:100%}.three-boxes__single{display:block;overflow:hidden;padding:60px;position:relative;z-index:1}.three-boxes__single:before{background-color:rgba(21,200,160,.9);background-color:rgba(var(--thm-primary-rgb),.9);content:\"\";z-index:2}.three-boxes__single-bg,.three-boxes__single:before{height:100%;left:0;position:absolute;top:0;width:100%}.three-boxes__single-bg{background-repeat:no-repeat;background-size:cover;filter:grayscale(1)}.three-boxes__content{display:flex;position:relative;z-index:3}.three-boxes__icon span{color:#fff;display:inline-block;font-size:65px;line-height:65px;position:relative;transition:all .5s linear;transition-delay:.1s}.three-boxes__single:hover .three-boxes__icon span{transform:rotate(1turn)}.three-boxes__text-box{margin-left:30px;max-width:420px;position:relative;width:100%}.three-boxes__text-box h2{color:#fff;font-size:30px;font-weight:900;line-height:40px;margin-bottom:19px}.three-boxes__text{color:#fff;font-weight:800;line-height:34px;margin:0}.three-boxes__btn{background:#fff;color:#1f2230;color:var(--thm-black);display:inline-block;font-size:14px;font-weight:900;margin-top:34px;padding:7px 20px;transition:all .5s ease}.three-boxes__btn:hover{background:#1f2230;background:var(--thm-black);color:#fff}.three-boxes__btn i{font-size:12px;margin-right:7px}.three-boxes__single-item-1:before{background-color:rgba(235,173,35,.9)}.three-boxes__single-item-2:before{background-color:rgba(206,81,64,.9)}.helping-one{display:block;padding:100px 0;position:relative}.helping-one .section-title{margin-bottom:35px}.helping-one__left{display:block;margin-right:30px;margin-top:-13px;position:relative}.helping-one__title{color:#3382b8;color:var(--thm-primary);font-size:24px;font-weight:900;line-height:34px;margin-bottom:32px}.helping-one__text{font-size:16px;margin:0}.helping-one__left-list{margin:0;padding-top:32px}.helping-one__left-list li{display:flex}.helping-one__left-list li+li{margin-top:10px}.helping-one__left-icon i{color:#3382b8;color:var(--thm-primary);font-size:15px}.helping-one__left-text{margin-left:20px}.helping-one__left-text p{color:#1f2230;color:var(--thm-black);font-weight:900;margin:0}.helping-one__left-img{display:block;margin-top:58px;position:relative}.helping-one__left-img img{width:100%}.helping-one__left-icon-box{align-items:center;background:#3382b8;background:var(--thm-primary);border-radius:50%;color:#fff;display:flex;font-size:65px;height:120px;justify-content:center;position:absolute;right:30px;top:-60px;width:120px}.helping-one__right{background:#eff5f4;display:block;padding:60px;position:relative}.helping-one__right .row{--bs-gutter-x:10px}.helping-one__right-input-box{display:block;position:relative}.helping-one__right-dolar-icon{position:absolute;right:30px;top:50%;transform:translateY(-50%)}.helping-one__right-dolar-icon span{font-size:16px}.helping-one__right-form input[type=email],.helping-one__right-form input[type=text],.helping-one__right-form textarea{background-color:#fff;border:none;box-shadow:0 0 30px 0 rgba(0,0,0,.05);color:#707876;color:var(--thm-gray);display:block;font-size:16px;font-weight:700;height:67px;margin-bottom:10px;outline:none;padding-left:30px;padding-right:30px;width:100%}.helping-one__right-form textarea{height:192px;padding-bottom:30px;padding-top:21px}.gallery-one{display:block;position:relative;z-index:2}.gallery-one__container-box{margin:0 auto;max-width:1660px;padding-left:15px;padding-right:15px;width:100%}.gallery-one__container-box,.gallery-one__img-box,.gallery-one__single{display:block;position:relative}.gallery-one__img-box{overflow:hidden}.gallery-one__img-box:before{background:rgba(21,200,160,.9);background:rgba(var(--thm-primary-rgb),.9);content:\"\";height:100%;left:0;position:absolute;top:0;transform:translateY(-101%);transition:all .7s ease;width:100%;z-index:1}.gallery-one__single:hover .gallery-one__img-box:before{opacity:1;transform:translateY(0)}.gallery-one__img-box img{transform:scale(1);transition:transform .5s ease,opacity .5s ease;width:100%}.gallery-one__single:hover .gallery-one__img-box img{transform:scale(1.05)}.gallery-one__hover-content-box{align-items:center;bottom:0;display:flex;flex-direction:column;justify-content:center;left:0;opacity:0;position:absolute;right:0;top:0;transform:translateY(50px);z-index:2}.gallery-one__hover-content-box h2{color:#fff;font-size:24px;font-weight:900;line-height:34px;margin-bottom:14px}.gallery-one__hover-content-box p{color:#fff;font-family:\"reeyregular\";font-family:var(--thm-reey-font);font-size:30px;font-weight:400;margin:0}.gallery-one__single:hover .gallery-one__hover-content-box{opacity:1;transform:translateY(0);transition:all .5s ease .5s;-webkit-transition:all .5s ease .5s;-ms-transition:all .5s ease .5s;-o-transition:all .5s ease .5s}.testimonial-one{background-color:#eff5f4;display:block;margin-top:-90px;padding:190px 0 100px;position:relative;z-index:1}.testimonial-one-bg{background-repeat:no-repeat;background-size:cover;bottom:0;filter:grayscale(1);left:0;opacity:.08;position:absolute;top:0;width:1010px}.testimonial-one .container{position:relative;z-index:10}.testimonial-one__carousel{position:relative}.testimonial-one__carousel .tns-ovh{overflow:visible}.testimonial-one__carousel .tns-item{opacity:0;transition:visibility .5s ease,opacity .5s ease;visibility:hidden}.testimonial-one__carousel .tns-slide-active{opacity:1;visibility:visible}.testimonial-one__carousel .tns-controls,.testimonial-one__carousel.owl-theme .owl-nav{bottom:22px;left:-405px;position:absolute}.testimonial-one__carousel .tns-controls button[data-controls=next],.testimonial-one__carousel.owl-theme .owl-nav .owl-next{background:#fff;border:0;border-radius:50%;color:#1f2230;color:var(--thm-black);font-size:23px;height:65px;margin-left:10px;text-align:center;transition:all .5s ease;width:65px}.testimonial-one__carousel .tns-controls button[data-controls=prev],.testimonial-one__carousel.owl-theme .owl-nav .owl-prev{background:#fff;border:0;border-radius:50%;color:#1f2230;color:var(--thm-black);font-size:23px;height:65px;text-align:center;transform:rotate(180deg);transition:all .5s ease;width:65px}.testimonial-one__carousel.owl-theme .owl-nav .owl-next span,.testimonial-one__carousel.owl-theme .owl-nav .owl-prev span{line-height:65px}.testimonial-one__carousel .tns-controls button[data-controls=next]:hover,.testimonial-one__carousel .tns-controls button[data-controls=prev]:hover,.testimonial-one__carousel.owl-theme .owl-nav .owl-next:hover,.testimonial-one__carousel.owl-theme .owl-nav .owl-prev:hover{background:#3382b8;background:var(--thm-primary);color:#fff}.testimonial-one__carousel.owl-theme .owl-nav .owl-next:focus,.testimonial-one__carousel.owl-theme .owl-nav .owl-prev:focus{outline:none}.testimonial-one__single{background-color:#fff;box-shadow:0 0 60px 0 rgba(0,0,0,.07);display:block;padding:30px 40px 40px;position:relative}.testimonial-one__text{line-height:34px;margin:0}.testimonial-one__client-info{align-items:center;display:flex;margin-top:19px}.testimonial-one__client-img{display:block;position:relative}.testimonial-one__client-img>img{border-radius:50%;width:70px}.testimonial-one__quote{align-items:center;background:#3382b8;background:var(--thm-primary);border-radius:50%;color:#fff;display:flex;font-size:20px;height:42px;justify-content:center;position:absolute;right:-22px;top:50%;transform:translateY(-50%);width:42px}.testimonial-one__quote:before{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:50%;background-repeat:no-repeat;content:\"\";height:18px;width:21px}.testimonial-one__client-name{margin-left:40px}.testimonial-one__client-name h3{color:#3382b8;color:var(--thm-primary);font-size:20px;font-weight:900;line-height:20px}.testimonial-one__client-name p{line-height:29px;margin:0}.help-them{display:block;padding:87px 0 90px;position:relative}.help-them-bg{background-repeat:no-repeat;background-size:cover;z-index:-1}.help-them-bg,.help-them-bg:before{height:100%;left:0;position:absolute;top:0;width:100%}.help-them-bg:before{background-color:rgba(31,34,48,.9);background-color:rgba(var(--thm-black-rgb),.9);content:\"\"}.help-them-bg.jarallax div div{filter:grayscale(100%)}.help-them__top{border-bottom:1px solid hsla(0,0%,100%,.1);margin-bottom:93px;padding-bottom:96px}.help-them__top,.help-them__top-content{display:block;position:relative}.help-them__top-content-title{color:#fff;font-size:70px;font-weight:900;line-height:80px}.help-them__top-video-box{display:block;margin-left:76px;position:relative}.help-them__top-video-btn{align-items:center;border:2px solid #fff;border-radius:50px;color:#fff;display:flex;font-size:30px;height:100px;justify-content:center;transition:all .5s ease;width:100px}.help-them__top-video-btn:hover{background-color:#3382b8;background-color:var(--thm-primary);border-color:#3382b8;border-color:var(--thm-primary);color:#fff}.help-them__top-video-text{color:#3382b8;color:var(--thm-primary);font-family:\"reeyregular\";font-family:var(--thm-reey-font);font-size:30px;font-weight:400;margin-bottom:0;margin-left:54px;margin-top:17px}.help-them__bottom{display:block;position:relative}.help-them__single{display:flex}.help-them__icon{display:block;position:relative;top:7px}.help-them__icon span{color:#3382b8;color:var(--thm-primary);display:block;font-size:65px;line-height:65px;position:relative;transition:all .5s linear;transition-delay:.1s}.help-them__single:hover .help-them__icon span{transform:rotate(1turn)}.help-them__text{margin-left:30px}.help-them__text h3{color:#fff;font-size:20px;font-weight:900;line-height:30px;margin-bottom:12px}.help-them__text p{color:#fff;font-size:16px;margin:0}.news-one{display:block;padding:100px 0;position:relative}.news-one .section-title{margin-bottom:46px}.news-one__btn{background:#eff5f4;color:#1f2230;color:var(--thm-black);float:right;margin-top:44px}.news-one__img,.news-one__left{display:block;position:relative}.news-one__img{overflow:hidden}.news-one__img>img{position:relative;transform:scale(1);transition:transform .5s ease;width:100%}.news-one__img:hover img{transform:scale(1.05)}.news-one__img>a{align-items:center;background-color:rgba(31,34,48,.9);background-color:rgba(var(--thm-black-rgb),.9);bottom:0;color:#000;display:flex;font-size:26px;justify-content:center;left:0;opacity:0;position:absolute;right:0;top:0;transform:translateY(-30%);transition:opacity .5s ease,visibility .5s ease,transform .5s ease;visibility:hidden}.news-one__img>a>i{color:#3382b8;color:var(--thm-primary);transition:all .5s ease}.news-one__img>a>i:hover{color:#fff}.news-one__img:hover a{opacity:1;transform:translateY(0);visibility:visible}.news-one__bottom{background-color:#3382b8;background-color:var(--thm-primary);display:block;padding:31px 72px 34px 40px;position:relative}.news-one__meta{align-items:center;display:flex;margin:0 0 11px}.news-one__meta li{color:#fff;font-size:14px;font-weight:800}.news-one__meta li+li{margin-left:12px}.news-one__meta li a{color:#fff;transition:all .5s ease}.news-one__meta li a:hover{color:#1f2230;color:var(--thm-black)}.news-one__title{color:#fff;font-size:26px;font-weight:900;line-height:36px}.news-one__title a{color:#fff;transition:all .5s ease}.news-one__title a:hover{color:#1f2230;color:var(--thm-black)}.news-one__right{display:block;position:relative}.news-one__right-single{display:flex}.news-one__right-single+.news-one__right-single{margin-top:30px}.news-one__right-img{display:block;overflow:hidden;position:relative;width:100%}@media (min-width:992px){.news-one__right-img{max-width:270px}}.news-one__right-img>img{position:relative;transform:scale(1);transition:transform .5s ease;width:100%}.news-one__right-single:hover .news-one__right-img>img{transform:scale(1.05)}.news-one__right-img>a{align-items:center;background-color:rgba(31,34,48,.9);background-color:rgba(var(--thm-black-rgb),.9);bottom:0;color:#000;display:flex;font-size:25px;justify-content:center;left:0;opacity:0;position:absolute;right:0;top:0;transform:translateY(-30%);transition:opacity .5s ease,visibility .5s ease,transform .5s ease;visibility:hidden}.news-one__right-single:hover .news-one__right-img>a{opacity:1;transform:translateY(0);visibility:visible}.news-one__right-img>a>i{color:#3382b8;color:var(--thm-primary);transition:all .5s ease}.news-one__right-img>a>i:hover{color:#fff}.news-one__right-content{margin-left:30px;margin-top:-9px}.news-one__right-meta{align-items:center;display:flex;margin:0 0 11px}.news-one__right-meta li{color:#3382b8;color:var(--thm-primary);font-size:14px;font-weight:800}.news-one__right-meta li+li{margin-left:12px}.news-one__right-meta li span{color:#1f2230;color:var(--thm-black)}.news-one__right-meta li a{color:#707876;color:var(--thm-gray);transition:all .5s ease}.news-one__right-meta li a:hover{color:#3382b8;color:var(--thm-primary)}.news-one__right-title{color:#1f2230;color:var(--thm-black);font-size:26px;font-weight:900;line-height:36px}.news-one__right-title a{color:#1f2230;color:var(--thm-black);transition:all .5s ease}.news-one__right-title a:hover{color:#3382b8;color:var(--thm-primary)}.brand-one{background-color:#eff5f4;padding:60px 0}.brand-one,.brand-one__carousel,.brand-one__single{display:block;position:relative}.brand-one__single{text-align:center;z-index:1}.brand-one__single:before{background-color:#fff;bottom:0;content:\"\";left:0;opacity:0;position:absolute;right:0;top:0;transition:.5s;z-index:-1}.brand-one__single:hover:before{opacity:1}.brand-one__img{display:inline-block;position:relative;z-index:10}.brand-one__img>img{opacity:.3;position:relative;transition:.5s}.brand-one__single:hover .brand-one__img>img{opacity:.7}.site-footer{display:block;padding:92px 0 0;position:relative}.site-footer-bg{background-position:0 100%;background-repeat:no-repeat;background-size:cover;filter:grayscale(0)}.site-footer-bg,.site-footer-bg:before{height:100%;left:0;position:absolute;top:0;width:100%}.site-footer-bg:before{background-color:rgba(31,34,48,.95);content:\"\"}.site-footer__top{display:block;position:relative}.footer-widget__title{color:#fff;font-size:22px;font-weight:900;line-height:32px;margin-bottom:20px}.footer-widget__text{color:#b8bbc9;font-size:16px;line-height:34px;margin:0}.footer-widget__about-btn{background:#3382b8;background:var(--thm-primary);color:#fff;display:inline-block;font-size:14px;font-weight:900;margin-top:18px;padding:7px 20px;transition:all .5s ease}.footer-widget__about-btn i{margin-right:7px;position:relative;top:2px}.footer-widget__about-btn:hover{background:#fff;color:#3382b8;color:var(--thm-primary)}.footer-widget__explore-list{display:block;float:left;position:relative}.footer-widget__explore-list li+li{margin-top:10px}.footer-widget__explore-list li a{color:#b8bbc9;font-size:16px;font-weight:700;transition:all .5s ease}.footer-widget__explore-list li a:hover{color:#3382b8;color:var(--thm-primary)}.footer-widget__explore-list-two{display:block;float:left;margin-left:75px;position:relative}.footer-widget__explore-list-two li+li{margin-top:10px}.footer-widget__explore-list-two li a{color:#b8bbc9;font-size:16px;font-weight:700;transition:all .5s ease}.footer-widget__explore-list-two li a:hover{color:#3382b8;color:var(--thm-primary)}.footer-widget__contact-list{margin:0;padding-top:11px}.footer-widget__contact-list li{align-items:center;border-bottom:1px solid hsla(0,0%,100%,.1);display:flex;margin-bottom:16px;padding-bottom:15px}.footer-widget__contact-list li:last-child{border-bottom:0;margin-bottom:0;padding-bottom:0}.footer-widget__contact-list li .icon i{color:#3382b8;color:var(--thm-primary);font-size:35px;line-height:35px}.footer-widget__contact-list li .text{margin-left:15px}.footer-widget__contact-list li .text p{color:#fff;font-size:16px;font-weight:800;line-height:20px;margin:0}.footer-widget__contact-list li .text p span{color:#afb2c0;display:block;font-size:14px;font-weight:700}.footer-widget__contact-list li .text p a{color:#fff;font-size:16px;font-weight:800;transition:all .5s ease}.footer-widget__contact-list li .text p a:hover{color:#3382b8;color:var(--thm-primary)}.footer-widget__newsletter-text{color:#b8bbc9;font-size:16px;line-height:34px;margin:0}.footer-widget__newsletter-form{display:block;margin-top:18px;position:relative}.footer-widget__newsletter-form input[type=email]{color:#707876;color:var(--thm-gray);font-size:14px;font-weight:700;height:67px;outline:none;padding-left:30px;padding-right:120px;width:100%}.footer-widget__newsletter-btn{background:#3382b8;background:var(--thm-primary);border:none;color:#fff;display:inline-block;font-size:14px;font-weight:900;outline:none;padding:7px 20px;position:absolute;right:12px;top:50%;transform:translateY(-50%);transition:all .5s ease}.footer-widget__newsletter-btn i{margin-right:5px}.footer-widget__newsletter-btn:hover{background:#1f2230;background:var(--thm-black)}.site-footer__bottom{background:#1b1e2b;display:block;margin-top:87px;position:relative;z-index:1}.site-footer__bottom:before{background:#1b1e2b;bottom:0;content:\"\";left:0;position:absolute;right:-10000000000px;top:0;z-index:-1}.site-footer__bottom-inner{justify-content:space-between}.site-footer__bottom-inner,.site-footer__bottom-logo-social,.site-footer__bottom-social{align-items:center;display:flex}.site-footer__bottom-social{margin-left:60px}.site-footer__bottom-social a{align-items:center;background-color:#fff;border-radius:50%;color:#1f2230;color:var(--thm-black);display:flex;font-size:13px;height:35px;justify-content:center;text-align:center;transition:all .5s ease;width:35px}.site-footer__bottom-social a+a{margin-left:10px}.site-footer__bottom-social a:hover{background:#3382b8;background:var(--thm-primary);color:#fff}.site-footer__bottom-logo{background-color:#3382b8;background-color:var(--thm-primary);padding:4px 100px}.site-footer__bottom-copy-right p{color:#b8bbc9;font-size:16px;margin:0}.site-footer__bottom-copy-right p a{color:#b8bbc9;transition:all .5s ease}.site-footer__bottom-copy-right p a:hover{color:#fff}.introduction{padding:100px 0}.introduction,.introduction__img,.introduction__left{display:block;position:relative}.introduction__img>img{width:100%}.introduction__content{background:#eff5f4;display:block;padding:40px 50px;position:relative}.introduction__text{color:#1f2230;color:var(--thm-black);font-size:26px;font-weight:900;line-height:39px;margin:0}.introduction__right{display:block;margin-left:40px;position:relative}.introduction__right .section-title{margin-bottom:20px}.introduction__right-text{font-size:16px;line-height:33px;margin:0}.introduction__icon-wrap{display:block;margin:29px 0 27px;padding:0;position:relative}.introduction__icon-wrap-single{display:block;padding-left:117px;position:relative}.introduction__icon-wrap-single+.introduction__icon-wrap-single{margin-top:36px}.introduction__icon-box{align-items:center;background:#3382b8;background:var(--thm-primary);border-radius:50%;color:#fff;display:flex;font-size:40px;height:88px;justify-content:center;left:0;position:absolute;top:0;transition:all .5s ease;width:88px}.introduction__icon-wrap-single:hover .introduction__icon-box{background-color:#1f2230;background-color:var(--thm-black);color:#fff}.introduction__content-box h2{font-size:22px;font-weight:900;line-height:32px;margin-bottom:10px}.introduction__content-box p{font-size:16px;margin:0}.four-icon{padding:0 0 68px}.four-icon,.four-icon__single{display:block;position:relative}.four-icon__single{margin-bottom:100px}.four-icon__img{display:block;overflow:hidden;position:relative}.four-icon__img:before{background-color:rgba(31,34,48,.8);background-color:rgba(var(--thm-black-rgb),.8);content:\"\";height:100%;left:0;position:absolute;top:0;transition:opacity .5s ease,visibility .5s ease,transform .5s ease;width:100%;z-index:1}.four-icon__single:hover .four-icon__img:before{opacity:0}.four-icon__img:after{background-color:rgba(21,200,160,.9);background-color:rgba(var(--thm-primary-rgb),.9);content:\"\";height:100%;left:0;opacity:0;position:absolute;top:0;transform:translateY(-100%);transition:opacity .5s ease,visibility .5s ease,transform .5s ease;width:100%;z-index:1}.four-icon__single:hover .four-icon__img:after{opacity:1;transform:translateY(0)}.four-icon__img>img{filter:grayscale(100%);transform:scale(1);transition:transform .5s ease;width:100%}.four-icon__single:hover .four-icon__img>img{transform:scale(1.05)}.four-icon__content-box{bottom:0;left:0;padding:32px 50px 40px;position:absolute;right:0;text-align:center;top:0;z-index:3}.four-icon__title{color:#fff;font-size:26px;font-weight:900;line-height:36px;margin-bottom:11px}.four-icon__text{color:#fff;font-size:16px;line-height:34px;margin:0}.four-icon__bottom-icon{align-items:center;background:#fff;border-radius:50%;bottom:-68px;color:#3382b8;color:var(--thm-primary);display:flex;font-size:65px;height:135px;justify-content:center;left:50%;position:absolute;transform:translateX(-50%);transition:all .5s ease;width:135px;z-index:1}.four-icon__single:hover .four-icon__bottom-icon{background:#1f2230;background:var(--thm-black)}.we-inspire{display:block;padding:100px 0 50px;position:relative}.we-inspire-bg{background-repeat:no-repeat;background-size:cover;bottom:0;filter:grayscale(100%);left:0;position:absolute;right:0;top:0}.we-inspire-bg-overlay{background-color:rgba(31,34,48,.92);background-color:rgba(var(--thm-black-rgb),.92);content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}.we-inspire__left{display:block;position:relative}.we-inspire__left .section-title{margin-bottom:32px}.we-inspire__left .section-title__tagline,.we-inspire__left .section-title__title{color:#fff}.we-inspire__faq{background:#1f2230;background:var(--thm-black);border:1px solid hsla(0,0%,100%,.1);border-bottom:0;display:block;position:relative}.faq-one-accrodion .accrodion{background-color:transparent;border:none;display:block;margin:0;position:relative;transition:all .5s ease}.faq-one-accrodion .accrodion-title{background:#1f2230;background:var(--thm-black);border-bottom:1px solid hsla(0,0%,100%,.1);cursor:pointer;display:block;padding:24px 30px;position:relative;transition:all .2s linear;transition-delay:.1s}.faq-one-accrodion .accrodion-title h4{color:#fff;font-family:\"Nunito\",sans-serif;font-family:var(--thm-font);font-size:18px;font-weight:900;line-height:28px;margin:0;padding:0;position:relative;transition:all .5s ease}.faq-one-accrodion .accrodion.is-active .accrodion-title{border-bottom:0}.faq-one-accrodion .accrodion.is-active .accrodion-title h4{color:#3382b8;color:var(--thm-primary)}.faq-one-accrodion .accrodion-title h4:before{color:#fff;content:\"\\f067\";font-family:\"Font Awesome 5 Free\";font-size:12px;font-weight:900;position:absolute;right:0;top:50%;transform:translateY(-50%);transition:all .5s ease}.faq-one-accrodion .accrodion-title h4:before,.faq-one-accrodion .accrodion.is-active .accrodion-title h4:before{align-items:center;border-radius:50%;display:flex;height:35px;justify-content:center;text-align:center;width:35px}.faq-one-accrodion .accrodion.is-active .accrodion-title h4:before{color:#3382b8;color:var(--thm-primary);content:\"\\f068\"}.faq-one-accrodion .accrodion-content{position:relative}.faq-one-accrodion .accrodion-content .inner{border-bottom:1px solid hsla(0,0%,100%,.1);margin-top:-10px;padding:0 30px 21px}.faq-one-accrodion .accrodion-content p{color:#b8bbc9;font-size:16px;margin:0}.we-inspire__right{display:block;margin-left:70px;position:relative}.we-inspire__img{display:block;margin-right:-362px;margin-top:-100px;position:relative}.we-inspire__img>img{width:100%}.events-one{padding:100px 0}.events-one,.events-one__left{display:block;position:relative}.events-one__left{margin-right:69px}.events-one__left .section-title{margin-bottom:25px}.events-one__text{font-size:16px;margin:0}.events-one__btn{margin-top:40px}.events-one__right{display:block;margin-left:-30px;position:relative}.events-one__carousel .tns-controls,.events-one__carousel.owl-theme .owl-nav{bottom:-100px;margin:0;position:absolute;right:-5px}.events-one__carousel .tns-controls button[data-controls=next],.events-one__carousel.owl-theme .owl-nav .owl-next{background:#eff5f4;border:0;border-radius:50%;color:#1f2230;color:var(--thm-black);font-size:23px;height:65px;margin-left:10px;text-align:center;-webkit-transition:all .5s ease;transition:all .5s ease;width:65px}.events-one__carousel .tns-controls button[data-controls=prev],.events-one__carousel.owl-theme .owl-nav .owl-prev{background:#eff5f4;border:0;border-radius:50%;color:#1f2230;color:var(--thm-black);font-size:23px;height:65px;text-align:center;transform:rotate(180deg);transition:all .5s ease;width:65px}.events-one__carousel.owl-theme .owl-nav .owl-next span,.events-one__carousel.owl-theme .owl-nav .owl-prev span{line-height:65px}.events-one__carousel .tns-controls button:hover,.events-one__carousel.owl-theme .owl-nav .owl-next:hover,.events-one__carousel.owl-theme .owl-nav .owl-prev:hover{background:#3382b8;background:var(--thm-primary);color:#fff}.events-one__carousel.owl-theme .owl-nav .owl-next:focus,.events-one__carousel.owl-theme .owl-nav .owl-prev:focus{outline:none}.events-one__carousel .owl-stage-outer,.events-one__carousel .tns-ovh{overflow:visible}.events-one__carousel .owl-item,.events-one__carousel .tns-item{opacity:0;transition:opacity .5s ease,visibility .5s ease;visibility:hidden}.events-one__carousel .owl-item.active,.events-one__carousel .tns-slide-active{opacity:1;visibility:visible}.events-one__single{display:block;position:relative;transition:all .5s ease}.events-one__single:hover{box-shadow:20px 20px 20px rgba(0,0,0,.2)}.events-one__img{display:block;position:relative}.events-one__img>img{width:100%}.events-one__date-box{align-items:center;background:#3382b8;background:var(--thm-primary);display:flex;height:70px;justify-content:center;left:30px;position:absolute;top:0;width:70px}.events-one__date-box>p{color:#fff;font-size:16px;font-weight:800;line-height:20px;margin:0}.events-one__bottom{bottom:21px;left:30px;position:absolute}.events-one__bottom>p{color:#fff;font-size:14px;font-weight:800;margin:0}.events-one__bottom>p>i{margin-right:5px}.events-one__bottom-title{color:#fff;font-size:22px;font-weight:800;line-height:32px}.events-one__bottom-title a{color:#fff;transition:all .5s ease}.events-one__bottom-title a:hover{color:#3382b8;color:var(--thm-primary)}.become-volunteer{background-color:#3382b8;background-color:var(--thm-primary);display:block;padding:89px 0 86px;position:relative}.become-volunteer__inner{align-items:center;display:flex;justify-content:space-between}.become-volunteer__left{display:block;position:relative}.become-volunteer__left>h2{color:#fff;font-size:50px;font-weight:900;line-height:60px}.become-volunteer__big-text{left:0;opacity:.2;position:absolute;top:-19px}.become-volunteer__big-text>h2{color:#fff;font-family:\"reeyregular\";font-family:var(--thm-reey-font);font-size:50px;line-height:60px}.become-volunteer__btn{background:#fff;color:#1f2230;color:var(--thm-black)}.causes-two{display:block;padding:100px 0 140px;position:relative}.causes-two:before{background-color:#eff5f4;content:\"\";height:510px;left:0;position:absolute;right:0;top:0}.causes-two .container-box{display:block;margin:0 auto;max-width:1600px;padding-left:15px;padding-right:15px;position:relative;width:100%}.causes-two .section-title{margin-bottom:34px}.causes-two__carousel .owl-stage-outer,.causes-two__carousel .tns-ovh{overflow:visible;padding-top:30px}.causes-two__carousel .tns-item{opacity:0;transition:all .5s ease;visibility:hidden}.causes-two__carousel .tns-slide-active{opacity:1;visibility:visible}.causes-two__carousel .tns-nav,.causes-two__carousel.owl-carousel .owl-dots{bottom:-49px;left:0;margin:0;position:absolute;right:0;text-align:center}.causes-two__carousel .tns-nav button,.causes-two__carousel.owl-carousel .owl-dots .owl-dot{background:#1f2230;background:var(--thm-black);border-radius:50%;display:inline-block;height:10px;margin:0 3px;opacity:.5;padding:0;position:relative;transition:all .1s linear;transition-delay:.1s;width:10px}.causes-two__carousel .tns-nav button.tns-nav-active,.causes-two__carousel.owl-carousel .owl-dot.active{opacity:1}.causes-two__carousel.owl-carousel .owl-dot:focus{outline:none}.causes-two__carousel.owl-carousel .owl-dots .owl-dot span{display:none}.counters-one{display:block;position:relative;z-index:5}.counters-one__box{background-color:#fff;box-shadow:0 0 60px 0 rgba(0,0,0,.07);display:block;margin:0;padding:47px 0 51px;position:relative}.counter-one__single{display:inline-block;max-width:284px;position:relative;text-align:center;width:100%}.counter-one__single:before{background-color:#e5eeec;bottom:6px;content:\"\";left:0;position:absolute;top:10px;width:1px}.counter-one__single:first-child:before{display:none}.counter-one__single h3{display:inline-block;font-family:\"Nunito\",sans-serif!important;font-family:var(--thm-font)!important}.counter-one__letter,.counter-one__single h3{color:#3382b8;color:var(--thm-primary);font-size:50px;font-weight:900;vertical-align:middle}.counter-one__text{font-weight:800;margin:0}.news-two{display:block;margin-top:-50px;padding:150px 0 70px;position:relative}.news-two-bg{background-repeat:no-repeat;background-size:cover;right:0;z-index:-1}.news-two-bg,.news-two-bg-overlay{height:644px;left:0;position:absolute;top:0}.news-two-bg-overlay{background-color:rgba(31,34,48,.9);background-color:rgba(var(--thm-black-rgb),.9);content:\"\";width:100%}.news-two-bg.jarallax div div{filter:grayscale(100%)}.news-two .section-title{margin-bottom:35px;position:relative;z-index:5}.news-two .section-title__tagline{color:#3382b8;color:var(--thm-primary)}.news-two .section-title__title{color:#fff}.news-two__single{margin-bottom:30px}.news-two__img,.news-two__img-box,.news-two__single{display:block;position:relative}.news-two__img{overflow:hidden}.news-two__img>img{position:relative;transform:scale(1);transition:transform .5s ease;width:100%}.news-two__single:hover .news-two__img>img{transform:scale(1.05)}.news-two__img>a{align-items:center;background-color:rgba(21,200,160,.9);background-color:rgba(var(--thm-primary-rgb),.9);bottom:0;color:#fff;display:flex;font-size:26px;justify-content:center;left:0;opacity:0;position:absolute;right:0;top:0;transform:translateY(-30%);transition:opacity .5s ease,visibility .5s ease,transform .5s ease;visibility:hidden}.news-two__img>a>i{color:#fff;transition:all .5s ease}.news-two__img>a>i:hover{color:#fff}.news-two__single:hover .news-two__img>a{opacity:1;transform:translateY(0);visibility:visible}.news-two__date{background:#3382b8;background:var(--thm-primary);bottom:-10px;padding:4px 20px;position:absolute;right:20px;z-index:2}.news-two__date>p{color:#fff;font-size:14px;font-weight:800;margin:0}.news-two__content{background:#fff;border:1px solid #e5eeec;border-top:0;display:block;padding:30px 40px;position:relative;transition:all .5s ease}.news-two__single:hover .news-two__content{background-color:#fff;box-shadow:0 10px 60px 0 rgba(0,0,0,.07)}.news-two__meta{align-items:center;display:flex;margin:0;padding:0}.news-two__meta li+li{margin-left:12px}.news-two__meta li a{color:#707876;color:var(--thm-gray);font-size:14px;font-weight:800}.news-two__meta li a i{color:#3382b8;color:var(--thm-primary)}.news-two__content h3{font-size:26px;font-weight:900;line-height:36px;margin-bottom:11px}.news-two__content h3 a{color:#1f2230;color:var(--thm-black);transition:all .5s ease}.news-two__content h3 a:hover{color:#3382b8;color:var(--thm-primary)}.news-two__text{font-size:16px;margin:0}.gallery-two{padding-bottom:100px}.feature-one{background-color:#1f2230;background-color:var(--thm-black);display:block;padding:93px 0;position:relative}.feature-one__single{align-items:center;display:flex;position:relative}.feature-one__single:before{background:hsla(0,0%,100%,.1);bottom:6px;content:\"\";left:-60px;position:absolute;top:6px;width:1px}.feature-one__icon span{color:#3382b8;color:var(--thm-primary);display:inline-block;font-size:67px;line-height:67px;position:relative;transition:all .2s linear;transition-delay:.1s}.feature-one__content{margin-left:30px}.feature-one__content h3{color:#fff;font-size:20px;font-weight:900;line-height:30px;margin-bottom:17px}.feature-one__content p{color:#b8bbc9;font-size:16px;margin:0}.feature-one__single-1{margin-right:68px}.feature-one__single-2{margin-left:33px;margin-right:35px}.feature-one__single-3{margin-left:68px}.feature-one__single-1:before{display:none}.feature-one__single-2 .feature-one__icon span{color:#ebad35}.feature-one__single-3 .feature-one__icon span{color:#ce5140}.feature-one__single:hover .feature-one__icon span{transform:scale(1.2)}.help-them-two{padding:100px 0 19px}.help-them-two,.help-them-two__left{display:block;position:relative}.help-them-two-bg{background-repeat:no-repeat;background-size:cover;bottom:-100px;left:-362px;position:absolute;right:0;top:-100px;width:562px}.help-them-two-bg:before{background-color:rgba(21,200,160,.9);background-color:rgba(var(--thm-primary-rgb),.9);content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}.help-them-two__img{display:block;position:relative}.help-them-two__img>img{width:100%}.help-them-two__video-btn{align-items:center;background:#fff;bottom:0;color:#1f2230;color:var(--thm-black);display:flex;font-size:25px;height:135px;justify-content:center;left:20px;position:absolute;transition:all .5s ease;width:160px;z-index:2}.help-them-two__video-btn:before{border-left:20px solid #3382b8;border-left:20px solid var(--thm-primary);border-right:20px solid #3382b8;border-right:20px solid var(--thm-primary);border-top:20px solid #3382b8;border-top:20px solid var(--thm-primary);bottom:0;content:\"\";left:-20px;position:absolute;right:-20px;top:-20px}.help-them-two__video-btn:hover{background:#1f2230;background:var(--thm-black);color:#3382b8;color:var(--thm-primary)}.help-them-two__right{display:block;margin-left:40px;position:relative}.help-them-two__right .section-title{margin-bottom:25px}.help-them-two__list-box{display:block;overflow:hidden;position:relative}.help-them-two__list{display:block;float:left;margin:0 36px 0 0;padding:0;position:relative}.help-them-two__list li{align-items:center;display:flex}.help-them-two__list li+li{margin-top:9px}.help-them-two__icon-box i{color:#3382b8;color:var(--thm-primary);font-size:15px}.help-them-two__text-box{margin-left:5px}.help-them-two__text-box h4{font-size:16px;font-weight:900;line-height:26px}.help-them-two__list-two{margin-right:0}.help-them-two__bottom{display:block;margin-top:35px;position:relative}.help-them-two__bottom-title{color:#3382b8;color:var(--thm-primary);font-size:24px;font-weight:900;line-height:34px;margin-bottom:32px}.help-them-two__bottom-text{font-size:16px;margin:0}.help-them-two__donation-text-box{display:inline-block;margin-top:63px;position:relative}.help-them-two__donation-text-box h2{color:#3382b8;color:var(--thm-primary);font-family:\"reeyregular\";font-family:var(--thm-reey-font);font-size:40px;font-weight:400;line-height:50px}.help-them-two__donation-icon{left:100%;position:absolute;top:-23px}.causes-three{display:block;padding:100px 0 140px;position:relative}.causes-three__top{align-items:center;display:flex;justify-content:space-between;margin-bottom:34px}.causes-three__top-title,.causes-three__top-title .section-title{margin-bottom:0}.causes-three__top-btn{background:#eff5f4;color:#1f2230;color:var(--thm-black)}.causes-three__carousel .owl-stage-outer,.causes-three__carousel .tns-ovh{margin-right:-360px;padding-top:30px}.causes-three__carousel .tns-nav,.causes-three__carousel.owl-carousel .owl-dots{bottom:-49px;left:0;margin:0;position:absolute}.causes-three__carousel .tns-nav button,.causes-three__carousel.owl-carousel .owl-dots .owl-dot{background:#1f2230;background:var(--thm-black);border-radius:50%;display:inline-block;height:10px;margin:0 3px;opacity:.5;padding:0;position:relative;transition:all .1s linear;transition-delay:.1s;width:10px}.causes-three__carousel .tns-nav button.tns-nav-active,.causes-three__carousel.owl-carousel .owl-dot.active{opacity:1}.causes-three__carousel.owl-carousel .owl-dot:focus{outline:none}.causes-three__carousel.owl-carousel .owl-dots .owl-dot span{display:none}.brand-three{background-color:#3382b8;background-color:var(--thm-primary)}.testimonial-two{background-color:#eff5f4;display:block;overflow:hidden;padding:100px 0 70px;position:relative}.testimonial-two .section-title{margin-bottom:35px}.testimonial-two__single{margin-bottom:30px}.counters-two{display:block;padding:100px 0 146px;position:relative}.counters-two-bg,.counters-two-bg:before{height:100%;left:0;position:absolute;top:0;width:100%}.counters-two-bg:before{background-color:rgba(31,34,48,.9);background-color:rgba(var(--thm-black-rgb),.9);content:\"\"}.counters-two-bg.jarallax div div{filter:grayscale(100%)}.counters-two__left{display:block;position:relative}.counters-two__left .section-title{margin-bottom:0}.counters-two__left .section-title__title{color:#fff}.counters-two__four-boxes{margin:0;padding:0}.counters-two__four-boxes li{display:inline-block;margin-right:15px;position:relative;text-align:center}.counters-two__four-boxes li:last-child{margin-right:0}.counters-two__four-boxes-icon{align-items:center;background:#1f2230;background:var(--thm-black);border:1px solid #4b4e5a;color:#3382b8;color:var(--thm-primary);display:flex;font-size:67px;height:145px;justify-content:center;transition:all .5s ease;width:152px}.counters-two__four-boxes li:hover .counters-two__four-boxes-icon{background:#3382b8;background:var(--thm-primary);border:1px solid #3382b8;border:1px solid var(--thm-primary);color:#fff}.counters-two__four-boxes li h4{color:#fff;font-size:20px;font-weight:900;line-height:24px;margin-top:16px}.need-help{display:block;margin-top:-50px;position:relative}.need-help__inner{align-items:center;display:flex;justify-content:space-between}.need-help__content{background-color:#fdfdfe;box-shadow:0 0 30px 0 rgba(0,0,0,.06);display:block;padding:43px 55px 43px 50px;position:relative}.need-help__title{font-size:24px;font-weight:900;line-height:34px;margin-bottom:12px}.need-help__text{font-size:16px;margin:0}.team-one{display:block;padding:100px 0 70px;position:relative}.team-one .section-title{margin-bottom:35px}.team-one .row{--bs-gutter-x:135px}.team-one__single{margin-bottom:30px}.team-one__img,.team-one__img-box,.team-one__single{display:block;position:relative}.team-one__img{background-color:#1f2230;background-color:var(--thm-black)}.team-one__img>img{mix-blend-mode:luminosity;transition:.5s ease;width:100%}.team-one__single:hover .team-one__img>img{mix-blend-mode:normal}.team-one__member-name{bottom:-34px;position:absolute;right:20px}.team-one__member-name h2{color:#3382b8;color:var(--thm-primary);font-family:\"reeyregular\";font-family:var(--thm-reey-font);font-size:50px;font-weight:400}.team-one__content{display:block;margin-bottom:20px;margin-top:53px;position:relative}.team-one__member-title{font-size:20px;font-weight:800;line-height:30px}.team-one__text-box{font-size:16px;margin:0}.team-one__social,.team-one__social a{align-items:center;display:flex}.team-one__social a{background-color:#e5eeec;border-radius:50%;color:#1f2230;color:var(--thm-black);font-size:13px;height:35px;justify-content:center;text-align:center;transition:all .5s ease;width:35px}.team-one__social a+a{margin-left:10px}.team-one__social a:hover{background:#3382b8;background:var(--thm-primary);color:#fff}.why-choose{background-color:#eff5f4;display:block;padding:100px 0;position:relative}.why-choose-bg{background-repeat:no-repeat;background-size:cover;bottom:0;filter:grayscale(100%);left:0;opacity:.08;position:absolute;top:0;width:865px}.why-choose__left{display:block;margin-right:70px;position:relative}.why-choose__left .section-title{margin-bottom:25px}.why-choose__left-bottom{display:block;overflow:hidden;position:relative}.why-choose__left-text-box{display:block;float:left;max-width:298px;position:relative}.why-choose__left-text{line-height:34px;margin:0}.why-choose__left-signature{color:#3382b8;color:var(--thm-primary);font-family:\"reeyregular\";font-family:var(--thm-reey-font);font-size:30px;font-weight:400;margin-top:40px}.why-choose__left-list-box{display:block;float:right;margin-left:69px;overflow:hidden;position:relative}.why-choose__left-list{margin-bottom:0;padding:0}.why-choose__left-list li{align-items:center;display:flex}.why-choose__left-list li+li{margin-top:10px}.why-choose__left-list li .icon i{color:#3382b8;color:var(--thm-primary);font-size:15px}.why-choose__left-list li .text{margin-left:10px}.why-choose__left-list li .text h5{font-size:18px;font-weight:900}.why-choose__right{display:block;margin-left:-30px;position:relative}.why-choose__urgent{background-color:#3382b8;background-color:var(--thm-primary);display:block;padding:52px 60px 60px;position:relative}.why-choose__urgent-title{color:#fff;font-size:24px;font-weight:900;line-height:28px;margin-bottom:15px}.why-choose__urgent-text{color:#fff;font-size:16px;margin:0}.why-choose__progress{display:block;margin-top:50px;position:relative;width:100%}.why-choose__progress .bar{background:#1f2230;background:var(--thm-black);border-radius:5px;height:10px;margin-bottom:6px;position:relative;width:100%}.why-choose__progress .bar-inner{background:#fff;border-radius:5px;display:block;height:10px;position:relative;transition:all 1.5s ease;width:0}.why-choose__progress .count-text{background:#fff;bottom:20px;color:#1f2230;color:var(--thm-black);font-size:12px;font-weight:800;height:20px;line-height:20px;opacity:0;position:absolute;right:-40px;text-align:center;transition:all .5s ease;width:40px}.why-choose__progress .bar-inner.counted .count-text{opacity:1}.why-choose__progress .count-text:after{border-right:7px solid transparent;border-top:5px solid #fff;content:\"\";left:0;position:absolute;top:100%}.why-choose__goals{align-items:center;display:flex;justify-content:space-between}.why-choose__goals>p{color:#fff;font-size:14px;margin:0}.why-choose__goals>p>span{color:#fff;font-size:20px;font-weight:900;line-height:30px}.why-choose__right-btn{background:#1f2230;background:var(--thm-black);color:#fff;display:inline-block;font-size:14px;font-weight:900;margin-top:31px;padding:7px 20px;transition:all .5s ease}.why-choose__right-btn i{font-size:12px;margin-right:7px}.why-choose__right-btn:hover{background:#fff;color:#3382b8;color:var(--thm-primary)}.why-choose__right-category{background:#1f2230;background:var(--thm-black);left:-10px;line-height:27px;padding:0 20px;position:absolute;top:10px}.why-choose__right-category span{color:#fff;font-size:14px;font-weight:800}.news-three{display:block;position:relative}.news-three .section-title__title{color:#1f2230;color:var(--thm-black)}.page-header{display:block;position:relative}.page-header__bg{background-repeat:no-repeat;background-size:cover;bottom:0;left:0;position:absolute;right:0;top:0}.page-header__bg:before{background-color:rgba(31,34,48,.3);background-color:rgba(var(--thm-black-rgb),.3);content:\"\";height:100%;left:0;position:absolute;top:0;width:100%}.page-header .container{padding-bottom:132px;padding-top:134px;position:relative;z-index:10}.page-header .container h2{color:#fff;font-size:70px;font-weight:900;margin:0}@media (max-width:480px){.page-header .container h2{font-size:30px}}.thm-breadcrumb{align-items:center;background-color:#fff;bottom:0;display:flex;justify-content:center;margin-bottom:0;padding:11px 40px;position:absolute;right:0}.thm-breadcrumb li{align-items:center;color:#1f2230;color:var(--thm-black);display:flex;font-size:16px;font-weight:900;line-height:26px}.thm-breadcrumb li:not(:last-of-type){margin-right:13px}.thm-breadcrumb li a{color:inherit}.thm-breadcrumb li span{color:#3382b8;color:var(--thm-primary);display:block;line-height:26px}.thm-breadcrumb li.color-thm-gray{color:#e5eeec}.causes-page{display:block;padding:130px 0 40px;position:relative}.causes-page:before{display:none}.causes-page .causes-one__single{margin-bottom:60px}.causes-details{padding:100px 0}.causes-details,.causes-details__img,.causes-details__img-box,.causes-details__left-bar{display:block;position:relative}.causes-details__img-box>img{width:100%}.causes-details__category{background:#3382b8;background:var(--thm-primary);bottom:10px;left:-20px;line-height:27px;padding:0 20px;position:absolute}.causes-details__category span{color:#fff;font-size:14px;font-weight:800}.causes-details__progress{background:#eff5f4;display:block;padding:60px 30px 21px;position:relative;width:100%}.causes-details__progress .bar{background:#fff;border-radius:5px;height:10px;margin-bottom:6px;position:relative;width:100%}.causes-details__progress .bar-inner{background:#3382b8;background:var(--thm-primary);border-radius:5px;display:block;height:10px;position:relative;transition:all 1.5s ease;width:0}.causes-details__progress .count-text{background:#3382b8;background:var(--thm-primary);bottom:20px;color:#fff;font-size:12px;font-weight:800;height:20px;line-height:20px;opacity:0;position:absolute;right:-40px;text-align:center;transition:all .5s ease;width:40px}.causes-details__progress .bar-inner.counted .count-text{opacity:1}.causes-details__progress .count-text:after{border-right:7px solid transparent;border-top:5px solid #3382b8;border-top:5px solid var(--thm-primary);content:\"\";left:0;position:absolute;top:100%}.causes-details__goals{align-items:center;display:flex;justify-content:space-between}.causes-details__goals>p{font-size:14px;margin:0}.causes-details__goals>p>span{color:#1f2230;color:var(--thm-black);font-size:20px;font-weight:900;line-height:30px}.causes-details__text-box{display:block;margin-top:21px;position:relative}.causes-details__text-box h3{font-size:34px;font-weight:900;line-height:44px;margin-bottom:10px}.causes-details__text-1{font-size:16px;margin:0 0 31px}.causes-details__text-2{font-size:16px;margin:0}.causes-details__images-box{margin-top:40px}.causes-details__images-box,.causes-details__images-single{display:block;position:relative}.causes-details__images-single img{width:100%}.causes-details__summary{display:block;margin-top:39px;overflow:hidden;position:relative}.causes-details__summary-text{display:block;float:left;max-width:406px;overflow:hidden;position:relative}.causes-details__summary-text p{font-size:16px;margin:0}.causes-details__summary-list{display:block;float:right;overflow:hidden;position:relative}.causes-details__summary-list-box{margin:0;padding:0}.causes-details__summary-list-box li{align-items:center;display:flex}.causes-details__summary-list-box li+li{margin-top:10px}.causes-details__summary-list-box li .icon i{color:#3382b8;color:var(--thm-primary);font-size:15px}.causes-details__summary-list-box li .text{margin-left:10px}.causes-details__summary-list-box li .text p{color:#1f2230;color:var(--thm-black);font-size:18px;font-weight:900;margin:0}.causes-details__share{align-items:center;display:flex;margin-bottom:50px;margin-top:40px;position:relative}.causes-details__share-social{align-items:center;display:flex;margin-left:50px}.causes-details__share-social a{align-items:center;background-color:#e5eeec;border-radius:50%;color:#1f2230;color:var(--thm-black);display:flex;font-size:13px;height:35px;justify-content:center;text-align:center;transition:all .5s ease;width:35px}.causes-details__share-social a+a{margin-left:10px}.causes-details__share-social a:hover{background:#3382b8;background:var(--thm-primary);color:#fff}.causes-details__download{background:#eff5f4;justify-content:space-between;margin-bottom:44px;padding:50px}.causes-details__download,.causes-details__left{align-items:center;display:flex}.causes-details__left .icon>img{width:50px}.causes-details__left .text{margin-left:10px}.causes-details__left .text h4{font-size:26px;font-weight:900;line-height:36px}.comment-form__title,.comment-one__title{color:#1f2230;color:var(--thm-black);font-size:30px;font-weight:900;margin:0 0 20px}.comment-one__single{border-bottom:1px solid #e5eeec;display:flex;margin-bottom:50px;padding-bottom:40px}.comment-one__content{margin-left:30px;padding-right:102px;position:relative}.comment-one__content h3{color:#1f2230;color:var(--thm-black);font-size:20px;font-weight:900;margin:0 0 15px}.comment-one__content h3 span{color:#3382b8;color:var(--thm-primary);font-size:14px;font-weight:900;margin-left:4px}.comment-one__content p{font-size:16px;margin:0}.comment-one__btn{background:#3382b8;background:var(--thm-primary);color:#fff;font-size:14px;font-weight:900;line-height:40px;padding:2px 20px;position:absolute;right:0;top:0}.comment-one__btn:hover{background:#1f2230;background:var(--thm-black)}.comment-one__image img{width:119px}.comment-form .comment-form__title{margin-top:-8px}.comment-one__form{background-color:#eff5f4;display:block;padding:60px;position:relative}.comment-one__form .row{--bs-gutter-x:10px}.comment-form__input-box input[type=email],.comment-form__input-box input[type=text]{background-color:#fff;border:none;border-radius:0;box-shadow:0 0 30px 0 rgba(0,0,0,.07);color:#707876;color:var(--thm-gray);font-size:16px;font-weight:700;height:67px;margin-bottom:10px;outline:none;padding:0 30px;width:100%}.comment-form__input-box{display:block;line-height:0;position:relative}.comment-form__input-box textarea{background-color:#fff;border:none;border-radius:0;box-shadow:0 0 30px 0 rgba(0,0,0,.07);color:#707876;color:var(--thm-gray);font-size:16px;font-weight:700;height:192px;outline:none;padding:20px 30px 30px;width:100%}.comment-form__btn{background:#3382b8;background:var(--thm-primary);margin-top:10px}.comment-form__btn:hover{background:#1f2230;background:var(--thm-black)}.causes-details__organizer{background-color:#eff5f4;display:flex;padding:40px 39px 14px}.causes-details__organizer-img img{width:60px}.causes-details__organizer-content{margin-left:20px}.causes-details__organizer-content p{font-size:14px;font-weight:800;line-height:20px;margin:0}.causes-details__organizer-content h5{font-size:18px;font-weight:900;line-height:28px;margin-bottom:11px;margin-top:4px}.causes-details__organizer-content span{color:#3382b8;color:var(--thm-primary)}.causes-details__organizer-list li{color:#707876;color:var(--thm-gray);font-size:16px;font-weight:800}.causes-details__organizer-list li i{color:#3382b8;color:var(--thm-primary);font-size:14px;margin-right:14px}.causes-details__donations{background:#eff5f4;display:block;margin-top:30px;padding:40px 40px 14px;position:relative}.causes-details__donations-title{font-size:20px;font-weight:900;line-height:30px;margin-bottom:18px}.causes-details__donations-list{display:block;position:relative}.causes-details__donations-list li{align-items:center;display:flex;position:relative}.causes-details__donations-list li+li{margin-top:22px}.causes-details__donations-img img{border-radius:0}.causes-details__donations-content{margin-left:20px}.causes-details__donations-content h4{color:#3382b8;color:var(--thm-primary);font-size:18px;font-weight:900;line-height:28px;margin-bottom:3px}.causes-details__donations-content h5{font-size:18px;font-weight:800;line-height:26px}.causes-details__donations-content span{color:#707876;color:var(--thm-gray);font-size:14px;font-weight:800}.causes-details__donations-content p{font-size:16px;font-weight:800;margin:0}.news-page{padding:100px 0 70px}.news-details,.news-page{display:block;position:relative}.news-details{padding:100px 0}.news-details__img,.news-details__left{display:block;position:relative}.news-details__img img{width:100%}.news-details__content{display:block;padding:21px 0 0;position:relative}.news-details__meta{align-items:center;display:flex;margin:0}.news-details__meta li+li{margin-left:12px}.news-details__meta li a{color:#707876;color:var(--thm-gray);font-size:14px;font-weight:800;transition:all .5s ease}.news-details__meta li a i,.news-details__meta li a:hover{color:#3382b8;color:var(--thm-primary)}.news-details__title{font-size:30px;font-weight:900;line-height:40px;margin-bottom:10px;padding-top:3px}.news-details__text-one{font-size:16px}.news-details__text-two{font-size:16px;padding-bottom:15px;padding-top:15px}.news-details__text-three{font-size:16px;margin:0}.news-details__bottom{align-items:center;border-bottom:1px solid #e5eeec;border-top:1px solid #e5eeec;display:flex;flex-wrap:wrap;justify-content:space-between;margin-bottom:30px;margin-top:40px;padding:30px 0}.news-details__bottom p{margin:0}.news-details__tags span{color:#1f2230;color:var(--thm-black);font-size:20px;font-weight:900}.news-details__tags a{background:#3382b8;background:var(--thm-primary);color:#fff;display:inline-block;font-size:14px;font-weight:800;padding:4px 20px}.news-details__tags a+a{margin-left:5px}.news-details__social-list,.news-details__social-list a{align-items:center;display:flex}.news-details__social-list a{background-color:#e5eeec;border-radius:50%;color:#1f2230;color:var(--thm-black);font-size:13px;height:35px;justify-content:center;text-align:center;transition:all .5s ease;width:35px}.news-details__social-list a+a{margin-left:10px}.news-details__social-list a:hover{background-color:#3382b8;background-color:var(--thm-primary);color:#fff}.author-one{background-color:#eff5f4;display:flex;margin-bottom:44px;padding:50px 50px 41px}.author-one__content{margin-left:30px;margin-top:-8px}.author-one__content h3{font-size:24px;font-weight:900;line-height:34px}.author-one__content p{margin:13px 0 0}.sidebar__search{background-color:#3382b8;background-color:var(--thm-primary);border-radius:0}.sidebar__search-form{position:relative}.sidebar__search-form input[type=search]{background-color:transparent;border:none;color:#fff;display:block;font-size:16px;font-weight:900;height:67px;outline:none;padding-left:30px;padding-right:70px;width:100%}.sidebar__search-form ::-moz-placeholder{color:#fff;opacity:1}.sidebar__search-form ::placeholder{color:#fff;opacity:1}.sidebar__search-form :-ms-input-placeholder{color:#fff}.sidebar__search-form ::-ms-input-placeholder{color:#fff}.sidebar__search-form button[type=submit]{background-color:transparent;border:none;color:#fff;font-size:20px;height:67px;outline:none;position:absolute;right:0;top:0;width:70px}@media (max-width:991px){.sidebar{margin-top:50px}}.sidebar__single+.sidebar__single{margin-top:30px}.sidebar__title{font-size:20px;font-weight:900;margin:0 0 17px}.sidebar__post{background:#eff5f4;display:block;padding:36px 20px 43px;position:relative}.sidebar__post .sidebar__title{padding-left:30px}.sidebar__post-list{margin:0}.sidebar__post-list li{align-items:center;display:flex;padding-left:29px;padding-right:29px}.sidebar__post-list li+li{margin-top:21px}.sidebar__post-image{margin-right:20px}.sidebar__post-image>img{width:70px}.sidebar__post-content h3{color:#1f2230;color:var(--thm-black);font-size:18px;font-weight:800;line-height:28px;margin:0}.sidebar__post-content .sidebar__post-content_meta{color:#707876;color:var(--thm-gray);display:block;font-size:14px;font-weight:800}.sidebar__post-content .sidebar__post-content_meta i{color:#3382b8;color:var(--thm-primary);margin-right:2px}.sidebar__post-content h3{text-transform:inherit}.sidebar__post-content h3 a{color:#1f2230;color:var(--thm-black);transition:all .5s ease}.sidebar__post-content h3 a:hover{color:#3382b8;color:var(--thm-primary)}.sidebar__category{background:#eff5f4;display:block;padding:36px 40px 16px;position:relative}.sidebar__category-list li+li{margin-top:4px}.sidebar__category-list li a{color:#707876;color:var(--thm-gray);font-size:16px;font-weight:700;transition:all .5s ease}.sidebar__category-list li a i{color:#3382b8;color:var(--thm-primary);font-size:15px;margin-right:10px}.sidebar__category-list li a:hover{color:#1f2230;color:var(--thm-black)}.sidebar__tags{background:#eff5f4;display:block;padding:36px 40px 30px;position:relative}.sidebar__tags-list{margin-left:-5px;padding-top:7px}.sidebar__tags-list a{background:#fff;color:#1f2230;color:var(--thm-black);display:inline-block;font-size:14px;font-weight:800;margin-bottom:10px;margin-left:5px;padding:4px 20px;transition:all .4s ease}.sidebar__tags-list a:hover{background:#3382b8;background:var(--thm-primary);color:#fff}.events-page{display:block;padding:100px 0 70px;position:relative}.events-page .events-one__single{margin-bottom:30px}.events-page .events-one__bottom-title{font-size:26px}.events-page .events-one__bottom>p{line-height:25px}.event-details{padding:100px 0}.event-details,.events-details__img{display:block;position:relative}.events-details__img img{width:100%}.event-details__date-box{align-items:center;background:#3382b8;background:var(--thm-primary);display:flex;height:70px;justify-content:center;left:30px;position:absolute;top:0;width:67px}.event-details__date-box p{color:#fff;font-size:16px;font-weight:800;line-height:20px;margin:0}.event-details__top-content{display:block;margin-top:39px;position:relative}.event-details__title{font-size:36px;font-weight:900;line-height:46px;margin-bottom:9px}.event-details__text-1{font-size:16px;padding-bottom:15px}.event-details__text-2{font-size:16px;margin:0}.event-details__bottom-content{padding-top:32px}.event-details__bottom-title{font-size:26px;font-weight:900;line-height:36px;margin-bottom:11px}.event-details__bottom-text-1{font-size:16px;padding-bottom:15px}.event-details__bottom-text-2{font-size:16px;margin:0}.event-details__bottom-content-btn{margin-top:40px}.event-details__right{display:block;margin-top:60px;position:relative}.event-details__right-sidebar{background:#eff5f4;display:block;padding:30px 30px 26px;position:relative}.event-details__right-sidebar-title{background:#fff;display:block;margin-bottom:19px;padding:13px 0;position:relative;text-align:center}.event-details__right-sidebar-title h4{font-size:18px;font-weight:900;line-height:28px}.event-details__right-sidebar-list{margin:0;position:relative}.event-details__right-sidebar-list li{align-items:center;display:flex;justify-content:space-between}.event-details__right-sidebar-list li+li{margin-top:17px}.event-details__right-sidebar-list li .left p{color:#1f2230;color:var(--thm-black);font-size:16px;font-weight:900;margin:0}.event-details__right-sidebar-list li .right{text-align:right}.event-details__right-sidebar-list li .right h4{color:#3382b8;color:var(--thm-primary);font-size:14px;font-weight:900}.event-details__right-map{display:block;margin-top:30px;position:relative}.event-details__map-box{border:none;height:390px;width:100%}.contact-page{display:block;padding:100px 0;position:relative}.contact-page .section-title{margin-bottom:44px}.contact-page__left{display:block;margin-right:60px;position:relative}.contact-page__img{display:block;margin-bottom:19px;position:relative}.contact-page__img img{width:100%}.contact-page__text{font-size:16px;margin:0}.contact-page__contact-info{margin:0;padding-right:140px;padding-top:40px;position:relative}.contact-page__contact-list{margin:0}.contact-page__contact-list li{align-items:center;border-bottom:1px solid #e5eeec;display:flex;margin-bottom:20px;padding-bottom:20px}.contact-page__contact-list li:last-child{border-bottom:0;margin-bottom:0;padding-bottom:0}.contact-page__contact-list li .icon{align-items:center;background:#3382b8;background:var(--thm-primary);border-radius:50%;color:#fff;display:flex;font-size:35px;height:65px;justify-content:center;transition:all .5s ease;width:65px}.contact-page__contact-list li:hover .icon{background-color:#1f2230;background-color:var(--thm-black);color:#fff}.contact-page__contact-list li .text{margin-left:20px}.contact-page__contact-list li .text p{font-size:16px;line-height:20px;margin:0}.contact-page__contact-list li .text a{color:#1f2230;color:var(--thm-black);font-size:20px;font-weight:800;line-height:30px;transition:all .5s ease}.contact-page__contact-list li .text a:hover{color:#3382b8;color:var(--thm-primary)}.contact-page__contact-list li .text h5{color:#1f2230;color:var(--thm-black);font-size:20px;font-weight:800;line-height:30px}.contact-page__form{display:block;margin-left:-30px;position:relative}.contact-page__main-form{background:#eff5f4;display:block;padding:60px;position:relative}.contact-page__main-form .row{--bs-gutter-x:10px}.contact-page__input-box{display:block;position:relative}.contact-page__input-box input[type=email],.contact-page__input-box input[type=text]{height:67px;margin-bottom:10px;padding:0 30px}.contact-page__input-box input[type=email],.contact-page__input-box input[type=text],.contact-page__input-box textarea{background-color:#fff;border:none;border-radius:0;box-shadow:0 0 30px 0 rgba(0,0,0,.07);color:#707876;color:var(--thm-gray);font-size:16px;font-weight:700;outline:none;width:100%}.contact-page__input-box textarea{display:block;height:192px;padding:10px 30px 30px}.contact-page__btn{margin-top:10px}.contact-page-google-map,.contact-page-google-map__one{display:block;position:relative}.contact-page-google-map__one{border:none;height:560px;width:100%}.about-page{padding:100px 0 95px}.about-page,.about-page__left{display:block;position:relative}.about-page__left{margin-right:60px}.about-page__img{display:block;position:relative}.about-page__img:before{background-color:#3382b8;background-color:var(--thm-primary);bottom:-10px;content:\"\";height:10px;left:0;position:absolute;right:0}.about-page__img img{width:100%}.about-page__trusted{background-color:#fff;bottom:60px;box-shadow:0 0 30px 0 rgba(0,0,0,.1);left:-50px;padding:45px 47px 47px;position:absolute;width:255px}.about-page__trusted h3{font-size:24px;font-weight:900;line-height:28px}.about-page__trusted h3 span{color:#3382b8;color:var(--thm-primary)}.about-page__right{display:block;margin-left:-20px;position:relative}.about-page__right .section-title{margin-bottom:27px}.about-page__right-text{font-size:16px;margin:0}.about-page__right-title{color:#3382b8;color:var(--thm-primary);font-size:24px;font-weight:900;line-height:34px;margin-bottom:39px;margin-top:32px}.about-five__progress{align-items:center;display:flex}.about-five__progress-wrap{grid-gap:30px;display:grid;grid-template-columns:1fr}@media (min-width:768px){.about-five__progress-wrap{grid-template-columns:repeat(2,280px)}}.about-five__progress-box{display:inline-block;position:relative}.about-five__progress-box canvas{transform:rotate(90deg)}.about-five__progress-box span{color:#1f2230;color:var(--thm-black);display:block;font-size:24px;font-weight:900;left:50%;line-height:1;position:absolute;top:50%;transform:translateY(-60%) translateX(-50%)}.about-five__progress h3{color:#1f2230;color:var(--thm-black);font-size:20px;font-weight:900;line-height:30px;margin:0 0 0 20px;width:70px}.about-page-testimonial{margin-top:0;padding-top:100px}.about-page-counter{margin-top:-50px}.team-page{padding-bottom:40px}.team-page .team-one__single{margin-bottom:60px}.gallery-page{display:block;padding:100px 0 70px;position:relative}.gallery-page__single{display:block;margin-bottom:30px;position:relative}.gallery-page__img-box{display:block;overflow:hidden;position:relative}.gallery-page__img-box:before{background:rgba(21,200,160,.9);background:rgba(var(--thm-primary-rgb),.9);content:\"\";height:100%;left:0;position:absolute;top:0;transform:translateY(-101%);transition:all .7s ease;width:100%;z-index:1}.gallery-page__single:hover .gallery-page__img-box:before{opacity:1;transform:translateY(0)}.gallery-page__img-box img{transform:scale(1);transition:transform .5s ease,opacity .5s ease;width:100%}.gallery-page__single:hover .gallery-page__img-box img{transform:scale(1.05)}.gallery-page__hover-content-box{align-items:center;bottom:0;display:flex;flex-direction:column;justify-content:center;left:0;opacity:0;position:absolute;right:0;top:0;transform:translateY(50px);z-index:2}.gallery-page__hover-content-box h2{color:#fff;font-size:24px;font-weight:900;line-height:34px;margin-bottom:14px}.gallery-page__hover-content-box p{color:#fff;font-family:\"reeyregular\";font-family:var(--thm-reey-font);font-size:30px;font-weight:400;margin:0}.gallery-page__single:hover .gallery-page__hover-content-box{opacity:1;transform:translateY(0);transition:all .5s ease .5s;-webkit-transition:all .5s ease .5s;-ms-transition:all .5s ease .5s;-o-transition:all .5s ease .5s}.become-volunteer-page{display:block;padding:100px 0;position:relative}.become-volunteer-page .section-title{margin-bottom:35px}.become-volunteer-page__left{display:block;margin-right:60px;position:relative}.become-volunteer-page__img{display:block;margin-bottom:22px;position:relative}.become-volunteer-page__img img{width:100%}.become-volunteer-page__title{font-size:30px;font-weight:900;line-height:40px;margin-bottom:10px}.become-volunteer-page__text{font-size:16px;margin:0}.become-volunteer-page__list{margin:0;padding-top:32px;position:relative}.become-volunteer-page__list li{align-items:center;display:flex}.become-volunteer-page__list li+li{margin-top:10px}.become-volunteer-page__list li .icon i{color:#3382b8;color:var(--thm-primary);font-size:15px;margin-right:10px}.become-volunteer-page__list li .text p{color:#1f2230;color:var(--thm-black);font-size:18px;font-weight:900;margin:0}.become-volunteer-page__phone{align-items:center;border-top:1px solid #e5eeec;display:flex;margin-right:140px;margin-top:43px;padding-top:35px}.become-volunteer-page__phone-icon{align-items:center;background:#3382b8;background:var(--thm-primary);border-radius:50%;color:#fff;display:flex;font-size:35px;height:65px;justify-content:center;width:65px}.become-volunteer-page__phone-text{margin-left:20px}.become-volunteer-page__phone-text p{font-size:16px;line-height:18px;margin:0}.become-volunteer-page__phone-text a{color:#1f2230;color:var(--thm-black);font-size:20px;font-weight:800}.become-volunteer-page__right{display:block;margin-left:-30px;position:relative}.become-volunteer-page__form{background:#eff5f4;display:block;padding:60px;position:relative}.become-volunteer-page__form .row{--bs-gutter-x:10px}.become-volunteer-page__input{display:block;line-height:0;position:relative}.become-volunteer-page__input input[type=email],.become-volunteer-page__input input[type=text]{background-color:#fff;border:none;box-shadow:0 0 30px 0 rgba(0,0,0,.05);color:#707876;color:var(--thm-gray);display:block;font-size:16px;font-weight:700;height:67px;margin-bottom:10px;outline:none;padding-left:30px;padding-right:30px;width:100%}.become-volunteer-page__input textarea{background-color:#fff;border:none;border-radius:0;box-shadow:0 0 30px 0 rgba(0,0,0,.07);color:#707876;color:var(--thm-gray);font-size:16px;font-weight:700;height:192px;outline:none;padding:20px 30px 30px;width:100%}.become-volunteer-page__btn{margin-top:10px;position:relative}.brand-one__img{height:100px;width:100px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("6314a0da", content, true)

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media only screen and (min-width:992px) and (max-width:1199px){.welcome-one__right .section-title__title{font-size:39px;line-height:49px}.welcome-one__heart-icon{bottom:0}.helping-one__left{margin-right:0}.helping-one__title{font-size:22px}.helping-one__left-img{margin-top:69px}.testimonial-one__carousel .tns-controls,.testimonial-one__carousel.owl-theme .owl-nav{bottom:-90px;left:0}.help-them__top-video-box{margin-left:0}.news-one .section-title__title{font-size:42px;line-height:52px}.news-one__right-title{font-size:18px;line-height:28px}.footer-widget__contact,.footer-widget__newsletter{margin-top:30px}.introduction__right,.we-inspire__right{margin-left:0}.we-inspire__img{margin-right:0;margin-top:0}.events-one__left{margin-bottom:50px;margin-right:0}.events-one__right{margin-left:0}.events-one{padding:100px 0 195px}.counter-one__single{margin-bottom:30px;max-width:462px}.counter-one__single:nth-child(3){margin-bottom:0}.counter-one__single:nth-child(3):before{display:none}.counter-one__single:nth-child(4){margin-bottom:0}.news-two__content h3{font-size:20px;line-height:30px}.feature-one__single-1{margin-right:0}.feature-one__single-2{margin-left:0;margin-right:0}.feature-one__single-3{margin-left:0}.feature-one__single:before{display:none}.help-them-two__left{margin:0 auto;max-width:700px}.help-them-two__right{margin:150px auto 0;max-width:700px}.help-them-two__donation-icon{right:340px}.testimonial-one__single{padding:30px 20px 40px}.counters-two__four-boxes li{margin-bottom:20px}.counters-two__four-boxes li:last-child{margin-bottom:0}.need-help__content{padding:28px 30px}.why-choose__left{margin:0 auto 50px;max-width:700px}.why-choose__right{margin:0 auto;max-width:700px}.about-page__left{margin:0 auto 50px;max-width:700px}.about-page__right{margin:0 auto;max-width:700px}.causes-details__summary-list{float:left;margin-top:30px}.causes-details__download{padding:50px 35px}.causes-details__left .text h4{font-size:21px}.causes-details__download-btn{padding:18.5px 40px}.contact-page__left{margin-right:0}.contact-page__form{margin-left:0}.contact-page__contact-info{padding-right:0}.become-volunteer-page__list li .text p{font-size:17px}.welcome-one{padding:100px 0}.testimonial-one{padding:190px 0 185px}.four-icon__content-box{align-items:center;flex-direction:column}.four-icon__content-box,.three-boxes__content{display:flex;justify-content:center}}@media only screen and (min-width:768px) and (max-width:991px){.welcome-one__right{margin-top:150px}.join-one__title{font-size:53px;line-height:63px}.helping-one__left{margin-bottom:50px;margin-right:0}.testimonial-one__carousel .tns-controls,.testimonial-one__carousel.owl-theme .owl-nav{display:none}.testimonial-one__client-info{flex-direction:column;justify-content:center;text-align:center}.testimonial-one__client-name{margin-left:0;margin-top:20px}.help-them__top-content-title{text-align:center}.help-them__top-video-box{margin-left:0;margin-top:25px;text-align:center}.help-them__top-video-btn{margin:0 auto}.help-them__single{margin-bottom:30px}.help-them{padding:87px 0 60px}.news-one .section-title__title{font-size:42px;line-height:52px}.news-one__btn{float:left;margin-top:0}.news-one__btn,.news-one__left{margin-bottom:50px}.footer-widget__contact,.footer-widget__newsletter{margin-top:30px}.site-footer__bottom-inner{flex-direction:column}.site-footer__bottom-copy-right{margin-top:20px}.introduction__right{margin-left:0;margin-top:50px}.we-inspire__right{margin-left:0}.we-inspire__img{margin-right:0;margin-top:50px}.events-one__left{margin-bottom:50px}.events-one__carousel.owl-theme .owl-nav{display:none}.become-volunteer__inner{flex-direction:column}.become-volunteer__btn-box{margin-top:20px}.counter-one__single{margin-bottom:30px;max-width:342px}.counter-one__single:nth-child(3){margin-bottom:0}.counter-one__single:nth-child(3):before{display:none}.counter-one__single:nth-child(4){margin-bottom:0}.feature-one__single-1{margin-right:0}.feature-one__single-2{margin:30px 0}.feature-one__single-3{margin-left:0}.feature-one__single:before{display:none}.help-them-two__left{margin:0 auto;max-width:700px}.help-them-two__right{margin:150px auto 0;max-width:700px}.help-them-two__donation-icon{right:325px}.causes-three__top{align-items:inherit;flex-direction:column}.causes-three__top-btn-box{margin-top:20px}.counters-two__four-boxes{margin-top:30px}.need-help__inner{align-items:inherit;flex-direction:column}.need-help__content{margin-right:90px}.why-choose__left{margin:0 auto 50px;max-width:700px}.why-choose__right{margin:0 auto;max-width:700px}.about-page__left{margin:0 auto 50px;max-width:700px}.about-page__right{margin:0 auto;max-width:700px}.causes-details__summary-list{float:left;margin-top:30px}.causes-details__images-single{margin-bottom:30px}.causes-details__summary{margin-top:9px}.causes-details__right{margin-top:50px}.contact-page__form{margin-left:0;margin-top:50px}.contact-page__left{margin-right:0}.become-volunteer-page__left{margin-bottom:50px;margin-right:0}.become-volunteer-page__right{margin-left:0}.welcome-one{padding:100px 0}.four-icon__content-box{align-items:center;display:flex;flex-direction:column;justify-content:center}}@media only screen and (max-width:767px){.section-title__title br{display:none}.welcome-one__right{margin-top:150px}.welcome-one__img-box-2{display:none}.welcome-one__bottom-text{bottom:45px;font-size:40px;left:0;line-height:50px;right:0;text-align:center}.welcome-one__right .section-title__title{font-size:39px;line-height:49px}.welcome-one__our-mission-and-story{align-items:inherit;flex-direction:column}.welcome-one__progress-title{font-size:15px;line-height:25px}.welcome-one__img-box:before{display:none}.causes-one .section-title__title{font-size:26px;line-height:36px}.join-one__title{font-size:22px;font-weight:600;line-height:32px;margin-bottom:30px}.helping-one__left{margin-bottom:50px;margin-right:0}.helping-one .section-title__title{font-size:26px;line-height:36px}.helping-one__right{padding:25px}.testimonial-one__carousel .tns-controls,.testimonial-one__carousel.owl-theme .owl-nav{display:none}.testimonial-one__left .section-title{text-align:center}.testimonial-one__left .section-title__title{font-size:26px;line-height:36px}.testimonial-one__client-info{flex-direction:column;justify-content:center;text-align:center}.testimonial-one__client-name{margin-left:0;margin-top:20px}.help-them__top-content-title{font-size:39px;line-height:50px;text-align:center}.help-them__top-video-box{margin-left:0;margin-top:25px;text-align:center}.help-them__top-video-btn{margin:0 auto}.help-them__single{margin-bottom:30px}.help-them{padding:87px 0 60px}.news-one .section-title__title{font-size:39px;line-height:49px}.news-one__btn{float:left;margin-top:0}.news-one__btn,.news-one__left{margin-bottom:50px}.news-one__bottom{padding:31px 30px 34px}.news-one__right-single{flex-direction:column}.news-one__right-content{margin-left:0;margin-top:20px}.footer-widget__contact,.footer-widget__explore,.footer-widget__newsletter{margin-top:30px}.site-footer__bottom-inner{flex-direction:column}.site-footer__bottom-copy-right{margin-top:20px}.site-footer__bottom-social{display:none}.introduction__right{margin-left:0;margin-top:50px}.introduction__right .section-title__title{font-size:32px;line-height:42px}.introduction__content{padding:40px 20px}.we-inspire__right{margin-left:0}.we-inspire__img{margin-right:0;margin-top:50px}.events-one__left{margin-bottom:50px;margin-right:0}.events-one__right{margin-left:0}.events-one__left .section-title__title{font-size:35px;line-height:45px}.events-one__carousel.owl-theme .owl-nav{display:none}.become-volunteer__inner{flex-direction:column}.become-volunteer__btn-box{margin-top:20px}.become-volunteer__left>h2{font-size:23px;line-height:33px}.become-volunteer__big-text>h2{font-size:27px;line-height:37px}.causes-two .section-title__title{font-size:26px;line-height:36px}.counters-one__box{text-align:center}.counter-one__single{margin-bottom:30px}.counter-one__single:before{display:none}.counter-one__single:nth-child(4){margin-bottom:0}.news-two__content h3{font-size:20px;line-height:30px}.news-two .section-title__title{font-size:28px;line-height:38px}.news-two .section-title__title br{display:none}.feature-one__single-1{margin-right:0}.feature-one__single-2{margin:30px 0}.feature-one__single-3{margin-left:0}.feature-one__single:before,.help-them-two-bg{display:none}.help-them-two__video-btn{height:100px;width:120px}.help-them-two__right{margin-left:0;margin-top:50px}.help-them-two__right .section-title__title{font-size:33px;line-height:44px}.help-them-two__donation-text-box h2{font-size:35px;line-height:45px}.help-them-two__donation-icon{display:none}.causes-three__top{align-items:inherit;flex-direction:column}.causes-three__top-btn-box{margin-top:20px}.causes-three__top-title .section-title__title{color:var(--thm-black);font-size:26px;font-weight:900;line-height:36px;margin:0}.causes-one__title{font-size:23px}.testimonial-one__single{padding:30px 20px 40px}.testimonial-two .section-title__title{font-size:29px;line-height:39px}.counters-two__four-boxes{margin-top:30px}.counters-two__left .section-title__title{font-size:28px;line-height:38px}.need-help__inner{align-items:inherit;flex-direction:column}.need-help__img>img{width:100%}.need-help__content{padding-left:28px;padding-right:28px}.team-one .section-title__title{font-size:22px;line-height:32px}.why-choose__left-list-box{float:left;margin-left:0;margin-top:50px}.why-choose__right{margin-left:0}.why-choose__urgent{margin-top:30px;padding:52px 25px 60px}.why-choose__left .section-title__title{font-size:32px;line-height:42px}.about-page__left{margin-bottom:50px;margin-right:0}.about-page__right{margin-left:0}.about-page__right .section-title__title{font-size:31px;line-height:41px}.causes-details__summary-list{float:left;margin-top:30px}.causes-details__images-single{margin-bottom:30px}.causes-details__summary{margin-top:9px}.causes-details__right{margin-top:50px}.causes-details__text-box h3{font-size:29px;line-height:39px}.causes-details__summary-list-box li .text p{font-size:17px}.causes-details__share{flex-direction:column}.causes-details__share-social{margin-left:0;margin-top:20px}.causes-details__download{flex-direction:column;padding:50px 20px}.causes-details__download-btn{margin-top:20px}.comment-one__single{flex-direction:column}.comment-one__content{margin-left:0;margin-top:20px;padding-right:0}.comment-one__btn{position:relative;top:15px}.comment-one__form{padding:30px 14px}.event-details__right-sidebar-list li .left p{font-size:15px}.event-details__right-sidebar-list li .right h4{font-size:13px}.event-details__title{font-size:33px;line-height:43px}.news-details__title{font-size:25px;line-height:35px}.news-details__bottom{flex-direction:column}.news-details__tags span{font-size:15px}.news-details__tags a{font-size:13px;padding:2px 17px}.news-details__tags a+a{margin-left:2px}.news-details__social-list{margin-top:20px}.author-one{flex-direction:column;padding:50px 30px 41px}.author-one__content{margin-left:0;margin-top:15px}.contact-page__form{margin-left:0;margin-top:50px}.contact-page__left{margin-right:0}.contact-page__contact-info{padding-right:0}.contact-page__contact-list li .text a,.contact-page__contact-list li .text h5{font-size:17px}.contact-page__main-form{padding:30px 20px}.contact-page .section-title__title{font-size:24px;line-height:34px}.become-volunteer-page .section-title__title{font-size:22px;line-height:32px}.become-volunteer-page__left{margin-right:0}.become-volunteer-page__phone{margin-bottom:30px;margin-right:0}.become-volunteer-page__form{padding:30px 14px}.become-volunteer-page__right{margin-left:0}.help-them-two__video-btn{bottom:20px}.help-them-two__video-btn:before{border-bottom:20px solid var(--thm-primary);bottom:-20px}.help-them-two__list{margin-bottom:9px}.help-them-two__list-two{margin-bottom:0}.causes-three__carousel.owl-carousel .owl-dots{right:0}.testimonial-one__text{text-align:center}.counters-two__four-boxes li:nth-child(3),.counters-two__four-boxes li:nth-child(4){margin-top:11px}.welcome-one{padding:100px 0}.four-icon__content-box{align-items:center;display:flex;flex-direction:column;justify-content:center}.introduction__icon-wrap-single{padding-left:0}.introduction__icon-box{left:inherit;position:relative;top:inherit}.introduction__content-box{margin-top:22px}.we-inspire__left .section-title__title{font-size:30px;line-height:40px}.three-boxes__single{padding:60px 30px}.three-boxes__content{display:block}.three-boxes__text-box{margin-left:0;max-width:420px;text-align:center;width:100%}.three-boxes__icon{margin:0 0 20px;text-align:center}}@media only screen and (min-width:1200px) and (max-width:1500px){.three-boxes__single{padding:60px 25px}.three-boxes__text-box h2{font-size:26px;font-weight:700;line-height:36px;margin-bottom:19px}.three-boxes__text-box{margin-left:20px}.three-boxes__icon span{top:4px}}@media only screen and (min-width:992px) and (max-width:1199px){.main-slider h2{font-size:90px;line-height:100px}#main-slider-pagination{left:53%}.main-slider-three-shape{right:110px}}@media only screen and (min-width:768px) and (max-width:991px){.main-slider h2{font-size:92px;line-height:102px}#main-slider-pagination{left:55%}.main-slider-three-shape{right:188px}.main-slider-three .container{padding-bottom:150px;padding-top:180px}}@media only screen and (max-width:767px){#main-slider-pagination,.main-slider__counter,.main-slider__nav,.main-slider__shape-1{display:none}.main-slider h2{font-size:43px;line-height:53px}.main-slider p{font-size:29px;line-height:39px}.main-slider .container{padding-bottom:91px;padding-top:129px}.main-slider-two .container{padding-bottom:100px;padding-top:297px}.main-slider-two h2{font-size:43px;line-height:53px}.main-slider-two p{font-size:29px;line-height:39px}.main-slider-three-shape,.main-slider__nav-two{display:none}.main-slider-three .container{padding-bottom:100px;padding-top:120px}}@media only screen and (min-width:992px) and (max-width:1199px){.main-menu__right{padding-left:50px}.main-header__logo{width:20%}.main-menu-wrapper{width:80%}.main-menu__phone-contact{padding:19.5px 50px}.main-menu-wrapper__left-email-box{margin-left:38px}.main-header-two__contact-info{margin-left:0;max-width:780px;width:100%}.main-header-two__contact-list li+li{margin-left:10px}.main-header-two__contact-list li{padding-left:25px}.main-header-two__contact-list li:before{display:none}.main-menu__two .mobile-nav__toggler{margin-right:0;padding:24px 0}.main-menu-three__inner-upper{padding:32px 0;width:46%}}@media only screen and (min-width:768px) and (max-width:991px){.main-menu-wrapper__top,.main-menu__phone-contact{display:none}.main-header__logo{width:30%}.main-menu-wrapper{padding:47.5px 0;width:70%}.main-menu__donate-btn{margin-left:0}.main-menu__two .mobile-nav__toggler{margin-right:0;padding:24px 0}.main-header-two__contact-info{display:none}.main-header-two__logo{float:none;max-width:none;width:100%}.main-menu-three__inner-upper{padding:32px 0;width:34%}.main-menu-three__btn{margin-right:25px}}@media (max-width:767px){.main-header__logo{padding:19px 0;width:100%}.main-menu-wrapper__top{display:none}.main-menu-wrapper{float:left;padding:23px 0;width:100%}.main-menu__donate-btn,.main-menu__phone-contact{display:none}.main-menu__two .mobile-nav__toggler{margin-right:0;padding:24px 0}.main-header-two__contact-info{display:none}.main-header-two__logo{float:none;max-width:none;width:100%}.main-menu__right-social{display:none}.main-menu-three__inner-upper{display:block;float:right;padding:47px 0;position:relative;width:35%}.main-menu-three__btn,.main-menu__right-three{display:none}.main-menu-three__inner .mobile-nav__toggler{float:right;margin-right:0}}@media only screen and (min-width:1200px) and (max-width:1720px){.main-menu__phone-contact{display:none}}@media only screen and (min-width:1200px) and (max-width:1335px){.main-menu__donate-btn{margin-left:0}.main-menu__cart{margin-right:20px}.main-menu__search{margin-right:15px}}@media only screen and (min-width:1200px) and (max-width:1216px){.main-header-two__contact-info{margin-left:128px}}@media only screen and (min-width:1200px) and (max-width:1549px){.main-menu-three__btn{display:none}.main-menu-three__inner-upper{width:61%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  mobileDrawerStatus: false,
  searchPopupStatus: false
});
const mutations = {
  changeMobileDrawerStatus(state) {
    state.mobileDrawerStatus = !state.mobileDrawerStatus;
  },
  changeSearchPopupStatus(state) {
    state.searchPopupStatus = !state.searchPopupStatus;
  }
};

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "AboutFour", function() { return AboutFour; });
__webpack_require__.d(components_namespaceObject, "AboutOne", function() { return AboutOne; });
__webpack_require__.d(components_namespaceObject, "AboutThree", function() { return AboutThree; });
__webpack_require__.d(components_namespaceObject, "AboutTwo", function() { return AboutTwo; });
__webpack_require__.d(components_namespaceObject, "BecomeVolunteerForm", function() { return BecomeVolunteerForm; });
__webpack_require__.d(components_namespaceObject, "CallToActionOne", function() { return CallToActionOne; });
__webpack_require__.d(components_namespaceObject, "CallToActionTwo", function() { return CallToActionTwo; });
__webpack_require__.d(components_namespaceObject, "CausesCard", function() { return CausesCard; });
__webpack_require__.d(components_namespaceObject, "CausesCarousel", function() { return CausesCarousel; });
__webpack_require__.d(components_namespaceObject, "CausesCarouselThree", function() { return CausesCarouselThree; });
__webpack_require__.d(components_namespaceObject, "CausesCarouselTwo", function() { return CausesCarouselTwo; });
__webpack_require__.d(components_namespaceObject, "CausesGrid", function() { return CausesGrid; });
__webpack_require__.d(components_namespaceObject, "CausesPost", function() { return CausesPost; });
__webpack_require__.d(components_namespaceObject, "CausesSidebar", function() { return CausesSidebar; });
__webpack_require__.d(components_namespaceObject, "CausesSingle", function() { return CausesSingle; });
__webpack_require__.d(components_namespaceObject, "ContactHome", function() { return ContactHome; });
__webpack_require__.d(components_namespaceObject, "ContactPageForm", function() { return ContactPageForm; });
__webpack_require__.d(components_namespaceObject, "DailyUpdates", function() { return DailyUpdates; });
__webpack_require__.d(components_namespaceObject, "EventCard", function() { return EventCard; });
__webpack_require__.d(components_namespaceObject, "EventCarousel", function() { return EventCarousel; });
__webpack_require__.d(components_namespaceObject, "EventsGrid", function() { return EventsGrid; });
__webpack_require__.d(components_namespaceObject, "EventSingle", function() { return EventSingle; });
__webpack_require__.d(components_namespaceObject, "FeatureOne", function() { return FeatureOne; });
__webpack_require__.d(components_namespaceObject, "FeatureThree", function() { return FeatureThree; });
__webpack_require__.d(components_namespaceObject, "FeatureTwo", function() { return FeatureTwo; });
__webpack_require__.d(components_namespaceObject, "Footer", function() { return Footer; });
__webpack_require__.d(components_namespaceObject, "FunfactOne", function() { return FunfactOne; });
__webpack_require__.d(components_namespaceObject, "GalleryCard", function() { return GalleryCard; });
__webpack_require__.d(components_namespaceObject, "GalleryCarousel", function() { return GalleryCarousel; });
__webpack_require__.d(components_namespaceObject, "GalleryGrid", function() { return GalleryGrid; });
__webpack_require__.d(components_namespaceObject, "GoogleMap", function() { return GoogleMap; });
__webpack_require__.d(components_namespaceObject, "Header", function() { return Header; });
__webpack_require__.d(components_namespaceObject, "HeaderThree", function() { return HeaderThree; });
__webpack_require__.d(components_namespaceObject, "HeaderTwo", function() { return HeaderTwo; });
__webpack_require__.d(components_namespaceObject, "MainSliderCounter", function() { return MainSliderCounter; });
__webpack_require__.d(components_namespaceObject, "MainSliderOne", function() { return MainSliderOne; });
__webpack_require__.d(components_namespaceObject, "MainSliderThree", function() { return MainSliderThree; });
__webpack_require__.d(components_namespaceObject, "MainSliderTwo", function() { return MainSliderTwo; });
__webpack_require__.d(components_namespaceObject, "MobileDrawer", function() { return MobileDrawer; });
__webpack_require__.d(components_namespaceObject, "NeedHelp", function() { return NeedHelp; });
__webpack_require__.d(components_namespaceObject, "NewsCard", function() { return NewsCard; });
__webpack_require__.d(components_namespaceObject, "NewsGrid", function() { return NewsGrid; });
__webpack_require__.d(components_namespaceObject, "NewsHome", function() { return NewsHome; });
__webpack_require__.d(components_namespaceObject, "NewsHomeThree", function() { return NewsHomeThree; });
__webpack_require__.d(components_namespaceObject, "NewsHomeTwo", function() { return NewsHomeTwo; });
__webpack_require__.d(components_namespaceObject, "NewsSidebar", function() { return NewsSidebar; });
__webpack_require__.d(components_namespaceObject, "NewsSingle", function() { return NewsSingle; });
__webpack_require__.d(components_namespaceObject, "PageHeader", function() { return PageHeader; });
__webpack_require__.d(components_namespaceObject, "Post", function() { return Post; });
__webpack_require__.d(components_namespaceObject, "PostAuthor", function() { return PostAuthor; });
__webpack_require__.d(components_namespaceObject, "PostComments", function() { return PostComments; });
__webpack_require__.d(components_namespaceObject, "QuestionAnswer", function() { return QuestionAnswer; });
__webpack_require__.d(components_namespaceObject, "SearchPopup", function() { return SearchPopup; });
__webpack_require__.d(components_namespaceObject, "SectionTitle", function() { return SectionTitle; });
__webpack_require__.d(components_namespaceObject, "SponsorsOne", function() { return SponsorsOne; });
__webpack_require__.d(components_namespaceObject, "TestimonialsCard", function() { return TestimonialsCard; });
__webpack_require__.d(components_namespaceObject, "TestimonialsCarouselOne", function() { return TestimonialsCarouselOne; });
__webpack_require__.d(components_namespaceObject, "TestimonialsGridOne", function() { return TestimonialsGridOne; });
__webpack_require__.d(components_namespaceObject, "ThreeBoxes", function() { return ThreeBoxes; });
__webpack_require__.d(components_namespaceObject, "VideoOne", function() { return VideoOne; });
__webpack_require__.d(components_namespaceObject, "VolunteerAbout", function() { return VolunteerAbout; });
__webpack_require__.d(components_namespaceObject, "VolunteerCard", function() { return VolunteerCard; });
__webpack_require__.d(components_namespaceObject, "VolunteerGrid", function() { return VolunteerGrid; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch-native"
var external_node_fetch_native_ = __webpack_require__(13);
var external_node_fetch_native_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_native_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
    }
    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));

          // check for previous reload time not to reload infinitely
          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true /* skip cache */);
          }
        }

        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    };
    // Only set once

    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
      app.context.beforeSerialize = fn => context.beforeSerializeFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  if (context.error) {
    app.context.error = context.error;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext, renderState) {
  if (!promises.length || appContext._redirected || appContext._errored || renderState && renderState.aborted) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext, renderState);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(14);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(9);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(7);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(10);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js

if (false) {}
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  const nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }
  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          const el = document.querySelector(hash);
          if (el) {
            var _getComputedStyle$scr;
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
            // Respect any scroll-margin-top set in CSS when scrolling to anchor
            const y = Number((_getComputedStyle$scr = getComputedStyle(el)['scroll-margin-top']) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace('px', ''));
            if (y) {
              position.offset = {
                y
              };
            }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _3e8086cf = () => interopDefault(__webpack_require__.e(/* import() | pages/about */ 64).then(__webpack_require__.bind(null, 391)));
const _3c30f39c = () => interopDefault(__webpack_require__.e(/* import() | pages/become-volunteer */ 65).then(__webpack_require__.bind(null, 392)));
const _55276650 = () => interopDefault(__webpack_require__.e(/* import() | pages/causes */ 66).then(__webpack_require__.bind(null, 393)));
const _658bc066 = () => interopDefault(__webpack_require__.e(/* import() | pages/causes-details */ 67).then(__webpack_require__.bind(null, 394)));
const _ba12393c = () => interopDefault(__webpack_require__.e(/* import() | pages/contact */ 68).then(__webpack_require__.bind(null, 395)));
const _7aa30547 = () => interopDefault(__webpack_require__.e(/* import() | pages/events */ 69).then(__webpack_require__.bind(null, 396)));
const _55e4f93c = () => interopDefault(__webpack_require__.e(/* import() | pages/events-details */ 70).then(__webpack_require__.bind(null, 397)));
const _bb85a91e = () => interopDefault(__webpack_require__.e(/* import() | pages/founder */ 71).then(__webpack_require__.bind(null, 398)));
const _206b4d94 = () => interopDefault(__webpack_require__.e(/* import() | pages/gallery */ 72).then(__webpack_require__.bind(null, 399)));
const _a7d9848e = () => interopDefault(__webpack_require__.e(/* import() | pages/index-2 */ 74).then(__webpack_require__.bind(null, 388)));
const _a7bd558c = () => interopDefault(__webpack_require__.e(/* import() | pages/index-3 */ 75).then(__webpack_require__.bind(null, 389)));
const _37e460fe = () => interopDefault(__webpack_require__.e(/* import() | pages/news */ 76).then(__webpack_require__.bind(null, 400)));
const _4c66e976 = () => interopDefault(__webpack_require__.e(/* import() | pages/news-details */ 77).then(__webpack_require__.bind(null, 401)));
const _22229757 = () => interopDefault(__webpack_require__.e(/* import() | pages/volunteers */ 78).then(__webpack_require__.bind(null, 402)));
const _5e386194 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 73).then(__webpack_require__.bind(null, 390)));

const emptyFn = () => {};
external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/about",
    component: _3e8086cf,
    name: "about"
  }, {
    path: "/become-volunteer",
    component: _3c30f39c,
    name: "become-volunteer"
  }, {
    path: "/causes",
    component: _55276650,
    name: "causes"
  }, {
    path: "/causes-details",
    component: _658bc066,
    name: "causes-details"
  }, {
    path: "/contact",
    component: _ba12393c,
    name: "contact"
  }, {
    path: "/events",
    component: _7aa30547,
    name: "events"
  }, {
    path: "/events-details",
    component: _55e4f93c,
    name: "events-details"
  }, {
    path: "/founder",
    component: _bb85a91e,
    name: "founder"
  }, {
    path: "/gallery",
    component: _206b4d94,
    name: "gallery"
  }, {
    path: "/index-2",
    component: _a7d9848e,
    name: "index-2"
  }, {
    path: "/index-3",
    component: _a7bd558c,
    name: "index-3"
  }, {
    path: "/news",
    component: _37e460fe,
    name: "news"
  }, {
    path: "/news-details",
    component: _4c66e976,
    name: "news-details"
  }, {
    path: "/volunteers",
    component: _22229757,
    name: "volunteers"
  }, {
    path: "/",
    component: _5e386194,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "__nuxt-error-page"
  }, [_vm._ssrNode("<div class=\"error\">", "</div>", [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode("<p class=\"description\">", "</p>", [typeof _vm.$route === 'undefined' ? _vm._ssrNode("<a href=\"/\" class=\"error-link\">", "</a>") : _c('NuxtLink', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message() {
      return this.error.message || 'Error';
    }
  },
  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(18)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2e6dea41"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      clearTimeout(this._hide);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      this._hide = setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(20)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "7e194996"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/vendors/animate/animate.min.css
var animate_min = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(24);

// EXTERNAL MODULE: ./assets/vendors/fontawesome/css/all.min.css
var all_min = __webpack_require__(26);

// EXTERNAL MODULE: ./assets/vendors/halpes-icons/style.css
var style = __webpack_require__(43);

// EXTERNAL MODULE: ./assets/vendors/reey-font/stylesheet.css
var stylesheet = __webpack_require__(49);

// EXTERNAL MODULE: ./assets/css/halpes.css
var halpes = __webpack_require__(53);

// EXTERNAL MODULE: ./assets/css/halpes-responsive.css
var halpes_responsive = __webpack_require__(55);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=447c8620&
var defaultvue_type_template_id_447c8620_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "page-wrapper",
    attrs: {
      "id": "wrapper"
    }
  }, [_c('Nuxt')], 1);
};
var defaultvue_type_template_id_447c8620_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=447c8620&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_447c8620_render,
  defaultvue_type_template_id_447c8620_staticRenderFns,
  false,
  null,
  null,
  "18dc01d6"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js













const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map(async page => {
        let p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        // Wait for asyncData & old fetch to finish
        await Promise.all(p);
        // Cleanup refs
        p = [];
        if (page.$fetch) {
          p.push(page.$fetch());
        }
        // Get all component instance to call $fetch
        for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
          p.push(component.$fetch());
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (nuxt_error.options || nuxt_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};
(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(57), 'store/index.js');

  // If store is an exported method = classic mode (deprecated)

  // Enforce store modules
  store_store.modules = store_store.modules || {};

  // If the environment supports hot reloading...
})();

// createStore
const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};
function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;
  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }
  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }
  return normalizeModule(moduleData, filePath);
}
function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state);
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }
  return moduleData;
}
// CONCATENATED MODULE: ./.nuxt/components/index.js
const AboutFour = () => __webpack_require__.e(/* import() | components/about-four */ 1).then(__webpack_require__.bind(null, 364)).then(c => wrapFunctional(c.default || c));
const AboutOne = () => __webpack_require__.e(/* import() | components/about-one */ 2).then(__webpack_require__.bind(null, 351)).then(c => wrapFunctional(c.default || c));
const AboutThree = () => __webpack_require__.e(/* import() | components/about-three */ 3).then(__webpack_require__.bind(null, 382)).then(c => wrapFunctional(c.default || c));
const AboutTwo = () => __webpack_require__.e(/* import() | components/about-two */ 4).then(__webpack_require__.bind(null, 348)).then(c => wrapFunctional(c.default || c));
const BecomeVolunteerForm = () => __webpack_require__.e(/* import() | components/become-volunteer-form */ 5).then(__webpack_require__.bind(null, 378)).then(c => wrapFunctional(c.default || c));
const CallToActionOne = () => __webpack_require__.e(/* import() | components/call-to-action-one */ 6).then(__webpack_require__.bind(null, 337)).then(c => wrapFunctional(c.default || c));
const CallToActionTwo = () => __webpack_require__.e(/* import() | components/call-to-action-two */ 7).then(__webpack_require__.bind(null, 374)).then(c => wrapFunctional(c.default || c));
const CausesCard = () => __webpack_require__.e(/* import() | components/causes-card */ 8).then(__webpack_require__.bind(null, 329)).then(c => wrapFunctional(c.default || c));
const CausesCarousel = () => __webpack_require__.e(/* import() | components/causes-carousel */ 9).then(__webpack_require__.bind(null, 373)).then(c => wrapFunctional(c.default || c));
const CausesCarouselThree = () => __webpack_require__.e(/* import() | components/causes-carousel-three */ 10).then(__webpack_require__.bind(null, 365)).then(c => wrapFunctional(c.default || c));
const CausesCarouselTwo = () => __webpack_require__.e(/* import() | components/causes-carousel-two */ 11).then(__webpack_require__.bind(null, 360)).then(c => wrapFunctional(c.default || c));
const CausesGrid = () => __webpack_require__.e(/* import() | components/causes-grid */ 12).then(__webpack_require__.bind(null, 352)).then(c => wrapFunctional(c.default || c));
const CausesPost = () => __webpack_require__.e(/* import() | components/causes-post */ 13).then(__webpack_require__.bind(null, 340)).then(c => wrapFunctional(c.default || c));
const CausesSidebar = () => __webpack_require__.e(/* import() | components/causes-sidebar */ 14).then(__webpack_require__.bind(null, 341)).then(c => wrapFunctional(c.default || c));
const CausesSingle = () => __webpack_require__.e(/* import() | components/causes-single */ 15).then(__webpack_require__.bind(null, 353)).then(c => wrapFunctional(c.default || c));
const ContactHome = () => __webpack_require__.e(/* import() | components/contact-home */ 16).then(__webpack_require__.bind(null, 387)).then(c => wrapFunctional(c.default || c));
const ContactPageForm = () => __webpack_require__.e(/* import() | components/contact-page-form */ 17).then(__webpack_require__.bind(null, 379)).then(c => wrapFunctional(c.default || c));
const DailyUpdates = () => __webpack_require__.e(/* import() | components/daily-updates */ 18).then(__webpack_require__.bind(null, 367)).then(c => wrapFunctional(c.default || c));
const EventCard = () => __webpack_require__.e(/* import() | components/event-card */ 19).then(__webpack_require__.bind(null, 339)).then(c => wrapFunctional(c.default || c));
const EventCarousel = () => __webpack_require__.e(/* import() | components/event-carousel */ 20).then(__webpack_require__.bind(null, 359)).then(c => wrapFunctional(c.default || c));
const EventsGrid = () => __webpack_require__.e(/* import() | components/events-grid */ 22).then(__webpack_require__.bind(null, 354)).then(c => wrapFunctional(c.default || c));
const EventSingle = () => __webpack_require__.e(/* import() | components/event-single */ 21).then(__webpack_require__.bind(null, 381)).then(c => wrapFunctional(c.default || c));
const FeatureOne = () => __webpack_require__.e(/* import() | components/feature-one */ 23).then(__webpack_require__.bind(null, 383)).then(c => wrapFunctional(c.default || c));
const FeatureThree = () => __webpack_require__.e(/* import() | components/feature-three */ 24).then(__webpack_require__.bind(null, 384)).then(c => wrapFunctional(c.default || c));
const FeatureTwo = () => __webpack_require__.e(/* import() | components/feature-two */ 25).then(__webpack_require__.bind(null, 385)).then(c => wrapFunctional(c.default || c));
const Footer = () => __webpack_require__.e(/* import() | components/footer */ 26).then(__webpack_require__.bind(null, 324)).then(c => wrapFunctional(c.default || c));
const FunfactOne = () => __webpack_require__.e(/* import() | components/funfact-one */ 27).then(__webpack_require__.bind(null, 346)).then(c => wrapFunctional(c.default || c));
const GalleryCard = () => __webpack_require__.e(/* import() | components/gallery-card */ 28).then(__webpack_require__.bind(null, 333)).then(c => wrapFunctional(c.default || c));
const GalleryCarousel = () => __webpack_require__.e(/* import() | components/gallery-carousel */ 29).then(__webpack_require__.bind(null, 349)).then(c => wrapFunctional(c.default || c));
const GalleryGrid = () => __webpack_require__.e(/* import() | components/gallery-grid */ 30).then(__webpack_require__.bind(null, 355)).then(c => wrapFunctional(c.default || c));
const GoogleMap = () => __webpack_require__.e(/* import() | components/google-map */ 31).then(__webpack_require__.bind(null, 380)).then(c => wrapFunctional(c.default || c));
const Header = () => __webpack_require__.e(/* import() | components/header */ 32).then(__webpack_require__.bind(null, 323)).then(c => wrapFunctional(c.default || c));
const HeaderThree = () => __webpack_require__.e(/* import() | components/header-three */ 33).then(__webpack_require__.bind(null, 362)).then(c => wrapFunctional(c.default || c));
const HeaderTwo = () => __webpack_require__.e(/* import() | components/header-two */ 34).then(__webpack_require__.bind(null, 356)).then(c => wrapFunctional(c.default || c));
const MainSliderCounter = () => __webpack_require__.e(/* import() | components/main-slider-counter */ 35).then(__webpack_require__.bind(null, 350)).then(c => wrapFunctional(c.default || c));
const MainSliderOne = () => __webpack_require__.e(/* import() | components/main-slider-one */ 36).then(__webpack_require__.bind(null, 372)).then(c => wrapFunctional(c.default || c));
const MainSliderThree = () => __webpack_require__.e(/* import() | components/main-slider-three */ 37).then(__webpack_require__.bind(null, 363)).then(c => wrapFunctional(c.default || c));
const MainSliderTwo = () => __webpack_require__.e(/* import() | components/main-slider-two */ 38).then(__webpack_require__.bind(null, 357)).then(c => wrapFunctional(c.default || c));
const MobileDrawer = () => __webpack_require__.e(/* import() | components/mobile-drawer */ 39).then(__webpack_require__.bind(null, 327)).then(c => wrapFunctional(c.default || c));
const NeedHelp = () => __webpack_require__.e(/* import() | components/need-help */ 40).then(__webpack_require__.bind(null, 386)).then(c => wrapFunctional(c.default || c));
const NewsCard = () => __webpack_require__.e(/* import() | components/news-card */ 41).then(__webpack_require__.bind(null, 330)).then(c => wrapFunctional(c.default || c));
const NewsGrid = () => __webpack_require__.e(/* import() | components/news-grid */ 42).then(__webpack_require__.bind(null, 369)).then(c => wrapFunctional(c.default || c));
const NewsHome = () => __webpack_require__.e(/* import() | components/news-home */ 43).then(__webpack_require__.bind(null, 377)).then(c => wrapFunctional(c.default || c));
const NewsHomeThree = () => __webpack_require__.e(/* import() | components/news-home-three */ 44).then(__webpack_require__.bind(null, 368)).then(c => wrapFunctional(c.default || c));
const NewsHomeTwo = () => __webpack_require__.e(/* import() | components/news-home-two */ 45).then(__webpack_require__.bind(null, 361)).then(c => wrapFunctional(c.default || c));
const NewsSidebar = () => __webpack_require__.e(/* import() | components/news-sidebar */ 46).then(__webpack_require__.bind(null, 344)).then(c => wrapFunctional(c.default || c));
const NewsSingle = () => __webpack_require__.e(/* import() | components/news-single */ 47).then(__webpack_require__.bind(null, 370)).then(c => wrapFunctional(c.default || c));
const PageHeader = () => __webpack_require__.e(/* import() | components/page-header */ 48).then(__webpack_require__.bind(null, 328)).then(c => wrapFunctional(c.default || c));
const Post = () => __webpack_require__.e(/* import() | components/post */ 49).then(__webpack_require__.bind(null, 342)).then(c => wrapFunctional(c.default || c));
const PostAuthor = () => __webpack_require__.e(/* import() | components/post-author */ 50).then(__webpack_require__.bind(null, 343)).then(c => wrapFunctional(c.default || c));
const PostComments = () => __webpack_require__.e(/* import() | components/post-comments */ 51).then(__webpack_require__.bind(null, 334)).then(c => wrapFunctional(c.default || c));
const QuestionAnswer = () => __webpack_require__.e(/* import() | components/question-answer */ 52).then(__webpack_require__.bind(null, 358)).then(c => wrapFunctional(c.default || c));
const SearchPopup = () => __webpack_require__.e(/* import() | components/search-popup */ 53).then(__webpack_require__.bind(null, 326)).then(c => wrapFunctional(c.default || c));
const SectionTitle = () => __webpack_require__.e(/* import() | components/section-title */ 54).then(__webpack_require__.bind(null, 325)).then(c => wrapFunctional(c.default || c));
const SponsorsOne = () => __webpack_require__.e(/* import() | components/sponsors-one */ 55).then(__webpack_require__.bind(null, 338)).then(c => wrapFunctional(c.default || c));
const TestimonialsCard = () => __webpack_require__.e(/* import() | components/testimonials-card */ 56).then(__webpack_require__.bind(null, 331)).then(c => wrapFunctional(c.default || c));
const TestimonialsCarouselOne = () => __webpack_require__.e(/* import() | components/testimonials-carousel-one */ 57).then(__webpack_require__.bind(null, 345)).then(c => wrapFunctional(c.default || c));
const TestimonialsGridOne = () => __webpack_require__.e(/* import() | components/testimonials-grid-one */ 58).then(__webpack_require__.bind(null, 366)).then(c => wrapFunctional(c.default || c));
const ThreeBoxes = () => __webpack_require__.e(/* import() | components/three-boxes */ 59).then(__webpack_require__.bind(null, 375)).then(c => wrapFunctional(c.default || c));
const VideoOne = () => __webpack_require__.e(/* import() | components/video-one */ 60).then(__webpack_require__.bind(null, 376)).then(c => wrapFunctional(c.default || c));
const VolunteerAbout = () => __webpack_require__.e(/* import() | components/volunteer-about */ 61).then(__webpack_require__.bind(null, 347)).then(c => wrapFunctional(c.default || c));
const VolunteerCard = () => __webpack_require__.e(/* import() | components/volunteer-card */ 62).then(__webpack_require__.bind(null, 332)).then(c => wrapFunctional(c.default || c));
const VolunteerGrid = () => __webpack_require__.e(/* import() | components/volunteer-grid */ 63).then(__webpack_require__.bind(null, 371)).then(c => wrapFunctional(c.default || c));

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }
  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};
      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }
      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }
  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(8);

// CONCATENATED MODULE: ./.nuxt/index.js













/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')
 // Source: ..\\plugins\\vue-tiny-slider.js (mode: 'client')
 // Source: ..\\plugins\\jarallax.js (mode: 'client')
 // Source: ..\\plugins\\vue-ellipse-progress.js (mode: 'client')

// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name, {
  ...external_vue_no_ssr_default.a,
  render(h, ctx) {
    if (false) {}
    return external_vue_no_ssr_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}
async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext);
  const router = await createRouter(ssrContext, config, {
    store
  });

  // Add this.$router into store actions/mutations
  store.$router = router;

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule;

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "title": "Project Blue Philippines",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "rel": "stylesheet",
        "href": "\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Nunito:200,200i,300,300i,400,400i,700,700i,800,800i,900,900i"
      }, {
        "rel": "stylesheet",
        "href": "\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fglightbox\u002Fdist\u002Fcss\u002Fglightbox.min.css"
      }, {
        "rel": "stylesheet",
        "href": "\u002F\u002Funpkg.com\u002Faccordion-js@3.1.1\u002Fdist\u002Faccordion.min.css"
      }],
      "script": [{
        "src": "\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fmcstudios\u002Fglightbox\u002Fdist\u002Fjs\u002Fglightbox.min.js",
        "body": true
      }, {
        "src": "\u002F\u002Funpkg.com\u002Faccordion-js@3.1.1\u002Fdist\u002Faccordion.min.js",
        "body": true
      }],
      "loading": {
        "color": "#15c8a0",
        "height": "4px"
      },
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };

  // Make app available into store via this.app
  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Add into store
    store[key] = app[key];

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (external_vue_default.a[installKey]) {
      return;
    }
    external_vue_default.a[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);
  if (false) {}

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (false) {}
  if (false) {}
  if (false) {}

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created;

// Fetch mixin
if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);
if (!global.fetch) {
  global.fetch = external_node_fetch_native_default.a;
}
const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.nuxt.config || {};
  const routerBase = $config._app && $config._app.basePath || '/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // for beforeSerialize(nuxtState)
  ssrContext.beforeSerializeFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new external_vue_default.a(app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
    ssrContext.rendered = () => {
      // Call beforeSerialize() hooks
      ssrContext.beforeSerializeFns.forEach(fn => fn(ssrContext.nuxt));

      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Dispatch store nuxtServerInit
  */
  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  }
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context).then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("vue-count-to");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("vue-observe-visibility");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("vue-wow");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("vue-awesome-swiper");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map