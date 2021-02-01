import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the LoadingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadingProvider {

  loader: any

  constructor(
    private loadingCtrl: LoadingController
  ) {
    console.log('Hello LoadingProvider Provider');    
  }

  showLoading() {
    this.loader = this.loadingCtrl.create({
      content: 'Loading',
      dismissOnPageChange: true,
      enableBackdropDismiss: false,
    })
    this.loader.present()
  }

  dismissLoading() {
    this.loader.dismissAll()
  }



}
