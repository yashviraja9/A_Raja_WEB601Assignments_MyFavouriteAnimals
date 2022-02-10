import { Component, Input, OnInit } from '@angular/core';
import { Animals } from '../helper-files/content-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() animals?: Animals;
  
  constructor() { 
    this.animals = { id: 0, title: '', description: '', creator : '', imgURL: '' };
  }

  displayAnimals() {
    console.log("Animal Id: " + this.animals?.id + "\nTitle: " + this.animals?.title );
  }

  ngOnInit(): void {
  }

}
