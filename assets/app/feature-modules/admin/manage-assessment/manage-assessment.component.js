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
var index_1 = require("../../../animations/index");
var assessment_service_1 = require("../../../shared/services/assessment.service");
var authentication_service_1 = require("../../../shared/services/authentication.service");
var pager_service_1 = require("../../../shared/services/pager.service");
var ManageAssessmentComponent = (function () {
    function ManageAssessmentComponent(assessmentService, formBuilder, authenticationService, pagerService) {
        this.assessmentService = assessmentService;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.pagerService = pagerService;
        this.pager = {};
        //this.assessmentService.GetAssessmentPerProgramPerCycle(this.selectedCycle, this.program, this.selectedTerm);
        this.addImprovementPlanForm = this.formBuilder.group({
            id: new forms_1.FormControl(this.assessmentId, forms_1.Validators.required),
            improvementPlan: new forms_1.FormControl('', forms_1.Validators.required)
        });
        this.getCsrf = this.authenticationService.RequestCsrfToken();
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
    ManageAssessmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session = JSON.parse(localStorage.getItem('session'));
        this.program = this.session.User.program;
        this.assessmentService.GetAssessmentPerProgram(this.program, this.selectedCycle, this.selectedTerm)
            .subscribe(function (data) {
            _this.assessments = data;
            _this.setPage(_this.page);
        }, function (error) {
            console.log(error);
        });
        this.getCsrf.subscribe(function (data) {
            _this.addImprovementPlanForm = _this.formBuilder.group({
                id: new forms_1.FormControl(_this.assessmentId, forms_1.Validators.required),
                improvementPlan: new forms_1.FormControl('', forms_1.Validators.required),
                _csrf: new forms_1.FormControl(data._csrf, forms_1.Validators.required)
            });
        }, function (error) { return console.log(error); });
    };
    ManageAssessmentComponent.prototype.change = function () {
        this.page = 1;
        this.setPage(this.page);
        this.ngOnInit();
    };
    ManageAssessmentComponent.prototype.isCycle = function (cycle) {
        if (cycle == this.selectedCycle) {
            return true;
        }
        else {
            return false;
        }
    };
    ManageAssessmentComponent.prototype.getAssessmentId = function (id) {
        var _this = this;
        this.assessmentId = id;
        this.getCsrf
            .subscribe(function (data) {
            _this.addImprovementPlanForm = _this.formBuilder.group({
                id: new forms_1.FormControl(_this.assessmentId, forms_1.Validators.required),
                improvementPlan: new forms_1.FormControl('', forms_1.Validators.required),
                _csrf: new forms_1.FormControl(data._csrf, forms_1.Validators.required)
            });
        }, function (error) { return console.log(error); });
    };
    ManageAssessmentComponent.prototype.submitImprovementPlan = function () {
        var _this = this;
        this.assessmentService.AddImprovementPlan(this.addImprovementPlanForm.value.id, this.addImprovementPlanForm.value.improvementPlan, this.addImprovementPlanForm.value._csrf)
            .subscribe(function (response) { return console.log(response); }, function (err) { return console.log(err); }, function () { return _this.ngOnInit(); });
    };
    ManageAssessmentComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.assessments.length, page);
        console.log(this.pager);
        //get current page of items
        this.pagedItems = this.assessments.slice(this.pager.startIndex, this.pager.endIndex + 1);
        this.page = page;
        console.log(this.pagedItems);
    };
    return ManageAssessmentComponent;
}());
ManageAssessmentComponent = __decorate([
    core_1.Component({
        templateUrl: './app/feature-modules/admin/manage-assessment/manage-assessment.component.html',
        animations: [index_1.fadeInAnimation]
    }),
    __metadata("design:paramtypes", [assessment_service_1.AssessmentService, forms_1.FormBuilder, authentication_service_1.AuthenticationService, pager_service_1.PagerService])
], ManageAssessmentComponent);
exports.ManageAssessmentComponent = ManageAssessmentComponent;
//# sourceMappingURL=manage-assessment.component.js.map