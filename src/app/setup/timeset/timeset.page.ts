import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';



@Component({
  selector: 'app-timeset',
  templateUrl: './timeset.page.html',
  styleUrls: ['./timeset.page.scss'],
})
export class TimesetPage implements OnInit {

  private selectedTime:Date;



  constructor(private storage: Storage, private localNotifications: LocalNotifications) { }

  ngOnInit() {
  }

  saveTime() {
    var time = new Date(this.selectedTime);
    let hr:number;
    let min:number;

    hr = time.getHours();
    min = time.getMinutes();

    this.storage.set('hour', hr);
    this.storage.set('min', min);

    this.localNotifications.schedule({
      id: 42,
      title: 'Here\'s your lesson for the day!',
      text: 'Ready to learn?',
      trigger: { every: { hour: hr, minute: min } }
    });
   
  }

  finishSetup() {
    this.storage.set('setupComplete', true);

  }

  }

