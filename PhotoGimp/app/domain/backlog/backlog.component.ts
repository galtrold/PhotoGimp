import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';
import {Photo} from "../photo/photo.model";

@Component({
    selector: 'backlog',
    templateUrl: "/app/templates/backlog.html"

})
export class BacklogComponent implements OnInit {

    constructor(private _http: Http, private _router : Router) {}

    photos: Array<Photo>;
    error: any; 

    ngOnInit() {
        
        this.getPhotos();
    }

    updateLibrary() {

        this._http
            .put("Backlog/update", "update:library")
            .map(res => res.json())
            .subscribe(
                data => { },
                err => this.handleError,
                () => console.log("Library updating"));
    }

    getPhotos() {
        this._http.get("Backlog/index")
            .map(response => {
                var data = response.json();
                return data;
            })
            .subscribe(
            data => { this.photos = data; },
            error => this.handleError
            );
    }

    select(photo: Photo) {
        this._router.navigate(['/photo', photo.Id]);
    }

    handleError(err: any, source: any, caught: any): any {
        console.log(err);
    }

    
}