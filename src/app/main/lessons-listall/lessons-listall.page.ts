import { Component, OnInit } from '@angular/core';
import { DatabaseService, Lesson } from 'src/app/services/database.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lessons-listall',
  templateUrl: './lessons-listall.page.html',
  styleUrls: ['./lessons-listall.page.scss'],
})
export class LessonsListallPage implements OnInit {

  lessons:Lesson[];
  constructor( private db:DatabaseService, private data:DataService, private router:Router) {
    db.getLessons().subscribe(l => {
      this.lessons = l;
      console.log("All lessons", l)
    })

   }

   startLesson(l:Lesson) {
    this.data.setLesson(l);
    this.router.navigate(['/lesson-view/bookmark'])

  }

  ngOnInit() {
  }

}
