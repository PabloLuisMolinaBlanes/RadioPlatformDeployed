(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "JGGF":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "LhMw":
/*!*****************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.ts ***!
  \*****************************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "p9Ql");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "JGGF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/fire/auth */ "UbJi");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/firebase-obtainer.service */ "JQOl");
/* harmony import */ var _node_modules_angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/@angular/fire/database */ "sSZD");
/* harmony import */ var _antenna_crudpage_antenna_crudpage_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../antenna-crudpage/antenna-crudpage.page */ "PmsL");
/* harmony import */ var _pricecalculator_pricecalculator_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pricecalculator/pricecalculator.page */ "kT78");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "fwsW");











let Tab1Page = class Tab1Page {
    constructor(firebaseObtainerService, modalController, storage, afDatabase, auth) {
        this.firebaseObtainerService = firebaseObtainerService;
        this.modalController = modalController;
        this.storage = storage;
        this.afDatabase = afDatabase;
        this.auth = auth;
        this.antennaeVisible = [];
        this.antennaeTotal = [];
        this.name = "";
        this.brand = "";
        this.type = "";
        this.height = "";
        this.names = [];
        this.brands = [];
        this.types = [];
        this.heights = [];
        this.isadmin = false;
        this.filterAntennae = function (antenna) {
            if ((this.name === "" || antenna.name === this.name) && (this.brand === "" || antenna.brand === this.brand) && (this.type === "" || antenna.type === this.type) && (this.height === "" || antenna.height === this.height)) {
                return true;
            }
            else {
                return false;
            }
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.antennaeVisible = this.antennaeTotal;
            this.storage.create();
            this.storage.set('antennae', this.antennaeTotal);
            this.auth.currentUser.then(user => {
                this.afDatabase.database.ref("users/" + user.uid + "/antennae").on("child_added", function (childsnapshot) {
                    this.antennaeTotal.push(childsnapshot.val());
                    this.antennaeVisible = this.antennaeTotal;
                    const child = childsnapshot.val();
                    this.names.push(child.name);
                    this.brands.push(child.brand);
                    this.types.push(child.type);
                    this.heights.push(child.height);
                    this.names = [...new Set(this.names)];
                    this.brands = [...new Set(this.brands)];
                    this.types = [...new Set(this.types)];
                    this.heights = [...new Set(this.heights)];
                    this.storage.set('antennae', this.antennaeTotal);
                }, () => { console.log("error here"); }, this);
                this.afDatabase.database.ref("users/" + user.uid + "/antennae").on("child_changed", function (childsnapshot) {
                    var child = childsnapshot.val();
                    this.names.push(child.name);
                    this.brands.push(child.brand);
                    this.types.push(child.type);
                    this.heights.push(child.height);
                    this.names = [...new Set(this.names)];
                    this.brands = [...new Set(this.brands)];
                    this.types = [...new Set(this.types)];
                    this.heights = [...new Set(this.heights)];
                    console.log("detected change");
                    console.log(this.antennaeVisible);
                    this.antennaeVisible.forEach(ant => {
                        if (child.id === ant.id || ant.id === "placeholder") {
                            console.log(ant);
                            console.log("found antenna");
                            ant.name = child.name;
                            ant.type = child.type;
                            ant.height = child.height;
                            ant.brand = child.brand;
                            ant.range = child.range;
                            ant.price = child.price;
                            ant.id = child.id;
                        }
                    });
                    this.antennaeTotal.forEach(ant => {
                        if (child.id === ant.id || ant.id === "placeholder") {
                            console.log(ant);
                            console.log("found antenna");
                            ant.name = child.name;
                            ant.type = child.type;
                            ant.height = child.height;
                            ant.brand = child.brand;
                            ant.range = child.range;
                            ant.price = child.price;
                            ant.id = child.id;
                        }
                    });
                    this.storage.set('antennae', this.antennaeTotal);
                }, () => { console.log("error here"); }, this);
                this.afDatabase.database.ref("users/" + user.uid + "/antennae").on("child_removed", function (childsnapshot) {
                    var child = childsnapshot.val();
                    console.log("detected deleted");
                    this.antennaeVisible.forEach(ant => {
                        if (child.id === ant.id) {
                            console.log("found deleted");
                            this.antennaeVisible = this.antennaeVisible.filter(antenna => antenna !== ant);
                        }
                    });
                    this.antennaeTotal.forEach(ant => {
                        if (child.id === ant.id) {
                            console.log("found deleted");
                            this.antennaeTotal = this.antennaeTotal.filter(antenna => antenna !== ant);
                        }
                    });
                    this.storage.set('antennae', this.antennaeTotal);
                }, () => { console.log("error here"); }, this);
                this.afDatabase.database.ref("users/" + user.uid + "/favouriteAntenna").on("value", function (childsnapshot) {
                    this.favouriteAntenna = childsnapshot.val();
                    console.log("done");
                }, () => { console.log("error here"); }, this);
                this.antennaeTotal = [];
            });
            yield this.storage.create();
        });
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _antenna_crudpage_antenna_crudpage_page__WEBPACK_IMPORTED_MODULE_8__["AntennaCRUDPagePage"],
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
        this.antennaeVisible = this.antennaeTotal.filter(this.filterAntennae, this);
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseObtainerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] },
    { type: _node_modules_angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"] },
    { type: _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "mV/h":
/*!***************************************************!*\
  !*** ./src/app/pages/tab1/tab1-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "LhMw");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "p9Ql":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab1/tab1.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Antenas\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Antenas</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-item>\r\n    <ion-select [(ngModel)]=\"name\" (ionChange)=\"updateArray()\" placeholder=\"Nombre\">\r\n      <ion-select-option value=\"\">All names</ion-select-option>\r\n      <ion-select-option *ngFor=\"let antenna of names\" [value]=\"antenna\">{{antenna}}\r\n      </ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-select placeholder=\"Marca\" [(ngModel)]=\"brand\" (ionChange)=\"updateArray()\">\r\n      <ion-select-option value=\"\">All brands</ion-select-option>\r\n      <ion-select-option *ngFor=\"let antenna of brands\" [value]=\"brand\">{{antenna}}\r\n      </ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-select placeholder=\"Tipo\" [(ngModel)]=\"type\" (ionChange)=\"updateArray()\">\r\n      <ion-select-option value=\"\">All types</ion-select-option>\r\n      <ion-select-option *ngFor=\"let antenna of types\" [value]=\"antenna\">{{antenna}}\r\n      </ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-select placeholder=\"Altura\" [(ngModel)]=\"height\" (ionChange)=\"updateArray()\">\r\n      <ion-select-option value=\"\">All heights</ion-select-option>\r\n      <ion-select-option *ngFor=\"let antenna of heights\" [value]=\"antenna\">{{antenna}}\r\n      </ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <app-antennaitem [antennae]=\"antennaeVisible\" [favouriteAntenna]=\"favouriteAntenna\" [isadmin]=\"isadmin\">\r\n  </app-antennaitem>\r\n  <ion-button *ngIf=\"name === '' && brand === '' && type === '' && height === ''\" (click)=\"presentModal()\">Add new</ion-button>\r\n  <ion-button (click)=\"presentCalculator()\">Price calculator</ion-button>\r\n</ion-content>");

/***/ }),

/***/ "uMfO":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.module.ts ***!
  \*******************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "LhMw");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab1-routing.module */ "mV/h");









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab1PageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map