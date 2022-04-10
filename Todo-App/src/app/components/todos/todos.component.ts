import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from './../../model/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  changeTodoStatus = (todo: Todo) => this.todoService.changeStatus(todo);
  deleteTodo = (todo: Todo) => this.todoService.deleteTodo(todo);
}
