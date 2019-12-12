import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/modol/post';
import { findStaticQueryIds } from '@angular/compiler';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  newpos:Post


  newpost= new FormGroup({
    userId: new FormControl(0),
    id: new FormControl(0),
    title: new FormControl(''),
    body: new FormControl('')

  })

  constructor(public svc:PostService,public svec:UserService) { }

  ngOnInit() {
  }
  addpost(){
    this.newpos=this.newpost.value
       let us=this.svec.getifuser(this.newpos.userId) 
       if(us){
        this.svc.addmoreitem(this.newpos)

       } else{
         alert('plese input user id anather')
       }
       
    
    console.log(this.svc.data.length);
     }

}
