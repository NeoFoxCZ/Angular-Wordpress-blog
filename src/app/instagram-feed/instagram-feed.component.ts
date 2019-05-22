import {Component, OnInit, AfterViewInit, OnChanges, HostListener} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Title } from '@angular/platform-browser';
import {Instagram} from "./instagram";
import {Page} from "../page/page";
import {InstagramService} from "./instagram.service";
import {InstagramData} from "../instagram";

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['../../assets/sass/components/instagram.sass']
})

export class InstagramFeedComponent implements OnInit, AfterViewInit {


  instagrams: Instagram[];
  configs: InstagramData[];

  slideConfig = {
    'slidesToShow': 8, 'slidesToScroll': 2,
    'prevArrow': false, 'nextArrow': false,
    'dots': false, 'autoplay': true
  };

  constructor(private http: HttpClient,) { }

  ngOnInit() {
    this.getInstagramFeed()
  }

  getInstagramFeed() {
    const configUrl = 'https://api.instagram.com/v1/users/5408855296/media/recent/?count=16&access_token=5408855296.39d41e3.7b03e25aa1bb4e60887b27322239f46b' ;
    return this.http.get(configUrl).subscribe((Response: any) => this.configs = Response.data);
  };


  ngAfterViewInit() {

  };
}
