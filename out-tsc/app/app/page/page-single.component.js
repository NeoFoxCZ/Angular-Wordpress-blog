var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { PagesService } from './pages.service';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
var PageSingleComponent = /** @class */ (function () {
    function PageSingleComponent(pageService, route, titleService) {
        this.pageService = pageService;
        this.route = route;
        this.titleService = titleService;
        this.name = new FormControl('');
    }
    PageSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.route.paramMap
            .switchMap(function (params) {
            return _this.pageService.getPage(params.get('slug'));
        })
            .subscribe(function (page) { return (_this.page = page[0],
            _this.setTitle(_this.page.title.rendered)); }, function (err) { return err.error instanceof Error ?
            console.log('An error occurred:', err.error.message) :
            console.log("Backend returned code " + err.status + ", body was: " + err.error); });
    };
    PageSingleComponent.prototype.ngAfterViewInit = function () {
    };
    ;
    PageSingleComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    PageSingleComponent = __decorate([
        Component({
            selector: 'app-page-single',
            templateUrl: './page-single.component.html',
            providers: [PagesService]
        }),
        __metadata("design:paramtypes", [PagesService, ActivatedRoute,
            Title])
    ], PageSingleComponent);
    return PageSingleComponent;
}());
export { PageSingleComponent };
//# sourceMappingURL=page-single.component.js.map