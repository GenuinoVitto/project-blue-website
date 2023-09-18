exports.ids = [27];
exports.modules = {

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunfactOne.vue?vue&type=template&id=66f804b0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "counters-one about-page-counter"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<ul class=\"counters-one__box list-unstyled\">", "</ul>", [_vm._ssrNode("<li class=\"counter-one__single\">", "</li>", [_c('h3', {
    directives: [{
      name: "observe-visibility",
      rawName: "v-observe-visibility",
      value: _vm.onVisibilityCountChange,
      expression: "onVisibilityCountChange"
    }]
  }, [_c('countTo', {
    attrs: {
      "startVal": 0,
      "endVal": _vm.startCounter ? 870 : 0,
      "duration": 3000
    }
  })], 1), _vm._ssrNode(" <span class=\"counter-one__letter\">K</span> <p class=\"counter-one__text\">Total Donations</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"counter-one__single\">", "</li>", [_c('h3', {
    directives: [{
      name: "observe-visibility",
      rawName: "v-observe-visibility",
      value: _vm.onVisibilityCountChange,
      expression: "onVisibilityCountChange"
    }]
  }, [_c('countTo', {
    attrs: {
      "startVal": 0,
      "endVal": _vm.startCounter ? 480 : 0,
      "duration": 3000
    }
  })], 1), _vm._ssrNode(" <p class=\"counter-one__text\">Campaigns Closed</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"counter-one__single\">", "</li>", [_c('h3', {
    directives: [{
      name: "observe-visibility",
      rawName: "v-observe-visibility",
      value: _vm.onVisibilityCountChange,
      expression: "onVisibilityCountChange"
    }]
  }, [_c('countTo', {
    attrs: {
      "startVal": 0,
      "endVal": _vm.startCounter ? 977 : 0,
      "duration": 3000
    }
  })], 1), _vm._ssrNode(" <span class=\"counter-one__letter\">K</span> <p class=\"counter-one__text\">Happy People</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"counter-one__single\">", "</li>", [_c('h3', {
    directives: [{
      name: "observe-visibility",
      rawName: "v-observe-visibility",
      value: _vm.onVisibilityCountChange,
      expression: "onVisibilityCountChange"
    }]
  }, [_c('countTo', {
    attrs: {
      "startVal": 0,
      "endVal": _vm.startCounter ? 63 : 0,
      "duration": 3000
    }
  })], 1), _vm._ssrNode(" <span class=\"counter-one__letter\">+</span> <p class=\"counter-one__text\">Our Volunteers</p>")], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FunfactOne.vue?vue&type=template&id=66f804b0&

// EXTERNAL MODULE: external "vue-count-to"
var external_vue_count_to_ = __webpack_require__(59);
var external_vue_count_to_default = /*#__PURE__*/__webpack_require__.n(external_vue_count_to_);

// EXTERNAL MODULE: external "vue-observe-visibility"
var external_vue_observe_visibility_ = __webpack_require__(60);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunfactOne.vue?vue&type=script&lang=js&


/* harmony default export */ var FunfactOnevue_type_script_lang_js_ = ({
  components: {
    countTo: external_vue_count_to_default.a
  },
  directives: {
    ObserveVisibility: external_vue_observe_visibility_["ObserveVisibility"]
  },
  data() {
    return {
      startCounter: false
    };
  },
  methods: {
    onVisibilityCountChange(isVisible) {
      if (isVisible) {
        this.startCounter = true;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/FunfactOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FunfactOnevue_type_script_lang_js_ = (FunfactOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/FunfactOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FunfactOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cf1931ee"
  
)

/* harmony default export */ var FunfactOne = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=funfact-one.js.map