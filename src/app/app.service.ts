import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ToastrService } from 'ngx-toastr/ngx-toastr';
import { map, filter, switchMap } from 'rxjs/operators';
range(1, 200)
  .pipe(filter(x => x % 2 === 1), map(x => x + x))
  .subscribe(x => console.log(x));

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  url = 'https://chatapi.edwisor.com';

  constructor(public http: HttpClient) { }

  public signUpFunction(data): any {

    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lasttName', data.lastName)
      .set('mobile', data.mobile)
      .set('email', data.email)
      .set('password', data.password)
      .set('apiKey', data.apiKey);

    return this.http.post(`${this.url}/api/v1/users/signup`, params);
  }// end of the signUpFunction.


  public signinFunction(data): Observable<any> {
    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);

    return this.http.post(`${this.url}/api/v1/users/login`, params);

  }// end of signinFunction function


  public setUserInfoFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('userInfo'));
  }

  public setUserInfoInLocalStorage = (data) => {
    localStorage.setItem('userInfo', JSON.stringify(data))
  }
  public logout(): Observable<any> {

    const params = new HttpParams()
      .set('authToken', Cookie.get('authtoken'))

    return this.http.post(`${this.url}/api/v1/users/logout`, params);

  } // end logout function

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    return Observable.throw(errorMessage);

  }  // END handleError


}
