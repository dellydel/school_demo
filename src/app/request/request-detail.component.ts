import {Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchmap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Request} from '../models/request';
import {ActivatedRoute, Router, Params} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'request-detail',
  templateUrl: 'request-detail.component.html',
})
export class RequestDetailComponent implements OnInit {
    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router
        ) { }

    requestDetail: Request = new Request();

    ngOnInit() {
        this.route.params.subscribe(params => this.http.get('http://localhost:62808/api/user/'+ params['id'])
        .map((res : Response) => res.json())
        .subscribe(requestDetail => this.requestDetail = requestDetail));
    }
}
    //     ngOnInit(){
    //     this.route.params.map(params => params['id'])
    //     .do(id => this.id = id)
    //     .subscribe(id => this.http
    //     .get('http://localhost:54428/api/request/'+ this.id).map(res => res.json())
    //     .subscribe(requestDetail => this.requestDetail = requestDetail));
    // }


 // ngOnInit(){
    //     this.route.params.map(params => params['id'])
    //     .do(id => this.id = +id)
    //     .subscribe(id => this.getDetails());
    // }
    // getDetails(){
    //     return this.http.get('http://localhost:54428/api/request/'+ this.id).map(res => res.json());
    //
