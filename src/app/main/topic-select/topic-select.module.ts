import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TopicSelectPage } from './topic-select.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TopicModalModule } from 'src/app/components/topic-modal/topic-modal.module';

const routes: Routes = [
  {
    path: '',
    component: TopicSelectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    TopicModalModule
  ],
  declarations: [TopicSelectPage],
})
export class TopicSelectPageModule {}
