import { Component, OnInit, Input } from '@angular/core';
import { Todos } from 'src/app/modol/todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo:Todos

  constructor() { 

  }

  ngOnInit() {
  }

}
