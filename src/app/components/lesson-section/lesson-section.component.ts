import { Component, OnInit } from '@angular/core';
// import { DataService, Lesson } from 'src/app/services/data.service';
import { toSegments } from '@ionic/angular/dist/directives/navigation/stack-utils';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-lesson-section',
  templateUrl: './lesson-section.component.html',
  styleUrls: ['./lesson-section.component.scss'],
})

/*******LESSON-VIEW*******/
/******* lesson-section: da handle la informatiile lectiei luate din db - prelucrare, render *******/
export class LessonSectionComponent implements OnInit {

 /* private lesson:Lesson;
  private segments = [];
  private topicId:string;
  imgUrl: Observable<string | null>;
  private dataLoaded:boolean

  constructor( private dataService:DataService, private storage: AngularFireStorage) {

    this.topicId =  dataService.getTopicId();
    this.dataLoaded=false;

  }
*/
  ngOnInit() {
/*
    this.lesson = this.dataService.getLessonContent();



    const ref = this.storage.ref("topics/" + this.topicId + "/" + this.lesson.id + "/1.jpg");
    this.prepareLessonSegments()
    console.log(this.segments);
*/
  }
/*
  //this is a mess.
  prepareLessonSegments() {

      for (let i in this.lesson.paragrafe) {
        console.log(i); //de ce imi face typescript asta. vreau si eu un for ca tot omul
        const ref = this.storage.ref("topics/" + this.topicId + "/" + this.lesson.id + "/"+ this.lesson.imagini[i]);
        this.imgUrl = ref.getDownloadURL();
        this.imgUrl.subscribe((v) => {

          var s: segment = {
            paragraf:this.lesson.paragrafe[i],
            img:v
          };
          console.table(s)
          this.segments[i]=s;

        });
      }
      this.dataLoaded = true;


  }*/
}
