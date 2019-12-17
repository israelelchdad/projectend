import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/modol/todos';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-addtodos',
  templateUrl: './addtodos.component.html',
  styleUrls: ['./addtodos.component.css']
})
export class AddtodosComponent implements OnInit {
 //checked:boolean=false
 todonew:Todos

  newtodo= new FormGroup ({
    userId: new FormControl (''),
    id: new FormControl (''),
    title: new FormControl ('')
   
  })

  constructor(public svc:UserService, public tsvc:TodoService) { }

  ngOnInit() {
  }
  addtodo(){
    this.todonew=this.newtodo.value
   
     this.todonew.completed=false
    
    
    
    
    let us=this.svc.getifuser(this.todonew.userId) 
    if(us){
     this.tsvc.addmoreitem(this.todonew)

    } 
    else{
      alert('plese input user id anather')
    }
    
 
 
  }
  // complet(){
   
   
  //     this.checked =!this.checked
     
  // }
}

