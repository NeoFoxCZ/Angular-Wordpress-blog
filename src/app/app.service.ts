import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment.prod';
import {Meta} from '@angular/platform-browser';
import {TranslateService} from "@ngx-translate/core";
import {BehaviorSubject, Observable} from "rxjs/Rx";
import {of} from "rxjs/index";

@Injectable()
export class AppService {

  /* ToDo: Exit this */
  private _wpBase = environment.wpBase;

  private isLoader: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private meta: Meta, private translate: TranslateService) {
    this.isLoader = new BehaviorSubject<boolean>(false);
  }

  public setDescription( newDescription: string ) {
    this.meta.updateTag({ name: 'description', content: newDescription});
  }
  /* ToDo: Automate string after page load */
  public setCannonical( cannonicalString: string ) {
    this.meta.updateTag({name: 'cannonical', content: cannonicalString});
  }

  public setLang( lang: string ) {
    localStorage.setItem('lang', lang);
      this.translate.setDefaultLang(lang);
      this.translate.use(lang);
  }

  public setLoader(status: boolean): void {
    this.isLoader.next(status);
  }

  public getLoader(): Observable<boolean> {
    return this.isLoader.asObservable();
  }

}
