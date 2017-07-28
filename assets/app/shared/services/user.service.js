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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/toPromise");
var UserService = (function () {
    function UserService(_http, jsonp) {
        this._http = _http;
        this.jsonp = jsonp;
        this._userUrl = 'user';
    }
    UserService.prototype.GetAllUsers = function () {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions(headers);
        return this._http.get(this._userUrl, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.GetUsersPerProgram = function (program) {
        var _this = this;
        return this.GetAllUsers()
            .map(function (data) { return _this.filterByProgram(data, program); });
    };
    UserService.prototype.GetFacultyUser = function () {
        var _this = this;
        return this.GetAllUsers()
            .map(function (data) { return _this.getFacultyData(data); });
    };
    UserService.prototype.addUser = function (userCredentials) {
        userCredentials.program = this.program(userCredentials.program);
        userCredentials.userRestriction = this.userRestriction(userCredentials.userRestriction);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return this._http.post('user/create', userCredentials, headers)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.filterByProgram = function (data, program) {
        var newData = [];
        data.forEach(function (item, index, array) {
            if (item.program.id == program) {
                newData.push(item);
            }
        });
        return newData;
    };
    UserService.prototype.getFacultyData = function (data) {
        function facultyData(item, index, array) {
            if (array[index].program === undefined) {
                delete array[index];
            }
        }
        data.forEach(facultyData);
        return data = data.filter(function (element) {
            return element !== undefined;
        });
    };
    UserService.prototype.userRestriction = function (userRestriction) {
        switch (userRestriction.toLowerCase()) {
            case "admin": {
                return 1;
            }
            case "director": {
                return 2;
            }
            case "assisstantadminstaff": {
                return 3;
            }
            case "coordinator": {
                return 4;
            }
            case "faculty": {
                return 5;
            }
            default: {
                return 6;
            }
        }
    };
    UserService.prototype.program = function (program) {
        switch (program.toLowerCase()) {
            case "che": {
                return 1;
            }
            case "civ": {
                return 2;
            }
            case "cpe": {
                return 3;
            }
            case "ece": {
                return 4;
            }
            case "ie": {
                return 5;
            }
            case "mem": {
                return 6;
            }
            case "me": {
                return 7;
            }
            default: {
                return 8;
            }
        }
    };
    UserService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, http_1.Jsonp])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map