import { Component } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {Course} from '../models/course';

@Component({
    moduleId: module.id,
    selector: 'my-course',
    templateUrl: 'course.component.html'
    
})
export class CourseComponent {
    course: Course = new Course();
}
