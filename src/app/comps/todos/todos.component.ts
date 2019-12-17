import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Todos } from 'src/app/modol/todos';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  title:string=""
  completed:boolean
   id:number
   userid:number

  constructor(public svc:TodoService,public rot:Router,public usvc:UserService) {
  
   }

  ngOnInit() {
  }
  
  pageaddtodo(){

    this.rot.navigateByUrl('addtodo')
  }


}
