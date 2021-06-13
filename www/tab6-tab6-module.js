(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab6-tab6-module"],{

/***/ "5wSo":
/*!*******************************************!*\
  !*** ./src/app/pages/tab6/tab6.module.ts ***!
  \*******************************************/
/*! exports provided: Tab6PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab6PageModule", function() { return Tab6PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tab6_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab6-routing.module */ "Q2ie");
/* harmony import */ var _tab6_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab6.page */ "Rxtp");







let Tab6PageModule = class Tab6PageModule {
};
Tab6PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab6_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab6PageRoutingModule"]
        ],
        declarations: [_tab6_page__WEBPACK_IMPORTED_MODULE_6__["Tab6Page"]]
    })
], Tab6PageModule);



/***/ }),

/***/ "Q2ie":
/*!***************************************************!*\
  !*** ./src/app/pages/tab6/tab6-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Tab6PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab6PageRoutingModule", function() { return Tab6PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab6_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab6.page */ "Rxtp");




const routes = [
    {
        path: '',
        component: _tab6_page__WEBPACK_IMPORTED_MODULE_3__["Tab6Page"]
    }
];
let Tab6PageRoutingModule = class Tab6PageRoutingModule {
};
Tab6PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab6PageRoutingModule);



/***/ }),

/***/ "Rxtp":
/*!*****************************************!*\
  !*** ./src/app/pages/tab6/tab6.page.ts ***!
  \*****************************************/
/*! exports provided: Tab6Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab6Page", function() { return Tab6Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab6_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab6.page.html */ "imwA");
/* harmony import */ var _tab6_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab6.page.scss */ "XQd2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/fire/auth */ "UbJi");
/* harmony import */ var _services_firebase_updater_and_setter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/firebase-updater-and-setter.service */ "hsKi");
/* harmony import */ var _services_firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/firebase-obtainer.service */ "JQOl");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../classes/user */ "UxUN");










let Tab6Page = class Tab6Page {
    constructor(afauth, sanitizer, firebaseObtainer, firebaseUpdaterAndSetter, firestore) {
        this.afauth = afauth;
        this.sanitizer = sanitizer;
        this.firebaseObtainer = firebaseObtainer;
        this.firebaseUpdaterAndSetter = firebaseUpdaterAndSetter;
        this.firestore = firestore;
        this.password = undefined;
    }
    ngOnInit() {
        this.afauth.currentUser.then((user) => {
            this.firebaseObtainer.listMyself(user.uid).then((result) => {
                const me = result.val();
                this.email = me.username;
                this.status = me.status;
                this.transmitting = me.transmitting ? "true" : "false";
                this.callsign = me.callsign;
                this.country = me.country;
                this.preferredFrequency = me.preferredFrequency;
                this.firestore.ref(user.uid).getDownloadURL().toPromise().then(data => {
                    const urlSan = this.sanitizer.bypassSecurityTrustResourceUrl(data);
                    this.imageUrl = urlSan;
                }).catch(err => { });
            });
        });
    }
    onFileSelected(event) {
        this.afauth.currentUser.then((user) => {
            const file = event.target.files[0];
            file.arrayBuffer().then((result) => {
                const blob = new Blob([new Uint8Array(result, 0, file.size)]);
                const blobParts = [];
                console.log(file);
                blobParts.push(blob);
                let renamedFile = new File(blobParts, user.uid, {
                    'endings': "native",
                    'lastModified': file.lastModified,
                    'type': file.type
                });
                console.log(renamedFile.name);
                if (renamedFile) {
                    this.filename = renamedFile.name;
                    this.image = renamedFile;
                    const url = URL.createObjectURL(renamedFile);
                    console.log(url);
                    const urlSan = this.sanitizer.bypassSecurityTrustResourceUrl(url);
                    this.imageUrl = urlSan;
                    console.log(urlSan);
                    console.log(renamedFile);
                }
            });
        });
    }
    setUser() {
        this.afauth.currentUser.then(res => {
            if (this.password !== undefined && this.password !== "") {
                res.updatePassword(this.password);
            }
            let thisuser = new _classes_user__WEBPACK_IMPORTED_MODULE_9__["User"](this.country, this.preferredFrequency, res.email, this.status === 'undefined' ? null : this.status, this.transmitting === 'yes' ? true : false, res.uid, null, null, this.callsign, this.transmittingFrequency === undefined ? null : this.transmittingFrequency);
            if (this.image === undefined) {
                this.firebaseUpdaterAndSetter.updateUser(thisuser);
            }
            else {
                this.firebaseUpdaterAndSetter.updateUserAndPhoto(thisuser).then(res => {
                    this.firestore.ref('').child(this.image.name).put(this.image).then(() => {
                    });
                });
            }
        });
    }
};
Tab6Page.ctorParameters = () => [
    { type: _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSanitizerImpl"] },
    { type: _services_firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseObtainerService"] },
    { type: _services_firebase_updater_and_setter_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseUpdaterAndSetterService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"] }
];
Tab6Page.propDecorators = {
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    password: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    status: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    transmitting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    callsign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    country: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    preferredFrequency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    transmittingFrequency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
Tab6Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab6',
        template: _raw_loader_tab6_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab6_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab6Page);



/***/ }),

/***/ "XQd2":
/*!*******************************************!*\
  !*** ./src/app/pages/tab6/tab6.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWI2LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "imwA":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab6/tab6.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Perfil</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Perfil</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <img [src]=\"imageUrl\">\r\n  <p>Country</p>\r\n  <ion-input [(ngModel)]=\"country\"></ion-input>\r\n  <p>Preferred frequency</p>\r\n  <ion-input [(ngModel)]=\"preferredFrequency\"></ion-input>\r\n  <p>Status</p>\r\n  <ion-select [(ngModel)]=\"status\">\r\n    <ion-select-option value=\"online\">Online</ion-select-option>\r\n    <ion-select-option value=\"offline\">Offline</ion-select-option>\r\n    <ion-select-option value=\"dont\">Don't disturb</ion-select-option>\r\n  </ion-select>\r\n  <p>Transmitting?</p>\r\n  <ion-select [(ngModel)]=\"transmitting\">\r\n    <ion-select-option value=\"yes\">Yes</ion-select-option>\r\n    <ion-select-option value=\"no\">No</ion-select-option>\r\n  </ion-select>\r\n  <p *ngIf=\"transmitting === 'yes'\">Frequency of transmission</p>\r\n  <ion-input [(ngModel)]=\"transmittingFrequency\" *ngIf=\"transmitting === 'yes'\"></ion-input>\r\n  <p>Update password</p>\r\n  <ion-input type=\"password\"></ion-input>\r\n  <p>Callsign</p>\r\n  <ion-input [(ngModel)]=\"callsign\"></ion-input>\r\n  <p>Profile picture</p>\r\n  <input type=\"file\" (change)=\"onFileSelected($event)\">\r\n  <ion-button (click)=\"setUser()\">Update info</ion-button>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=tab6-tab6-module.js.map