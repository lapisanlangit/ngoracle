import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { KPPN } from './kppn';
import { environment } from 'src/environments/environment';


@Injectable()
export class KppnService {

    URL_ROOT:string;
  constructor(private http: HttpClient) {
    this.URL_ROOT = environment.apiUrl;

  }


  public getKPPN(): Observable<KPPN[]> {
    return this.http.get<KPPN[]>(this.URL_ROOT + 'data/kppn/getKPPN')
    .pipe(
      catchError(this.handleError)
    );
  }

   handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }


}

