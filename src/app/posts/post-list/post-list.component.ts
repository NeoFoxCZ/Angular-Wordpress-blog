import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';
import {AppService} from '../../app.service';
import {TranslateService} from "@ngx-translate/core";
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss',
    '../../../assets/sass/components/pagination.sass'],
  providers: [PostsService, AppService]
})

export class PostListComponent implements OnInit {

  @Input('stateIndex') stateIndex: boolean;

  posts: Post[];
  defaultImageLoad = 'nooone';
  currentPage: number;
  maxPostsPerPage: number;
  currentLang: string;

  constructor( private postsService: PostsService, private router: Router,
               private titleService: Title, private meta: Meta,
               private appService: AppService, private translate: TranslateService) {
    this.currentPage = 1;
    this.maxPostsPerPage = this.postsService.postPerPage
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.translate.onLangChange.subscribe( (lang) => (this.getPosts()));

    this.getPosts();
  };

  selectPost(slug) {
    this.router.navigate(['blog/' + slug]);
  };

  public setTitle( newTitle: string ) {
    this.titleService.setTitle( newTitle );
  }

  nextPage(): void {
    if (this.posts.length >= this.maxPostsPerPage) this.currentPage = this.currentPage + 1;
    this.ngOnInit();
  }

  previousPage(): void {
    if (this.currentPage > 1) this.currentPage = this.currentPage - 1;
    this.ngOnInit();
  }

  getPosts(): void {
    this.currentLang = localStorage.getItem('lang');

    this.postsService.getPosts(this.currentLang, this.currentPage).subscribe(
      (posts: Post[]) => (this.posts = posts),
      (err: HttpErrorResponse) => err.error instanceof Error ?
        console.log('An error occurred:', err.error.message) :
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`));
  }
}

