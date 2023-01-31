import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from './post.model';
import { Subject } from 'rxjs-compat';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };
    // Send Http request
    this.http
      .post<{ name: string }>(
        `https://ng-complete-guide-30d33-default-rtdb.firebaseio.com/posts.json`,
        postData,
        {
          observe: 'response',
        }
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },

        (error) => {
          this.error.next(error.message);
        }
      );
  }
  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-30d33-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-header': 'hello' }),
          params: searchParams,
        }
      )
      .pipe(
        map((responseData) => {
          const postArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key))
              postArray.push({ ...responseData[key], id: key });
            return postArray;
          }
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }
  deletePosts() {
    return this.http
      .delete(
        'https://ng-complete-guide-30d33-default-rtdb.firebaseio.com/posts.json',
        {
          observe: 'events',
        }
      )
      .pipe(
        tap((event) => {
          console.log(event.type);
          if (event.type === HttpEventType.Sent) {
            console.log('sent===');
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
