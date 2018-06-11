import { TabsPage } from './../pages/tabs/tabs';
import { ConfigProvider } from './../providers/config/config';
import { IntroPage } from './../pages/intro/intro';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  rootPage: any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, configProvider: ConfigProvider) {
    platform.ready().then(() => {
      let config = configProvider.getConfig();
      if (!config) {
        configProvider.setConfig(false);
        this.rootPage = IntroPage;
      } else {
        this.rootPage = TabsPage;
      }
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
