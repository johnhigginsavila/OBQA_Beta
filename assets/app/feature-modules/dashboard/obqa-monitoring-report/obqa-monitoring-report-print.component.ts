import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf} from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { AssessmentService } from '../../../shared/services/assessment.service';
import { GradeService } from '../../../shared/services/grade.service';
import { IAssessmentStatus } from '../../../interfaces/assessment-status.interface';
import { ISession } from '../../../interfaces/session.interface';
import { IStudentChart } from '../../../interfaces/student-chart.interface';
import { IAssessmentReport } from '../../../interfaces/assessment-report.interface';

@Component({
    template: `
        <h1>OBQA MONITORING REPORT</h1>
        <div class="container-fluid">
        <div class="row">
                <div>     
                    <table class="table table-bordered table-hover">
                    <thead>
                        <tr class="mycolor">
                        <th>SOPI</th>
                            <th>Course</th>
                            <th>Assessment Level</th>
                            <th>Task</th>
                            <th>Target</th>
                            <th>Term</th>
                            <th>A.Y.</th>
                            <th>Cycle</th>
                            <th>Performance</th>
                            <th style="width: 20%">Improvement Plan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let report of assessmentReport" >
                            <td *ngIf="isCycle(report.assessmentCycle)">{{report.sopi}}</td>
                            <td *ngIf="isCycle(report.assessmentCycle)">{{report.course}}</td>
                            <td *ngIf="isCycle(report.assessmentCycle)">{{report.assessmentLevel}}</td>
                            <td *ngIf="isCycle(report.assessmentCycle)">{{report.assessmentTask}}</td>
                            <td *ngIf="isCycle(report.assessmentCycle)">{{report.target | assessmentTarget : report.passingGrade}}</td><!-- use pipe here -->
                            <td *ngIf="isCycle(report.assessmentCycle) ">{{report.term}}</td>
                            <td *ngIf="isCycle(report.assessmentCycle) ">{{report.academicYear}}</td>
                            <td *ngIf="isCycle(report.assessmentCycle)">{{report.assessmentCycle}}</td>
                            <td *ngIf="isCycle(report.assessmentCycle) ">{{report.performance | percent}}</td>
                            <td *ngIf="isCycle(report.assessmentCycle)">{{report.improvementPlan}}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    `
})

export class ObqaMonitoringReportPrintComponent {
    private assessmentReport:IAssessmentReport[];
    private cycle:number;
    private term:number;
    private session:ISession;
    private program:number;


    constructor(private assessmentService:AssessmentService, private route:ActivatedRoute){
        this.route.params.subscribe(params => {this.cycle = params.cycle; this.term = params.term });
        this.session = JSON.parse(localStorage.getItem('session'));
        this.program = this.session.User.program;
    }


    ngOnInit(){
        console.log(this.cycle)
        this.session = JSON.parse(localStorage.getItem('session'));
        this.program = this.session.User.program;
        this.assessmentService.GetObqaMonitoringReportPerProgramPerCyclePerTerm(this.program, this.cycle, this.term)
            .subscribe(
                data => {
                    console.log(this.term);
                    this.assessmentReport = data;
                },
                error => console.log(error),
                () => {
                    setTimeout(function() {
                        window.print();
                        window.close();
                        window.location.replace('#/dashboard/obqa-monitoring-report');
                    }, 1000);
                    
                }
            )
           
    }

    isCycle(cycle:number){
        if(cycle == this.cycle){
            return true;
        }else {
            return false;
        }
    }

}