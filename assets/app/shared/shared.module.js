"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var authentication_service_1 = require("./services/authentication.service");
var session_service_1 = require("./services/session.service");
var assessment_service_1 = require("./services/assessment.service");
var class_service_1 = require("./services/class.service");
var course_service_1 = require("./services/course.service");
var sopi_service_1 = require("./services/sopi.service");
var evidence_service_1 = require("./services/evidence.service");
var grade_service_1 = require("./services/grade.service");
var pager_service_1 = require("./services/pager.service");
var uploader_service_1 = require("./services/uploader.service");
var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [session_service_1.SessionService, authentication_service_1.AuthenticationService, assessment_service_1.AssessmentService, class_service_1.ClassService, course_service_1.CourseService, sopi_service_1.SopiService, evidence_service_1.EvidenceService, grade_service_1.GradeService, pager_service_1.PagerService, uploader_service_1.Uploader]
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    core_1.NgModule({
        declarations: [],
        exports: [],
        imports: [common_1.CommonModule]
    })
], SharedModule);
exports.SharedModule = SharedModule;
var SharedModule_1;
//# sourceMappingURL=shared.module.js.map