(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab2-tab2-module~tab7-tab7-module"],{

/***/ "07KT":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/radio-set-crudpage/radio-set-crudpage.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>RadioSetCRUDPage</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p *ngIf=\"!(isadmin)\">Please, choose a radioset if it already exists</p>\n  <ion-item *ngIf=\"!(isadmin)\">\n    <ion-select [(ngModel)]=\"equipment\" (ionChange)=\"updateRadio()\" placeholder=\"Equipment\">\n      <ion-select-option *ngFor=\"let radioset of radioSetTotal\" [value]=\"radioset\">{{ radioset.name }}</ion-select-option>\n    </ion-select></ion-item>\n  <br>\n  <p>Brand</p>\n<ion-input [(ngModel)]=\"brand\"></ion-input>\n<p>Name</p>\n<ion-input [(ngModel)]=\"name\"></ion-input>\n<p>Type</p>\n<ion-input [(ngModel)]=\"type\"></ion-input>\n<p>Amplitude</p>\n<ion-input [(ngModel)]=\"amplitude\"></ion-input>\n<p>Price</p>\n<ion-input [(ngModel)]=\"price\"></ion-input>\n<ion-button (click)=\"submit()\" *ngIf=\"brand && name && type && amplitude\">Submit</ion-button>\n<ion-button (click)=\"dismiss()\">Cancel</ion-button>\n\n</ion-content>\n");

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

/***/ "PwB/":
/*!*********************************************************************!*\
  !*** ./src/app/components/radiosetitem/radiosetitem.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table td, table th {\n  padding: 20px;\n}\n\n@media (max-width: 766px) {\n  table td, table th {\n    padding: 10px;\n  }\n}\n\n@media (max-width: 450px) {\n  table td, table th {\n    padding: 0px;\n    margin-bottom: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyYWRpb3NldGl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSTtJQUNJLGFBQUE7RUFFTjtBQUNGOztBQUFBO0VBQ0k7SUFDSSxZQUFBO0lBQ0Esa0JBQUE7RUFFTjtBQUNGIiwiZmlsZSI6InJhZGlvc2V0aXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHRkLCB0YWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjZweCkge1xyXG4gICAgdGFibGUgdGQsIHRhYmxlIHRoIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgdGFibGUgdGQsIHRhYmxlIHRoIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "a+/E":
/*!*******************************************************************!*\
  !*** ./src/app/components/radiosetitem/radiosetitem.component.ts ***!
  \*******************************************************************/
/*! exports provided: RadiosetitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadiosetitemComponent", function() { return RadiosetitemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_radiosetitem_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./radiosetitem.component.html */ "pfjD");
/* harmony import */ var _radiosetitem_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radiosetitem.component.scss */ "PwB/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pages_radio_set_crudpage_radio_set_crudpage_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/radio-set-crudpage/radio-set-crudpage.page */ "On2E");
/* harmony import */ var _services_firebase_updater_and_setter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/firebase-updater-and-setter.service */ "hsKi");








