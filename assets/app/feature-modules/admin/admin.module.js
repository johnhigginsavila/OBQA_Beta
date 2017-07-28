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
var forms_2 = require("@angular/forms");
var shared_module_1 = require("../../shared/shared.module");
var main_pipe_module_1 = require("../../main-pipe/main-pipe.module");
var admin_component_1 = require("./admin.component");
var manage_assessment_component_1 = require("./manage-assessment/manage-assessment.component");
var tester_component_1 = require("./manage-assessment/tester.component");
var add_assessment_component_1 = require("./manage-assessment/add-assessment.component");
var manage_classes_component_1 = require("./manage-classes/manage-classes.component");
var add_class_component_1 = require("./manage-classes/add-class.component");
var manage_courses_component_1 = require("./manage-courses/manage-courses.component");
var add_course_component_1 = require("./manage-courses/add-course.component");
var manage_faculty_component_1 = require("./manage-faculty/manage-faculty.component");
var manage_sopi_component_1 = require("./manage-sopi/manage-sopi.component");
var add_sopi_component_1 = require("./manage-sopi/add-sopi.component");
var admin_router_config_1 = require("../../config/admin-router.config");
var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(admin_router_config_1.adminRouterConfig),
            shared_module_1.SharedModule,
            forms_2.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            main_pipe_module_1.MainPipeModule
        ],
        declarations: [
            admin_component_1.AdminComponent,
            manage_assessment_component_1.ManageAssessmentComponent,
            add_assessment_component_1.AddAssessmentComponent,
            manage_classes_component_1.ManageClassesComponent,
            add_class_component_1.AddClassComponent,
            manage_courses_component_1.ManageCoursesComponent,
            add_course_component_1.AddCourseComponent,
            manage_faculty_component_1.ManageFacultyComponent,
            manage_sopi_component_1.ManageSopiComponent,
            add_sopi_component_1.AddSopiComponent,
            tester_component_1.TesterComponent
        ],
        providers: []
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map