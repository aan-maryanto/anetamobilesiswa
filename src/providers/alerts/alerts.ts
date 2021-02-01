import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the AlertsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertsProvider {

  constructor(
    private alertCtrl : AlertController
  ) {
  }

  successAlert(txtTitle: string, txtMsg: string) {
    const alert = this.alertCtrl.create({
      title: txtTitle,
      message: txtMsg,
      cssClass: 'alert-success',
      buttons: ['OK']
    })
    alert.present()
  }

  warningAlert(txtTitle: string, txtMsg: string) {
    const alert = this.alertCtrl.create({
      title: txtTitle,
      message: txtMsg,
      cssClass: 'alert-warning',
      buttons: ['OK']
    })
    alert.present()
  }

  dangerAlert(txtTitle: string, txtMsg: string) {
    const alert = this.alertCtrl.create({
      title: txtTitle,
      message: txtMsg,
      cssClass: 'alert-danger',
      buttons: ['OK']
    })

    alert.present()
  }

}
