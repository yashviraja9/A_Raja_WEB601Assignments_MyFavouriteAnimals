import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Animals } from '../helper-files/content-interface';
import { ARRAYOFANIMALS } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  id: any;

  constructor(private messageService: MessageService) { }

  getContent(): Animals[] { 
    return ARRAYOFANIMALS;
  }

  getContentObs(): Observable<Animals[]> { 
    return of(ARRAYOFANIMALS);
  }

  getOneContent(id: any): Observable<Animals> {

    const message = ARRAYOFANIMALS[id];

    if(id < ARRAYOFANIMALS.length ) {

      console.log("Success !",ARRAYOFANIMALS);
      this.messageService.add("Content array loaded!");
      this.messageService.add('Content item at Id : ' + (message.id - 1));

    } else {
      console.log("Failed !");
      // this.messageService.add('Animal is not available at Id :' + (message.id - 1));
      this.DisplayError();
    }
    return of(ARRAYOFANIMALS[id]);
  }

  DisplayError() : void{
    this.messageService.add('Animal is not available at this Id');
  }
}