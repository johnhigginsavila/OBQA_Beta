"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var session_service_1 = require("./shared/services/session.service");
var authentication_service_1 = require("./shared/services/authentication.service");
;
var AppComponent = (function () {
    function AppComponent(sessionService, formBuilder, _router, authenticationService) {
        this.sessionService = sessionService;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.authenticationService = authenticationService;
        this.printView();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngDoCheck = function () {
        this.session = JSON.parse(localStorage.getItem('session'));
        this.login = this.isLogin(this.session);
        this.allowed = this.isAllowed(this.session);
        //console.log("There is something happened");
    };
    AppComponent.prototype.printView = function () {
        return true;
    };
    AppComponent.prototype.logout = function () {
        this.sessionService.SessionDestroy();
    };
    AppComponent.prototype.isAllowed = function (session) {
        if (!session) {
            return false;
        }
        else {
            if (this.session.User.userRestriction < 5) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    AppComponent.prototype.isLogin = function (session) {
        if (!session) {
            return false;
        }
        else {
            return true;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html'
    }),
    __metadata("design:paramtypes", [session_service_1.SessionService, forms_1.FormBuilder, router_1.Router, authentication_service_1.AuthenticationService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map