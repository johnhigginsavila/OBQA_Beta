import { RouterModule } from '@angular/router'; 

import { Component, OnChanges, SimpleChange} from '@angular/core';

import { NgIf } from '@angular/common';


import { ISession } from '../../interfaces/session.interface';

import { SessionService } from '../../shared/services/session.service';
interface IChanges{[key:string]:SimpleChange};
@Component({
    templateUrl: './app/feature-modules/home/home.component.html'
})
export class HomeComponent {

    private session:ISession;
    public pageTitle: string = 'GCOE-OBQA';

    constructor( private sessionService:SessionService){}

    ngOnInit(){
        this.session = JSON.parse(localStorage.getItem('session'))
           
    }

    ngDoCheck(){
        this.session = JSON.parse(localStorage.getItem('session'))
        this.isLogin();
    }

    isLogin():boolean{
        if(!this.session){
            return false;
        }
        else{
            return true;
        }
    }
}