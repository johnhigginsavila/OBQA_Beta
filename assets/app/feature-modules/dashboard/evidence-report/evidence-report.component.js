"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EvidenceReportComponent = (function () {
    function EvidenceReportComponent() {
    }
    EvidenceReportComponent.prototype.ngOnInit = function () {
        this.barChartData = [
            { data: [65, 59, 80], label: 'Label' }
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
    return EvidenceReportComponent;
}());
EvidenceReportComponent = __decorate([
    core_1.Component({
        templateUrl: './app/feature-modules/dashboard/evidence-report/evidence-report.component.html'
    })
], EvidenceReportComponent);
exports.EvidenceReportComponent = EvidenceReportComponent;
//# sourceMappingURL=evidence-report.component.js.map