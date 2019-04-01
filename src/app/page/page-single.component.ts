
import {switchMap} from 'rxjs/operators';
import {Component, OnInit, AfterViewInit, OnChanges} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import {PagesService} from './pages.service';
import {Page} from './page';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-page-single',
  templateUrl: './page-single.component.html',
  styleUrls: ['./page-single.component.scss'],
  providers: [PagesService]
})

export class PageSingleComponent implements OnInit, AfterViewInit {

  page: Page;
  name = new FormControl('');

  constructor( private pageService: PagesService, private route: ActivatedRoute,
               private titleService: Title) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.pageService.getPage(params.get('slug'))))
      .subscribe(
        (page: Page[]) => (this.page = page[0],
          this.setTitle('Mulu.cz | ' + this.page.title.rendered)),
        (err: HttpErrorResponse) => err.error instanceof Error ?
          console.log('An error occurred:', err.error.message) :
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`)
      );

  }

  ngAfterViewInit() {
  };

  public setTitle( newTitle: string ) {
    this.titleService.setTitle( newTitle );
  }







}
