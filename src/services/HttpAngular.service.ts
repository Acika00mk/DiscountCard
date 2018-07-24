import { HttpClient, HttpParams, HttpResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class HttpAngularService {
  constructor(public http: HttpClient) {
  }

  /**
   * Do a GET request.
   *
   * @param url
   * @param params
   * @param options
   * @returns {Observable<any>}
   */
  public get(url, params?: any, options: any = {}): Observable<any> {
    let requestOptions = {
      withCredentials: true,
      params: params ? this.createSearchParams(params) : null
    };

    return this.http.get(url, requestOptions)
      .map((response: HttpResponse<any>) => {
        return options.responseType == 'text' ? response.body : response;
      });
  }

  /**
   * Do a POST request.
   *
   * @param url
   * @param params
   * @param options
   * @returns {Observable<any>}
   */
  public post(url, params: any, options: any = {}): Observable<any> {
    let requestOptions = {
      withCredentials: true
    };

    let body = this.createSearchParams(params);

    return this.http.post(url, body, requestOptions).map((resp: HttpResponse<any>) => {
      return options.responseType == 'text' ? resp.body : resp;
    });
  }

  /**
   * Create search params base on an object.
   *
   * @param params
   * @returns {HttpParams}
   */
  private createSearchParams(params: any) {
    let searchParams = new HttpParams();
    for (let k in params) {
      if (params.hasOwnProperty(k)) {
        searchParams.set(k, params[k]);
      }
    }
    return searchParams;
  }
}
