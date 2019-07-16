import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
//import { DataService, Lesson } from 'src/app/services/data.service';
import { MenuController } from '@ionic/angular';
import {DatabaseService, Lesson} from '../../services/database.service';



@Component({
  selector: 'app-lesson-select',
  templateUrl: './lesson-select.page.html',
  styleUrls: ['./lesson-select.page.scss'],
})
export class LessonSelectPage implements OnInit {

  lessons: Lesson[] = [];

  constructor(private db:DatabaseService) {

  }


  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {

      if(rdy) {
        this.db.getLessons().subscribe(ls => {
          this.lessons = ls;
          console.log(this.lessons);
        })

      }
    })

  }

/*
  private selectedTopic:string;
  private todaysLesson:Lesson;
  topicName: string;
  constructor(private menu:MenuController, private storage:Storage, private fireService:FireService, private dataService:DataService) { 

    this.storage.get('topics').then((val:Array<string>) => {

      
      //console.log(val);
      
      var topicNr = this.getRandomInt(val.length);
     

      this.selectedTopic = val[topicNr];
     // console.log(this.selectedTopic, topicNr);
     

     var promise =  fireService.selectTopicLesson(this.selectedTopic);
     promise.then((([array, name, topicId])  => {
       this.todaysLesson = array; 
       this.topicName = name;
       dataService.setLessonContent(this.todaysLesson);
       dataService.setTopicId(topicId);
       console.log(topicId);
       console.log(val);
      }));
    });
  }



*/
 
/*
startLesson(){

}

public getLessonData() {
  return this.todaysLesson;
}

public getTopicName() {
  return this.topicName;
}


getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

openMenu() {

  console.log("clack");
  this.menu.enable(true, 'first');
  this.menu.open('first');
}
*/
}
