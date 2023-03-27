import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';

import { Ibook } from '../interfaces/books';
import { Iprice } from '../interfaces/price';

@Injectable({
  providedIn: 'root',
})
export class BookAPIService {
  constructor(private _http: HttpClient) {}

  getBooks(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf- 8'
    );
    const requestOptions: Object = { headers: headers, responseType: 'text' };
    return this._http.get<any>('/books', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<Ibook>),
      retry(3),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }

  getBook(bookId: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/books/' + bookId, requestOptions).pipe(
      map((res) => JSON.parse(res) as Ibook),
      retry(3),
      catchError(this.handleError)
    );
  }



  sortBook(minprice:number,maxprice:number): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/books/'+minprice+"/"+ maxprice, requestOptions).pipe(
      map((res) => JSON.parse(res) as Ibook),
      retry(3),
      catchError(this.handleError)
    );
  }
}
