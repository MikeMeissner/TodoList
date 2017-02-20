import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html'
})
export class TodosPage {

 public todos;

  constructor(public navCtrl: NavController) {
    this.todos = [
      {name: 'Wash Car', notes: 'Make it shiny', checked: false},
      {name: 'Go Outside', notes: 'Look at sun', checked: false},
      {name: 'Walk', notes: 'Move with legs', checked: false},
      {name: 'Class', notes: 'Drive to class', checked: false}
    ];
  }



}
