import { Component,Input, OnInit } from '@angular/core';
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
        description: "Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated.",
        creator: "God",
        imgURL: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d",
        type: "Mammal",
        tags: ["Loyal","SenseOfSmell"]
      },
      {
        id: 2,
        title: "Tiger",
        description: "The tiger is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside.",
        creator: "God",
        imgURL: "https://cdn.britannica.com/40/75640-050-F894DD85/tiger-Siberian.jpg",
        type: "Mammalia",
        tags: ["lLargestMember", "Strong", "Powerful"]
      },
      {
        id: 3,
        title: "Cat",
        description: "A cat is a furry animal that has a long tail and sharp claws. sCats are often kept as pets. Cats are lions, tigers, and other wild animals in the same family.",
        creator: "God",
        imgURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg",
        tags: ["DomesticSpecies","SharpEyes"]
      },
      {
        id: 4,
        title: "Elephant",
        description: "Elephants are the largest existing land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant.",
        creator: "God",
        imgURL: "https://thumbs.dreamstime.com/b/african-elephant-isolated-large-white-background-91136393.jpg",
        tags: ["LongTrunk","ColumnarLegs","BigFlatEars"]
      },
      {
        id: 5,
        title: "Monkey",
        description: "Monkey is a common name that may refer to most mammals of the infraorder Simiiformes, also known as the simians.",
        creator: "God",
        imgURL: "https://images.unsplash.com/flagged/photo-1566127992631-137a642a90f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
        type: "Mammalia"
      },
      {
        id: 6,
        title: "Horse",
        description: "The horse is a domesticated, one-toed, hoofed mammal. It belongs to the taxonomic family Equidae and is one of two extant subspecies of Equus ferus.",
        creator: "God",
        // imgURL: "https://cdn.britannica.com/96/1296-050-4A65097D/gelding-bay-coat.jpg",
        type: "Mammal"
      },
      {
        id: 7,
        title: "Parrot",
        description: "The parrot is a very fascinating bird. It comprises a strong curved bill with an upright stance along with strong legs and clawed zygodactyl feet.",
        creator: "God",
        imgURL: "https://images.unsplash.com/photo-1618281377501-88c2328cbb9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJvYnxlbnwwfHwwfHw%3D&w=1000&q=80",
        type: "Bird",
        tags: ["Colourful","Sociable","LongLivedCreature"]
      }
    ];
  }

  ngOnInit(): void {
  }

  text?:string;

  searchAnimalName(animalName:string):any {
    
    for(let i = 0; i < this.arrayOfAnimals.length; i++) 
    {
      if (animalName.toLocaleLowerCase() == this.arrayOfAnimals[i].title.toLocaleLowerCase()) {
        this.text = 'Animal exist in the list !';
        console.log('exist');
        return [this.text];
      } 
      else  {
        this.text = 'Animal does not exist in the list !';
        console.log('Does not exist');
      }      
    }
  }

  addAnimalToList(newAnimalFromChild: Animals) {
    console.log("Old array Values: ", this.arrayOfAnimals);
    this.arrayOfAnimals.push(newAnimalFromChild);
    this.arrayOfAnimals = [...this.arrayOfAnimals];
  }
}
