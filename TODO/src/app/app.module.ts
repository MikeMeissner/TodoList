/*
* File Name: app.module.ts
* Student Name: Michael Meissner
* Student Number: 200289381 
* App Description: A simple todo list app
*/

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AddTodoPage } from '../pages/addTodo/addTodo';
import { TodosPage } from '../pages/todos/todos';
import { TabsPage } from '../pages/tabs/tabs';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
 
// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyBS4ZcoB9rBea0Vz8IJHoFFk3YeZRMBgZ0",
  authDomain: "ionic-todo-app-b3897.firebaseapp.com",
  databaseURL: "https://ionic-todo-app-b3897.firebaseio.com",
  storageBucket: "ionic-todo-app-b3897.appspot.com",
  messagingSenderId: "978180955620"
};

@NgModule({
  declarations: [
    MyApp,
    AddTodoPage,
    TodosPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddTodoPage,
    TodosPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
