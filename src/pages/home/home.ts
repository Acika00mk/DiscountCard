import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { Storage } from "@ionic/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public data : string = "BarcodeData ";
  public cards : string[];

  constructor(
              private platform : Platform,
              private storage: Storage,
              private barcodeScanner: BarcodeScanner) {


  }


  scan(){
    if(this.platform.is("cordova")){
      this.barcodeScanner.scan().then((barcodeData : any) => {
        this.data = barcodeData;
        this.storage.get("cards").then( ()=>{


        }).catch( () =>{
          // if not item
          let niza = [];
          niza.push(barcodeData.text);
          this.storage.set("cards", niza.toString());
        })
      }).catch(err => {
        console.log('Error', err);
      });
    }

  }

}
