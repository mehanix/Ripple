import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
 
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [ ],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            IonicStorageModule.forRoot({
              name: '__mydb',
              driverOrder: ['indexeddb', 'sqlite', 'websql']
            }),
            AppRoutingModule,
            HttpClientModule
        
            ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocalNotifications,
    SQLite,
    SQLitePorter
  ],
  bootstrap: [AppComponent]
 
})
export class AppModule {}
