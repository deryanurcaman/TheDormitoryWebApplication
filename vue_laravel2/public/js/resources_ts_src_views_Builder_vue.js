(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_src_views_Builder_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=script&lang=ts":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _core_helpers_documentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/helpers/documentation */ "./resources/ts/src/core/helpers/documentation.ts");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "CodeHighlighter",
  props: {
    lang: String,
    fieldHeight: Number
  },
  setup: function setup(props) {
    var height = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.fieldHeight);
    var init = (0,_core_helpers_documentation__WEBPACK_IMPORTED_MODULE_1__.useCopyClipboard)().init;
    var getHeightInPixesls = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return height.value + "px";
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      prismjs__WEBPACK_IMPORTED_MODULE_2___default().highlightAll();
      init();
    });
    return {
      getHeightInPixesls: getHeightInPixesls
    };
  },
  components: {}
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/Builder.vue?vue&type=script&lang=ts":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/Builder.vue?vue&type=script&lang=ts ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _core_helpers_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/helpers/config */ "./resources/ts/src/core/helpers/config.ts");
/* harmony import */ var _components_highlighters_CodeHighlighter_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/highlighters/CodeHighlighter.vue */ "./resources/ts/src/components/highlighters/CodeHighlighter.vue");
/* harmony import */ var _core_helpers_documentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/helpers/documentation */ "./resources/ts/src/core/helpers/documentation.ts");
/* harmony import */ var _core_helpers_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/helpers/breadcrumb */ "./resources/ts/src/core/helpers/breadcrumb.ts");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "builder",
  components: {
    CodeHighlighter: _components_highlighters_CodeHighlighter_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  setup: function setup() {
    var tabIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      // set the tab from previous
      tabIndex.value = parseInt(localStorage.getItem("builderTab") || "0");
      (0,_core_helpers_breadcrumb__WEBPACK_IMPORTED_MODULE_4__.setCurrentPageTitle)("Layout Builder");
    });
    /**
     * Reset config
     * @param event
     */

    var reset = function reset(event) {
      event.preventDefault(); // remove existing saved config

      localStorage.removeItem("config");
      window.location.reload();
    };
    /**
     * Set active tab when the tab get clicked
     * @param event
     */


    var setActiveTab = function setActiveTab(event) {
      tabIndex.value = parseInt(event.target.getAttribute("data-tab-index")); // keep active tab

      localStorage.setItem("builderTab", tabIndex.value.toString());
    };
    /**
     * Submit form
     * @param event
     */


    var submit = function submit(event) {
      event.preventDefault(); // save new config to localStorage

      localStorage.setItem("config", JSON.stringify(_core_helpers_config__WEBPACK_IMPORTED_MODULE_1__.config.value));
      window.location.reload();
    };

    return {
      tabIndex: tabIndex,
      config: _core_helpers_config__WEBPACK_IMPORTED_MODULE_1__.config,
      reset: reset,
      setActiveTab: setActiveTab,
      submit: submit,
      themeName: _core_helpers_documentation__WEBPACK_IMPORTED_MODULE_3__.themeName
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=template&id=9bc851e6&ts=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=template&id=9bc851e6&ts=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "py-5"
};
var _hoisted_2 = {
  "class": "highlight"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "highlight-copy btn",
  "data-bs-toggle": "tooltip",
  title: "",
  "data-bs-original-title": "Copy code"
}, " copy ", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "highlight-code"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("\n          ");

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("\n        ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("language-" + _ctx.lang),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      height: _ctx.getHeightInPixesls
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("language-" + _ctx.lang)
  }, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default"), _hoisted_6], 2
  /* CLASS */
  )], 6
  /* CLASS, STYLE */
  )])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/Builder.vue?vue&type=template&id=3e9332d2&ts=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/Builder.vue?vue&type=template&id=3e9332d2&ts=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card mb-10"
};
var _hoisted_2 = {
  "class": "card-body d-flex align-items-center py-8"
};
var _hoisted_3 = {
  "class": "d-flex h-80px w-80px flex-shrink-0 flex-center position-relative"
};
var _hoisted_4 = {
  "class": "svg-icon svg-icon-primary position-absolute opacity-15"
};
var _hoisted_5 = {
  "class": "svg-icon svg-icon-3x svg-icon-primary position-absolute"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ms-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "list-unstyled text-gray-600 fw-bold fs-6 p-0 m-0"
}, " The layout builder is to assist your set and configure your preferred project layout specifications and preview it in real time and export the HTML template with its includable partials of this demo. The downloaded version does not include the assets folder since the layout builder's main purpose is to help to generate the final HTML code without hassle. ")], -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "card mb-10"
};
var _hoisted_8 = {
  "class": "card-header card-header-stretch"
};
var _hoisted_9 = {
  "class": "nav nav-stretch nav-line-tabs fw-bold border-0",
  role: "tablist",
  id: "kt_layout_builder_tabs",
  ref: "kt_layout_builder_tabs"
};
var _hoisted_10 = {
  "class": "nav-item"
};
var _hoisted_11 = {
  "class": "nav-item"
};
var _hoisted_12 = {
  "class": "nav-item"
};
var _hoisted_13 = {
  "class": "nav-item"
};
var _hoisted_14 = {
  "class": "nav-item"
};
var _hoisted_15 = {
  "class": "nav-item"
};
var _hoisted_16 = {
  "class": "card-body"
};
var _hoisted_17 = {
  "class": "tab-content pt-3",
  id: "kt_tabs"
};
var _hoisted_18 = {
  "class": "row mb-10"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-lg-3 col-form-label text-lg-end"
}, "Loader:", -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "col-lg-9 col-xl-4"
};
var _hoisted_21 = {
  "class": "form-check form-check-custom form-check-solid form-switch mb-2"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-text text-muted"
}, "Display Page Loader", -1
/* HOISTED */
);

