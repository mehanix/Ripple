import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: Storage
 
  ) {
    this.platform.ready().then(() => {

      storage.get('setupComplete').then((val) => {
        if(val==true) {
          this.router.navigateByUrl("/main-tabs");
        }
        else
        {
          this.router.navigateByUrl("/welcome");

        
          this.storage.set('date',-1)
          this.storage.set('bookmarks',[]);
        }
  
        this.statusBar.styleBlackTranslucent();
        this.splashScreen.hide();
  
      }); 
      
      });


     
   
  }

 
}
