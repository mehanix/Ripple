import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Category, DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-topic-modal',
  templateUrl: './topic-modal.component.html',
  styleUrls: ['./topic-modal.component.scss'],
})
export class TopicModalComponent implements OnInit {

  cat:Category;
  isSelected:boolean;
  categories:Category[];

  constructor ( private db:DatabaseService, private navParams: NavParams, private modalCtrl:ModalController,  private storage:Storage) {
    this.cat = this.navParams.data.category;
    console.log(this.cat);
    if (this.cat.progress !== null) {
      this.isSelected = true;
    }
    else {
      this.isSelected = false;
    }
    console.log(this.navParams.data)
    this.storage.get("categories").then(data => {
      this.categories = data;
      console.log("categories in modal", this.categories)

    })

  }

  changeTopicState() {
    console.log("click")
    if(this.isSelected==false) {
      this.categories.push(this.cat)
      this.storage.set("categories",this.categories).catch(err => {console.log(err)})
      console.log("selectat!", this.categories)
      this.isSelected = true;
      this.db.setProgress(0,this.cat.categoryId);

    }
    else 
    {
      let index = -1;
      for (let i=0; i<this.categories.length && index===-1; i++) {
        if( this.categories[i].categoryId === this.cat.categoryId)
          index = i;
      }
      this.categories.splice(index, 1);
      this.storage.set("categories",this.categories).catch(err => {console.log(err)})

      console.log("deselectat",this.categories)
      this.isSelected = false;
      this.db.setProgress(null,this.cat.categoryId);

    }

    this.close()

      
      //cauta
      


    }

  
  

  async close() {
    await this.modalCtrl.dismiss();
  }
/*
 changeTopicState() {

    if(this.isSelected==true) {
      
      this.topicsList.splice(this.topicsList.indexOf(this.data["nume"]),1);
      console.log(this.topicsList)

    }
    else {
      this.topicsList.push(this.data["nume"]);
    }

    this.storage.set('topics',this.topicsList);
    this.modalCtrl.dismiss();
  }

*/
 


  /*
  @Input() data:any;
  @Input() topicsList:string[];

    saveTopics:any;

    text:string;
    isSelected:boolean;
  constructor(private modalCtrl:ModalController, private navParams:NavParams, private storage:Storage) {
    this.topicsList =  this.navParams.get("topicsList");
    this.data =  this.navParams.get("data");
  //  this.saveTopics();
    console.log(this.data["nume"]);
    console.log(this.topicsList);

    if (this.topicsList.includes(this.data["nume"]))
      {
       this.text="Deselect topic";
       this.isSelected=true;

      } else {
        this.text="Select topic";
        this.isSelected=false;

      }
   }

   
   
*/ 
  ngOnInit() {}

}
