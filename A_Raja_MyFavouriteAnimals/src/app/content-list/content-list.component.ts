import { Component,Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Animals } from '../helper-files/content-interface';
import { ModifyContentComponent } from '../modify-content/modify-content.component';
import { AnimalService } from '../services/animal.service';
import { MessageService } from '../services/message.service';
import {MatDividerModule} from '@angular/material/divider';

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
    this.getAnimalFromServer();
  }

  addAnimalToList(newAnimalFromChild: Animals): void {
    this.AnimalService.addContent(newAnimalFromChild).subscribe(newContentFromServer => {
      console.log("New content from server: ", newContentFromServer);
      this.arrayOfAnimals.push(newContentFromServer);
      this.arrayOfAnimals = [...this.arrayOfAnimals];
    });
  }

  // updateAnimalInList(contentItem: Animals): void {  
  //   this.AnimalService.updateContent(contentItem).subscribe(() => {
  //     console.log("Content updated successfully");
  //     this.getAnimalFromServer();
  //   });
  // }

  getAnimalFromServer(): void{
    this.AnimalService.getContent().subscribe(animalArray => this.arrayOfAnimals = animalArray);
  }
}
