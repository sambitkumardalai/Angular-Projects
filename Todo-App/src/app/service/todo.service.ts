import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from './../model/Todo';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: '111',
        title: 'Dsa',
        isComplete: true,
        date: new Date(),
      },
      {
        id: '222',
        title: 'Cp',
        isComplete: true,
        date: new Date(),
      },
      {
        id: '333',
        title: 'Angular',
        isComplete: false,
        date: new Date(),
      },
    ];
  }

  getTodos() {
    return of(this.todos);
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  changeStatus(todo: Todo) {
    this.todos.map((singleTodo) => {
      if (singleTodo.id === todo.id)
        singleTodo.isComplete = !singleTodo.isComplete;
    });
  }

  deleteTodo = (todo: Todo) => {
    const indexOfTodo = this.todos.findIndex((curObj) => {
      curObj.id === todo.id;
    });
    this.todos.splice(indexOfTodo, 1);
  };
}
