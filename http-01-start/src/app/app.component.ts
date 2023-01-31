import { Component, OnInit } from '@angular/core';

import { PostService } from './post.service';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.postService.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }
}
