System.register(['@angular/core', '@angular/http', '@angular/router', '../backlog/backlog.component', '../Photo/photo.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, backlog_component_1, photo_component_1;
    var Layout;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (backlog_component_1_1) {
                backlog_component_1 = backlog_component_1_1;
            },
            function (photo_component_1_1) {
                photo_component_1 = photo_component_1_1;
            }],
        execute: function() {
            let Layout = class Layout {
                /**
                 *
                 */
                constructor(router) {
                    this.router = router;
                }
                ngOnInit() {
                    this.router.navigate(['/backlog']);
                }
            };
            Layout = __decorate([
                core_1.Component({
                    selector: 'layout',
                    templateUrl: "/app/templates/layout.html",
                    directives: [router_1.ROUTER_DIRECTIVES],
                    providers: [http_1.HTTP_PROVIDERS]
                }),
                router_1.Routes([
                    { path: "/backlog", component: backlog_component_1.BacklogComponent },
                    { path: "/photo/:id", component: photo_component_1.PhotoComponent }
                ]), 
                __metadata('design:paramtypes', [router_1.Router])
            ], Layout);
            exports_1("Layout", Layout);
            ;
        }
    }
});
