/*
* File Name: todos.ts
* Student Name: Michael Meissner
* Student Number: 200289381 
* App Description: A simple todo list app
*/

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

// Pushs the todo object from this page to the addTodo page for editing purposes
  editTodo(todo){
    this.navCtrl.push(AddTodoPage,{todo:todo}); 
  }

// Handels the checkbox for each todo
  checkedTodo(todo){
    this.todos.update(todo.$key,{checked:todo.checked}); 
  }

}