import { Component, Input, OnInit } from '@angular/core';
import { Animals } from './helper-files/content-interface';
import { AnimalService } from './services/animal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'A_Raja_MyFavouriteAnimals';
  getOneAnimal: any;
  arrayOfAnimals!: Animals[]; 
    
  constructor(private AnimalService : AnimalService) { 
  }

  ngOnInit(): void {
  }

  functionCall(id:any) {
    this.AnimalService.getOneContent(id).subscribe((getContent: any) => this.getOneAnimal = getContent);
  }

}
