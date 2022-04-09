import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Animals } from '../helper-files/content-interface';
import { ARRAYOFANIMALS } from '../helper-files/contentDb';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getContent(): Observable<Animals[]> { 
    console.log("Getting the list");
    return this.http.get<Animals[]>("api/animals");
  }

  getContentItem(id: number): Observable<Animals> { 
    console.log("Retrieving OBSERVABLE content item");
    // this.messageService.clear();
    // this.messageService.add('Animal at ID : ' + (id) + ' retrieved Successfully..!');
    return this.http.get<Animals>("api/animals/" + id);
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