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
var CycleReportComponent = (function () {
    function CycleReportComponent(assessmentService) {
        this.assessmentService = assessmentService;
        // Target and performace Report line chart
        this.lineChartData = [
            { data: [0, 0, 0, 0, 0], label: 'Target' },
            { data: [0, 0, 0, 0, 0], label: 'Performance' }
        ];
        this.lineChartLabels = ['Cycle 1', 'Cycle 2', 'Cycle 3', 'Cycle 4', 'Cycle 5'];
        this.lineChartOptions = {
            responsive: true,
            scales: {
                yAxes: [{
                        ticks: {
                            max: 100,
                            min: 1
                        }
                    }],
                xAxes: [{
                        ticks: {
                            max: 100,
                            min: 1
                        }
                    }]
            }
        };
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.session = JSON.parse(localStorage.getItem('session'));
        this.program = this.session.User.program;
        this.getCycleReport = this.assessmentService.GetCycleReportData(this.program);
        this.sopiIndex = 0;
        this.sopiTotal = 0;
        this.lineChartData = [
            { data: [0, 0, 0, 0, 0], label: 'Target' },
            { data: [0, 0, 0, 0, 0], label: 'Performance' }
        ];
    }
    // Target and performace Report line chart end
    CycleReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCycleReport.subscribe(function (data) {
            _this.sopiTotal = data.length;
            _this.myData = data;
            _this.lineChartData = [
                { data: data[_this.sopiIndex].cycleTarget, label: data[_this.sopiIndex].sopi + ' Target' },
                { data: data[_this.sopiIndex].cyclePerformance, label: data[_this.sopiIndex].sopi + ' Performance' }
            ];
            _this.lineChartLabels = data[_this.sopiIndex].cyclePerformanceLabel;
        }, function (err) { return console.log(err); });
    };
    CycleReportComponent.prototype.loadSopi = function () {
        this.lineChartData = [
            { data: this.myData[this.sopiIndex].cycleTarget, label: this.myData[this.sopiIndex].sopi + ' Target' },
            { data: this.myData[this.sopiIndex].cyclePerformance, label: this.myData[this.sopiIndex].sopi + ' Performance' }
        ];
        this.lineChartLabels = this.myData[this.sopiIndex].cyclePerformanceLabel;
    };
    CycleReportComponent.prototype.previousSopi = function () {
        if (this.sopiIndex !== 0) {
            this.sopiIndex--;
            this.loadSopi();
        }
    };
    CycleReportComponent.prototype.nextSopi = function () {
        if (this.sopiIndex !== this.sopiTotal - 1) {
            this.sopiIndex++;
            this.loadSopi();
        }
    };
    return CycleReportComponent;
}());
CycleReportComponent = __decorate([
    core_1.Component({
        templateUrl: './app/feature-modules/dashboard/cycle-report/cycle-report.component.html'
    }),
    __metadata("design:paramtypes", [assessment_service_1.AssessmentService])
], CycleReportComponent);
exports.CycleReportComponent = CycleReportComponent;
//# sourceMappingURL=cycle-report.component.js.map