import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpParams } from '@angular/common/http'
import { catchError, map, throwError, timeout } from 'rxjs';
import { Person } from '../../model/person.model';

@Injectable({
  providedIn: 'root'
})
export default class PersonApiService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Person[]> {
    return this.http.get<Person[]>('http://192.168.1.81:8080/persons')
      .pipe(timeout(5000),
        map((data) => {
          if (data.length === 0) {
            console.log('Nothing found.')
          }
          return data;
        }),
        catchError((error) => {
          console.log('Error fetching data:', error);
          return throwError(() => error);
        })
      );
  }
}
