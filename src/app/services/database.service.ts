import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { Platform } from '@ionic/angular';


export interface Lesson {

  //identif
  id:number;
  categoryId:number;

  //header
  headerTitle:string;
  headerDesc:string;
  headerImage:string;

  //data

  paragraphs: string[];
  img: string[];
  lessonIndex:number;
  isComplete:boolean;
  

}

export interface Category {

  categoryId:number;
  name:string;
  desc:string;
  img:string;
  lessonCount:number;
}


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  lessons = new BehaviorSubject([]);
  categories = new BehaviorSubject([]);
  constructor(private plt:Platform, private sqlitePorter: SQLitePorter, private sqlite:SQLite, private http:HttpClient) {
     this.plt.ready().then(() => {
       this.sqlite.create({
         name:'content.db',
         location:'default'
       })
       .then((db:SQLiteObject) => {
         this.database = db;
         this.seedDatabase();
       });
     });

 
  }


  seedDatabase() {
    this.http.get('assets/seed.sql', {responseType:'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database,sql)
      .then(_ => {
        this.loadLessons();
        this.loadCategories();
        this.dbReady.next(true);
      })
      .catch(e => console.error(e));
    })
  }

  getDatabaseState() {
    return this.dbReady.asObservable();
  }
 
  getLessons(): Observable<Lesson[]> {
    return this.lessons.asObservable();
  }
 
  getCategories(): Observable<Category[]> {
    return this.categories.asObservable();
  }

  loadLessons() {
    return this.database.executeSql('SELECT * FROM lessons', []).then(data => {
      let lessons: Lesson[] = [];
      let paragraphs = [];
      console.log("dbservice")
      console.log(data);
      if (data.rows.length > 0) {
        for (var i=0; i< data.rows.length; i++) {
      //    if (data.rows.item(i).paragraphs != '') {
     //     paragraphs = JSON.parse(data.rows.item(i).paragraphs)
      //    }
          lessons.push ({
            id:data.rows.item(i).id,
            categoryId:data.rows.item(i).category_id,
  
            headerTitle:data.rows.item(i).header_title,
            headerDesc:data.rows.item(i).header_desc,
            headerImage:data.rows.item(i).header_img,
  
            paragraphs: paragraphs,
            img: null,
            lessonIndex:data.rows.item(i).lesson_index,
            isComplete:data.rows.item(i).is_complete
          })
        
        }
          // will this work?
        
      }
      this.lessons.next(lessons);
    })
  }

  // FIXME:
  loadCategories() {
    return this.database.executeSql('SELECT * FROM categories', []).then(data => {
      let categories:Category[] = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          categories.push({ 
            categoryId: data.rows.item(i).id,
            name: data.rows.item(i).name,
            desc: data.rows.item(i).descr,
            img: data.rows.item(i).img,
            lessonCount:data.rows.item(i).lesson_count
           });
        }
      }
      this.categories.next(categories);
    })

  }


  getLesson(lessonIndex:number, categoryId:number): Promise<Lesson> {
    return this.database.executeSql('SELECT * FROM lessons WHERE lesson_index = ?, category_id = ?', [lessonIndex, categoryId]).then(data => {

      let paragraphs = [];
      console.log(data);
      if (data.rows.length > 0) {
        for (var i=0; i< data.rows.length; i++) {
          paragraphs = JSON.parse(data.rows.item(i).paragraphs)
        }
          // will this work?
       return {
          id:data.rows.item(i).id,
          categoryId:data.rows.item(i).categoryId,

          headerTitle:data.rows.item(i).headerTitle,
          headerDesc:data.rows.item(i).headerDesc,
          headerImage:data.rows.item(i).headerImage,

          paragraphs: paragraphs,
          img: null,
          lessonIndex:data.rows.item(i).lessonIndex,
          isComplete:data.rows.item(i).isComplete
        }
    }});
  }

  // TODO:  UPDATE LESSON STATUS
}
