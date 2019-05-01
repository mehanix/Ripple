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
  public selectedTopics;

  constructor(private storage:Storage, private fireService:FireService, private modalCtrl:ModalController) { 

    this.topics = fireService.getTopicsPrezentare();
    this.selectedTopics = [];
  }

  ngOnInit() {
  
  }

  saveTopics() {


  }

  async showModal(item:any) {
    const modal = await this.modalCtrl.create({
      component:TopicModalComponent,
      componentProps: {
        data: item
      },
    })
    await modal.present();
  }
}