var _hoisted_23 = {
  "class": "row mb-10"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-lg-3 col-form-label text-lg-end"
}, "Loader Type:", -1
/* HOISTED */
);

var _hoisted_25 = {
  "class": "col-lg-9 col-xl-4"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "default"
}, "Spinner", -1
/* HOISTED */
);

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "spinner-message"
}, "Spinner & Message", -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "spinner-logo"
}, "Spinner & Logo", -1
/* HOISTED */
);

var _hoisted_29 = [_hoisted_26, _hoisted_27, _hoisted_28];

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-text text-muted"
}, "Select Page Loader type", -1
/* HOISTED */
);

var _hoisted_31 = {
  "class": "row mb-10"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-lg-3 col-form-label text-lg-end"
}, "Fixed Header:", -1
/* HOISTED */
);

var _hoisted_33 = {
  "class": "col-lg-9 col-xl-4"
};
var _hoisted_34 = {
  "class": "form-check form-check-custom form-check-solid form-switch mb-5"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "form-check-label text-muted"
}, "Desktop", -1
/* HOISTED */
);

var _hoisted_36 = {
  "class": "form-check form-check-custom form-check-solid form-switch mb-5"
};

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "form-check-label text-muted"
}, "Tablet & Mobile", -1
/* HOISTED */
);

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-text text-muted"
}, "Enable fixed header", -1
/* HOISTED */
);

var _hoisted_39 = {
  "class": "row mb-10"
};

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-lg-3 col-form-label text-lg-end"
}, "Menu Icon:", -1
/* HOISTED */
);

var _hoisted_41 = {
  "class": "col-lg-9 col-xl-4"
};

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "svg"
}, "SVG Icon", -1
/* HOISTED */
);

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "font"
}, "Font Icon", -1
/* HOISTED */
);

var _hoisted_44 = [_hoisted_42, _hoisted_43];

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-text text-muted"
}, "Select menu icon type.", -1
/* HOISTED */
);

var _hoisted_46 = {
  "class": "row mb-10"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-lg-3 col-form-label text-lg-end"
}, "Width:", -1
/* HOISTED */
);

var _hoisted_48 = {
  "class": "col-lg-9 col-xl-4"
};

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "fluid"
}, "Fluid", -1
/* HOISTED */
);

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "fixed"
}, "Fixed", -1
/* HOISTED */
);

var _hoisted_51 = [_hoisted_49, _hoisted_50];

var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-text text-muted"
}, " Select header width type. ", -1
/* HOISTED */
);

var _hoisted_53 = {
  "class": "row mb-10"
};

var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-lg-3 col-form-label text-lg-end"
}, "Display:", -1
/* HOISTED */
);

var _hoisted_55 = {
  "class": "col-lg-9 col-xl-4"
};
var _hoisted_56 = {
  "class": "form-check form-check-custom form-check-solid form-switch mb-2"
};

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-text text-muted"
}, "Display Subheader", -1
/* HOISTED */
);

var _hoisted_58 = {
  "class": "row mb-10"
};

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-lg-3 col-form-label text-lg-end"
}, "Width:", -1
/* HOISTED */
);

var _hoisted_60 = {
  "class": "col-lg-9 col-xl-4"
};

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "fluid"
}, "Fluid", -1
/* HOISTED */
);

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "fixed"
}, "Fixed", -1
/* HOISTED */
);

var _hoisted_63 = [_hoisted_61, _hoisted_62];

var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-text text-muted"
}, " Select layout width type. ", -1
/* HOISTED */
);

var _hoisted_65 = {
  "class": "row mb-10"
};

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-lg-3 col-form-label text-lg-end"
}, "Theme:", -1
/* HOISTED */
);

var _hoisted_67 = {
  "class": "col-lg-9 col-xl-4"
};

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "dark"
}, "Dark", -1
/* HOISTED */
);

var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "light"
}, "Light", -1
/* HOISTED */
);

var _hoisted_70 = [_hoisted_68, _hoisted_69];

var _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-text text-muted"
}, "Set aside theme", -1
/* HOISTED */
);

var _hoisted_72 = {
  "class": "row mb-10"
};

var _hoisted_73 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-lg-3 col-form-label text-lg-end"
}, "Menu Icon:", -1
/* HOISTED */
);

var _hoisted_74 = {
  "class": "col-lg-9 col-xl-4"
};

