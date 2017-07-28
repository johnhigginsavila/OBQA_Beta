"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var shared_module_1 = require("../../shared/shared.module");
var session_new_component_1 = require("./session-new.component");
var SessionModule = (function () {
    function SessionModule() {
    }
    return SessionModule;
}());
SessionModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule,
            common_1.CommonModule,
            forms_1.ReactiveFormsModule,
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                { path: 'session/new', component: session_new_component_1.SessionNewComponent }
            ])
        ],
        declarations: [
            session_new_component_1.SessionNewComponent
        ],
        providers: []
    })
], SessionModule);
exports.SessionModule = SessionModule;
//# sourceMappingURL=session.module.js.map