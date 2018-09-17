import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { UUID } from 'angular2-uuid'
import { Observable } from 'rxjs';
import { Http,Headers } from '@angular/http';
import { map } from"rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private api_url = 'http://localhost:3000/data';
  private headers = new Headers({'Content-Type': 'application/json'});
  todos: Todo[] = [];

  constructor(private http: Http) { }

  addTodo(todoItem:string): Observable<Todo> {
    let todo = {
      id:UUID.UUID(),
      desc: todoItem,
      completed: false
    }
    return this.http.post(this.api_url,JSON.stringify(todo),{headers: this.headers})
    .pipe(map((res) =>res.json() as Todo));
    
  }
}
