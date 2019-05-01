import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTabsPage } from './main-tabs.page';

const routes: Routes = [
  {
    path: 'main-tabs',
    component: MainTabsPage,
    children:
      [
        {
            path: 'lesson-select', loadChildren: '../lesson-select/lesson-select.module#LessonSelectPageModule'
        },
        {
            path: 'topic-select', loadChildren: '../topic-select/topic-select.module#TopicSelectPageModule'
        },
        {
            path: 'options', loadChildren: '../settings/settings.module#SettingsPageModule'
        },
        {
            path: 'about', loadChildren: '../about/about.module#AboutPageModule'
        },
    
        {
          path: '',
          redirectTo: 'main-tabs/lesson-select',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: 'main-tabs/lesson-select',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class MainTabsPageRoutingModule {}