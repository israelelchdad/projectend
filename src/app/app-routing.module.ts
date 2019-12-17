import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './comps/login/login.component';
import { TodosComponent } from './comps/todos/todos.component';
import { NavigationComponent } from './comps/navigation/navigation.component';
import { PostComponent } from './comps/post/post.component';
import { AddpostComponent } from './comps/addpost/addpost.component';
import { AddtodosComponent } from './comps/addtodos/addtodos.component';
import { UsersComponent } from './comps/users/users.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"todo",component: TodosComponent},
  {path:"posts",component: PostComponent },
  {path:"addpost",component:AddpostComponent },
  {path:"addtodo",component: AddtodosComponent},
  {path:"navi",component:NavigationComponent },
  {path:"users",component: UsersComponent},
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path:"**",component:LoginComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
