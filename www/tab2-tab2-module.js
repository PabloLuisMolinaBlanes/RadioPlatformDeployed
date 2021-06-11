(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "EGAO":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "JZ9U":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab2.page.html */ "e9nj");
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss */ "EGAO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase-obtainer.service */ "jmhE");
/* harmony import */ var _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@angular/fire/auth */ "UbJi");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _node_modules_angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@angular/fire/database */ "sSZD");
/* harmony import */ var _radio_set_crudpage_radio_set_crudpage_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../radio-set-crudpage/radio-set-crudpage.page */ "XIPL");
/* harmony import */ var _pricecalculator_pricecalculator_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pricecalculator/pricecalculator.page */ "ktIm");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "fwsW");











let Tab2Page = class Tab2Page {
    constructor(firebaseObtainerService, modalController, storage, afDatabase, auth) {
        this.firebaseObtainerService = firebaseObtainerService;
        this.modalController = modalController;
        this.storage = storage;
        this.afDatabase = afDatabase;
        this.auth = auth;
        this.radiosetsVisible = [];
        this.radiosetsTotal = [];
        this.amplitude = "";
        this.name = "";
        this.type = "";
        this.brand = "";
        this.isadmin = false;
        this.filterAntennae = function (radioset) {
            if ((this.name === "" || radioset.name === this.name) && (this.brand === "" || radioset.brand === this.brand) && (this.type === "" || radioset.type === this.type) && (this.amplitude === "" || radioset.amplitude === this.amplitude)) {
                return true;
            }
            else {
                return false;
            }
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.radiosetsVisible = this.radiosetsTotal;
            this.auth.currentUser.then(user => {
                this.afDatabase.database.ref("users/" + user.uid + "/equipment").on("child_added", function (childsnapshot) {
                    this.radiosetsTotal.push(childsnapshot.val());
                    this.radiosetsVisible = this.radiosetsTotal;
                    this.storage.set('equipment', this.radiosetsVisible);
                }, () => { console.log("error here"); }, this);
                this.afDatabase.database.ref("users/" + user.uid + "/equipment").on("child_changed", function (childsnapshot) {
                    var child = childsnapshot.val();
                    console.log("detected change");
                    this.radiosetsVisible.forEach(ant => {
                        console.log(ant);
                        if (child.id === ant.id || ant.id === "placeholder") {
                            console.log("found radioset");
                            ant.name = child.name;
                            ant.type = child.type;
                            ant.brand = child.brand;
                            ant.amplitude = child.amplitude;
                            ant.price = child.price;
                            ant.id = child.id;
                        }
                    });
                    this.radiosetsTotal.forEach(ant => {
                        console.log(ant);
                        if (child.id === ant.id || ant.id === "placeholder") {
                            console.log("found radioset");
                            ant.name = child.name;
                            ant.type = child.type;
                            ant.brand = child.brand;
                            ant.amplitude = child.amplitude;
                            ant.price = child.price;
                            ant.id = child.id;
                        }
                    });
                    this.storage.set('antennae', this.radiosetsTotal);
                }, () => { console.log("error here"); }, this);
                this.afDatabase.database.ref("users/" + user.uid + "/equipment").on("child_removed", function (childsnapshot) {
                    var child = childsnapshot.val();
                    console.log("detected deleted");
                    this.radiosetsVisible.forEach(ant => {
                        if (child.id === ant.id) {
                            console.log("found deleted radioset");
                            this.radiosetsVisible = this.radiosetsVisible.filter(antenna => antenna !== ant);
                        }
                    });
                    this.radiosetsTotal.forEach(ant => {
                        if (child.id === ant.id) {
                            console.log("found deleted radioset");
                            this.radiosetsTotal = this.radiosetsTotal.filter(antenna => antenna !== ant);
                        }
                    });
                    this.storage.set('antennae', this.radiosetsTotal);
                }, () => { console.log("error here"); }, this);
                this.afDatabase.database.ref("users/" + user.uid + "/favouriteRadioSet").on("value", function (childsnapshot) {
                    this.favouriteRadioSet = childsnapshot.val();
                    console.log("done");
                }, () => { console.log("error here"); }, this);
            });
            yield this.storage.create();
        });
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _radio_set_crudpage_radio_set_crudpage_page__WEBPACK_IMPORTED_MODULE_8__["RadioSetCRUDPagePage"],
                cssClass: 'placeholder'
            });
            return yield modal.present();
        });
    }
    presentCalculator() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pricecalculator_pricecalculator_page__WEBPACK_IMPORTED_MODULE_9__["PricecalculatorPage"],
                cssClass: 'placeholder',
            });
            return yield modal.present();
        });
    }
    updateArray() {
        this.radiosetsVisible = this.radiosetsTotal.filter(this.filterAntennae, this);
    }
};
Tab2Page.ctorParameters = () => [
    { type: _firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseObtainerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] },
    { type: _node_modules_angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"] },
    { type: _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab2Page);



/***/ }),

/***/ "TUkU":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _radiosetitem_radiosetitem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../radiosetitem/radiosetitem.component */ "FvCI");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab2-routing.module */ "UDmF");









let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab2PageRoutingModule"],
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"], _radiosetitem_radiosetitem_component__WEBPACK_IMPORTED_MODULE_7__["RadiosetitemComponent"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "UDmF":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "e9nj":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Radios\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Equipamiento</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-item>\n    <ion-select [(ngModel)]=\"name\" (ionChange)=\"updateArray()\" placeholder=\"Nombre\">\n      <ion-select-option value=\"\">All</ion-select-option>\n      <ion-select-option *ngFor=\"let radioset of radiosetsTotal\" [value]=\"radioset.name\">{{radioset.name}}\n      </ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-select [(ngModel)]=\"brand\" (ionChange)=\"updateArray()\" placeholder=\"Marca\">\n      <ion-select-option value=\"\">All</ion-select-option>\n      <ion-select-option *ngFor=\"let radioset of radiosetsTotal\" [value]=\"radioset.brand\">{{radioset.brand}}\n      </ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-select [(ngModel)]=\"type\" (ionChange)=\"updateArray()\" placeholder=\"Tipo\">\n      <ion-select-option value=\"\">All</ion-select-option>\n      <ion-select-option *ngFor=\"let radioset of radiosetsTotal\" [value]=\"radioset.type\">{{radioset.type}}\n      </ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-select [(ngModel)]=\"amplitude\" (ionChange)=\"updateArray()\" placeholder=\"Amplitud\">\n      <ion-select-option value=\"\">All</ion-select-option>\n      <ion-select-option *ngFor=\"let radioset of radiosetsTotal\" [value]=\"radioset.amplitude\">{{radioset.amplitude}}\n      </ion-select-option>\n    </ion-select>\n  </ion-item>\n  <app-radiosetitem [equipment]=\"radiosetsVisible\" [favouriteRadioSet]=\"favouriteRadioSet\" [isadmin]=\"isadmin\">\n  </app-radiosetitem>\n  <ion-button (click)=\"presentModal()\" *ngIf=\"name === '' && brand === '' && type === '' && amplitude === ''\">Add new</ion-button>\n  <ion-button (click)=\"presentCalculator()\">Price calculator</ion-button>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map