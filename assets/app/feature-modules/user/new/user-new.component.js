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
var user_service_1 = require("../../../shared/services/user.service");
var authentication_service_1 = require("../../../shared/services/authentication.service");
var UserNewComponent = (function () {
    function UserNewComponent(formBuilder, userService, authenticationService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.userNewForm = this.formBuilder.group({
            firstname: new forms_1.FormControl('', forms_1.Validators.required),
            lastname: new forms_1.FormControl('', forms_1.Validators.required),
            email: new forms_1.FormControl('', forms_1.Validators.required),
            program: new forms_1.FormControl('n/a'),
            userRestriction: new forms_1.FormControl('faculty'),
            password: new forms_1.FormControl('', forms_1.Validators.required),
            confirmation: new forms_1.FormControl('', forms_1.Validators.required),
            _csrf: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    UserNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.RequestCsrfToken()
            .subscribe(function (data) {
            _this.userNewForm = _this.formBuilder.group({
                firstname: new forms_1.FormControl('', forms_1.Validators.required),
                lastname: new forms_1.FormControl('', forms_1.Validators.required),
                email: new forms_1.FormControl('', forms_1.Validators.required),
                program: new forms_1.FormControl('n/a'),
                userRestriction: new forms_1.FormControl('faculty'),
                password: new forms_1.FormControl('', forms_1.Validators.required),
                confirmation: new forms_1.FormControl('', forms_1.Validators.required),
                _csrf: new forms_1.FormControl(data._csrf, forms_1.Validators.required)
            });
        }, function (error) { return console.log(error); });
    };
    UserNewComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.addUser(this.userNewForm.value)
            .subscribe(function (response) {
            console.log(response);
            localStorage.setItem('session', JSON.stringify(response));
        }, function (error) {
            console.log(error);
            _this.ngOnInit();
        }, function () {
            _this.ngOnInit();
            _this.router.navigateByUrl("/class");
        });
    };
    return UserNewComponent;
}());
UserNewComponent = __decorate([
    core_1.Component({
        templateUrl: './app/feature-modules/user/new/user-new.component.html',
        styleUrls: ['./app/feature-modules/user/new/user-new.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService, authentication_service_1.AuthenticationService, router_1.Router])
], UserNewComponent);
exports.UserNewComponent = UserNewComponent;
//# sourceMappingURL=user-new.component.js.map