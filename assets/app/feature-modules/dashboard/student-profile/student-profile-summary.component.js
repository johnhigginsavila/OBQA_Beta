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
var grade_service_1 = require("../../../shared/services/grade.service");
var StudentProfileSummaryComponent = (function () {
    function StudentProfileSummaryComponent(gradeService) {
        this.gradeService = gradeService;
        this.session = JSON.parse(localStorage.getItem('session'));
        this.programId = this.session.User.program;
        this.studentIndex = 0;
        this.radarChartData = [];
        this.myData = [];
    }
    StudentProfileSummaryComponent.prototype.ngOnInit = function () {
        var subscriber = this.gradeService.GetGradePerStudentToChart(this.programId)
            .subscribe(function (data) { return localStorage.setItem('studentData', JSON.stringify(data)); }, function (error) { return console.log(error); });
        setTimeout(function () {
            subscriber.unsubscribe();
        }, 15000);
        this.loadStudentChart();
        // Student Profile Chart Start
        this.radarChartData.push({ data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], label: 'Average' });
        this.radarChartType = 'radar';
        this.radarChartOptions = {
            responsive: true,
            scales: {
                xAxes: [{
                        ticks: {
                            max: 1
                        }
                    }]
            }
        };
    };
    StudentProfileSummaryComponent.prototype.previousStudent = function () {
        if (this.studentIndex !== 0) {
            this.studentIndex--;
            this.loadStudentChart();
        }
    };
    StudentProfileSummaryComponent.prototype.nextStudent = function () {
        if (this.studentIndex !== this.studentTotal - 1) {
            this.studentIndex++;
            this.loadStudentChart();
        }
    };
    StudentProfileSummaryComponent.prototype.loadStudentChart = function () {
        var _this = this;
        if (this.myData.length == 0) {
            var subscriber = this.gradeService.GetGradePerStudentToChart(this.programId)
                .subscribe(function (data) {
                _this.radarChartLabels = data[_this.studentIndex].labels;
                _this.radarChartData[0] =
                    { data: data[_this.studentIndex].data.data, label: data[_this.studentIndex].data.label };
                _this.studentTotal = data.length;
                console.log(_this.radarChartData[0].data);
                _this.myData = data;
            }, function (error) {
                console.log(error);
                if (error.status == 401) {
                    console.log('You need to log in');
                }
            });
            setTimeout(function () {
                subscriber.unsubscribe();
            }, 15000);
        }
        else {
            this.radarChartLabels = this.myData[this.studentIndex].labels;
            this.radarChartData[0] = {
                data: this.myData[this.studentIndex].data.data, label: this.myData[this.studentIndex].data.label
            };
            this.studentTotal = this.myData.length;
        }
    };
    return StudentProfileSummaryComponent;
}());
StudentProfileSummaryComponent = __decorate([
    core_1.Component({
        templateUrl: './app/feature-modules/dashboard/student-profile/student-profile-summary.component.html'
    }),
    __metadata("design:paramtypes", [grade_service_1.GradeService])
], StudentProfileSummaryComponent);
exports.StudentProfileSummaryComponent = StudentProfileSummaryComponent;
//# sourceMappingURL=student-profile-summary.component.js.map