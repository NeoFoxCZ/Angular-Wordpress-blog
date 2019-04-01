import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { IndexComponent} from './index/index.component';
import { PageSingleComponent} from './page/page-single.component';
import {BlogComponent} from './posts/blog.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    pathMatch: 'full'
  },
  {
    path: 'blog',
    component: BlogComponent,
    pathMatch: 'full'
  },
  {
    path: 'blog/:slug',
    component: PostSingleComponent,
    pathMatch: 'full'
  },
  {
    path: ':slug',
    component: PageSingleComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Wpng2RoutingModule { }
