(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "5uJF":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(country, preferredFrequency, username, status, transmitting, id, password, profilepicture, callsign, transmittingFrequency) {
        this.id = id;
        this.country = country;
        this.preferredFrequency = preferredFrequency;
        this.username = username;
        this.status = status;
        this.transmitting = transmitting;
        this.profilepicture = profilepicture;
        this.callsign = callsign;
        this.transmittingFrequency = transmittingFrequency;
    }
}


/***/ }),

/***/ "7+k1":
/*!***********************************************************!*\
  !*** ./src/app/pricecalculator/pricecalculator.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table td, table th {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByaWNlY2FsY3VsYXRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoicHJpY2VjYWxjdWxhdG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHRkLCB0YWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "Flqv":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pricecalculator/pricecalculator.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Price calculator</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-select (ionChange)=\"updateAntennaChosen()\" [(ngModel)]=\"antennaChosen\">\n    <ion-select-option *ngFor=\"let antenna of antennae\" [value]=\"antenna\">{{antenna.name}}</ion-select-option>\n  </ion-select>\n  <table>\n    <tr>\n        <th>Nombre</th>\n        <th>Tipo</th>\n        <th>Altura</th>\n        <th>Marca</th>\n        <th>Rango</th>\n        <th>Precio</th>\n        <th>Cantidad</th>\n    </tr>\n    <tr *ngFor=\"let antenna of antennaeChosen\">\n        <td>{{antenna.name}}</td>\n        <td>{{antenna.type}}</td>\n        <td>{{antenna.height}}</td>\n        <td>{{antenna.brand}}</td>\n        <td>{{antenna.range}}</td>\n        <td>{{antenna.price}}$</td>\n        <td><ion-input type=\"number\" [(ngModel)]=\"antennaeMultiplier\"  (ionChange)=\"updateAntennaMultiplier(antenna)\"></ion-input></td>\n        </tr>\n  </table>\n  <ion-select (ionChange)=\"updateEquipmentChosen()\" [(ngModel)]=\"radiosetChosen\">\n    <ion-select-option *ngFor=\"let radioset of equipment\"  [value]=\"radioset\" >{{radioset.name}}</ion-select-option>\n  </ion-select>\n  <table>\n    <tr>\n        <th>Nombre</th>\n        <th>Marca</th>\n        <th>Tipo</th>\n        <th>Amplitud</th>\n        <th>Precio</th>\n        <th>Cantidad</th>\n    </tr>\n    <tr *ngFor=\"let radioset of equipmentChosen\">\n        <td>{{radioset.name}}</td>\n        <td>{{radioset.brand}}</td>\n        <td>{{radioset.type}}</td>\n        <td>{{radioset.amplitude}}</td>\n        <td>{{radioset.price}}$</td>\n        <td><ion-input type=\"number\" [(ngModel)]=\"equipmentMultiplier\" (ionChange)=\"updateEquipmentMultiplier(radioset)\"></ion-input></td>\n    </tr>\n  </table>\n  <p>Total: {{total}}$</p>\n  <ion-button (click)=\"dismiss()\">Exit</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "JbSX":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "Lb6R":
/*!****************************!*\
  !*** ./src/app/contact.ts ***!
  \****************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
class Contact {
    constructor(frequency, recording, location, callsign, coordinates, id, updated) {
        this.frequency = frequency;
        this.recording = recording;
        this.callsign = callsign;
        this.location = location;
        this.coordinates = coordinates;
        this.id = id;
        this.updated = updated;
    }
}


/***/ }),

/***/ "QQAA":
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/*! exports provided: ExploreContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function() { return ExploreContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./explore-container.component.html */ "m1kx");
/* harmony import */ var _explore_container_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore-container.component.scss */ "huSS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ExploreContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-explore-container',
        template: _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_explore_container_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExploreContainerComponent);



/***/ }),

/***/ "acej":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "anWn":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-crudpage/contact-crudpage.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>ContactCRUDPage</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p>Frequency</p>\n<ion-input [(ngModel)]=\"frequency\"></ion-input>\n<p>Callsign</p>\n<ion-input [(ngModel)]=\"callsign\"></ion-input>\n<p>Location</p>\n<ion-input [(ngModel)]=\"location\"></ion-input>\n<p>Recording</p>\n<input type=\"file\" (change)=\"onFileSelected($event)\">\n<audio [src]=\"audioUrl\" controls ></audio>\n<ion-button (click)=\"submit()\" *ngIf=\"frequency\">Submit</ion-button>\n<ion-button (click)=\"dismiss()\">Cancel</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "huSS":
/*!********************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "ktIm":
/*!*********************************************************!*\
  !*** ./src/app/pricecalculator/pricecalculator.page.ts ***!
  \*********************************************************/
