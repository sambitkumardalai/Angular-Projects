import { Component, OnDestroy, OnInit } from '@angular/core';

import { PostService } from './post.service';
import { Post } from './post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit,OnDestroy {
  loadedPosts: Post[] = [];
  private errorSubject!:Subscription;
  constructor(private postService: PostService) {}

  ngOnInit() {
   this.errorSubject = this.postService.error.subscribe((errorMessage)=>{
      console.log(errorMessage);
      
    })
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.postService.fetchPosts().subscribe(
      (posts) => {
        this.loadedPosts = posts;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  onClearPosts() {
    this.postService.deletePosts().subscribe(
      () => {
        this.loadedPosts = [];
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
  ngOnDestroy(): void {
    this.errorSubject.unsubscribe();
    
  }
}
