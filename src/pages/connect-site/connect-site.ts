import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertsProvider } from '../../providers/alerts/alerts';
import { LoadingProvider } from '../../providers/loading/loading';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ConnectSitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connect-site',
  templateUrl: 'connect-site.html',
})
export class ConnectSitePage {

  txtUrl: string = "";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,
    private alertProvider: AlertsProvider,
    private loadingProvider: LoadingProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectSitePage');
  }

  toLogin() {
   this.loadingProvider.showLoading()
    if(this.txtUrl.length > 0) {
      this.storage.set("url", this.txtUrl);
      this.navCtrl.push(LoginPage)
    }else{
      this.loadingProvider.dismissLoading()
      this.alertProvider.warningAlert('Alert !', 'Url tidak boleh kosong')
    }   
  }

}
