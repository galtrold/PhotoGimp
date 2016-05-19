System.register(['@angular/core', '@angular/http', 'rxjs/Rx', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1;
    var BacklogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let BacklogComponent = class BacklogComponent {
                constructor(_http, _router) {
                    this._http = _http;
                    this._router = _router;
                }
                ngOnInit() {
                    this.getPhotos();
                }
                updateLibrary() {
                    this._http
                        .put("Backlog/update", "update:library")
                        .map(res => res.json())
                        .subscribe(data => { }, err => this.handleError, () => console.log("Library updating"));
                }
                getPhotos() {
                    this._http.get("Backlog/index")
                        .map(response => {
                        var data = response.json();
                        return data;
                    })
                        .subscribe(data => { this.photos = data; }, error => this.handleError);
                }
                select(photo) {
                    this._router.navigate(['/photo', photo.Id]);
                }
                handleError(err, source, caught) {
                    console.log(err);
                }
            };
            BacklogComponent = __decorate([
                core_1.Component({
                    selector: 'backlog',
                    templateUrl: "/app/templates/backlog.html"
                }), 
                __metadata('design:paramtypes', [http_1.Http, router_1.Router])
            ], BacklogComponent);
            exports_1("BacklogComponent", BacklogComponent);
        }
    }
});
