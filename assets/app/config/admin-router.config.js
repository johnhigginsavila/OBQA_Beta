"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var manage_assessment_component_1 = require("../feature-modules/admin/manage-assessment/manage-assessment.component");
var add_assessment_component_1 = require("../feature-modules/admin/manage-assessment/add-assessment.component");
var manage_classes_component_1 = require("../feature-modules/admin/manage-classes/manage-classes.component");
var add_class_component_1 = require("../feature-modules/admin/manage-classes/add-class.component");
var manage_faculty_component_1 = require("../feature-modules/admin/manage-faculty/manage-faculty.component");
var manage_courses_component_1 = require("../feature-modules/admin/manage-courses/manage-courses.component");
var add_course_component_1 = require("../feature-modules/admin/manage-courses/add-course.component");
var manage_sopi_component_1 = require("../feature-modules/admin/manage-sopi/manage-sopi.component");
var add_sopi_component_1 = require("../feature-modules/admin/manage-sopi/add-sopi.component");
var login_guard_1 = require("../shared/guards/login.guard");
var authorize_guard_1 = require("../shared/guards/authorize.guard");
var tester_component_1 = require("../feature-modules/admin/manage-assessment/tester.component");
exports.adminRouterConfig = [
    { path: 'admin/manage-assessment', component: manage_assessment_component_1.ManageAssessmentComponent, canActivate: [login_guard_1.LoginGuard, authorize_guard_1.AuthorizeGuard] },
    { path: 'admin/manage-assessment/add-assessment', component: add_assessment_component_1.AddAssessmentComponent, canActivate: [login_guard_1.LoginGuard, authorize_guard_1.AuthorizeGuard] },
    { path: 'admin/manage-assessment/test', component: tester_component_1.TesterComponent, canActivate: [login_guard_1.LoginGuard, authorize_guard_1.AuthorizeGuard] },
    { path: 'admin/manage-classes', component: manage_classes_component_1.ManageClassesComponent, canActivate: [login_guard_1.LoginGuard, authorize_guard_1.AuthorizeGuard] },
    { path: 'admin/manage-classes/add-class', component: add_class_component_1.AddClassComponent, canActivate: [login_guard_1.LoginGuard, authorize_guard_1.AuthorizeGuard] },
    { path: 'admin/manage-faculty', component: manage_faculty_component_1.ManageFacultyComponent, canActivate: [login_guard_1.LoginGuard, authorize_guard_1.AuthorizeGuard] },
    { path: 'admin/manage-courses', component: manage_courses_component_1.ManageCoursesComponent, canActivate: [login_guard_1.LoginGuard, authorize_guard_1.AuthorizeGuard] },
    { path: 'admin/manage-courses/add-course', component: add_course_component_1.AddCourseComponent, canActivate: [login_guard_1.LoginGuard, authorize_guard_1.AuthorizeGuard] },
    { path: 'admin/manage-sopi', component: manage_sopi_component_1.ManageSopiComponent, canActivate: [login_guard_1.LoginGuard, authorize_guard_1.AuthorizeGuard] },
    { path: 'admin/manage-sopi/add-sopi', component: add_sopi_component_1.AddSopiComponent, canActivate: [login_guard_1.LoginGuard, authorize_guard_1.AuthorizeGuard] }
];
//# sourceMappingURL=admin-router.config.js.map