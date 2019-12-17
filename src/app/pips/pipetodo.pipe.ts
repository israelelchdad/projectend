import { Pipe, PipeTransform } from '@angular/core';
import { iif } from 'rxjs';

@Pipe({
  name: 'pipetodo'
})
export class PipetodoPipe implements PipeTransform {

  transform(arr: any[], title:string,userid:number,id:number): any[] {
    arr=arr.filter(t=>t.title.includes(title))
    if(userid){
      arr=arr.filter(i=>i.userId==userid)
    }
    if(id){
      arr=arr.filter(i=>i.id==id)
      return arr
    }
    return arr;
  }

}
