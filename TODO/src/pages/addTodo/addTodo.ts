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

  if (navParams.get("todo")==undefined) {
        this.todo = {};
    }
    else
    {
      this.edit=true;
      this.todo=navParams.get("todo");
    }
    this.todos = fire.database.list('/todos');
  }

  saveTodo(){
    if (this.edit==true) {
          this.todos.update(this.todo.$key,this.todo);
    }else{
      this.todo.checked=false;
      this.todos.push(this.todo);
      this.todo = {};
    }
  }

  deleteTodo(todo){
    this.todos.remove(todo); 
  }

  savedAlert(){
    let alert = this.alertCtrl.create({
        title: 'Saved!',
        subTitle: 'Your To Do has been successfully saved',
        buttons: ['OK']
      });
      alert.present();
  }
      
}
