(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/HomeApp/HomeApp.DataModel.ts":
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

/***/ "./src/HomeApp/HomeApp.HomeComponent.ts":
/*!**********************************************!*\
  !*** ./src/HomeApp/HomeApp.HomeComponent.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


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

/***/ "./src/HomeApp/HomeApp.IndexComponent.ts":
/*!***********************************************!*\
  !*** ./src/HomeApp/HomeApp.IndexComponent.ts ***!
  \***********************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



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

/***/ "./src/HomeApp/HomeApp.LoginComponent.ts":
/*!***********************************************!*\
  !*** ./src/HomeApp/HomeApp.LoginComponent.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Security_Security_Token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Security/Security.Token */ "./src/Security/Security.Token.ts");
/* harmony import */ var _HomeApp_DataModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HomeApp.DataModel */ "./src/HomeApp/HomeApp.DataModel.ts");







class LoginComponent {
    constructor(router, mySecureObj, httpobj, dmObj) {
        this.router = router;
        this.mySecureObj = mySecureObj;
        this.httpobj = httpobj;
        this.dmObj = dmObj;
    }
    Login() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
        var observable = this.httpobj.post("https://localhost:44334/api/Security", JSON.stringify(this.dmObj.username), { headers, responseType: 'text' });
        observable.subscribe(res => this.Success(res), res => this.Error(res));
    }
    Success(res) {
        //this.mySecureObj =res;
        this.mySecureObj.token = res;
        alert(res);
        this.router.navigate(['/Master']);
    }
    Error(res) {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Security_Security_Token__WEBPACK_IMPORTED_MODULE_3__["mySecurity"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_HomeApp_DataModel__WEBPACK_IMPORTED_MODULE_4__["DataModel"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["type", "text", "name", "", "id", "userName"], ["type", "text", "name", "", "id", "password"], ["type", "button", "value", "Login", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
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

/***/ "./src/HomeApp/HomeApp.MasterPageComponent.ts":
/*!****************************************************!*\
  !*** ./src/HomeApp/HomeApp.MasterPageComponent.ts ***!
  \****************************************************/
/*! exports provided: MasterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterPageComponent", function() { return MasterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_Security_Security_Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Security/Security.Token */ "./src/Security/Security.Token.ts");
/* harmony import */ var _HomeApp_DataModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomeApp.DataModel */ "./src/HomeApp/HomeApp.DataModel.ts");





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
MasterPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasterPageComponent, selectors: [["ng-component"]], decls: 11, vars: 4, consts: [[3, "routerLink"], [3, "click"]], template: function MasterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPageComponent_Template_button_click_3_listener() { return ctx.goPlaces(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Patient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
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

/***/ "./src/HomeApp/HomeApp.Module.ts":
/*!***************************************!*\
  !*** ./src/HomeApp/HomeApp.Module.ts ***!
  \***************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _HomeApp_HomeComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HomeApp.HomeComponent */ "./src/HomeApp/HomeApp.HomeComponent.ts");
/* harmony import */ var _HomeApp_MasterPageComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HomeApp.MasterPageComponent */ "./src/HomeApp/HomeApp.MasterPageComponent.ts");
/* harmony import */ var _HomeApp_Routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HomeApp.Routing */ "./src/HomeApp/HomeApp.Routing.ts");
/* harmony import */ var _Security_Security_Token__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Security/Security.Token */ "./src/Security/Security.Token.ts");
/* harmony import */ var _HomeApp_IndexComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HomeApp.IndexComponent */ "./src/HomeApp/HomeApp.IndexComponent.ts");
/* harmony import */ var _HomeApp_LoginComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HomeApp.LoginComponent */ "./src/HomeApp/HomeApp.LoginComponent.ts");
/* harmony import */ var src_Security_Security_AuthGuard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/Security/Security.AuthGuard */ "./src/Security/Security.AuthGuard.ts");
/* harmony import */ var _HomeApp_DataModel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HomeApp.DataModel */ "./src/HomeApp/HomeApp.DataModel.ts");
/* harmony import */ var _Security_Security_Interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Security/Security.Interceptor */ "./src/Security/Security.Interceptor.ts");
















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

/***/ "./src/HomeApp/HomeApp.Routing.ts":
/*!****************************************!*\
  !*** ./src/HomeApp/HomeApp.Routing.ts ***!
  \****************************************/
/*! exports provided: HomeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutes", function() { return HomeRoutes; });
/* harmony import */ var _HomeApp_HomeComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeApp.HomeComponent */ "./src/HomeApp/HomeApp.HomeComponent.ts");
/* harmony import */ var _HomeApp_LoginComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeApp.LoginComponent */ "./src/HomeApp/HomeApp.LoginComponent.ts");
/* harmony import */ var _HomeApp_MasterPageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeApp.MasterPageComponent */ "./src/HomeApp/HomeApp.MasterPageComponent.ts");
/* harmony import */ var _Security_Security_AuthGuard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Security/Security.AuthGuard */ "./src/Security/Security.AuthGuard.ts");




const HomeRoutes = [
    { path: 'Login', component: _HomeApp_LoginComponent__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: '', component: _HomeApp_MasterPageComponent__WEBPACK_IMPORTED_MODULE_2__["MasterPageComponent"], canActivate: [_Security_Security_AuthGuard__WEBPACK_IMPORTED_MODULE_3__["myAuthGuard"]] },
    { path: 'Home', component: _HomeApp_HomeComponent__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], canActivate: [_Security_Security_AuthGuard__WEBPACK_IMPORTED_MODULE_3__["myAuthGuard"]] },
    { path: 'Master', component: _HomeApp_MasterPageComponent__WEBPACK_IMPORTED_MODULE_2__["MasterPageComponent"], canActivate: [_Security_Security_AuthGuard__WEBPACK_IMPORTED_MODULE_3__["myAuthGuard"]] },
    { path: 'Patient', loadChildren: () => __webpack_require__.e(/*! import() | PatientApp-PatientApp-Module */ "PatientApp-PatientApp-Module").then(__webpack_require__.bind(null, /*! ../PatientApp/PatientApp.Module */ "./src/PatientApp/PatientApp.Module.ts")).then(m => m.PatientModule), canActivate: [_Security_Security_AuthGuard__WEBPACK_IMPORTED_MODULE_3__["myAuthGuard"]] },
];


/***/ }),

/***/ "./src/Security/Security.AuthGuard.ts":
/*!********************************************!*\
  !*** ./src/Security/Security.AuthGuard.ts ***!
  \********************************************/
/*! exports provided: myAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myAuthGuard", function() { return myAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Security_Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Security.Token */ "./src/Security/Security.Token.ts");




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

/***/ "./src/Security/Security.Interceptor.ts":
/*!**********************************************!*\
  !*** ./src/Security/Security.Interceptor.ts ***!
  \**********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Security_Token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Security.Token */ "./src/Security/Security.Token.ts");



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

/***/ "./src/Security/Security.Token.ts":
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

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _HomeApp_HomeApp_Module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeApp/HomeApp.Module */ "./src/HomeApp/HomeApp.Module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_HomeApp_HomeApp_Module__WEBPACK_IMPORTED_MODULE_2__["HomeModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\SagarPandita\Desktop\Angular\HospitalClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map