import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipestr'
})
export class PipestrPipe implements PipeTransform {

  transform(arr: any[], serc:string,value:string ): any[] {
    arr=arr.filter(t=> {return t[value].includes(serc)})
    return arr;

     
  }

}
