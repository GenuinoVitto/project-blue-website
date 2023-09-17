exports.ids = [53];
exports.modules = {

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchPopup.vue?vue&type=template&id=5b4463ee&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: `search-popup  ${_vm.searchPopup === true ? 'active ' : ' '}`
  }, [_vm._ssrNode("<div class=\"search-popup__overlay search-toggler\"></div> <div class=\"search-popup__content\"><form action=\"#\"><label for=\"search\" class=\"sr-only\">search here</label> <input type=\"text\" id=\"search\" placeholder=\"Search Here...\"> <button type=\"submit\" aria-label=\"search submit\" class=\"thm-btn\"><i class=\"icon-magnifying-glass\"></i></button></form></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SearchPopup.vue?vue&type=template&id=5b4463ee&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchPopup.vue?vue&type=script&lang=js&

/* harmony default export */ var SearchPopupvue_type_script_lang_js_ = ({
  computed: {
    searchPopup() {
      return this.$store.state.searchPopupStatus;
    }
  },
  methods: {
    ...Object(external_vuex_["mapMutations"])({
      searchPopupStatusChange: "changeSearchPopupStatus"
    })
  }
});
// CONCATENATED MODULE: ./components/SearchPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SearchPopupvue_type_script_lang_js_ = (SearchPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/SearchPopup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SearchPopupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7b70b174"
  
)

/* harmony default export */ var SearchPopup = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=search-popup.js.map