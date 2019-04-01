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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pages_service_1 = require("./page/pages.service");
var router_1 = require("@angular/router");
var google_analytics_events_service_1 = require("./google-analytics-events.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(pagesService, router, googleAnalyticsEventsService) {
        this.pagesService = pagesService;
        this.router = router;
        this.googleAnalyticsEventsService = googleAnalyticsEventsService;
        this.title = 'Mulu.cz';
        this.scrolled = false;
        this.scrolledSocial = false;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
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
        core_1.HostListener('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onWindowScroll", null);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [pages_service_1.PagesService]
        }),
        __metadata("design:paramtypes", [pages_service_1.PagesService, router_1.Router,
            google_analytics_events_service_1.GoogleAnalyticsEventsService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map