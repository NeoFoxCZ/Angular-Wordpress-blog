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
import 'rxjs/add/operator/switchMap';
import { InstagramService } from "./instagram.service";
var InstagramFeedComponent = /** @class */ (function () {
    function InstagramFeedComponent(instagramService) {
        this.instagramService = instagramService;
    }
    InstagramFeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instagramService.getPages().subscribe(function (instagrams) { return _this.instagrams = instagrams; }, function (err) { return err.error instanceof Error ? console.log('An error occurred:', err.error.message) : console.log("Backend returned code " + err.status + ", body was: " + err.error); });
    };
    InstagramFeedComponent.prototype.ngAfterViewInit = function () {
    };
    ;
    InstagramFeedComponent = __decorate([
        Component({
            selector: 'app-instagram-feed',
            templateUrl: './instagram-feed.component.html'
        }),
        __metadata("design:paramtypes", [InstagramService])
    ], InstagramFeedComponent);
    return InstagramFeedComponent;
}());
export { InstagramFeedComponent };
//# sourceMappingURL=instagram-feed.component.js.map