(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab7-tab7-module"],{

/***/ "2m6g":
/*!*****************************************!*\
  !*** ./src/app/pages/tab7/tab7.page.ts ***!
  \*****************************************/
/*! exports provided: Tab7Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab7Page", function() { return Tab7Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab7_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab7.page.html */ "pfHd");
/* harmony import */ var _tab7_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab7.page.scss */ "E9fJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/@angular/fire/auth */ "UbJi");
/* harmony import */ var _node_modules_angular_fire_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/@angular/fire/database */ "sSZD");
/* harmony import */ var _antenna_crudpage_antenna_crudpage_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../antenna-crudpage/antenna-crudpage.page */ "PmsL");
/* harmony import */ var _radio_set_crudpage_radio_set_crudpage_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../radio-set-crudpage/radio-set-crudpage.page */ "On2E");













let Tab7Page = class Tab7Page {
    constructor(socket, auth, afDatabase, alertCtrl, router, modalController) {
        this.socket = socket;
        this.auth = auth;
        this.afDatabase = afDatabase;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.modalController = modalController;
        this.messages = [];
        this.radiosetsVisible = [];
        this.radiosetsTotal = [];
        this.antennaeVisible = [];
        this.antennaeTotal = [];
        this.radioamplitude = "";
        this.radioname = "";
        this.radiotype = "";
        this.radiobrand = "";
        this.antennaname = "";
        this.antennabrand = "";
        this.antennatype = "";
        this.antennaheight = "";
        this.antennanames = [];
        this.antennabrands = [];
        this.antennatypes = [];
        this.antennaheights = [];
        this.radionames = [];
        this.radiobrands = [];
        this.radiotypes = [];
        this.radioamplitudes = [];
        this.isadmin = true;
        this.filterRadio = function (radioset) {
            if ((this.radioname === "" || radioset.name === this.radioname) && (this.radiobrand === "" || radioset.brand === this.radiobrand) && (this.radiotype === "" || radioset.type === this.radiotype) && (this.radioamplitude === "" || radioset.amplitude === this.radioamplitude)) {
                return true;
            }
            else {
                return false;
            }
        };
        this.filterAntennae = function (antenna) {
            if ((this.antennaname === "" || antenna.name === this.antennaname) && (this.antennabrand === "" || antenna.brand === this.antennabrand) && (this.antennatype === "" || antenna.type === this.antennatype) && (this.antennaheight === "" || antenna.height === this.antennaheight)) {
                return true;
            }
            else {
                return false;
            }
        };
    }
    ngOnInit() {
        this.auth.currentUser.then(u => {
            if (u === null) {
                this.router.navigateRoot("/login");
            }
            else if (u.email !== 'admin@example.com') {
                let alert = this.alertCtrl.create({
                    message: 'Sorry, you are not authorized to access this zone.',
                    buttons: [{
                            text: 'Ok',
                            role: 'cancel'
                        }
                    ]
                }).then(a => {
                    a.present();
                });
                this.router.navigateRoot("/login");
            }
        });
        this.socketio = socket_io_client__WEBPACK_IMPORTED_MODULE_6__["io"]("https://radioplatforminfrastructure.herokuapp.com/");
        this.socketio.connect();
        this.socketio.on('newmessage', (data) => {
            this.messages.push(data);
        });
        this.socketio.on('deletethis', (data) => {
            if (this.messages.findIndex(message => data === message) === -1) {
            }
            else {
                this.messages[this.messages.findIndex(message => data === message)] = "(This message has been deleted by the moderators)";
                console.log("It should have worked");
            }
        });
        this.socketio.on('addthisadmin', (data) => {
            console.log("indefblocked");
            console.log(data);
            this.indefblockedusers = data;
        });
        this.socketio.on('addthisadmin2', (data) => {
            if (Object.keys(data) !== undefined) {
                Object.keys(data).forEach((key, index) => {
                    var ignore = false;
                    if (!(ignore)) {
                        if (this.indefblockedusers[key] !== undefined) {
                            if (this.indefblockedusers[key].indexOf("(") !== -1) {
                                key = this.indefblockedusers[key].substr(0, this.indefblockedusers[key].indexOf("(") - 1);
                            }
                        }
                        if (!(data[key] === 0)) {
                            if (this.indefblockedusers[key] === undefined) {
                                this.indefblockedusers[key] = key;
                            }
                            else {
                                if (this.indefblockedusers[key].indexOf("(") !== -1) {
                                    this.indefblockedusers[key] = this.indefblockedusers[key].substr(0, this.indefblockedusers[key].indexOf("(") - 1);
                                }
                            }
                        }
                        else {
                            if (this.indefblockedusers[key] !== undefined) {
                                if (this.indefblockedusers[key].indexOf("(") === -1) {
                                    this.indefblockedusers[key] = this.indefblockedusers[key] + " (not blocked anymore)";
                                }
                            }
                        }
                    }
                });
                console.log(data);
            }
        });
        this.socketio.on('addthis', data => {
            console.log(data);
        });
        this.afDatabase.database.ref("/equipment").on("child_added", function (childsnapshot) {
            this.radiosetsTotal.push(childsnapshot.val());
            this.radiosetsVisible = this.radiosetsTotal;
            const child = childsnapshot.val();
            this.radionames.push(child.name);
            this.radiobrands.push(child.brand);
            this.radiotypes.push(child.type);
            this.radioamplitudes.push(child.amplitude);
            this.radionames = [...new Set(this.radionames)];
            this.radiobrands = [...new Set(this.radiobrands)];
            this.radiotypes = [...new Set(this.radiotypes)];
            this.radioamplitudes = [...new Set(this.radioamplitudes)];
            this.updateArrayRadio();
        }, () => { console.log("error here"); }, this);
        this.afDatabase.database.ref("/antennae").on("child_added", function (childsnapshot) {
            this.antennaeTotal.push(childsnapshot.val());
            const child = childsnapshot.val();
            this.antennanames.push(child.name);
            this.antennabrands.push(child.brand);
            this.antennatypes.push(child.type);
            this.antennaheights.push(child.height);
            this.antennanames = [...new Set(this.antennanames)];
            this.antennabrands = [...new Set(this.antennabrands)];
            this.antennatypes = [...new Set(this.antennatypes)];
            this.antennaheights = [...new Set(this.antennaheights)];
            this.antennaeVisible = this.antennaeTotal;
            this.updateArrayAntenna();
        }, () => { console.log("error here"); }, this);
        this.afDatabase.database.ref("/antennae").on("child_changed", function (childsnapshot) {
            var child = childsnapshot.val();
            this.antennanames.push(child.name);
            this.antennabrands.push(child.brand);
            this.antennatypes.push(child.type);
            this.antennaheights.push(child.height);
            this.antennanames = [...new Set(this.antennanames)];
            this.antennabrands = [...new Set(this.antennabrands)];
            this.antennatypes = [...new Set(this.antennatypes)];
            this.antennaheights = [...new Set(this.antennaheights)];
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
        this.afDatabase.database.ref("/antennae").on("child_removed", function (childsnapshot) {
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
        this.afDatabase.database.ref("/equipment").on("child_changed", function (childsnapshot) {
            var child = childsnapshot.val();
            this.radionames.push(child.name);
            this.radiobrands.push(child.brand);
            this.radiotypes.push(child.type);
            this.radioamplitudes.push(child.amplitude);
            this.radionames = [...new Set(this.radionames)];
            this.radiobrands = [...new Set(this.radiobrands)];
            this.radiotypes = [...new Set(this.radiotypes)];
            this.radioamplitudes = [...new Set(this.radioamplitudes)];
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
        this.afDatabase.database.ref("/equipment").on("child_removed", function (childsnapshot) {
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
    }
    presentUnblockConfirmation(message) {
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
                            console.log("executed");
                            this.socketio.emit('unblock', message);
                            delete this.indefblockedusers[message];
                        }
                    }
                ]
            });
            (yield alert).present();
        });
    }
    presentBlockDialog(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = this.alertCtrl.create({
                message: 'For how long do you want to block ' + message.substr(0, message.search(":")) + '?',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: '5 min',
                        handler: () => {
                            this.socketio.emit('block', message.substr(0, message.search(":")), 300000);
                            var temparray = Object.entries(this.indefblockedusers);
                            temparray[message.substr(0, message.search(":"))] = message.substr(0, message.search(":"));
                            this.indefblockedusers = Object.assign(temparray);
                        }
                    },
                    {
                        text: '10 min',
                        handler: () => {
                            this.socketio.emit('block', message.substr(0, message.search(":")), 600000);
                            var temparray = Object.entries(this.indefblockedusers);
                            temparray[message.substr(0, message.search(":"))] = message.substr(0, message.search(":"));
                            this.indefblockedusers = Object.assign(temparray);
                        }
                    },
                    {
                        text: '15 min',
                        handler: () => {
                            this.socketio.emit('block', message.substr(0, message.search(":")), 900000);
                            var temparray = Object.entries(this.indefblockedusers);
                            temparray[message.substr(0, message.search(":"))] = message.substr(0, message.search(":"));
                            this.indefblockedusers = Object.assign(temparray);
                        }
                    },
                    {
                        text: 'Indefinitely',
                        handler: () => {
                            this.socketio.emit('block', message.substr(0, message.search(":")), -1);
                            var temparray = Object.entries(this.indefblockedusers);
                            temparray[message.substr(0, message.search(":"))] = message.substr(0, message.search(":"));
                            this.indefblockedusers = Object.assign(temparray);
                        }
                    }
                ]
            });
            (yield alert).present();
        });
    }
    presentModalAntenna() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _antenna_crudpage_antenna_crudpage_page__WEBPACK_IMPORTED_MODULE_9__["AntennaCRUDPagePage"],
                cssClass: 'placeholder',
                componentProps: {
                    'isadmin': true
                }
            });
            return yield modal.present();
        });
    }
    presentModalRadioSet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _radio_set_crudpage_radio_set_crudpage_page__WEBPACK_IMPORTED_MODULE_10__["RadioSetCRUDPagePage"],
                cssClass: 'placeholder',
                componentProps: {
                    'isadmin': true
                }
            });
            return yield modal.present();
        });
    }
    presentDeleteConfirmation(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let alert = this.alertCtrl.create({
                message: 'Are you sure you want to delete this message: ' + message + '?',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Delete',
                        handler: () => {
                            this.socketio.emit('delete', message);
                        }
                    }
                ]
            });
            (yield alert).present();
        });
    }
    updateArrayRadio() {
        this.radiosetsVisible = this.radiosetsTotal.filter(this.filterRadio, this);
    }
    updateArrayAntenna() {
        this.antennaeVisible = this.antennaeTotal.filter(this.filterAntennae, this);
    }
};
Tab7Page.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"] },
    { type: _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
    { type: _node_modules_angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
Tab7Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab7',
        template: _raw_loader_tab7_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab7_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab7Page);



/***/ }),

