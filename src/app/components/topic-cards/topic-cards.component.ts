import { Component, OnInit } from '@angular/core';
import { FireService } from "../../services/fire.service";

@Component({
  selector: 'app-topic-cards',
  templateUrl: './topic-cards.component.html',
  styleUrls: ['./topic-cards.component.scss'],
})  
export class TopicCardsComponent implements OnInit {

  private topics;


  constructor(fireService: FireService) {

    this.topics = fireService.getTopicsPrezentare();

   }

  ngOnInit() {}

}
