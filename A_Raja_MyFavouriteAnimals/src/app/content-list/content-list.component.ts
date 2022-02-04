import { Component, OnInit } from '@angular/core';
import { Animals } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  arrayOfAnimals : Animals[]; 

  constructor() { 

    this.arrayOfAnimals = [
      {
        id: 1,
        title: "Dog",
        description: "Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. </br> They have been bred by humans for a long time, and were the first animals ever to be domesticated.",
        creator: "God",
        imgURL: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d",
        type: "mammals"
      },
      {
        id: 2,
        title: "Tiger",
        description: "The tiger is the largest living cat species and a member of the genus Panthera. </br> It is most recognisable for its dark vertical stripes on orange fur with a white underside.",
        creator: "God",
        imgURL: "https://cdn.britannica.com/40/75640-050-F894DD85/tiger-Siberian.jpg",
        type: "Mammalia"
      },
      {
        id: 3,
        title: "Cat",
        description: "A cat is a furry animal that has a long tail and sharp claws. </br> Cats are often kept as pets. Cats are lions, tigers, and other wild animals in the same family.",
        creator: "God",
        imgURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg",
        type: "Mammalia"
      }
    ];
  }

  displayAnimals(animal:any) {

    console.log("Animal Id: " + animal.id + "Title: " + animal.title );
  }

  ngOnInit(): void {
  }

}