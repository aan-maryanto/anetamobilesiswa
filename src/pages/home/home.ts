import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { LoadingProvider } from '../../providers/loading/loading';
import { AlertsProvider } from '../../providers/alerts/alerts';
import { ApiProvider } from '../../providers/api/api';
import { Storage } from '@ionic/storage';
import { NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ConnectSitePage } from '../connect-site/connect-site';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isloading: boolean = true;
  linkUrl: any = '';
  url: string = '';
  token: string = '';
  objMentees: object = null;
  // contentMentees: string = '<ul><li><a href="http://103.234.195.166/user/view.php?id=337&amp;course=1">Ismaniar Febriani</a></li><li><a href="http://103.234.195.166/user/view.php?id=338&amp;course=1">Veri Butir</a></li><li><a href="http://103.234.195.166/user/view.php?id=340&amp;course=1">Airlangga Dwi Testa Pasmika</a></li></ul>';
  contentMentees: string = ''
  // titleContentMentees: string = 'Profile Anak';
  titleContentMentees: string = ''
  options: InAppBrowserOptions = {
    location: 'no',
    hidden: 'no',
    zoom: 'no',
    hideurlbar: 'yes',
    hidenavigationbuttons: 'yes',
    hardwareback: 'no',
  }

  sitename: string = ''

  constructor(
    public navCtrl: NavController,
    public navParam: NavParams,
    private iab: InAppBrowser,
    private alertProvider: AlertsProvider,
    private loadingCtrl: LoadingController,
    private apiProvider: ApiProvider,
    private storage: Storage
    ) {
    this.url = navParam.get('url')
    this.token = navParam.get("token")
  }

  // ionViewWillEnter(){
  //   this.getDashboard()
  // }

  ionViewDidLoad(){
    this.getDashboard()
  }

  // openBrowser() {
  //   const browser = this.iab.create('http://103.234.195.166/', '_blank' , this.options)
  //   browser.show();
  //   browser.on('exit').subscribe(() => {
  //     console.log("Browser closed")
  //     browser.close()
  //   }, err => {
  //     console.log(err)
  //   })
  // }

  openBrowser(event) {
    // console.log("Event : " + JSON.stringify(event))
    // console.log(event.target.tagName == "A")
    // var pageContent = '<html><head></head><body><form id="loginForm" action="YourPostURL" method="post">' +
    // '<input type="hidden" name="key1" value="' + YourValue1 + '">' +
    // '<input type="hidden" name="key" value="' + YourValue2 + '">' +
    // '</form> <script type="text/javascript">document.getElementById("loginForm").submit();</script></body></html>';
    // var pageContentUrl = 'data:text/html;base64,' + btoa(pageContent);
    if(event.target.tagName == "A") {
      const browser = this.iab.create(event.target.href, "_blank", this.options);
      browser.show()
      return false
    }
  }

  getDashboard() {
    // const loader = this.loadingCtrl.create({
    //   content: "Loading",
    //   dismissOnPageChange: true,
    //   enableBackdropDismiss: false,
    // })
    // loader.present()
    // console.log("URL : "+this.url)
    // console.log("TOKEN : "+this.token)
    this.isloading = true;
    this.apiProvider.requestGetDashboardFilter(this.url, this.token)
    .then((result) => {
      // loader.dismiss()
      this.isloading = false;
      console.log(result)
      result['blocks'].forEach(element => {
        if(element['name'] == "mentees") {
          this.objMentees = element
          this.titleContentMentees = this.objMentees['contents']['title']
          this.contentMentees = this.objMentees['contents']['content']
        }
      });
    }, (err) => {
      console.log(err)
      this.isloading = false;
    })
    .catch((err) => {
      // loader.dismiss()
      this.isloading = false;
      console.log(err)
    })
  }

  logoutBtn() {
    this.storage.clear();
    this.navCtrl.setRoot(ConnectSitePage)
  }

}