/*! exports provided: PricecalculatorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricecalculatorPage", function() { return PricecalculatorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pricecalculator_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pricecalculator.page.html */ "Flqv");
/* harmony import */ var _pricecalculator_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pricecalculator.page.scss */ "7+k1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "fwsW");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let PricecalculatorPage = class PricecalculatorPage {
    constructor(storage, modalController) {
        this.storage = storage;
        this.modalController = modalController;
        this.antennae = [];
        this.equipment = [];
        this.antennaeMultiplierArray = [];
        this.equipmentMultiplierArray = [];
        this.total = 0;
        this.antennaeChosen = [];
        this.equipmentChosen = [];
    }
    dismiss() {
        this.modalController.dismiss();
    }
    ngOnInit() {
        this.storage.get('antennae').then((r) => {
            this.antennae = r;
        });
        this.storage.get('equipment').then((r) => {
            this.equipment = r;
        });
    }
    updateAntennaChosen() {
        this.antennaeChosen.push(this.antennaChosen);
        this.calculateTotal();
    }
    updateAntennaMultiplier(antenna) {
        this.antennae.forEach(a => {
            if (a.id === antenna.id) {
                a.multiplier = this.antennaeMultiplier;
            }
        });
        this.calculateTotal();
    }
    updateEquipmentMultiplier(equipment) {
        this.equipment.forEach(e => {
            if (e.name === equipment.name) {
                e.multiplier = this.equipmentMultiplier;
            }
        });
        this.calculateTotal();
    }
    updateEquipmentChosen() {
        this.equipmentChosen.push(this.radiosetChosen);
        this.calculateTotal();
    }
    calculateTotal() {
        this.total = 0;
        this.antennaeChosen.forEach(a => {
            console.log(a.multiplier);
            this.total += +a.price * (a.multiplier === undefined ? 1 : a.multiplier);
        });
        this.equipmentChosen.forEach(e => {
            console.log(e.multiplier);
            this.total += +e.price * (e.multiplier === undefined ? 1 : e.multiplier);
        });
    }
};
PricecalculatorPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
PricecalculatorPage.propDecorators = {
    antennae: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    equipment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    antennaeMultiplierArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    equipmentMultiplierArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    antennaeMultiplier: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    equipmentMultiplier: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    antennaChosen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    radiosetChosen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PricecalculatorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pricecalculator',
        template: _raw_loader_pricecalculator_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pricecalculator_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PricecalculatorPage);



/***/ }),

/***/ "m1kx":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>");

/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "qtYk":
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/*! exports provided: ExploreContainerComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function() { return ExploreContainerComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-container.component */ "QQAA");






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ "r0zr":
/*!***********************************************************!*\
  !*** ./src/app/contact-crudpage/contact-crudpage.page.ts ***!
  \***********************************************************/
/*! exports provided: ContactCRUDPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCRUDPagePage", function() { return ContactCRUDPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_crudpage_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact-crudpage.page.html */ "anWn");
/* harmony import */ var _contact_crudpage_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-crudpage.page.scss */ "tLYR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact */ "Lb6R");
/* harmony import */ var _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@angular/fire/auth */ "UbJi");
/* harmony import */ var _firebase_updater_and_setter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase-updater-and-setter.service */ "+Uwb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "fwsW");










let ContactCRUDPagePage = class ContactCRUDPagePage {
    constructor(firebaseUpdaterAndSetter, afauth, sanitizer, modalController, store) {
        this.firebaseUpdaterAndSetter = firebaseUpdaterAndSetter;
        this.afauth = afauth;
        this.sanitizer = sanitizer;
        this.modalController = modalController;
        this.store = store;
        this.location = null;
        this.coordinates = null;
        this.callsign = null;
        this.frequency = null;
        this.recording = null;
        this.audio = null;
    }
    ngOnInit() {
        this.firebaseUpdaterAndSetter.testHTML();
        if (this.recording !== null) {
            this.audioUrl = this.recording;
        }
    }
    dismiss() {
        this.modalController.dismiss();
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
                    this.audio = renamedFile;
                    const url = URL.createObjectURL(renamedFile);
                    console.log(url);
                    const urlSan = this.sanitizer.bypassSecurityTrustResourceUrl(url);
                    this.audioUrl = urlSan;
                    console.log(urlSan);
                    console.log(renamedFile);
                }
            });
        });
    }
    submit() {
        if (this.id === undefined) {
            console.log("Warning, id has been detected as undefined!");
            this.id = "placeholder";
            this.contact = new _contact__WEBPACK_IMPORTED_MODULE_4__["Contact"](this.frequency, this.audio, this.location, this.callsign, null, this.id);
            this.contact.number = "placeholder";
            this.firebaseUpdaterAndSetter.setContact(this.contact, this.audio);
        }
        else {
            this.contact = new _contact__WEBPACK_IMPORTED_MODULE_4__["Contact"](this.frequency, this.audio, this.location, this.callsign, null, this.id, this.updated);
            this.contact.number = this.number;
            this.firebaseUpdaterAndSetter.updateContact(this.contact, this.audio);
        }
    }
};
ContactCRUDPagePage.ctorParameters = () => [
    { type: _firebase_updater_and_setter_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseUpdaterAndSetterService"] },
    { type: _node_modules_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSanitizerImpl"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] }
];
ContactCRUDPagePage.propDecorators = {
    location: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    coordinates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    callsign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    frequency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    recording: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    updated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    number: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ContactCRUDPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact-crudpage',
        template: _raw_loader_contact_crudpage_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_crudpage_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactCRUDPagePage);



/***/ }),

/***/ "tLYR":
/*!*************************************************************!*\
  !*** ./src/app/contact-crudpage/contact-crudpage.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWNydWRwYWdlLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=common.js.map