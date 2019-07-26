import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
//import { DataService, Lesson } from 'src/app/services/data.service';
import { MenuController } from '@ionic/angular';
import {DatabaseService, CategoryData, Lesson} from '../../services/database.service';
import { DataService } from 'src/app/services/data.service';

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
  progress:number;

  constructor(private db:DatabaseService, private storage:Storage, private data:DataService) {
    this.storage.get("categories").then(cats => {
      console.log("Categorii constructor",cats);
      this.categoryData = cats;
  }).then(() => {
    this.db.getDatabaseState().subscribe(rdy => {
      if(rdy) {

        //TODO: prepare lesson, then get lesson header here async.
         this.category = this.categoryData[Math.floor((Math.random()*this.categoryData.length))]
  
            console.log("Categorie aleasa",this.category);
            //this.category.progress<this.category.lessonCount
         
            //daca ziua de azi e egala cu cea salvata, trebuie incarcata lectie noua

            this.storage.get('date').then(date => {
              console.log("Date:",date, new Date().getDay())
              if (date !== new Date().getDay())
                this.progress=this.category.progress+1;
                else
                this.progress=this.category.progress;
            }).then(() => {
              console.log(this.progress)
              this.db.getLesson(this.progress,this.category.categoryId).then(lesson => { 
   
               this.lesson=lesson;
               console.log(lesson);
               console.log("aaaa")
               this.data.setLesson(lesson);

            })
            
            
           
            
            
          }).catch(err => {console.log(err)})
    
  
      }
    })

  })
    
 
}

getLessonContent() {
  return this.lesson;
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
