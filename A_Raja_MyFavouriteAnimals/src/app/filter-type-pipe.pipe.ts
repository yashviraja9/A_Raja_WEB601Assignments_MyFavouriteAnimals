import { Pipe, PipeTransform } from '@angular/core';
// import { type } from 'os';
import { Animals } from './helper-files/content-interface';

@Pipe({
  name: 'filterTypePipe'
})
export class FilterTypePipePipe implements PipeTransform {

  transform(arrayOfAnimals: Animals[], aType?:string) {
    
    return arrayOfAnimals.filter(animal => animal.type == aType);
  }

  
}
