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
var upload_class_1 = require("../../../classes/upload/upload-class");
var authentication_service_1 = require("../../../shared/services/authentication.service");
var class_service_1 = require("../../../shared/services/class.service");
var AddClassComponent = (function () {
    function AddClassComponent(authenticationService, formBuilder, classService, uploaderService) {
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.classService = classService;
        this.uploaderService = uploaderService;
        var session = JSON.parse(localStorage.getItem('session'));
        this.program = session.User.program;
        this.classNewForm = this.formBuilder.group({
            course: new forms_1.FormControl('', forms_1.Validators.required),
            term: new forms_1.FormControl('', forms_1.Validators.required),
            academicYear: new forms_1.FormControl('', forms_1.Validators.required),
            firstnameInstructor: new forms_1.FormControl('', forms_1.Validators.required),
            lastnameInstructor: new forms_1.FormControl('', forms_1.Validators.required),
            program: new forms_1.FormControl(this.program),
            cycle: new forms_1.FormControl('', forms_1.Validators.required),
            _csrf: new forms_1.FormControl('', forms_1.Validators.required)
        });
        this.getCsrf = this.authenticationService.RequestCsrfToken();
        this.session = JSON.parse(localStorage.getItem('session'));
        this.jwt = this.session.token;
    }
    AddClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCsrf
            .subscribe(function (data) {
            var session = JSON.parse(localStorage.getItem('session'));
            _this.program = session.User.program;
            _this.classNewForm = _this.formBuilder.group({
                course: new forms_1.FormControl('', forms_1.Validators.required),
                term: new forms_1.FormControl('', forms_1.Validators.required),
                academicYear: new forms_1.FormControl('', forms_1.Validators.required),
                firstnameInstructor: new forms_1.FormControl('', forms_1.Validators.required),
                lastnameInstructor: new forms_1.FormControl('', forms_1.Validators.required),
                cycle: new forms_1.FormControl('', forms_1.Validators.required),
                program: new forms_1.FormControl(_this.program),
                _csrf: new forms_1.FormControl(data._csrf, forms_1.Validators.required)
            });
        }, function (error) { return console.log(error); });
    };
    AddClassComponent.prototype.onSubmit = function () {
        var _this = this;
        var addClass = this.classService.AddClass(this.classNewForm.value)
            .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); }, function () { return _this.ngOnInit; });
        setTimeout(function () {
            addClass.unsubscribe();
        }, 5000);
    };
    AddClassComponent.prototype.onUploadFile = function () {
        var _this = this;
        this.getCsrf.subscribe(function (data) {
            _this.session = JSON.parse(localStorage.getItem('session'));
            _this.jwt = _this.session.token;
            var uploadFile = window.document.getElementById('file').files[0];
            var classUploadItem = new upload_class_1.ClassUploadItem(uploadFile);
            classUploadItem.headers = { 'Authorization': 'Bearer ' + _this.jwt };
            classUploadItem.name = 'file';
            classUploadItem.formData = { FormDataKey: 'file', program: _this.program, _csrf: data._csrf };
            _this.uploaderService.onSuccessUpload = function (item, response, status, headers) {
                console.log(response);
            };
            _this.uploaderService.onErrorUpload = function (item, response, status, headers) {
                console.log('error');
            };
            _this.uploaderService.onCompleteUpload = function (item, response, status, headers) {
                console.log(response);
                _this.ngOnInit();
            };
            _this.uploaderService.upload(classUploadItem);
        }, function (error) { return console.log(error); });
    };
    return AddClassComponent;
}());
AddClassComponent = __decorate([
    core_1.Component({
        templateUrl: './app/feature-modules/admin/manage-classes/add-class.component.html',
        styleUrls: ['./app/feature-modules/user/new/user-new.component.css']
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, forms_1.FormBuilder, class_service_1.ClassService, uploader_service_1.Uploader])
], AddClassComponent);
exports.AddClassComponent = AddClassComponent;
//# sourceMappingURL=add-class.component.js.map