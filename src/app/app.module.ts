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
    NaviComponent
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
