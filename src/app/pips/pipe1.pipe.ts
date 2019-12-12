import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {

  transform(arr: any[],title:string,body:string,id:number,userid:number): any {

    let arey= arr.filter(data=>{return data.title.includes(title)&& data.body.includes(body)})

    if(userid){
      arey=arey.filter(data=>{return data.userId==userid})

    }

    if(id){
      console.log("g");
      
       return arey.filter(data=>{return data.id==id})
    }
    
    return arey
  
  

     
  }

}
