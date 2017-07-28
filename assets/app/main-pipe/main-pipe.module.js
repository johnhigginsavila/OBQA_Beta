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
var student_grade_pipe_1 = require("./pipes/student-grade.pipe");
var evidence_assessment_pipe_1 = require("./pipes/evidence-assessment.pipe");
var assessment_target_pipe_1 = require("./pipes/assessment-target.pipe");
var MainPipeModule = (function () {
    function MainPipeModule() {
    }
    return MainPipeModule;
}());
MainPipeModule = __decorate([
    core_1.NgModule({
        declarations: [student_grade_pipe_1.StudentGradePipe, evidence_assessment_pipe_1.EvidenceAssessmentPipe, assessment_target_pipe_1.AssessmentTargetPipe],
        imports: [common_1.CommonModule],
        exports: [student_grade_pipe_1.StudentGradePipe, evidence_assessment_pipe_1.EvidenceAssessmentPipe, assessment_target_pipe_1.AssessmentTargetPipe]
    })
], MainPipeModule);
exports.MainPipeModule = MainPipeModule;
//# sourceMappingURL=main-pipe.module.js.map