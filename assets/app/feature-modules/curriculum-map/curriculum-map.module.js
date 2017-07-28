"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var curriculum_map_component_1 = require("./curriculum-map.component");
var CurriculumMapModule = (function () {
    function CurriculumMapModule() {
    }
    return CurriculumMapModule;
}());
CurriculumMapModule = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [curriculum_map_component_1.CurriculumMapComponent],
        providers: []
    })
], CurriculumMapModule);
exports.CurriculumMapModule = CurriculumMapModule;
//# sourceMappingURL=curriculum-map.module.js.map