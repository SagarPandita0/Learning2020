(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sagarpandita/Desktop/HospitalClient/src/main.ts */"zUnb");


/***/ }),

/***/ "1add":
/*!***************************************!*\
  !*** ./src/HomeApp/HomeApp.Module.ts ***!
  \***************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _HomeApp_HomeComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HomeApp.HomeComponent */ "b726");
/* harmony import */ var _HomeApp_MasterPageComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HomeApp.MasterPageComponent */ "jM9V");
/* harmony import */ var _HomeApp_Routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HomeApp.Routing */ "KUpY");
/* harmony import */ var _Security_Security_Token__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Security/Security.Token */ "JagG");
/* harmony import */ var _HomeApp_IndexComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HomeApp.IndexComponent */ "m8+u");
/* harmony import */ var _HomeApp_LoginComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HomeApp.LoginComponent */ "60sv");
/* harmony import */ var src_Security_Security_AuthGuard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/Security/Security.AuthGuard */ "zGWu");
/* harmony import */ var _HomeApp_DataModel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HomeApp.DataModel */ "fAuA");
/* harmony import */ var _Security_Security_Interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Security/Security.Interceptor */ "MkIR");
















class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeModule, bootstrap: [_HomeApp_IndexComponent__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"]] });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, providers: [_Security_Security_Token__WEBPACK_IMPORTED_MODULE_8__["mySecurity"], src_Security_Security_AuthGuard__WEBPACK_IMPORTED_MODULE_11__["myAuthGuard"], _HomeApp_DataModel__WEBPACK_IMPORTED_MODULE_12__["DataModel"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _Security_Security_Interceptor__WEBPACK_IMPORTED_MODULE_13__["JwtInterceptor"], multi: true }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_HomeApp_Routing__WEBPACK_IMPORTED_MODULE_7__["HomeRoutes"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_HomeApp_HomeComponent__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _HomeApp_MasterPageComponent__WEBPACK_IMPORTED_MODULE_6__["MasterPageComponent"], _HomeApp_LoginComponent__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _HomeApp_IndexComponent__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _HomeApp_HomeComponent__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _HomeApp_MasterPageComponent__WEBPACK_IMPORTED_MODULE_6__["MasterPageComponent"], _HomeApp_LoginComponent__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _HomeApp_IndexComponent__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_HomeApp_Routing__WEBPACK_IMPORTED_MODULE_7__["HomeRoutes"])
                ],
                providers: [_Security_Security_Token__WEBPACK_IMPORTED_MODULE_8__["mySecurity"], src_Security_Security_AuthGuard__WEBPACK_IMPORTED_MODULE_11__["myAuthGuard"], _HomeApp_DataModel__WEBPACK_IMPORTED_MODULE_12__["DataModel"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _Security_Security_Interceptor__WEBPACK_IMPORTED_MODULE_13__["JwtInterceptor"], multi: true }],
                bootstrap: [_HomeApp_IndexComponent__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "60sv":
/*!***********************************************!*\
  !*** ./src/HomeApp/HomeApp.LoginComponent.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Security_Security_Token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Security/Security.Token */ "JagG");
/* harmony import */ var _HomeApp_DataModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HomeApp.DataModel */ "fAuA");







class LoginComponent {
    constructor(router, mySecureObj, httpobj, dmObj) {
        this.router = router;
        this.mySecureObj = mySecureObj;
        this.httpobj = httpobj;
        this.dmObj = dmObj;
    }
    Login() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
        var observable = this.httpobj.post("https://localhost:5001/api/Security", JSON.stringify(this.dmObj.username), { headers, responseType: 'text' });
        observable.subscribe(res => this.Success(res), res => this.Error(res));
    }
    Success(res) {
        //this.mySecureObj =res;
        this.mySecureObj.token = res;
        //alert(res);
        this.router.navigate(['/Master']);
    }
    Error(res) {
        alert(res);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Security_Security_Token__WEBPACK_IMPORTED_MODULE_3__["mySecurity"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_HomeApp_DataModel__WEBPACK_IMPORTED_MODULE_4__["DataModel"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["type", "text", "ng-model", "userName", "name", "", "id", "userName"], ["type", "text", "ng-model", "Password", "name", "", "id", "password"], ["id", "login", "type", "button", "value", "Login", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "User Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\nPassword ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_input_click_6_listener() { return ctx.Login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './HomeApp.Login.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _Security_Security_Token__WEBPACK_IMPORTED_MODULE_3__["mySecurity"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _HomeApp_DataModel__WEBPACK_IMPORTED_MODULE_4__["DataModel"] }]; }, null); })();


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
    production: false
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

/***/ "JagG":
/*!****************************************!*\
  !*** ./src/Security/Security.Token.ts ***!
  \****************************************/
/*! exports provided: mySecurity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mySecurity", function() { return mySecurity; });
class mySecurity {
    constructor() {
        this.token = "";
    }
}


/***/ }),

/***/ "KUpY":
/*!****************************************!*\
  !*** ./src/HomeApp/HomeApp.Routing.ts ***!
  \****************************************/
/*! exports provided: HomeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutes", function() { return HomeRoutes; });
/* harmony import */ var _HomeApp_HomeComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeApp.HomeComponent */ "b726");
/* harmony import */ var _HomeApp_LoginComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeApp.LoginComponent */ "60sv");
/* harmony import */ var _HomeApp_MasterPageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeApp.MasterPageComponent */ "jM9V");
/* harmony import */ var _Security_Security_AuthGuard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Security/Security.AuthGuard */ "zGWu");




