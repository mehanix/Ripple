import { Component, OnInit } from '@angular/core';
import {DatabaseService, Category, CategoryData} from '../../services/database.service';
@Component({
  selector: 'app-topic-cards',
  templateUrl: './topic-cards.component.html',
  styleUrls: ['./topic-cards.component.scss'],
})  
/**** SETUP *****/
/******TopicCards: Componenta care incarca, afiseaza toate topicurile din db pt a fi alese de user*******/
export class TopicCardsComponent implements OnInit {

  categories: Category[] = [];

  public selectedCategories;
  private buttonIcon:string;

  constructor(private db:DatabaseService) {

    this.selectedCategories = [];
    this.buttonIcon="heart-empty";
  }

  ngOnInit() {

    this.db.getDatabaseState().subscribe(rdy => {

      if(rdy) {
        this.db.getCategories().subscribe(cats => {
          this.categories = cats;
          console.log(this.categories);
        })


      }
    })
  }

  getSelectedCategories() {
  
    return this.selectedCategories;
  }


   cardClick(button:HTMLIonButtonElement, categoryId:number, lessonCount:number){
     //console.log(categoryId);



    // in layoutul card-ului, titlul este elementul nr 3
    //var card = button.parentElement.parentElement.parentElement;
    //var text = card.children.item(1).children.item(1).textContent;

    // verif daca exista deja valoarea in array

    console.log("click clack")
    var obj = <CategoryData>{categoryId:categoryId, progress:0, lessonCount:lessonCount}
    
    console.log("clack clock",obj)


    var index = this.selectedCategories.indexOf(obj);
    if (index === -1)  {

      //adauga id categorie in array
      this.selectedCategories.push(obj);

      //update aspect buton
      button.children.item(0).setAttribute("name","heart");
       

    } 
    else {
      // sterge textul, mark as unselected
      this.selectedCategories.splice(index, 1);

      button.children.item(0).setAttribute("name","heart-empty");

    } 
    console.log(this.selectedCategories);
  
  }
  



  }
  



