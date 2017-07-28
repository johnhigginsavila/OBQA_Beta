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
var router_1 = require("@angular/router");
var uploader_service_1 = require("../../../shared/services/uploader.service");
var pager_service_1 = require("../../../shared/services/pager.service");
var upload_student_grade_1 = require("../../../classes/upload/upload-student-grade");
var class_service_1 = require("../../../shared/services/class.service");
var authentication_service_1 = require("../../../shared/services/authentication.service");
var StudentGradeComponent = (function () {
    function StudentGradeComponent(authenticationService, route, classService, router, uploaderService, pagerService) {
        this.authenticationService = authenticationService;
        this.route = route;
        this.classService = classService;
        this.router = router;
        this.uploaderService = uploaderService;
        this.pagerService = pagerService;
        this.pager = {};
        var id;
        var instructor;
        this.route.params.subscribe(function (params) { id = params.id; instructor = params.instructor; });
        this.getClass = this.classService.GetClassById(id, instructor);
        this.getCsrf = this.authenticationService.RequestCsrfToken();
    }
    StudentGradeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session = JSON.parse(localStorage.getItem('session'));
        this.user = this.session.User;
        this.getClass
            .subscribe(function (data) {
            _this.myClass = data;
            _this.classId = _this.myClass[0].id;
            _this.classStudent = data[0].classStudent;
            _this.setPage(_this.page);
        }, function (error) { return console.log(error); }, function () { return console.log(_this.myClass); });
    };
    StudentGradeComponent.prototype.onUploadFile = function () {
        var _this = this;
        var subscriber = this.getCsrf.subscribe(function (data) {
            var uploadFile = window.document.getElementById('my-file-selector').files[0];
            var studentGradeUploadItem = new upload_student_grade_1.StudentGradeUploadItem(uploadFile);
            studentGradeUploadItem.name = 'file';
            studentGradeUploadItem.formData = { FormDataKey: 'file', program: _this.user.program, user: _this.user, classId: _this.classId, _csrf: data._csrf };
            _this.uploaderService.onSuccessUpload = function (item, response, status, headers) {
                console.log(response);
            };
            _this.uploaderService.onErrorUpload = function (item, response, status, headers) {
                console.log('error');
            };
            _this.uploaderService.onCompleteUpload = function (item, response, status, headers) {
                console.log(response);
            };
            _this.uploaderService.upload(studentGradeUploadItem);
        });
        setTimeout(function () {
            subscriber.unsubscribe();
        }, 5000);
    };
    StudentGradeComponent.prototype.getStudentGrade = function (data) {
        return data = data[0].classStudent;
    };
    StudentGradeComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.classStudent.length, page);
        console.log(this.pager);
        //get current page of items
        this.pagedItems = this.classStudent.slice(this.pager.startIndex, this.pager.endIndex + 1);
        this.page = page;
        console.log(this.pagedItems);
    };
    return StudentGradeComponent;
}());
StudentGradeComponent = __decorate([
    core_1.Component({
        templateUrl: './app/feature-modules/class/class-detail/student-grade.component.html'
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.ActivatedRoute, class_service_1.ClassService, router_1.Router, uploader_service_1.Uploader, pager_service_1.PagerService])
], StudentGradeComponent);
exports.StudentGradeComponent = StudentGradeComponent;
//# sourceMappingURL=student-grade.component.js.map