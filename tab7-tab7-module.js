(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab7-tab7-module"],{

/***/ "IV+q":
/*!***********************************!*\
  !*** ./src/app/tab7/tab7.page.ts ***!
  \***********************************/
/*! exports provided: Tab7Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab7Page", function() { return Tab7Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab7_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab7.page.html */ "bE/L");
/* harmony import */ var _tab7_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab7.page.scss */ "hXTM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@angular/fire/auth */ "UbJi");
/* harmony import */ var _node_modules_angular_fire_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/@angular/fire/database */ "sSZD");
/* harmony import */ var _antenna_crudpage_antenna_crudpage_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../antenna-crudpage/antenna-crudpage.page */ "9nsz");
/* harmony import */ var _radio_set_crudpage_radio_set_crudpage_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../radio-set-crudpage/radio-set-crudpage.page */ "XIPL");













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
        this.afDatabase.database.ref("/equipment").on("child_added", function (childsnapshot) {
            this.radiosetsTotal.push(childsnapshot.val());
            this.radiosetsVisible = this.radiosetsTotal;
        }, () => { console.log("error here"); }, this);
        this.afDatabase.database.ref("/antennae").on("child_added", function (childsnapshot) {
            this.antennaeTotal.push(childsnapshot.val());
            this.antennaeVisible = this.antennaeTotal;
        }, () => { console.log("error here"); }, this);
        this.afDatabase.database.ref("/antennae").on("child_changed", function (childsnapshot) {
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
        this.afDatabase.database.ref("/antennae").on("child_removed", function (childsnapshot) {
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
        this.afDatabase.database.ref("/equipment").on("child_changed", function (childsnapshot) {
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
            this.radiosetsTotal = this.radiosetsVisible;
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
            this.radiosetsTotal = this.radiosetsVisible;
            this.storage.set('antennae', this.radiosetsTotal);
        }, () => { console.log("error here"); }, this);
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
                            this.socketio.emit('block', message.substr(0, message.search(":")), 30000);
                        }
                    },
                    {
                        text: '10 min',
                        handler: () => {
                            this.socketio.emit('block', message.substr(0, message.search(":")), 60000);
                        }
                    },
                    {
                        text: '15 min',
                        handler: () => {
                            this.socketio.emit('block', message.substr(0, message.search(":")), 90000);
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

/***/ "bE/L":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab7/tab7.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Administracion</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Panel de administracion</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <div id=\"grid\">\n    <div id=\"chat-window\">\n      <p *ngFor=\"let message of messages\">{{ message }}\n        <ion-button (click)=\"presentBlockDialog(message)\" [attr.aria-label]=\"'Block user'\"><ion-icon name=\"stopwatch\"></ion-icon></ion-button>\n        <ion-button (click)=\"presentDeleteConfirmation(message)\" [attr.aria-label]=\"'Delete message'\"><ion-icon name=\"close-circle-outline\"></ion-icon></ion-button>\n      </p>\n    </div>\n    <div id=\"antennacontainer\">\n      <p>Antenas</p>\n      <ion-item>\n        <ion-select [(ngModel)]=\"antennaname\" (ionChange)=\"updateArrayAntenna()\" placeholder=\"Nombre\">\n          <ion-select-option value=\"\">All</ion-select-option>\n          <ion-select-option *ngFor=\"let antenna of antennaeTotal\" [value]=\"antenna.name\">{{antenna.name}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-select placeholder=\"Marca\" [(ngModel)]=\"antennabrand\" (ionChange)=\"updateArrayAntenna()\">\n          <ion-select-option value=\"\">All</ion-select-option>\n          <ion-select-option *ngFor=\"let antenna of antennaeTotal\" [value]=\"antenna.brand\">{{antenna.brand}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-select placeholder=\"Tipo\" [(ngModel)]=\"antennatype\" (ionChange)=\"updateArrayAntenna()\">\n          <ion-select-option value=\"\">All</ion-select-option>\n          <ion-select-option *ngFor=\"let antenna of antennaeTotal\" [value]=\"antenna.type\">{{antenna.type}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-select placeholder=\"Altura\" [(ngModel)]=\"antennaheight\" (ionChange)=\"updateArrayAntenna()\">\n          <ion-select-option value=\"\">All</ion-select-option>\n          <ion-select-option *ngFor=\"let antenna of antennaeTotal\" [value]=\"antenna.height\">{{antenna.height}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <app-antennaitem [antennae]=\"antennaeVisible\" [isadmin]=\"isadmin\"></app-antennaitem>\n      <ion-button (click)=\"presentModalAntenna()\">Add new</ion-button>\n    </div>\n    <div id=\"radiocontainer\">\n      <p>Radios</p>\n      <ion-item>\n        <ion-select [(ngModel)]=\"radioname\" (ionChange)=\"updateArrayRadio()\" placeholder=\"Nombre\">\n          <ion-select-option value=\"\">All</ion-select-option>\n          <ion-select-option *ngFor=\"let radioset of radiosetsTotal\" [value]=\"radioset.name\">{{radioset.name}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-select [(ngModel)]=\"radiobrand\" (ionChange)=\"updateArrayRadio()\" placeholder=\"Marca\">\n          <ion-select-option value=\"\">All</ion-select-option>\n          <ion-select-option *ngFor=\"let radioset of radiosetsTotal\" [value]=\"radioset.brand\">{{radioset.brand}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-select [(ngModel)]=\"radiotype\" (ionChange)=\"updateArrayRadio()\" placeholder=\"Tipo\">\n          <ion-select-option value=\"\">All</ion-select-option>\n          <ion-select-option *ngFor=\"let radioset of radiosetsTotal\" [value]=\"radioset.type\">{{radioset.type}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-select [(ngModel)]=\"radioamplitude\" (ionChange)=\"updateArrayRadio()\" placeholder=\"Amplitud\">\n          <ion-select-option value=\"\">All</ion-select-option>\n          <ion-select-option *ngFor=\"let radioset of radiosetsTotal\" [value]=\"radioset.amplitude\">{{radioset.amplitude}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <app-radiosetitem [equipment]=\"radiosetsVisible\" [isadmin]=\"isadmin\"></app-radiosetitem>\n      <ion-button (click)=\"presentModalRadioSet()\">Add new</ion-button>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "hXTM":
/*!*************************************!*\
  !*** ./src/app/tab7/tab7.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#chat-window {\n  height: 20vw;\n  width: 40vw;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  overflow: scroll;\n}\n\n#grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n@media (max-width: 1366px) {\n  #grid {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EscUNBQUE7QUFFSjs7QUFBQTtFQUNJO0lBQ0kscUNBQUE7RUFHTjtBQUNGIiwiZmlsZSI6InRhYjcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NoYXQtd2luZG93IHtcclxuICAgIGhlaWdodDoyMHZ3O1xyXG4gICAgd2lkdGg6NDB2dztcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xyXG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xyXG59XHJcbiNncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xyXG4gICAgI2dyaWQge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsMWZyKTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "nsF6":
/*!*********************************************!*\
  !*** ./src/app/tab7/tab7-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab7PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab7PageRoutingModule", function() { return Tab7PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab7_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab7.page */ "IV+q");




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



/***/ }),

/***/ "sFF5":
/*!*************************************!*\
  !*** ./src/app/tab7/tab7.module.ts ***!
  \*************************************/
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
/* harmony import */ var _tab7_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab7-routing.module */ "nsF6");
/* harmony import */ var _tab7_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab7.page */ "IV+q");
/* harmony import */ var _radiosetitem_radiosetitem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../radiosetitem/radiosetitem.component */ "FvCI");
/* harmony import */ var _antennaitem_antennaitem_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../antennaitem/antennaitem.component */ "PmDG");









let Tab7PageModule = class Tab7PageModule {
};
Tab7PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab7_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab7PageRoutingModule"]
        ],
        declarations: [_tab7_page__WEBPACK_IMPORTED_MODULE_6__["Tab7Page"], _radiosetitem_radiosetitem_component__WEBPACK_IMPORTED_MODULE_7__["RadiosetitemComponent"], _antennaitem_antennaitem_component__WEBPACK_IMPORTED_MODULE_8__["AntennaitemComponent"]]
    })
], Tab7PageModule);



/***/ })

}]);
//# sourceMappingURL=tab7-tab7-module.js.map