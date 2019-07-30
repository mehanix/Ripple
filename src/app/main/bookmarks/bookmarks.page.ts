import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Lesson } from 'src/app/services/database.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss'],
})
export class BookmarksPage implements OnInit {

  bookmarks:Lesson[];
  constructor(private storage:Storage, private data:DataService, private router:Router, public alertController:AlertController) { 

    this.storage.get('bookmarks').then(b => {
      this.bookmarks = b;
      console.log(this.bookmarks)
    })
  }

  ionViewWillEnter() {
    this.storage.get('bookmarks').then(b => {
      this.bookmarks = b;
      console.log(this.bookmarks)
    })

  }
   

  async removeBookmark(b:Lesson) {
    const alert = await this.alertController.create({
      header: 'Stai asa!',
      message: 'Esti sigur ca vrei sa stergi lectia ' + b.headerTitle + ' de la favorite?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sterge',
          handler: () => {
            this.bookmarks.splice(this.bookmarks.findIndex((val) => {
              return val.categoryId == b.categoryId && val.id == b.id;
            }), 1); 
            this.storage.set('bookmarks',this.bookmarks)
        
            
          }
        }
      ]
    });

    await alert.present();
  }



  startLesson(l:Lesson) {
    this.data.setLesson(l);
    this.router.navigate(['/lesson-view/bookmark'])

  }

  ngOnInit() {
  }

}
