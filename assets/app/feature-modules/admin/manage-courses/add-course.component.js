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
var forms_1 = require("@angular/forms");
var uploader_service_1 = require("../../../shared/services/uploader.service");
var upload_course_1 = require("../../../classes/upload/upload-course");
var authentication_service_1 = require("../../../shared/services/authentication.service");
var course_service_1 = require("../../../shared/services/course.service");
var AddCourseComponent = (function () {
    function AddCourseComponent(authenticationService, formBuilder, courseService, uploaderService) {
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.courseService = courseService;
        this.uploaderService = uploaderService;
        this.courseNewForm = this.formBuilder.group({
            courseCode: new forms_1.FormControl('', forms_1.Validators.required),
            courseName: new forms_1.FormControl('', forms_1.Validators.required),
            description: new forms_1.FormControl('', forms_1.Validators.required),
            _csrf: new forms_1.FormControl('', forms_1.Validators.required)
        });
        this.session = JSON.parse(localStorage.getItem('session'));
        this.program = this.session.User.program;
        this.getCsrf = this.authenticationService.RequestCsrfToken();
    }
    AddCourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCsrf.subscribe(function (data) {
            _this.courseNewForm = _this.formBuilder.group({
                courseCode: new forms_1.FormControl('', forms_1.Validators.required),
                courseName: new forms_1.FormControl('', forms_1.Validators.required),
                description: new forms_1.FormControl('', forms_1.Validators.required),
                program: new forms_1.FormControl(_this.program),
                _csrf: new forms_1.FormControl(data._csrf, forms_1.Validators.required)
            });
        }, function (error) { return console.log(error); });
    };
    AddCourseComponent.prototype.onSubmit = function () {
        this.courseNew = this.courseNewForm.value;
        console.log(this.courseNew);
    };
    AddCourseComponent.prototype.uploadFile = function () {
        var _this = this;
        this.getCsrf.subscribe(function (data) {
            var uploadFile = window.document.getElementById('file').files[0];
            var courseUploadItem = new upload_course_1.CourseUploadItem(uploadFile);
            courseUploadItem.name = 'file';
            courseUploadItem.formData = { FormDataKey: 'file', program: _this.program, _csrf: data._csrf };
            _this.uploaderService.onSuccessUpload = function (item, response, status, headers) {
                console.log(response);
            };
            _this.uploaderService.onErrorUpload = function (item, response, status, headers) {
                console.log('error');
            };
            _this.uploaderService.onCompleteUpload = function (item, response, status, headers) {
                console.log(response);
            };
            _this.uploaderService.upload(courseUploadItem);
        }, function (error) { return console.log(error); });
    };
    return AddCourseComponent;
}());
AddCourseComponent = __decorate([
    core_1.Component({
        templateUrl: './app/feature-modules/admin/manage-courses/add-course.component.html',
        styleUrls: ['./app/feature-modules/user/new/user-new.component.css']
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, forms_1.FormBuilder, course_service_1.CourseService, uploader_service_1.Uploader])
], AddCourseComponent);
exports.AddCourseComponent = AddCourseComponent;
//# sourceMappingURL=add-course.component.js.map