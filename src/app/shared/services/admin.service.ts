import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

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

  //TEAMS END

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
