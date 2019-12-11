import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Todos } from 'src/app/modol/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  newtodo= new FormGroup ({
    userId: new FormControl (''),
    id: new FormControl (''),
    title: new FormControl (''),
    completed: new FormControl ('')
  })

  constructor(public svc:TodoService) {
  
   }

  ngOnInit() {
  }
  addtodo(){
    let todonew:Todos=this.newtodo.value
    this.svc.addmoreitem(todonew)

    
    
  }


}
