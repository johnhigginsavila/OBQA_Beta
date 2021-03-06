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

import { IProgramSopi } from '../../interfaces/program-sopi.interface';
import { ISopiNew } from '../../interfaces/sopi-new.interface';

@Injectable()

export class SopiService {
    private getSopiUrl:string = 'sopi';
    private addSopiUrl:string = 'sopi/create';
    constructor(private _http: Http, private jsonp: Jsonp){}

    GetAllSopi():Observable<IProgramSopi[]>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions(headers);
        return this._http.get(this.getSopiUrl, options)
            .map(response=>response.json())
            .map(data => this.sortSopiByName(data))
    }

    GetSopiByProgram(program:number):Observable<IProgramSopi[]>{
        return this.GetAllSopi()
                    .map(data => this.filterByProgram(data, program))
    }

    AddSopi(sopiNew:ISopiNew):Observable<IProgramSopi>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions(headers);
        return this._http.post(this.addSopiUrl, sopiNew, options)
            .map(response => response.json())
    }

    private filterByProgram(data:any[], program:number):any[]{
        let newData:any[] = [];
        data.forEach((item:any, index:number, array:any[]) => {
            if(item.program == program){
                newData.push(item);
            }
        })
        return newData;
    }

    private sortSopiByName(data:any[]):any[]{
        data.sort((a:any, b:any ) => {
            let sopiA = a.sopi.sopiCode;
            let sopiB = b.sopi.sopiCode;
            if(sopiA > sopiB){
                return 1;
            }else if(sopiA < sopiB){
                return -1;
            }else {
                return 0;
            }
        })
        return data;
    }

}