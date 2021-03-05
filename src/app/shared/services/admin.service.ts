import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Teams } from '../models/teams.model';

declare var tinymce: any;

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  //START Accounts
  POST_account(credentials) {
    return this.http.post('', credentials, {
      reportProgress: true,
      observe: 'events',
    });
  }

  //Get account(1)
  GET_account(id: number) {
    return this.http.get(''); //in the api url. add the id to reference the specific block
  }

  //Get Accounts []
  GET_accounts() {
    return this.http.get('').pipe(
      map((responseData) => {
        const data_array = [];
        if (responseData.hasOwnProperty) {
          for (const key in responseData) {
            data_array.push(responseData);
          }
        }
        return data_array;
      })
    );
  }

  DELETE_account(accountId) {
    return this.http.delete('' + accountId);
  }

  UPDATE_account(credentials) {
    return this.http.put('', credentials);
  }
  //END Accounts

  //START Content
  POST_content(content) {
    return this.http.post('', content);
  }

  GET_content() {
    return this.http.get('').pipe(
      map((responseData) => {
        const data_array = [];
        if (responseData.hasOwnProperty) {
          for (const key in responseData) {
            data_array.push(responseData);
          }
        }
        return data_array;
      })
    );
  }

  PATCH_content(content) {
    return this.http.patch('', content);
  }
  //End Content

  //START MERCH
  //Add merch
  POST_merch(credentials) {
    return this.http.post('', credentials, {
      reportProgress: true,
      observe: 'events',
    });
  }

  //Get Merch(1)
  GET_merch(id: number) {
    return this.http.get(''); //in the api url. add the id to reference the specific block
  }

  //Merch List
  GET_merchs() {
    return this.http.get('').pipe(
      map((responseData) => {
        const data_array = [];
        if (responseData.hasOwnProperty) {
          for (const key in responseData) {
            data_array.push(responseData);
          }
        }
        return data_array;
      })
    );
  }

  DELETE_merch(merchId) {
    return this.http.delete('' + merchId);
  }

  UPDATE_merch(merchData, id: number) {
    return this.http.put('' + id, merchData);
  }

  //END MERCH

  //TEAMS START
  POST_teams_member(credentials) {
    return this.http.post('', credentials, {
      reportProgress: true,
      observe: 'events',
    });
  }

  //GET_Team member
  GET_team_member(id: number) {
    return this.http.get<Teams>(''); //in the api url. add the id to reference the specific block
  }

  //Get teams  []
  GET_teams_list() {
    return this.http.get('').pipe(
      map((responseData) => {
        const data_array = [];
        if (responseData.hasOwnProperty) {
          for (const key in responseData) {
            data_array.push(responseData);
          }
        }
        return data_array;
      })
    );
  }

  DELETE_teams_member(accountId) {
    return this.http.delete('' + accountId);
  }

  UPDATE_teams_member(credentials) {
    return this.http.put('', credentials);
  }

  //TEAMS END

  //SETTINGS/PROFILE START
  UPDATE_image(image, id) {
    return this.http.put('' + id, image);
  }

  //SETTINGS/PROFILE END

  //SETTINGS/PASSWORD START
  UPDATE_pass(pass_data, id) {
    return this.http.put('' + id, pass_data);
  }
  //SETTINGS/PASSWORD END

  //RICH TEXT START

  INIT_RTE(data: string) {
    return tinymce.init({
      selector: '#' + data,
    });
  }

  get DATA_RTE() {
    return tinymce;
  }

  //RICH TEXT END
}
