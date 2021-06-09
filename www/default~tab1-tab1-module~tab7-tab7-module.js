(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab1-tab1-module~tab7-tab7-module"],{

/***/ "0ZEV":
/*!********************************************************!*\
  !*** ./src/app/antennaitem/antennaitem.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table td, table th {\n  padding: 20px;\n}\n\n@media (max-width: 766px) {\n  table td, table th {\n    padding: 10px;\n  }\n}\n\n@media (max-width: 450px) {\n  table td, table th {\n    padding: 0px;\n    margin-bottom: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFudGVubmFpdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUNBO0VBQ0k7SUFDSSxhQUFBO0VBRU47QUFDRjs7QUFBQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGtCQUFBO0VBRU47QUFDRiIsImZpbGUiOiJhbnRlbm5haXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHRkLCB0YWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjZweCkge1xyXG4gICAgdGFibGUgdGQsIHRhYmxlIHRoIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgdGFibGUgdGQsIHRhYmxlIHRoIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "3gcO":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/antenna-crudpage/antenna-crudpage.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>AntennaCRUDPage</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p *ngIf=\"!(isadmin)\">Please, choose an antenna if it already exists</p>\n  <ion-item *ngIf=\"!(isadmin)\">\n    <ion-select [(ngModel)]=\"antenna\" (ionChange)=\"updateAntenna()\" placeholder=\"Antennae\">\n      <ion-select-option *ngFor=\"let antenna of antennaeTotal\" [value]=\"antenna\">{{ antenna.name }}</ion-select-option>\n    </ion-select></ion-item>\n  <br>\n  <p>Type</p>\n<ion-input [(ngModel)]=\"type\"></ion-input>\n<p>Name</p>\n<ion-input [(ngModel)]=\"name\"></ion-input>\n<p>Range</p>\n<ion-input [(ngModel)]=\"range\"></ion-input>\n<p>Height</p>\n<ion-input [(ngModel)]=\"height\"></ion-input>\n<p>Brand</p>\n<ion-input [(ngModel)]=\"brand\"></ion-input>\n<p>Price (in dollars)</p>\n<ion-input [(ngModel)]=\"price\"></ion-input>\n<ion-button (click)=\"submit()\" *ngIf=\"type && name && range && height\">Submit</ion-button>\n<ion-button (click)=\"dismiss()\">Cancel</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "9nsz":
/*!***********************************************************!*\
  !*** ./src/app/antenna-crudpage/antenna-crudpage.page.ts ***!
  \***********************************************************/
/*! exports provided: AntennaCRUDPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntennaCRUDPagePage", function() { return AntennaCRUDPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_antenna_crudpage_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./antenna-crudpage.page.html */ "3gcO");
/* harmony import */ var _antenna_crudpage_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./antenna-crudpage.page.scss */ "LWxf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _antenna__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../antenna */ "9vUD");
/* harmony import */ var _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@angular/fire/auth */ "UbJi");
/* harmony import */ var _firebase_updater_and_setter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase-updater-and-setter.service */ "+Uwb");
/* harmony import */ var _firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase-obtainer.service */ "jmhE");
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
        this.brand = this.antenna.brand;
        this.id = this.antenna.id;
        this.price = this.antenna.price;
    }
    dismiss() {
        this.modalController.dismiss();
    }
    submit() {
        if (this.id !== undefined) {
            this.antenna = new _antenna__WEBPACK_IMPORTED_MODULE_4__["Antenna"](this.type, this.name, this.range, this.height, this.brand, this.id, this.price);
            this.firebaseUpdaterAndSetter.updateAntenna(this.antenna);
        }
        else {
            this.id = "placeholder";
            this.antenna = new _antenna__WEBPACK_IMPORTED_MODULE_4__["Antenna"](this.type, this.name, this.range, this.height, this.brand, this.id, this.price);
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
    { type: _firebase_updater_and_setter_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseUpdaterAndSetterService"] },
    { type: _firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseObtainerService"] },
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

/***/ "9vUD":
/*!****************************!*\
  !*** ./src/app/antenna.ts ***!
  \****************************/
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

/***/ "LWxf":
/*!*************************************************************!*\
  !*** ./src/app/antenna-crudpage/antenna-crudpage.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbnRlbm5hLWNydWRwYWdlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "PmDG":
/*!******************************************************!*\
  !*** ./src/app/antennaitem/antennaitem.component.ts ***!
  \******************************************************/
/*! exports provided: AntennaitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntennaitemComponent", function() { return AntennaitemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_antennaitem_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./antennaitem.component.html */ "vNZ4");
/* harmony import */ var _antennaitem_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./antennaitem.component.scss */ "0ZEV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _antenna_crudpage_antenna_crudpage_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../antenna-crudpage/antenna-crudpage.page */ "9nsz");
/* harmony import */ var _firebase_updater_and_setter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase-updater-and-setter.service */ "+Uwb");








let AntennaitemComponent = class AntennaitemComponent {
    constructor(modalController, alertCtrl, firebaseUpdaterAndSetter) {
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.firebaseUpdaterAndSetter = firebaseUpdaterAndSetter;
    }
    ngOnInit() {
        setTimeout(() => {
            this.antennae.forEach(ant => {
                var test = ant.id + ' ' + ant.name + ' ' + ant.brand;
                if (test === this.favouriteAntenna) {
                    ant.isfavourite = true;
                }
            });
        }, 2000);
    }
    presentModalModifyUser(antenna) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _antenna_crudpage_antenna_crudpage_page__WEBPACK_IMPORTED_MODULE_5__["AntennaCRUDPagePage"],
                cssClass: 'placeholder',
                componentProps: {
                    'id': antenna.id,
                    'type': antenna.type,
                    'name': antenna.name,
                    'range': antenna.range,
                    'height': antenna.height,
                    'brand': antenna.brand,
                    'price': antenna.price,
                    'isadmin': false
                }
            });
            return yield modal.present();
        });
    }
    presentModalModify(antenna) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _antenna_crudpage_antenna_crudpage_page__WEBPACK_IMPORTED_MODULE_5__["AntennaCRUDPagePage"],
                cssClass: 'placeholder',
                componentProps: {
                    'id': antenna.id,
                    'type': antenna.type,
                    'name': antenna.name,
                    'range': antenna.range,
                    'height': antenna.height,
                    'brand': antenna.brand,
                    'price': antenna.price,
                    'isadmin': true
                }
            });
            return yield modal.present();
        });
    }
    presentDeleteConfirmationUser(antenna) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = this.alertCtrl.create({
                message: 'Are you sure you want to delete ' + antenna.name + '?',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    { text: 'Delete',
                        handler: () => {
                            this.firebaseUpdaterAndSetter.deleteAntennaUser(antenna);
                        }
                    }
                ]
            });
            (yield alert).present();
        });
    }
    presentDeleteConfirmation(antenna) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = this.alertCtrl.create({
                message: 'Are you sure you want to delete ' + antenna.name + '?',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    { text: 'Delete',
                        handler: () => {
                            this.firebaseUpdaterAndSetter.deleteAntennaUser(antenna);
                        }
                    }
                ]
            });
            (yield alert).present();
        });
    }
    sendFavouriteData(antenna) {
        if (antenna.isfavourite) {
            var favourite = antenna.id + ' ' + antenna.name + ' ' + antenna.brand;
        }
        else {
            var favourite = "";
        }
        this.firebaseUpdaterAndSetter.setFavouriteAntenna(favourite);
    }
};
AntennaitemComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _firebase_updater_and_setter_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseUpdaterAndSetterService"] }
];
AntennaitemComponent.propDecorators = {
    antenna: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    antennae: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    favouriteAntenna: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isadmin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AntennaitemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-antennaitem',
        template: _raw_loader_antennaitem_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_antennaitem_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AntennaitemComponent);



