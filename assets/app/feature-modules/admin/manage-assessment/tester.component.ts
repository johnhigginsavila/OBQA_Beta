import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    template:`
        <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
            <input type="text" formControlName="input1">
            <input type="text" formControlName="input2">
            <input type="submit">
        </form>
    `
})

export class TesterComponent {

    myForm:FormGroup;
    constructor(private fb:FormBuilder){}

    ngOnInit(){
        this.myForm = this.fb.group({
            input1 : new FormControl(''),
            input2: new FormControl('')
        }) 
    }

    onSubmit(){
        console.log(this.myForm.value)
    }
}