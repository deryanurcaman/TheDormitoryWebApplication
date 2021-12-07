"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_src_views_crafted_pages_profile_Projects_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/cards/Card1.vue?vue&type=script&lang=ts":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/cards/Card1.vue?vue&type=script&lang=ts ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "card-1",
  components: {},
  props: {
    progress: Number,
    statusDataBadgeColor: String,
    statusDataColor: String,
    status: String,
    icon: String,
    title: String,
    description: String,
    date: String,
    budget: String,
    users: Array
  },
  setup: function setup(props) {
    var getDescription = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.description ? props.description : "CRM App application to HR efficiency";
    });
    var getDate = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.date ? props.date : "Feb 21, 2021";
    });
    var getBudget = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.budget ? props.budget : "$284,900.00";
    });
    var getStatus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.status ? props.status : "In Progress";
    });
    var getStatusDataBadgeColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.statusDataBadgeColor ? props.statusDataBadgeColor : "badge-light-primary";
    });
    var getStatusDataColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.statusDataColor ? props.statusDataColor : "bg-primary";
    });
    return {
      getDescription: getDescription,
      getDate: getDate,
      getBudget: getBudget,
      getStatus: getStatus,
      getStatusDataBadgeColor: getStatusDataBadgeColor,
      getStatusDataColor: getStatusDataColor
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/crafted/pages/profile/Projects.vue?vue&type=script&lang=ts":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/crafted/pages/profile/Projects.vue?vue&type=script&lang=ts ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_cards_Card1_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/cards/Card1.vue */ "./resources/ts/src/components/cards/Card1.vue");
/* harmony import */ var _core_helpers_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/helpers/breadcrumb */ "./resources/ts/src/core/helpers/breadcrumb.ts");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "projects",
  components: {
    KTCard: _components_cards_Card1_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  setup: function setup() {
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      (0,_core_helpers_breadcrumb__WEBPACK_IMPORTED_MODULE_2__.setCurrentPageBreadcrumbs)("Projects", ["Pages", "Profile"]);
    });
    var users1 = [{
      name: "Emma Smith",
      src: "media/avatars/150-1.jpg"
    }, {
      name: "Rudy Stone",
      src: "media/avatars/150-2.jpg"
    }, {
      name: "Susan Redwood",
      initials: "S",
      state: "primary"
    }];
    var users2 = [{
      name: "Alan Warden",
      initials: "A",
      state: "warning"
    }, {
      name: "Brian Cox",
      src: "media/avatars/150-4.jpg"
    }];
    var users3 = [{
      name: "Mad Masy",
      src: "media/avatars/150-1.jpg"
    }, {
      name: "Cris Willson",
      src: "media/avatars/150-2.jpg"
    }, {
      name: "Mike Garcie",
      initials: "M",
      state: "info"
    }];
    var users4 = [{
      name: "Nich Warden",
      initials: "N",
      state: "warning"
    }, {
      name: "Rob Otto",
      initials: "R",
      state: "success"
    }];
    var users5 = [{
      name: "Francis Mitcham",
      src: "media/avatars/150-5.jpg"
    }, {
      name: "Michelle Swanston",
      src: "media/avatars/150-13.jpg"
    }, {
      name: "Susan Redwood",
      initials: "S",
      state: "primary"
    }];
    var users6 = [{
      name: "Emma Smith",
      src: "media/avatars/150-1.jpg"
    }, {
      name: "Rudy Stone",
      src: "media/avatars/150-2.jpg"
    }, {
      name: "Susan Redwood",
      initials: "S",
      state: "primary"
    }];
    var users7 = [{
      name: "Meloday Macy",
      src: "media/avatars/150-3.jpg"
    }, {
      name: "Rabbin Watterman",
      initials: "S",
      state: "success"
    }];
    var users8 = [{
      name: "Emma Smith",
      src: "media/avatars/150-1.jpg"
    }, {
      name: "Rudy Stone",
      src: "media/avatars/150-2.jpg"
    }, {
      name: "Susan Redwood",
      initials: "S",
      state: "primary"
    }];
    var users9 = [{
      name: "Meloday Macy",
      src: "media/avatars/150-3.jpg"
    }, {
      name: "Rabbin Watterman",
      initials: "S",
      state: "danger"
    }];
    return {
      users1: users1,
      users2: users2,
      users3: users3,
      users4: users4,
      users5: users5,
      users6: users6,
      users7: users7,
      users8: users8,
      users9: users9
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/cards/Card1.vue?vue&type=template&id=f4ba4c22&ts=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/cards/Card1.vue?vue&type=template&id=f4ba4c22&ts=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  href: "#",
  "class": "card border border-2 border-gray-300 border-hover"
};
var _hoisted_2 = {
  "class": "card-header border-0 pt-9"
};
var _hoisted_3 = {
  "class": "card-title m-0"
};
var _hoisted_4 = {
  "class": "symbol symbol-50px w-50px bg-light"
};
var _hoisted_5 = ["src"];
var _hoisted_6 = {
  "class": "card-toolbar"
};
var _hoisted_7 = {
  "class": "card-body p-9"
};
var _hoisted_8 = {
  "class": "fs-3 fw-bolder text-dark"
};
var _hoisted_9 = {
  "class": "text-gray-400 fw-bold fs-5 mt-1 mb-7"
};
var _hoisted_10 = {
  "class": "d-flex flex-wrap mb-5"
};
var _hoisted_11 = {
  "class": "border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3"
};
var _hoisted_12 = {
  "class": "fs-6 text-gray-800 fw-bolder"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "fw-bold text-gray-400"
}, "Due Date", -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3"
};
var _hoisted_15 = {
  "class": "fs-6 text-gray-800 fw-bolder"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "fw-bold text-gray-400"
}, "Budget", -1
/* HOISTED */
);

