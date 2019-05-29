import { Component, OnInit, ViewChild } from '@angular/core';
import { TopicCardsComponent } from 'src/app/components/topic-cards/topic-cards.component';
import { Storage } from '@ionic/storage';
import { FireService } from 'src/app/services/fire.service';
import { ModalController } from '@ionic/angular';
import { TopicModalComponent } from 'src/app/components/topic-modal/topic-modal.component';

@Component({
  selector: 'app-topic-select',
  templateUrl: './topic-select.page.html',
  styleUrls: ['./topic-select.page.scss'],
})
export class TopicSelectPage implements OnInit {

  private topics;
  public selectedTopics:string[];

  constructor(private storage:Storage, private fireService:FireService, private modalCtrl:ModalController) { 

    

  }

  ngOnInit() {

    this.topics = this.fireService.getTopicsPrezentare();
    this.storage.get('topics').then((p) => {     
      this.selectedTopics = p;
    }).then(() => {console.log(this.selectedTopics)})
  
  
  }

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
  }
}
