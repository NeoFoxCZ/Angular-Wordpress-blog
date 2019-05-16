import {Component, OnInit, AfterViewInit, OnChanges, HostListener} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {Page} from "../page/page";
import {PagesService} from "../page/pages.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['../../assets/sass/components/header.sass']
})

export class HeaderComponent implements OnInit, AfterViewInit {

    pages: Page[];

    constructor(private pagesService: PagesService, ) { }

    ngOnInit() {
        this.getPages()
    }

    getPages(lang?: string) : void {
        let currentLang = localStorage.getItem('lang');
        this.pages = null;

        this.pagesService.getPages(currentLang === 'en' ? 'en' : 'cz').subscribe(
            (pages: Page[]) => (this.pages = pages),
            (err: HttpErrorResponse) => err.error instanceof Error ? console.log('An error occurred:',
                err.error.message) : console.log(`Backend returned code ${err.status}, body was: ${err.error}`));
    }


    ngAfterViewInit() {

    };
}
