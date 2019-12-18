import { Component, OnInit, RootRenderer } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  id:number
  name:string=""
  username: string=""
  email: string=""

  constructor(public svc:UserService, public rot:Router) { }

  ngOnInit() {
  }
  pageadduser(){
    this.rot.navigateByUrl('/adduser')

  }

}
