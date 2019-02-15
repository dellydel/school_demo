import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {Request} from '../models/request';

@Component({
    moduleId: module.id,
    selector: 'my-request',
    templateUrl: 'request.component.html',

})
export class RequestComponent implements OnInit {
    request: any;
    files: string[];

    ngOnInit() {
      this.request = new Request();
      this.files = new Array('1', '2', '3');
    }
    submitRequest() {
        alert(this.request.firstName);
    }
}

