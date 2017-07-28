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
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/toPromise");
var GradeService = (function () {
    function GradeService(http) {
        this.http = http;
        this.getGradeStatusSummaryUrl = '/grade/statussummary';
        this.getGradePerStudentUrl = '/grade/statusperstudent'; // students with grades sorted by program for average sopi grades
        this.session = JSON.parse(localStorage.getItem('session'));
        this.jwt = this.session.token;
    }
    GradeService.prototype.GetGradeStatusSummary = function () {
        this.session = JSON.parse(localStorage.getItem('session'));
        this.jwt = this.session.token;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.getGradeStatusSummaryUrl, options)
            .map(function (response) { return response.json(); });
    };
    GradeService.prototype.GetGradePerStudent = function () {
        this.session = JSON.parse(localStorage.getItem('session'));
        this.jwt = this.session.token;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.getGradePerStudentUrl, options)
            .map(function (response) { return response.json(); });
    };
    GradeService.prototype.GetGradePerStudentToChart = function (program) {
        var _this = this;
        return this.GetGradePerStudent()
            .map(function (data) { return _this.filterPerProgram(data, program); })
            .map(function (data) { return _this.sortPerSopi(data); })
            .map(function (data) { return _this.formatData(data); });
    };
    //functions for GetGradePerStudentToChart
    GradeService.prototype.filterPerProgram = function (data, program) {
        var newData = [];
        data.forEach(function (item, index, array) {
            if (item.program === program) {
                newData.push(item);
            }
        });
        return newData;
    };
    GradeService.prototype.sortPerSopi = function (data) {
        data.forEach(function (item, index, array) {
            item.grade.sort(function (a, b) {
                var sopiA = a.sopi.toLowerCase();
                var sopiB = b.sopi.toLowerCase();
                if (sopiA < sopiB) {
                    return -1;
                }
                else if (sopiA > sopiB) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        });
        return data;
    };
    GradeService.prototype.formatData = function (data) {
        var newData;
        newData = [];
        data.forEach(function (item, index, array) {
            var studentChart;
            studentChart = {
                labels: [],
                data: {
                    data: [],
                    label: ''
                }
            };
            studentChart.data.label = item.studentNumber + ' - ' + item.lastname;
            item.grade.forEach(function (item1, index1, array1) {
                studentChart.labels.push(item1.sopi);
                studentChart.data.data.push(item1.average * 100);
            });
            newData.push(studentChart);
        });
        return newData;
    };
    return GradeService;
}());
GradeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GradeService);
exports.GradeService = GradeService;
//# sourceMappingURL=grade.service.js.map