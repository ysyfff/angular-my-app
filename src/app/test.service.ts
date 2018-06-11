import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Person } from './person';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private heroesUrl = 'api/person';  // URL to web api

  constructor(private http: HttpClient) { }

  searchPerson(name: string): Observable<Person[]> {

    if(!name.trim()){
      return of([]);
    }
    return this.http.get<Person[]>(`${this.heroesUrl}/?name=${name}`).pipe(
      // tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Person[]>('searchPerson', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
