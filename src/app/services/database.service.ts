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
  progress:number;
}

export interface CategoryData {

  categoryId:number,
  progress:number,
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
       })
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
      let img=[];
      console.log("dbservice")
      console.log(data);
      if (data.rows.length > 0) {
        for (var i=0; i< data.rows.length; i++) {

          paragraphs = JSON.parse(data.rows.item(i).paragraphs)

          lessons.push ({
            id:data.rows.item(i).id,
            categoryId:data.rows.item(i).category_id,
  
            headerTitle:data.rows.item(i).header_title,
            headerDesc:data.rows.item(i).header_desc,
            headerImage:data.rows.item(i).header_img,
  
            paragraphs: data.rows.item(i).paragraphs,
            img: data.rows.item(i).img,
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
    console.log("fired loadCategories")
    return this.database.executeSql('SELECT * FROM categories', []).then(data => {
      let categories:Category[] = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          categories.push({ 
            categoryId: data.rows.item(i).id,
            name: data.rows.item(i).name,
            desc: data.rows.item(i).descr,
            img: data.rows.item(i).img,
            lessonCount:data.rows.item(i).lesson_count,
            progress:data.rows.item(i).progress
           });
        }
      }
      console.log("current categories", categories)
      this.categories.next(categories);
    }).catch(err => {console.log(err)})

  }

 
  resetProgress(categoryId:number) {


      this.database.executeSql("UPDATE categories SET progress = null WHERE id = ? " , [ categoryId ] ).then(() => {this.loadCategories()})
  }

  setProgress(val:number, categoryId:number) {

    this.database.executeSql("UPDATE categories SET progress = ? WHERE id = ? " , [ val, categoryId ] ).then(() => {this.loadCategories()}).catch(err => {console.log("eroare setProgress",err)})

  }





  getLesson(lessonIndex:number, categoryId:number): Promise<Lesson> {
    return this.database.executeSql('SELECT * FROM lessons WHERE index_lesson = ? AND category_id = ?', [lessonIndex, categoryId]).then(data => {

      let paragraphs = [];
      let img=[];
        //TODO: PARSE JSON
          paragraphs = JSON.parse(data.rows.item(0).paragraphs)
          img = JSON.parse(data.rows.item(0).img)

          // will this work?
       return {
          id:data.rows.item(0).id,
          categoryId:data.rows.item(0).id,

          headerTitle:data.rows.item(0).header_title,
          headerDesc:data.rows.item(0).header_desc,
          headerImage:data.rows.item(0).header_img,

          paragraphs: paragraphs,
          img: img,
          lessonIndex:data.rows.item(0).index_lesson,
          isComplete:data.rows.item(0).is_complete
        }
    });
  }


  // TODO:  UPDATE LESSON STATUS
}
