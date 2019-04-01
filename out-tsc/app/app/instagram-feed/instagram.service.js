var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var InstagramService = /** @class */ (function () {
    function InstagramService(http) {
        this.http = http;
        this.feed = 'https://api.instagram.com/v1/users/5408855296/media/recent/?count=3&&callback=JSON_CALLBACK&access_token=5408855296.39d41e3.7b03e25aa1bb4e60887b27322239f46b';
    }
    InstagramService.prototype.getPages = function () {
        return this.http.get(this.feed);
    };
    InstagramService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], InstagramService);
    return InstagramService;
}());
export { InstagramService };
//# sourceMappingURL=instagram.service.js.map