import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  blogPosts: any[];

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.blogService.getList().subscribe(
      data => this.blogPosts = data.slice(0, 10),
      err => console.log('something wrong happened!')
    )
  }
}
