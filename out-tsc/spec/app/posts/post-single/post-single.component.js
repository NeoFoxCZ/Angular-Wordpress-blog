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
var posts_service_1 = require("../posts.service");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var platform_browser_1 = require("@angular/platform-browser");
var PostSingleComponent = /** @class */ (function () {
    function PostSingleComponent(postsService, route, titleService) {
        this.postsService = postsService;
        this.route = route;
        this.titleService = titleService;
    }
    PostSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.route.paramMap
            .switchMap(function (params) {
            return _this.postsService.getPost(params.get('slug'));
        })
            .subscribe(function (post) { return (_this.post = post[0],
            _this.setTitle(_this.post.title.rendered)); }, function (err) { return err.error instanceof Error ?
            console.log('An error occurred:', err.error.message) :
            console.log("Backend returned code " + err.status + ", body was: " + err.error); });
    };
    PostSingleComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    PostSingleComponent = __decorate([
        core_1.Component({
            selector: 'app-post-single',
            templateUrl: './post-single.component.html',
            styleUrls: ['./post-single.component.css'],
            providers: [posts_service_1.PostsService]
        }),
        __metadata("design:paramtypes", [posts_service_1.PostsService, router_1.ActivatedRoute,
            platform_browser_1.Title])
    ], PostSingleComponent);
    return PostSingleComponent;
}());
exports.PostSingleComponent = PostSingleComponent;
//# sourceMappingURL=post-single.component.js.map