import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';


export interface ItemPrezentare { 
  nume: string;
  imagine: string;
  desc: string;
  id?: string;
}

export interface Topic {
  nume:string;
  id:string;
}

export interface Lesson {
  imagini: string[];
  data: string[];
  titlu: string[];
}



@Injectable({
  providedIn: 'root'
})
export class FireService {

  
  private topicsPrezentareCollection:AngularFirestoreCollection<ItemPrezentare>;
  private topicsPrezentare:Observable<ItemPrezentare[]>;
  
  private lessonsCollection: AngularFirestoreCollection<Lesson>;
  private lessons:Observable<Lesson[]>;

  private todaysLesson:Lesson;

  id:string;

  constructor(private firestore: AngularFirestore) { 

    /** array cu informatiile de prezentare ale topic-urilor **/
  //  this.topicsPrezentare = this.topicsPrezentareCollection.snapshotChanges().pipe(
   //   map(actions => actions.map(a => {
   //     const data = a.payload.doc.data() as ItemPrezentare;
   //     const id = a.payload.doc.id;
    //    return { id, ...data };
   //   }))
   // );
   this.topicsPrezentareCollection = firestore.collection<ItemPrezentare>('prezentare');
   this.topicsPrezentare = this.topicsPrezentareCollection.valueChanges();

  // this.topicsLessonsCollection = firestore.collection<ItemPrezentare>('topics');
  // this.topicsLessons = this.topicsLessonsCollection.valueChanges();

  }

  public getTopicsPrezentare() {
    return this.topicsPrezentare;
  }

  /**** Returneaza colectia cu toate lectiile ****/
 // public getTopicsLessons() {
 //   return this.topicsLessons;
 // }

  /** Functie care alege random o lectie a topicului dat **/
   public selectTopicLesson(topicName:string)
  {
    return new Promise((resolve) => {
      var topics:AngularFirestoreCollection<Topic>= this.firestore.collection('topics', ref => ref.where('nume', '==', topicName))
   var topicsValue = topics.valueChanges();

   topicsValue.subscribe( ref => ref.map((p) => { 

      this.id = p.id;
      this.afiseaza(this.id);
      this.getLessonCollection(this.id);

     // this.lessons.subscribe((val) => console.table(val))
      var length:number;
      var lesson = this.lessons.subscribe((val) => {
        length = val.length;
        var lessonNumber:number = this.getRandomInt(length);
        this.todaysLesson = val[lessonNumber];
       // console.table(this.todaysLesson);
       resolve([this.todaysLesson,topicName])

      });
      }))
      
      
      
    });



   

      

  }

  getTodaysLesson() {
    return this.todaysLesson;
  }
  

  afiseaza(value) {
    console.log(value);
  }

  getLessonCollection(id:string) {
    var lessonsDoc:AngularFirestoreDocument<Topic> = this.firestore.doc('topics/'+id);
    var lessonCollection:AngularFirestoreCollection<Lesson> = lessonsDoc.collection<Lesson>('lectii');
    this.lessons = lessonCollection.valueChanges();
  }

  getRandomInt(max:number):number {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
