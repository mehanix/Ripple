import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainTabsPage } from './main-tabs.page';
import { MainTabsPageRoutingModule } from './main-tabs-routing.module';
const routes: Routes = [
  {
    path: '',
    component: MainTabsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainTabsPageRoutingModule
  ],
  declarations: [MainTabsPage]
})
export class MainTabsPageModule {}
