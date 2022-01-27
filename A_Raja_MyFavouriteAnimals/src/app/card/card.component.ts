import { Component, OnInit } from '@angular/core';
import { Animals } from 'src/app/helper-files/content-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  dog: Animals;

  constructor() { 
    this.dog = {
      id: 1,
      title: "Dog",
      description: "Dogs are domesticated mammals, not natural wild animals",
      creator: "God",
      imgURL: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d",
      type: "mammals"
    };
  }

  ngOnInit(): void {
  }

}
