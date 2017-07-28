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
var upload_sopi_1 = require("../../../classes/upload/upload-sopi");
var sopi_service_1 = require("../../../shared/services/sopi.service");
var authentication_service_1 = require("../../../shared/services/authentication.service");
var AddSopiComponent = (function () {
    function AddSopiComponent(authenticationService, formBuilder, sopiService, uploaderService) {
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.sopiService = sopiService;
        this.uploaderService = uploaderService;
        this.session = JSON.parse(localStorage.getItem('session'));
        this.program = this.session.User.program;
        this.getCsrf = this.authenticationService.RequestCsrfToken();
        this.sopiNewForm = this.formBuilder.group({
            soCode: new forms_1.FormControl('', forms_1.Validators.required),
            sopiCode: new forms_1.FormControl('', forms_1.Validators.required),
            description: new forms_1.FormControl('', forms_1.Validators.required),
            program: new forms_1.FormControl(this.program),
            _csrf: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    AddSopiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session = JSON.parse(localStorage.getItem('session'));
        this.program = this.session.User.program;
        var subscriber = this.getCsrf.subscribe(function (data) {
            _this.sopiNewForm = _this.formBuilder.group({
                soCode: new forms_1.FormControl('', forms_1.Validators.required),
                sopiCode: new forms_1.FormControl('', forms_1.Validators.required),
                description: new forms_1.FormControl('', forms_1.Validators.required),
                program: new forms_1.FormControl(_this.program),
                _csrf: new forms_1.FormControl(data._csrf, forms_1.Validators.required)
            });
        }, function (err) { return console.log(err); });
    };
    AddSopiComponent.prototype.onSubmit = function () {
        this.sopiNew = this.sopiNewForm.value;
        var addSopi = this.sopiService.AddSopi(this.sopiNew)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        setTimeout(function () {
            addSopi.unsubscribe();
        }, 15000);
    };
    AddSopiComponent.prototype.onUploadFile = function () {
        var _this = this;
        var subscriber = this.getCsrf.subscribe(function (data) {
            var uploadFile = window.document.getElementById('file').files[0];
            var sopiUploadItem = new upload_sopi_1.SopiUploadItem(uploadFile);
            sopiUploadItem.name = 'file';
            sopiUploadItem.formData = { FormDataKey: 'file', program: _this.program, _csrf: data._csrf };
            _this.uploaderService.onSuccessUpload = function (item, response, status, headers) {
                console.log(response);
            };
            _this.uploaderService.onErrorUpload = function (item, response, status, headers) {
                console.log('error');
            };
            _this.uploaderService.onCompleteUpload = function (item, response, status, headers) {
                _this.ngOnInit();
            };
            _this.uploaderService.upload(sopiUploadItem);
        }, function (err) { return console.log(err); });
        setTimeout(function () {
            subscriber.unsubscribe();
        }, 15000);
    };
    return AddSopiComponent;
}());
AddSopiComponent = __decorate([
    core_1.Component({
        templateUrl: './app/feature-modules/admin/manage-sopi/add-sopi.component.html',
        styleUrls: ['./app/feature-modules/user/new/user-new.component.css']
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, forms_1.FormBuilder, sopi_service_1.SopiService, uploader_service_1.Uploader])
], AddSopiComponent);
exports.AddSopiComponent = AddSopiComponent;
//# sourceMappingURL=add-sopi.component.js.map