import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TopicCardComponent } from './topic-card/topic-card.component';

@NgModule({
  declarations: [TopicCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    
  ],
  exports:[TopicCardComponent]
})
export class ComponentsModule { }
