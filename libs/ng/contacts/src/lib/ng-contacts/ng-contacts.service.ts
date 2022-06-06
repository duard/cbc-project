import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Contact } from './contact.intercace';

@Injectable()
export class NgContactsService {
  private localUrl = 'http://localhost:3000/api/contacts';

  constructor(private httpClient: HttpClient) {
    //
  }

  getAll(): Observable<Contact[]> {
    // return this.httpClient.get(this.localUrl);
    return this.httpClient
      .get<Contact[]>(this.localUrl)
      .pipe(catchError(this.handleError<Contact[]>('getAll', [])));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(operation, error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
