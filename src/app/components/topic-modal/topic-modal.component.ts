import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-topic-modal',
  templateUrl: './topic-modal.component.html',
  styleUrls: ['./topic-modal.component.scss'],
})
export class TopicModalComponent implements OnInit {
  @Input() data:any;

  constructor(private modalCtrl:ModalController) {


   }

   async close() {
     await this.modalCtrl.dismiss();
   }

  ngOnInit() {}

}
