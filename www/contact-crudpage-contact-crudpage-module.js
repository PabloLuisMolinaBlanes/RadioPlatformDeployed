(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-crudpage-contact-crudpage-module"],{

/***/ "iv0G":
/*!*************************************************************!*\
  !*** ./src/app/contact-crudpage/contact-crudpage.module.ts ***!
  \*************************************************************/
/*! exports provided: ContactCRUDPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCRUDPagePageModule", function() { return ContactCRUDPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _contact_crudpage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-crudpage-routing.module */ "vxNM");
/* harmony import */ var _contact_crudpage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-crudpage.page */ "r0zr");







let ContactCRUDPagePageModule = class ContactCRUDPagePageModule {
};
ContactCRUDPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contact_crudpage_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactCRUDPagePageRoutingModule"]
        ],
        declarations: [_contact_crudpage_page__WEBPACK_IMPORTED_MODULE_6__["ContactCRUDPagePage"]]
    })
], ContactCRUDPagePageModule);



/***/ }),

/***/ "vxNM":
/*!*********************************************************************!*\
  !*** ./src/app/contact-crudpage/contact-crudpage-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ContactCRUDPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCRUDPagePageRoutingModule", function() { return ContactCRUDPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_crudpage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-crudpage.page */ "r0zr");




const routes = [
    {
        path: '',
        component: _contact_crudpage_page__WEBPACK_IMPORTED_MODULE_3__["ContactCRUDPagePage"]
    }
];
let ContactCRUDPagePageRoutingModule = class ContactCRUDPagePageRoutingModule {
};
ContactCRUDPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactCRUDPagePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=contact-crudpage-contact-crudpage-module.js.map