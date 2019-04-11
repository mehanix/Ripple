import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'welcome', loadChildren: './setup/welcome/welcome.module#WelcomePageModule' },
  { path: 'topics', loadChildren: './setup/topics/topics.module#TopicsPageModule' },
  { path: 'timeset', loadChildren: './setup/timeset/timeset.module#TimesetPageModule' },
  { path: 'lesson-select', loadChildren: './main/lesson-select/lesson-select.module#LessonSelectPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
