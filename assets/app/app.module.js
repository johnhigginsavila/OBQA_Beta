"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Injection modules */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var ng2_charts_1 = require("ng2-charts");
/* Components*/
var app_component_1 = require("./app.component");
var home_component_1 = require("./feature-modules/home/home.component");
var log_in_component_1 = require("./log-in.component");
/* Feature Modules */
var session_module_1 = require("./feature-modules/session/session.module");
var user_module_1 = require("./feature-modules/user/user.module");
var class_module_1 = require("./feature-modules/class/class.module");
var admin_module_1 = require("./feature-modules/admin/admin.module");
var curriculum_map_module_1 = require("./feature-modules/curriculum-map/curriculum-map.module");
var dashboard_module_1 = require("./feature-modules/dashboard/dashboard.module");
var shared_module_1 = require("./shared/shared.module");
var router_config_1 = require("./config/router.config");
var user_service_1 = require("./shared/services/user.service");
/* Guards */
var login_guard_1 = require("./shared/guards/login.guard");
var authorize_guard_1 = require("./shared/guards/authorize.guard");
var class_guard_1 = require("./shared/guards/class.guard");
/*Pipes*/
var main_pipe_module_1 = require("./main-pipe/main-pipe.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(router_config_1.routerConfig, { useHash: true }),
            ng2_charts_1.ChartsModule,
            main_pipe_module_1.MainPipeModule,
            shared_module_1.SharedModule.forRoot(),
            session_module_1.SessionModule,
            user_module_1.UserModule,
            class_module_1.ClassModule,
            admin_module_1.AdminModule,
            curriculum_map_module_1.CurriculumMapModule,
            dashboard_module_1.DashboardModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        exports: [],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, log_in_component_1.LogInComponent],
        providers: [user_service_1.UserService, login_guard_1.LoginGuard, authorize_guard_1.AuthorizeGuard, class_guard_1.ClassGuard],
        //providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map