(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\ImageChangeOnScroll.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnScroll&absolutePagePath=C%3A%5CUsers%5CAdmin%5CDesktop%5CGitRepo%5CNext-React-apps%5Chello-next%5Cpages%5CImageChangeOnScroll.js!./":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnScroll&absolutePagePath=C%3A%5CUsers%5CAdmin%5CDesktop%5CGitRepo%5CNext-React-apps%5Chello-next%5Cpages%5CImageChangeOnScroll.js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/ImageChangeOnScroll", function() {
      var mod = __webpack_require__(/*! ./pages/ImageChangeOnScroll.js */ "./pages/ImageChangeOnScroll.js")
      if(true) {
        module.hot.accept(/*! ./pages/ImageChangeOnScroll.js */ "./pages/ImageChangeOnScroll.js", function() {
          if(!next.router.components["/ImageChangeOnScroll"]) return
          var updatedPage = __webpack_require__(/*! ./pages/ImageChangeOnScroll.js */ "./pages/ImageChangeOnScroll.js")
          next.router.update("/ImageChangeOnScroll", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ "./src/ImageToggleOnScroll.js");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\GitRepo\\Next-React-apps\\hello-next\\pages\\ImageChangeOnScroll.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ImageChangeOnScroll = function ImageChangeOnScroll() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, [1124, 187, 823, 1269, 1530].map(function (speakerId) {
    return __jsx("div", {
      key: speakerId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__["default"], {
      primaryImg: "/static/speakers/bw/Speaker-".concat(speakerId, ".jpg"),
      secondaryImg: "/static/speakers/Speaker-".concat(speakerId, ".jpg"),
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnScroll);

/***/ }),

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\GitRepo\\Next-React-apps\\hello-next\\src\\ImageToggleOnScroll.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ImageToggleOnScroll = function ImageToggleOnScroll(_ref) {
  var primaryImg = _ref.primaryImg,
      secondaryImg = _ref.secondaryImg;
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("scroll", scrollHandler);
    setInview(isInView());
    setIsLoading(false);
    return function () {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isLoading]);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      inView = _useState2[0],
      setInview = _useState2[1];

  var isInView = function isInView() {
    if (imageRef.current) {
      var rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    return false;
  };

  var scrollHandler = function scrollHandler() {
    setInview(function () {
      return isInView();
    });
  };

  return isLoading ? null : __jsx("img", {
    src: inView ? secondaryImg : primaryImg,
    alt: "",
    ref: imageRef,
    width: "400",
    height: "400",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnScroll);

/***/ }),

/***/ 2:
/*!********************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2FImageChangeOnScroll&absolutePagePath=C%3A%5CUsers%5CAdmin%5CDesktop%5CGitRepo%5CNext-React-apps%5Chello-next%5Cpages%5CImageChangeOnScroll.js ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2FImageChangeOnScroll&absolutePagePath=C%3A%5CUsers%5CAdmin%5CDesktop%5CGitRepo%5CNext-React-apps%5Chello-next%5Cpages%5CImageChangeOnScroll.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnScroll&absolutePagePath=C%3A%5CUsers%5CAdmin%5CDesktop%5CGitRepo%5CNext-React-apps%5Chello-next%5Cpages%5CImageChangeOnScroll.js!./");


/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=ImageChangeOnScroll.js.map