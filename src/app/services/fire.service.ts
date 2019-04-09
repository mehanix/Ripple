import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { 
  nume: string;
  imagine: string;
  desc: string;
  id?: string;
}


class ItemData {

  item:Item;
  selected:boolean;
  constructor(item:Item, selected:boolean) {
    this.item = item;
    this.selected = selected;
    
  }
}


@Injectable({
  providedIn: 'root'
})
export class FireService {

  
  private topicsPrezentareCollection:AngularFirestoreCollection<Item>;
  private topicsPrezentare:Observable<Item[]>;
  private topicsprezentareData:Item[];
  private selectedItems:ItemData[];

  constructor(private firestore: AngularFirestore) { 

    /** array cu informatiile de prezentare ale topic-urilor **/
    this.topicsPrezentareCollection = firestore.collection<Item>('prezentare');
    this.topicsPrezentare = this.topicsPrezentareCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );



    
     // this.topicsPrezentare.subscribe(changes => {
     //   return changes;

     //   });


  }

  public getTopicsPrezentare() {
    return this.topicsPrezentare;
  }

  public selectPrezentareWithName(name:string)
  {

  }
  
}
