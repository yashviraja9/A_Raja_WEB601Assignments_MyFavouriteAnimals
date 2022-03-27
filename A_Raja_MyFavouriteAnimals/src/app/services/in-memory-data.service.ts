import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Animals } from '../helper-files/content-interface';
import { ARRAYOFANIMALS } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements
InMemoryDbService {

  createDb() {
    const animals : Animals[] = ARRAYOFANIMALS;
    return {animals};
  }

  genId(content: Animals[]): number {
    return content.length > 0 ?
    Math.max(...content.map(c => c.id ?? 0)) + 1 : 2000;
  }

}
