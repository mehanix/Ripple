import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


@Component({
  selector: 'app-timeset',
  templateUrl: './timeset.page.html',
  styleUrls: ['./timeset.page.scss'],
})
export class TimesetPage implements OnInit {

  selectedTime:Date;
   hr:number;
  min:number;


  constructor(private storage: Storage, private localNotifications:LocalNotifications) { }

  ngOnInit() {
  }

  saveTime() {
    var time = new Date(this.selectedTime);
  

    this.hr = time.getHours();
    this.min = time.getMinutes();

    this.storage.set('hour', this.hr);
    this.storage.set('min', this.min);
    

   

  }

  finishSetup(setNotification:boolean) {

    if(setNotification==true) {

      this.localNotifications.schedule({
        id: 42,
        title: "Here's your lesson for the day!",
        text: 'Ready to learn?',
        trigger: { every: { hour: this.hr, minute: this.min } },
        smallIcon: 'res://ic_stat_notify.png',
        icon: 'res://icon.png',
      });

    }
    else 
    {
      this.localNotifications.clearAll();
    }
   
    this.storage.set('setupComplete', true);

  }



  }

