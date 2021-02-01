import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertsProvider } from '../../providers/alerts/alerts';
import { ApiProvider } from '../../providers/api/api';
import { LoadingProvider } from '../../providers/loading/loading';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  url:string = ""
  username:string = ""
  password:string = ""

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,
    private apiProvider: ApiProvider,
    private alertProvider: AlertsProvider,
    private loadingProvider: LoadingProvider
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.storage.get("url").then(
      (res) => {
        console.log(res)
        this.url = res;
      },
      (err) => {
        console.log("Err : " + err)
      }
    ).catch((error) => {
      console.log("Error : " + error)
    })
  }

  submitLogin() {
    this.loadingProvider.showLoading()
    if(this.username.length == 0 || this.password.length == 0) {
      this.loadingProvider.dismissLoading()
      this.alertProvider.warningAlert('Alert', 'Username dan Password tidak boleh kosong');
    }else{
      this.apiProvider.requestToken(this.url, this.username, this.password)
      .then((response) => {
        this.loadingProvider.dismissLoading();
        this.storage.set("token", response['token']);
        this.storage.set("username", this.username)
        this.storage.set("password", this.password)
        this.navCtrl.setRoot(HomePage, {'url': this.url, 'token': response['token']})
      })
      .catch((error) => {
        this.loadingProvider.dismissLoading()
        console.log(error)
      })
    }
  }

}
