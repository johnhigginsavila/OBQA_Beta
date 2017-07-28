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
var http_2 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/toPromise");
var authentication_service_1 = require("./authentication.service");
var AssessmentService = (function () {
    function AssessmentService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.assessmentFindUrl = 'assessment/find';
        this.assessmentFindOneUrl = 'assessment/findOne';
        this.assessmentCreateUrl = 'assessment/create';
        this.assessmentReportSummaryUrl = 'obqamonitoringreport/statussummary';
        this.assessmentReportPerProgramUrl = 'obqamonitoringreport/statusperprogram';
        this.addImprovementPlanUrl = 'assessment/update';
        this.obqaMonitoringReportUrl = 'obqamonitoringreport/reportperprogram';
        this.obqaMonitoringCycleReportUrl = 'obqamonitoringreport/cyclereport';
        this.session = JSON.parse(localStorage.getItem('session'));
        this.jwt = this.session.token;
    }
    AssessmentService.prototype.GetAssessment = function () {
        this.session = JSON.parse(localStorage.getItem('session'));
        this.jwt = this.session.token;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.assessmentFindUrl, options)
            .map(function (response) { return response.json(); })
            .map(function (data) {
            return data.sort(function (a, b) {
                var sopiA = a.programSopi.sopi.sopiCode.toLowerCase();
                var sopiB = b.programSopi.sopi.sopiCode.toLowerCase();
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
    };
    AssessmentService.prototype.GetAssessmentPerProgram = function (program, cycle, term) {
        var _this = this;
        this.session = JSON.parse(localStorage.getItem('session'));
        this.jwt = this.session.token;
        var headers = new http_2.Headers();
        var myprogram = this.session.User.program;
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        headers.append('program', program.toString());
        headers.append('cycle', cycle.toString());
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.assessmentFindOneUrl, options)
            .map(function (response) { return response.json(); })
            .map(function (data) {
            return data.sort(function (a, b) {
                var sopiA = a.programSopi.sopi.sopiCode.toLowerCase();
                var sopiB = b.programSopi.sopi.sopiCode.toLowerCase();
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
        })
            .map(function (data) { return _this.filterAssessmentByTerm(data, term); })
            .map(function (data) {
            if (data.length == 0) {
                var newData = [];
                var dummyAssessment = {
                    academicYear: '',
                    assessmentClass: undefined,
                    assessmentComment: '',
                    assessmentCycle: 0,
                    assessmentLevel: null,
                    assessmentTask: '',
                    id: null,
                    improvementPlan: '',
                    passingGrade: null,
                    program: undefined,
                    programCourse: undefined,
                    programSopi: undefined,
                    target: null,
                };
                newData.push(dummyAssessment);
                return newData;
            }
            else {
                return data;
            }
        });
    };
    AssessmentService.prototype.GetAssessmentPerProgramPerCycle = function (program, cycle, term) {
        var _this = this;
        return this.GetAssessment()
            .map(function (data) { return _this.filterAssessmentByTerm(data, term); })
            .map(function (data) { return _this.filterAssessmentByCycle(data, cycle); })
            .map(function (data) {
            if (data.length == 0) {
                var newData = [];
                var dummyAssessment = {
                    academicYear: '',
                    assessmentClass: undefined,
                    assessmentComment: '',
                    assessmentCycle: 0,
                    assessmentLevel: null,
                    assessmentTask: '',
                    id: null,
                    improvementPlan: '',
                    passingGrade: null,
                    program: undefined,
                    programCourse: undefined,
                    programSopi: undefined,
                    target: null,
                };
                newData.push(dummyAssessment);
                return newData;
            }
            else {
                return data;
            }
        });
    };
    AssessmentService.prototype.CreateAssessment = function (assessment) {
        this.session = JSON.parse(localStorage.getItem('session'));
        this.jwt = this.session.token;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.assessmentCreateUrl, assessment, options)
            .map(function (response) { return response.json(); });
    };
    AssessmentService.prototype.GetAssessmentStatusSummary = function (cycle, _csrf) {
        this.session = JSON.parse(localStorage.getItem('session'));
        this.jwt = this.session.token;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.assessmentReportSummaryUrl, { cycle: cycle, _csrf: _csrf }, options)
            .map(function (response) { return response.json(); });
    };
    AssessmentService.prototype.GetAssessmentStatusPerProgram = function (cycle, _csrf) {
        this.session = JSON.parse(localStorage.getItem('session'));
        this.jwt = this.session.token;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.assessmentReportPerProgramUrl, { cycle: cycle, _csrf: _csrf }, options)
            .map(function (response) { return response.json(); });
    };
    AssessmentService.prototype.GetObqaMonitoringReport = function () {
        this.session = JSON.parse(localStorage.getItem('session'));
        this.jwt = this.session.token;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.obqaMonitoringReportUrl, options)
            .map(function (response) { return response.json(); })
            .map(function (data) {
            return data.sort(function (a, b) {
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
    };
    AssessmentService.prototype.GetObqaMonitoringReportPerProgramPerCyclePerTerm = function (program, cycle, term) {
        var _this = this;
        this.session = JSON.parse(localStorage.getItem('session'));
        this.jwt = this.session.token;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        headers.append('program', program.toString());
        headers.append('cycle', cycle.toString());
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.obqaMonitoringReportUrl, options)
            .map(function (response) { return response.json(); })
            .map(function (data) { return _this.filterAssessmentByTerm(data, term); })
            .map(function (data) { return _this.sortCycleReportBySopi(data); })
            .map(function (data) {
            if (data.length == 0) {
                var newData = [];
                var dummyAssessmentReport = {
                    id: null,
                    assessmentCycle: 0,
                    grade: null,
                    program: null,
                    programSopi: '',
                    sopi: '',
                    programCourse: null,
                    passingGrade: null,
                    performance: null,
                    academicYear: '',
                    assessmentComment: '',
                    assessmentLevel: null,
                    assessmentTask: '',
                    course: '',
                    target: null,
                    improvementPlan: '',
                    term: null
                };
                newData.push(dummyAssessmentReport);
                return newData;
            }
            else {
                return data;
            }
        });
    };
    AssessmentService.prototype.GetObqaMonitoringReportPerProgram = function (cycle, program) {
        var _this = this;
        return this.GetObqaMonitoringReport()
            .map(function (data) { return _this.filterAssessmentPerProgram(data, program); })
            .map(function (data) { return _this.filterAssessmentByCycle(data, cycle); })
            .map(function (data) {
            if (data.length == 0) {
                var newData = [];
                var dummyAssessmentReport = {
                    id: null,
                    assessmentCycle: 0,
                    grade: null,
                    program: null,
                    programSopi: '',
                    sopi: '',
                    programCourse: null,
                    passingGrade: null,
                    performance: null,
                    academicYear: '',
                    assessmentComment: '',
                    assessmentLevel: null,
                    assessmentTask: '',
                    course: '',
                    target: null,
                    improvementPlan: '',
                    term: null
                };
                newData.push(dummyAssessmentReport);
                return newData;
            }
            else {
                return data;
            }
        });
    };
    AssessmentService.prototype.GetCycleReportData = function (program) {
        var _this = this;
        this.session = JSON.parse(localStorage.getItem('session'));
        this.jwt = this.session.token;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.obqaMonitoringCycleReportUrl, options)
            .map(function (data) { return data.json(); })
            .map(function (data) { return _this.filterCycleReportByProgram(data, program); })
            .map(function (data) { return _this.sortCycleReportBySopi(data); });
    };
    AssessmentService.prototype.AddImprovementPlan = function (assessmentId, improvementPlan, _csrf) {
        this.session = JSON.parse(localStorage.getItem('session'));
        this.jwt = this.session.token;
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.addImprovementPlanUrl, { assessmentId: assessmentId, improvementPlan: improvementPlan, _csrf: _csrf }, options)
            .map(function (response) { return response.json(); });
    };
    AssessmentService.prototype.filterAssessmentPerProgram = function (data, program) {
        var newData = [];
        data.forEach(function (item, index, array) {
            if (item.program.id == program) {
                newData.push(item);
            }
        });
        return newData;
    };
    AssessmentService.prototype.filterCycleReportByProgram = function (data, program) {
        var newData = [];
        data.forEach(function (item, index, array) {
            if (item.program == program) {
                newData.push(item);
            }
        });
        return newData;
    };
    AssessmentService.prototype.filterAssessmentByCycle = function (data, cycle) {
        var newData = [];
        data.forEach(function (item, index, array) {
            if (item.assessmentCycle == cycle) {
                newData.push(item);
            }
        });
        return newData;
    };
    AssessmentService.prototype.filterAssessmentByTerm = function (data, term) {
        if (term == 0) {
            return data;
        }
        else {
            var newData_1 = [];
            data.forEach(function (item, index, array) {
                if (item.term == term) {
                    newData_1.push(item);
                }
            });
            return newData_1;
        }
    };
    AssessmentService.prototype.getAssessmentStatus = function (data, cycle) {
        sortAssessment(data, cycle)
            .then(function (result) {
            setTimeout(function () {
                return result;
            }, 300);
        }).catch(function (err) {
            console.log(err);
        });
        function sortAssessment(data, cycle) {
            var promise = new Promise(function (resolve, reject) {
                var newData = {
                    term1: [],
                    term2: [],
                    term3: []
                };
                data.forEach(sorter);
                setTimeout(function () {
                    resolve(newData);
                }, 100);
                function sorter(item, index, array) {
                    if (array[index].assessmentCycle == 1) {
                        newData.term1.push(array[index]);
                    }
                    else if (array[index].assessmentCycle == 2) {
                        newData.term2.push(array[index]);
                    }
                    else {
                        newData.term3.push(array[index]);
                    }
                }
            });
            return promise;
        }
    };
    AssessmentService.prototype.sortCycleReportBySopi = function (data) {
        data.sort(function (a, b) {
            var sopiA = a.sopi;
            var sopiB = b.sopi;
            if (sopiA > sopiB) {
                return 1;
            }
            else if (sopiA < sopiB) {
                return -1;
            }
            else {
                return 0;
            }
        });
        return data;
    };
    return AssessmentService;
}());
AssessmentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, authentication_service_1.AuthenticationService])
], AssessmentService);
exports.AssessmentService = AssessmentService;
//# sourceMappingURL=assessment.service.js.map