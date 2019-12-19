import { Injectable } from '@angular/core';
import { BasicService } from './basic.service';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../modol/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService extends BasicService<Photo> {
  tenlastphos:Photo[]=[]

  constructor(public http:HttpClient) { 
    super(http,"photos")
  }
  tenlastphost(){

    if (this.data){
    for (let index = (this.data.length-10); index < this.data.length; index++) {
      this.tenlastphos.push(this.data[index])
      }
  }
}
}
