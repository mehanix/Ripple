import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-topic-modal',
  templateUrl: './topic-modal.component.html',
  styleUrls: ['./topic-modal.component.scss'],
})
export class TopicModalComponent implements OnInit {
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


   async close() {
     await this.modalCtrl.dismiss();
   }

  ngOnInit() {}

}
