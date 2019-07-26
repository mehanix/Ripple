import { Component, OnInit } from '@angular/core';
import { LessonSelectPage } from '../lesson-select/lesson-select.page';
import { ActivatedRoute } from '@angular/router';
import { Lesson, CategoryData, DatabaseService } from 'src/app/services/database.service';
import { DataService } from 'src/app/services/data.service';
//import { DataService, LessonHeader } from 'src/app/services/data.service';
import { Storage } from '@ionic/storage';

interface Segment {

  // subtitle:string;
   paragraph: string;
   img: string;
  // imgCaption:string;
 }
@Component({
  selector: 'app-lesson-view',
  templateUrl: './lesson-view.page.html',
  styleUrls: ['./lesson-view.page.scss'],
})
export class LessonViewPage implements OnInit {

  lesson:Lesson = null;
  segments:Segment[] = [];
  categoryData:CategoryData[] = [];
  isLessonComplete:number;

  constructor(private data:DataService, private storage:Storage, private db:DatabaseService) {

   // this.lesson = l.getLessonContent();

    this.storage.get('categories').then(c => {this.categoryData = c})
  }
  ngOnInit() {
    
    

     
      this.lesson = this.data.getLesson()
      this.isLessonComplete = this.lesson.isComplete;
      console.table("isLessonComplete",this.isLessonComplete);
    


  }

  ionViewWillEnter() {
    console.log("segmente start")
    try {
      this.lesson = this.data.getLesson();
      for (let i in this.lesson.paragraphs) {
        this.segments.push({
          paragraph:this.lesson.paragraphs[i],
          img:this.lesson.img[i]
          
          })
      }
      console.log("Segmente")
      console.table(this.segments);
    } catch(err) {console.log(err)} 
   
  //  this.slug = this.route.snapshot.paramMap.get('id');
   // this.lessonHeader = this.dataService.getLessonHeader();

  }

  clack() {
    console.log("clack clack")
  }

  completeLesson(id:number) {

    console.log("IslessonComplete is:",this.isLessonComplete)
    if(this.isLessonComplete === 0) {
      console.log("Sunt in if!")
      this.isLessonComplete = 1;
      this.categoryData.forEach(c => {
        if (c.categoryId == id)
          c.progress++;
          console.log("modified categoryData",this.categoryData)
          //localstorage
          this.storage.set('categories',this.categoryData)

          //db
          this.db.setProgress(c.progress,id)
       
          this.db.setLessonComplete(this.lesson.id,1)

          //data service FIXME: get rid of it......
          this.lesson.isComplete=1;
          this.data.setLesson(this.lesson)
          //TODO: SET LESSON COMPLETE TO TRUE IN DB (scrie functie pt asta)
         
      })

    }
    console.log("IslessonComplete is:",this.isLessonComplete)

    
  }
}
