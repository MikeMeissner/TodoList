/*
* File Name: tabs.ts
* Student Name: Michael Meissner
* Student Number: 200289381 
* App Description: A simple todo list app
*/

import { Component } from '@angular/core';

import { TodosPage } from '../todos/todos';
import { AddTodoPage } from '../addTodo/addTodo';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TodosPage;
  tab2Root: any = AddTodoPage;

  constructor() {

  }
}
