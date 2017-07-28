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
var pager_service_1 = require("../../../shared/services/pager.service");
var ObqaMonitoringReportComponent = (function () {
    function ObqaMonitoringReportComponent(assessmentService, pagerService, router) {
        this.assessmentService = assessmentService;
        this.pagerService = pagerService;
        this.router = router;
        this.pager = {};
        this.session = JSON.parse(localStorage.getItem('session'));
        this.program = this.session.User.program;
        this.page = 1;
        this.term = [
            { name: 'Term 2', value: 2 },
            { name: 'Term 3', value: 3 },
            { name: 'Term 1', value: 1 },
            { name: 'All', value: 0 }
        ];
        this.cycle = [
            { name: 'cycle 1', academicYear: '2014-2015', value: 1 },
            { name: 'cycle 2', academicYear: '2015-2016', value: 2 },
            { name: 'cycle 3', academicYear: '2016-2017', value: 3 },
            { name: 'cycle 4', academicYear: '2017-2018', value: 4 },
            { name: 'cycle 5', academicYear: '2018-2019', value: 5 }
        ];
        this.selectedCycle = 1;
        this.selectedTerm = 2;
    }
    ObqaMonitoringReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session = JSON.parse(localStorage.getItem('session'));
        this.program = this.session.User.program;
        this.assessmentService.GetObqaMonitoringReportPerProgramPerCyclePerTerm(this.program, this.selectedCycle, this.selectedTerm)
            .subscribe(function (data) {
            _this.assessmentReport = data;
            _this.setPage(_this.page);
        }, function (error) { return console.log(error); });
    };
    ObqaMonitoringReportComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    ObqaMonitoringReportComponent.prototype.change = function () {
        this.page = 1;
        this.setPage(this.page);
        this.ngOnInit();
    };
    ObqaMonitoringReportComponent.prototype.isCycle = function (cycle) {
        if (cycle == this.selectedCycle) {
            return true;
        }
        else {
            return false;
        }
    };
    ObqaMonitoringReportComponent.prototype.printReport = function () {
        console.log('Print');
        this.router.navigate(['dashboard/obqa-monitoring-report-print', this.selectedCycle, this.selectedTerm]);
    };
    ObqaMonitoringReportComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.assessmentReport.length, page);
        console.log(this.pager);
        //get current page of items
        this.pagedItems = this.assessmentReport.slice(this.pager.startIndex, this.pager.endIndex + 1);
        this.page = page;
        console.log(this.pagedItems);
    };
    return ObqaMonitoringReportComponent;
}());
ObqaMonitoringReportComponent = __decorate([
    core_1.Component({
        templateUrl: './app/feature-modules/dashboard/obqa-monitoring-report/obqa-monitoring-report.component.html'
    }),
    __metadata("design:paramtypes", [assessment_service_1.AssessmentService, pager_service_1.PagerService, router_1.Router])
], ObqaMonitoringReportComponent);
exports.ObqaMonitoringReportComponent = ObqaMonitoringReportComponent;
//# sourceMappingURL=obqa-monitoring-report.component.js.map