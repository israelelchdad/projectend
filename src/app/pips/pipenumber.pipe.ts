import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipenumber'
})
export class PipenumberPipe implements PipeTransform {

  transform(arr: any[], serc:number,value:string): any[] {
    if(serc){
    arr=arr.filter(i=>i[value]==serc)
    }
    return arr;
  }

}
