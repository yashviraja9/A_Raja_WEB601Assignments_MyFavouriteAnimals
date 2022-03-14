import { Component,Input, OnInit } from '@angular/core';
import { Animals } from '../helper-files/content-interface';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  arrayOfAnimals : Animals[]; 

  constructor(private AnimalService: AnimalService) { 
    this.arrayOfAnimals = [];
  }

  ngOnInit(): void {
    this.AnimalService.getContentObs().subscribe(animalsArray => this.arrayOfAnimals = animalsArray);
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
}