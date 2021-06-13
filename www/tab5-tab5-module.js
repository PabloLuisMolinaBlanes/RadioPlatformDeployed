(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"],{

/***/ "1L0K":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab5/tab5.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Usuarios</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Usuarios</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-item>\r\n    <ion-select [(ngModel)]=\"country\" (ionChange)=\"updateArray()\" placeholder=\"País\">\r\n      <ion-select-option value=\"\">All places</ion-select-option>\r\n      <ion-select-option *ngFor=\"let user of countries\" [value]=\"user\">{{user}}</ion-select-option>\r\n    </ion-select>\r\n    </ion-item>\r\n  <ion-item>\r\n    <ion-select [(ngModel)]=\"frequency\" (ionChange)=\"updateArray()\" placeholder=\"Frecuencia\">\r\n      <ion-select-option value=\"\">All freqs</ion-select-option>\r\n      <ion-select-option *ngFor=\"let user of frequencies\" [value]=\"user\">{{user}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-select [(ngModel)]=\"status\" (ionChange)=\"updateArray()\" placeholder=\"Online\">\r\n      <ion-select-option value=\"\">All stats</ion-select-option>\r\n      <ion-select-option value=\"online\">Online</ion-select-option>\r\n      <ion-select-option value=\"offline\">Offline</ion-select-option>\r\n      <ion-select-option value=\"dont\">Don't disturb</ion-select-option>\r\n    </ion-select></ion-item>\r\n      <ion-item>\r\n        <ion-select [(ngModel)]=\"transmitting\" (ionChange)=\"updateArray()\" placeholder=\"Emitiendo\">\r\n          <ion-select-option value=\"\">Transmitting?</ion-select-option>\r\n          <ion-select-option value=\"true\">True</ion-select-option>\r\n          <ion-select-option value=\"false\">False</ion-select-option>\r\n        </ion-select></ion-item>\r\n          <app-useritem [users]=\"usersVisible\"></app-useritem>\r\n        \r\n</ion-content>\r\n");

/***/ }),

/***/ "4kGz":
/*!***************************************************!*\
  !*** ./src/app/pages/tab5/tab5-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Tab5PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageRoutingModule", function() { return Tab5PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab5.page */ "Ll0l");




const routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_3__["Tab5Page"]
    }
];
let Tab5PageRoutingModule = class Tab5PageRoutingModule {
};
Tab5PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab5PageRoutingModule);



/***/ }),

/***/ "BJ9X":
/*!***********************************************************!*\
  !*** ./src/app/components/useritem/useritem.component.ts ***!
  \***********************************************************/
/*! exports provided: UseritemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseritemComponent", function() { return UseritemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_useritem_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./useritem.component.html */ "NoNt");
/* harmony import */ var _useritem_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useritem.component.scss */ "jjTk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let UseritemComponent = class UseritemComponent {
    constructor() {
        this.users = [];
    }
    ngOnInit() {
    }
};
UseritemComponent.ctorParameters = () => [];
UseritemComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    users: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
UseritemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-useritem',
        template: _raw_loader_useritem_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_useritem_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UseritemComponent);



/***/ }),

/***/ "Ll0l":
/*!*****************************************!*\
  !*** ./src/app/pages/tab5/tab5.page.ts ***!
  \*****************************************/
/*! exports provided: Tab5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5Page", function() { return Tab5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab5.page.html */ "1L0K");
/* harmony import */ var _tab5_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab5.page.scss */ "VJ2Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firebase-obtainer.service */ "JQOl");
/* harmony import */ var _node_modules_angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");








