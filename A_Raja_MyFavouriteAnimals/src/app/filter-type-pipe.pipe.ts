import { Pipe, PipeTransform } from '@angular/core';
import { Animals } from './helper-files/content-interface';

@Pipe({
  name: 'filterTypePipe'
})
export class FilterTypePipePipe implements PipeTransform {

  transform(arrayOfAnimals: Animals[]): Animals {
    return arrayOfAnimals.filter(item => item.type == null ? item.type == '' : item.type == "Mammal");
  }

}
