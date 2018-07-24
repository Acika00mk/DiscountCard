import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { NgxBarcodeModule } from "ngx-barcode";
import { IonicStorageModule } from "@ionic/storage";
import { StorageService } from "../services/storage.service";
import { HTTP } from "@ionic-native/http";
import { HttpAngularService } from "../services/HttpAngular.service";
import { HttpNativeService } from "../services/HttpNative.service";
import { HttpWrapperService } from "../services/HttpWrapper.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CustomHttpInterceptor } from "../services/HttpInterceptor.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxBarcodeModule,
    IonicStorageModule.forRoot(),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    HTTP,
    HttpAngularService,
    HttpNativeService,
    HttpWrapperService,
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    },
  ]
})
export class AppModule {}