var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "svg"
}, "SVG Icon", -1
/* HOISTED */
);

var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "font"
}, "Font Icon", -1
/* HOISTED */
);

var _hoisted_77 = [_hoisted_75, _hoisted_76];

var _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-text text-muted"
}, "Select menu icon type.", -1
/* HOISTED */
);

var _hoisted_79 = {
  "class": "row mb-10"
};

var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-lg-3 col-form-label text-lg-end"
}, "Display:", -1
/* HOISTED */
);

var _hoisted_81 = {
  "class": "col-lg-9 col-xl-4"
};
var _hoisted_82 = {
  "class": "switch switch-icon"
};
var _hoisted_83 = {
  "class": "form-check form-check-custom form-check-solid form-switch mb-2"
};

var _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-text text-muted"
}, "Display Aside", -1
/* HOISTED */
);

var _hoisted_85 = {
  "class": "row mb-10"
};

var _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-lg-3 col-form-label text-lg-end"
}, "Minimized:", -1
/* HOISTED */
);

var _hoisted_87 = {
  "class": "col-lg-9 col-xl-4"
};
var _hoisted_88 = {
  "class": "switch switch-icon"
};
var _hoisted_89 = {
  "class": "form-check form-check-custom form-check-solid form-switch mb-2"
};

var _hoisted_90 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-text text-muted"
}, " Minimize secondary panel by default ", -1
/* HOISTED */
);

var _hoisted_91 = {
  "class": "row mb-10"
};

var _hoisted_92 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-lg-3 col-form-label text-lg-end"
}, "Width:", -1
/* HOISTED */
);

var _hoisted_93 = {
  "class": "col-lg-9 col-xl-4"
};

var _hoisted_94 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "fluid"
}, "Fluid", -1
/* HOISTED */
);

var _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "fixed"
}, "Fixed", -1
/* HOISTED */
);

var _hoisted_96 = [_hoisted_94, _hoisted_95];

var _hoisted_97 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-text text-muted"
}, " Select layout width type. ", -1
/* HOISTED */
);

var _hoisted_98 = {
  "class": "row mb-10"
};

var _hoisted_99 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "col-lg-3 col-form-label text-lg-end"
}, "Width:", -1
/* HOISTED */
);

var _hoisted_100 = {
  "class": "col-lg-9 col-xl-4"
};

var _hoisted_101 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "fluid"
}, "Fluid", -1
/* HOISTED */
);

var _hoisted_102 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "fixed"
}, "Fixed", -1
/* HOISTED */
);

var _hoisted_103 = [_hoisted_101, _hoisted_102];

var _hoisted_104 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-text text-muted"
}, " Select layout width type. ", -1
/* HOISTED */
);

var _hoisted_105 = {
  "class": "card-footer py-6"
};
var _hoisted_106 = {
  "class": "row"
};

var _hoisted_107 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-3"
}, null, -1
/* HOISTED */
);

var _hoisted_108 = {
  "class": "col-lg-9"
};

var _hoisted_109 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<input type=\"hidden\" id=\"kt_layout_builder_tab\" name=\"layout-builder[tab]\"><input type=\"hidden\" id=\"kt_layout_builder_action\" name=\"layout-builder[action]\"><button type=\"submit\" id=\"kt_layout_builder_preview\" class=\"btn btn-primary me-2\"><span class=\"indicator-label\"> Preview </span><span class=\"indicator-progress\"> Please wait... <span class=\"spinner-border spinner-border-sm align-middle ms-2\"></span></span></button>", 3);

var _hoisted_112 = {
  "class": "card"
};
var _hoisted_113 = {
  "class": "card-body p-10 p-lg-15"
};

var _hoisted_114 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "anchor fw-bolder mb-5",
  id: "overview"
}, "Generated config", -1
/* HOISTED */
);

var _hoisted_115 = {
  "class": "py-5"
};

var _hoisted_116 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" This config is used as a ");

var _hoisted_117 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" layout config, you can update default values inside file ");

