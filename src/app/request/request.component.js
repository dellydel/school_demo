"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var request_1 = require("../models/request");
var RequestComponent = (function () {
    function RequestComponent() {
    }
    RequestComponent.prototype.ngOnInit = function () {
        this.request = new request_1.Request();
        this.files = new Array('1', '2', '3');
    };
    RequestComponent.prototype.submitRequest = function () {
        alert(this.request.firstName);
    };
    return RequestComponent;
}());
RequestComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-request',
        templateUrl: 'request.component.html',
    })
], RequestComponent);
exports.RequestComponent = RequestComponent;
//# sourceMappingURL=request.component.js.map