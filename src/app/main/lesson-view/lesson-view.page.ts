import { Component, OnInit } from '@angular/core';
import { FireService } from 'src/app/services/fire.service';
import { LessonSelectPage } from '../lesson-select/lesson-select.page';
import { ActivatedRoute } from '@angular/router';
import { DataService, LessonHeader } from 'src/app/services/data.service';
@Component({
  selector: 'app-lesson-view',
  templateUrl: './lesson-view.page.html',
  styleUrls: ['./lesson-view.page.scss'],
})
export class LessonViewPage implements OnInit {

  private slug:string;
  private lessonHeader:LessonHeader;

  constructor(private route:ActivatedRoute, private dataService:DataService) { 

  }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('id');
    this.lessonHeader = this.dataService.getLessonHeader();

  }

}
