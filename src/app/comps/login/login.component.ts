import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public rot:Router) { 

  }

  ngOnInit() {
  }
  login(){
    console.log("gfdsdsa");
    this.rot.navigateByUrl('/posts')
    

    
  }

}
