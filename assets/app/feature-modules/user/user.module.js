"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var user_new_component_1 = require("./new/user-new.component");
var user_service_1 = require("../../shared/services/user.service");
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.ReactiveFormsModule,
            common_1.CommonModule,
            http_1.HttpModule,
            http_1.JsonpModule
        ],
        declarations: [
            user_new_component_1.UserNewComponent
        ],
        providers: [user_service_1.UserService]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map