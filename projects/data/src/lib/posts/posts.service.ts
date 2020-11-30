import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
@Injectable()
export class PostsService {
  // * INFO:  This could/should be a config value
  private BASE_URL = 'https://jsonplaceholder.typicode.com/';
  constructor(private httpClient: HttpClient) {}

  public getPosts(): Observable<object> {
    return this.httpClient.get(`${this.BASE_URL}posts`);
  }
}
