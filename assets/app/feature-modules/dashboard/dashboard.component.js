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
var assessment_service_1 = require("../../shared/services/assessment.service");
var evidence_service_1 = require("../../shared/services/evidence.service");
var DashboardComponent = (function () {
    function DashboardComponent(assessmentService, evidenceService) {
        this.assessmentService = assessmentService;
        this.evidenceService = evidenceService;
        // Target and performace Report line chart
        this.lineChartData = [
            { data: [70, 50, 80], label: 'Target' },
            { data: [86, 30, 87], label: 'Performance' }
        ];
        this.lineChartLabels = ['Term 1', 'Term 2', 'Term 3'];
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
    }
    //OBQA Monitoring Progress bar chart
    DashboardComponent.prototype.ngOnInit = function () {
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
                        }
                    }],
                yAxes: [{
                        categorySpacing: 90
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
        this.evidencebarChartType = 'bar';
        // Student Profile Radar Chart
        this.radarChartLabels = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'D1', 'D2', 'E1', 'E2', 'F1', 'F2', 'G1', 'G2', 'H1', 'H2', 'I1', 'I2',
            'J1', 'J2', 'K1', 'K2', 'K3', 'L1', 'L2'];
        this.radarChartData = [
            { data: [100, 90, 90, 81, 90, 90, 90, 90, 81, 90, 81, 81, 90, 90, 90,
                    90, 90, 90, 81, 90, 90, 90, 90, 81, 90, 81, 90, 90, 90], label: 'Cycle 1' },
            { data: [90, 90, 90, 81, 96, 100, 90, 90, 81, 90, 90, 90, 90, 90, 90,
                    100, 100, 90, 81, 96, 55, 90, 90, 100, 90, 81, 96, 81, 90,], label: 'Cycle 2' },
            { data: [90, 90, 90, 81, 96, 100, 100, 90, 81, 96, 100, 100, 81, 96, 100,
                    100, 100, 100, 90, 81, 96, 98, 90, 98, 98, 91, 85, 80, 98], label: 'Cycle 3' }
        ];
        this.radarChartType = 'radar';
        this.radarChartOptions = {
            responsive: true,
            scales: {
                xAxes: [{
                        ticks: {
                            max: 100,
                            min: 1
                        }
                    }]
            }
        };
    };
    // Target and performace Report line chart end
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        templateUrl: './app/feature-modules/dashboard/dashboard.component.html'
    }),
    __metadata("design:paramtypes", [assessment_service_1.AssessmentService, evidence_service_1.EvidenceService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map