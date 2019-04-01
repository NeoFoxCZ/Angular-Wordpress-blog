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
var platform_browser_1 = require("@angular/platform-browser");
var PostListComponent = /** @class */ (function () {
    function PostListComponent(postsService, router, titleService) {
        this.postsService = postsService;
        this.router = router;
        this.titleService = titleService;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.postsService.getPosts().subscribe(function (posts) { return (_this.posts = posts,
            _this.setTitle('Blog')); }, function (err) { return err.error instanceof Error ?
            console.log('An error occurred:', err.error.message) :
            console.log("Backend returned code " + err.status + ", body was: " + err.error); });
    };
    ;
    PostListComponent.prototype.selectPost = function (slug) {
        this.router.navigate(['blog/' + slug]);
    };
    ;
    PostListComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    PostListComponent = __decorate([
        core_1.Component({
            selector: 'app-post-list',
            templateUrl: './post-list.component.html',
            styleUrls: ['./post-list.component.css'],
            providers: [posts_service_1.PostsService]
        }),
        __metadata("design:paramtypes", [posts_service_1.PostsService, router_1.Router,
            platform_browser_1.Title])
    ], PostListComponent);
    return PostListComponent;
}());
exports.PostListComponent = PostListComponent;
//# sourceMappingURL=post-list.component.js.map
