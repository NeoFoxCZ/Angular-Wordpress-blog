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
  styleUrls: ['../../assets/sass/pages/index.sass'],
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
    this.titleService.setTitle('autoskolamikmik.cz');
    this.appService.setDescription('Jmenuji se Radim Mikunda a otevřel jsem si vlastní autoškolu od září 2014.' +
        'V přípravě nových řidičů nejsem žádným nováčkem.');
    this.appService.setCannonical('autoskolamikmik.cz');

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

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

}
