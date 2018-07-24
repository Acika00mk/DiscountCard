import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Events } from "ionic-angular";
import "rxjs/add/observable/throw"
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {


  constructor(private events: Events) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //send the newly created request
    return next.handle(request)
      .catch((error) => {

        // Logout the user if there"s a 401 HTTP status being returned (server-side logout).
        // Exclude App Suite requests, they should not cause a logout.
        if (request && request.url && error.status === 401 || error.status === "401") {
          this.events.publish("EVENT_LOGOUT");
        }
        // Return original error for further processing.
        return Observable.throw(error);
      }) as any;
  }
}
