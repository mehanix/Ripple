import { Component, OnInit, ViewChild } from '@angular/core';
import { TopicCardsComponent } from 'src/app/components/topic-cards/topic-cards.component';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
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
  constructor(private db:DatabaseService, private storage:Storage) {

    db.getCategories().subscribe(c => {this.categories = c});
    this.storage.get('categories').then(data => { this.storageData = data;})

  //  this.selectedCategories = loadSelectedCategories();

    /*

   this.storage.get('categories').then(data => { this.storageData = data;})
   .then(() => {
     this.db.getCategories().pipe(map(arr => 
      arr.filter( r =>  
        //cauta in arrayul de obiecte categoryData categoriile din storageData care au fost selectate de user
        //si salveaza-le datele intr-un nou observable
        this.storageData.filter( o => (o.categoryId == r.categoryId)).length > 0 ))).subscribe(a => { 
        console.log("save me lord", a); this.selectedCategories = a;})
      
              




     this.db.getCategories().pipe(map(arr => 
          arr.filter( r =>  
            //cauta in arrayul de obiecte categoryData categoriile din storageData care au fost selectate de user
            //si salveaza-le datele intr-un nou observable
            this.storageData.filter( o => (o.categoryId == r.categoryId)).length === 0 ))).subscribe(a => { 
            console.log("save me lord", a); this.unselectedCategories = a;})
        


  }) */
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

  deselectCategory( cat:Category) {


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
  

/*
  private topics;
  public selectedTopics:string[];

  constructor(private storage:Storage, private fireService:FireService, private modalCtrl:ModalController) { 

    

  }
*/ 
  ngOnInit() {

  
/*
    this.topics = this.fireService.getTopicsPrezentare();
    this.storage.get('topics').then((p) => {     
      this.selectedTopics = p;
    }).then(() => {console.log(this.selectedTopics)})
 */
  }
 
   /*
  saveTopics() {

    console.log("topicz saved")

  }

  async showModal(item:any) {
    const modal = await this.modalCtrl.create({
      component:TopicModalComponent,
      componentProps: {
        data: item,
        topicsList:this.selectedTopics,
        change:this.saveTopics.bind(this)
      },
    })
    await modal.present();
  */
}
