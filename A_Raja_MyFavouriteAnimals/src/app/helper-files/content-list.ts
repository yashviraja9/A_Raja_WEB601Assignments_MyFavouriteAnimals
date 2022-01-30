import { Animals } from '../helper-files/content-interface';

export class AnimalsList {
     _animals: Animals[];

    constructor() {
        this._animals = []; //initial array
    }

    get animals(): Animals[] {
        return this._animals;
    }

    addAnimals(newAnimals: Animals) {
        this.animals.push(newAnimals);
    }

    lengthOfAnimals() {
        return this._animals.length;
    }
    
    outputAnimals(id:number): string {
        if(id >= this.lengthOfAnimals()){
            return 'No records found at index ' +id +'..!!';
        }
        else {
            return `<div>
                <h2>Title: ${this.animals[id].title}</h2></br>
                <p><b>Description:</b> ${this.animals[id].description}</p></br>
                <p><b>Creator:</b> ${this.animals[id].creator}</p></br>
                <img src="${this.animals[id].imgURL}" width="500" height="350"/>
                <p><b>Type:</b> ${this.animals[id].type}</p></br>
            </div>`;
        }
    }
}