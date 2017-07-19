import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { BlogComponent } from './blog.component';
import { BlogService } from './blog.service';

const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      {
        path: '',
        component: PostListComponent
      },
      {
        path: 'post/:id',
        component: PostDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PostListComponent,
    PostDetailComponent,
    BlogComponent
  ],
  providers: [
    BlogService
  ]
})
export class BlogModule {
}
