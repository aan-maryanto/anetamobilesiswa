import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PipesModule } from '../pipes/pipes.module';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LoginPageModule } from '../pages/login/login.module';
import { ConnectSitePageModule } from '../pages/connect-site/connect-site.module';
import { AlertsProvider } from '../providers/alerts/alerts';
import { NotificationsProvider } from '../providers/notifications/notifications';
import { ApiProvider } from '../providers/api/api';
import { IonicStorageModule } from '@ionic/storage';
import { LoadingProvider } from '../providers/loading/loading';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    PipesModule,
    LoginPageModule,
    ConnectSitePageModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlertsProvider,
    NotificationsProvider,
    ApiProvider,
    LoadingProvider,
  ]
})
export class AppModule {}
