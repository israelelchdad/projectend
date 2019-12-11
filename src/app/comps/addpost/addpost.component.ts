import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/modol/post';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  newpos:Post


  newpost= new FormGroup({
    userId: new FormControl(''),
    id: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl('')

  })

  constructor(public svc:PostService) { }

  ngOnInit() {
  }
  additem(){
    this.newpos=this.newpost.value
    this.svc.data.push(this.newpos)
    console.log(this.svc.data.length);
    localStorage.setItem('posts',JSON.stringify(this.svc.data))
    

  }

}
