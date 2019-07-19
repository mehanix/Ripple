import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TopicCardsComponent } from 'src/app/components/topic-cards/topic-cards.component';
import { CategoryData } from '../../services/database.service';


@Component({
  selector: 'app-topics',
  templateUrl: './topics.page.html',
  styleUrls: ['./topics.page.scss'],
})
export class TopicsPage implements OnInit {


  @ViewChild(TopicCardsComponent) topicCardsComponent:TopicCardsComponent;
  constructor(private storage:Storage) { 

  }

  ngOnInit() {
  }

  saveTopics() {

   

    let categories:CategoryData[] = this.topicCardsComponent.getSelectedCategories();


 
    console.table(categories);

    this.storage.set('categories',categories);

  }

}
