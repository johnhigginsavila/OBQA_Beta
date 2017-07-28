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
var authentication_service_1 = require("../../shared/services/authentication.service");
var ClassService = (function () {
    function ClassService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.classFindUrl = 'class';
        this.classFindProgramUrl = 'class/findprogram';
        this.classFindOneUrl = 'class/:id';
        this.classCreateUrl = 'class/create';
    }
    ClassService.prototype.GetAllClasses = function () {
        this.session = JSON.parse(localStorage.getItem('session'));
        this.jwt = this.session.token;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.classFindUrl, options)
            .map(function (response) { return response.json(); });
    };
    ClassService.prototype.GetClassesPerProgramPerCyclePerTerm = function (program, cycle, term) {
        var _this = this;
        this.session = JSON.parse(localStorage.getItem('session'));
        this.jwt = this.session.token;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        headers.append('program', program.toString());
        headers.append('cycle', cycle.toString());
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.classFindProgramUrl, options)
            .map(function (response) { return response.json(); })
            .map(function (data) { return _this.filterClassesByTerm(data, term); })
            .map(function (data) {
            if (data.length == 0) {
                var newData = [];
                var dummyClassData = {
                    academicYear: '',
                    assessmentClass: null,
                    classStudent: [{}],
                    description: '',
                    cycle: null,
                    id: 0,
                    programCourse: null,
                    room: null,
                    term: null,
                    user: null
                };
                newData.push(dummyClassData);
                return newData;
            }
            else {
                return data;
            }
        });
    };
    ClassService.prototype.GetClassesPerProgram = function (program) {
        var _this = this;
        return this.GetAllClasses()
            .map(function (data) { return _this.filterClassByProgram(data, program); });
    };
    ClassService.prototype.GetFacultyClasses = function (program, cycle, term, instructor) {
        var _this = this;
        this.session = JSON.parse(localStorage.getItem('session'));
        this.jwt = this.session.token;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        headers.append('program', program.toString());
        headers.append('cycle', cycle.toString());
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.classFindProgramUrl, options)
            .map(function (response) { return response.json(); })
            .map(function (data) { return _this.filterClassesByTerm(data, term); })
            .map(function (data) { return _this.getFacultyClasses(data, instructor); });
    };
    ClassService.prototype.GetClassById = function (id, instructor) {
        var _this = this;
        this.session = JSON.parse(localStorage.getItem('session'));
        this.jwt = this.session.token;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this.classFindUrl + "/" + instructor + "/" + id, options)
            .map(function (response) { return response.json(); })
            .map(function (data) { return _this.getClassByIdSorter(data); });
    };
    ClassService.prototype.AddClass = function (newClass) {
        this.session = JSON.parse(localStorage.getItem('session'));
        this.jwt = this.session.token;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.jwt);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.classCreateUrl, newClass, options)
            .map(function (response) { return response.json(); });
    };
    ClassService.prototype.getFacultyClasses = function (data, instructor) {
        if (data.length == 0) {
            return data;
        }
        else {
            var newData_1 = [];
            data.forEach(function (item, index, array) {
                if (item.user.id == instructor) {
                    newData_1.push(item);
                }
            });
            return newData_1;
        }
    };
    ClassService.prototype.filterClassesByTerm = function (data, term) {
        if (term == 0) {
            return data;
        }
        else {
            var newData_2 = [];
            data.forEach(function (item, index, array) {
                if (item.term == term) {
                    newData_2.push(item);
                }
            });
            return newData_2;
        }
    };
    ClassService.prototype.getClassByIdSorter = function (data) {
        data.forEach(dataSorter);
        return data;
        function dataSorter(item, index, array) {
            array[index].assessmentClass.sort(function (a, b) {
                if (a.assessment.programSopi.sopi.sopiCode < b.assessment.programSopi.sopi.sopiCode) {
                    return -1;
                }
                else if (a.assessment.programSopi.sopi.sopiCode > b.assessment.programSopi.sopi.sopiCode) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
    };
    ClassService.prototype.filterClassByProgram = function (data, program) {
        var newData = [];
        data.forEach(function (item, index, array) {
            if (item.programCourse.program == program) {
                newData.push(item);
            }
        });
        return newData;
    };
    return ClassService;
}());
ClassService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, authentication_service_1.AuthenticationService])
], ClassService);
exports.ClassService = ClassService;
//# sourceMappingURL=class.service.js.map