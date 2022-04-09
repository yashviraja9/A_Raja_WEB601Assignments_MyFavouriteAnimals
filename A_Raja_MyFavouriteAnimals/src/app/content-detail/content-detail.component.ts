import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animals } from '../helper-files/content-interface';
import { AnimalService } from '../services/animal.service';
import {MatCardModule} from '@angular/material/card';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  id?: number;
  animals?: Animals;

  constructor(private route: ActivatedRoute, private animalService: AnimalService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id") ?? 0);
      this.animalService.getContentItem(this.id).subscribe((c) => {
        this.animals = c;
        this.messageService.clear();
        this.messageService.add(`${c.title} at Id : ${this.id} Retrieved successfuly.!`);
      }); 
    });
  }
  clear (){
    this.messageService.clear();
  }
}