var _hoisted_118 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "metronic/vue/theme/src/core/config/DefaultLayoutConfig.ts", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inline_svg = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inline-svg");

  var _component_CodeHighlighter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CodeHighlighter");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Layout Builder Notice"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/abstract/abs051.svg",
    "class": "h-80px w-80px"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/coding/cod009.svg"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Description"), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Description")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Layout Builder Notice"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link", {
      active: _ctx.tabIndex === 0
    }]),
    "data-bs-toggle": "tab",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.setActiveTab($event);
    }),
    "data-tab-index": "0",
    href: "#kt_builder_main",
    role: "tab"
  }, " Main ", 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link", {
      active: _ctx.tabIndex === 1
    }]),
    "data-bs-toggle": "tab",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.setActiveTab($event);
    }),
    "data-tab-index": "1",
    href: "#kt_builder_header",
    role: "tab"
  }, " Header ", 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link", {
      active: _ctx.tabIndex === 2
    }]),
    "data-bs-toggle": "tab",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.setActiveTab($event);
    }),
    "data-tab-index": "2",
    href: "#kt_builder_subheader",
    role: "tab"
  }, " Subheader ", 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link", {
      active: _ctx.tabIndex === 3
    }]),
    "data-bs-toggle": "tab",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.setActiveTab($event);
    }),
    "data-tab-index": "3",
    href: "#kt_builder_aside",
    role: "tab"
  }, " Aside ", 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link", {
      active: _ctx.tabIndex === 4
    }]),
    "data-bs-toggle": "tab",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.setActiveTab($event);
    }),
    "data-tab-index": "4",
    href: "#kt_builder_content",
    role: "tab"
  }, " Content ", 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link", {
      active: _ctx.tabIndex === 5
    }]),
    "data-bs-toggle": "tab",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return _ctx.setActiveTab($event);
    }),
    "data-tab-index": "5",
    href: "#kt_builder_footer",
    role: "tab"
  }, " Footer ", 2
  /* CLASS */
  )])], 512
  /* NEED_PATCH */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Form"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "form",
    id: "kt_layout_builder_form",
    onSubmit: _cache[26] || (_cache[26] = function ($event) {
      return _ctx.submit($event);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["tab-pane", {
      active: _ctx.tabIndex === 0
    }]),
    id: "kt_builder_main"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return _ctx.config.loader.display = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, _ctx.config.loader.display]])]), _hoisted_22])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select form-select-solid",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return _ctx.config.loader.type = $event;
    })
  }, _hoisted_29, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.config.loader.type]]), _hoisted_30])])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["tab-pane", {
      active: _ctx.tabIndex === 1
    }]),
    id: "kt_builder_header"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return _ctx.config.header.fixed.desktop = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.config.header.fixed.desktop]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return _ctx.config.header.fixed.tabletAndMobile = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.config.header.fixed.tabletAndMobile]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return _ctx.config.header.fixed.desktop = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, _ctx.config.header.fixed.desktop]]), _hoisted_35]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return _ctx.config.header.fixed.tabletAndMobile = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, _ctx.config.header.fixed.tabletAndMobile]]), _hoisted_37]), _hoisted_38])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select form-select-solid",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return _ctx.config.header.menuIcon = $event;
    })
  }, _hoisted_44, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.config.header.menuIcon]]), _hoisted_45])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select form-select-solid",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return _ctx.config.header.width = $event;
    })
  }, _hoisted_51, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.config.header.width]]), _hoisted_52])])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["tab-pane", {
      active: _ctx.tabIndex === 2
    }]),
    id: "kt_builder_subheader"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [_hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return _ctx.config.toolbar.display = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.config.toolbar.display]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return _ctx.config.toolbar.display = $event;
    }),
    value: "true"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, _ctx.config.toolbar.display]])]), _hoisted_57])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [_hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select form-select-solid",
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return _ctx.config.toolbar.width = $event;
    })
  }, _hoisted_63, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.config.toolbar.width]]), _hoisted_64])])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["tab-pane", {
      active: _ctx.tabIndex === 3
    }]),
    id: "kt_builder_aside"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [_hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select form-select-solid",
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return _ctx.config.aside.theme = $event;
    })
  }, _hoisted_70, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.config.aside.theme]]), _hoisted_71])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [_hoisted_73, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select form-select-solid",
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return _ctx.config.aside.menuIcon = $event;
    })
  }, _hoisted_77, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.config.aside.menuIcon]]), _hoisted_78])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [_hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return _ctx.config.aside.display = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.config.aside.display]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return _ctx.config.aside.display = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, _ctx.config.aside.display]])])]), _hoisted_84])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [_hoisted_86, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_88, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
      return _ctx.config.aside.minimized = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.config.aside.minimized]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_89, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
      return _ctx.config.aside.minimized = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, _ctx.config.aside.minimized]])])]), _hoisted_90])])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["tab-pane", {
      active: _ctx.tabIndex === 4
    }]),
    id: "kt_builder_content"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_91, [_hoisted_92, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_93, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select form-select-solid",
    "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
      return _ctx.config.content.width = $event;
    })
  }, _hoisted_96, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.config.content.width]]), _hoisted_97])])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["tab-pane", {
      active: _ctx.tabIndex === 5
    }]),
    id: "kt_builder_footer"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_98, [_hoisted_99, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select form-select-solid",
    "onUpdate:modelValue": _cache[24] || (_cache[24] = function ($event) {
      return _ctx.config.footer.width = $event;
    })
  }, _hoisted_103, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.config.footer.width]]), _hoisted_104])])], 2
  /* CLASS */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Footer"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_105, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_106, [_hoisted_107, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_108, [_hoisted_109, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[25] || (_cache[25] = function ($event) {
      return _ctx.reset($event);
    }),
    type: "button",
    id: "kt_layout_builder_reset",
    "class": "btn btn-active-light btn-color-muted fw-bold"
  }, " Reset ")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Footer")], 32
  /* HYDRATE_EVENTS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Form")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_112, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card Body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_113, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Heading"), _hoisted_114, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Heading"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_115, [_hoisted_116, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.themeName), 1
  /* TEXT */
  ), _hoisted_117, _hoisted_118]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeHighlighter, {
    lang: "json"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.config), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/ts/src/core/helpers/breadcrumb.ts":
