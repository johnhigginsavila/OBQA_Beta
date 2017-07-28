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
var sopi_service_1 = require("../../../shared/services/sopi.service");
var pager_service_1 = require("../../../shared/services/pager.service");
var ManageSopiComponent = (function () {
    function ManageSopiComponent(sopiService, pagerService) {
        this.sopiService = sopiService;
        this.pagerService = pagerService;
        this.pager = {};
        this.session = JSON.parse(localStorage.getItem('session'));
        this.program = this.session.User.program;
        this.getProgramSopi = this.sopiService.GetSopiByProgram(this.program);
    }
    ManageSopiComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sopiData = this.getProgramSopi
            .subscribe(function (data) {
            _this.programSopi = data;
            _this.setPage(_this.page);
        }, function (error) { return console.log(error); }, function () { return console.log(_this.programSopi); });
    };
    ManageSopiComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.programSopi.length, page);
        console.log(this.pager);
        //get current page of items
        this.pagedItems = this.programSopi.slice(this.pager.startIndex, this.pager.endIndex + 1);
        this.page = page;
        console.log(this.pagedItems);
    };
    return ManageSopiComponent;
}());
ManageSopiComponent = __decorate([
    core_1.Component({
        templateUrl: './app/feature-modules/admin/manage-sopi/manage-sopi.component.html'
    }),
    __metadata("design:paramtypes", [sopi_service_1.SopiService, pager_service_1.PagerService])
], ManageSopiComponent);
exports.ManageSopiComponent = ManageSopiComponent;
//# sourceMappingURL=manage-sopi.component.js.map