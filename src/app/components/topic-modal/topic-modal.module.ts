import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicModalComponent } from './topic-modal.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule 
  ],
  declarations: [TopicModalComponent],
  exports: [TopicModalComponent],
  entryComponents: [TopicModalComponent]
})
export class TopicModalModule { }