let RadiosetitemComponent = class RadiosetitemComponent {
    constructor(modalController, alertCtrl, firebaseUpdaterAndSetter) {
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.firebaseUpdaterAndSetter = firebaseUpdaterAndSetter;
        this.equipment = [];
        this.isfavourite = false;
    }
    ngOnInit() {
        setTimeout(() => {
            this.equipment.forEach(eq => {
                var test = eq.id + ' ' + eq.name + ' ' + eq.brand;
                if (test === this.favouriteRadioSet) {
                    eq.isfavourite = true;
                }
            });
        }, 2000);
    }
    presentModalModify(radioset) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_radio_set_crudpage_radio_set_crudpage_page__WEBPACK_IMPORTED_MODULE_5__["RadioSetCRUDPagePage"],
                cssClass: 'placeholder',
                componentProps: {
                    'id': radioset.id,
                    'type': radioset.type,
                    'name': radioset.name,
                    'amplitude': radioset.amplitude,
                    'brand': radioset.brand,
                    'price': radioset.price,
                    'isadmin': true
                }
            });
            return yield modal.present();
        });
    }
    presentModalModifyUser(radioset) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_radio_set_crudpage_radio_set_crudpage_page__WEBPACK_IMPORTED_MODULE_5__["RadioSetCRUDPagePage"],
                cssClass: 'placeholder',
                componentProps: {
                    'id': radioset.id,
                    'type': radioset.type,
                    'name': radioset.name,
                    'amplitude': radioset.amplitude,
                    'brand': radioset.brand,
                    'price': radioset.price,
                    'isadmin': false
                }
            });
            return yield modal.present();
        });
    }
    presentDeleteConfirmationUser(radioset) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = this.alertCtrl.create({
                message: 'Are you sure you want to delete ' + radioset.name + '?',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    { text: 'Delete',
                        handler: () => {
                            this.firebaseUpdaterAndSetter.deleteRadioSetUser(radioset);
                        }
                    }]
            });
            (yield alert).present();
        });
    }
    presentDeleteConfirmation(radioset) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = this.alertCtrl.create({
                message: 'Are you sure you want to delete ' + radioset.name + '?',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    { text: 'Delete',
                        handler: () => {
                            this.firebaseUpdaterAndSetter.deleteRadioSet(radioset);
                        }
                    }]
            });
            (yield alert).present();
        });
    }
    sendFavouriteData(radioset) {
        if (radioset.isfavourite) {
            var favourite = radioset.id + ' ' + radioset.name + ' ' + radioset.brand;
        }
        else {
            var favourite = "";
        }
        this.firebaseUpdaterAndSetter.setFavouriteRadioSet(favourite);
    }
};
RadiosetitemComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _services_firebase_updater_and_setter_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseUpdaterAndSetterService"] }
];
RadiosetitemComponent.propDecorators = {
    radioset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    equipment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    favouriteRadioSet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isadmin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
RadiosetitemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-radiosetitem',
        template: _raw_loader_radiosetitem_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_radiosetitem_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RadiosetitemComponent);



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

/***/ "pfjD":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/radiosetitem/radiosetitem.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table>\n    <tr>\n        <th>Nombre</th>\n        <th>Marca</th>\n        <th>Tipo</th>\n        <th>Amplitud</th>\n        <th>Precio</th>\n    </tr>\n    <tr *ngFor=\"let radioset of equipment\">\n        <td>{{radioset.name}}</td>\n        <td>{{radioset.brand}}</td>\n        <td>{{radioset.type}}</td>\n        <td>{{radioset.amplitude}}</td>\n        <td>{{radioset.price}}$</td>\n        <ion-button *ngIf=\"!(isadmin)\" (click)=\"presentDeleteConfirmationUser(radioset)\" [attr.aria-label]=\"'Delete ' + radioset.name\"><ion-icon name=\"close-circle-outline\"></ion-icon></ion-button>\n<ion-button *ngIf=\"!(isadmin)\" (click)=\"presentModalModifyUser(radioset)\" [attr.aria-label]=\"'Modify ' + radioset.name\"><ion-icon name=\"brush\" ></ion-icon></ion-button>\n<ion-button *ngIf=\"isadmin\" (click)=\"presentDeleteConfirmation(radioset)\" [attr.aria-label]=\"'Delete ' + radioset.name\"><ion-icon name=\"close-circle\"></ion-icon></ion-button>\n<ion-button *ngIf=\"isadmin\" (click)=\"presentModalModify(radioset)\" [attr.aria-label]=\"'Modify ' + radioset.name\"><ion-icon name=\"create\" ></ion-icon></ion-button>\n<ion-checkbox *ngIf=\"!(isadmin)\" [(ngModel)]=\"radioset.isfavourite\" (ionChange)=\"sendFavouriteData(radioset)\"></ion-checkbox>\n        </tr>\n    </table>");

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
//# sourceMappingURL=default~tab2-tab2-module~tab7-tab7-module.js.map