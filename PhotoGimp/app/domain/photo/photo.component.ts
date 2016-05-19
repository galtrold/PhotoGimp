import { Component, OnInit } from '@angular/core';
import {Routes, RouteSegment} from '@angular/router';
import {Http} from '@angular/http';

@Component({
    templateUrl: '/app/templates/photo.component.html'
})


export class PhotoComponent implements OnInit {
    constructor(private _http: Http, private _routeSegment: RouteSegment) { }
    public photoUrl: string;

    ngOnInit() {
        this.photoUrl = "/photo/"+this._routeSegment.getParam('id');


    }

    handleError(err: any, source: any, caught: any): any {
        console.log(err);
    }



}