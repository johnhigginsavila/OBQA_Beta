"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var assessment_service_1 = require("../../../shared/services/assessment.service");
var ObqaMonitoringReportPrintComponent = (function () {
    function ObqaMonitoringReportPrintComponent(assessmentService, route) {
        var _this = this;
        this.assessmentService = assessmentService;
        this.route = route;
        this.route.params.subscribe(function (params) { _this.cycle = params.cycle; _this.term = params.term; });
        this.session = JSON.parse(localStorage.getItem('session'));
        this.program = this.session.User.program;
    }
    ObqaMonitoringReportPrintComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.cycle);
        this.session = JSON.parse(localStorage.getItem('session'));
        this.program = this.session.User.program;
        this.assessmentService.GetObqaMonitoringReportPerProgramPerCyclePerTerm(this.program, this.cycle, this.term)
            .subscribe(function (data) {
            console.log(_this.term);
            _this.assessmentReport = data;
        }, function (error) { return console.log(error); }, function () {
            setTimeout(function () {
                window.print();
                window.close();
                window.location.replace('#/dashboard/obqa-monitoring-report');
            }, 1000);
        });
    };
    ObqaMonitoringReportPrintComponent.prototype.isCycle = function (cycle) {
        if (cycle == this.cycle) {
            return true;
        }
        else {
            return false;
        }
    };
    return ObqaMonitoringReportPrintComponent;
}());
ObqaMonitoringReportPrintComponent = __decorate([
    core_1.Component({
        template: "\n        <h1>OBQA MONITORING REPORT</h1>\n        <div class=\"container-fluid\">\n        <div class=\"row\">\n                <div>     \n                    <table class=\"table table-bordered table-hover\">\n                    <thead>\n                        <tr class=\"mycolor\">\n                        <th>SOPI</th>\n                            <th>Course</th>\n                            <th>Assessment Level</th>\n                            <th>Task</th>\n                            <th>Target</th>\n                            <th>Term</th>\n                            <th>A.Y.</th>\n                            <th>Cycle</th>\n                            <th>Performance</th>\n                            <th style=\"width: 20%\">Improvement Plan</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let report of assessmentReport\" >\n                            <td *ngIf=\"isCycle(report.assessmentCycle)\">{{report.sopi}}</td>\n                            <td *ngIf=\"isCycle(report.assessmentCycle)\">{{report.course}}</td>\n                            <td *ngIf=\"isCycle(report.assessmentCycle)\">{{report.assessmentLevel}}</td>\n                            <td *ngIf=\"isCycle(report.assessmentCycle)\">{{report.assessmentTask}}</td>\n                            <td *ngIf=\"isCycle(report.assessmentCycle)\">{{report.target | assessmentTarget : report.passingGrade}}</td><!-- use pipe here -->\n                            <td *ngIf=\"isCycle(report.assessmentCycle) \">{{report.term}}</td>\n                            <td *ngIf=\"isCycle(report.assessmentCycle) \">{{report.academicYear}}</td>\n                            <td *ngIf=\"isCycle(report.assessmentCycle)\">{{report.assessmentCycle}}</td>\n                            <td *ngIf=\"isCycle(report.assessmentCycle) \">{{report.performance | percent}}</td>\n                            <td *ngIf=\"isCycle(report.assessmentCycle)\">{{report.improvementPlan}}</td>\n                        </tr>\n                    </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [assessment_service_1.AssessmentService, router_1.ActivatedRoute])
], ObqaMonitoringReportPrintComponent);
exports.ObqaMonitoringReportPrintComponent = ObqaMonitoringReportPrintComponent;
//# sourceMappingURL=obqa-monitoring-report-print.component.js.map