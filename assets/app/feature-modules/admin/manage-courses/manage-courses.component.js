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
var course_service_1 = require("../../../shared/services/course.service");
var pager_service_1 = require("../../../shared/services/pager.service");
var ManageCoursesComponent = (function () {
    function ManageCoursesComponent(courseService, pagerService) {
        this.courseService = courseService;
        this.pagerService = pagerService;
        this.pager = {};
        this.session = JSON.parse(localStorage.getItem('session'));
        this.program = this.session.User.program;
        this.getCourses = this.courseService.GetCoursesPerProgram(this.program);
        this.programCourses = [];
    }
    ManageCoursesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var courseData = this.getCourses
            .subscribe(function (data) {
            _this.programCourses = data;
            _this.setPage(_this.page);
        }, function (error) { return console.log(error); }, function () { return console.log(_this.programCourses); });
    };
    ManageCoursesComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.programCourses.length, page);
        console.log(this.pager);
        //get current page of items
        this.pagedItems = this.programCourses.slice(this.pager.startIndex, this.pager.endIndex + 1);
        this.page = page;
        console.log(this.pagedItems);
    };
    return ManageCoursesComponent;
}());
ManageCoursesComponent = __decorate([
    core_1.Component({
        templateUrl: './app/feature-modules/admin/manage-courses/manage-courses.component.html',
        styleUrls: ['./app/feature-modules/user/new/user-new.component.css']
    }),
    __metadata("design:paramtypes", [course_service_1.CourseService, pager_service_1.PagerService])
], ManageCoursesComponent);
exports.ManageCoursesComponent = ManageCoursesComponent;
//# sourceMappingURL=manage-courses.component.js.map