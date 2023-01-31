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
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.postService.fetchPosts().subscribe((posts) => {
      this.loadedPosts = posts;
    });
  }

  onClearPosts() {
   this.postService.deletePosts().subscribe(()=>{
    this.loadedPosts=[];
   })
  }
}
