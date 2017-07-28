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
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/toPromise");
var SessionService = (function () {
    function SessionService(_http, jsonp, _router) {
        this._http = _http;
        this.jsonp = jsonp;
        this._router = _router;
        this._sessionCreateUrl = '/session/create';
    }
    SessionService.prototype.SessionCall = function (userCredentials) {
        return this._http.post(this._sessionCreateUrl, userCredentials);
    };
    SessionService.prototype.SessionCreate2 = function (userCredentials) {
        var _this = this;
        return this.SessionCall(userCredentials)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) { return localStorage.setItem('session', JSON.stringify(data)); }, function (error) { return _this._router.navigate(['session/new']); }, function () { return _this._router.navigate(['class']); });
    };
    SessionService.prototype.SessionCreate = function (userCredentials) {
        var _this = this;
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions(headers);
        return this._http.post(this._sessionCreateUrl, userCredentials, options)
            .toPromise()
            .then(function (response) { return localStorage.setItem('session', JSON.stringify(response.json())); })
            .then(function () { return _this._router.navigate(['home']); })
            .then(function () { return window.location.reload(); })
            .catch(function (err) { return _this._router.navigate(['session/new']); });
    };
    SessionService.prototype.SessionDestroy = function () {
        var _this = this;
        this.clearLocalStorage().then(function () { return _this._router.navigate(['home']); });
    };
    SessionService.prototype.SetSession = function (session) {
        this.session = session;
        console.log(this.session);
    };
    /*SetSession(data:ISession):Promise<any>{
      let promise = new Promise(function(resolve, reject){
        if(!data){
          reject([{error:'SetSessionError', message:'The data is invalid'}]);
        }else{
          this.session = data;
          console.log(data);
          resolve(data);
        }
      })
      return promise;
    }*/
    SessionService.prototype.clearLocalStorage = function () {
        var promise = new Promise(function (resolve, reject) {
            localStorage.clear();
            resolve();
        });
        return promise;
    };
    SessionService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    SessionService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return SessionService;
}());
SessionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, http_1.Jsonp, router_1.Router])
], SessionService);
exports.SessionService = SessionService;
//# sourceMappingURL=session.service.js.map