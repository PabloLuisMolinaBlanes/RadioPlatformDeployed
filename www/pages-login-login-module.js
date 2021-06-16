(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "bP1B");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "H+1c":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 0 0 20px 0;\n}\n\n.centerion-input {\n  width: 25%;\n  display: flex;\n  justify-content: center;\n  margin: auto auto;\n  border: 1px solid black;\n}\n\n@media (max-width: 1024px) {\n  .centerion-input {\n    width: 60%;\n  }\n}\n\n.centerbutton {\n  width: 25%;\n  display: flex;\n  justify-content: center;\n  margin: auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSTtJQUNJLFVBQUE7RUFFTjtBQUNGOztBQUFBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBRUoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jZW50ZXIge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4IDA7XHJcbn1cclxuLmNlbnRlcmlvbi1pbnB1dCB7XHJcbiAgICB3aWR0aDoyNSU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuY2VudGVyaW9uLWlucHV0IHtcclxuICAgICAgICB3aWR0aDo2MCU7XHJcbiAgICB9XHJcbn1cclxuLmNlbnRlcmJ1dHRvbiB7XHJcbiAgICB3aWR0aDoyNSU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbn0iXX0= */");

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"center\">\r\n    <img src=\"assets/modifiedlogoRadioPlatform.svg\" alt=\"Logo of RadioPlatform\">\r\n  </div>\r\n  <div class=\"centerion-input\">\r\n  <ion-input placeholder=\"Usuario/Signo de llamada\" [(ngModel)]=\"username\" type=\"text\"></ion-input>\r\n  </div>\r\n  <div class=\"centerion-input\">\r\n    <ion-input placeholder=\"Contraseña\" [(ngModel)]=\"password\" type=\"password\"></ion-input>\r\n  </div>\r\n  <ion-button class=\"centerbutton\" shape=\"round\" (click)=\"login(username, password)\">Entrar</ion-button>\r\n  <br>\r\n  <ion-button class=\"centerbutton\" shape=\"round\" (click)=\"register()\">Registrarse</ion-button>\r\n</ion-content>\r\n");

/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "bP1B");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "TuYN");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "H+1c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/fire/auth */ "UbJi");
/* harmony import */ var _node_modules_angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/@angular/fire/database */ "sSZD");








let LoginPage = class LoginPage {
    constructor(afauth, router, afDatabase, alertCtrl) {
        this.afauth = afauth;
        this.router = router;
        this.afDatabase = afDatabase;
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() {
        this.testResult = "test to be done";
    }
    login(user, password) {
        return new Promise((resolve, reject) => {
            this.afauth.signInWithEmailAndPassword(this.username, this.password).then(res => { this.router.navigateForward("/tabs"); }, err => {
                if (this.username.indexOf("@") !== -1) {
                    let alert = this.alertCtrl.create({
                        message: 'Name or password are incorrect',
                        buttons: [{
                                text: 'Ok',
                                role: 'cancel'
                            }
                        ]
                    }).then(a => {
                        a.present();
                    });
                }
                else {
                    this.afDatabase.database.ref('callsigns/' + this.username).get().then(u => {
                        if (u.val() === null) {
                            let alert = this.alertCtrl.create({
                                message: 'Name or password are incorrect',
                                buttons: [{
                                        text: 'Ok',
                                        role: 'cancel'
                                    }
                                ]
                            }).then(a => {
                                a.present();
                            });
                        }
                        else {
                            this.afauth.signInWithEmailAndPassword(u.val(), this.password).then(res => { this.router.navigateForward("/tabs"); }, err => {
                                let alert = this.alertCtrl.create({
                                    message: 'Name or password are incorrect',
                                    buttons: [{
                                            text: 'Ok',
                                            role: 'cancel'
                                        }
                                    ]
                                }).then(a => {
                                    a.present();
                                });
                            });
                        }
                    }).catch(err => {
                        let alert = this.alertCtrl.create({
                            message: 'Name or password are incorrect',
                            buttons: [{
                                    text: 'Ok',
                                    role: 'cancel'
                                }
                            ]
                        }).then(a => {
                            a.present();
                        });
                    });
                }
            });
        });
    }
    register() {
        this.router.navigateForward("/register");
    }
};
LoginPage.ctorParameters = () => [
    { type: _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _node_modules_angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
LoginPage.propDecorators = {
    username: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    password: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map