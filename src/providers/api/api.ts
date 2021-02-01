import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  data: any;

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  requestToken(url:string, username:string, password: string) {
    var txturl = url+"/login/token.php?username="+username+"&password="+password+"&service=moodle_mobile_app"
    return new Promise(resolve => {
      this.http.get(txturl).subscribe((data:any) => {
        this.data = data
        resolve(this.data)
      })
    });
  }

  requestSiteInfo(url:string, token: string) {
    var txturl = url+"webservice/rest/server.php?moodlewsrestformat=json&wstoken="+token+"&wsfunction=core_webservice_get_site_info&moodlewssettingfilter=true&moodlewssettingfileurl=true"
    return new Promise(resolve => {
      this.http.get(txturl).subscribe((data:any) => {
        this.data = data
        resolve(this.data)
      })
    })
  }

  requestGetDashboard(url:string, token:string) {
    var txtUrl = url+"/webservice/rest/server.php?wstoken="+token+"&wsfunction=core_block_get_dashboard_blocks&moodlewsrestformat=json"
    return new Promise(resolve => {
      this.http.get(txtUrl).subscribe((data:any) => {
        this.data = data
        resolve(this.data)
      })
    })
  }

  requestGetDashboardFilter(url:string, token:string) {
    var txtUrl = url+"/webservice/rest/server.php?wstoken="+token+"&wsfunction=core_block_get_dashboard_blocks&moodlewsrestformat=json&returncontents=1&moodlewssettingfilter=true&moodlewssettingfileurl=true"
    return new Promise(resolve => {
      this.http.get(txtUrl).subscribe((data:any) => {
        this.data = data
        resolve(this.data)
      })
    })
  }

}
