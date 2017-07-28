import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder, NgModel } from '@angular/forms';

import { NgIf, NgFor } from '@angular/common';

import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { SessionService } from './shared/services/session.service';

import { AuthenticationService } from './shared/services/authentication.service';

import { ISession } from './interfaces/session.interface';


@Component({
    selector:'log-in',
    template:`
        <form class='navbar-form navbar-right form-signin' id='sign-in-form' [formGroup]='sessionNewForm' (ngSubmit)='onSubmit()'>
            <div class="form-group input-group-sm">
                    <input type="text" class="form-control" placeholder="Email" formControlName="email" required >
                </div>
                <div class="form-group input-group-sm">
                    <input type="password" class="form-control" placeholder="Password" formControlName="password" required>
                </div>
                <div class="form-group input-group-sm">
                    <input class="btn btn-primary" type="submit" [disabled]="!sessionNewForm.valid" value="Login">
                </div>
         </form>
    `
    
})

export class LogInComponent{
    session:ISession;
    sessionNewForm:FormGroup;

    

    constructor(private formBuilder:FormBuilder, private sessionService:SessionService, private _router:Router, private authenticationService:AuthenticationService){
        
            this.sessionNewForm = this.formBuilder.group({
                email: new FormControl('',Validators.required),
                password: new FormControl('',Validators.required),
                _csrf: new FormControl('', Validators.required)
            });
            this.sessionService.SessionCreate2(this.sessionNewForm.value)
    }

    ngOnInit(){
        this.authenticationService.RequestCsrfToken()
            .subscribe(
                data => {
                    this.sessionNewForm = this.formBuilder.group({
                        email: new FormControl('',Validators.required),
                        password: new FormControl('',Validators.required),
                        _csrf: new FormControl(data._csrf, Validators.required)
                    });
                },
                error => console.log(error)
            )            
    }


    onSubmit(){
        let submit = this.sessionService.SessionCreate2(this.sessionNewForm.value);

         setTimeout(function(){
            submit.unsubscribe()
         }, 500)
            
    }
}