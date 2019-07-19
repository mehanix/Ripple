import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
//import { DataService, Lesson } from 'src/app/services/data.service';
import { MenuController } from '@ionic/angular';
import {DatabaseService, CategoryData, Lesson} from '../../services/database.service';

export interface LessonHeader {

  title:string;
  category:string;
  desc:string;
  img:string;

}

@Component({
  selector: 'app-lesson-select',
  templateUrl: './lesson-select.page.html',
  styleUrls: ['./lesson-select.page.scss'],
})
export class LessonSelectPage implements OnInit {

  lessonHeader:LessonHeader;
  categoryData:CategoryData[] = [];
  category:CategoryData;
  lesson:Lesson;
  constructor(private db:DatabaseService, private storage:Storage) {
    this.storage.get("categories").then(cats => {
      console.log("Categorii constructor",cats);
      this.categoryData = cats;
  }).then(_ => {
    this.db.getDatabaseState().subscribe(rdy => {
      if(rdy) {

        //TODO: prepare lesson, then get lesson header here async.
         this.category = this.categoryData[Math.floor((Math.random()*this.categoryData.length))]
  
        console.log("Categorie aleasa",this.category);
       // if(this.category.progress<this.category.lessonCount){
          this.db.getLesson(this.category.progress+1,this.category.categoryId).then(lesson => { 
            this.lesson=lesson;
            console.log(lesson);
            console.log("aaaa")
            
          }).catch(err => {console.log(err)})
    
      //  }
      }
    })

  })
    
 
}

ngOnInit() {


 
}



 
  
  


  /** Prepare: 1 - get category data */
  prepareContent() {

    //select random category
    
    
   // return this.db.getLesson(category.progress, 1);
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
