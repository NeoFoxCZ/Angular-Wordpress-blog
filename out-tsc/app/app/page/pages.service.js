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
import { environment } from '../../environments/environment.prod';
var PagesService = /** @class */ (function () {
    function PagesService(http) {
        this.http = http;
        this._wpBase = environment.wpBase;
    }
    PagesService.prototype.getPages = function () {
        return this.http.get(this._wpBase + 'pages');
    };
    PagesService.prototype.getPage = function (slug) {
        return this.http.get(this._wpBase + ("pages?slug=" + slug));
    };
    PagesService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], PagesService);
    return PagesService;
}());
export { PagesService };
//# sourceMappingURL=pages.service.js.map