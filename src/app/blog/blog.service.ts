import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {

  constructor(private http: Http) {
  }

  getList(): Observable<any[]> {
    return this.http
      .get('http://jsonplaceholder.typicode.com/posts')
      .map(res => res.json())
  }

  getOne(id: string): Observable<any> {
    return this.http
      .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
      .map(res => res.json())
  }

}
