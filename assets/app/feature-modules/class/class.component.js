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
var class_service_1 = require("../../shared/services/class.service");
var ClassComponent = (function () {
    function ClassComponent(classService, router, route) {
        this.classService = classService;
        this.router = router;
        this.route = route;
        this.session = JSON.parse(localStorage.getItem('session'));
        this.program = this.session.User.program;
        this.instructor = this.session.User.id;
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
    ClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session = JSON.parse(localStorage.getItem('session'));
        this.program = this.session.User.program;
        this.instructor = this.session.User.id;
        this.classService.GetFacultyClasses(this.program, this.selectedCycle, this.selectedTerm, this.instructor)
            .subscribe(function (data) { return _this.classes = data; }, function (err) { return console.log(err); }, function () { return console.log(_this.classes); });
        /*setTimeout(function(){
            getFacultyClasses.unsubscribe()
        },30000) */
    };
    ClassComponent.prototype.change = function () {
        this.ngOnInit();
    };
    ClassComponent.prototype.onClassSelect = function (id, instructor) {
        this.router.navigate(['class', instructor, id]);
    };
    return ClassComponent;
}());
ClassComponent = __decorate([
    core_1.Component({
        templateUrl: './app/feature-modules/class/class.component.html'
    }),
    __metadata("design:paramtypes", [class_service_1.ClassService, router_1.Router, router_1.ActivatedRoute])
], ClassComponent);
exports.ClassComponent = ClassComponent;
//# sourceMappingURL=class.component.js.map