/*!*****************************************************!*\
  !*** ./resources/ts/src/core/helpers/breadcrumb.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCurrentPageBreadcrumbs": () => (/* binding */ setCurrentPageBreadcrumbs),
/* harmony export */   "setCurrentPageTitle": () => (/* binding */ setCurrentPageTitle)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/ts/src/store/index.ts");
/* harmony import */ var _store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/enums/StoreEnums */ "./resources/ts/src/store/enums/StoreEnums.ts");


/**
 * Sets current page breadcrumbs
 * @param {string} pageTitle Current page title
 * @param {Array<string>} breadcrumbs Current page breadcrumbs
 */

var setCurrentPageBreadcrumbs = function setCurrentPageBreadcrumbs(pageTitle, breadcrumbs) {
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.SET_BREADCRUMB_ACTION, {
    title: pageTitle,
    pageBreadcrumbPath: breadcrumbs
  });
};
/**
 * Sets current page breadcrumbs
 * @param {string} title Current page title name
 */

var setCurrentPageTitle = function setCurrentPageTitle(title) {
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.SET_BREADCRUMB_ACTION, {
    title: title
  });
};

/***/ }),

/***/ "./resources/ts/src/core/helpers/config.ts":
/*!*************************************************!*\
  !*** ./resources/ts/src/core/helpers/config.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "displaySidebar": () => (/* binding */ displaySidebar),
/* harmony export */   "footerWidthFluid": () => (/* binding */ footerWidthFluid),
/* harmony export */   "headerWidthFluid": () => (/* binding */ headerWidthFluid),
/* harmony export */   "headerLeft": () => (/* binding */ headerLeft),
/* harmony export */   "asideDisplay": () => (/* binding */ asideDisplay),
/* harmony export */   "toolbarWidthFluid": () => (/* binding */ toolbarWidthFluid),
/* harmony export */   "toolbarDisplay": () => (/* binding */ toolbarDisplay),
/* harmony export */   "loaderEnabled": () => (/* binding */ loaderEnabled),
/* harmony export */   "contentWidthFluid": () => (/* binding */ contentWidthFluid),
/* harmony export */   "loaderLogo": () => (/* binding */ loaderLogo),
/* harmony export */   "asideEnabled": () => (/* binding */ asideEnabled),
/* harmony export */   "asideTheme": () => (/* binding */ asideTheme),
/* harmony export */   "subheaderDisplay": () => (/* binding */ subheaderDisplay),
/* harmony export */   "asideMenuIcons": () => (/* binding */ asideMenuIcons),
/* harmony export */   "themeLightLogo": () => (/* binding */ themeLightLogo),
/* harmony export */   "themeDarkLogo": () => (/* binding */ themeDarkLogo),
/* harmony export */   "headerMenuIcons": () => (/* binding */ headerMenuIcons)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/index */ "./resources/ts/src/store/index.ts");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");


/**
 * Returns layout config
 * @returns {object}
 */

var config = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig();
});
/**
 * Set the sidebar display
 * @returns {boolean}
 */

var displaySidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("sidebar.display");
});
/**
 * Check if footer container is fluid
 * @returns {boolean}
 */

var footerWidthFluid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("footer.width") === "fluid";
});
/**
 * Check if header container is fluid
 * @returns {boolean}
 */

var headerWidthFluid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("header.width") === "fluid";
});
/**
 * Returns header left part type
 * @returns {string}
 */

var headerLeft = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("header.left");
});
/**
 * Set the aside display
 * @returns {boolean}
 */

var asideDisplay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("aside.display") === true;
});
/**
 * Check if toolbar width is fluid
 * @returns {boolean}
 */

var toolbarWidthFluid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("toolbar.width") === "fluid";
});
/**
 * Set the toolbar display
 * @returns {boolean}
 */

var toolbarDisplay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("toolbar.display");
});
/**
 * Check if the page loader is enabled
 * @returns {boolean}
 */

var loaderEnabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("loader.display");
});
/**
 * Check if container width is fluid
 * @returns {boolean}
 */

var contentWidthFluid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("content.width") === "fluid";
});
/**
 * Page loader logo image
 * @returns {string}
 */

var loaderLogo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return process.env.BASE_URL + _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("loader.logo");
});
/**
 * Check if the aside menu is enabled
 * @returns {boolean}
 */

var asideEnabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return !!_store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("aside.display");
});
/**
 * Set the aside theme
 * @returns {string}
 */

var asideTheme = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("aside.theme");
});
/**
 * Set the subheader display
 * @returns {boolean}
 */

var subheaderDisplay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("toolbar.display");
});
/**
 * Set the aside menu icon type
 * @returns {string}
 */

var asideMenuIcons = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("aside.menuIcon");
});
/**
 * Light theme logo image
 * @returns {string}
 */

var themeLightLogo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("main.logo.light");
});
/**
 * Dark theme logo image
 * @returns {string}
 */

