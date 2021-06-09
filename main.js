(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Uwb":
/*!********************************************************!*\
  !*** ./src/app/firebase-updater-and-setter.service.ts ***!
  \********************************************************/
/*! exports provided: FirebaseUpdaterAndSetterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseUpdaterAndSetterService", function() { return FirebaseUpdaterAndSetterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _node_modules_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@angular/fire/database */ "sSZD");
/* harmony import */ var _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/fire/auth */ "UbJi");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");









let FirebaseUpdaterAndSetterService = class FirebaseUpdaterAndSetterService {
    constructor(afDatabase, auth, https, storage, alertCtrl) {
        this.afDatabase = afDatabase;
        this.auth = auth;
        this.https = https;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.mayi1 = true;
        this.mayi2 = true;
        this.mayi3 = true;
    }
    setAntenna(antenna) {
        this.auth.currentUser.then(user => {
            this.afDatabase.database.ref('users/' + user.uid + '/antennae').push(antenna).then((r) => {
                antenna.id = r.key;
                this.afDatabase.database.ref('users/' + user.uid + '/antennae/' + r.key).update({ id: r.key });
                this.afDatabase.database.ref('antennae/' + r.key).set(antenna);
                this.alertCtrl.create({
                    message: "Item added succesfully",
                    buttons: [{
                            text: "OK",
                            role: 'ok'
                        }]
                }).then(a => {
                    a.present();
                });
            });
        });
    }
    setAntennaAdmin(antenna) {
        this.afDatabase.database.ref('/antennae/').push(antenna).then(r => {
            this.afDatabase.database.ref('/antennae/' + r.key).update({ id: r.key }).then(a => {
                this.makeAddSuccessMessage();
            });
        });
    }
    setRadioSetAdmin(radioset) {
        this.afDatabase.database.ref('/equipment/').push(radioset).then(r => {
            this.afDatabase.database.ref('/equipment/' + r.key).update({ id: r.key }).then(a => {
                this.makeAddSuccessMessage();
            });
        });
    }
    setFavouriteRadioSet(radioset) {
        this.auth.currentUser.then(user => {
            this.afDatabase.database.ref('users/' + user.uid).update({ favouriteRadioSet: radioset });
        });
    }
    setRadioSet(radioset) {
        this.auth.currentUser.then(user => {
            this.afDatabase.database.ref('users/' + user.uid + '/equipment').push(radioset).then((r) => {
                radioset.id = r.key;
                this.afDatabase.database.ref('users/' + user.uid + '/equipment/' + r.key).update({ id: r.key }).then(() => {
                    this.afDatabase.database.ref('equipment/' + radioset.id).set(radioset);
                    this.alertCtrl.create({
                        message: "Item added succesfully",
                        buttons: [{
                                text: "OK",
                                role: 'ok'
                            }]
                    }).then(a => {
                        a.present();
                    });
                });
            });
        });
    }
    setFavouriteAntenna(antenna) {
        this.auth.currentUser.then(user => {
            this.afDatabase.database.ref('users/' + user.uid).update({ favouriteAntenna: antenna });
        });
    }
    makeErrorMessage() {
        this.alertCtrl.create({
            message: "There has been an error in the infrastructure, please try again later",
            buttons: [{
                    text: "OK",
                    role: 'ok'
                }]
        }).then(a => {
            a.present();
        });
    }
    makeAddSuccessMessage() {
        this.alertCtrl.create({
            message: "Item added succesfully",
            buttons: [{
                    text: "OK",
                    role: 'ok'
                }]
        }).then(a => {
            a.present();
        });
    }
    testHTML() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();
        headers.set('User-Agent', 'RadioPlatform (https://github.com/PabloLuisMolinaBlanes/RadioPlatform)');
        console.log(this.https.get('https://radioplatforminfrastructure.herokuapp.com/list/Málaga', { headers }));
        this.https.get('https://radioplatforminfrastructure.herokuapp.com/list/Malaga', { headers }).toPromise().then(val => {
            if (val.length === 0) {
                console.log("empty");
            }
            else {
                console.log(val);
            }
            this.mayi1 = true;
        }).catch(err => {
            this.makeErrorMessage();
        });
        this.https.get('https://radioplatforminfrastructure.herokuapp.com/list/Malaga', {}).toPromise().then(val => {
            this.mayi2 = true;
            if (val.length > 0) {
                console.log(val[0].coordenada);
            }
            else {
                this.https.get('https://radioplatforminfrastructure.herokuapp.com/cani', {}).toPromise().then(data => {
                    console.log(data[0]);
                    this.mayi3 = true;
                    if (data[0].issearching === 0) {
                        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
                        headers.set('User-Agent', 'RadioPlatform (https://github.com/PabloLuisMolinaBlanes/RadioPlatform)');
                        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();
                        this.https.get('');
                        this.https.post('https://radioplatforminfrastructure.herokuapp.com/operatecon/', {}).toPromise().then(data => {
                            console.log(data);
                            setTimeout(() => {
                                this.https.post('https://radioplatforminfrastructure.herokuapp.com/operatecon/', {}).toPromise().then(data => {
                                    console.log(data);
                                }).catch(err => {
                                    this.makeErrorMessage();
                                });
                            }, 3000);
                        }).catch(err => {
                            this.makeErrorMessage();
                        });
                    }
                }).catch(err => {
                    this.makeErrorMessage();
                });
            }
        }).catch(err => {
            this.makeErrorMessage();
        });
    }
    setContactMethod(contact, audio) {
        this.auth.currentUser.then(u => {
            this.storage.ref(u.uid).listAll().toPromise().then(data => {
                this.storage.ref(u.uid).child("" + contact.number).put(audio).then(() => {
                    this.makeAddSuccessMessage();
                }).catch(err => {
                    this.alertCtrl.create({
                        message: "Item added succesfully, no audio detected",
                        buttons: [{
                                text: "OK",
                                role: 'ok'
                            }]
                    }).then(a => {
                        a.present();
                    });
                });
            });
        });
    }
    updateContactMethod(contact, audio) {
        this.auth.currentUser.then(u => {
            this.storage.ref(u.uid).listAll().toPromise().then(data => {
                this.storage.ref(u.uid).child("" + contact.number).put(audio).then(() => {
                    this.alertCtrl.create({
                        message: "Item updated succesfully",
                        buttons: [{
                                text: "OK",
                                role: 'ok'
                            }]
                    }).then(a => {
                        a.present();
                    });
                }).catch(err => {
                    this.alertCtrl.create({
                        message: "Item updated succesfully, no audio detected",
                        buttons: [{
                                text: "OK",
                                role: 'ok'
                            }]
                    }).then(a => {
                        a.present();
                    });
                });
            });
        });
    }
    setContact(contact, audio) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            contact.updated = "false";
            if ((this.mayi1 && this.mayi2 && this.mayi3) || contact.location === null) {
                if (contact.location === null) {
                    this.auth.currentUser.then(user => {
                        this.afDatabase.database.ref('users/' + user.uid + '/contacts/').push(contact).then((r) => {
                            contact.number = r.key.replace("-", "").replace("_", "");
                            this.afDatabase.database.ref('users/' + user.uid + '/contacts/' + r.key).update({ id: r.key, number: r.key.replace("-", "").replace("_", "") });
                        }).then(r => {
                            this.setContactMethod(contact, audio);
                        });
                    });
                }
                else {
                    this.https.get('https://radioplatforminfrastructure.herokuapp.com/list/' + contact.location, {}).toPromise().then(val => {
                        if (val.length > 0) {
                            contact.coordinates = val[0].coordenada;
                            contact.recording = null;
                            console.log("uploading... (1)");
                            this.auth.currentUser.then(user => {
                                this.afDatabase.database.ref('users/' + user.uid + '/contacts/').push(contact).then((r) => {
                                    contact.number = r.key.replace("-", "").replace("_", "");
                                    this.afDatabase.database.ref('users/' + user.uid + '/contacts/' + r.key).update({ id: r.key, number: r.key.replace("-", "").replace("_", "") });
                                }).then(r => {
                                    this.setContactMethod(contact, audio);
                                });
                            });
                        }
                        else {
                            this.https.get('https://radioplatforminfrastructure.herokuapp.com/cani', {}).toPromise().then(data => {
                                console.log(data[0]);
                                if (data[0].issearching === false) {
                                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
                                    headers = headers.append('Application', 'RadioPlatform (https://github.com/PabloLuisMolinaBlanes/RadioPlatform)');
                                    headers = headers.append('Access-Control-Allow-Origin', 'https://www.openstreetmap.org');
                                    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();
                                    params.append('q', contact.location);
                                    params.append('email', 'pablo.molina@iescampanillas.com');
                                    this.https.get('https://nominatim.openstreetmap.org/search.php?q=' + contact.location + '&email=pablo.molina@iescampanillas.com&format=json&limit=1', { headers }).toPromise().then(data => {
                                        const lat = data[0].lat;
                                        const lon = data[0].lon;
                                        console.log(lat);
                                        console.log(lon);
                                        contact.coordinates = "" + lat + "," + "" + lon;
                                        this.https.post('https://radioplatforminfrastructure.herokuapp.com/newcoordinate/', { "coordenada": data[0].lat + "," + data[0].lon, "terminobusqueda": contact.location }).toPromise().then(data => {
                                            this.https.post('https://radioplatforminfrastructure.herokuapp.com/operatecon/', {}).toPromise().then(data => {
                                                console.log(data);
                                                setTimeout(() => {
                                                    this.https.post('https://radioplatforminfrastructure.herokuapp.com/operatecon/', {}).toPromise().then(data => {
                                                        console.log(data);
                                                        contact.recording = null;
                                                        console.log("uploading... (2)");
                                                        this.auth.currentUser.then(user => {
                                                            this.afDatabase.database.ref('users/' + user.uid + '/contacts/').push(contact).then((r) => {
                                                                contact.number = r.key.replace("-", "").replace("_", "");
                                                                this.afDatabase.database.ref('users/' + user.uid + '/contacts/' + r.key).update({ id: r.key, number: r.key.replace("-", "").replace("_", "") });
                                                            }).then(r => {
                                                                this.setContactMethod(contact, audio);
                                                            });
                                                        });
                                                    });
                                                }, 3000);
                                            });
                                        });
                                    });
                                }
                                else {
                                    this.alertCtrl.create({
                                        message: "The server appears busy right now, please try again later",
                                        buttons: [{
                                                text: "OK",
                                                role: 'ok'
                                            }]
                                    }).then(a => {
                                        a.present();
                                    });
                                }
                            });
                        }
                    });
                }
            }
            else {
                this.alertCtrl.create({
                    message: "There has been an error in the infrastructure, please try again later",
                    buttons: [{
                            text: "OK",
                            role: 'ok'
                        }]
                }).then(a => {
                    a.present();
                });
            }
        });
    }
    updateContact(contact, audio) {
        console.log(contact.updated);
        if (contact.updated === "true") {
            contact.updated = "false";
            console.log(contact.updated + " modified");
        }
        else {
            contact.updated = "true";
            console.log(contact.updated + " modified");
        }
        if ((this.mayi1 && this.mayi2 && this.mayi3) || contact.location === null) {
            if (contact.location === null) {
                this.auth.currentUser.then(user => {
                    this.afDatabase.database.ref('users/' + user.uid + '/contacts/' + contact.id).update(contact).then(r => {
                        this.updateContactMethod(contact, audio);
                    });
                });
            }
            else {
                this.https.get('https://radioplatforminfrastructure.herokuapp.com/list/' + contact.location, {}).toPromise().then(val => {
                    if (val.length > 0) {
                        contact.coordinates = val[0].coordenada;
                        contact.recording = null;
                        console.log("uploading... (1)");
                        console.log(contact);
                        this.auth.currentUser.then(user => {
                            this.afDatabase.database.ref('users/' + user.uid + '/contacts/' + contact.id).update(contact).then(r => {
                                this.updateContactMethod(contact, audio);
                            });
                        });
                    }
                    else {
                        this.https.get('https://radioplatforminfrastructure.herokuapp.com/cani', {}).toPromise().then(data => {
                            console.log(data[0]);
                            if (data[0].issearching === false) {
                                var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
                                headers = headers.append('Application', 'RadioPlatform (https://github.com/PabloLuisMolinaBlanes/RadioPlatform)');
                                headers = headers.append('Access-Control-Allow-Origin', 'https://www.openstreetmap.org');
                                const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();
                                params.append('q', contact.location);
                                params.append('email', 'pablo.molina@iescampanillas.com');
                                this.https.get('https://nominatim.openstreetmap.org/search.php?q=' + contact.location + '&email=pablo.molina@iescampanillas.com&format=json&limit=1', { headers }).toPromise().then(data => {
                                    const lat = data[0].lat;
                                    const lon = data[0].lon;
                                    console.log(lat);
                                    console.log(lon);
                                    contact.coordinates = "" + lat + "," + "" + lon;
                                    this.https.post('https://radioplatforminfrastructure.herokuapp.com/newcoordinate/', { "coordenada": data[0].lat + "," + data[0].lon, "terminobusqueda": contact.location }).toPromise().then(data => {
                                        this.https.post('https://radioplatforminfrastructure.herokuapp.com/operatecon/', {}).toPromise().then(data => {
                                            console.log(data);
                                            setTimeout(() => {
                                                this.https.post('https://radioplatforminfrastructure.herokuapp.com/operatecon/', {}).toPromise().then(data => {
                                                    console.log(data);
                                                    contact.recording = null;
                                                    console.log("uploading... (2)");
                                                    this.auth.currentUser.then(user => {
                                                        this.afDatabase.database.ref('users/' + user.uid + '/contacts/' + contact.id).update(contact).then(r => {
                                                            this.updateContactMethod(contact, audio);
                                                        });
                                                    });
                                                });
                                            }, 3000);
                                        });
                                    });
                                });
                            }
                            else {
                                this.alertCtrl.create({
                                    message: "The server appears busy right now, please try again later",
                                    buttons: [{
                                            text: "OK",
                                            role: 'ok'
                                        }]
                                }).then(a => {
                                    a.present();
                                });
                            }
                        });
                    }
                });
            }
        }
        else {
            this.alertCtrl.create({
                message: "There has been an error in the infrastructure, please try again later",
                buttons: [{
                        text: "OK",
                        role: 'ok'
                    }]
            }).then(a => {
                a.present();
            });
        }
    }
    deleteContact(contact) {
        let thisnumber = contact.number;
        this.auth.currentUser.then(user => {
            this.afDatabase.database.ref('users/' + user.uid + '/contacts/' + contact.id).remove().then(c => {
                this.auth.currentUser.then(user => {
                    this.storage.ref(user.uid + "/" + thisnumber).delete().toPromise().then(() => {
                        this.alertCtrl.create({
                            message: "Audio deleted succesfully",
                            buttons: [{
                                    text: "OK",
                                    role: 'ok'
                                }]
                        }).then(a => {
                            a.present();
                        });
                    });
                    this.alertCtrl.create({
                        message: "Item deleted successfully",
                        buttons: [{
                                text: "OK",
                                role: 'ok'
                            }]
                    }).then(a => {
                        a.present();
                    });
                });
            });
        });
    }
    setUser(user) {
        if (user.callsign !== null || user.callsign !== undefined) {
            this.afDatabase.database.ref('callsigns/' + user.callsign).set(user.username).then(c => {
            });
        }
        return this.afDatabase.database.ref('users/' + user.id).set(user);
    }
    updateUser(user) {
        this.afDatabase.database.ref('users/' + user.id).update({
            'preferredFrequency': user.preferredFrequency,
            'status': user.status,
            'transmitting': user.transmitting,
            'transmittingFrequency': user.transmittingFrequency
        });
    }
    updateUserAndPhoto(user) {
        return this.afDatabase.database.ref('users/' + user.id).update({
            'preferredFrequency': user.preferredFrequency,
            'status': user.status,
            'transmitting': user.transmitting,
        });
    }
    updateAntenna(antenna) {
        this.afDatabase.database.ref('antennae/' + antenna.id).set(antenna);
        this.auth.currentUser.then((user) => {
            this.afDatabase.database.ref('users/' + user.uid + '/antennae/' + antenna.id).set(antenna);
        });
    }
    updateRadioSet(radioset) {
        this.afDatabase.database.ref('equipment/' + radioset.id).set(radioset);
        this.auth.currentUser.then((user) => {
            this.afDatabase.database.ref('users/' + user.uid + '/equipment/' + radioset.id).set(radioset);
        });
    }
    deleteAntenna(antenna) {
        this.afDatabase.database.ref('antennae/' + antenna.id).remove();
    }
    deleteAntennaUser(antenna) {
        this.auth.currentUser.then(user => {
            this.afDatabase.database.ref('users/' + user.uid + '/antennae/' + antenna.id).remove();
        });
    }
    deleteRadioSet(radioset) {
        this.afDatabase.database.ref('equipment/' + radioset.id).remove();
    }
    deleteRadioSetUser(radioset) {
        this.auth.currentUser.then(user => {
            this.afDatabase.database.ref('users/' + user.uid + '/equipment/' + radioset.id).remove();
        });
    }
};
FirebaseUpdaterAndSetterService.ctorParameters = () => [
    { type: _node_modules_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
FirebaseUpdaterAndSetterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FirebaseUpdaterAndSetterService);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Cuentaproyecto\Desktop\RadioPlatform\Proyecto\RadioPlatform\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAXOiptizkyrxrUERjrUNq7jObWk2ms1oo",
        authDomain: "radioplatform-9cfc5.firebaseapp.com",
        projectId: "radioplatform-9cfc5",
        storageBucket: "radioplatform-9cfc5.appspot.com",
        messagingSenderId: "750599158248",
        appId: "1:750599158248:web:16c93c7f3e94324f15cc5d",
        measurementId: "G-Y6PS54Y43W"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _firebase_updater_and_setter_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./firebase-updater-and-setter.service */ "+Uwb");
