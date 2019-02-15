"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var request_component_1 = require("./request/request.component");
var course_component_1 = require("./course/course.component");
var request_list_component_1 = require("./request/request-list.component");
var request_detail_component_1 = require("./request/request-detail.component");
var course_list_component_1 = require("./course/course-list.component");
var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/request', },
    { path: 'request', component: request_component_1.RequestComponent },
    { path: 'request/:id', component: request_detail_component_1.RequestDetailComponent },
    { path: 'course', component: course_component_1.CourseComponent },
    { path: 'requestlist', component: request_list_component_1.RequestListComponent },
    { path: 'courselist', component: course_list_component_1.CourseListComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.routableComponents = [
    request_component_1.RequestComponent, course_component_1.CourseComponent, request_list_component_1.RequestListComponent, course_list_component_1.CourseListComponent, request_detail_component_1.RequestDetailComponent
];
//# sourceMappingURL=app-routing.module.js.map