const HomeRoutes = [
    { path: 'Login', component: _HomeApp_LoginComponent__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: '', component: _HomeApp_MasterPageComponent__WEBPACK_IMPORTED_MODULE_2__["MasterPageComponent"], canActivate: [_Security_Security_AuthGuard__WEBPACK_IMPORTED_MODULE_3__["myAuthGuard"]] },
    { path: 'Home', component: _HomeApp_HomeComponent__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], canActivate: [_Security_Security_AuthGuard__WEBPACK_IMPORTED_MODULE_3__["myAuthGuard"]] },
    { path: 'Master', component: _HomeApp_MasterPageComponent__WEBPACK_IMPORTED_MODULE_2__["MasterPageComponent"], canActivate: [_Security_Security_AuthGuard__WEBPACK_IMPORTED_MODULE_3__["myAuthGuard"]] },
    { path: 'Patient', loadChildren: () => __webpack_require__.e(/*! import() | PatientApp-PatientApp-Module */ "PatientApp-PatientApp-Module").then(__webpack_require__.bind(null, /*! ../PatientApp/PatientApp.Module */ "GGri")).then(m => m.PatientModule), canActivate: [_Security_Security_AuthGuard__WEBPACK_IMPORTED_MODULE_3__["myAuthGuard"]] },
];


/***/ }),

/***/ "MkIR":
/*!**********************************************!*\
  !*** ./src/Security/Security.Interceptor.ts ***!
  \**********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Security_Token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Security.Token */ "JagG");



class JwtInterceptor {
    constructor(security) {
        this.security = security;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.security.token}`
            }
        });
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Security_Token__WEBPACK_IMPORTED_MODULE_1__["mySecurity"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _Security_Token__WEBPACK_IMPORTED_MODULE_1__["mySecurity"] }]; }, null); })();


/***/ }),

/***/ "b726":
/*!**********************************************!*\
  !*** ./src/HomeApp/HomeApp.HomeComponent.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], decls: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Welcome to HMS!!");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './HomeApp.Home.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "fAuA":
/*!******************************************!*\
  !*** ./src/HomeApp/HomeApp.DataModel.ts ***!
  \******************************************/
/*! exports provided: DataModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModel", function() { return DataModel; });
class DataModel {
    constructor() {
        this.username = "Shiv";
    }
}


/***/ }),

/***/ "jM9V":
/*!****************************************************!*\
  !*** ./src/HomeApp/HomeApp.MasterPageComponent.ts ***!
  \****************************************************/
/*! exports provided: MasterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterPageComponent", function() { return MasterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_Security_Security_Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Security/Security.Token */ "JagG");
/* harmony import */ var _HomeApp_DataModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomeApp.DataModel */ "fAuA");





const _c0 = function () { return ["Patient/Add"]; };
const _c1 = function () { return ["Home"]; };
class MasterPageComponent {
    constructor(router, mySecureObj, dmObj) {
        this.router = router;
        this.mySecureObj = mySecureObj;
        this.dmObj = dmObj;
    }
    goPlaces() {
        this.router.navigate(['/Patient/Add']);
    }
    goPlace() {
        this.router.navigate(['/Home']);
    }
}
MasterPageComponent.ɵfac = function MasterPageComponent_Factory(t) { return new (t || MasterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_Security_Security_Token__WEBPACK_IMPORTED_MODULE_2__["mySecurity"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_HomeApp_DataModel__WEBPACK_IMPORTED_MODULE_3__["DataModel"])); };
MasterPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasterPageComponent, selectors: [["ng-component"]], decls: 11, vars: 4, consts: [[3, "routerLink"], ["id", "Patient", 3, "click"], [3, "click"]], template: function MasterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPageComponent_Template_button_click_3_listener() { return ctx.goPlaces(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Patient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPageComponent_Template_button_click_6_listener() { return ctx.goPlace(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " @###");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './HomeApp.Master.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_Security_Security_Token__WEBPACK_IMPORTED_MODULE_2__["mySecurity"] }, { type: _HomeApp_DataModel__WEBPACK_IMPORTED_MODULE_3__["DataModel"] }]; }, null); })();


/***/ }),

/***/ "m8+u":
/*!***********************************************!*\
  !*** ./src/HomeApp/HomeApp.IndexComponent.ts ***!
  \***********************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class IndexComponent {
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "This is the Main Index ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './HomeApp.Index.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "zGWu":
/*!********************************************!*\
  !*** ./src/Security/Security.AuthGuard.ts ***!
  \********************************************/
/*! exports provided: myAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myAuthGuard", function() { return myAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Security_Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Security.Token */ "JagG");




class myAuthGuard {
    constructor(_router, _token) {
        this._router = _router;
        this._token = _token;
    }
    canActivate(next, state) {
        if (this._token.token.length != 0) {
            return true;
        }
        // navigate to login page
        this._router.navigate(['/Login']);
        // you can save redirect url so after authing we can move them back to the page they requested
        return false;
    }
}
myAuthGuard.ɵfac = function myAuthGuard_Factory(t) { return new (t || myAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Security_Token__WEBPACK_IMPORTED_MODULE_2__["mySecurity"])); };
myAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: myAuthGuard, factory: myAuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](myAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _Security_Token__WEBPACK_IMPORTED_MODULE_2__["mySecurity"] }]; }, null); })();


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _HomeApp_HomeApp_Module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeApp/HomeApp.Module */ "1add");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_HomeApp_HomeApp_Module__WEBPACK_IMPORTED_MODULE_2__["HomeModule"])
    .catch(err => console.error(err));


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