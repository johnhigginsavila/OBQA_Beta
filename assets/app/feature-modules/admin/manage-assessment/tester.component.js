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
var TesterComponent = (function () {
    function TesterComponent(fb) {
        this.fb = fb;
    }
    TesterComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            input1: new forms_1.FormControl(''),
            input2: new forms_1.FormControl('')
        });
    };
    TesterComponent.prototype.onSubmit = function () {
        console.log(this.myForm.value);
    };
    return TesterComponent;
}());
TesterComponent = __decorate([
    core_1.Component({
        template: "\n        <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n            <input type=\"text\" formControlName=\"input1\">\n            <input type=\"text\" formControlName=\"input2\">\n            <input type=\"submit\">\n        </form>\n    "
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], TesterComponent);
exports.TesterComponent = TesterComponent;
//# sourceMappingURL=tester.component.js.map