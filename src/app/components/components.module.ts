import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TopicCardsComponent } from './topic-cards/topic-cards.component';

@NgModule({
  declarations: [TopicCardsComponent],
  imports: [
    CommonModule,
    IonicModule,
    
  ],
  exports:[TopicCardsComponent]
})
export class ComponentsModule { }
