"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng2_charts_1 = require("ng2-charts");
var dashboard_component_1 = require("./dashboard.component");
var evidence_report_component_1 = require("./evidence-report/evidence-report.component");
var obqa_monitoring_report_component_1 = require("./obqa-monitoring-report/obqa-monitoring-report.component");
var obqa_monitoring_report_print_component_1 = require("./obqa-monitoring-report/obqa-monitoring-report-print.component");
var obqa_monitoring_report_status_component_1 = require("./obqa-monitoring-report/obqa-monitoring-report-status.component");
var student_profile_summary_component_1 = require("./student-profile/student-profile-summary.component");
var statistics_report_component_1 = require("./statistics-report/statistics-report.component");
var cycle_report_component_1 = require("./cycle-report/cycle-report.component");
var main_pipe_module_1 = require("../../main-pipe/main-pipe.module");
var dashboard_router_config_1 = require("../../config/dashboard-router.config");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(dashboard_router_config_1.dashboardRouterConfig),
            common_1.CommonModule,
            ng2_charts_1.ChartsModule,
            main_pipe_module_1.MainPipeModule,
            forms_1.FormsModule
        ],
        declarations: [
            dashboard_component_1.DashboardComponent,
            evidence_report_component_1.EvidenceReportComponent,
            obqa_monitoring_report_component_1.ObqaMonitoringReportComponent,
            obqa_monitoring_report_print_component_1.ObqaMonitoringReportPrintComponent,
            obqa_monitoring_report_status_component_1.ObqaMonitoringReportStatusComponent,
            student_profile_summary_component_1.StudentProfileSummaryComponent,
            statistics_report_component_1.StatisticsReportComponent,
            cycle_report_component_1.CycleReportComponent
        ],
        providers: []
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map