var _hoisted_17 = ["title"];
var _hoisted_18 = ["aria-valuenow"];
var _hoisted_19 = {
  "class": "symbol-group symbol-hover"
};
var _hoisted_20 = ["title"];
var _hoisted_21 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card Title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Avatar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _ctx.icon,
    alt: "image",
    "class": "p-3"
  }, null, 8
  /* PROPS */
  , _hoisted_5)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Avatar")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Car Title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card toolbar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([_ctx.getStatusDataBadgeColor, "badge fw-bolder me-auto px-4 py-3"])
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getStatus), 3
  /* TEXT, CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card toolbar")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end:: Card header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin:: Card body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Name"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Name"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Description"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getDescription), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Description"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Info"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Due"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getDate), 1
  /* TEXT */
  ), _hoisted_13]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Due"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Budget"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getBudget), 1
  /* TEXT */
  ), _hoisted_16]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Budget")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Info"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Progress"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "h-4px w-100 bg-light mb-5",
    "data-bs-toggle": "tooltip",
    title: "This project " + _ctx.progress + "% completed"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([_ctx.getStatusDataColor, "rounded h-4px"]),
    role: "progressbar",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: _ctx.progress + "%"
    }),
    "aria-valuenow": _ctx.progress,
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }, null, 14
  /* CLASS, STYLE, PROPS */
  , _hoisted_18)], 8
  /* PROPS */
  , _hoisted_17), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Progress"), _ctx.users ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Users"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.users, function (user, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::User"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "symbol symbol-35px symbol-circle",
      "data-bs-toggle": "tooltip",
      title: user.title
    }, [user.src ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
      key: 0,
      alt: "Pic",
      src: user.src
    }, null, 8
    /* PROPS */
    , _hoisted_21)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 1,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["symbol-label fw-bolder", "bg-" + user.state + " text-inverse-" + user.state])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.initials), 3
    /* TEXT, CLASS */
    ))], 8
    /* PROPS */
    , _hoisted_20), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::User")], 64
    /* STABLE_FRAGMENT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Users")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end:: Card body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/crafted/pages/profile/Projects.vue?vue&type=template&id=36df210f&ts=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/crafted/pages/profile/Projects.vue?vue&type=template&id=36df210f&ts=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex flex-wrap flex-stack my-5\"><!--begin::Heading--><h2 class=\"fs-2 fw-bold my-2\"> Projects <span class=\"fs-6 text-gray-400 ms-1\">by Status</span></h2><!--end::Heading--><!--begin::Controls--><div class=\"d-flex flex-wrap my-1\"><!--begin::Select wrapper--><div class=\"m-0\"><!--begin::Select--><select name=\"status\" data-control=\"select2\" data-hide-search=\"true\" class=\"form-select form-select-white form-select-sm fw-bolder w-125px\"><option value=\"Active\" selected>Active</option><option value=\"Approved\">In Progress</option><option value=\"Declined\">To Do</option><option value=\"In Progress\">Completed</option></select><!--end::Select--></div><!--end::Select wrapper--></div><!--end::Controls--></div>", 1);

var _hoisted_2 = {
  "class": "row g-6 g-xl-9"
};
var _hoisted_3 = {
  "class": "col-md-6 col-xl-4"
};
var _hoisted_4 = {
  "class": "col-md-6 col-xl-4"
};
var _hoisted_5 = {
  "class": "col-md-6 col-xl-4"
};
var _hoisted_6 = {
  "class": "col-md-6 col-xl-4"
};
var _hoisted_7 = {
  "class": "col-md-6 col-xl-4"
};
var _hoisted_8 = {
  "class": "col-md-6 col-xl-4"
};
var _hoisted_9 = {
  "class": "col-md-6 col-xl-4"
};
var _hoisted_10 = {
  "class": "col-md-6 col-xl-4"
};
var _hoisted_11 = {
  "class": "col-md-6 col-xl-4"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"d-flex flex-stack flex-wrap pt-10\"><div class=\"fs-6 fw-bold text-gray-700\"> Showing 1 to 10 of 50 entries </div><!--begin::Pages--><ul class=\"pagination\"><li class=\"page-item previous\"><a href=\"#\" class=\"page-link\"><i class=\"previous\"></i></a></li><li class=\"page-item active\"><a href=\"#\" class=\"page-link\">1</a></li><li class=\"page-item\"><a href=\"#\" class=\"page-link\">2</a></li><li class=\"page-item\"><a href=\"#\" class=\"page-link\">3</a></li><li class=\"page-item\"><a href=\"#\" class=\"page-link\">4</a></li><li class=\"page-item\"><a href=\"#\" class=\"page-link\">5</a></li><li class=\"page-item\"><a href=\"#\" class=\"page-link\">6</a></li><li class=\"page-item next\"><a href=\"#\" class=\"page-link\"><i class=\"next\"></i></a></li></ul><!--end::Pages--></div>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_KTCard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("KTCard");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Toolbar"), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Toolbar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Col"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_KTCard, {
    progress: 50,
    title: "Fitnes App",
    icon: "media/svg/brand-logos/plurk.svg",
    users: _ctx.users1
  }, null, 8
  /* PROPS */
  , ["users"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Col"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Col"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_KTCard, {
    status: "Pending",
    "status-data-badge-color": "badge-light",
    progress: 30,
    icon: "media/svg/brand-logos/disqus.svg",
    title: "Leaf CRM",
    date: "May 10, 2021",
    budget: "$36,400.00",
    users: _ctx.users2
  }, null, 8
  /* PROPS */
  , ["users"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Col"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Col"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_KTCard, {
    status: "Completed",
    "status-data-badge-color": "badge-light-success",
    progress: 100,
    icon: "media/svg/brand-logos/figma-1.svg",
    title: "Atica Banking",
    date: "Mar 14, 2021",
    budget: "$605,100.00",
    users: _ctx.users3
  }, null, 8
  /* PROPS */
  , ["users"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Col"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Col"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_KTCard, {
    status: "Pending",
    progress: 60,
    "status-data-badge-color": "badge-light",
    icon: "media/svg/brand-logos/sentry-3.svg",
    title: "Finance Dispatch",
    budget: "$36,400.00",
    users: _ctx.users4
  }, null, 8
  /* PROPS */
  , ["users"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Col"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Col"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_KTCard, {
    status: "In Progress",
    progress: 40,
    icon: "media/svg/brand-logos/xing-icon.svg",
    title: "9 Degree",
    date: "May 10, 2021",
    budget: "$36,400.00",
    users: _ctx.users5
  }, null, 8
  /* PROPS */
  , ["users"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Col"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Col"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_KTCard, {
    status: "In Progress",
    progress: 70,
    icon: "media/svg/brand-logos/tvit.svg",
    title: "GoPro App",
    date: "May 10, 2021",
    budget: "$36,400.00",
    users: _ctx.users6
  }, null, 8
  /* PROPS */
  , ["users"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Col"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Col"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_KTCard, {
    status: "In Progress",
    progress: 30,
    icon: "media/svg/brand-logos/aven.svg",
    title: "Buldozer CRM",
    date: "May 10, 2021",
    budget: "$36,400.00",
    users: _ctx.users7
  }, null, 8
  /* PROPS */
  , ["users"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Col"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Col"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_KTCard, {
    status: "Overdue",
    progress: 10,
    "status-data-badge-color": "badge-light-danger",
    icon: "media/svg/brand-logos/treva.svg",
    title: "Aviasales App",
    date: "May 10, 2021",
    budget: "$36,400.00",
    users: _ctx.users8
  }, null, 8
  /* PROPS */
  , ["users"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Col"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Col"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_KTCard, {
    status: "Completed",
    progress: 100,
    "status-data-badge-color": "badge-light-success",
    icon: "media/svg/brand-logos/kanba.svg",
    title: "Oppo CRM",
    date: "May 10, 2021",
    budget: "$36,400.00",
    users: _ctx.users9
  }, null, 8
  /* PROPS */
  , ["users"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Pagination"), _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Pagination")])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/ts/src/core/helpers/breadcrumb.ts":
/*!*****************************************************!*\
  !*** ./resources/ts/src/core/helpers/breadcrumb.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/ts/src/components/cards/Card1.vue":
/*!*****************************************************!*\
  !*** ./resources/ts/src/components/cards/Card1.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card1_vue_vue_type_template_id_f4ba4c22_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card1.vue?vue&type=template&id=f4ba4c22&ts=true */ "./resources/ts/src/components/cards/Card1.vue?vue&type=template&id=f4ba4c22&ts=true");
/* harmony import */ var _Card1_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card1.vue?vue&type=script&lang=ts */ "./resources/ts/src/components/cards/Card1.vue?vue&type=script&lang=ts");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_DormitoryWebApplication_vue_laravel2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_DormitoryWebApplication_vue_laravel2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Card1_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Card1_vue_vue_type_template_id_f4ba4c22_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/components/cards/Card1.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/views/crafted/pages/profile/Projects.vue":
/*!*******************************************************************!*\
  !*** ./resources/ts/src/views/crafted/pages/profile/Projects.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Projects_vue_vue_type_template_id_36df210f_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.vue?vue&type=template&id=36df210f&ts=true */ "./resources/ts/src/views/crafted/pages/profile/Projects.vue?vue&type=template&id=36df210f&ts=true");
/* harmony import */ var _Projects_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.vue?vue&type=script&lang=ts */ "./resources/ts/src/views/crafted/pages/profile/Projects.vue?vue&type=script&lang=ts");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_DormitoryWebApplication_vue_laravel2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_DormitoryWebApplication_vue_laravel2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Projects_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Projects_vue_vue_type_template_id_36df210f_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/views/crafted/pages/profile/Projects.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/components/cards/Card1.vue?vue&type=script&lang=ts":
/*!*****************************************************************************!*\
  !*** ./resources/ts/src/components/cards/Card1.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card1_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card1_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Card1.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/cards/Card1.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/views/crafted/pages/profile/Projects.vue?vue&type=script&lang=ts":
/*!*******************************************************************************************!*\
  !*** ./resources/ts/src/views/crafted/pages/profile/Projects.vue?vue&type=script&lang=ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/crafted/pages/profile/Projects.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/components/cards/Card1.vue?vue&type=template&id=f4ba4c22&ts=true":
/*!*******************************************************************************************!*\
  !*** ./resources/ts/src/components/cards/Card1.vue?vue&type=template&id=f4ba4c22&ts=true ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card1_vue_vue_type_template_id_f4ba4c22_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card1_vue_vue_type_template_id_f4ba4c22_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Card1.vue?vue&type=template&id=f4ba4c22&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/cards/Card1.vue?vue&type=template&id=f4ba4c22&ts=true");


/***/ }),

/***/ "./resources/ts/src/views/crafted/pages/profile/Projects.vue?vue&type=template&id=36df210f&ts=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/ts/src/views/crafted/pages/profile/Projects.vue?vue&type=template&id=36df210f&ts=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_template_id_36df210f_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Projects_vue_vue_type_template_id_36df210f_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Projects.vue?vue&type=template&id=36df210f&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/crafted/pages/profile/Projects.vue?vue&type=template&id=36df210f&ts=true");


/***/ })

}]);