import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BasicService } from './basic.service';
import { User } from '../modol/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BasicService<User> {

   myuser:User

  constructor(public http:HttpClient) {
    super(http,'users')

   }


   getname(id:number):string{
     let nameo=this.data.find(user=>id==user.id)
     return nameo.name
     
   }
   getusername(id:number):string{
    let usernameo=this.data.find(user=>id==user.id)
    return usernameo.username
    
  }
  getifuser(userid:number):any{

   let u=this.data.find(user=>user.id==userid)
   return u 
  }


}
