var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { IndexComponent } from './index/index.component';
import { PageSingleComponent } from './page/page-single.component';
var routes = [
    {
        path: '',
        component: IndexComponent,
        pathMatch: 'full'
    },
    {
        path: 'blog',
        component: PostListComponent,
        pathMatch: 'full'
    },
    {
        path: 'blog/:slug',
        component: PostSingleComponent,
        pathMatch: 'full'
    },
    {
        path: ':slug',
        component: PageSingleComponent,
        pathMatch: 'full'
    }
];
var Wpng2RoutingModule = /** @class */ (function () {
    function Wpng2RoutingModule() {
    }
    Wpng2RoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule],
            providers: []
        })
    ], Wpng2RoutingModule);
    return Wpng2RoutingModule;
}());
export { Wpng2RoutingModule };
//# sourceMappingURL=app-routing.module.js.map
