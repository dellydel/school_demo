import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable } from 'rxjs/Rx';
import {Course} from '../models/course';

@Component({
  moduleId: module.id,
  selector: 'course-list',
  templateUrl: 'course-list.component.html',
    
})

export class CourseListComponent implements OnInit 
{
    courseList: Course[];

    constructor(private http: Http) {

    }

    ngOnInit(){
        this.http.get('http://localhost:54428/api/course').map(res => res.json()).subscribe(rq => this.courseList = rq);
    }
   
}
