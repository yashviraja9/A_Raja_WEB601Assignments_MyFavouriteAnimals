//import { ReturnStatement } from '@angular/compiler';
import { Animals } from 'src/app/helper-files/content-interface';

export class AnimalsList {
    // static animalCount = 0;
     _animals: Animals[];

    constructor() {
        this._animals = []; //initial array
        //this._animals[0] = animal;
        // this.increaseCount();
    }

    get animals(): Animals[] {
        return this._animals;
    }

    addAnimals(newAnimals: Animals) {
        this.animals.push(newAnimals);
    }

    get lengthOfAnimals() {
        return this._animals.length;
      }
    
    // increaseCount() {
    //     return ++AnimalsList.animalCount;
    // }
    
    outputAnimals(id:number): string {
        // return '<div> Title: ' + this.animals[id].title + '<h1></br>',
        // 'Description: ' + this.animals[id].description + '<h1></br></div>';

        return `<div>
                <h1>Title: ${this.animals[id].title}</h1></br>
                <p><b>Description:</b> ${this.animals[id].description}</p></br>
                <p>Creator: ${this.animals[id].creator}</p></br>
                <img src="${this.animals[id].imgURL}" width="500" height="350"/>
                <p>Type: ${this.animals[id].type}</p></br>
            </div>`;
    }
}