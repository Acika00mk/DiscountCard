import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpNativeService {
  constructor(public http: HTTP) {
  }

  /**
   * Do a GET request.
   *
   * @param url
   * @param params
   * @param options
   * @returns {Observable<HTTPResponse>}
   */
  public get(url, params?: any, options: any = {}): Observable<any> {
    let responseData = this.http.get(url, params, {})
      .then(response => options.responseType == 'text' ? response.data : JSON.parse(response.data))
      .catch((err) => {
        console.error(err)
      });
    return Observable.fromPromise(responseData);
  }

  /**
   * Do a POST request.
   *
   * @param url
   * @param params
   * @param options
   * @returns {Observable<HTTPResponse>}
   */
  public post(url, params?: any, options: any = {}): Observable<any> {
    let responseData = this.http.post(url, params, {})
      .then(response => options.responseType == 'text' ? response.data : JSON.parse(response.data))
      .catch((err) => {
        console.error(err)
      });
    return Observable.fromPromise(responseData);
  }
}
