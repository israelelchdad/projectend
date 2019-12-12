import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id:number

  constructor( public rot:Router,public svc:UserService) { 

  }

  ngOnInit() {
  }
  login(){
     let us=this.svc.getifuser(this.id)
     if(us){
      this.svc.myuser=us
      this.rot.navigateByUrl('/posts')
     }
     else{
      alert('usreid '+this.id+ ' undenfind ples input user  that find in group')
     }
    }

}
