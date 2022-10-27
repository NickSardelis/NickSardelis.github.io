import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'Todo',
    component: TodosComponent
  }

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
