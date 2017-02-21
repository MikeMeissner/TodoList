import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddTodoPage } from '../addTodo/addTodo';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html'
})
export class TodosPage {

 public todos:FirebaseListObservable<any>;
  
  constructor(public navCtrl: NavController, fire: AngularFire) {
    this.todos = fire.database.list('/todos');


  }


  editTodo(todo){
    this.navCtrl.push(AddTodoPage,{todo:todo}); 
  }

  deleteTodo(todo){
    this.todos.remove(todo); 
  }

  checkedTodo(todo){
    this.todos.update(todo.$key,{checked:todo.checked}); 
  }


}