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
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var main_pipe_module_1 = require("../../main-pipe/main-pipe.module");
var class_component_1 = require("./class.component");
var add_student_component_1 = require("./add-student/add-student.component");
var class_detail_component_1 = require("./class-detail/class-detail.component");
var student_grade_component_1 = require("./class-detail/student-grade.component");
var evidence_component_1 = require("./evidence/evidence.component");
var class_router_config_1 = require("../../config/class-router.config");
var ClassModule = (function () {
    function ClassModule() {
    }
    return ClassModule;
}());
ClassModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            common_1.CommonModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            router_1.RouterModule.forChild(class_router_config_1.classRouterConfig),
            main_pipe_module_1.MainPipeModule
        ],
        declarations: [
            class_component_1.ClassComponent,
            add_student_component_1.AddStudentComponent,
            class_detail_component_1.ClassDetailComponent,
            evidence_component_1.EvidenceComponent,
            student_grade_component_1.StudentGradeComponent
        ],
        providers: []
    })
], ClassModule);
exports.ClassModule = ClassModule;
//# sourceMappingURL=class.module.js.map