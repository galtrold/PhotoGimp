import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
import {BacklogComponent} from '../backlog/backlog.component';
import {PhotoComponent} from '../Photo/photo.component';

@Component({
    selector: 'layout',
    templateUrl: "/app/templates/layout.html", 
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS]
})
@Routes([
    { path: "/backlog", component: BacklogComponent },
    { path: "/photo/:id", component: PhotoComponent }
])
export class Layout {
    /**
     *
     */
    constructor(private router: Router) { } 
    
    ngOnInit() {
    this.router.navigate(['/backlog']);
  }
 };



