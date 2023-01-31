import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };
    // Send Http request
    this.http
      .post<{ name: string }>(
        `https://ng-complete-guide-30d33-default-rtdb.firebaseio.com/posts.json`,
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-30d33-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((responseData) => {
          const postArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key))
              postArray.push({ ...responseData[key], id: key });
            return postArray;
          }
        })
      )
  }
}
