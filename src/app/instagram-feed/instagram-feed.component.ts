import {Component, OnInit, AfterViewInit, OnChanges, HostListener} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { Title } from '@angular/platform-browser';
import {Instagram} from "./instagram";
import {Page} from "../page/page";
import {InstagramService} from "./instagram.service";

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html'
})

export class InstagramFeedComponent implements OnInit, AfterViewInit {


  instagrams: Instagram[];

  constructor( private instagramService: InstagramService, ) { }

  ngOnInit() {

    this.instagramService.getPages().subscribe(
      (instagrams: Instagram[]) => this.instagrams = instagrams,
      (err: HttpErrorResponse) => err.error instanceof Error ? console.log('An error occurred:',
        err.error.message) : console.log(`Backend returned code ${err.status}, body was: ${err.error}`));


  }


  ngAfterViewInit() {

  };
}
