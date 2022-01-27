import { Animals } from 'src/app/helper-files/content-interface';

class AnimalsList {
    static animalCount = 0;
    private _animals: Animals[];

    constructor(animal: Animals) {
        this._animals = []; //initial array
        this._animals[0] = animal;
        this.increaseCount();
    }

    get animals(): Animals[] {
        return this._animals;
    }
    set animals(newAnimals: Animals[]) {
        this._animals = newAnimals;
    }

    increaseCount() {
        return ++AnimalsList.animalCount;
    }
}