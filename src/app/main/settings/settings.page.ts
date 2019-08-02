import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  selectedTime:Date;
   hr:number;
  min:number;

  constructor(public toastController: ToastController, private localNotifications:LocalNotifications, private storage:Storage ) { }

  ngOnInit() {
  }

  saveTime() {

    this.localNotifications.clearAll().then(() => {
      this.hr = time.getHours();
    this.min = time.getMinutes();

    this.storage.set('hour', this.hr);
    this.storage.set('min', this.min);
    this.localNotifications.schedule({
      id: 42,
      title: "Here's your lesson for the day!",
      text: 'Ready to learn?',
      trigger: { every: { hour: this.hr, minute: this.min } },
      smallIcon: 'res://ic_stat_notify.png',
      icon: 'res://icon.png',
    });
    })

    var time = new Date(this.selectedTime);
  

    this.hr = time.getHours();
    this.min = time.getMinutes();

    this.storage.set('hour', this.hr);
    this.storage.set('min', this.min);
    this.storage.get('hour').then(a => {
      console.log("reset",a)
    })  
    this.presentToast("Ora schimbata!");
  }

  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  removeNotification() {
    this.localNotifications.clearAll();
    this.presentToast("Notificare dezactivata!");

  }

}
