import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizator'
})
export class CapitalizatorPipe implements PipeTransform {

  transform(value: string, all: boolean=false): string {

    value = value.toLocaleLowerCase();
    let palabras = value.split(' ');
    
    if(all){

    }else{
      palabras[0] = palabras[0][0].toUpperCase + palabras[0].substr(1);
    }
    return palabras.join(' ');

  }


  

}
