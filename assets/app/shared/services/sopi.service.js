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
var SopiService = (function () {
    function SopiService(_http, jsonp) {
        this._http = _http;
        this.jsonp = jsonp;
        this.getSopiUrl = 'sopi';
        this.addSopiUrl = 'sopi/create';
    }
    SopiService.prototype.GetAllSopi = function () {
        var _this = this;
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions(headers);
        return this._http.get(this.getSopiUrl, options)
            .map(function (response) { return response.json(); })
            .map(function (data) { return _this.sortSopiByName(data); });
    };
    SopiService.prototype.GetSopiByProgram = function (program) {
        var _this = this;
        return this.GetAllSopi()
            .map(function (data) { return _this.filterByProgram(data, program); });
    };
    SopiService.prototype.AddSopi = function (sopiNew) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions(headers);
        return this._http.post(this.addSopiUrl, sopiNew, options)
            .map(function (response) { return response.json(); });
    };
    SopiService.prototype.filterByProgram = function (data, program) {
        var newData = [];
        data.forEach(function (item, index, array) {
            if (item.program == program) {
                newData.push(item);
            }
        });
        return newData;
    };
    SopiService.prototype.sortSopiByName = function (data) {
        data.sort(function (a, b) {
            var sopiA = a.sopi.sopiCode;
            var sopiB = b.sopi.sopiCode;
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
    return SopiService;
}());
SopiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, http_1.Jsonp])
], SopiService);
exports.SopiService = SopiService;
//# sourceMappingURL=sopi.service.js.map