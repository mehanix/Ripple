import { Component, OnInit, ViewChild } from '@angular/core';
import { TopicCardsComponent } from 'src/app/components/topic-cards/topic-cards.component';
import { Storage } from '@ionic/storage';
import { ModalController, AlertController } from '@ionic/angular';
import { TopicModalComponent } from 'src/app/components/topic-modal/topic-modal.component';
import { Observable, BehaviorSubject } from 'rxjs';
import { Category, DatabaseService, CategoryData } from 'src/app/services/database.service';
import { filter, map } from 'rxjs/operators';

interface ICategoryCard extends Category {
  percentage:number;
}


@Component({
  selector: 'app-topic-select',
  templateUrl: './topic-select.page.html',
  styleUrls: ['./topic-select.page.scss'],
})
export class TopicSelectPage implements OnInit {




  storageData: CategoryData[]; //array din localStorage cu categoriile alese de user

  categories: Category[] = []
  constructor(private db:DatabaseService, private storage:Storage, public alertController: AlertController) {

    db.getCategories().subscribe(c => {this.categories = c});
    this.storage.get('categories').then(data => { this.storageData = data;})

  }

  loadSelectedCategories() {

  }


  selectCategory( cat:Category) {

    let newCategory:CategoryData = {
      categoryId:cat.categoryId,
      progress:0,
      lessonCount:cat.lessonCount
    };

    this.storageData.push(newCategory);
    this.db.setProgress(0,cat.categoryId);
    this.storage.set('categories', this.storageData).then(() => {
      this.storage.get('categories').then( c => { console.log(c)})})



  }


  async deselectCategory( cat:Category) {
    const alert = await this.alertController.create({
      header: 'Esti sigur?',
      message: 'Daca renunti la cursurile categoriei ' + cat.name + ', vei pierde progresul facut pana acum!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //do nothing.
          }
        }, {
          text: 'Renunta',
          handler: () => {


            var index = this.categories.indexOf(cat);
            console.log("before deselect",this.categories, index)
        
            if(index!==-1) {
              this.categories.splice(index, 1); 
              this.db.resetProgress(cat.categoryId)
        
            }
        
            for(let i=0;i<this.storageData.length;i++) {
        
              if (this.storageData[i].categoryId == cat.categoryId)
                {
                  this.storageData.splice(i, 1); 
                  this.storage.set('categories', this.storageData).then(() => {
                    this.storage.get('categories').then( c => { console.log(c)})
                  })
        
                  
                 
                }
        
            }
        
            console.log("deselectcategory",this.categories)
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }
 
  
}
