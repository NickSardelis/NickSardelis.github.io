import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import {Todo, idname}  from './../../models/Todo'
import { AngularFirestore, docChanges } from "@angular/fire/compat/firestore";
import { Subscription } from 'rxjs';
import { TodoComponent } from '../todo/todo.component';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {
  
  todos:Todo[] = [];
  todosSubscription: Subscription;
  inputTodo:string = "";
  EditTodo:string = "";
  showEdit:boolean = false;
  alter:boolean = false
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {

    this.todosSubscription =this.db.collection('todos').snapshotChanges().subscribe(todos => {
      this.todos = []
        todos.forEach(todo => {
        let todoObj :any =  todo.payload.doc.data()
        todoObj.id = todo.payload.doc.id
        this.todos.push(todoObj)
      })
    })

  }
  
  ngOnDestroy() {
   this.todosSubscription.unsubscribe()
  }


  
  toggleDone(id) {
      this.db.collection('todos').doc(id).update({
        completed: this.alter =!this.alter
      })
    }
 
                 
  

  deleteTodos (id) {
   if(confirm('Delete?')) { 
    this.db.collection('todos').doc(id).delete()
   }
  } 

  addTodo () {
    this.db.collection('todos').add({
      content:this.inputTodo,
      completed:false, 
    });
    this.inputTodo = ""
  }

 
  edit(todo:idname){
    this.db.collection('todos').doc(todo.id).update({
      content : todo.name,
      completed: false
    })
  }
}
