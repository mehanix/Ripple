import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FireService } from 'src/app/services/fire.service';


export interface Lesson {
  imagini: string[];
  data: string[];
  titlu: string[];
}

@Component({
  selector: 'app-lesson-select',
  templateUrl: './lesson-select.page.html',
  styleUrls: ['./lesson-select.page.scss'],
})
export class LessonSelectPage implements OnInit {

  private selectedTopic:string;
  private todaysLesson:Lesson;
  topicName: string;
  constructor(private storage:Storage, private fireService:FireService) { 

    this.storage.get('topics').then((val:Array<string>) => {
      //console.log(val);
      
      var topicNr = this.getRandomInt(val.length);
     

      this.selectedTopic = val[topicNr];
     // console.log(this.selectedTopic, topicNr);
     

     var promise =  fireService.selectTopicLesson(this.selectedTopic);
     promise.then((([array, name])  => { this.todaysLesson = array; this.topicName = name; console.log(val);}));
    });
  }




  ngOnInit() {
  }

startLesson(){

}


getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

}
