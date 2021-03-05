import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Merchandise } from '../models/merchandise.model';
import { map } from 'rxjs/operators';
import { Teams } from '../models/teams.model';

@Injectable({
  providedIn: 'root',
})
export class LandingService {
  constructor(private http: HttpClient) {}

  //merch-fetch-data
  FETCH_merchandise() {
    return this.http.get('').pipe(
      map((responseData) => {
        const responseArray = [];
        if (responseData.hasOwnProperty) {
          for (const key in responseData) {
            responseArray.push(responseData);
          }
        }
        return responseArray;
      })
    );
  }

  //teams-fetch-data
  FETCH_teams() {
    return this.http.get<Teams>('').pipe(
      map((responseData) => {
        const responseArray = [];
        if (responseData.hasOwnProperty) {
          for (const key in responseData) {
            responseArray.push(responseData);
          }
        }
        return responseArray;
      })
    );
  }
}
