var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { Wpng2RoutingModule } from './app-routing.module';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { IndexComponent } from './index/index.component';
import { PageSingleComponent } from './page/page-single.component';
import { GoogleAnalyticsEventsService } from './google-analytics-events.service';
import { MomentModule } from 'angular2-moment';
import { SocialPanelComponent } from './social-panel/social-panel.component';
import { InstagramFeedComponent } from './instagram-feed/instagram-feed.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                IndexComponent,
                PostListComponent,
                PostSingleComponent,
                PageSingleComponent,
                SocialPanelComponent,
                InstagramFeedComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpClientModule,
                Wpng2RoutingModule,
                MomentModule,
                ReactiveFormsModule,
            ],
            providers: [
                GoogleAnalyticsEventsService,
                Title,
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map