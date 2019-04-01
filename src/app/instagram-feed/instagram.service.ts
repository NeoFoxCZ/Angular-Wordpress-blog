import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import {Instagram} from "./instagram";

@Injectable()
export class InstagramService {

  private feed = 'https://api.instagram.com/v1/users/5408855296/media/recent/?count=3&&callback=JSON_CALLBACK&access_token=5408855296.39d41e3.7b03e25aa1bb4e60887b27322239f46b';

  constructor(private http: HttpClient) { }

  getPages(): Observable<Instagram[]> {
    return this.http.get<Instagram[]>(this.feed);
  }

}
