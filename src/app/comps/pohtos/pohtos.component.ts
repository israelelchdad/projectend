import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pohtos',
  templateUrl: './pohtos.component.html',
  styleUrls: ['./pohtos.component.css']
})
export class PohtosComponent implements OnInit {
  albumId:number
  id:number
  title:string=""

  constructor(public svc:PhotosService, public rot:Router) { }

  ngOnInit() {
  }
  pageaddphotos(){
    this.rot.navigateByUrl('addphotos')

  }

}

