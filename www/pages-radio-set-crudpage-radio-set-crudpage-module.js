(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-radio-set-crudpage-radio-set-crudpage-module"],{

/***/ "07KT":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/radio-set-crudpage/radio-set-crudpage.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>RadioSetCRUDPage</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <p *ngIf=\"!(isadmin)\">Please, choose a radioset if it already exists</p>\r\n  <ion-item *ngIf=\"!(isadmin)\">\r\n    <ion-select [(ngModel)]=\"equipment\" (ionChange)=\"updateRadio()\" placeholder=\"Equipment\">\r\n      <ion-select-option *ngFor=\"let radioset of radioSetTotal\" [value]=\"radioset\">{{ radioset.name }}</ion-select-option>\r\n    </ion-select></ion-item>\r\n  <br>\r\n  <p>Brand (mandatory)</p>\r\n<ion-input [(ngModel)]=\"brand\"></ion-input>\r\n<p>Name (mandatory)</p>\r\n<ion-input [(ngModel)]=\"name\"></ion-input>\r\n<p>Type (mandatory)</p>\r\n<ion-input [(ngModel)]=\"type\"></ion-input>\r\n<p>Amplitude (mandatory)</p>\r\n<ion-input [(ngModel)]=\"amplitude\"></ion-input>\r\n<p>Price</p>\r\n<ion-input type=\"number\" [(ngModel)]=\"price\"></ion-input>\r\n<ion-button (click)=\"submit()\" *ngIf=\"brand && name && type && amplitude\">Submit</ion-button>\r\n<ion-button (click)=\"dismiss()\">Exit</ion-button>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "On2E":
/*!*********************************************************************!*\
  !*** ./src/app/pages/radio-set-crudpage/radio-set-crudpage.page.ts ***!
  \*********************************************************************/
/*! exports provided: RadioSetCRUDPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioSetCRUDPagePage", function() { return RadioSetCRUDPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_radio_set_crudpage_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./radio-set-crudpage.page.html */ "07KT");
/* harmony import */ var _radio_set_crudpage_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio-set-crudpage.page.scss */ "tlMI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_firebase_updater_and_setter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firebase-updater-and-setter.service */ "hsKi");
/* harmony import */ var _classes_radioset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../classes/radioset */ "hQKI");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/firebase-obtainer.service */ "JQOl");








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
            this.radio = new _classes_radioset__WEBPACK_IMPORTED_MODULE_5__["RadioSet"](this.brand, this.name, this.type, this.amplitude, this.id, this.price);
            this.firebaseUpdaterAndSetter.updateRadioSet(this.radio);
        }
        else {
            this.id = "placeholder";
            this.radio = new _classes_radioset__WEBPACK_IMPORTED_MODULE_5__["RadioSet"](this.brand, this.name, this.type, this.amplitude, this.id, this.price);
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
    { type: _services_firebase_updater_and_setter_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseUpdaterAndSetterService"] },
    { type: _services_firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseObtainerService"] },
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

/***/ "Qeud":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/radio-set-crudpage/radio-set-crudpage-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: RadioSetCRUDPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioSetCRUDPagePageRoutingModule", function() { return RadioSetCRUDPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _radio_set_crudpage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-set-crudpage.page */ "On2E");




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

/***/ "VN9C":
/*!***********************************************************************!*\
  !*** ./src/app/pages/radio-set-crudpage/radio-set-crudpage.module.ts ***!
  \***********************************************************************/
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
/* harmony import */ var _radio_set_crudpage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radio-set-crudpage-routing.module */ "Qeud");
/* harmony import */ var _radio_set_crudpage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radio-set-crudpage.page */ "On2E");







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

/***/ "hQKI":
/*!*************************************!*\
  !*** ./src/app/classes/radioset.ts ***!
  \*************************************/
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

/***/ "tlMI":
/*!***********************************************************************!*\
  !*** ./src/app/pages/radio-set-crudpage/radio-set-crudpage.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYWRpby1zZXQtY3J1ZHBhZ2UucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=pages-radio-set-crudpage-radio-set-crudpage-module.js.map