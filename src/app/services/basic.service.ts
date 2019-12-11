import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class BasicService <T>{

data:T[] 
api:string


  constructor(public http:HttpClient,api:string) { 
    this.api=api
    this.setaray(http,api)

  
  }
  setaray(http:HttpClient,api:string){
    let loc=localStorage.getItem(api)
    if(loc!=null){
      this.data=JSON.parse(loc)
 
    }
    else{
 
      api="https://jsonplaceholder.typicode.com/"+this.api
 
      this.http.get<T[]>(api).subscribe(d=>{this.data=d
      console.log("iiiii",this.data);
      })
    }
 
 

  }
  addmoreitem(objec:any):void{
    this.data.push(objec)
    localStorage.setItem(this.api,JSON.stringify(this.data))

  }
}
