exports.ids = [18];
exports.modules = {

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DailyUpdates.vue?vue&type=template&id=30ddb65e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "why-choose"
  }, [_vm._ssrNode("<div class=\"why-choose-bg\"" + _vm._ssrStyle(null, `background-image: url(${__webpack_require__(94)})`, null) + "></div> "), _vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-8\"><div class=\"why-choose__left\"><div class=\"section-title text-left\"><span class=\"section-title__tagline\">Get Daily Updates</span> <h2 class=\"section-title__title\">\n              Why you should choose our <br>\n              charity foundation\n            </h2></div> <div class=\"why-choose__left-bottom\"><div class=\"why-choose__left-text-box\"><p class=\"why-choose__left-text\">\n                There are many variations of passages of but the majority have\n                suffered alteration in some form by injected humour or which\n                don't look even slightly believe.\n              </p> <h2 class=\"why-choose__left-signature\">Mike Hardson</h2></div> <div class=\"why-choose__left-list-box\"><ul class=\"why-choose__left-list list-unstyled\"><li><div class=\"icon\"><i class=\"fas fa-arrow-circle-right\"></i></div> <div class=\"text\"><h5>Making this first true generator</h5></div></li> <li><div class=\"icon\"><i class=\"fas fa-arrow-circle-right\"></i></div> <div class=\"text\"><h5>Many desktop publish packages</h5></div></li> <li><div class=\"icon\"><i class=\"fas fa-arrow-circle-right\"></i></div> <div class=\"text\"><h5>Lorem Ipsum is not simply</h5></div></li> <li><div class=\"icon\"><i class=\"fas fa-arrow-circle-right\"></i></div> <div class=\"text\"><h5>If you are going to passage</h5></div></li> <li><div class=\"icon\"><i class=\"fas fa-arrow-circle-right\"></i></div> <div class=\"text\"><h5>It has roots in a piece</h5></div></li> <li><div class=\"icon\"><i class=\"fas fa-arrow-circle-right\"></i></div> <div class=\"text\"><h5>The point of using</h5></div></li></ul></div></div></div></div> "), _vm._ssrNode("<div class=\"col-xl-4\">", "</div>", [_vm._ssrNode("<div class=\"why-choose__right\">", "</div>", [_vm._ssrNode("<div class=\"why-choose__urgent\">", "</div>", [_vm._ssrNode("<h3 class=\"why-choose__urgent-title\">\n              Raise Fund for Save Animals\n            </h3> <p class=\"why-choose__urgent-text\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do\n              eiusmod tempor incididunt.\n            </p> "), _vm._ssrNode("<div class=\"why-choose__progress\">", "</div>", [_vm._ssrNode("<div class=\"bar\">", "</div>", [_c('div', {
    directives: [{
      name: "observe-visibility",
      rawName: "v-observe-visibility",
      value: _vm.onVisibilityChange,
      expression: "onVisibilityChange"
    }],
    staticClass: "bar-inner count-bar counted",
    style: `${_vm.startBar ? `width: ${_vm.getAmountPercent(30000, 25270)}%` : ``}`,
    attrs: {
      "data-percent": `${_vm.getAmountPercent(30000, 25270)}%`
    }
  }, [_c('div', {
    directives: [{
      name: "observe-visibility",
      rawName: "v-observe-visibility",
      value: _vm.onVisibilityCountChange,
      expression: "onVisibilityCountChange"
    }],
    staticClass: "count-text"
  }, [_c('countTo', {
    attrs: {
      "startVal": 0,
      "endVal": _vm.startCounter ? _vm.getAmountPercent(30000, 25270) : 0,
      "duration": 3000
    }
  }), _vm._ssrNode("%\n                  ")], 2)])]), _vm._ssrNode(" <div class=\"why-choose__goals\"><p><span>$25,270</span> Raised</p> <p><span>$30,000</span> Goal</p></div>")], 2), _vm._ssrNode(" <a href=\"#\" class=\"why-choose__right-btn\"><i class=\"fa fa-heart\"></i>Donate</a> <div class=\"why-choose__right-category\"><span>Medical</span></div>")], 2)])])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DailyUpdates.vue?vue&type=template&id=30ddb65e&

// EXTERNAL MODULE: external "vue-count-to"
var external_vue_count_to_ = __webpack_require__(59);
var external_vue_count_to_default = /*#__PURE__*/__webpack_require__.n(external_vue_count_to_);

// EXTERNAL MODULE: external "vue-observe-visibility"
var external_vue_observe_visibility_ = __webpack_require__(60);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DailyUpdates.vue?vue&type=script&lang=js&


/* harmony default export */ var DailyUpdatesvue_type_script_lang_js_ = ({
  components: {
    countTo: external_vue_count_to_default.a
  },
  directives: {
    ObserveVisibility: external_vue_observe_visibility_["ObserveVisibility"]
  },
  data() {
    return {
      startBar: false,
      startCounter: false
    };
  },
  methods: {
    getAmountPercent: function (goal, raised) {
      return parseInt(parseInt(raised, 10) / parseInt(goal, 10) * 100, 10);
    },
    onVisibilityChange(isVisible) {
      if (isVisible) {
        this.startBar = true;
      }
    },
    onVisibilityCountChange(isVisible) {
      if (isVisible) {
        this.startCounter = true;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/DailyUpdates.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DailyUpdatesvue_type_script_lang_js_ = (DailyUpdatesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/DailyUpdates.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DailyUpdatesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6832f602"
  
)

/* harmony default export */ var DailyUpdates = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/why-choose-bg.568524a.jpg";

/***/ })

};;
//# sourceMappingURL=daily-updates.js.map