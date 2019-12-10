import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class BasicService <T>{

data:T[]


  constructor(public http:HttpClient,api:string) { 
   let loc=localStorage.getItem(api)
   if(loc!=null){
     this.data=JSON.parse(loc)

   }
   else{

     api="https://jsonplaceholder.typicode.com/"+api

     this.http.get<T[]>(api).subscribe(d=>this.data=d)
   }


  }
}
