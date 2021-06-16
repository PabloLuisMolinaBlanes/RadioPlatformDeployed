(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-antenna-crudpage-antenna-crudpage-module"],{

/***/ "ACPR":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/antenna-crudpage/antenna-crudpage.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>AntennaCRUDPage</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <p *ngIf=\"!(isadmin)\">Please, choose an antenna if it already exists</p>\r\n  <ion-item *ngIf=\"!(isadmin)\">\r\n    <ion-select [(ngModel)]=\"antenna\" (ionChange)=\"updateAntenna()\" placeholder=\"Antennae\">\r\n      <ion-select-option *ngFor=\"let antenna of antennaeTotal\" [value]=\"antenna\">{{ antenna.name }}</ion-select-option>\r\n    </ion-select></ion-item>\r\n  <br>\r\n  <p>Type (mandatory)</p>\r\n<ion-input [(ngModel)]=\"type\"></ion-input>\r\n<p>Name (mandatory)</p>\r\n<ion-input [(ngModel)]=\"name\"></ion-input>\r\n<p>Range (mandatory)</p>\r\n<ion-input [(ngModel)]=\"range\"></ion-input>\r\n<p>Height (mandatory)</p>\r\n<ion-input [(ngModel)]=\"height\"></ion-input>\r\n<p>Brand</p>\r\n<ion-input [(ngModel)]=\"brand\"></ion-input>\r\n<p>Price (in dollars)</p>\r\n<ion-input type=\"number\" [(ngModel)]=\"price\"></ion-input>\r\n<ion-button (click)=\"submit()\" *ngIf=\"type && name && range && height\">Submit</ion-button>\r\n<ion-button (click)=\"dismiss()\">Exit</ion-button>\r\n</ion-content>\r\n");

/***/ }),

/***/ "JvP/":
/*!************************************!*\
  !*** ./src/app/classes/antenna.ts ***!
  \************************************/
/*! exports provided: Antenna */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Antenna", function() { return Antenna; });
class Antenna {
    constructor(type, name, range, height, brand, id, price) {
        this.isfavourite = false;
        this.id = id;
        this.type = type;
        this.name = name;
        this.range = range;
        this.height = height;
        this.brand = brand;
        this.price = price;
    }
}


/***/ }),

/***/ "PmsL":
/*!*****************************************************************!*\
  !*** ./src/app/pages/antenna-crudpage/antenna-crudpage.page.ts ***!
  \*****************************************************************/
/*! exports provided: AntennaCRUDPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntennaCRUDPagePage", function() { return AntennaCRUDPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_antenna_crudpage_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./antenna-crudpage.page.html */ "ACPR");
/* harmony import */ var _antenna_crudpage_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./antenna-crudpage.page.scss */ "Qw9Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _classes_antenna__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/antenna */ "JvP/");
/* harmony import */ var _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/fire/auth */ "UbJi");
/* harmony import */ var _services_firebase_updater_and_setter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/firebase-updater-and-setter.service */ "hsKi");
/* harmony import */ var _services_firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/firebase-obtainer.service */ "JQOl");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let AntennaCRUDPagePage = class AntennaCRUDPagePage {
    constructor(firebaseUpdaterAndSetter, firebaseObtainerService, modalController, auth) {
        this.firebaseUpdaterAndSetter = firebaseUpdaterAndSetter;
        this.firebaseObtainerService = firebaseObtainerService;
        this.modalController = modalController;
        this.auth = auth;
        this.type = null;
        this.name = null;
        this.range = null;
        this.height = null;
        this.brand = null;
        this.price = null;
        this.antennaeTotal = [];
    }
    ngOnInit() {
        this.firebaseObtainerService.listAllAntennas().then(ants => {
            ants.forEach(ant => {
                this.antennaeTotal.push(ant.val());
            });
        });
    }
    updateAntenna() {
        this.type = this.antenna.type;
        this.name = this.antenna.name;
        this.range = this.antenna.range;
        this.height = this.antenna.height;
        this.brand = this.antenna.brand === undefined ? null : this.antenna.brand;
        this.id = this.antenna.id;
        this.price = this.antenna.price === undefined ? null : this.antenna.price;
    }
    dismiss() {
        this.modalController.dismiss();
    }
    submit() {
        if (this.id !== undefined) {
            this.antenna = new _classes_antenna__WEBPACK_IMPORTED_MODULE_4__["Antenna"](this.type, this.name, this.range, this.height, this.brand, this.id, this.price);
            this.firebaseUpdaterAndSetter.updateAntenna(this.antenna);
        }
        else {
            this.id = "placeholder";
            this.antenna = new _classes_antenna__WEBPACK_IMPORTED_MODULE_4__["Antenna"](this.type, this.name, this.range, this.height, this.brand, this.id, this.price);
            if (this.isadmin) {
                this.firebaseUpdaterAndSetter.setAntennaAdmin(this.antenna);
            }
            else {
                this.firebaseUpdaterAndSetter.setAntenna(this.antenna);
            }
        }
    }
};
AntennaCRUDPagePage.ctorParameters = () => [
    { type: _services_firebase_updater_and_setter_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseUpdaterAndSetterService"] },
    { type: _services_firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseObtainerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }
];
AntennaCRUDPagePage.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    range: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    brand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    price: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isadmin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AntennaCRUDPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-antenna-crudpage',
        template: _raw_loader_antenna_crudpage_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_antenna_crudpage_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AntennaCRUDPagePage);



/***/ }),

/***/ "Qw9Q":
/*!*******************************************************************!*\
  !*** ./src/app/pages/antenna-crudpage/antenna-crudpage.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbnRlbm5hLWNydWRwYWdlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "TmUm":
/*!***************************************************************************!*\
  !*** ./src/app/pages/antenna-crudpage/antenna-crudpage-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AntennaCRUDPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntennaCRUDPagePageRoutingModule", function() { return AntennaCRUDPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _antenna_crudpage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./antenna-crudpage.page */ "PmsL");




const routes = [
    {
        path: '',
        component: _antenna_crudpage_page__WEBPACK_IMPORTED_MODULE_3__["AntennaCRUDPagePage"]
    }
];
let AntennaCRUDPagePageRoutingModule = class AntennaCRUDPagePageRoutingModule {
};
AntennaCRUDPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AntennaCRUDPagePageRoutingModule);



/***/ }),

/***/ "isVa":
/*!*******************************************************************!*\
  !*** ./src/app/pages/antenna-crudpage/antenna-crudpage.module.ts ***!
  \*******************************************************************/
/*! exports provided: AntennaCRUDPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntennaCRUDPagePageModule", function() { return AntennaCRUDPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _antenna_crudpage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./antenna-crudpage-routing.module */ "TmUm");
/* harmony import */ var _antenna_crudpage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./antenna-crudpage.page */ "PmsL");







let AntennaCRUDPagePageModule = class AntennaCRUDPagePageModule {
};
AntennaCRUDPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _antenna_crudpage_routing_module__WEBPACK_IMPORTED_MODULE_5__["AntennaCRUDPagePageRoutingModule"]
        ],
        declarations: [_antenna_crudpage_page__WEBPACK_IMPORTED_MODULE_6__["AntennaCRUDPagePage"]]
    })
], AntennaCRUDPagePageModule);



/***/ })

}]);
//# sourceMappingURL=pages-antenna-crudpage-antenna-crudpage-module.js.map