var themeDarkLogo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("main.logo.dark");
});
/**
 * Set the header menu icon type
 * @returns {string}
 */

var headerMenuIcons = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("header.menuIcon");
});

/***/ }),

/***/ "./resources/ts/src/core/helpers/documentation.ts":
/*!********************************************************!*\
  !*** ./resources/ts/src/core/helpers/documentation.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "themeName": () => (/* binding */ themeName),
/* harmony export */   "version": () => (/* binding */ version),
/* harmony export */   "demo": () => (/* binding */ demo),
/* harmony export */   "useCopyClipboard": () => (/* binding */ useCopyClipboard)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/index */ "./resources/ts/src/store/index.ts");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_2__);



/* eslint-disable  @typescript-eslint/no-explicit-any */

/**
 * Return name of the theme
 * @returns {string}
 */

var themeName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("themeName");
});
/**
 * Return version of the theme
 * @returns {string}
 */

var version = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("themeVersion");
});
/**
 * Return demo name
 * @returns {string}
 */

var demo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("demo");
}); //code copy button initialization

var useCopyClipboard = function useCopyClipboard() {
  var _init = function _init(element) {
    var elements = element;

    if (typeof elements === "undefined") {
      elements = document.querySelectorAll(".highlight");
    }

    if (elements && elements.length > 0) {
      for (var i = 0; i < elements.length; ++i) {
        var highlight = elements[i];
        var copy = highlight.querySelector(".highlight-copy");

        if (copy) {
          var clipboard = new (clipboard__WEBPACK_IMPORTED_MODULE_2___default())(copy, {
            target: function target(trigger) {
              var highlight = trigger.closest(".highlight");

              if (highlight) {
                var el = highlight.querySelector(".tab-pane.active");

                if (el == null) {
                  el = highlight.querySelector(".highlight-code");
                }

                return el;
              }

              return highlight;
            }
          });
          clipboard.on("success", function (e) {
            var caption = e.trigger.innerHTML;
            e.trigger.innerHTML = "copied";
            e.clearSelection();
            setTimeout(function () {
              e.trigger.innerHTML = caption;
            }, 2000);
          });
        }
      }
    }
  };

  return {
    init: function init(element) {
      _init(element);
    }
  };
};

/***/ }),

/***/ "./node_modules/clipboard/dist/clipboard.js":
/*!**************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.js ***!
  \**************************************************/
