import { Injectable } from '@angular/core';
import { Lesson, Category, DatabaseService } from '../services/database.service';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  private lesson:Lesson;
  private topicId:string;
 /* private lessonHeader:LessonHeader = {
    title :" this.lesson.titlu",
    category :" this.lesson.numeTopic",
    desc:"",
    img:""
  };*/

  constructor(db:DatabaseService) {
    
 

   }

   setLesson(d:Lesson) {
     this.lesson = d;
     console.log("dataservice", this.lesson);
   }

   getLesson() {
     return this.lesson;
   }
 
  

  /** Getter header lesson - nume, categorie, descriere */
  /*public getLessonHeader() {
    this.lessonHeader.titlu = this.lesson.titlu;
    this.lessonHeader.topic = this.lesson.numeTopic;
    //this.lessonHeader.subtitlu = this.lesson.subtitlu;
    console.log(this.lessonHeader);
    return this.lessonHeader;

  }

 */
}
