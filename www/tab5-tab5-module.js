(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"],{

/***/ "D6Al":
/*!**************************************************!*\
  !*** ./src/app/useritem/useritem.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table td, table th {\n  padding: 20px;\n}\n\n@media (max-width: 673px) {\n  table td, table th {\n    padding: 0px;\n  }\n}\n\n@media (max-height: 673px) {\n  table td, table th {\n    padding: 5px;\n  }\n}\n\n@media (max-height: 400px) {\n  table td, table th {\n    padding: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHVzZXJpdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUNBO0VBQ0k7SUFDSSxZQUFBO0VBRU47QUFDRjs7QUFBQTtFQUNJO0lBQ0ksWUFBQTtFQUVOO0FBQ0Y7O0FBQUE7RUFDSTtJQUNJLFlBQUE7RUFFTjtBQUNGIiwiZmlsZSI6InVzZXJpdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUgdGQsIHRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6NjczcHgpIHtcclxuICAgIHRhYmxlIHRkLCB0YWJsZSB0aCB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LWhlaWdodDo2NzNweCkge1xyXG4gICAgdGFibGUgdGQsIHRhYmxlIHRoIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtaGVpZ2h0OjQwMHB4KSB7XHJcbiAgICB0YWJsZSB0ZCwgdGFibGUgdGgge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "FFfc":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWI1LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "GXYU":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/useritem/useritem.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table>\n    <tr>\n        <th>Profile picture</th>\n        <th>Nombre</th>\n        <th>Callsign</th>\n        <th>Country</th>\n        <th>Status</th>\n        <th>Transmitting</th>\n        <th>Favourites</th>\n    </tr>\n    <tr *ngFor=\"let user of users\">\n        <td><img height=\"50px\" width=\"50px\" [src]=\"user.profilepicture\" *ngIf=\"user.profilepicture !== undefined\"><p *ngIf=\"user.profilepicture === undefined\">N/A</p></td>\n        <td>{{user.username}}</td>\n        <td>{{user.callsign}}</td>\n        <td>{{user.country}}</td>\n        <td>{{user.status}}</td>\n        <td>{{user.transmitting}} <span> ({{ user.transmittingFrequency }})</span></td>\n        <td>{{user.favouriteAntenna}} - {{user.favouriteRadioSet}}</td>\n</tr>\n</table>");

/***/ }),

/***/ "Ki12":
/*!*********************************************!*\
  !*** ./src/app/tab5/tab5-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab5PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageRoutingModule", function() { return Tab5PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab5.page */ "Tlso");




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

/***/ "Sa0/":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
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
/* harmony import */ var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab5-routing.module */ "Ki12");
/* harmony import */ var _useritem_useritem_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../useritem/useritem.component */ "Sz2z");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab5.page */ "Tlso");








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
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_7__["Tab5Page"], _useritem_useritem_component__WEBPACK_IMPORTED_MODULE_6__["UseritemComponent"]]
    })
], Tab5PageModule);



/***/ }),

/***/ "Sz2z":
/*!************************************************!*\
  !*** ./src/app/useritem/useritem.component.ts ***!
  \************************************************/
/*! exports provided: UseritemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseritemComponent", function() { return UseritemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_useritem_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./useritem.component.html */ "GXYU");
/* harmony import */ var _useritem_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useritem.component.scss */ "D6Al");
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

/***/ "Tlso":
/*!***********************************!*\
  !*** ./src/app/tab5/tab5.page.ts ***!
  \***********************************/
/*! exports provided: Tab5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5Page", function() { return Tab5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab5.page.html */ "pXFx");
/* harmony import */ var _tab5_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab5.page.scss */ "FFfc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user */ "5uJF");
/* harmony import */ var _firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase-obtainer.service */ "jmhE");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");








let Tab5Page = class Tab5Page {
    constructor(firebaseObtainerService, storage, sanitizer) {
        this.firebaseObtainerService = firebaseObtainerService;
        this.storage = storage;
        this.sanitizer = sanitizer;
        this.usersTotal = [];
        this.usersVisible = [];
        this.frequency = "";
        this.status = "";
        this.country = "";
        this.user = new _user__WEBPACK_IMPORTED_MODULE_4__["User"]("Spain", "440mhz", "mygreatcat", "offline", false);
        this.filterusers = function (user) {
            console.log(this.frequency);
            if ((this.transmitting === undefined || user.transmitting === this.transmitting) && (this.status === "" || user.status === this.status) && (this.country === "" || user.country === this.country) && (this.frequency === "" || user.preferredFrequency === this.frequency)) {
                return true;
            }
            else {
                return false;
            }
        };
    }
    ngOnInit() {
        this.usersTotal.push(this.user);
        this.usersVisible = this.usersTotal;
        this.usersVisible = this.usersTotal;
        this.allUsers = this.firebaseObtainerService.listAllUsers();
        this.allUsers.then(m => {
            m.forEach(user => {
                const thisuser = user.val();
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
    { type: _firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseObtainerService"] },
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

/***/ "pXFx":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Usuarios</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Usuarios</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-item>\n    <ion-select [(ngModel)]=\"country\" (ionChange)=\"updateArray()\" placeholder=\"País\">\n      <ion-select-option value=\"\">All</ion-select-option>\n      <ion-select-option *ngFor=\"let user of usersTotal\" [value]=\"user.country\">{{user.country}}</ion-select-option>\n    </ion-select>\n    </ion-item>\n  <ion-item>\n    <ion-select [(ngModel)]=\"frequency\" (ionChange)=\"updateArray()\" placeholder=\"Frecuencia\">\n      <ion-select-option value=\"\">All</ion-select-option>\n      <ion-select-option *ngFor=\"let user of usersTotal\" [value]=\"user.preferredFrequency\">{{user.preferredFrequency}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-select [(ngModel)]=\"status\" (ionChange)=\"updateArray()\" placeholder=\"Online\">\n      <ion-select-option value=\"\">All</ion-select-option>\n      <ion-select-option value=\"online\">Online</ion-select-option>\n      <ion-select-option value=\"offline\">Offline</ion-select-option>\n      <ion-select-option value=\"dont\">Don't disturb</ion-select-option>\n    </ion-select></ion-item>\n      <ion-item>\n        <ion-select [(ngModel)]=\"transmitting\" (ionChange)=\"updateArray()\" placeholder=\"Emitiendo\">\n          <ion-select-option value=\"true\">True</ion-select-option>\n          <ion-select-option value=\"false\">False</ion-select-option>\n        </ion-select></ion-item>\n          <app-useritem [users]=\"usersVisible\"></app-useritem>\n        \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=tab5-tab5-module.js.map