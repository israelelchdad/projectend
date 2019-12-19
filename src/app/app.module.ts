import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Modo } from './comps/login/matrial/modo'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './comps/login/login.component';
import { TodosComponent } from './comps/todos/todos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './comps/navigation/navigation.component';
import { PostComponent } from './comps/post/post.component';
import { PostsComponent } from './cards/posts/posts.component';
import { Pipe1Pipe } from './pips/pipe1.pipe';
import { AddpostComponent } from './comps/addpost/addpost.component';
import { NaviComponent } from './comps/navi/navi.component';
import { AddtodosComponent } from './comps/addtodos/addtodos.component';
import { TodoComponent } from './cards/todo/todo.component';
import { PipetodoPipe } from './pips/pipetodo.pipe';
import { UsersComponent } from './comps/users/users.component';
import { UserComponent } from './cards/user/user.component';
import { PipestrPipe } from './pips/pipestr.pipe';
import { PipenumberPipe } from './pips/pipenumber.pipe';
import { AdduserComponent } from './comps/adduser/adduser.component';
import { AddphotosComponent } from './comps/addphotos/addphotos.component';
import { PohtosComponent } from './comps/pohtos/pohtos.component';
import { PhotosComponent } from './cards/photos/photos.component';
import { HomepageComponent } from './comps/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodosComponent,
    NavigationComponent,
    PostComponent,
    PostsComponent,
    Pipe1Pipe,
    AddpostComponent,
    NaviComponent,
    AddtodosComponent,
    TodoComponent,
    PipetodoPipe,
    UsersComponent,
    UserComponent,
    PipestrPipe,
    PipenumberPipe,
    AdduserComponent,
    AddphotosComponent,
    PohtosComponent,
    PhotosComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Modo

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
