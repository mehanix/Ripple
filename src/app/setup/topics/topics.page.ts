import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { nume: string; }


@Component({
  selector: 'app-topics',
  templateUrl: './topics.page.html',
  styleUrls: ['./topics.page.scss'],
})
export class TopicsPage implements OnInit {

  private topicsCollection:AngularFirestoreDocument<Item>;
  private topic:Observable<Item>;


  constructor(private firestore: AngularFirestore) { 

    this.topicsCollection = firestore.doc<any>('topics/caini');
    this.topic = this.topicsCollection.valueChanges();
    this.topic.subscribe(res=>{
      console.log(res.nume);
  });
      
    
  

   //this.topics.forEach(element => { console.log(element);
      
   // });
    
  }

  ngOnInit() {
  }

}
