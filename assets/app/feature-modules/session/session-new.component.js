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
var session_service_1 = require("../../shared/services/session.service");
var authentication_service_1 = require("../../shared/services/authentication.service");
;
var SessionNewComponent = (function () {
    function SessionNewComponent(formBuilder, sessionService, _router, authenticationService) {
        this.formBuilder = formBuilder;
        this.sessionService = sessionService;
        this._router = _router;
        this.authenticationService = authenticationService;
        this.getCsrf = this.authenticationService.RequestCsrfToken();
        this.sessionNewForm = this.formBuilder.group({
            email: new forms_1.FormControl('', forms_1.Validators.required),
            password: new forms_1.FormControl('', forms_1.Validators.required),
            _csrf: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    SessionNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCsrf.subscribe(function (data) {
            _this.sessionNewForm = _this.formBuilder.group({
                email: new forms_1.FormControl('', forms_1.Validators.required),
                password: new forms_1.FormControl('', forms_1.Validators.required),
                _csrf: new forms_1.FormControl(data._csrf, forms_1.Validators.required)
            });
        });
    };
    /*    onSubmit(){
            
           this.sessionService.SessionCreate2(this.sessionNewForm.value)
                .subscribe(
                    data => localStorage.setItem('session', JSON.stringify(data.json())),
                    error => console.log(error.json()),
                    () => this._router.navigate(['home'])
                )
                
            
           
            //alert(JSON.stringify(this.sessionNewForm.value));
        }*/
    SessionNewComponent.prototype.onSubmit = function () {
        var submit = this.sessionService.SessionCreate2(this.sessionNewForm.value);
        setTimeout(function () {
            submit.unsubscribe();
        }, 500);
    };
    SessionNewComponent.prototype.ngOnChanges = function (changes) {
    };
    return SessionNewComponent;
}());
SessionNewComponent = __decorate([
    core_1.Component({
        templateUrl: './app/feature-modules/session/session-new.component.html',
        styleUrls: ['./app/feature-modules/user/new/user-new.component.css'] //borrowed from user-new.component.css
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, session_service_1.SessionService, router_1.Router, authentication_service_1.AuthenticationService])
], SessionNewComponent);
exports.SessionNewComponent = SessionNewComponent;
//# sourceMappingURL=session-new.component.js.map