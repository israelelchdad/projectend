import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy{
  numberofinterval:number
  index=0;
  maxindex=9;

  constructor(public svc:PostService ,public sves:UserService,public psvc:PhotosService) { 
    svc.tenlastpost()
    psvc.tenlastphost()
    this.setinterval1()
    
    
  }


  
   
  

  ngOnInit() {
  }
  chengclass() {
    let one=document.querySelectorAll('.lione')[this.index]
   console.log(one.className)
   one.className="lione";
   console.log(one.className)
   if(this.index==9){
    this.index=-1
   }
   let to=document.querySelectorAll('.lione')[++this.index]
   console.log(to.className)
   to.className="lione shoo"
   console.log( to.className)

   
 }
 setinterval1(){
  this.numberofinterval=window.setInterval(()=>{this.chengclass()},3000)
  console.log(this.numberofinterval);
  
 }

 ngOnDestroy(){
    
  clearInterval(this.numberofinterval)
}

}
