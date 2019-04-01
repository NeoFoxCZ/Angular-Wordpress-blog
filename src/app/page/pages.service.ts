import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from './page';
import { environment } from '../../environments/environment.prod';
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class PagesService {

  private _wpBase = environment.wpBase;

  constructor(private http: HttpClient, private translate: TranslateService) { }


  getPages(lang?: string): Observable<Page[]> {
    if (lang === 'en') {
      return this.http.get<Page[]>(this._wpBase + 'pages' + '?author=2');
    } else {
      return this.http.get<Page[]>(this._wpBase + 'pages' + '?author=1');
    }
  }

  getPage(slug: string): Observable<Page[]> {
    return this.http.get<Page[]>(this._wpBase + `pages?slug=${slug}`);
  }

}
