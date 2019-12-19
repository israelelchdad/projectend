import { Injectable } from '@angular/core';
import { BasicService } from './basic.service';
import { HttpClient } from '@angular/common/http';
import { Post } from '../modol/post';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BasicService<Post>{
   tenlastpos:Post[]=[]


  constructor(http:HttpClient) {
    super(http,'posts');

    
  }
  tenlastpost(){

    if (this.data){
    for (let index = (this.data.length-10); index < this.data.length; index++) {
      this.tenlastpos.push(this.data[index])
      }
  }
}
}
