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
var upload_assessment_1 = require("../../../classes/upload/upload-assessment");
var assessment_service_1 = require("../../../shared/services/assessment.service");
var authentication_service_1 = require("../../../shared/services/authentication.service");
var AddAssessmentComponent = (function () {
    function AddAssessmentComponent(authenticationService, formBuilder, assessmentService, uploaderService) {
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.assessmentService = assessmentService;
        this.uploaderService = uploaderService;
        this.getCsrf = this.authenticationService.RequestCsrfToken();
        this.assessmentNewForm = this.formBuilder.group({
            sopi: new forms_1.FormControl('', forms_1.Validators.required),
            course: new forms_1.FormControl('', forms_1.Validators.required),
            assessmentLevel: new forms_1.FormControl('', forms_1.Validators.required),
            assessmentTask: new forms_1.FormControl('', forms_1.Validators.required),
            passingGrade: new forms_1.FormControl('', forms_1.Validators.required),
            target: new forms_1.FormControl('', forms_1.Validators.required),
            term: new forms_1.FormControl('', forms_1.Validators.required),
            academicYear: new forms_1.FormControl('', forms_1.Validators.required),
            assessmentCycle: new forms_1.FormControl('', forms_1.Validators.required),
            program: new forms_1.FormControl('', forms_1.Validators.required),
            _csrf: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    AddAssessmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCsrf
            .subscribe(function (data) {
            _this.session = JSON.parse(localStorage.getItem('session'));
            _this.program = _this.session.User.program;
            _this.assessmentNewForm = _this.formBuilder.group({
                sopi: new forms_1.FormControl('', forms_1.Validators.required),
                course: new forms_1.FormControl('', forms_1.Validators.required),
                assessmentLevel: new forms_1.FormControl('', forms_1.Validators.required),
                assessmentTask: new forms_1.FormControl('', forms_1.Validators.required),
                passingGrade: new forms_1.FormControl('', forms_1.Validators.required),
                target: new forms_1.FormControl('', forms_1.Validators.required),
                term: new forms_1.FormControl('', forms_1.Validators.required),
                academicYear: new forms_1.FormControl('', forms_1.Validators.required),
                assessmentCycle: new forms_1.FormControl('', forms_1.Validators.required),
                program: new forms_1.FormControl(_this.session.User.program),
                _csrf: new forms_1.FormControl(data._csrf, forms_1.Validators.required)
            });
        });
    };
    AddAssessmentComponent.prototype.onSubmit = function () {
        var _this = this;
        this.assessmentNew = this.assessmentNewForm.value;
        this.assessmentService.CreateAssessment(this.assessmentNew)
            .subscribe(function (data) { console.log(data); _this.ngOnInit; }, function (error) { return console.log(error); });
        //console.log(this.assessmentNew);
    };
    AddAssessmentComponent.prototype.onUploadFile = function () {
        var _this = this;
        this.getCsrf
            .subscribe(function (data) {
            _this.session = JSON.parse(localStorage.getItem('session'));
            _this.jwt = _this.session.token;
            var uploadFile = window.document.getElementById('file').files[0];
            var sopiUploadItem = new upload_assessment_1.AssessmentUploadItem(uploadFile);
            sopiUploadItem.headers = { 'Authorization': 'Bearer ' + _this.jwt };
            sopiUploadItem.name = 'file';
            sopiUploadItem.formData = { FormDataKey: 'file', program: _this.program, _csrf: data._csrf };
            _this.uploaderService.onSuccessUpload = function (item, response, status, headers) {
                console.log(response);
            };
            _this.uploaderService.onErrorUpload = function (item, response, status, headers) {
                console.log('error');
            };
            _this.uploaderService.onCompleteUpload = function (item, response, status, headers) {
                console.log(response);
            };
            _this.uploaderService.upload(sopiUploadItem);
        }, function (error) { return console.log(error); });
    };
    return AddAssessmentComponent;
}());
AddAssessmentComponent = __decorate([
    core_1.Component({
        templateUrl: './app/feature-modules/admin/manage-assessment/add-assessment.component.html',
        styleUrls: ['./app/feature-modules/user/new/user-new.component.css']
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, forms_1.FormBuilder, assessment_service_1.AssessmentService, uploader_service_1.Uploader])
], AddAssessmentComponent);
exports.AddAssessmentComponent = AddAssessmentComponent;
//# sourceMappingURL=add-assessment.component.js.map