/***/ (function(module) {

/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 134:
/***/ (function(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_622__) {

"use strict";

// EXPORTS
__nested_webpack_require_622__.d(__webpack_exports__, {
  "default": function() { return /* binding */ clipboard; }
});

// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __nested_webpack_require_622__(279);
var tiny_emitter_default = /*#__PURE__*/__nested_webpack_require_622__.n(tiny_emitter);
// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __nested_webpack_require_622__(370);
var listen_default = /*#__PURE__*/__nested_webpack_require_622__.n(listen);
// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __nested_webpack_require_622__(817);
var select_default = /*#__PURE__*/__nested_webpack_require_622__.n(src_select);
;// CONCATENATED MODULE: ./src/clipboard-action.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * Inner class which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 */

var ClipboardAction = /*#__PURE__*/function () {
  /**
   * @param {Object} options
   */
  function ClipboardAction(options) {
    _classCallCheck(this, ClipboardAction);

    this.resolveOptions(options);
    this.initSelection();
  }
  /**
   * Defines base properties passed from constructor.
   * @param {Object} options
   */


  _createClass(ClipboardAction, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = options.action;
      this.container = options.container;
      this.emitter = options.emitter;
      this.target = options.target;
      this.text = options.text;
      this.trigger = options.trigger;
      this.selectedText = '';
    }
    /**
     * Decides which selection strategy is going to be applied based
     * on the existence of `text` and `target` properties.
     */

  }, {
    key: "initSelection",
    value: function initSelection() {
      if (this.text) {
        this.selectFake();
      } else if (this.target) {
        this.selectTarget();
      }
    }
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     */

  }, {
    key: "createFakeElement",
    value: function createFakeElement() {
      var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
      this.fakeElem = document.createElement('textarea'); // Prevent zooming on iOS

      this.fakeElem.style.fontSize = '12pt'; // Reset box model

      this.fakeElem.style.border = '0';
      this.fakeElem.style.padding = '0';
      this.fakeElem.style.margin = '0'; // Move element out of screen horizontally

      this.fakeElem.style.position = 'absolute';
      this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

      var yPosition = window.pageYOffset || document.documentElement.scrollTop;
      this.fakeElem.style.top = "".concat(yPosition, "px");
      this.fakeElem.setAttribute('readonly', '');
      this.fakeElem.value = this.text;
      return this.fakeElem;
    }
    /**
     * Get's the value of fakeElem,
     * and makes a selection on it.
     */

  }, {
    key: "selectFake",
    value: function selectFake() {
      var _this = this;

      var fakeElem = this.createFakeElement();

      this.fakeHandlerCallback = function () {
        return _this.removeFake();
      };

      this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;
      this.container.appendChild(fakeElem);
      this.selectedText = select_default()(fakeElem);
      this.copyText();
      this.removeFake();
    }
    /**
     * Only removes the fake element after another click event, that way
     * a user can hit `Ctrl+C` to copy because selection still exists.
     */

  }, {
    key: "removeFake",
    value: function removeFake() {
      if (this.fakeHandler) {
        this.container.removeEventListener('click', this.fakeHandlerCallback);
        this.fakeHandler = null;
        this.fakeHandlerCallback = null;
      }

      if (this.fakeElem) {
        this.container.removeChild(this.fakeElem);
        this.fakeElem = null;
      }
    }
    /**
     * Selects the content from element passed on `target` property.
     */

  }, {
    key: "selectTarget",
    value: function selectTarget() {
      this.selectedText = select_default()(this.target);
      this.copyText();
    }
    /**
     * Executes the copy operation based on the current selection.
     */

  }, {
    key: "copyText",
    value: function copyText() {
      var succeeded;

      try {
        succeeded = document.execCommand(this.action);
      } catch (err) {
        succeeded = false;
      }

      this.handleResult(succeeded);
    }
    /**
     * Fires an event based on the copy operation result.
     * @param {Boolean} succeeded
     */

  }, {
    key: "handleResult",
    value: function handleResult(succeeded) {
      this.emitter.emit(succeeded ? 'success' : 'error', {
        action: this.action,
        text: this.selectedText,
        trigger: this.trigger,
        clearSelection: this.clearSelection.bind(this)
      });
    }
    /**
     * Moves focus away from `target` and back to the trigger, removes current selection.
     */

  }, {
    key: "clearSelection",
    value: function clearSelection() {
      if (this.trigger) {
        this.trigger.focus();
      }

      document.activeElement.blur();
      window.getSelection().removeAllRanges();
    }
    /**
     * Sets the `action` to be performed which can be either 'copy' or 'cut'.
     * @param {String} action
     */

  }, {
    key: "destroy",

    /**
     * Destroy lifecycle.
     */
    value: function destroy() {
      this.removeFake();
    }
  }, {
    key: "action",
    set: function set() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';
      this._action = action;

      if (this._action !== 'copy' && this._action !== 'cut') {
        throw new Error('Invalid "action" value, use either "copy" or "cut"');
      }
    }
    /**
     * Gets the `action` property.
     * @return {String}
     */
    ,
    get: function get() {
      return this._action;
    }
    /**
     * Sets the `target` property using an element
     * that will be have its content copied.
     * @param {Element} target
     */

  }, {
    key: "target",
    set: function set(target) {
      if (target !== undefined) {
        if (target && _typeof(target) === 'object' && target.nodeType === 1) {
          if (this.action === 'copy' && target.hasAttribute('disabled')) {
            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
          }

          if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
          }

          this._target = target;
        } else {
          throw new Error('Invalid "target" value, use a valid Element');
        }
      }
    }
    /**
     * Gets the `target` property.
     * @return {String|HTMLElement}
     */
    ,
    get: function get() {
      return this._target;
    }
  }]);

  return ClipboardAction;
}();

/* harmony default export */ var clipboard_action = (ClipboardAction);
;// CONCATENATED MODULE: ./src/clipboard.js
function clipboard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clipboard_typeof = function _typeof(obj) { return typeof obj; }; } else { clipboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clipboard_typeof(obj); }

function clipboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function clipboard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function clipboard_createClass(Constructor, protoProps, staticProps) { if (protoProps) clipboard_defineProperties(Constructor.prototype, protoProps); if (staticProps) clipboard_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */

function getAttributeValue(suffix, element) {
  var attribute = "data-clipboard-".concat(suffix);

  if (!element.hasAttribute(attribute)) {
    return;
  }

  return element.getAttribute(attribute);
}
/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */


var Clipboard = /*#__PURE__*/function (_Emitter) {
  _inherits(Clipboard, _Emitter);

  var _super = _createSuper(Clipboard);

  /**
   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
   * @param {Object} options
   */
  function Clipboard(trigger, options) {
    var _this;

    clipboard_classCallCheck(this, Clipboard);

    _this = _super.call(this);

    _this.resolveOptions(options);

    _this.listenClick(trigger);

    return _this;
  }
  /**
   * Defines if attributes would be resolved using internal setter functions
   * or custom functions that were passed in the constructor.
   * @param {Object} options
   */


  clipboard_createClass(Clipboard, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
      this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
      this.text = typeof options.text === 'function' ? options.text : this.defaultText;
      this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
    }
    /**
     * Adds a click event listener to the passed trigger.
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     */

  }, {
    key: "listenClick",
    value: function listenClick(trigger) {
      var _this2 = this;

      this.listener = listen_default()(trigger, 'click', function (e) {
        return _this2.onClick(e);
      });
    }
    /**
     * Defines a new `ClipboardAction` on each click event.
     * @param {Event} e
     */

  }, {
    key: "onClick",
    value: function onClick(e) {
      var trigger = e.delegateTarget || e.currentTarget;

      if (this.clipboardAction) {
        this.clipboardAction = null;
      }

      this.clipboardAction = new clipboard_action({
        action: this.action(trigger),
        target: this.target(trigger),
        text: this.text(trigger),
        container: this.container,
        trigger: trigger,
        emitter: this
      });
    }
    /**
     * Default `action` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultAction",
    value: function defaultAction(trigger) {
      return getAttributeValue('action', trigger);
    }
    /**
     * Default `target` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultTarget",
    value: function defaultTarget(trigger) {
      var selector = getAttributeValue('target', trigger);

      if (selector) {
        return document.querySelector(selector);
      }
    }
    /**
     * Returns the support of the given action, or all actions if no action is
     * given.
     * @param {String} [action]
     */

  }, {
    key: "defaultText",

    /**
     * Default `text` lookup function.
     * @param {Element} trigger
     */
    value: function defaultText(trigger) {
      return getAttributeValue('text', trigger);
    }
    /**
     * Destroy lifecycle.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.listener.destroy();

      if (this.clipboardAction) {
        this.clipboardAction.destroy();
        this.clipboardAction = null;
      }
    }
  }], [{
    key: "isSupported",
    value: function isSupported() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
      var actions = typeof action === 'string' ? [action] : action;
      var support = !!document.queryCommandSupported;
      actions.forEach(function (action) {
        support = support && !!document.queryCommandSupported(action);
      });
      return support;
    }
  }]);

  return Clipboard;
}((tiny_emitter_default()));

/* harmony default export */ var clipboard = (Clipboard);

/***/ }),

