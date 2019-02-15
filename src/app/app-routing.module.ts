import { NgModule }      from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestComponent } from './request/request.component';
import { CourseComponent }  from './course/course.component';
import { RequestListComponent }  from './request/request-list.component';
import { RequestDetailComponent }  from './request/request-detail.component';
import { CourseListComponent }  from './course/course-list.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/request', },
    { path: 'request', component: RequestComponent },
    { path: 'request/:id', component: RequestDetailComponent },
    { path: 'course', component: CourseComponent },
    { path: 'requestlist', component: RequestListComponent },
    { path: 'courselist', component: CourseListComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  RequestComponent, CourseComponent, RequestListComponent, CourseListComponent, RequestDetailComponent
  ];
