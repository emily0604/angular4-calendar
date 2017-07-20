import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  blogPost: any;

  constructor(private activatedRoute: ActivatedRoute,
              private blogService: BlogService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap
      .switchMap((params: ParamMap) => this.blogService.getOne(params.get('id')))
      .subscribe(
        blogPost => this.blogPost = blogPost,
        err => console.log('something wrong happened!')
      );
  }
}
