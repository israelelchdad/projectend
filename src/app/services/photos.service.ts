import { Injectable } from '@angular/core';
import { BasicService } from './basic.service';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../modol/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService extends BasicService<Photo> {

  constructor(public http:HttpClient) { 
    super(http,"photos")
  }
}
