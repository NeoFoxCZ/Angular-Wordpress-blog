import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import { Page } from './page/page';
import { PagesService } from './page/pages.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {NavigationEnd, Router} from '@angular/router';
import {GoogleAnalyticsEventsService} from './google-analytics-events.service';
import {InstagramData} from './instagram';
import { VERSION } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AppService} from './app.service';
import {Observable, Subscription} from "rxjs/Rx";

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.sass'],
  encapsulation: ViewEncapsulation.None,
  providers: [PagesService]
})

export class AppComponent implements OnInit {
  title = 'Autoskolamikmik.cz';
  scrolled =  false;
  scrolledSocial = false;
  pages: Page[];
  configs: InstagramData[];
  currentYear: number;
  currentVersionA: string;
  currentLang: string;
  isLoading: boolean;

  isLoaderLoading: boolean;



  constructor( private pagesService: PagesService, private router: Router,
               public googleAnalyticsEventsService: GoogleAnalyticsEventsService,
               private http: HttpClient, private translate: TranslateService,
               private appService: AppService) {

    this.currentLang = localStorage.getItem('lang');
    if (!this.currentLang) { this.appService.setLang('cz'); } else {
      this.appService.setLang(this.currentLang);
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });

    this.currentYear = new Date().getFullYear();
    this.currentVersionA = VERSION.full;
  }

  subscribeloading() {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    this.scrolled = window.pageYOffset > 200;
  };

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getInstagramFeed();
    this.getPages();
    this.subscribeloading();
  };

  getPages(lang?: string) : void {
    this.currentLang = localStorage.getItem('lang');
    this.pages = [];

    this.pagesService.getPages(this.currentLang === 'en' ? 'en' : 'cz').subscribe(
      (pages: Page[]) => (this.pages = pages),
      (err: HttpErrorResponse) => err.error instanceof Error ? console.log('An error occurred:',
        err.error.message) : console.log(`Backend returned code ${err.status}, body was: ${err.error}`));
  }

  getPage(slug) {
    this.router.navigate([slug]);
    window.scrollTo(0, 0);
  }

  getInstagramFeed() {
    const configUrl = 'https://api.instagram.com/v1/users/5408855296/media/recent/?count=16&access_token=5408855296.39d41e3.7b03e25aa1bb4e60887b27322239f46b' ;
    return this.http.get(configUrl).subscribe((Response: any) => this.configs = Response.data);
  };

  changeLang(): void {
    if (this.translate.currentLang === 'en') {
      (this.appService.setLang('cz'));
    } else {
      (this.appService.setLang('en'));
    }
    this.getPages();

    this.router.navigate(['/']);
  }
}


