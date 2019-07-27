import { Component, OnInit } from '@angular/core';
import { LessonSelectPage } from '../lesson-select/lesson-select.page';
import { ActivatedRoute } from '@angular/router';
import { Lesson, CategoryData, DatabaseService } from 'src/app/services/database.service';
import { DataService } from 'src/app/services/data.service';
//import { DataService, LessonHeader } from 'src/app/services/data.service';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

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
  constructor(private socialSharing: SocialSharing, private data:DataService, private storage:Storage, private db:DatabaseService, public toastController: ToastController) {

   // this.lesson = l.getLessonContent();

    this.storage.get('categories').then(c => {this.categoryData = c})
    this.db.loadLessons()
    
  }
  ngOnInit() {
    
    

     
      this.lesson = this.data.getLesson()
      console.log("Lectie incarcata:", this.lesson);
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

    if(this.isLessonComplete === 0) {
  
      this.isLessonComplete = 1;
      this.categoryData.forEach(c => {
        if (c.categoryId == id)
          c.progress++;
          //localstorage
          this.storage.set('categories',this.categoryData)

          //db
          this.db.setProgress(c.progress,id) 
          this.db.setLessonComplete(this.lesson.id,1)

          //data service FIXME: get rid of it......
          this.lesson.isComplete=1;
          this.data.setLesson(this.lesson)
          this.storage.set('date',new Date().getDate())
          //TODO: SET LESSON COMPLETE TO TRUE IN DB (scrie functie pt asta)
         
      })

    }

    
  }

  setBookmark(l:Lesson) {
    this.storage.get('bookmarks').then (b => {
      let bookmarks:Lesson[] = b;


      if(bookmarks.findIndex((val) => {
        return val.categoryId == l.categoryId && val.id == l.id;
      })===-1)
        {
          bookmarks.push(l)
        
          this.storage.set('bookmarks',bookmarks).then(() => {
          
          this.presentToast("Lectie adaugata la favorite! :)")

          })
     
          
        }
        else
        {
          this.presentToast("Lectie deja existenta la favorite!")

        }

    })
  }


 


  shareLesson(l:Lesson) {

    var options = {
      message: 'Hey! Azi am terminat lectia ' + l.headerTitle + ' si am aflat ceva ceea ce nu stiam!\n\n Iata un fragment din ea:\n\n' + l.paragraphs[0]+ '\n\n Descarca aplicatia Ripple ca sa afli si tu lucruri noi!', // not supported on some apps (Facebook, Instagram)
      subject: 'Vrei sa inveti ceva nou?', // fi. for email
      files: [l.img[0]], // an array of filenames either locally or remotely
      url: 'https://github.com/mehanix/ripple/',
      chooserTitle: 'Alege o aplicatie:' // Android only, you can override the default share sheet title,
    };

    


    this.socialSharing.shareWithOptions(options).catch(err => console.log(err))

  }

  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
