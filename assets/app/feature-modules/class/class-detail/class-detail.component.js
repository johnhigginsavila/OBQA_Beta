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
var class_service_1 = require("../../../shared/services/class.service");
var ClassDetailComponent = (function () {
    function ClassDetailComponent(route, classService, router) {
        var _this = this;
        this.route = route;
        this.classService = classService;
        this.router = router;
        this.route.params.subscribe(function (params) { _this.id = params.id; _this.instructor = params.instructor; });
        console.log(this.id);
        this.getClass = this.classService.GetClassById(this.id, this.instructor);
    }
    ClassDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.id = params.id; _this.instructor = params.instructor; });
        this.getClass.subscribe(function (data) { return _this.myClass = data; }, function (error) { return console.log(error); });
    };
    ClassDetailComponent.prototype.onStudentGrades = function (classId) {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.router.navigate(['class/student-grade', params.instructor, params.id]); });
    };
    ClassDetailComponent.prototype.onEvidences = function (classId) {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.router.navigate(['class/evidence', params.instructor, params.id]); });
    };
    return ClassDetailComponent;
}());
ClassDetailComponent = __decorate([
    core_1.Component({
        templateUrl: './app/feature-modules/class/class-detail/class-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, class_service_1.ClassService, router_1.Router])
], ClassDetailComponent);
exports.ClassDetailComponent = ClassDetailComponent;
//# sourceMappingURL=class-detail.component.js.map