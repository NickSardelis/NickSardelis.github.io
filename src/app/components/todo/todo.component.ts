import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Todo, idname}  from './../../models/Todo'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo
  EditTodo:string = ""
  showEdit:boolean = false;

  @Output() OnEditTodo= new EventEmitter()
  @Output() done = new EventEmitter()
  @Output() undone = new EventEmitter()
  @Output() delete = new EventEmitter()
  
  
  
  toggleDone(id) {
    this.done.emit(id)
    } 

  
  deleteTodo(id) {
   this.delete.emit(id)
   }
 

  editTodo (id: number) {
   if(this.showEdit){
    this.OnEditTodo.emit({id:id , name:this.EditTodo})
   }
   this.showEdit=!this.showEdit
   this.EditTodo=this.todo.content
  }
}
