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
var class_service_1 = require("../../../shared/services/class.service");
var pager_service_1 = require("../../../shared/services/pager.service");
var ManageClassesComponent = (function () {
    function ManageClassesComponent(classService, pagerService) {
        this.classService = classService;
        this.pagerService = pagerService;
        this.pager = {};
        this.session = JSON.parse(localStorage.getItem('session'));
        this.program = this.session.User.program;
        this.page = 1;
        this.term = [
            { name: 'Term 2', value: 2 },
            { name: 'Term 3', value: 3 },
            { name: 'Term 1', value: 1 },
            { name: 'All', value: 0 }
        ];
        this.cycle = [
            { name: 'cycle 1', academicYear: '2014-2015', value: 1 },
            { name: 'cycle 2', academicYear: '2015-2016', value: 2 },
            { name: 'cycle 3', academicYear: '2016-2017', value: 3 },
            { name: 'cycle 4', academicYear: '2017-2018', value: 4 },
            { name: 'cycle 5', academicYear: '2018-2019', value: 5 }
        ];
        this.selectedCycle = 1;
        this.selectedTerm = 2;
    }
    ManageClassesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session = JSON.parse(localStorage.getItem('session'));
        this.program = this.session.User.program;
        var classData = this.classService.GetClassesPerProgramPerCyclePerTerm(this.program, this.selectedCycle, this.selectedTerm)
            .subscribe(function (data) {
            _this.classes = data;
            _this.setPage(_this.page);
        }, function (err) { return console.log(err); }, function () { return console.log(_this.classes); });
        setTimeout(function () {
            classData.unsubscribe();
        }, 10000);
    };
    ManageClassesComponent.prototype.change = function () {
        this.page = 1;
        this.setPage(this.page);
        this.ngOnInit();
    };
    ManageClassesComponent.prototype.isClass = function (classId) {
        if (classId == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    ManageClassesComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.classes.length, page);
        console.log(this.pager);
        //get current page of items
        this.pagedItems = this.classes.slice(this.pager.startIndex, this.pager.endIndex + 1);
        this.page = page;
        console.log(this.pagedItems);
    };
    return ManageClassesComponent;
}());
ManageClassesComponent = __decorate([
    core_1.Component({
        templateUrl: './app/feature-modules/admin/manage-classes/manage-classes.component.html'
    }),
    __metadata("design:paramtypes", [class_service_1.ClassService, pager_service_1.PagerService])
], ManageClassesComponent);
exports.ManageClassesComponent = ManageClassesComponent;
//# sourceMappingURL=manage-classes.component.js.map