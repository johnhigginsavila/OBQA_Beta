"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var evidence_report_component_1 = require("../feature-modules/dashboard/evidence-report/evidence-report.component");
var obqa_monitoring_report_component_1 = require("../feature-modules/dashboard/obqa-monitoring-report/obqa-monitoring-report.component");
var obqa_monitoring_report_print_component_1 = require("../feature-modules/dashboard/obqa-monitoring-report/obqa-monitoring-report-print.component");
var obqa_monitoring_report_status_component_1 = require("../feature-modules/dashboard/obqa-monitoring-report/obqa-monitoring-report-status.component");
var student_profile_summary_component_1 = require("../feature-modules/dashboard/student-profile/student-profile-summary.component");
var statistics_report_component_1 = require("../feature-modules/dashboard/statistics-report/statistics-report.component");
var cycle_report_component_1 = require("../feature-modules/dashboard/cycle-report/cycle-report.component");
var login_guard_1 = require("../shared/guards/login.guard");
var authorize_guard_1 = require("../shared/guards/authorize.guard");
exports.dashboardRouterConfig = [
    { path: 'dashboard/evidence-report', component: evidence_report_component_1.EvidenceReportComponent, canActivate: [login_guard_1.LoginGuard, authorize_guard_1.AuthorizeGuard] },
    { path: 'dashboard/obqa-monitoring-report', component: obqa_monitoring_report_component_1.ObqaMonitoringReportComponent, canActivate: [login_guard_1.LoginGuard, authorize_guard_1.AuthorizeGuard] },
    { path: 'dashboard/obqa-monitoring-report-print/:cycle/:term', component: obqa_monitoring_report_print_component_1.ObqaMonitoringReportPrintComponent, canActivate: [login_guard_1.LoginGuard, authorize_guard_1.AuthorizeGuard] },
    { path: 'dashboard/obqa-monitoring-report-status', component: obqa_monitoring_report_status_component_1.ObqaMonitoringReportStatusComponent, canActivate: [login_guard_1.LoginGuard, authorize_guard_1.AuthorizeGuard] },
    { path: 'dashboard/student-profile-summary', component: student_profile_summary_component_1.StudentProfileSummaryComponent, canActivate: [login_guard_1.LoginGuard, authorize_guard_1.AuthorizeGuard] },
    { path: 'dashboard/statistics-report', component: statistics_report_component_1.StatisticsReportComponent, canActivate: [login_guard_1.LoginGuard, authorize_guard_1.AuthorizeGuard] },
    { path: 'dashboard/cycle-report', component: cycle_report_component_1.CycleReportComponent, canActivate: [login_guard_1.LoginGuard, authorize_guard_1.AuthorizeGuard] }
];
//# sourceMappingURL=dashboard-router.config.js.map