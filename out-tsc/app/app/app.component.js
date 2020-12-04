var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostListener } from '@angular/core';
import { PagesService } from './page/pages.service';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleAnalyticsEventsService } from "./google-analytics-events.service";
var AppComponent = /** @class */ (function () {
    function AppComponent(pagesService, router, googleAnalyticsEventsService) {
        this.pagesService = pagesService;
        this.router = router;
        this.googleAnalyticsEventsService = googleAnalyticsEventsService;
        this.title = 'autoskolamikmik.cz';
        this.scrolled = false;
        this.scrolledSocial = false;
        this.router.events.subscribe(function (event) {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
    }
    AppComponent.prototype.onWindowScroll = function (event) {
        this.scrolled = window.pageYOffset > 80;
    };
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.pagesService.getPages().subscribe(function (pages) { return _this.pages = pages; }, function (err) { return err.error instanceof Error ? console.log('An error occurred:', err.error.message) : console.log("Backend returned code " + err.status + ", body was: " + err.error); });
    };
    ;
    AppComponent.prototype.getPage = function (slug) {
        this.router.navigate([slug]);
        window.scrollTo(0, 0);
    };
    __decorate([
        HostListener('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onWindowScroll", null);
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [PagesService]
        }),
        __metadata("design:paramtypes", [PagesService, Router,
            GoogleAnalyticsEventsService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map
