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
import 'rxjs/add/operator/switchMap';
var SocialPanelComponent = /** @class */ (function () {
    function SocialPanelComponent() {
        this.scrolledSocial = false;
    }
    SocialPanelComponent.prototype.onWindowScroll = function (event) {
        this.scrolledSocial = window.pageYOffset > 280;
    };
    ;
    SocialPanelComponent.prototype.ngOnInit = function () { };
    SocialPanelComponent.prototype.ngAfterViewInit = function () {
    };
    ;
    __decorate([
        HostListener('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SocialPanelComponent.prototype, "onWindowScroll", null);
    SocialPanelComponent = __decorate([
        Component({
            selector: 'app-social-panel',
            templateUrl: './social-panel.component.html'
        })
    ], SocialPanelComponent);
    return SocialPanelComponent;
}());
export { SocialPanelComponent };
//# sourceMappingURL=social-panel.component.js.map