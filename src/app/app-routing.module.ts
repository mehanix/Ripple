import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 // { path: '', redirectTo: 'welcome', pathMatch: 'full' },

  { path: 'welcome', loadChildren: './setup/welcome/welcome.module#WelcomePageModule' },
  { path: 'topics', loadChildren: './setup/topics/topics.module#TopicsPageModule' },
  { path: 'timeset', loadChildren: './setup/timeset/timeset.module#TimesetPageModule' },
  { path: 'lesson-select', loadChildren: './main/lesson-select/lesson-select.module#LessonSelectPageModule' },
  { path: 'lesson-view/:mode', loadChildren: './main/lesson-view/lesson-view.module#LessonViewPageModule' },
  { path: 'topic-select', loadChildren: './main/topic-select/topic-select.module#TopicSelectPageModule' },
  { path: 'settings', loadChildren: './main/settings/settings.module#SettingsPageModule' },
  { path: 'about', loadChildren: './main/about/about.module#AboutPageModule' },
  { path: 'main-tabs', loadChildren: './main/main-tabs/main-tabs.module#MainTabsPageModule' },
  { path: 'bookmarks', loadChildren: './main/bookmarks/bookmarks.module#BookmarksPageModule' },
  { path: 'lessons-listall', loadChildren: './main/lessons-listall/lessons-listall.module#LessonsListallPageModule' },  { path: 'greeter', loadChildren: './setup/greeter/greeter.module#GreeterPageModule' },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
