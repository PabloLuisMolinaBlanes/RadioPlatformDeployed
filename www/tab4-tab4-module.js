(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "/x3L":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab4/tab4.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Chat</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Chat</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n<div id=\"chat-container\">\r\n  <div id=\"chat-window\">\r\n    <p *ngFor=\"let message of messages\">{{ message }}<ion-button (click)=\"presentBlockConfirmation(message)\" [attr.aria-label]=\"'Block user'\"><ion-icon name=\"close-circle-outline\"></ion-icon></ion-button></p>\r\n  </div>\r\n  <ion-input type=\"text\" placeholder=\"Write your message here\" [(ngModel)]=\"message\"></ion-input>  \r\n</div>\r\n<ion-button (click)=\"send()\">Send</ion-button>\r\n<p>Blocked people.</p>\r\n<p *ngFor=\"let blocked of blockedusers\">{{blocked}}<ion-button (click)=\"presentUnBlockConfirmation(blocked)\" [attr.aria-label]=\"'Unblock user'\"><ion-icon name=\"close-circle-outline\"></ion-icon></ion-button></p>\r\n</ion-content>\r\n");

/***/ }),

/***/ "7iO/":
/*!*******************************************!*\
  !*** ./src/app/pages/tab4/tab4.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#chat-window {\n  height: 25vw;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  overflow: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YWI0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoidGFiNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2hhdC13aW5kb3cge1xyXG4gICAgaGVpZ2h0OjI1dnc7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgIG92ZXJmbG93OnNjcm9sbDtcclxufSJdfQ== */");

/***/ }),

/***/ "8Rjo":
/*!***************************************************!*\
  !*** ./src/app/pages/tab4/tab4-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Tab4PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageRoutingModule", function() { return Tab4PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab4.page */ "rcec");




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["Tab4Page"]
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ "GXrT":
/*!*******************************************!*\
  !*** ./src/app/pages/tab4/tab4.module.ts ***!
  \*******************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab4-routing.module */ "8Rjo");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "rcec");







let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab4PageRoutingModule"]
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
    })
], Tab4PageModule);



/***/ }),

/***/ "rcec":
/*!*****************************************!*\
  !*** ./src/app/pages/tab4/tab4.page.ts ***!
  \*****************************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab4.page.html */ "/x3L");
/* harmony import */ var _tab4_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab4.page.scss */ "7iO/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/fire/auth */ "UbJi");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);







let Tab4Page = class Tab4Page {
    constructor(afauth, alertCtrl) {
        this.afauth = afauth;
        this.alertCtrl = alertCtrl;
        this.messages = [];
        this.blockedusers = [];
    }
    ngOnInit() {
        this.socketio = socket_io_client__WEBPACK_IMPORTED_MODULE_6__["io"]("https://radioplatforminfrastructure.herokuapp.com/");
        this.socketio.connect();
        this.socketio.on('newmessage', (data, username, blocked) => {
            if (blocked === false && this.blockedusers.findIndex(usernames => username === usernames) === -1) {
                console.log(this.blockedusers);
                this.messages.push(data);
            }
            else if (blocked === true && this.user.email === username) {
                this.messages.push(data);
            }
        });
        this.socketio.on('deletethis', (data) => {
            if (this.messages.findIndex(message => data === message) === -1) {
            }
            else {
                this.messages[this.messages.findIndex(message => data === message)] = "(This message has been deleted by the moderators)";
            }
        });
        this.afauth.currentUser.then(user => {
            if (user != null) {
                this.user = user;
                this.socketio.on('addthis', (data) => {
                    console.log("detected sending of blocked");
                    console.log(this.user.email);
                    console.log(data);
                    if (data['' + this.user.email] !== undefined) {
                        this.blockedusers = data['' + this.user.email];
                    }
                    console.log(this.blockedusers);
                });
            }
        });
    }
    presentBlockConfirmation(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = this.alertCtrl.create({
                message: 'Are you sure you want to block this user: ' + message.substr(0, message.search(":")) + '?',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Block',
                        handler: () => {
                            this.socketio.emit('blockthis', this.user.email, message.substr(0, message.search(":")));
                            this.blockedusers.push(message.substr(0, message.search(":")));
                        }
                    }
                ]
            });
            (yield alert).present();
        });
    }
    presentUnBlockConfirmation(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = this.alertCtrl.create({
                message: 'Are you sure you want to unblock this user: ' + message + '?',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Unblock',
                        handler: () => {
                            this.socketio.emit('unblockthis', this.user.email, message);
                            console.log();
                            this.blockedusers = this.blockedusers.filter(username3 => username3 !== message);
                        }
                    }
                ]
            });
            (yield alert).present();
        });
    }
    send() {
        console.log(this.user);
        let email = "placeholder";
        if (this.user !== undefined) {
            email = this.user.email;
        }
        this.socketio.emit('send', email === "placeholder" ? "anonymous" + ": " + this.message : email + ": " + this.message, email);
    }
};
Tab4Page.ctorParameters = () => [
    { type: _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
Tab4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab4',
        template: _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab4_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab4Page);



/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module.js.map