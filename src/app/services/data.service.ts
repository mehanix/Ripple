import { Injectable } from '@angular/core';

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
  paragrafe: string[];
  titlu: string;
  numeTopic: string;
  desc: string;
  subtitlu: string;
  id:string;
  headerImage:string;
}

export interface LessonHeader {

  titlu:string;
  topic:string;
 // subtitlu:string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private lesson:Lesson;
  private topicId:string;
  private lessonHeader:LessonHeader = {
    titlu :" this.lesson.titlu",
    topic :" this.lesson.numeTopic",
    //subtitlu : "this.lesson.subtitlu"

  };

  constructor() {
    
 

   }

  /******Getteri/setteri content lectie efectiv******/
  public setLessonContent(l:Lesson) {
    this.lesson = l;


  }

  public getLessonContent() {
    return this.lesson;
  }

  /******Getter header lesson - nume, categorie, descriere******/
  public getLessonHeader() {
    this.lessonHeader.titlu = this.lesson.titlu;
    this.lessonHeader.topic = this.lesson.numeTopic;
    //this.lessonHeader.subtitlu = this.lesson.subtitlu;
    console.log(this.lessonHeader);
    return this.lessonHeader;

  }

  public setTopicId(t:string) {
    this.topicId = t;
  }

  public getTopicId() {
    return this.topicId;
  }
}
