import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder, NgModel } from '@angular/forms';

import { NgIf, NgFor } from '@angular/common';

import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { SessionService } from './shared/services/session.service';

import { AuthenticationService } from './shared/services/authentication.service';

import { ISession } from './interfaces/session.interface';

interface IChanges{[key:string]:SimpleChange};



@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit{ 

    getCsrf:Observable<any>;
    session:ISession;
    login:boolean;
    allowed:boolean;
    sessionNewForm:FormGroup;
    currentUrl:string;

    constructor(private sessionService:SessionService, private formBuilder:FormBuilder, private _router:Router, private authenticationService:AuthenticationService){
       this.printView();

    }

    ngOnInit(){
        
    }

    ngDoCheck(){
        this.session = JSON.parse(localStorage.getItem('session'));
        this.login = this.isLogin(this.session);
        this.allowed = this.isAllowed(this.session);
        //console.log("There is something happened");
        
    }

    printView():boolean{
        return true;
    } 

    logout(){
        this.sessionService.SessionDestroy();
    }

    isAllowed(session:ISession):boolean{
        if (!session){
            return false
        }
        else{
            if (this.session.User.userRestriction < 5){
                return true;
            }else{
                return false;
            }
        }
            
    }

    isLogin(session:ISession):boolean{
        if(!session){
            return false;
        }
        else{
            return true;
        }
    }

 

    
}
