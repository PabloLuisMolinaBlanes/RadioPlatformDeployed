(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Antenas\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Antenas</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-item>\n    <ion-select [(ngModel)]=\"name\" (ionChange)=\"updateArray()\" placeholder=\"Nombre\">\n      <ion-select-option value=\"\">All</ion-select-option>\n      <ion-select-option *ngFor=\"let antenna of antennaeTotal\" [value]=\"antenna.name\">{{antenna.name}}</ion-select-option>\n    </ion-select></ion-item>\n  <ion-item>\n    <ion-select placeholder=\"Marca\" [(ngModel)]=\"brand\" (ionChange)=\"updateArray()\">\n      <ion-select-option value=\"\">All</ion-select-option>\n      <ion-select-option *ngFor=\"let antenna of antennaeTotal\" [value]=\"antenna.brand\">{{antenna.brand}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-select placeholder=\"Tipo\" [(ngModel)]=\"type\" (ionChange)=\"updateArray()\">\n      <ion-select-option value=\"\">All</ion-select-option>\n      <ion-select-option *ngFor=\"let antenna of antennaeTotal\" [value]=\"antenna.type\">{{antenna.type}}</ion-select-option>\n    </ion-select></ion-item>\n    <ion-item>\n        <ion-select placeholder=\"Altura\" [(ngModel)]=\"height\" (ionChange)=\"updateArray()\">\n          <ion-select-option value=\"\">All</ion-select-option>\n          <ion-select-option *ngFor=\"let antenna of antennaeTotal\" [value]=\"antenna.height\">{{antenna.height}}</ion-select-option>\n        </ion-select>\n    </ion-item>\n      <app-antennaitem [antennae]=\"antennaeVisible\" [favouriteAntenna]=\"favouriteAntenna\" [isadmin]=\"isadmin\"></app-antennaitem>\n    <ion-button (click)=\"presentModal()\">Add new</ion-button>\n    <ion-button (click)=\"presentCalculator()\">Price calculator</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/fire/auth */ "UbJi");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase-obtainer.service */ "jmhE");
/* harmony import */ var _node_modules_angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@angular/fire/database */ "sSZD");
/* harmony import */ var _antenna_crudpage_antenna_crudpage_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../antenna-crudpage/antenna-crudpage.page */ "9nsz");
/* harmony import */ var _pricecalculator_pricecalculator_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pricecalculator/pricecalculator.page */ "ktIm");
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
            this.auth.currentUser.then(user => {
                this.afDatabase.database.ref("users/" + user.uid + "/antennae").on("child_added", function (childsnapshot) {
                    this.antennaeTotal.push(childsnapshot.val());
                    this.antennaeVisible = this.antennaeTotal;
                    this.storage.set('antennae', this.antennaeTotal);
                }, () => { console.log("error here"); }, this);
                this.afDatabase.database.ref("users/" + user.uid + "/antennae").on("child_changed", function (childsnapshot) {
                    var child = childsnapshot.val();
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
                    this.antennaeTotal = this.antennaeVisible;
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
                    this.antennaeTotal = this.antennaeVisible;
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
    { type: _firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseObtainerService"] },
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

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




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

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
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
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _antennaitem_antennaitem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../antennaitem/antennaitem.component */ "PmDG");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");









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
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"], _antennaitem_antennaitem_component__WEBPACK_IMPORTED_MODULE_7__["AntennaitemComponent"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map