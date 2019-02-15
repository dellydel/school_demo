import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable } from 'rxjs/Rx';
import {Request} from '../models/request';

@Component({
  moduleId: module.id,
  selector: 'request-list',
  templateUrl: 'request-list.component.html',
    
})
export class RequestListComponent implements OnInit 
{
    requestList: any[];

    returnDetail(){
    

    }

    constructor(private http: Http) {

    }

    ngOnInit(){
        this.http.get('http://localhost:62808/api/user').map(res => res.json()).subscribe(rq => this.requestList = rq);
    }
}