/***/ "E9fJ":
/*!*******************************************!*\
  !*** ./src/app/pages/tab7/tab7.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#chat-window {\n  height: 20vw;\n  width: 40vw;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  overflow: scroll;\n}\n\n#grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n@media (max-width: 1366px) {\n  #grid {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YWI3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHFDQUFBO0FBRUo7O0FBQUE7RUFDSTtJQUNJLHFDQUFBO0VBR047QUFDRiIsImZpbGUiOiJ0YWI3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjaGF0LXdpbmRvdyB7XHJcbiAgICBoZWlnaHQ6MjB2dztcclxuICAgIHdpZHRoOjQwdnc7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgIG92ZXJmbG93OnNjcm9sbDtcclxufVxyXG4jZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcclxuICAgICNncmlkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLDFmcik7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "haBL":
/*!*******************************************!*\
  !*** ./src/app/pages/tab7/tab7.module.ts ***!
  \*******************************************/
/*! exports provided: Tab7PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab7PageModule", function() { return Tab7PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tab7_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab7-routing.module */ "zAUv");
/* harmony import */ var _tab7_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab7.page */ "2m6g");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let Tab7PageModule = class Tab7PageModule {
};
Tab7PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab7_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab7PageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_tab7_page__WEBPACK_IMPORTED_MODULE_6__["Tab7Page"]]
    })
], Tab7PageModule);



