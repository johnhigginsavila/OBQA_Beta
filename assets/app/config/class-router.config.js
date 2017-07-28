"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add_student_component_1 = require("../feature-modules/class/add-student/add-student.component");
var class_detail_component_1 = require("../feature-modules/class/class-detail/class-detail.component");
var evidence_component_1 = require("../feature-modules/class/evidence/evidence.component");
var student_grade_component_1 = require("../feature-modules/class/class-detail/student-grade.component");
var login_guard_1 = require("../shared/guards/login.guard");
var class_guard_1 = require("../shared/guards/class.guard");
exports.classRouterConfig = [
    { path: 'class/add-student', component: add_student_component_1.AddStudentComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: 'class/:instructor/:id', component: class_detail_component_1.ClassDetailComponent, canActivate: [login_guard_1.LoginGuard, class_guard_1.ClassGuard] },
    { path: 'class/student-grade/:instructor/:id', component: student_grade_component_1.StudentGradeComponent, canActivate: [login_guard_1.LoginGuard, class_guard_1.ClassGuard] },
    { path: 'class/evidence/:instructor/:id', component: evidence_component_1.EvidenceComponent, canActivate: [login_guard_1.LoginGuard, class_guard_1.ClassGuard] }
];
//# sourceMappingURL=class-router.config.js.map