import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { Wpng2RoutingModule } from './app-routing.module';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { IndexComponent } from './index/index.component';
import {PageSingleComponent} from './page/page-single.component';
import {GoogleAnalyticsEventsService} from './google-analytics-events.service';
import {MomentModule} from 'angular2-moment';
import {SocialPanelComponent} from './social-panel/social-panel.component';
import {InstagramFeedComponent} from './instagram-feed/instagram-feed.component';
import {BlogComponent} from './posts/blog.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslatePipe } from './translate.pipe';
import {AppService} from "./app.service";
import {HeaderComponent} from "./header/header.component";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PostListComponent,
    HeaderComponent,
    PostSingleComponent,
    PageSingleComponent,
    SocialPanelComponent,
    InstagramFeedComponent,
    BlogComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    SlickCarouselModule,
    HttpClientModule,
    Wpng2RoutingModule,
    MomentModule,
    ReactiveFormsModule,
    ],
  providers: [
    GoogleAnalyticsEventsService,
    Title,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
