"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("rxjs/add/operator/switchmap");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var request_1 = require("../models/request");
var router_1 = require("@angular/router");
var RequestDetailComponent = (function () {
    function RequestDetailComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.requestDetail = new request_1.Request();
    }
    RequestDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.http.get('http://localhost:62808/api/user/' + params['id'])
            .map(function (res) { return res.json(); })
            .subscribe(function (requestDetail) { return _this.requestDetail = requestDetail; }); });
    };
    return RequestDetailComponent;
}());
RequestDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'request-detail',
        templateUrl: 'request-detail.component.html',
    }),
    __metadata("design:paramtypes", [http_1.Http,
        router_1.ActivatedRoute,
        router_1.Router])
], RequestDetailComponent);
exports.RequestDetailComponent = RequestDetailComponent;
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
//# sourceMappingURL=request-detail.component.js.map