import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  providers: [AppService]
})

export class BlogComponent implements OnInit {


  constructor( private router: Router,
               private titleService: Title, private appService: AppService) { }

  ngOnInit() {
    this.titleService.setTitle('autoskolamikmik.cz | Blog');
    this.appService.setDescription('Tvorba webových stránek, aplikací a osobní blog a články z oblastí technologie.');
  };

}
