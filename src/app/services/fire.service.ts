import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { 
  nume: string;
  imagine: string;
  desc: string;
}


@Injectable({
  providedIn: 'root'
})
export class FireService {

  
  private topicsPrezentareCollection:AngularFirestoreCollection<Item>;
  private topicsPrezentare:Observable<Item[]>;

  constructor(private firestore: AngularFirestore) { 

    /** array cu informatiile de prezentare ale topic-urilor **/
    this.topicsPrezentareCollection = firestore.collection<Item>('prezentare');
    this.topicsPrezentare = this.topicsPrezentareCollection.valueChanges();

  }

  public getTopicsPrezentare() {
    return this.topicsPrezentare;
  }
  
}
