import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  inputToDo = "";
  todos: Todo[];

  ngOnInit(): void {

    this.todos = [
      {
        content : 'First Todo',
        completed : false
      },
      {
        content : 'Second Todo',
        completed : true
        
      }
    ]
  }
  toggleFinished(id: number) {
    this.todos.map((v,i)=>{
      if(i==id){
        v.completed = !v.completed;
      }
      return v;
    })
  }
  deleteATodo(id: number){
    this.todos = this.todos.filter((v,i)=>i!==id);

  }
  insertToDo(){
    if(this.inputToDo!=="")
    {
      this.todos.push({
      content: this.inputToDo,
      completed: false
    });
  }
   /*  this.inputToDo; */
  }
  

}
