import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Animals } from '../helper-files/content-interface';
import { ARRAYOFANIMALS } from '../helper-files/contentDb';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  // id: any;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getContent(): Observable<Animals[]> { 
    console.log("Getting the list");
    return this.http.get<Animals[]>("api/animals");
  }

  addContent(newContentItem: Animals): Observable<Animals>{
    this.messageService.clear();
    this.messageService.add('Animal added Successfully..!');
    console.log("added the new content: ", newContentItem);
    return this.http.post<Animals>("api/animals", newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Animals): Observable<any>{
    this.messageService.clear();
    this.messageService.add('Animal updated Successfully..!');
    return this.http.put("api/animals", contentItem, this.httpOptions);
  }
}