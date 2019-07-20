import { Component, OnInit } from '@angular/core';
import { LessonSelectPage } from '../lesson-select/lesson-select.page';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from 'src/app/services/database.service';
import { DataService } from 'src/app/services/data.service';
//import { DataService, LessonHeader } from 'src/app/services/data.service';

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

  lesson:Lesson;
  segments:Segment[] = [];


  constructor(private data:DataService) {

   // this.lesson = l.getLessonContent();

  }
  ngOnInit() {

    this.lesson = this.data.getLesson();

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
 /*
  clack() {
    console.log("clack clack")
  }*/
}
