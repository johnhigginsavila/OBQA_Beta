"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("../feature-modules/home/home.component");
var admin_component_1 = require("../feature-modules/admin/admin.component");
var class_component_1 = require("../feature-modules/class/class.component");
var curriculum_map_component_1 = require("../feature-modules/curriculum-map/curriculum-map.component");
var dashboard_component_1 = require("../feature-modules/dashboard/dashboard.component");
var session_new_component_1 = require("../feature-modules/session/session-new.component");
var user_new_component_1 = require("../feature-modules/user/new/user-new.component");
var login_guard_1 = require("../shared/guards/login.guard");
var authorize_guard_1 = require("../shared/guards/authorize.guard");
exports.routerConfig = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'admin', component: admin_component_1.AdminComponent, canActivate: [login_guard_1.LoginGuard, authorize_guard_1.AuthorizeGuard] },
    { path: 'class', component: class_component_1.ClassComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: 'curriculum-map', component: curriculum_map_component_1.CurriculumMapComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [login_guard_1.LoginGuard, authorize_guard_1.AuthorizeGuard] },
    { path: 'session/new', component: session_new_component_1.SessionNewComponent },
    { path: 'user/new', component: user_new_component_1.UserNewComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
//# sourceMappingURL=router.config.js.map