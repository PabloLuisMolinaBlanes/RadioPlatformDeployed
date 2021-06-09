(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pricecalculator-pricecalculator-module"],{

/***/ "6Eke":
/*!*******************************************************************!*\
  !*** ./src/app/pricecalculator/pricecalculator-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PricecalculatorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricecalculatorPageRoutingModule", function() { return PricecalculatorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pricecalculator_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pricecalculator.page */ "ktIm");




const routes = [
    {
        path: '',
        component: _pricecalculator_page__WEBPACK_IMPORTED_MODULE_3__["PricecalculatorPage"]
    }
];
let PricecalculatorPageRoutingModule = class PricecalculatorPageRoutingModule {
};
PricecalculatorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PricecalculatorPageRoutingModule);



/***/ }),

/***/ "zDN0":
/*!***********************************************************!*\
  !*** ./src/app/pricecalculator/pricecalculator.module.ts ***!
  \***********************************************************/
/*! exports provided: PricecalculatorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricecalculatorPageModule", function() { return PricecalculatorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pricecalculator_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pricecalculator-routing.module */ "6Eke");
/* harmony import */ var _pricecalculator_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pricecalculator.page */ "ktIm");







let PricecalculatorPageModule = class PricecalculatorPageModule {
};
PricecalculatorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pricecalculator_routing_module__WEBPACK_IMPORTED_MODULE_5__["PricecalculatorPageRoutingModule"]
        ],
        declarations: [_pricecalculator_page__WEBPACK_IMPORTED_MODULE_6__["PricecalculatorPage"]]
    })
], PricecalculatorPageModule);



/***/ })

}]);
//# sourceMappingURL=pricecalculator-pricecalculator-module.js.map