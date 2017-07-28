"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StudentGradePipe = (function () {
    function StudentGradePipe() {
    }
    StudentGradePipe.prototype.transform = function (grade, assessment) {
        function getGrade(item, index, array) {
            if (array[index].assessment == assessment) {
                array[0] = array[index];
            }
        }
        grade.forEach(getGrade);
        return grade[0].grade;
        /*if(grade[0].assessment == assessment){
            return grade[0].grade;
        }else{
            return 0;
        }*/
    };
    return StudentGradePipe;
}());
StudentGradePipe = __decorate([
    core_1.Pipe({
        name: 'studentGrade'
    })
], StudentGradePipe);
exports.StudentGradePipe = StudentGradePipe;
//# sourceMappingURL=student-grade.pipe.js.map