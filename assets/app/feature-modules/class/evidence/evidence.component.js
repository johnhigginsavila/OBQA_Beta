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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var class_service_1 = require("../../../shared/services/class.service");
var evidence_service_1 = require("../../../shared/services/evidence.service");
var authentication_service_1 = require("../../../shared/services/authentication.service");
var uploader_service_1 = require("../../../shared/services/uploader.service");
var upload_evidence_1 = require("../../../classes/upload/upload-evidence");
var EvidenceComponent = (function () {
    function EvidenceComponent(authenticationService, route, classService, router, uploaderService, sanitizer, evidenceService) {
        this.authenticationService = authenticationService;
        this.route = route;
        this.classService = classService;
        this.router = router;
        this.uploaderService = uploaderService;
        this.sanitizer = sanitizer;
        this.evidenceService = evidenceService;
        var id;
        var instructor;
        this.route.params.subscribe(function (params) { id = params.id; instructor = params.instructor; });
        console.log(id);
        this.getClass = this.classService.GetClassById(id, instructor);
        this.finalEvidenceFileName = this.evidenceFileName;
        this.getCsrf = this.authenticationService.RequestCsrfToken();
        this.evidenceService.GetEvidenceByAssessmentClassIdAndDataDescription(0, '', '');
        /*setTimeout(function(){
            getClass.unsubscribe();
        }, 15000)*/
    }
    EvidenceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session = JSON.parse(localStorage.getItem('session'));
        this.user = this.session.User;
        this.getClass
            .subscribe(function (data) { _this.myClass = data; _this.classId = _this.myClass[0].id; }, function (error) { return console.log(error); }, function () { return console.log(_this.myClass); });
        this.finalEvidenceFileName = this.evidenceFileName;
    };
    EvidenceComponent.prototype.ngDoCheck = function () {
        this.finalEvidenceFileName = this.evidenceFileName;
    };
    EvidenceComponent.prototype.fileUrl = function () {
        if (!this.finalEvidenceFileName) {
            return this.sanitizer.bypassSecurityTrustResourceUrl('/images/uploads/' + this.evidenceFileName);
        }
        else {
            return this.sanitizer.bypassSecurityTrustResourceUrl('/images/uploads/' + this.finalEvidenceFileName);
        }
    };
    EvidenceComponent.prototype.onUploadFile = function () {
        var _this = this;
        console.log(this.evidenceCode);
        this.getCsrf.subscribe(function (data) {
            var uploadFile = window.document.getElementById('my-file-selector').files[0];
            var evidenceUploadItem = new upload_evidence_1.EvidenceUploadItem(uploadFile);
            //evidenceUploadItem.name = 'file';
            evidenceUploadItem.formData = {
                FormDataKey: 'file',
                classId: _this.classId,
                assessmentClass: _this.evidenceCode.assessmentClass,
                assessment: _this.evidenceCode.assessment,
                programSopi: _this.evidenceCode.programSopi,
                programCourse: _this.evidenceCode.programCourse,
                dataDescription: _this.evidenceCode.dataDescription,
                _csrf: data._csrf
            };
            _this.uploaderService.onSuccessUpload = function (item, response, status, headers) {
                console.log(response);
            };
            _this.uploaderService.onErrorUpload = function (item, response, status, headers) {
                console.log(response);
            };
            _this.uploaderService.onCompleteUpload = function (item, response, status, headers) {
                console.log(response);
                _this.ngOnInit();
            };
            _this.uploaderService.upload(evidenceUploadItem);
        });
    };
    EvidenceComponent.prototype.onClick = function (classId, assessmentClassId, assessmentId, programSopiId, programCourseId, dataDescription) {
        this.evidenceCode = {
            classId: classId,
            assessmentClass: assessmentClassId,
            assessment: assessmentId,
            programSopi: programSopiId,
            programCourse: programCourseId,
            dataDescription: dataDescription
        };
    };
    EvidenceComponent.prototype.onFilePreview = function (assessmentClassId, dataDescription) {
        var _this = this;
        var subscriber = this.getCsrf
            .subscribe(function (data) {
            _this.evidenceService.GetEvidenceByAssessmentClassIdAndDataDescription(assessmentClassId, dataDescription, data._csrf)
                .subscribe(function (data) {
                console.log(data.fileName);
                _this.evidenceFileName = data.fileName;
            });
        });
        setTimeout(function () {
            subscriber.unsubscribe();
        }, 5000);
    };
    return EvidenceComponent;
}());
EvidenceComponent = __decorate([
    core_1.Component({
        templateUrl: './app/feature-modules/class/evidence/evidence.component.html'
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.ActivatedRoute, class_service_1.ClassService, router_1.Router, uploader_service_1.Uploader, platform_browser_1.DomSanitizer, evidence_service_1.EvidenceService])
], EvidenceComponent);
exports.EvidenceComponent = EvidenceComponent;
//# sourceMappingURL=evidence.component.js.map