/***/ 828:
/***/ (function(module) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),

/***/ 438:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_17417__) {

var closest = __nested_webpack_require_17417__(828);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),

/***/ 879:
/***/ (function(__unused_webpack_module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),

/***/ 370:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_20781__) {

var is = __nested_webpack_require_20781__(879);
var delegate = __nested_webpack_require_20781__(438);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),

/***/ 817:
/***/ (function(module) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),

/***/ 279:
/***/ (function(module) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_26163__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_26163__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_26163__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__nested_webpack_require_26163__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_26163__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_26163__.o(definition, key) && !__nested_webpack_require_26163__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_26163__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_26163__(134);
/******/ })()
.default;
});

/***/ }),

/***/ "./resources/ts/src/components/highlighters/CodeHighlighter.vue":
/*!**********************************************************************!*\
  !*** ./resources/ts/src/components/highlighters/CodeHighlighter.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CodeHighlighter_vue_vue_type_template_id_9bc851e6_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeHighlighter.vue?vue&type=template&id=9bc851e6&ts=true */ "./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=template&id=9bc851e6&ts=true");
/* harmony import */ var _CodeHighlighter_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodeHighlighter.vue?vue&type=script&lang=ts */ "./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=script&lang=ts");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_DormitoryWebApplication_vue_laravel2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_DormitoryWebApplication_vue_laravel2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CodeHighlighter_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CodeHighlighter_vue_vue_type_template_id_9bc851e6_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/components/highlighters/CodeHighlighter.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/views/Builder.vue":
/*!********************************************!*\
  !*** ./resources/ts/src/views/Builder.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Builder_vue_vue_type_template_id_3e9332d2_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builder.vue?vue&type=template&id=3e9332d2&ts=true */ "./resources/ts/src/views/Builder.vue?vue&type=template&id=3e9332d2&ts=true");
/* harmony import */ var _Builder_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Builder.vue?vue&type=script&lang=ts */ "./resources/ts/src/views/Builder.vue?vue&type=script&lang=ts");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_DormitoryWebApplication_vue_laravel2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_DormitoryWebApplication_vue_laravel2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Builder_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Builder_vue_vue_type_template_id_3e9332d2_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/views/Builder.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=script&lang=ts":
/*!**********************************************************************************************!*\
  !*** ./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=script&lang=ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CodeHighlighter_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CodeHighlighter_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CodeHighlighter.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/views/Builder.vue?vue&type=script&lang=ts":
/*!********************************************************************!*\
  !*** ./resources/ts/src/views/Builder.vue?vue&type=script&lang=ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Builder_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Builder_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Builder.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/Builder.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=template&id=9bc851e6&ts=true":
/*!************************************************************************************************************!*\
  !*** ./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=template&id=9bc851e6&ts=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CodeHighlighter_vue_vue_type_template_id_9bc851e6_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CodeHighlighter_vue_vue_type_template_id_9bc851e6_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CodeHighlighter.vue?vue&type=template&id=9bc851e6&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=template&id=9bc851e6&ts=true");


/***/ }),

/***/ "./resources/ts/src/views/Builder.vue?vue&type=template&id=3e9332d2&ts=true":
/*!**********************************************************************************!*\
  !*** ./resources/ts/src/views/Builder.vue?vue&type=template&id=3e9332d2&ts=true ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Builder_vue_vue_type_template_id_3e9332d2_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Builder_vue_vue_type_template_id_3e9332d2_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Builder.vue?vue&type=template&id=3e9332d2&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/Builder.vue?vue&type=template&id=3e9332d2&ts=true");


/***/ })

}]);