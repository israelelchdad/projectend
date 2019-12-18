import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/modol/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  usernew:User

  newuser = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
        street: new FormControl(''),
        suite: new FormControl(''),
        city: new FormControl(''),
        zipcode: new FormControl(''),
    })
  });


  constructor(public svc:UserService) { }

  ngOnInit() {
  }
  adduser(){
    this.usernew=this.newuser.value
    this.svc.addmoreitem(this.usernew)

  }

}
