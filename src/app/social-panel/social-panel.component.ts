import {Component, OnInit, AfterViewInit, OnChanges, HostListener} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-social-panel',
  styleUrls: ['./social-panel.component.scss'],
  templateUrl: './social-panel.component.html'
})

export class SocialPanelComponent implements OnInit, AfterViewInit {

  scrolledSocial = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    this.scrolledSocial = window.pageYOffset > 200;
  };

  ngOnInit() {}

  ngAfterViewInit() {

  };
}
