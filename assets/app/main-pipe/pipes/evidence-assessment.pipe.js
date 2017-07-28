"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EvidenceAssessmentPipe = (function () {
    function EvidenceAssessmentPipe() {
    }
    EvidenceAssessmentPipe.prototype.transform = function (evidence, assessmentClass, dataDescription) {
        function getEvidence(item, index, array) {
            if (array[index].assessmentClass == assessmentClass && array[index].dataDescription == dataDescription) {
                array[0] = array[index];
            }
        }
        if (evidence.length != 0) {
            evidence.forEach(getEvidence);
            if (evidence[0].assessmentClass == assessmentClass && evidence[0].dataDescription == dataDescription) {
                return evidence[0].fileName;
            }
            else {
                return "";
            }
        }
        else {
            return "";
        }
        // return evidence[0].fileName;
    };
    return EvidenceAssessmentPipe;
}());
EvidenceAssessmentPipe = __decorate([
    core_1.Pipe({
        name: 'evidenceAssessment'
    })
], EvidenceAssessmentPipe);
exports.EvidenceAssessmentPipe = EvidenceAssessmentPipe;
//# sourceMappingURL=evidence-assessment.pipe.js.map