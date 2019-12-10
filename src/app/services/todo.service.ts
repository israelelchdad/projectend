import { Injectable } from '@angular/core';
import { Todos } from '../modol/todos';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { BasicService } from './basic.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends BasicService<Todos>{

 // todos:Todos[]
 

  constructor(public http:HttpClient) { 
    super(http,'todos')
   
  
  }
  
}
