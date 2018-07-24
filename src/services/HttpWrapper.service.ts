import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Observable";
import { HttpAngularService } from "./HttpAngular.service";
import { HttpNativeService } from "./HttpNative.service";

@Injectable()
export class HttpWrapperService {
  public http;

  constructor(private platform: Platform,
              private angularHttp: HttpAngularService,
              private nativeHttp: HttpNativeService) {
    this.http = this.platform.is("cordova") ? nativeHttp : angularHttp;
  }

  public get(url, params?: any, options: any = {}): Observable<any> {
    return this.http.get(url, params, options);
  }

  public post(url, params: any, options: any = {}): Observable<any> {
    return this.http.post(url, params, options);
  }
}
