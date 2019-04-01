import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Post } from './post';
import { environment } from '../../environments/environment.prod';
import {Meta} from "@angular/platform-browser";

@Injectable()
export class PostsService {

  private _wpBase = environment.wpBase;
  public postPerPage = environment.postPerPage;

  constructor(private http: HttpClient, private meta: Meta) { }

  getPosts(lang: string, currentPage?): Observable<Post[]> {
      if (currentPage) {
        if (lang === 'en') {
          return this.http.get<Post[]>(this._wpBase + 'posts?per_page=' + this.postPerPage + '&page=' + currentPage + '&author=2');
        } else {
          return this.http.get<Post[]>(this._wpBase + 'posts?per_page=' + this.postPerPage + '&page=' + currentPage + '&author=1');
        }
      } else {
        if (lang === 'en') {
          return this.http.get<Post[]>(this._wpBase + 'posts' + '?author=2');
        } else {
          return this.http.get<Post[]>(this._wpBase + 'posts' + '?author=1');
        }
      }
  }

  getPost(slug: string): Observable<Post[]> {
      return this.http.get<Post[]>(this._wpBase + `posts?slug=${slug}`);
  }

}
