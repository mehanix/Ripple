import { Component, OnInit } from '@angular/core';
import { FireService } from "../../services/fire.service";

@Component({
  selector: 'app-topic-cards',
  templateUrl: './topic-cards.component.html',
  styleUrls: ['./topic-cards.component.scss'],
})  
export class TopicCardsComponent implements OnInit {

  private topics;
  private slides;
  public selectedTopics;
  private buttonIcon:string;

  

  constructor(fireService: FireService) {

    this.topics = fireService.getTopicsPrezentare();
    this.selectedTopics = [];
    this.buttonIcon="heart-empty";

   }

  getSelectedTopics() {
  
    return this.selectedTopics;
  }
   
  ngOnInit() {

  }

   cardClick(button:HTMLIonButtonElement){

    /** in layoutul card-ului, titlul este elementul nr 3 **/
    var card = button.parentElement.parentElement.parentElement;
    var text = card.children.item(1).children.item(1).textContent;

    /** verif daca exista deja valoarea in array **/
    var index = this.selectedTopics.indexOf(text);
    if (index === -1)  {
      /** adauga textul in array, marcheaza card-ul ca si clicked **/
      this.selectedTopics.push(text);
      button.children.item(0).setAttribute("name","heart");
       

    } 
    else {
      /** sterge textul, mark as unselected **/
      this.selectedTopics.splice(index, 1);
      button.children.item(0).setAttribute("name","heart-empty");

    } 
    console.log(this.selectedTopics);
  }



  }
  



