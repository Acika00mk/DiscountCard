import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public data : string = "BarcodeData ";

  constructor(public navCtrl: NavController,
              private platform : Platform,
              private barcodeScanner: BarcodeScanner) {

  }


  scan(){
    if(this.platform.is("cordova")){
      this.barcodeScanner.scan().then((barcodeData : any) => {
        this.data = barcodeData;
      }).catch(err => {
        console.log('Error', err);
      });
    }

  }

}
