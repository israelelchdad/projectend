import { Injectable } from '@angular/core';
import { BasicService } from './basic.service';
import { HttpClient } from '@angular/common/http';
import { Post } from '../modol/post';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BasicService<Post>{


  constructor(http:HttpClient) {
    super(http,'posts');
  }
}
