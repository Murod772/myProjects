import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


  signOut(){
    this.auth.signOut();
  }
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Profile',
      url: '../dispatcher/profile',
      icon: 'person'
    },
    {
      title: 'Loads',
      url: '../dispatcher/loads/current',
      icon: 'albums'
    },
    {
      title: 'Drivers',
      url: '../dispatcher/drivers/active',
      icon: 'car'
    },
    {
      title: 'Trailers',
      url: '../dispatcher/trailers',
      icon: 'browsers'
    },
    // {
    //   title: 'Messages',
    //   url: 'messages',
    //   icon: 'mail'
    // },
    {
      title: 'Notifications',
      url: '../dispatcher/notifications',
      icon: 'notifications'
    },
    // {
    //   title: 'Maps',
    //   url: 'maps',
    //   icon: 'map'
    // },
    {
      title: 'Settings',
      url: '../dispatcher/settings',
      icon: 'settings'
    },
    // {
    //   title: 'Log-Out',
    //   url: 'auth',
    //   icon: 'log-out'
    // }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