/***/ }),

/***/ "vNZ4":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/antennaitem/antennaitem.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table>\n    <tr>\n        <th>Nombre</th>\n        <th>Tipo</th>\n        <th>Altura</th>\n        <th>Marca</th>\n        <th>Rango</th>\n        <th>Precio</th>\n    </tr>\n    <tr *ngFor=\"let antenna of antennae\">\n        <td>{{antenna.name}}</td>\n        <td>{{antenna.type}}</td>\n        <td>{{antenna.height}}</td>\n        <td>{{antenna.brand}}</td>\n        <td>{{antenna.range}}</td>\n        <td>{{antenna.price}}$</td>\n<ion-button *ngIf=\"!(isadmin)\" (click)=\"presentDeleteConfirmationUser(antenna)\" [attr.aria-label]=\"'Delete ' + antenna.name\"><ion-icon name=\"close-circle-outline\"></ion-icon></ion-button>\n<ion-button *ngIf=\"!(isadmin)\" (click)=\"presentModalModifyUser(antenna)\" [attr.aria-label]=\"'Modify ' + antenna.name\"><ion-icon name=\"brush\"></ion-icon></ion-button>\n<ion-button *ngIf=\"isadmin\" (click)=\"presentDeleteConfirmation(antenna)\" [attr.aria-label]=\"'Delete ' + antenna.name\"><ion-icon name=\"close-circle\"></ion-icon></ion-button>\n<ion-button *ngIf=\"isadmin\" (click)=\"presentModalModify(antenna)\" [attr.aria-label]=\"'Modify ' + antenna.name\"><ion-icon name=\"create\"></ion-icon></ion-button>\n<ion-checkbox *ngIf=\"!(isadmin)\" [(ngModel)]=\"antenna.isfavourite\" (ionChange)=\"sendFavouriteData(antenna)\"></ion-checkbox>\n    </tr>\n</table>\n");

/***/ })

}]);
//# sourceMappingURL=default~tab1-tab1-module~tab7-tab7-module.js.map