import { Component, Input, OnInit } from '@angular/core';
import { Animals } from '../helper-files/content-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  // dog: Animals;
  // tiger: Animals;
  // cat: Animals;

  @Input() animals?: Animals;
  
  constructor() { 

  }

  displayAnimals() {
    console.log("Animal Id: " + this.animals?.id + "\nTitle: " + this.animals?.title );
  }

  ngOnInit(): void {
  }

}
