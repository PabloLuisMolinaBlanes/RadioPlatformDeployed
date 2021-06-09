(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["radio-set-crudpage-radio-set-crudpage-module"],{

/***/ "DbOu":
/*!*************************************************************************!*\
  !*** ./src/app/radio-set-crudpage/radio-set-crudpage-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: RadioSetCRUDPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioSetCRUDPagePageRoutingModule", function() { return RadioSetCRUDPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _radio_set_crudpage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-set-crudpage.page */ "XIPL");




const routes = [
    {
        path: '',
        component: _radio_set_crudpage_page__WEBPACK_IMPORTED_MODULE_3__["RadioSetCRUDPagePage"]
    }
];
let RadioSetCRUDPagePageRoutingModule = class RadioSetCRUDPagePageRoutingModule {
};
RadioSetCRUDPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RadioSetCRUDPagePageRoutingModule);



/***/ }),

/***/ "PxJZ":
/*!*****************************!*\
  !*** ./src/app/radioset.ts ***!
  \*****************************/
/*! exports provided: RadioSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioSet", function() { return RadioSet; });
class RadioSet {
    constructor(brand, name, type, amplitude, id, price) {
        this.isfavourite = false;
        this.id = id;
        this.brand = brand;
        this.name = name;
        this.type = type;
        this.amplitude = amplitude;
        this.price = price;
    }
}


/***/ }),

/***/ "WjE7":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/radio-set-crudpage/radio-set-crudpage.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>RadioSetCRUDPage</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p *ngIf=\"!(isadmin)\">Please, choose a radioset if it already exists</p>\n  <ion-item *ngIf=\"!(isadmin)\">\n    <ion-select [(ngModel)]=\"equipment\" (ionChange)=\"updateRadio()\" placeholder=\"Equipment\">\n      <ion-select-option *ngFor=\"let radioset of radioSetTotal\" [value]=\"radioset\">{{ radioset.name }}</ion-select-option>\n    </ion-select></ion-item>\n  <br>\n  <p>Brand</p>\n<ion-input [(ngModel)]=\"brand\"></ion-input>\n<p>Name</p>\n<ion-input [(ngModel)]=\"name\"></ion-input>\n<p>Type</p>\n<ion-input [(ngModel)]=\"type\"></ion-input>\n<p>Amplitude</p>\n<ion-input [(ngModel)]=\"amplitude\"></ion-input>\n<p>Price</p>\n<ion-input [(ngModel)]=\"price\"></ion-input>\n<ion-button (click)=\"submit()\" *ngIf=\"brand && name && type && amplitude\">Submit</ion-button>\n<ion-button (click)=\"dismiss()\">Cancel</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "XIPL":
/*!***************************************************************!*\
  !*** ./src/app/radio-set-crudpage/radio-set-crudpage.page.ts ***!
  \***************************************************************/
/*! exports provided: RadioSetCRUDPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioSetCRUDPagePage", function() { return RadioSetCRUDPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_radio_set_crudpage_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./radio-set-crudpage.page.html */ "WjE7");
/* harmony import */ var _radio_set_crudpage_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio-set-crudpage.page.scss */ "qSag");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _firebase_updater_and_setter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase-updater-and-setter.service */ "+Uwb");
/* harmony import */ var _radioset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../radioset */ "PxJZ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase-obtainer.service */ "jmhE");








let RadioSetCRUDPagePage = class RadioSetCRUDPagePage {
    constructor(firebaseUpdaterAndSetter, firebaseObtainerService, modalController) {
        this.firebaseUpdaterAndSetter = firebaseUpdaterAndSetter;
        this.firebaseObtainerService = firebaseObtainerService;
        this.modalController = modalController;
        this.brand = null;
        this.name = null;
        this.type = null;
        this.amplitude = null;
        this.radio = null;
        this.result = null;
        this.id = undefined;
        this.price = null;
        this.radioSetTotal = [];
    }
    ngOnInit() {
        this.firebaseObtainerService.listAllRadioSets().then(ants => {
            ants.forEach(ant => {
                this.radioSetTotal.push(ant.val());
            });
        });
    }
    updateRadio() {
        this.type = this.equipment.type;
        this.name = this.equipment.name;
        this.amplitude = this.equipment.amplitude;
        this.brand = this.equipment.brand;
        this.id = this.equipment.id;
        this.price = this.equipment.price;
    }
    dismiss() {
        this.modalController.dismiss();
    }
    submit() {
        if (this.id !== undefined) {
            this.radio = new _radioset__WEBPACK_IMPORTED_MODULE_5__["RadioSet"](this.brand, this.name, this.type, this.amplitude, this.id, this.price);
            this.firebaseUpdaterAndSetter.updateRadioSet(this.radio);
        }
        else {
            this.id = "placeholder";
            this.radio = new _radioset__WEBPACK_IMPORTED_MODULE_5__["RadioSet"](this.brand, this.name, this.type, this.amplitude, this.id, this.price);
            if (this.isadmin) {
                this.firebaseUpdaterAndSetter.setRadioSetAdmin(this.radio);
            }
            else {
                this.firebaseUpdaterAndSetter.setRadioSet(this.radio);
            }
        }
    }
};
RadioSetCRUDPagePage.ctorParameters = () => [
    { type: _firebase_updater_and_setter_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseUpdaterAndSetterService"] },
    { type: _firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseObtainerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
RadioSetCRUDPagePage.propDecorators = {
    brand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    amplitude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    radio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    result: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    price: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isadmin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
RadioSetCRUDPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-radio-set-crudpage',
        template: _raw_loader_radio_set_crudpage_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_radio_set_crudpage_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RadioSetCRUDPagePage);



/***/ }),

/***/ "jlob":
/*!*****************************************************************!*\
  !*** ./src/app/radio-set-crudpage/radio-set-crudpage.module.ts ***!
  \*****************************************************************/
/*! exports provided: RadioSetCRUDPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioSetCRUDPagePageModule", function() { return RadioSetCRUDPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _radio_set_crudpage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radio-set-crudpage-routing.module */ "DbOu");
/* harmony import */ var _radio_set_crudpage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radio-set-crudpage.page */ "XIPL");







let RadioSetCRUDPagePageModule = class RadioSetCRUDPagePageModule {
};
RadioSetCRUDPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _radio_set_crudpage_routing_module__WEBPACK_IMPORTED_MODULE_5__["RadioSetCRUDPagePageRoutingModule"]
        ],
        declarations: [_radio_set_crudpage_page__WEBPACK_IMPORTED_MODULE_6__["RadioSetCRUDPagePage"]]
    })
], RadioSetCRUDPagePageModule);



/***/ }),

/***/ "qSag":
/*!*****************************************************************!*\
  !*** ./src/app/radio-set-crudpage/radio-set-crudpage.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYWRpby1zZXQtY3J1ZHBhZ2UucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=radio-set-crudpage-radio-set-crudpage-module.js.map