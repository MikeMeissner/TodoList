/*
* File Name: addTodo.ts
* Student Name: Michael Meissner
* Student Number: 200289381 
* App Description: A simple todo list app
*/

import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { TodosPage } from '../todos/todos';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-addTodo',
  templateUrl: 'addTodo.html'
})
export class AddTodoPage {

public todo:any;
edit:boolean=false;
todos:FirebaseListObservable<any>; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, fire: AngularFire) {

// Checks to see if info is being passed to the page. If so this changes the edit variable and makes the page an edit page not an add page.
  if (navParams.get("todo")==undefined) {
      this.todo = {};
    }
    else{
      this.edit=true;
      this.todo=navParams.get("todo");
    }
    this.todos = fire.database.list('/todos');
  }

// Function to save the todo back into firebase depending on if its a new todo or an update
  saveTodo(){
    if (this.edit==true) {
      this.todos.update(this.todo.$key,this.todo);
    }else{
      this.todo.checked=false;
      this.todos.push(this.todo);
      this.todo = {};
    }
  }

// Deletes the current todo object 
  deleteTodo(todo){
    this.todos.remove(todo); 
  }

// Pops up an alert when saving a todo
  savedAlert(){
    let alert = this.alertCtrl.create({
        title: 'Saved!',
        subTitle: 'Your To Do has been successfully saved',
        buttons: ['OK']
      });
      alert.present();
  }
      
}
