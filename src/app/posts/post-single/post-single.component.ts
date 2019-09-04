import {switchMap} from 'rxjs/operators';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Post } from '../post';

import {DomSanitizer, Title} from '@angular/platform-browser';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['../../../assets/sass/pages/post-single.sass'],
  encapsulation: ViewEncapsulation.ShadowDom,
  providers: [PostsService, AppService]
})
export class PostSingleComponent implements OnInit {

  post: Post;
  description: string;

  constructor( private postsService: PostsService, private route: ActivatedRoute,
               private titleService: Title, private domSanitizer: DomSanitizer,
               private appService: AppService) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    const parser = new DOMParser();

    this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
      this.postsService.getPost(params.get('slug'))))
    .subscribe(
      (post: Post[]) => (this.post = post[0],
        this.setTitle('Mulu.cz | ' + this.post.title.rendered),
        this.description = parser.parseFromString( this.post.excerpt.rendered, 'text/html').body.innerText,
        this.appService.setDescription(this.description)
      ),
      (err: HttpErrorResponse) => err.error instanceof Error ?
        console.log('An error occurred:', err.error.message) :
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`)
    );
  }

  public setTitle( newTitle: string ) {
    this.titleService.setTitle( newTitle );
  }

}