/* harmony import */ var _firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./firebase-obtainer.service */ "jmhE");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");










const config = { url: 'http://radioplatforminfrastructure.herokuapp.com/', options: {} };







let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__["SocketIoModule"].forRoot(config), _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabaseModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_16__["IonicStorageModule"].forRoot()],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicRouteStrategy"] }, _firebase_updater_and_setter_service__WEBPACK_IMPORTED_MODULE_13__["FirebaseUpdaterAndSetterService"], _firebase_obtainer_service__WEBPACK_IMPORTED_MODULE_14__["FirebaseObtainerService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "jmhE":
/*!**********************************************!*\
  !*** ./src/app/firebase-obtainer.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseObtainerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseObtainerService", function() { return FirebaseObtainerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _node_modules_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@angular/fire/database */ "sSZD");
/* harmony import */ var _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/fire/auth */ "UbJi");




let FirebaseObtainerService = class FirebaseObtainerService {
    constructor(afDatabase, auth) {
        this.afDatabase = afDatabase;
        this.auth = auth;
    }
    listAllAntennas() {
        return this.afDatabase.database.ref("antennae").get();
    }
    listAllRadioSets() {
        return this.afDatabase.database.ref("equipment").get();
    }
    listAllUsers() {
        return this.afDatabase.database.ref("users").get();
    }
    listAllContacts(userid) {
        return this.afDatabase.database.ref('/users/' + userid + '/contacts').get();
    }
    listMyself(userid) {
        return this.afDatabase.database.ref('/users/' + userid).get();
    }
    listAllUserAntennas(userid) {
        return this.afDatabase.database.ref('/users/' + userid + "/antennae").get();
    }
    listAllUserRadioSets(userid) {
        return this.afDatabase.database.ref('/users/' + userid + "/equipment").get();
    }
};
FirebaseObtainerService.ctorParameters = () => [
    { type: _node_modules_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
FirebaseObtainerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FirebaseObtainerService);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule)
    },
    {
        path: 'tab4',
        loadChildren: () => __webpack_require__.e(/*! import() | tab4-tab4-module */ "tab4-tab4-module").then(__webpack_require__.bind(null, /*! ./tab4/tab4.module */ "1GDv")).then(m => m.Tab4PageModule)
    },
    {
        path: 'tab5',
        loadChildren: () => Promise.all(/*! import() | tab5-tab5-module */[__webpack_require__.e("common"), __webpack_require__.e("tab5-tab5-module")]).then(__webpack_require__.bind(null, /*! ./tab5/tab5.module */ "Sa0/")).then(m => m.Tab5PageModule)
    },
    {
        path: 'tab6',
        loadChildren: () => Promise.all(/*! import() | tab6-tab6-module */[__webpack_require__.e("common"), __webpack_require__.e("tab6-tab6-module")]).then(__webpack_require__.bind(null, /*! ./tab6/tab6.module */ "ufJr")).then(m => m.Tab6PageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() | register-register-module */[__webpack_require__.e("common"), __webpack_require__.e("register-register-module")]).then(__webpack_require__.bind(null, /*! ./register/register.module */ "x5bZ")).then(m => m.RegisterPageModule)
    },
    {
        path: 'antenna-crudpage',
        loadChildren: () => __webpack_require__.e(/*! import() | antenna-crudpage-antenna-crudpage-module */ "antenna-crudpage-antenna-crudpage-module").then(__webpack_require__.bind(null, /*! ./antenna-crudpage/antenna-crudpage.module */ "zkB0")).then(m => m.AntennaCRUDPagePageModule)
    },
    {
        path: 'radio-set-crudpage',
        loadChildren: () => __webpack_require__.e(/*! import() | radio-set-crudpage-radio-set-crudpage-module */ "radio-set-crudpage-radio-set-crudpage-module").then(__webpack_require__.bind(null, /*! ./radio-set-crudpage/radio-set-crudpage.module */ "jlob")).then(m => m.RadioSetCRUDPagePageModule)
    },
    {
        path: 'contact-crudpage',
        loadChildren: () => Promise.all(/*! import() | contact-crudpage-contact-crudpage-module */[__webpack_require__.e("common"), __webpack_require__.e("contact-crudpage-contact-crudpage-module")]).then(__webpack_require__.bind(null, /*! ./contact-crudpage/contact-crudpage.module */ "iv0G")).then(m => m.ContactCRUDPagePageModule)
    },
    {
        path: 'pricecalculator',
        loadChildren: () => Promise.all(/*! import() | pricecalculator-pricecalculator-module */[__webpack_require__.e("common"), __webpack_require__.e("pricecalculator-pricecalculator-module")]).then(__webpack_require__.bind(null, /*! ./pricecalculator/pricecalculator.module */ "zDN0")).then(m => m.PricecalculatorPageModule)
    },
    {
        path: 'tab7',
        loadChildren: () => Promise.all(/*! import() | tab7-tab7-module */[__webpack_require__.e("default~tab1-tab1-module~tab7-tab7-module"), __webpack_require__.e("default~tab2-tab2-module~tab7-tab7-module"), __webpack_require__.e("tab7-tab7-module")]).then(__webpack_require__.bind(null, /*! ./tab7/tab7.module */ "sFF5")).then(m => m.Tab7PageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map