import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title:string=""
  body:string=""
   id:number
   userid:number

  constructor(public svc:PostService, public sves:UserService, public rot:Router) {
    this.lo()
   }

  ngOnInit() {
  
  }
  lo(){
     console.log(this.sves.data);
      
  }
  pageaddpost(){
    this.rot.navigateByUrl('/addpost')

  }
  postofmyuser(){
    this.userid=this.sves.myuser.id
  }
    allpost(){
      this.userid=null

  }

}
