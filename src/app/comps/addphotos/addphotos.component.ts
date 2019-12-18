import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Photo } from 'src/app/modol/photo';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-addphotos',
  templateUrl: './addphotos.component.html',
  styleUrls: ['./addphotos.component.css']
})
export class AddphotosComponent implements OnInit {
  photnew:Photo

  newphoto= new FormGroup ({
    albumId: new FormControl (''),
    id: new FormControl (''),
    title: new FormControl (''),
    url: new FormControl ('')
   
  })

  constructor(public svc:PhotosService) { }

  ngOnInit() {
  }
  addphotos(){
    this.photnew=this.newphoto.value
    this.svc.addmoreitem(this.photnew)

  }

}