let Tab5Page = class Tab5Page {
    constructor(firebaseObtainerService, afDatabase, storage, sanitizer) {
        this.firebaseObtainerService = firebaseObtainerService;
        this.afDatabase = afDatabase;
        this.storage = storage;
        this.sanitizer = sanitizer;
        this.usersTotal = [];
        this.usersVisible = [];
        this.frequency = "";
        this.status = "";
        this.country = "";
        this.frequencies = [];
        this.countries = [];
        this.filterusers = function (user) {
            console.log(this.frequency);
            if ((this.status === "" || user.status === this.status) && (this.country === "" || user.country === this.country) && (this.frequency === "" || user.preferredFrequency === this.frequency) && (this.transmitting === "" || user.transmitting === (this.transmitting === "true" ? true : false))) {
                return true;
            }
            else {
                return false;
            }
        };
    }
    ngOnInit() {
        this.usersVisible = this.usersTotal;
        this.usersVisible = this.usersTotal;
        this.allUsers = this.firebaseObtainerService.listAllUsers();
        this.afDatabase.database.ref("users").on("child_changed", function (childsnapshot) {
            const child = childsnapshot.val();
            this.countries.push(child.country);
            this.frequencies.push(child.preferredFrequency);
            this.countries = [...new Set(this.countries)];
            this.frequencies = [...new Set(this.frequencies)];
            this.usersVisible.forEach(user => {
                if (child.id === user.id) {
                    user.username = child.username;
                    user.country = child.country;
                    user.callsign = child.callsign;
                    user.favouriteAntenna = child.favouriteAntenna.substr(child.favouriteAntenna.indexOf(' '), child.favouriteAntenna.length);
                    ;
                    user.favouriteRadioSet = child.favouriteRadioSet.substr(child.favouriteRadioSet.indexOf(' '), child.favouriteRadioSet.length);
                    user.preferredFrequency = child.preferredFrequency;
                    user.transmitting = child.transmitting;
                    user.transmittingFrequency = child.transmittingFrequency;
                    user.status = child.status;
                }
            });
        }, () => { console.log("error here"); }, this);
        this.allUsers.then(m => {
            m.forEach(user => {
                const thisuser = user.val();
                this.countries.push(thisuser.country);
                this.frequencies.push(thisuser.preferredFrequency);
                this.countries = [...new Set(this.countries)];
                this.frequencies = [...new Set(this.frequencies)];
                if (thisuser.favouriteAntenna !== undefined) {
                    thisuser.favouriteAntenna = thisuser.favouriteAntenna.substr(thisuser.favouriteAntenna.indexOf(' '), thisuser.favouriteAntenna.length);
                }
                if (thisuser.favouriteRadioSet !== undefined) {
                    thisuser.favouriteRadioSet = thisuser.favouriteRadioSet.substr(thisuser.favouriteRadioSet.indexOf(' '), thisuser.favouriteRadioSet.length);
                }
                this.storage.ref(thisuser.id).getDownloadURL().toPromise().then((downloadURL) => {
                    thisuser.profilepicture = this.sanitizer.bypassSecurityTrustResourceUrl(downloadURL);
                    this.usersTotal.push(thisuser);
                }).catch((error) => {
                    thisuser.profilepicture = undefined;
                    if (thisuser.favouriteAntenna !== undefined) {
                        thisuser.favouriteAntenna = thisuser.favouriteAntenna.substr(thisuser.favouriteAntenna.indexOf(' '), thisuser.favouriteAntenna.length);
                    }
                    if (thisuser.favouriteRadioSet !== undefined) {
                        thisuser.favouriteRadioSet = thisuser.favouriteRadioSet.substr(thisuser.favouriteRadioSet.indexOf(' '), thisuser.favouriteRadioSet.length);
                    }
                    this.usersTotal.push(thisuser);
                });
                this.usersVisible = this.usersTotal;
            });
        });
    }
    updateArray() {
        this.usersVisible = this.usersTotal.filter(this.filterusers, this);
    }
};
Tab5Page.ctorParameters = () => [
    { type: _services_firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseObtainerService"] },
    { type: _node_modules_angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSanitizerImpl"] }
];
Tab5Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab5',
        template: _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab5_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab5Page);



/***/ }),

/***/ "NJt5":
/*!*******************************************!*\
  !*** ./src/app/pages/tab5/tab5.module.ts ***!
  \*******************************************/
/*! exports provided: Tab5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageModule", function() { return Tab5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab5-routing.module */ "4kGz");
/* harmony import */ var _components_useritem_useritem_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/useritem/useritem.component */ "BJ9X");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab5.page */ "Ll0l");








let Tab5PageModule = class Tab5PageModule {
};
Tab5PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab5PageRoutingModule"]
        ],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_7__["Tab5Page"], _components_useritem_useritem_component__WEBPACK_IMPORTED_MODULE_6__["UseritemComponent"]]
    })
], Tab5PageModule);



/***/ }),

/***/ "NoNt":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/useritem/useritem.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table>\r\n    <tr>\r\n        <th>Profile picture</th>\r\n        <th>Nombre</th>\r\n        <th>Callsign</th>\r\n        <th>Country</th>\r\n        <th>Status</th>\r\n        <th>Transmitting</th>\r\n        <th>Favourites</th>\r\n    </tr>\r\n    <tr *ngFor=\"let user of users\">\r\n        <td><img height=\"50px\" width=\"50px\" [src]=\"user.profilepicture\" *ngIf=\"user.profilepicture !== undefined\"><p *ngIf=\"user.profilepicture === undefined\">N/A</p></td>\r\n        <td>{{user.username}}</td>\r\n        <td>{{user.callsign}}</td>\r\n        <td>{{user.country}}</td>\r\n        <td>{{user.status}}</td>\r\n        <td>{{user.transmitting}} <span> ({{ user.transmittingFrequency }})</span></td>\r\n        <td>{{user.favouriteAntenna}} - {{user.favouriteRadioSet}}</td>\r\n</tr>\r\n</table>");

/***/ }),

/***/ "VJ2Q":
/*!*******************************************!*\
  !*** ./src/app/pages/tab5/tab5.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWI1LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "jjTk":
/*!*************************************************************!*\
  !*** ./src/app/components/useritem/useritem.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table td, table th {\n  padding: 20px;\n}\n\n@media (max-width: 673px) {\n  table td, table th {\n    padding: 0px;\n  }\n}\n\n@media (max-height: 673px) {\n  table td, table th {\n    padding: 5px;\n  }\n}\n\n@media (max-height: 400px) {\n  table td, table th {\n    padding: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFDQTtFQUNJO0lBQ0ksWUFBQTtFQUVOO0FBQ0Y7O0FBQUE7RUFDSTtJQUNJLFlBQUE7RUFFTjtBQUNGOztBQUFBO0VBQ0k7SUFDSSxZQUFBO0VBRU47QUFDRiIsImZpbGUiOiJ1c2VyaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHRkLCB0YWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjY3M3B4KSB7XHJcbiAgICB0YWJsZSB0ZCwgdGFibGUgdGgge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6NjczcHgpIHtcclxuICAgIHRhYmxlIHRkLCB0YWJsZSB0aCB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LWhlaWdodDo0MDBweCkge1xyXG4gICAgdGFibGUgdGQsIHRhYmxlIHRoIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=tab5-tab5-module.js.map