/***/ }),

/***/ "pfHd":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab7/tab7.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Administracion</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Panel de administracion</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <div id=\"grid\">\r\n    <div id=\"chat\">\r\n      <div id=\"chat-window\">\r\n        <p *ngFor=\"let message of messages\">{{ message }}\r\n          <ion-button (click)=\"presentBlockDialog(message)\" [attr.aria-label]=\"'Block user'\"><ion-icon name=\"stopwatch\"></ion-icon></ion-button>\r\n          <ion-button (click)=\"presentDeleteConfirmation(message)\" [attr.aria-label]=\"'Delete message'\"><ion-icon name=\"close-circle-outline\"></ion-icon></ion-button>\r\n        </p>\r\n      </div>\r\n      <p>Blocked users:</p>\r\n      <p *ngFor=\"let blocked of indefblockedusers | keyvalue\">{{blocked.value}}<ion-button (click)=\"presentUnblockConfirmation(blocked.value)\" [attr.aria-label]=\"'Unblock user'\"><ion-icon name=\"close-circle-outline\"></ion-icon></ion-button>\r\n      </p>\r\n    </div>\r\n    <div id=\"antennacontainer\">\r\n      <p>Antenas</p>\r\n      <ion-item>\r\n        <ion-select [(ngModel)]=\"antennaname\" (ionChange)=\"updateArrayAntenna()\" placeholder=\"Nombre\">\r\n          <ion-select-option value=\"\">All names</ion-select-option>\r\n          <ion-select-option *ngFor=\"let antenna of antennanames\" [value]=\"antenna\">{{antenna}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-select placeholder=\"Marca\" [(ngModel)]=\"antennabrand\" (ionChange)=\"updateArrayAntenna()\">\r\n          <ion-select-option value=\"\">All brands</ion-select-option>\r\n          <ion-select-option *ngFor=\"let antenna of antennabrands\" [value]=\"antenna\">{{antenna}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-select placeholder=\"Tipo\" [(ngModel)]=\"antennatype\" (ionChange)=\"updateArrayAntenna()\">\r\n          <ion-select-option value=\"\">All types</ion-select-option>\r\n          <ion-select-option *ngFor=\"let antenna of antennatypes\" [value]=\"antenna\">{{antenna}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-select placeholder=\"Altura\" [(ngModel)]=\"antennaheight\" (ionChange)=\"updateArrayAntenna()\">\r\n          <ion-select-option value=\"\">All heights</ion-select-option>\r\n          <ion-select-option *ngFor=\"let antenna of antennaheights\" [value]=\"antenna\">{{antenna}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <app-antennaitem [antennae]=\"antennaeVisible\" [isadmin]=\"isadmin\"></app-antennaitem>\r\n      <ion-button *ngIf=\"antennaname === '' && antennabrand === '' && antennatype === '' && antennaheight === ''\" (click)=\"presentModalAntenna()\">Add new</ion-button>\r\n    </div>\r\n    <div id=\"radiocontainer\">\r\n      <p>Radios</p>\r\n      <ion-item>\r\n        <ion-select [(ngModel)]=\"radioname\" (ionChange)=\"updateArrayRadio()\" placeholder=\"Nombre\">\r\n          <ion-select-option value=\"\">All names</ion-select-option>\r\n          <ion-select-option *ngFor=\"let radioset of radionames\" [value]=\"radioset\">{{radioset}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-select [(ngModel)]=\"radiobrand\" (ionChange)=\"updateArrayRadio()\" placeholder=\"Marca\">\r\n          <ion-select-option value=\"\">All brands</ion-select-option>\r\n          <ion-select-option *ngFor=\"let radioset of radiobrands\" [value]=\"radioset\">{{radioset}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-select [(ngModel)]=\"radiotype\" (ionChange)=\"updateArrayRadio()\" placeholder=\"Tipo\">\r\n          <ion-select-option value=\"\">All types</ion-select-option>\r\n          <ion-select-option *ngFor=\"let radioset of radiotypes\" [value]=\"radioset\">{{radioset}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-select [(ngModel)]=\"radioamplitude\" (ionChange)=\"updateArrayRadio()\" placeholder=\"Amplitud\">\r\n          <ion-select-option value=\"\">All amps</ion-select-option>\r\n          <ion-select-option *ngFor=\"let radioset of radioamplitudes\" [value]=\"radioset\">{{radioset}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <app-radiosetitem [equipment]=\"radiosetsVisible\" [isadmin]=\"isadmin\"></app-radiosetitem>\r\n      <ion-button *ngIf=\"radioname === '' && radiobrand === '' && radiotype === '' && radioamplitude === ''\" (click)=\"presentModalRadioSet()\">Add new</ion-button>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "zAUv":
/*!***************************************************!*\
  !*** ./src/app/pages/tab7/tab7-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Tab7PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab7PageRoutingModule", function() { return Tab7PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab7_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab7.page */ "2m6g");




const routes = [
    {
        path: '',
        component: _tab7_page__WEBPACK_IMPORTED_MODULE_3__["Tab7Page"]
    }
];
let Tab7PageRoutingModule = class Tab7PageRoutingModule {
};
Tab7PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab7PageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tab7-tab7-module.js.map