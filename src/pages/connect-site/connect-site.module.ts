import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnectSitePage } from './connect-site';

@NgModule({
  declarations: [
    ConnectSitePage,
  ],
  imports: [
    IonicPageModule.forChild(ConnectSitePage),
  ],
})
export class ConnectSitePageModule {}
