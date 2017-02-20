import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-addTodo',
  templateUrl: 'addTodo.html'
})
export class AddTodoPage {

  name;
  notes;

  constructor(public navCtrl: NavController) {

  }

   saveTodo(){

    let newTodo = {

      name: this.name,
      notes: this.notes

    };

  }


}
