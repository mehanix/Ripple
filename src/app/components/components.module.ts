import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TopicCardsComponent } from './topic-cards/topic-cards.component';
import { LessonSectionComponent } from './lesson-section/lesson-section.component';
import { TopicModalComponent } from './topic-modal/topic-modal.component';


@NgModule({
  declarations: [TopicCardsComponent, LessonSectionComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[TopicCardsComponent, LessonSectionComponent], 
})
export class ComponentsModule { }
