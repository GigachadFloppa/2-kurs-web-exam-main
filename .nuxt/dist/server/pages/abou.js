exports.ids = [5];
exports.modules = {

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/abou.vue?vue&type=template&id=c5c2b880&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-row',[_c('v-col',{attrs:{"cols":"12"},domProps:{"innerHTML":_vm._s(_vm.text)}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/abou.vue?vue&type=template&id=c5c2b880&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/abou.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var abouvue_type_script_lang_js_ = ({
  async mounted() {
    const {
      data
    } = await this.$axios.get(`https://demo-api.vsdev.space/api/farm/about_page`);
    this.text = data.text;
  },

  data: () => ({
    text: ""
  })
});
// CONCATENATED MODULE: ./pages/abou.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_abouvue_type_script_lang_js_ = (abouvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(17);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(134);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(135);

// CONCATENATED MODULE: ./pages/abou.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_abouvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0c9939ba"
  
)

/* harmony default export */ var abou = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCol: VCol["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=abou.js.map