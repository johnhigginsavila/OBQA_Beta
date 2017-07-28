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
var assessment_service_1 = require("../../../shared/services/assessment.service");
var authentication_service_1 = require("../../../shared/services/authentication.service");
var ObqaMonitoringReportStatusComponent = (function () {
    function ObqaMonitoringReportStatusComponent(assessmentService, authenticationService) {
        this.assessmentService = assessmentService;
        this.authenticationService = authenticationService;
    }
    //Total Progress
    ObqaMonitoringReportStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._csrf = this.authenticationService.GetCsrfToken();
        console.log(this._csrf);
        var cycle = 2;
        this.authenticationService.RequestCsrfToken()
            .subscribe(function (data) {
            _this.assessmentService.GetAssessmentStatusSummary(cycle, data._csrf)
                .subscribe(function (data) {
                _this.barChartData = [{ data: [data.term1 * 100, data.term2 * 100, data.term3 * 100], label: 'OBQA Monitoring Report Submission' }];
            }, function (error) { return console.log(error); });
            _this.assessmentService.GetAssessmentStatusPerProgram(cycle, data._csrf)
                .subscribe(function (data) { _this.programStatus = data; }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
        this.barChartData = [
            { data: [65, 59, 80], label: 'Progress' }
        ];
        this.barChartLabels = ['Term 1', 'Term 2', 'Term 3'];
        this.barChartOptions = {
            responsive: true,
            scales: {
                xAxes: [{
                        ticks: {
                            max: 100,
                            min: 1
                        },
                        yAxes: [{
                                categorySpacing: 90
                            }]
                    }]
            }
        };
        this.barChartColors = [
            {
                backgroundColor: 'rgba(76,182,182,100)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.barChartLegend = true;
        this.barChartType = 'horizontalBar';
    };
    // barChart
    ObqaMonitoringReportStatusComponent.prototype.randomize = function () {
        var _barChartData = new Array(this.barChartData.length);
        for (var i = 0; i < this.barChartData.length; i++) {
            _barChartData[i] = { data: new Array(this.barChartData[i].data.length), label: this.barChartData[i].label };
            for (var j = 0; j < this.barChartData[i].data.length; j++) {
                _barChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.barChartData = _barChartData;
        console.log(this.barChartData);
    };
    //End Progress
    ObqaMonitoringReportStatusComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ObqaMonitoringReportStatusComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return ObqaMonitoringReportStatusComponent;
}());
ObqaMonitoringReportStatusComponent = __decorate([
    core_1.Component({
        templateUrl: './app/feature-modules/dashboard/obqa-monitoring-report/obqa-monitoring-report-status.component.html'
    }),
    __metadata("design:paramtypes", [assessment_service_1.AssessmentService, authentication_service_1.AuthenticationService])
], ObqaMonitoringReportStatusComponent);
exports.ObqaMonitoringReportStatusComponent = ObqaMonitoringReportStatusComponent;
//# sourceMappingURL=obqa-monitoring-report-status.component.js.map