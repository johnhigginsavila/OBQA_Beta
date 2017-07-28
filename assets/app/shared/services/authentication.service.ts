import { Injectable } from '@angular/core';
import { Http, Response, Request, Jsonp, URLSearchParams, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

import {ISession} from '../../interfaces/session.interface';

@Injectable()

export class AuthenticationService {
    private session:ISession;
    private csrfUrl:string = 'csrfToken';

    constructor(private http:Http){
         this.session = JSON.parse(localStorage.getItem('session'));

    }

    RequestCsrfToken():Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions(headers);
        return this.http.get(this.csrfUrl, options)
                    .map(response => response.json())
    }

    GetCsrfToken():string{
        if(localStorage.getItem('_csrf') == undefined){
            this.RequestCsrfToken()
            .subscribe(
                data => {localStorage.setItem('_csrf', data._csrf); return data._csrf},
                err => console.log(err),
                () => {return localStorage.getItem('_csrf');}
            )
        }else{
            return localStorage.getItem('_csrf')
        }
        
    }

    
}