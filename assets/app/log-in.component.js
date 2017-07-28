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
var LogInComponent = (function () {
    function LogInComponent(formBuilder, sessionService, _router, authenticationService) {
        this.formBuilder = formBuilder;
        this.sessionService = sessionService;
        this._router = _router;
        this.authenticationService = authenticationService;
        this.sessionNewForm = this.formBuilder.group({
            email: new forms_1.FormControl('', forms_1.Validators.required),
            password: new forms_1.FormControl('', forms_1.Validators.required),
            _csrf: new forms_1.FormControl('', forms_1.Validators.required)
        });
        this.sessionService.SessionCreate2(this.sessionNewForm.value);
    }
    LogInComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.RequestCsrfToken()
            .subscribe(function (data) {
            _this.sessionNewForm = _this.formBuilder.group({
                email: new forms_1.FormControl('', forms_1.Validators.required),
                password: new forms_1.FormControl('', forms_1.Validators.required),
                _csrf: new forms_1.FormControl(data._csrf, forms_1.Validators.required)
            });
        }, function (error) { return console.log(error); });
    };
    LogInComponent.prototype.onSubmit = function () {
        var submit = this.sessionService.SessionCreate2(this.sessionNewForm.value);
        setTimeout(function () {
            submit.unsubscribe();
        }, 500);
    };
    return LogInComponent;
}());
LogInComponent = __decorate([
    core_1.Component({
        selector: 'log-in',
        template: "\n        <form class='navbar-form navbar-right form-signin' id='sign-in-form' [formGroup]='sessionNewForm' (ngSubmit)='onSubmit()'>\n            <div class=\"form-group input-group-sm\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\" required >\n                </div>\n                <div class=\"form-group input-group-sm\">\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" required>\n                </div>\n                <div class=\"form-group input-group-sm\">\n                    <input class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!sessionNewForm.valid\" value=\"Login\">\n                </div>\n         </form>\n    "
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, session_service_1.SessionService, router_1.Router, authentication_service_1.AuthenticationService])
], LogInComponent);
exports.LogInComponent = LogInComponent;
//# sourceMappingURL=log-in.component.js.map