import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PostsService} from '../posts/posts.service';
import {Post} from '../posts/post';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AppService} from '../app.service';
import {IImage} from 'ng-simple-slideshow';
import {InstagramData} from '../instagram';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass'],
  providers: [PostsService, AppService]
})

export class IndexComponent implements OnInit, AfterViewInit {

  posts: Post[];
  configs: InstagramData[];
  currentLang: string;

  constructor( private postsService: PostsService, private router: Router,
               private titleService: Title, public appService: AppService,
               private http: HttpClient, private translate: TranslateService) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.titleService.setTitle('Mulu.cz');
    this.appService.setDescription('Tvorba webových stránek, aplikací a osobní blog a články z oblastí technologie.');
    this.appService.setCannonical('test');

    this.getPosts();
  };

  ngAfterViewInit() {
  };

  selectPost(slug) {
    this.router.navigate(['blog/' + slug]);
  };

  getPosts() {
    this.posts = [];
    this.currentLang = localStorage.getItem('lang');

    this.postsService.getPosts(this.currentLang).subscribe(
      (posts: Post[]) => (this.posts = posts),
      (err: HttpErrorResponse) => err.error instanceof Error ?
        console.log('An error occurred:', err.error.message) :
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`));
  }
}
